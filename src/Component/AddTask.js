import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const addFunc = () => {
    if (task.trim()) {
      dispatch({ type: "add", payload: task });
      setTask("");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addFunc}>add</button>
    </div>
  );
};

export default AddTask;
