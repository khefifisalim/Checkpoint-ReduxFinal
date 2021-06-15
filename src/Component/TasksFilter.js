import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TasksFilter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch({ type: "show", payload: "done" })}>
        done
      </button>
      <button onClick={() => dispatch({ type: "show", payload: "notDone" })}>
        not done
      </button>
      <button onClick={() => dispatch({ type: "show", payload: "all" })}>
        all
      </button>
    </div>
  );
};

export default TasksFilter;
