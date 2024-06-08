import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTimes,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";

const Step6 = ({
  formData,
  handleChange,
  prevStep,
  handleSubmit,
  handleFileChange,
  selectedFile,
}) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Business Information
      </h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4 md:flex lg:flex">
          <div className="w-full md:w-1/2 lg:mr-4 mb-4 md:mb-0">
            <label className="block text-gray-700">Brand Name</label>
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Input Your Brand Name"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="block text-gray-700">Brand Type</label>
            <input
              type="text"
              name="brandType"
              value={formData.brandType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Select Type of Your Brand"
            />
          </div>
        </div>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">Street Address</label>
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Input Your Street Address"
            />
          </div>
          <div>
            <label className="block text-gray-700">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Input Zip Code"
            />
          </div>
          <div>
            <label className="block text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Input City"
            />
          </div>
          <div>
            <label className="block text-gray-700">Tax ID Number</label>
            <input
              type="text"
              name="taxIdNumber"
              value={formData.taxIdNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Input Tax ID Number"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Documents</label>
          <div className="flex items-center">
            <input
              type="file"
              id="documents"
              name="documents"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="documents"
              className="cursor-pointer w-full flex justify-between bg-gray-200 py-2 px-4 rounded-md mr-2">
              <p>Electrically Signs Agreements</p>
              <span className="mr-2">
                {selectedFile ? "File Selected" : "No File Selected"}
                {selectedFile ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mx-2"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mx-2"
                  />
                )}
              </span>
            </label>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="mr-2 bg-blue-400 p-2 rounded-lg"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Documents</label>
          <div className="flex items-center">
            <input
              type="file"
              id="documents"
              name="documents"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="documents"
              className="cursor-pointer w-full flex justify-between bg-gray-200 py-2 px-4 rounded-md mr-2">
              <p>Electrically Signs Agreements</p>
              <span className="mr-2">
                {selectedFile ? "File Selected" : "No File Selected"}
                {selectedFile ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mx-2"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mx-2"
                  />
                )}
              </span>
            </label>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="mr-2 bg-blue-400 p-2 rounded-lg"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Documents</label>
          <div className="flex items-center">
            <input
              type="file"
              id="documents"
              name="documents"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="documents"
              className="cursor-pointer w-full flex justify-between bg-gray-200 py-2 px-4 rounded-md mr-2">
              <p>Electrically Signs Agreements</p>
              <span className="mr-2">
                {selectedFile ? "File Selected" : "No File Selected"}
                {selectedFile ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-green-500 mx-2"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="text-red-500 mx-2"
                  />
                )}
              </span>
            </label>
            <FontAwesomeIcon
              icon={faGreaterThan}
              className="mr-2 bg-blue-400 p-2 rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600">
            Previous Step
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step6;
