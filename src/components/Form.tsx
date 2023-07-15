import React, { FormEvent, useRef } from "react";

const Form = () => {
  // for accessing input fields
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const person = { name: "", age: 0 };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (nameRef.current !== null) {
      person.name = nameRef.current.value;
    }
    if (ageRef.current !== null) {
      person.age = parseInt(ageRef.current.value);
    }
    console.log(person);
  };

  return (
    <div className="col-4 border border-primary p-2">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input ref={nameRef} type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input ref={ageRef} type="number" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
