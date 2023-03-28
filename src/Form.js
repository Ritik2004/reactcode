import React, { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name);
  };
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
