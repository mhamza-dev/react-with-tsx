import { FormEvent, useRef } from "react";

const RefForm = () => {
  const refName = useRef<HTMLInputElement>(null);
  const refAge = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (refName.current !== null) person.name = refName.current.value;
    if (refAge.current !== null) person.age = parseInt(refAge.current.value);

    console.log("Person", person);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input ref={refName} id="name" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input ref={refAge} type="number" id="age" className="form-control" />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default RefForm;
