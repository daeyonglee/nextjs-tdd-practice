"use client";
import Todolist from "@/components/Todolist/Todolist";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { selectTodos, setTasks } from "@/store/slice/todos";
import { useEffect } from "react";
import tasks from "../../../fixtures/task";
import TodoInput from "../TodoInput/TodoInput";

export default function TodoListContainer() {
	const todos = useAppSelector(selectTodos);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setTasks(tasks));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<Todolist tasks={todos} />
			<TodoInput />
		</>
	);
}
