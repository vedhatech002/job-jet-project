import Proptypes from "prop-types";

const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  error,
  register,
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block mb-2 font-semibold">
        {label} :
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`px-5 py-2 bg-gray-300 outline-none rounded w-full focus:border focus:border-gray-400 ${
          error ? "border  border-red-600" : ""
        }`}
        {...register}
      />
      {error && <small className="text-red-600 text-sm">{error.message}</small>}
    </div>
  );
};

FormInput.propTypes = {
  label: Proptypes.string,
  name: Proptypes.string,
  type: Proptypes.string,
  placeholder: Proptypes.string,
  register: Proptypes.object,
  error: Proptypes.object,
};

export default FormInput;
