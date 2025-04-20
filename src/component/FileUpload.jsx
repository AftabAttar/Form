export default function FileUpload({ handleFileChange }) {
  return (
    <>
      <label htmlFor="file">Upload Resume*</label>
      <input
        type="file"
        name="file"
        id="file"
        onChange={handleFileChange}
        placeholder="Enter Upload File"
        required
      />
    </>
  );
}
