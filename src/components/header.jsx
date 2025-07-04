import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  async function handleSignOut() {
    try {
      await signOut(auth);
      console.log("Signed out successfully");
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <header className="bg-indigo-700 shadow-lg py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="logo.png" alt="Logo" className="h-8 w-8" />
        <h1 className="text-2xl font-bold text-white tracking-wide">FinanciFY</h1>
      </div>

      <button
        onClick={handleSignOut}
        className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition"
      >
        Sign Out
      </button>
    </header>
  );
}
