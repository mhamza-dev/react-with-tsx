import { FormEvent, useState } from 'react'

const ChangeForm = () => {
    const [Person, setPerson] = useState({
        name: '',
        age: ''
    })
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        console.log("Person", Person);
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...Person, name: event.target.value })
            }
            value={Person.name}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...Person, age: event.target.value })
            }
            value={Person.age}
            type="number"
            id="age"
            className="form-control"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default ChangeForm