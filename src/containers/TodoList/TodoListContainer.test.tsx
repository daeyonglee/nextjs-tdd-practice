import { render, screen } from "@testing-library/react";
import TodoListContainer from "./TodoListContainer";
import { useAppSelector } from "../../../__mock__/react-redux";
import tasks from "../../../fixtures/task";
import { useAppDispatch } from "../../../__mock__/react-redux";
import { setupStore } from "@/store";
import { setTasks } from "@/store/slice/todos";
import { renderWithProviders } from "@/providers/ReduxTestProvider";

describe("<TodoListContainer />", () => {
	it("render TodoListContainer", () => {
		renderWithProviders(<TodoListContainer />);
		expect(screen.getByText(/밥먹기/i)).toBeInTheDocument();
		expect(screen.getByText(/똥싸기/i)).toBeInTheDocument();
		expect(screen.getByText(/운동하기/i)).toBeInTheDocument();
	});
});
