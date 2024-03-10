import tasks from "../../../fixtures/task";
import reducer, { setTasks } from "./todos";
describe("todos slice", () => {
	describe("setTasks", () => {
		it("change tasks array", () => {
			const state = reducer(
				{
					tasks: [],
				},
				setTasks(tasks)
			);
			expect(state.tasks).not.toHaveLength(0);
		});
	});
});
