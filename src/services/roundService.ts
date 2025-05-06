import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { Round } from "../types/roundTypes";

export const getRounds = async (): Promise<Round[]> => {
  try {
    const snapshot = await getDocs(collection(db, "rounds"));
    const rounds: Round[] = snapshot.docs.map((doc) => ({
      ...(doc.data() as Omit<Round, "id">),
      id: doc.id,
    }));
    return rounds;
  } catch (error) {
    console.error("Error fetching rounds:", error);
    throw error;
  }
};
