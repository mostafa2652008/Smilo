import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { seedProducts, type Product } from "@/lib/products";

const COLLECTION = "products";

function withId(id: string, data: Record<string, unknown>): Product {
  return { id, ...data } as Product;
}

export async function getAllProducts(): Promise<Product[]> {
  const snap = await getDocs(collection(db, COLLECTION));
  return snap.docs.map((d) => withId(d.id, d.data()));
}

export async function getProductById(id: string): Promise<Product | null> {
  const ref = doc(db, COLLECTION, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return withId(snap.id, snap.data());
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const q = query(collection(db, COLLECTION), where("category", "==", category));
  const snap = await getDocs(q);
  return snap.docs.map((d) => withId(d.id, d.data()));
}

export async function createProduct(data: Omit<Product, "id">): Promise<string> {
  const ref = await addDoc(collection(db, COLLECTION), data);
  return ref.id;
}

export async function updateProduct(id: string, data: Partial<Omit<Product, "id">>): Promise<void> {
  await updateDoc(doc(db, COLLECTION, id), data);
}

export async function deleteProduct(id: string): Promise<void> {
  await deleteDoc(doc(db, COLLECTION, id));
}

/**
 * Writes the bundled sample catalog into Firestore. Safe to run once on a
 * fresh project — uses the sample IDs as document IDs, so re-running will
 * just overwrite the same seed documents rather than duplicate them.
 */
export async function seedSampleProducts(): Promise<number> {
  const batch = writeBatch(db);
  for (const { id, ...rest } of seedProducts) {
    batch.set(doc(db, COLLECTION, id), rest);
  }
  await batch.commit();
  return seedProducts.length;
}
