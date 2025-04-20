import "./App.css";
import { useState } from "react";
import Form from "./component/Form";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "male",
    resume: null,
    about: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "male",
      resume: null,
      about: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <Form
        formData={formData}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        handleInputChange={handleInputChange}
        handleFileChange={handleFileChange}
      />
    </div>
  );
}

export default App;
