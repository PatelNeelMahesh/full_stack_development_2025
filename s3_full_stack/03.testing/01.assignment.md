# 6 Basic Challenges 

---

## 1. **Pagination Challenge**

* **Task:** Call `GET /api/companies?limit=5&skip=5` and confirm the API returns the “second page” of results (5 documents, skipping the first 5).
* **Goal:** Understand how `limit` and `skip` work together.
* **Extra:** Write a Playwright test to assert that:

  * Page 1 + Page 2 items have no overlap.
  * `count` equals 5 for both calls (if DB has >= 10 docs).

---

## 2. **Search by Location**

* **Task:** Use `GET /api/companies/search?location=Hyderabad` and list all companies located in Hyderabad.
* **Goal:** Practice using the **regex-based search** built into your API.
* **Extra:** Compare results with MongoDB Compass or `mongosh` (`db.companies.find({ location: "Hyderabad" })`) to confirm accuracy.

---

## 3. **Search by Skill**

* **Task:** Call `GET /api/companies?skill=DSA` and verify every returned company has `"DSA"` in its `hiringCriteria.skills`.
* **Goal:** Explore **nested field queries** (`hiringCriteria.skills`) through the API.
* **Extra:** Write a Playwright test that fails if any returned company doesn’t include `"DSA"` in its skills array.

---

## 4. **Get Company by ID**

* **Task:**

  * Call `GET /api/companies?limit=1` to get one `_id`.
  * Then call `GET /api/companies/:id` with that `_id`.
  * Verify the same document is returned.
* **Goal:** Understand how MongoDB `_id` works in URLs.
* **Extra:** Write a negative test with an invalid id (`/api/companies/123`) → expect 400.

---

## 5. **Count All Companies**

* **Task:** Call `GET /api/companies?limit=0` (returns all).
* **Goal:** Count how many documents exist in the DB and compare it with the total reported in Mongo Atlas (should match your 19).
* **Extra:** Update the route to return a `total` field and confirm it equals `19`.

---

## 6. **Filter by Multiple Conditions**

* **Task:** Call `GET /api/companies?name=Microsoft&location=Hyderabad`.
* **Goal:** Verify the filter applies both conditions (case-insensitive name + location).
* **Extra:** Extend your API (or test it) to check if zero results appear when filters contradict each other (e.g., `name=Microsoft&location=Delhi`).

---