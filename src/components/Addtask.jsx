import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAdd } from "../redux/action";
import { FaPlusCircle } from "react-icons/fa";

const Addtask = () => {
  const [action, setAction] = useState("");
  const disPatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    const task = {
      id: Math.random(),
      action,
      isDone: false,
    };
    disPatch(handleAdd(task));
    setAction("");
  };

  return (
    <div className="Add-task-div">
      <form onSubmit={submit}>
        <input
          id="input"
          type="text"
          value={action}
          onChange={(e) => setAction(e.target.value)}
          placeholder="Enter a Todo..."
        />
        <button type="submit">
          <FaPlusCircle color="white" size={"30px"}/>
        </button>
      </form>
    </div>
  );
};

export default Addtask;
