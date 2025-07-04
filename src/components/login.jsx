import { useState } from "react";
import { toast } from "react-toastify";
import SiteBrand from "./siteBrand.jsx";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../firebase/firebase.js";
import {setDoc,doc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      if (isLogin) {
        // Login flow
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login Successful");
        navigate("/home")
      } else {
        // Register flow
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser
        if(user){
          await setDoc(doc(db,"Users",user.uid),{
            email: user.email,
            name:name
          })

        }

        toast.success("Registration Successful");
      }

    } catch (err) {
      console.error(err);
      toast.error(err.message || "Authentication failed");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 flex items-center justify-center px-4">
      <div className="bg-white/50 backdrop-blur-md shadow-xl rounded-2xl p-8 border border-white/30 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <SiteBrand size="md" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <h2 className="text-2xl text-center font-semibold text-gray-800">
            {isLogin ? "Login" : "Register"}
          </h2>

          {!isLogin && (
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-gray-800"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-gray-800"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-gray-800"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-gray-800"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
          >
            {isLogin ? "Sign In" : "Register"}
          </button>

          <p className="text-sm text-gray-500 text-center">
            {isLogin ? (
              <>
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-indigo-600 hover:underline"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-indigo-600 hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
