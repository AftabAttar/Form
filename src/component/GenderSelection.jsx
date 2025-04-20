export default function GenderSelection({ gender, handleInputChange }) {
  return (
    <>
      <label htmlFor="gender">Gender*</label>
      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        checked={gender === "male"}
        onChange={handleInputChange}
      />
      Male
      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        checked={gender === "female"}
        onChange={handleInputChange}
      />
      Female
      <input
        type="radio"
        name="gender"
        value="other"
        id="other"
        checked={gender === "other"}
        onChange={handleInputChange}
      />
      Other
    </>
  );
}
