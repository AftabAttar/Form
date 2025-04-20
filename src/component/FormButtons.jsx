export default function FormButtons({ handleReset }) {
  return (
    <>
      <button type="reset" value="reset" onClick={handleReset}>
        Reset
      </button>
      <button type="submit" value="Submit">
        Submit
      </button>
    </>
  );
}
