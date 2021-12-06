import { connectToDatabase } from '../../../../../lib/mongodb';
import Link from 'next/link';
import { ObjectId } from 'mongodb';

export default function handler(req, res) {
  switch (req.method) {
    case 'GET': {
      return getProfesional(req, res);
    }
    case 'PUT': {
      return updateProfesional(req, res);
    }
  }
}

async function updateProfesional(req, res) {
  try {
    let { db } = await connectToDatabase();
    console.log('the req body', req.body);
    await db.collection('profesionales').updateOne(
      { _id: new ObjectId(req.query.id) },
      {
        $set: {
          center: req.body.center,
          region: req.body.region,
          comuna: req.body.comuna,
        },
      }
    );
    res.json({ message: 'Profesional updated successfully' });
  } catch (error) {
    console.log('there was an error', error);
    res.json({
      message: error.message,
      success: false,
    });
  }
}
