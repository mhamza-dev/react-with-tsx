import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const UseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const submitForm = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control mb-1"
          />
          {errors.name?.type == "required" && (
            <p className="text-danger">This field is rqeuired</p>
          )}
          {errors.name?.type == "minLength" && (
            <p className="text-danger">At least has 3 characters</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { required: true })}
            id="age"
            type="number"
            className="form-control mb-1"
          />
          {errors.age?.type == "required" && (
            <p className="text-danger">This field is rqeuired</p>
          )}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default UseForm;
