import Todo from "@/models/todo";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface TodosState {
	tasks: Todo[];
}

const initialState: TodosState = {
	tasks: [],
};

const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		setTasks: (state, action) => {
			state.tasks = action.payload;
		},
	},
});

export const { setTasks } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.tasks;
export default todosSlice.reducer;
