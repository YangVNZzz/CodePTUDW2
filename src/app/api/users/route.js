import clientPromise from "../../../library/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('shopdb');
    const collection = db.collection('user');

    const data = await collection.find({}).toArray();

    return new Response(JSON.stringify({ data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
