import React, { useContext, useState } from "react";
import { AuthContex } from "../Contex/AuthContex";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router";

const Login = () => {
  const { loginWithEmail, loginWithGoogle, loading } = useContext(AuthContex);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      toast.success("Login successful!");
      navigate(redirect, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Login with Google successful!");
      navigate(redirect, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-green-100 p-5">
      {loading && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="w-20 h-20 border-8 border-t-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      <div className="max-w-md w-full  bg-linear-to-b from-white to-[#e6f9ec] rounded-3xl p-8 border-4 border-white shadow-[0_30px_30px_-20px_rgba(133,189,215,0.88)] relative z-10">
        <h2 className="text-center text-3xl font-extrabold text-green-600">
          Sign In
        </h2>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="email-input"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-5 py-3 rounded-2xl bg-white border-transparent shadow-[0_10px_10px_-5px_#cff0ff] focus:border-[#12B1D1] focus:outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password-input"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-5 py-3 rounded-2xl bg-white border-transparent shadow-[0_10px_10px_-5px_#cff0ff] focus:border-[#12B1D1] focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-5 py-3 rounded-2xl  bg-linear-to-r from-[#16a34a] to-[#0e7a32] text-white font-bold shadow-md hover:scale-105 transform transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-500">Or Sign in with</span>
          <div className="mt-3 flex justify-center gap-3">
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full py-3 rounded-2xl bg-linear-to-r from-[#16a34a] to-[#0e7a32] text-white font-bold shadow-md hover:scale-105 transform transition-transform flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{loading ? "Please wait..." : "Continue with Google"}</span>
            </button>
          </div>
        </div>

        <div className="mt-5 text-center">
          <a href="#" className="text-sm text-green-600 hover:underline">
            Learn user licence agreement
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
