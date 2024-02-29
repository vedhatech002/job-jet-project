import PropTypes from "prop-types";

const FormSalarySelectTag = ({ name, register, error }) => {
  return (
    <div className="w-full space-y-2">
      <label className="font-semibold">Salary :</label>
      <select
        name={name}
        id={name}
        className={`px-5 py-2 bg-gray-200 focus:bg-white outline-none rounded w-full focus:border-2 focus:border-blue-400 ${
          error ? "border  border-red-600" : ""
        }`}
        {...register}
      >
        <option value="">-- Select Salary between --</option>
        <option value="3 LPA - 5 LPA">3 LPA - 5 LPA</option>
        <option value="5 LPA - 7 LPA">5 LPA - 7 LPA</option>
        <option value="7 LPA - 12 LPA">7 LPA - 12 LPA</option>
        <option value="12 LPA - 15 LPA">12 LPA - 15 LPA</option>
        <option value="More than 15 LPA">More than 15 LPA</option>
      </select>
      {error && <small className="text-red-600 text-sm">{error.message}</small>}
    </div>
  );
};

FormSalarySelectTag.propTypes = {
  name: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
};

export default FormSalarySelectTag;
