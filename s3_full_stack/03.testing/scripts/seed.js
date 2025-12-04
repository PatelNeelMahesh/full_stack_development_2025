// scripts/seed.js
const { MongoClient } = require('mongodb');

const MONGODB_URI = 'Your mongo url';

const seedDoc = {
  name: "Microsoft",
  location: "Hyderabad",
  salaryBand: { base: 32, bonus: 6, stock: 15 },
  hiringCriteria: { cgpa: 8, skills: ["DSA", "C#", "System Design"], experience: "1-3 years" },
  interviewRounds: [
    { round: 1, type: "OA" },
    { round: 2, type: "Technical" },
    { round: 3, type: "Managerial" },
    { round: 4, type: "HR" }
  ],
  benefits: ["Health Insurance", "Stock Options", "Gym"],
  headcount: 3000
};

async function main() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const db = client.db("workbook");          
    const coll = db.collection("companies");  


    const count = await coll.countDocuments();
    if (count === 0) {
      const r = await coll.insertOne(seedDoc);
      console.log('Seeded workbook with id:', r.insertedId.toString());
    } else {
      console.log('workbook already has documents:', count);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
