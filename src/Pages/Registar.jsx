import React, { useContext } from "react";
import { AuthContex } from "../Contex/AuthContex";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Registar = () => {
  const navigate = useNavigate();
  const { registerWithEmail, loginWithGoogle, updateUserProfile } =
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
    <div className="min-h-screen flex items-center justify-center bg-[#eef4ff] p-5">
      <div className="max-w-md w-full bg-gradient-to-b from-white to-[#f4f7fb] rounded-3xl p-8 border-4 border-white shadow-[0_30px_30px_-20px_rgba(133,189,215,0.88)]">
        <h2 className="text-center text-3xl font-extrabold text-[#1089d3]">
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
            />
          </div>

          <button
            type="submit"
            className="w-full mt-5 py-3 rounded-2xl bg-gradient-to-r from-[#1093d3] to-[#12b1d1] text-white font-bold shadow-[0_20px_10px_-15px_rgba(133,189,215,0.7)] hover:scale-105 transition-transform"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <span className="text-gray-500">Or Sign in with</span>
          <div className="mt-3 flex justify-center gap-3">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="w-full mt-5 py-3 rounded-2xl bg-gradient-to-r from-[#1093d3] to-[#12b1d1] text-white font-bold shadow-[0_20px_10px_-15px_rgba(133,189,215,0.7)] hover:scale-105 transition-transform flex items-center justify-center gap-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.2em"
                viewBox="0 0 488 512"
                className="inline-block"
                fill="currentColor"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        </div>

        <div className="mt-5 text-center">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Learn user licence agreement
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registar;
