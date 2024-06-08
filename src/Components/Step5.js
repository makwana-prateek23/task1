import React from "react";

const Step5 = ({ formData, handleChange, nextStep, errors }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3 text-center">Your Profile</h2>
      <p className="text-center text-sm text-gray-600 mb-6 ">
        Enter the login information for your account.You will <br />
        be able to create additional users after registering.
      </p>
      <form className="w-full px-8">
        <div className="grid grid-cols-2 ">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 ">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Input Your First Name"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-2 py-2 border rounded-md"
              placeholder="Input Your Last Name"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Input Your Email"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Input Your Phone Number"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Create Password"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Confirm Your Password"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={nextStep}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Step5;
