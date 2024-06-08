import React, { useState } from "react";

const Step1 = ({
  formData,
  handleChange,
  nextStep,
  errors,
  clients,
  addNewClient,
}) => {
  const [showNewClientForm, setShowNewClientForm] = useState(false);
  const [newClient, setNewClient] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const handleNewClientChange = (e) => {
    setNewClient(e.target.value);
  };

  const handleAddNewClient = () => {
    if (newClient.trim()) {
      addNewClient(newClient);
      setShowNewClientForm(false);
      setNewClient("");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="projectName"
          className="block text-sm font-medium text-center text-gray-700">
          Project name
        </label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-400"
          required
        />
        {errors.projectName && (
          <span className="text-red-500 text-sm">{errors.projectName}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="client"
          className="block text-sm font-medium text-gray-700">
          Client
        </label>
        <div className="flex items-center space-x-4">
          <select
            id="client"
            name="client"
            value={formData.client}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 outline-blue-400"
            required>
            <option value="">Select a client</option>
            {clients.map((client, index) => (
              <option key={index} value={client}>
                {client}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => setShowNewClientForm(!showNewClientForm)}
            className="mt-1 w-5/12 bg-blue-500 text-white py-2 px-4 text-sm rounded-md shadow-md hover:bg-blue-600">
            + New Client
          </button>
        </div>
        {errors.client && (
          <span className="text-red-500 text-sm">{errors.client}</span>
        )}
      </div>

      {showNewClientForm && (
        <div className="mt-4">
          <label
            htmlFor="newClient"
            className="block text-sm font-medium text-gray-700">
            New Client Name
          </label>
          <input
            type="text"
            id="newClient"
            value={newClient}
            onChange={handleNewClientChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          <button
            type="button"
            onClick={handleAddNewClient}
            className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600">
            Add Client
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            min={today}
            className="mt-1 block w-full border border-blue-300 rounded-md shadow-sm p-2"
            required
          />
          {errors.startDate && (
            <span className="text-red-500 text-sm">{errors.startDate}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            min={formData.startDate || today}
            className="mt-1 block w-full border border-blue-300 rounded-md shadow-sm p-2"
            required
          />
          {errors.endDate && (
            <span className="text-red-500 text-sm">{errors.endDate}</span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <button
        type="button"
        onClick={nextStep}
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
        Next
      </button>
    </div>
  );
};

export default Step1;
