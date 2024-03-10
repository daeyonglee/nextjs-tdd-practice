import { fireEvent, render, screen } from "@testing-library/react";
import TodoInput from "./TodoInput";
import { InputHTMLAttributes } from "react";
import { act } from "react-dom/test-utils";

describe("TodoInput", () => {
	const handleSubmit = jest.fn();
	it("render", () => {
		const { container } = render(<TodoInput />);

		expect(container).toBeVisible();
	});
	it("onChange", async () => {
		render(<TodoInput />);
		const input: HTMLInputElement = screen.getByRole("textbox");
		fireEvent.change(input, { target: { value: 23 } });
		expect(input.value).toBe("23");
		const button: HTMLButtonElement = screen.getByRole("button");
		await act(() => {
			fireEvent.click(button);
		});
		expect(handleSubmit).toBeCalled();
	});
});
