import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserFriends,
  faUserShield,
  faUserTag,
} from "@fortawesome/free-solid-svg-icons";

const Step4 = ({ formData, handleChange, prevStep, handleSubmit, errors }) => {
  const handlePermissionChange = (permission) => {
    handleChange({
      target: { name: "managePermission", value: permission },
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-gray-700">
          Don't panic — You can also customize these permissions in settings
        </p>
      </div>

      <div className="space-y-2">
        <div
          className={`p-4 border rounded-md cursor-pointer ${
            formData.managePermission === "everyone"
              ? "border-blue-500"
              : "border-gray-300"
          }`}
          onClick={() => handlePermissionChange("everyone")}>
          <div className="flex items-center">
            <div className="bg-gray-200 p-2 rounded-md mr-2">
              <FontAwesomeIcon
                icon={faUserFriends}
                className="h-6 w-6 text-gray-600"
              />
            </div>
            <div>
              <span className="text-sm font-bold text-gray-700">Everyone</span>
              <p className="text-xs text-gray-600">
                All users can now see it, but guests cannot access the projects.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`p-4 border rounded-md cursor-pointer ${
            formData.managePermission === "admins"
              ? "border-blue-500"
              : "border-gray-300"
          }`}
          onClick={() => handlePermissionChange("admins")}>
          <div className="flex items-center">
            <div className="bg-gray-200 p-2 rounded-md mr-2">
              <FontAwesomeIcon
                icon={faUserShield}
                className="h-6 w-6 text-gray-600"
              />
            </div>
            <div>
              <span className="text-sm font-bold text-gray-700">
                Only Admins
              </span>
              <p className="text-xs text-gray-600">
                Only admins can manage everything.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`p-4 border rounded-md cursor-pointer ${
            formData.managePermission === "specific"
              ? "border-blue-500"
              : "border-gray-300"
          }`}
          onClick={() => handlePermissionChange("specific")}>
          <div className="flex items-center">
            <div className="bg-gray-200 p-2 rounded-md mr-2">
              <FontAwesomeIcon
                icon={faUserTag}
                className="h-6 w-6 text-gray-600"
              />
            </div>
            <div>
              <span className="text-sm font-bold text-gray-700">
                Only Specific People
              </span>
              <p className="text-xs text-gray-600">
                Only some specific persons are able to see it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {errors.managePermission && (
        <span className="text-red-500 text-sm">{errors.managePermission}</span>
      )}

      <div className="flex justify-between mt-4">
        <button
          type="button"
          onClick={prevStep}
          className="bg-gray-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-600">
          Back
        </button>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step4;
