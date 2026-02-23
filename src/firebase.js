import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, setDoc, deleteDoc, query, orderBy, limit, doc, updateDoc, where, increment, serverTimestamp } from "firebase/firestore";
import { getAuth, signInAnonymously, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi3w_Wstp5MR_33_CJaQPAbVMhs3KSxfs",
  authDomain: "wanderly-49dd6.firebaseapp.com",
  projectId: "wanderly-49dd6",
  storageBucket: "wanderly-49dd6.firebasestorage.app",
  messagingSenderId: "567520632562",
  appId: "1:567520632562:web:ca45c5694ce56ffa2afa6b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// --- AUTH ---
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function registerWithEmail(email, password) {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return { uid: result.user.uid, error: null };
  } catch (e) {
    return { uid: null, error: e.code === "auth/email-already-in-use" ? "Bu email zaten kayıtlı." : e.code === "auth/weak-password" ? "Şifre en az 6 karakter olmalı." : "Kayıt hatası: " + e.message };
  }
}

export async function loginWithEmail(email, password) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { uid: result.user.uid, error: null };
  } catch (e) {
    return { uid: null, error: e.code === "auth/user-not-found" || e.code === "auth/wrong-password" || e.code === "auth/invalid-credential" ? "Email veya şifre hatalı." : "Giriş hatası: " + e.message };
  }
}

export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return { uid: result.user.uid, email: result.user.email, displayName: result.user.displayName, error: null };
  } catch (e) {
    return { uid: null, error: "Google giriş hatası." };
  }
}

export async function logoutUser() {
  try { await signOut(auth); return true; } catch { return false; }
}

export function getCurrentUid() {
  return auth.currentUser?.uid || null;
}

// --- USER PROFILE ---
export async function checkUsernameAvailable(username) {
  try {
    const q = query(collection(db, "users"), where("usernameLower", "==", username.toLowerCase()));
    const snap = await getDocs(q);
    return snap.empty;
  } catch { return false; }
}

export async function createUserProfile(uid, { username, displayName, avatar }) {
  try {
    const available = await checkUsernameAvailable(username);
    if (!available) return { error: "Bu kullanıcı adı alınmış." };
    await setDoc(doc(db, "users", uid), {
      username,
      usernameLower: username.toLowerCase(),
      displayName: displayName || username,
      avatar: avatar || null,
      createdAt: serverTimestamp()
    });
    return { error: null };
  } catch (e) {
    return { error: "Profil oluşturma hatası." };
  }
}

export async function getUserProfile(uid) {
  try {
    const snap = await getDoc(doc(db, "users", uid));
    if (snap.exists()) return { id: snap.id, ...snap.data() };
    return null;
  } catch { return null; }
}

export async function updateUserProfile(uid, data) {
  try {
    await updateDoc(doc(db, "users", uid), data);
    return true;
  } catch { return false; }
}

// --- POSTS ---
export async function shareAdventure({ uid, username, displayName, avatar, title, category, note, photo, isLocation }) {
  try {
    const photoData = photo && photo.length < 500000 ? photo : null;
    await addDoc(collection(db, "posts"), {
      uid, username, displayName, avatar,
      title, category,
      note: note || "",
      photo: photoData,
      isLocation: isLocation || false,
      likes: 0, likedBy: [],
      createdAt: serverTimestamp()
    });
    return true;
  } catch { return false; }
}

export async function getPosts(maxPosts = 30) {
  try {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), limit(maxPosts));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch { return []; }
}

export async function toggleLikePost(postId, uid) {
  try {
    const postRef = doc(db, "posts", postId);
    const snap = await getDoc(postRef);
    if (!snap.exists()) return;
    const data = snap.data();
    const likedBy = data.likedBy || [];
    if (likedBy.includes(uid)) {
      await updateDoc(postRef, { likes: increment(-1), likedBy: likedBy.filter(id => id !== uid) });
    } else {
      await updateDoc(postRef, { likes: increment(1), likedBy: [...likedBy, uid] });
    }
  } catch {}
}

// --- COMMENTS ---
export async function addCommentToPost(postId, { uid, username, displayName, avatar, text }) {
  try {
    await addDoc(collection(db, "posts", postId, "comments"), {
      uid, username, displayName, avatar,
      text, createdAt: serverTimestamp()
    });
    return true;
  } catch { return false; }
}

export async function getComments(postId) {
  try {
    const q = query(collection(db, "posts", postId, "comments"), orderBy("createdAt", "asc"));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch { return []; }
}

export async function deleteComment(postId, commentId) {
  try {
    await deleteDoc(doc(db, "posts", postId, "comments", commentId));
    return true;
  } catch { return false; }
}

export async function deletePost(postId) {
  try {
    await deleteDoc(doc(db, "posts", postId));
    return true;
  } catch { return false; }
}

// --- DM / MESSAGING ---
export async function getOrCreateConversation(uid1, uid2) {
  try {
    const convId = [uid1, uid2].sort().join("_");
    const convRef = doc(db, "conversations", convId);
    const snap = await getDoc(convRef);
    if (!snap.exists()) {
      await setDoc(convRef, { participants: [uid1, uid2], createdAt: serverTimestamp(), lastMessage: null, lastMessageAt: serverTimestamp() });
    }
    return convId;
  } catch { return null; }
}

export async function sendMessage(convId, { uid, text }) {
  try {
    await addDoc(collection(db, "conversations", convId, "messages"), {
      uid, text, createdAt: serverTimestamp()
    });
    await updateDoc(doc(db, "conversations", convId), { lastMessage: text, lastMessageAt: serverTimestamp() });
    return true;
  } catch { return false; }
}

export async function getMessages(convId, maxMessages = 50) {
  try {
    const q = query(collection(db, "conversations", convId, "messages"), orderBy("createdAt", "asc"), limit(maxMessages));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch { return []; }
}

export async function getConversations(uid) {
  try {
    const q = query(collection(db, "conversations"), where("participants", "array-contains", uid), orderBy("lastMessageAt", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch { return []; }
}

export async function getUserProfileByUsername(username) {
  try {
    const q = query(collection(db, "users"), where("usernameLower", "==", username.toLowerCase()));
    const snap = await getDocs(q);
    if (!snap.empty) return { id: snap.docs[0].id, ...snap.docs[0].data() };
    return null;
  } catch { return null; }
}

export async function getUserPosts(uid, maxPosts = 20) {
  try {
    const q = query(collection(db, "posts"), where("uid", "==", uid), orderBy("createdAt", "desc"), limit(maxPosts));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch { return []; }
}

// --- FRIEND SYSTEM ---
export async function sendFriendRequest(fromUid, toUid) {
  try {
    const reqId = [fromUid, toUid].sort().join("_");
    const reqRef = doc(db, "friendRequests", reqId);
    const snap = await getDoc(reqRef);
    if (snap.exists()) return { error: "already_sent" };
    // Check if already friends
    const friendRef = doc(db, "friends", reqId);
    const friendSnap = await getDoc(friendRef);
    if (friendSnap.exists()) return { error: "already_friends" };
    await setDoc(reqRef, { from: fromUid, to: toUid, status: "pending", createdAt: serverTimestamp() });
    return { success: true };
  } catch (e) { return { error: e.message }; }
}

export async function getPendingRequests(uid) {
  try {
    const q = query(collection(db, "friendRequests"), where("to", "==", uid), where("status", "==", "pending"));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch { return []; }
}

export async function getSentRequests(uid) {
  try {
    const q = query(collection(db, "friendRequests"), where("from", "==", uid), where("status", "==", "pending"));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch { return []; }
}

export async function acceptFriendRequest(reqId, fromUid, toUid) {
  try {
    const friendId = [fromUid, toUid].sort().join("_");
    await setDoc(doc(db, "friends", friendId), { users: [fromUid, toUid], createdAt: serverTimestamp() });
    await updateDoc(doc(db, "friendRequests", reqId), { status: "accepted" });
    return { success: true };
  } catch (e) { return { error: e.message }; }
}

export async function rejectFriendRequest(reqId) {
  try {
    await updateDoc(doc(db, "friendRequests", reqId), { status: "rejected" });
    return { success: true };
  } catch (e) { return { error: e.message }; }
}

export async function removeFriend(uid1, uid2) {
  try {
    const friendId = [uid1, uid2].sort().join("_");
    await deleteDoc(doc(db, "friends", friendId));
    return { success: true };
  } catch (e) { return { error: e.message }; }
}

export async function getFriends(uid) {
  try {
    const q = query(collection(db, "friends"), where("users", "array-contains", uid));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch { return []; }
}

export async function searchUsers(searchTerm, maxResults = 10) {
  try {
    const lower = searchTerm.toLowerCase();
    const q = query(collection(db, "users"), where("usernameLower", ">=", lower), where("usernameLower", "<=", lower + "\uf8ff"), limit(maxResults));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch { return []; }
}
