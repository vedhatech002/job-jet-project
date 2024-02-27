import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import FormInput from "../components/forms/FormInput";
import FormCategorySelectTag from "../components/forms/CategorySelectTag";
import FormSalarySelectTag from "../components/forms/SalarySelectTag";
import FormTextArea from "../components/forms/FormTextArea";

import { useNavigate, useParams } from "react-router-dom";
import API_URL from "../utils/constant";

const Schema = z.object({
  jobTitle: z
    .string()
    .min(1, { message: "Job Title must contain at least 3 characters" }),
  jobCategory: z.string().min(1, { message: "Select Job Category" }),

  companyName: z
    .string()
    .min(1, { message: "Company Name must contain atleast 3 characters" }),
  jobLocation: z
    .string()
    .min(1, { message: "Job Location must contain atleast 3 characters" }),

  companyLogo: z.string().min(1, { message: "This field is required" }),
  jobSalary: z.string().min(1, { message: "This field is required" }),

  isJobAvailable: z.boolean(),
  contactInfo: z.string().email({ message: "Email is required" }),

  jobDescription: z
    .string()
    .min(100, {
      message: "Job Description must contain at least 100 characters",
    })
    .max(500, {
      message: "Job Description must contain atmost 500 characters",
    }),
});

const UpdateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Schema),
    defaultValues: async () => {
      // get existing data to user view
      const response = await fetch(API_URL + id);
      const jsonData = await response.json();
      return jsonData;
    },
  });

  const { id } = useParams();

  const navigate = useNavigate();

  const updateDb = (data) => {
    const updateData = async () => {
      const response = await fetch(API_URL + id, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resposeJson = response.json;
      console.log(resposeJson);
    };
    updateData();
    alert("Your post has been sucessfully updated!");
    navigate(`/jobs`);
  };

  return (
    <div className="bg-gray-100 px-5 lg:px-20 pt-5 pb-24">
      <h1 className="text-blue-500 font-semibold text-3xl">
        Edit Your Job Post
      </h1>

      <form
        className="mt-5 rounded border px-5 lg:px-20 py-10 space-y-6"
        onSubmit={handleSubmit(updateDb)}
      >
        {/* jobtitle and category */}
        <div className="grid sm:flex items-center space-y-3 sm:space-x-10">
          <FormInput
            label={"Job Title"}
            name="jobTitle"
            placeholder="Job Title"
            register={register("jobTitle")}
            error={errors?.jobTitle}
          />
          <FormCategorySelectTag
            name="jobCategory"
            register={register("jobCategory")}
            error={errors?.jobCategory}
          />
        </div>

        {/* company name and job location */}
        <div className="grid sm:flex items-center space-y-3 sm:space-x-10">
          <FormInput
            label={"Company Name"}
            name="companyName"
            placeholder="Your Company Name"
            register={register("companyName")}
            error={errors?.companyName}
          />
          <FormInput
            label={"Job Location"}
            name="jobLocation"
            placeholder="Your Preferred Job Location"
            register={register("jobLocation")}
            error={errors?.jobLocation}
          />
        </div>

        {/* company logo and salary */}
        <div className="grid sm:flex items-center space-y-3 sm:space-x-10">
          <FormInput
            label={"Company Logo"}
            name="companyLogo"
            placeholder="Paste Image Link"
            register={register("companyLogo")}
            error={errors?.companyLogo}
          />
          <FormSalarySelectTag
            name={"jobSalary"}
            jobSalary
            register={register("jobSalary")}
            error={errors?.jobSalary}
          />
        </div>

        {/* recruiting state and contact */}
        <div className="grid sm:flex items-center space-y-3 sm:space-x-10">
          <div className="w-full">
            <label
              htmlFor="recruiting-status"
              className="block mb-2 font-semibold"
            >
              Recruiting Status :
            </label>
            <select
              name="isJobAvailable"
              id="isJobAvailable"
              {...register("isJobAvailable")}
              className={`px-5 py-2 bg-gray-300 outline-none rounded w-full focus:border focus:border-gray-400 ${
                errors?.isJobAvailable ? "border  border-red-600" : ""
              }`}
            >
              <option value="">-- Select Status --</option>
              <option value={true}>Actively Recruiting</option>
              <option value={false}>Closed</option>
            </select>
            {errors?.isJobAvailable && (
              <small className="text-red-600 text-sm">
                {errors.isJobAvailable?.message}
              </small>
            )}
          </div>
          <FormInput
            label={"Contact"}
            name={"contactInfo"}
            type="email"
            placeholder="companyname@gmail.com"
            register={register("contactInfo")}
            error={errors?.contactInfo}
          />
        </div>

        {/* job description */}
        <FormTextArea
          name={"jobDescription"}
          register={register("jobDescription")}
          error={errors?.jobDescription}
        />

        {/* Submit Button */}
        <div>
          <button className="bg-blue-500 px-5 py-3 text-white font-semibold  rounded hover:bg-blue-600 hover:cursor-pointer">
            Update Job Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
