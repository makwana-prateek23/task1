import React, { useState } from "react";
import MultiForm from "./MultiForm";
import MultiStepForm from "./MultiStepForm";

function Tasks() {
  const [showForm, setShowForm] = useState(null);

  const handleClose = () => {
    setShowForm(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Tasks Component</h1>
      <button
        onClick={() => setShowForm("multiForm")}
        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 mr-4">
        Task 1
      </button>
      <button
        onClick={() => setShowForm("multiStepForm")}
        className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600">
        Task 2
      </button>
      {showForm === "multiForm" && <MultiForm handleClose={handleClose} />}
      {showForm === "multiStepForm" && (
        <MultiStepForm handleClose={handleClose} />
      )}
    </div>
  );
}

export default Tasks;
