import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Step5 from "./Step5";
import Step6 from "./Step6";

const MultiStepForm = () => {
  const [step, setStep] = useState(5);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    brandName: "",
    brandType: "",
    streetAddress: "",
    zipCode: "",
    city: "",
    taxIdNumber: "",
  });
  const [isOpen, setIsOpen] = useState(true);
  const [errors, setErrors] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const validateStep5 = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    // Add validation checks for other fields in Step 5
    return newErrors;
  };

  const validateStep6 = () => {
    const newErrors = {};
    if (!formData.brandName.trim()) {
      newErrors.brandName = "Brand name is required";
    }
    if (!formData.brandType.trim()) {
      newErrors.brandType = "Brand type is required";
    }
    if (!formData.streetAddress.trim()) {
      newErrors.streetAddress = "Street address is required";
    }
    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "Zip code is required";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.taxIdNumber.trim()) {
      newErrors.taxIdNumber = "Tax ID Number is required";
    }
    // Add validation checks for other fields in Step 6
    return newErrors;
  };

  const nextStep = () => {
    if (step === 5) {
      const newErrors = validateStep5();
      if (Object.keys(newErrors).length === 0) {
        setStep(step + 1);
        setErrors({});
      } else {
        setErrors(newErrors);
      }
    } else if (step === 6) {
      const newErrors = validateStep6();
      if (Object.keys(newErrors).length === 0) {
        // Submit the form or perform the next action here
        console.log("Form data:", formData);
        console.log("Selected file:", selectedFile);
        setStep(5);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          brandName: "",
          brandType: "",
          streetAddress: "",
          zipCode: "",
          city: "",
          taxIdNumber: "",
        });
        setErrors({});
      } else {
        setErrors(newErrors);
      }
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative w-full md:w-8/12 lg:w-6/12 bg-white p-4 rounded-lg shadow-lg">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
              onClick={handleClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="bg-white bg-opacity-90 p-6 rounded-md">
              {step === 5 && (
                <Step5
                  formData={formData}
                  handleChange={handleChange}
                  nextStep={nextStep}
                  errors={errors}
                />
              )}
              {step === 6 && (
                <Step6
                  formData={formData}
                  handleChange={handleChange}
                  prevStep={prevStep}
                  handleSubmit={nextStep}
                  handleFileChange={handleFileChange}
                  selectedFile={selectedFile}
                  errors={errors}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MultiStepForm;
