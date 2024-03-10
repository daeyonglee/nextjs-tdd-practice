import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Todolist from "./Todolist";
import Todo from "@/models/todo";
import tasks from "../../../fixtures/task";

describe("<Todolist />", () => {
	it("model Todo", () => {
		const todo = new Todo({ id: 1, content: "밥먹기" });
		expect(todo.id).toBe(1);
		expect(todo.content).toBe("밥먹기");
	});

	it("render Todolist with todos", () => {
		const { container } = render(<Todolist tasks={tasks} />);

		expect(container).toHaveTextContent("밥먹기");
		expect(container).toHaveTextContent("똥싸기");
		expect(container).toHaveTextContent("운동하기");
	});
});
