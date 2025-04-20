export default function AdditionalInfo({ about, handleInputChange }) {
  return (
    <>
      <label htmlFor="about">About</label>
      <textarea
        name="about"
        id="about"
        cols="30"
        rows="10"
        value={about}
        onChange={handleInputChange}
        placeholder="About your self"
        required
      ></textarea>
    </>
  );
}
