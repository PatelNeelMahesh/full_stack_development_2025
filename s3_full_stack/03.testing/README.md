# Next.js (App Router) — Workbook API

A minimal Next.js project (App Router) that exposes three API endpoints backed by a MongoDB `workbook` collection and a Playwright test suite that verifies the API behavior.

This README explains how to seed the database, run the Next.js app, run Playwright tests, and what each test case validates.

---

# Quick overview

* Framework: Next.js (App Router: `app/api/*/route.js`)
* DB: MongoDB (collection `workbook`) — connection string placed in `lib/mongodb.js` and `scripts/seed.js`
* Tests: Playwright (`@playwright/test`) located in `tests/api.spec.js`
* Main routes implemented:

  * `GET /api/companies` — list companies; supports `limit` and `skip`; also accepts `name`, `location`, `skill` as query filters
  * `GET /api/companies/search?name=&location=&skill=` — dedicated search (returns up to 50 matches)
  * `GET /api/companies/:id` — fetch a single company by Mongo `_id`

---

# Files of interest (location)

* `lib/mongodb.js` — Mongo connection helper (direct URI used)
* `app/api/companies/route.js` — list + filter handler
* `app/api/companies/search/route.js` — dedicated search handler
* `app/api/companies/[id]/route.js` — get-by-id handler
* `scripts/seed.js` — one-time seed script that inserts the example document if the collection is empty
* `tests/api.spec.js` — Playwright tests that exercise the three routes
* `playwright.config.js` — Playwright configuration
* `package.json` — scripts (dev, seed, test, etc.)

---

# Before you start

1. Clone or copy the repository into a local folder.
2. Confirm Node.js (v18+) and `npm` are installed locally.

---

# Quick start (one-off instructions)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Seed the database (one-time):

   ```bash
   npm run seed
   ```

   * What this does:

     * Connects to the MongoDB URI present in `scripts/seed.js`.
     * Checks the `workbook` collection count.
     * If empty, inserts a sample document (the Microsoft example).
     * Logs `Seeded workbook with id: <id>` or `workbook already has documents: N`.

3. Start Next.js in development:

   ```bash
   npm run dev
   ```

   * Server runs at `http://localhost:3000` by default.

4. Run Playwright tests:

   ```bash
   npm run test
   ```

   * Playwright uses `baseURL: http://localhost:3000` from `playwright.config.js`.
   * Tests will fail if the Next.js dev server is not running.

5. View Playwright HTML report (optional) after tests run:

   ```bash
   npx playwright show-report
   ```

---

# API endpoints and examples

1. `GET /api/companies`

   * Description: Returns a paginated list of companies.
   * Query params:

     * `limit` (optional, default 10, max 100)
     * `skip` (optional, default 0)
     * `name` (optional, filters by case-insensitive substring)
     * `location` (optional)
     * `skill` (optional, matches values in `hiringCriteria.skills`)
   * Example:

     ```bash
     curl "http://localhost:3000/api/companies?limit=5&skip=0" | jq
     ```

2. `GET /api/companies/search?name=Microsoft`

   * Description: Returns companies matching the search filters (max 50).
   * Example:

     ```bash
     curl "http://localhost:3000/api/companies/search?name=Microsoft" | jq
     ```

3. `GET /api/companies/:id`

   * Description: Returns a single company by Mongo `_id`.
   * Example:

     ```bash
     # get a single ID from the list endpoint and replace <id>
     curl "http://localhost:3000/api/companies/<id>" | jq
     ```

Expected JSON shapes:

* List response:

  ```json
  {
    "count": 1,
    "items": [
      {
        "_id": "68b6ce385cdad745f53cd0c8",
        "name": "Microsoft",
        "location": "Hyderabad",
        "salaryBand": { "base": 32, "bonus": 6, "stock": 15 },
        "hiringCriteria": { "cgpa": 8, "skills": ["DSA","C#","System Design"], "experience": "1-3 years" },
        "interviewRounds": [ ... ],
        "benefits": [ ... ],
        "headcount": 3000
      }
    ]
  }
  ```
* Single document response: the document object (as stored in Mongo), including `_id`.

---

# Playwright test cases (what is validated)

`tests/api.spec.js` contains the test suite. Each test uses Playwright’s `request` fixture to make HTTP calls.

Test cases:

1. **List returns a list**

   * Calls `GET /api/companies`
   * Expects HTTP 200
   * Expects response has `count` and `items` (array) and `count > 0`

2. **Search by name returns Microsoft**

   * Calls `GET /api/companies/search?name=Microsoft`
   * Expects HTTP 200
   * Expects `count > 0`
   * Expects at least one item has `name` containing `microsoft` (case-insensitive)

3. **Get single company by id**

   * Calls `GET /api/companies?limit=1` to fetch one item and extract `_id`
   * Calls `GET /api/companies/:id` with extracted id
   * Expects HTTP 200 and returned document `_id` matches id and document has `name` and `hiringCriteria`

4. **Invalid id returns 400**

   * Calls `GET /api/companies/invalid-id-123`
   * Expects HTTP 400 and a JSON body with `error`

You can extend tests to cover:

* 404 when id is valid but not present
* Query edge cases (empty name, skill not present)
* Pagination behavior (skip and limit)

---

# Troubleshooting

* Tests fail with connection errors:

  * Confirm Next dev server is running (`npm run dev`).
  * Confirm seed completed successfully and the collection has documents.
  * Confirm the hard-coded MongoDB URI is reachable from your network.

* Playwright cannot connect (HTTP 404 / 500):

  * Check `app/api` files are located exactly as in the scaffold:

    * `app/api/companies/route.js`
    * `app/api/companies/search/route.js`
    * `app/api/companies/[id]/route.js`
  * Check terminal where Next dev runs for error traces.

* Timeout issues in CI/local:

  * Increase Playwright timeouts in `playwright.config.js` or ensure the server is fully started before running tests.

---

# Running tests in CI (outline)

1. Install node.
2. Add secret or ephemeral MongoDB URI (preferred) in CI secrets. If you keep the hard-coded URI, ensure CI runner can access the Atlas cluster.
3. Steps:

   * `npm ci`
   * `npm run seed`
   * `npm run build`
   * Start server in background: `npm run start &`
   * `npx playwright test`
   * `npx playwright show-report`
4. Upload or view the Playwright HTML report (`playwright-report` folder).

---

