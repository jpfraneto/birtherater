import { connectToDatabase } from '../../../../../lib/mongodb';
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

async function getProfesional(req, res) {
  try {
    let { db } = await connectToDatabase();
    let cursor = await db
      .collection('profesionales')
      .find({ _id: ObjectId(req.query.id) })
      .toArray();
    const profesional = JSON.parse(JSON.stringify(cursor))[0];
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
  try {
    let { db } = await connectToDatabase();
    const { grade, review, author } = req.body;
    const newReview = {
      grade: grade.replace(0, ' '),
      review: encodeURIComponent(review),
      author,
    };
    await db
      .collection('profesionales')
      .updateOne(
        { _id: new ObjectId(req.query.id) },
        { $push: { reviews: newReview } }
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

// async function updateProfesional(req, res) {
//   try {
//     let { db } = await connectToDatabase();
//     await db
//       .collection('profesionales')
//       .aggregate(
//         { _id: new ObjectId(req.query.id) },
//         { $set: { published: true } }
//       );
//     const newReview = {
//       grade: 2,
//       comment: 'Bien penca este wn',
//     };
//     console.log('inside the api, the new review is: ', newReview);
//     // await db.collection('profesionales').aggregate([
//     //   { $match: { _id: new ObjectId(req.query.id) } },
//     //   {
//     //     $addFields: { reviews: { $concatArrays: ['$reviews', [newReview]] } },
//     //   },
//     // ]);
//     console.log('después del await');
//     res.json({ message: 'Profesional updated successfully' });
//   } catch (error) {
//     console.log('there was an error', error);
//     res.json({
//       message: error.message,
//       success: false,
//     });
//   }
// }
