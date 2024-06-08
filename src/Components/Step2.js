import React from "react";

const Step2 = ({ formData, handleChange, prevStep, nextStep, errors }) => {
  // Function to handle numeric input for hourly rate
  const handleHourlyRateChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    handleChange({ target: { name: "hourlyRate", value: value } });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Project Type
        </label>
        <div className="flex space-x-4 mt-1">
          <button
            type="button"
            onClick={() =>
              handleChange({
                target: { name: "projectType", value: "Time & Materials" },
              })
            }
            className={`py-2 px-4 rounded-md ${
              formData.projectType === "Time & Materials"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}>
            Time & Materials
          </button>
          <button
            type="button"
            onClick={() =>
              handleChange({
                target: { name: "projectType", value: "Fixed Fee" },
              })
            }
            className={`py-2 px-4 rounded-md ${
              formData.projectType === "Fixed Fee"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}>
            Fixed Fee
          </button>
          <button
            type="button"
            onClick={() =>
              handleChange({
                target: { name: "projectType", value: "Non-Billable" },
              })
            }
            className={`py-2 px-4 rounded-md ${
              formData.projectType === "Non-Billable"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}>
            Non-Billable
          </button>
        </div>
        {errors.projectType && (
          <span className="text-red-500 text-sm">{errors.projectType}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="hourlyRate"
          className="block text-sm font-medium text-gray-700">
          Hourly Rate (₹)
        </label>
        <input
          type="text"
          id="hourlyRate"
          name="hourlyRate"
          value={formData.hourlyRate}
          onChange={handleHourlyRateChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
        {errors.hourlyRate && (
          <span className="text-red-500 text-sm">{errors.hourlyRate}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block text-sm font-medium text-gray-700">
          Budget
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required>
          <option value="" disabled>
            Select budget type
          </option>
          <option value="total project cost">Total Project Cost</option>
          <option value="hours per person">Hours per Person</option>
          <option value="hourly rate cap">Hourly Rate Cap</option>
          <option value="monthly budget">Monthly Budget</option>
          <option value="milestone-based budget">Milestone-Based Budget</option>
          <option value="per resource type">Per Resource Type</option>
          <option value="expense category">Expense Category</option>
          <option value="flat fee">Flat Fee</option>
          <option value="other option">Other Option</option>
        </select>
        {errors.budget && (
          <span className="text-red-500 text-sm">{errors.budget}</span>
        )}
      </div>

      <div className="flex py-4 items-center mt-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="resetBudget"
            name="resetBudget"
            checked={formData.budgetReset}
            onChange={handleChange}
            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="resetBudget"
            className="ml-2 block text-sm font-medium text-gray-700">
            Budget resets every month
          </label>
          <input
            type="checkbox"
            id="budgetAlert"
            name="budgetAlert"
            checked={formData.budgetAlert}
            onChange={handleChange}
            className="h-4 w-4 text-blue-500 border-gray-300 rounded ml-4"
          />
          <label
            htmlFor="budgetAlert"
            className="ml-2 block text-sm font-medium text-gray-700">
            Send email alerts if project exceeds
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            id="budgetAlertPercentage"
            name="budgetAlertPercentage"
            value={formData.budgetAlertPercentage}
            onChange={handleChange}
            className="ml-2  w-2/6 border border-gray-300 rounded-md shadow-sm p-2"
            required={formData.budgetAlert}
            placeholder="%"
          />
          <span className="ml-1 text-sm text-gray-700">% of budget</span>
        </div>
      </div>
      {errors.budgetAlertPercentage && (
        <span className="text-red-500 text-sm">
          {errors.budgetAlertPercentage}
        </span>
      )}

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="w-full bg-gray-500 text-white py-2 rounded-md shadow-md hover:bg-gray-600">
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 ml-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;
