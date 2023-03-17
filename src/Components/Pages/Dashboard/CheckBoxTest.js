import React, { useState } from "react";

const CheckBoxTest = () => {
  // const [isChecked, setIsChecked] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const slot1 = event.target.slot1.value;
  //   const slot2 = event.target.slot2.value;
  //   const slot3 = event.target.slot3.value;

  // };
  const [values, setValues] = useState(["", ""]);

  const handleChange = (index, event) => {
    const newValues = [...values];
    console.log(newValues);
    newValues[index] = event.target.value;
    setValues(newValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted values:", values);
  };
  return (
    <div>
      <input
        onChange={(event) => handleChange()}
        type="number"
        className="border-4"
      />
      <form onSubmit={handleSubmit}>
        {values.map((value, index) => (
          <input
            className="border-4 m-4"
            key={index}
            type="text"
            value={value}
            onChange={(event) => handleChange(index, event)}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
      {/* <div>
        <form onSubmit={handleSubmit}>
          <input className="border-4 m-4" type="text" name="slot1" />
          <input className="border-4 m-4" type="text" name="slot2" />
          <input className="border-4 m-4" type="text" name="slot3" />
          <input className="border-4 m-4" type="text" name="slot4" />

          <input className="btn" type="submit" value="Submit" />
        </form>
      </div> */}
    </div>
  );
};

export default CheckBoxTest;
