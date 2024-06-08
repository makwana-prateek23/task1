import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const MultiForm = ({ handleClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectName: "",
    client: "",
    startDate: "",
    endDate: "",
    notes: "",
    projectType: "",
    hourlyRate: "",
    budget: "",
    budgetAlert: false,
    budgetAlertPercentage: "",
    viewType: "",
    managePermission: "",
  });

  const [errors, setErrors] = useState({});
  const [clients, setClients] = useState(["Client 1", "Client 2"]); // Initial clients

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.projectName)
      newErrors.projectName = "Project name is required";
    if (!formData.client) newErrors.client = "Client is required";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.endDate) newErrors.endDate = "End date is required";
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.projectType)
      newErrors.projectType = "Project type is required";
    if (!formData.hourlyRate) newErrors.hourlyRate = "Hourly rate is required";
    if (!formData.budget) newErrors.budget = "Budget is required";
    if (formData.budgetAlert && !formData.budgetAlertPercentage) {
      newErrors.budgetAlertPercentage = "Budget alert percentage is required";
    }
    return newErrors;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.viewType) newErrors.viewType = "View type is required";
    return newErrors;
  };

  const validateStep4 = () => {
    const newErrors = {};
    if (!formData.managePermission)
      newErrors.managePermission = "Manage permission is required";
    return newErrors;
  };

  const nextStep = () => {
    let newErrors = {};
    if (step === 1) newErrors = validateStep1();
    if (step === 2) newErrors = validateStep2();
    if (step === 3) newErrors = validateStep3();
    if (step === 4) newErrors = validateStep4();

    if (Object.keys(newErrors).length === 0) {
      setStep(step + 1);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateStep4();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  const closeForm = () => {
    console.log("Form closed");
    handleClose();
  };

  const addNewClient = (newClient) => {
    setClients([...clients, newClient]);
    setFormData({ ...formData, client: newClient });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="relative bg-white w-4/12 mx-auto p-6 border border-gray-200 rounded-lg shadow-lg">
        <button
          onClick={closeForm}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <h1 className="text-2xl text-center font-bold mb-5">
          {step === 1
            ? "Create a project"
            : step === 2
            ? "Project type"
            : step === 3
            ? "Select a view"
            : "Who can manage projects"}
        </h1>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <Step1
              formData={formData}
              handleChange={handleChange}
              nextStep={nextStep}
              errors={errors}
              clients={clients}
              addNewClient={addNewClient}
              className="w-4/12"
            />
          )}
          {step === 2 && (
            <Step2
              formData={formData}
              handleChange={handleChange}
              prevStep={prevStep}
              nextStep={nextStep}
              errors={errors}
            />
          )}
          {step === 3 && (
            <Step3
              formData={formData}
              handleChange={handleChange}
              prevStep={prevStep}
              nextStep={nextStep}
              errors={errors}
            />
          )}
          {step === 4 && (
            <Step4
              formData={formData}
              handleChange={handleChange}
              prevStep={prevStep}
              handleSubmit={handleSubmit}
              errors={errors}
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default MultiForm;
