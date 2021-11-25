import { connectToDatabase } from '../../../lib/mongodb';

export default async function (req, res) {
  switch (req.method) {
    case 'GET': {
      return getProfessionals(req, res);
    }
  }
}

async function getProfessionals(req, res) {
  try {
    let { db } = await connectToDatabase();
    let profesionales = await db.collection('profesionales').find({}).toArray();
    return res.json({
      message: JSON.parse(JSON.stringify(profesionales)),
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: error.message,
      success: false,
    });
  }
}
