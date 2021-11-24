import { db } from '../../../lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getProfessionals(req, res);
    case 'POST':
      return newProfessional(req, res);
  }
};

async function getProfessionals(req, res) {
  try {
    const q = query(collection(db, 'profesionales'));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map(x => x.data());
    return res.json({
      message: data,
      success: true,
    });
  } catch (error) {
    console.log('there was an errror', error);
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
