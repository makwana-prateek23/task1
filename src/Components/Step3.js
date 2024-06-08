import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faChalkboardUser,
} from "@fortawesome/free-solid-svg-icons";
const Step3 = ({ formData, handleChange, prevStep, nextStep, errors }) => {
  return (
    <div className="space-y-12 h-4/12">
      <div>
        <p className="text-sm text-gray-700">
          You can also customize this views in settings
        </p>
      </div>

      <div className="flex justify-evenly ">
        <div
          className={`p-4 border rounded-md cursor-pointer ${
            formData.viewType === "list" ? "border-blue-500" : "border-gray-300"
          }`}
          onClick={() =>
            handleChange({ target: { name: "viewType", value: "list" } })
          }>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-6 rounded-md mb-2">
              <FontAwesomeIcon
                icon={faListCheck}
                className="h-12 w-12  text-gray-600"
              />
            </div>
            <span className="text-sm text-gray-700">List</span>
          </div>
        </div>

        <div
          className={`p-4 border rounded-md cursor-pointer ${
            formData.viewType === "board"
              ? "border-blue-500"
              : "border-gray-300"
          }`}
          onClick={() =>
            handleChange({ target: { name: "viewType", value: "board" } })
          }>
          <div className="flex flex-col items-center">
            <div className="bg-gray-200 p-4 rounded-md mb-2">
              <FontAwesomeIcon icon={faChalkboardUser} className="h-16 w-16" />
            </div>
            <span className="text-sm text-gray-700">Board</span>
          </div>
        </div>
      </div>

      {errors.viewType && (
        <span className="text-red-500 text-sm">{errors.viewType}</span>
      )}

      <div className="flex justify-evenly mt-4">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-600">
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;
