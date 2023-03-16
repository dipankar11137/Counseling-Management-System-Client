import React, { useState } from "react";

const CheckBoxTest = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const slot1 = event.target.slot1.value;
    const slot2 = event.target.slot2.value;
    const slot3 = event.target.slot3.value;
    const slot4 = event.target.slot4.value;
    const slot = [slot1, slot2, slot3, slot4];
    console.log(slot);
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input className="border-4 m-4" type="text" name="slot1" />
          <input className="border-4 m-4" type="text" name="slot2" />
          <input className="border-4 m-4" type="text" name="slot3" />
          <input className="border-4 m-4" type="text" name="slot4" />

          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default CheckBoxTest;
