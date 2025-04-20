import React from "react";
import PersonalInfo from "./PersonalInfo";
import GenderSelection from "./GenderSelection";
import FileUpload from "./FileUpload";
import AdditionalInfo from "./AdditionalInfo";
import FormButtons from "./FormButtons";

export default function Form({
  formData,
  handleSubmit,
  handleReset,
  handleInputChange,
  handleFileChange,
}) {
  return (
    <fieldset>
      <form onSubmit={handleSubmit}>
        <PersonalInfo
          formData={formData}
          handleInputChange={handleInputChange}
        />

        <GenderSelection
          gender={formData.gender}
          handleInputChange={handleInputChange}
        />

        <FileUpload handleFileChange={handleFileChange} />

        <AdditionalInfo
          about={formData.about}
          handleInputChange={handleInputChange}
        />

        <FormButtons handleReset={handleReset} />
      </form>
    </fieldset>
  );
}
