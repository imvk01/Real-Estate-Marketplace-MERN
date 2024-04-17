import backgroundImage from "./images/show.jpg";
import { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (
      !formData ||
      Object.keys(formData).length === 0 ||
      Object.keys(formData).length === 1
    ) {
      alert("Please fill the details");
      return;
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="max-w-lg max-h-lg mx-auto p-8 ml-14 backdrop-blur-md rounded-3xl border shadow-2xl ">
        <h2 className="text-3xl text-white text-center font-semibold my-7">
          Sign In
        </h2>
        <form>
          <div className="mb-4 "></div>
          <div className="mb-4">
            <div className="flex items-center  rounded-lg p-2  hover:scale-110 transform transition duration-500">
              <AiOutlineMail className="text-white mr-2" />
              <input
                type="email"
                placeholder=" Email Address"
                className="border p-2 bg-slate-100 rounded-3xl w-full"
                id="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center  rounded-lg p-2  hover:scale-110 transform transition duration-500">
              <AiOutlineLock className="text-white mr-2 text" />
              <input
                type="password"
                placeholder=" Password"
                className="border p-2 bg-slate-100 rounded-3xl w-full"
                id="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            onClick={handleSignIn}
            className={`bg-blue-500 text-white p-2 rounded-2xl w-full hover:opacity-70${
              loading ? "" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
         
        </form>
        <div className="text-white flex gap-2 mt-5">
          <p>Don't have an account?</p>
          <Link to="/sign-up">
            <span className="text-blue-700">Sign Up</span>
          </Link>
        </div>
        {error && <p className="text-red-500 font-semibold mt-3">{error}</p>}
      </div>
    </div>
  );
}
