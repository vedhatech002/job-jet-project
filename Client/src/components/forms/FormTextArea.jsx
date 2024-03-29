import PropTypes from "prop-types";

const FormTextArea = ({ name, register, error }) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 font-semibold">
        {" "}
        Job Description :{" "}
      </label>
      <textarea
        name={name}
        id={name}
        cols="30"
        rows="5"
        placeholder="Give your job description briefly..."
        className={`px-5 py-2 bg-gray-200 focus:bg-white outline-none rounded w-full focus:border-2 focus:border-blue-400 ${
          error ? "border  border-red-600" : ""
        }`}
        {...register}
      ></textarea>
      {error && <small className="text-red-600 text-sm">{error.message}</small>}
    </div>
  );
};

FormTextArea.propTypes = {
  name: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
};

export default FormTextArea;
