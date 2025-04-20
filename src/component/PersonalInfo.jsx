export default function PersonalInfo({ formData, handleInputChange }) {
  return (
    <>
      <label htmlFor="firstname">First Name*</label>
      <input
        type="text"
        name="firstName"
        id="firstname"
        value={formData.firstName}
        onChange={handleInputChange}
        placeholder="Enter First Name"
        required
      />

      <label htmlFor="lastname">Last Name*</label>
      <input
        type="text"
        name="lastName"
        id="lastname"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder="Enter Last Name"
        required
      />

      <label htmlFor="email">Enter Email*</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter email"
        required
      />

      <label htmlFor="contact">Contact*</label>
      <input
        type="tel"
        name="contact"
        id="contact"
        value={formData.contact}
        onChange={handleInputChange}
        placeholder="Enter Mobile number"
        required
      />
    </>
  );
}
