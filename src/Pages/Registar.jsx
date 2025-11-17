import React, { useContext } from "react";
import { AuthContex } from "../Contex/AuthContex";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Registar = () => {
  const navigate = useNavigate();
  const { registerWithEmail, loginWithGoogle, updateUserProfile, loading } =
    useContext(AuthContex);

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include uppercase and lowercase letters."
      );
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    registerWithEmail(email, password)
      .then(() => {
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Signup successfully!");
            navigate("/");
          })
          .catch((error) => {
            toast.error("Profile update failed: " + error.message);
          });
      })
      .catch((error) => {
        if (error.code === "email-already-in-use") {
          toast.error(
            "This email is already registered. Please login instead!"
          );
        } else {
          toast.error("Registration failed: " + error.message);
        }
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        if (result.user) {
          if (
            result.user.metadata.creationTime ===
            result.user.metadata.lastSignInTime
          ) {
            toast.success("Sign Up successfully!");
          } else {
            toast.error(
              "This Google account is already registered! Please login instead."
            );
          }
          navigate("/");
        }
      })
      .catch((error) => {
        if (error.code === "account-exists-with-different-credential") {
          toast.error(
            "This Google account is already linked with another sign-in method! Please login using that method."
          );
        } else if (error.code === "email-already-in-use") {
          toast.error(
            "This email is already registered! Please login instead of signing up again."
          );
        } else {
          toast.error(error.message);
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-5">
      <div className="max-w-md w-full bg-gradient-to-b from-white to-[#e6f9ec]
 rounded-3xl p-8 border-4 border-white shadow-[0_30px_30px_-20px_rgba(133,189,215,0.88)]">
        <h2 className="text-center text-3xl font-extrabold text-green-600">
          Sign Up
        </h2>

        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="name-input"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name-input"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="mt-1 w-full px-5 py-3 rounded-2xl bg-white border-transparent shadow-[0_10px_10px_-5px_#cff0ff] focus:border-[#12B1D1] focus:outline-none"
              disabled={loading}
            />
          </div>

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
              name="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-5 py-3 rounded-2xl bg-white border-transparent shadow-[0_10px_10px_-5px_#cff0ff] focus:border-[#12B1D1] focus:outline-none"
              disabled={loading}
            />
          </div>

          <div>
            <label
              htmlFor="photo-input"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              id="photo-input"
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="mt-1 w-full px-5 py-3 rounded-2xl bg-white border-transparent shadow-[0_10px_10px_-5px_#cff0ff] focus:border-[#12B1D1] focus:outline-none"
              disabled={loading}
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
              name="password"
              placeholder="Enter password"
              className="mt-1 w-full px-5 py-3 rounded-2xl bg-white border-transparent shadow-[0_10px_10px_-5px_#cff0ff] focus:border-[#12B1D1] focus:outline-none"
              disabled={loading}
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password-input"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password-input"
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              className="mt-1 w-full px-5 py-3 rounded-2xl bg-white border-transparent shadow-[0_10px_10px_-5px_#cff0ff] focus:border-[#12B1D1] focus:outline-none"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-5 py-3 rounded-2xl bg-gradient-to-r from-[#16a34a] to-[#0e7a32]

 text-white font-bold shadow-[0_20px_10px_-15px_rgba(133,189,215,0.7)] hover:scale-105 transition-transform flex items-center justify-center gap-2 ${
   loading ? "opacity-50 cursor-not-allowed" : ""
 }`}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-500">Or Sign in with</span>
          <div className="mt-3 flex justify-center gap-3">
            <button
              onClick={handleGoogleLogin}
              type="button"
              disabled={loading}
              className={`w-full mt-5 py-3 rounded-2xl bg-gradient-to-r from-[#16a34a] to-[#0e7a32]

 text-white font-bold shadow-[0_20px_10px_-15px_rgba(133,189,215,0.7)] hover:scale-105 transition-transform flex items-center justify-center gap-3 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Loading..." : "Continue with Google"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registar;
