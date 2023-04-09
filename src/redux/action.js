import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./actionType";

export const handleAdd = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};
export const deleteTask = (ID) => {
  return {
    type: DELETE_TASK,
    payload: ID,
  };
};
export const completeTask=(complete)=>{
    return {
        type :COMPLETE_TASK,
        payload:complete,
    }
}
export const editTask=(edit)=>{
    return {
        type :EDIT_TASK,
        payload: edit,
    }
}