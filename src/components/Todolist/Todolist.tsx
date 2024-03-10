"use client";
import { ITodo } from "@/models/todo";

export default function Todolist({ tasks }: { tasks: ITodo[] }) {
	return (
		<ul>
			{tasks?.map((task) => {
				return <li key={task.id}>{task.content}</li>;
			})}
		</ul>
	);
}
