import PropTypes from "prop-types";

const FormCategorySelectTag = ({ name, register, error }) => {
  return (
    <div className="w-full">
      <label className="font-semibold mb-2 block">Job Category :</label>
      <select
        name={name}
        id={name}
        className={`px-5 py-2 bg-gray-200 focus:bg-white outline-none rounded w-full focus:border-2 focus:border-blue-400 ${
          error ? "border  border-red-600" : ""
        }`}
        {...register}
      >
        <option value="">-- Select category --</option>
        <option value="Human Resources">Human Resources</option>
        <option value="Marketing">Marketing</option>
        <option value="Customer service">Customer service</option>
        <option value="IT Manager">IT Manager</option>
      </select>
      {error && <small className="text-red-600 text-sm">{error.message}</small>}
    </div>
  );
};

FormCategorySelectTag.propTypes = {
  name: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
};

export default FormCategorySelectTag;
