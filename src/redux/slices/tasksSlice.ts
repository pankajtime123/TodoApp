import {createSlice} from '@reduxjs/toolkit';
import {TypeToDoItem} from '../hooks';

const initialTasksState: TypeToDoItem[] = [];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasksState,
  reducers: {
    addTask: (state, action) => {
      return [action.payload, ...state];
    },
    toggleDone: (state, action) => {
      return state.map(item =>
        item.id === action.payload ? {...item, done: !item.done} : item,
      );
    },
    deleteTask: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    editTask: (state, action) => {
      return state.map((item, index) =>
        index === action.payload?.index ? action.payload?.updatedItem : item,
      );
    },
  },
});

export const {addTask, toggleDone, deleteTask, editTask} = tasksSlice.actions;

export default tasksSlice.reducer;
