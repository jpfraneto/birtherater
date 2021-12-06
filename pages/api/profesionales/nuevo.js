import { connectToDatabase } from '../../../lib/mongodb';

export default function handler(req, res) {
  switch (req.method) {
    case 'POST': {
      return newProfessional(req, res);
    }
  }
}

async function newProfessional(req, res) {
  try {
    let { db } = await connectToDatabase();
    await db.collection('profesionales').insertOne(req.body);
    return res.json({
      message: 'Se agregó el profesional a la db',
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
}
