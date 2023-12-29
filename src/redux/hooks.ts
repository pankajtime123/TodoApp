/* eslint-disable react-hooks/exhaustive-deps */
import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {RootState, AppDispatch} from './store';
import {addTask, deleteTask, editTask, toggleDone} from './slices/tasksSlice';
import {useCallback, useState} from 'react';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type TypeToDoItem = {
  id: number;
  text: string;
  done: boolean;
  time: number;
};

export const useManageTasks = () => {
  const tasks = useAppSelector(state => state.tasks);
  const [textInput, setTextInput] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const addToDoItem = (): void => {
    if (!textInput) return;

    const newItem: TypeToDoItem = {
      id: Date.now(),
      text: textInput,
      done: false,
      time: Date.now(),
    };
    if(typeof editIndex === 'number'){
      updateToDoItem()
    }else{
      dispatch(addTask(newItem));
      setTextInput('');
    }
  };

  const updateToDoItem = (): void => {
    if (editIndex === null || !textInput) return;

    const updatedItem = {
      ...tasks[editIndex],
      text: textInput,
    };

    dispatch(editTask({ index: editIndex, updatedItem }));
    setTextInput('');
    setEditIndex(null);
  };

  const markCompleted = useCallback((id: number): void => {
    dispatch(toggleDone(id));
  }, [dispatch]);

  const deleteToDoItem = useCallback((id: number): void => {
    dispatch(deleteTask(id));
  }, [dispatch]);

  const editTodoItem = useCallback((index: number) => {
    const itemToEdit = tasks[index];
    if (itemToEdit) {
      setTextInput(itemToEdit.text);
      setEditIndex(index);
    }
  }, [tasks]);

  return {
    tasks,
    addToDoItem,
    updateToDoItem,
    deleteToDoItem,
    markCompleted,
    setTextInput,
    textInput,
    editTodoItem,
  };
};
