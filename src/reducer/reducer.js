import { v4 as uuidv4 } from "uuid";
const initialState = {
  tasks: [
    { id: uuidv4(), name: "task1", done: false },
    { id: uuidv4(), name: "task2", done: false },
  ],
  show: "all",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "add":
      return {
        tasks: [...state.tasks, { id: uuidv4(), name: payload, done: false }],
        show: state.show,
      };
    case "delete":
      return {
        tasks: state.tasks.filter((task) => task.id != payload),
        show: state.show,
      };
    case "change":
      return {
        tasks: state.tasks.map((task) =>
          task.id == payload ? { ...task, done: !task.done } : task
        ),
        show: state.show,
      };
    case "show":
      return { ...state, show: payload };
    case "update":
      return {
        tasks: [...state.tasks].map((task) =>
          task.id === payload.id ? { ...task, name: payload.name } : task
        ),
      };
    default:
      return state;
  }
};

export default reducer;
