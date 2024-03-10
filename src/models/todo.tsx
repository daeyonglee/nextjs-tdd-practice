export interface ITodo {
	id: number;
	content: string;
}

class Todo {
	id: number;
	content: string;

	constructor(todo: ITodo) {
		this.id = todo.id;
		this.content = todo.content;
	}
}

export default Todo;
