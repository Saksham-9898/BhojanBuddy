import { db } from './config';
import { collection, getDocs } from 'firebase/firestore';

async function testFirebaseConnection() {
  try {
    const querySnapshot = await getDocs(collection(db, 'restaurants'));
    console.log('Connected to Firebase successfully!');
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  } catch (error) {
    console.error('Error connecting to Firebase:', error);
  }
}

testFirebaseConnection();
