import { connectToDatabase } from '../../../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function (req, res) {
  switch (req.method) {
    case 'GET': {
      return getProfesional(req, res);
    }
    case 'PUT': {
      return updateProfesional(req, res);
    }
  }
}

async function getProfesional(req, res) {
  try {
    let { db } = await connectToDatabase();
    let cursor = await db
      .collection('profesionales')
      .find({ _id: ObjectId(req.query.id) })
      .toArray();
    const profesional = JSON.parse(JSON.stringify(cursor))[0];
    console.log(profesional);
    return res.json({
      message: profesional,
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

async function updateProfesional(req, res) {
  console.log('inside the updateProfesional route', req.query);
  try {
    let { db } = await connectToDatabase();
    await db
      .collection('profesionales')
      .updateOne(
        { _id: new ObjectId(req.query.id) },
        { $set: { published: true } }
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