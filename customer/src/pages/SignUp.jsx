import { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import backgroundImage from "./images/vr.jpg"
import OAuth from '../components/OAuth';

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!formData || Object.keys(formData).length === 0 || Object.keys(formData).length === 1 || Object.keys(formData).length === 2 ) {
      alert("Please fill the details");
      return;
    }
    const res=await fetch('/api/auth/signup',
    {
      method:'POST',
      headers:{
        'content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }
    );
    const data=await res.json();
    console.log(data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/sign-in';
    }, 2000); 
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <div
      className="bg-cover bg-bottom min-h-screen flex items-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
         backgroundPosition: '10% 70%',
      }}
    >
      <div className="max-w-lg max-h-lg mx-auto p-8 ml-14 mt-14 backdrop-blur-md rounded-3xl border shadow-2xl ">
        <h2 className="text-3xl text-white text-center font-semibold my-7">
          Create Account
        </h2>
        <form >
          <div className="mb-4 ">
            <div className="flex items-center  rounded-lg p-2 w-full hover:scale-110 transform transition duration-500">
              <AiOutlineUser className="text-white mr-2" />
              <input
                type="text"
                placeholder="Username"
                className="border p-2 bg-slate-100 rounded-3xl w-full"
                id="username"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center  rounded-lg p-2  hover:scale-110 transform transition duration-500">
              <AiOutlineMail className="text-white mr-2" />
              <input
                type="email"
                placeholder="E-mail"
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
                placeholder="Password"
                className="border p-2 bg-slate-100 rounded-3xl w-full"
                id="password"
                onChange={handleChange}
              />
            </div>
          </div>

          <button onClick={handleSignUp}
            className={`bg-orange-500 text-white p-2 rounded-2xl w-full hover:opacity-70${
              loading ? "" : ""
            }`}
            disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>

          <OAuth />
        </form>
        <div className="text-white flex gap-2 mt-5">
          <p>Do you have an account?</p>
          <Link to="/sign-in">
            <span className="text-blue-700">Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
