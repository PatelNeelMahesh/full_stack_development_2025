// app/api/companies/search/route.js
import clientPromise from '../../../lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const name = url.searchParams.get('name');
    const location = url.searchParams.get('location');
    const skill = url.searchParams.get('skill');

    const client = await clientPromise;
    const db = client.db("workbook");          
    const coll = db.collection("companies");  

    const filter = {};
    if (name) filter.name = { $regex: new RegExp(name, 'i') };
    if (location) filter.location = { $regex: new RegExp(location, 'i') };
    if (skill) filter['hiringCriteria.skills'] = { $in: [skill] };

    const items = await coll.find(filter).limit(50).toArray();
    return NextResponse.json({ count: items.length, items }, { status: 200 });
  } catch (err) {
    console.error('GET /api/companies/search error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
