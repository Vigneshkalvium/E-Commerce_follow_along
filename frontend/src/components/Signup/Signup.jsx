import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import ValidationFormObject from "../../validation";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFileSubmit = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(file);
  };

  const validateFields = () => {
    const nameError = ValidationFormObject.validteName(name);
    const emailError = ValidationFormObject.validteEmail(email);
    const passwordError = ValidationFormObject.validtePass(password);

    const newErrors = {};
    if (nameError !== true) newErrors.name = nameError;
    if (emailError !== true) newErrors.email = emailError;
    if (passwordError !== true) newErrors.password = passwordError;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);

    axios
      .post("http://localhost:8000/api/v2/user/create-user", newForm, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err.response ? err.response.data : err.message));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col justify-center items-center py-12 px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`mt-1 block w-full px-4 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 block w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <input
                type={visible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`block w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer" onClick={() => setVisible(!visible)}>
                {visible ? <AiOutlineEye size={22} /> : <AiOutlineEyeInvisible size={22} />}
              </span>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-block h-10 w-10 rounded-full overflow-hidden border">
              {avatar ? <img src={URL.createObjectURL(avatar)} alt="Avatar" className="h-full w-full object-cover" /> : <RxAvatar className="h-10 w-10 text-gray-500" />}
            </span>
            <label className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
              Upload Avatar
              <input type="file" accept=".jpg,.jpeg,.png" onChange={handleFileSubmit} className="sr-only" />
            </label>
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition">
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
