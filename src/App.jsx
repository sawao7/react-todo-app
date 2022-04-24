import { getNextKeyDef } from "@testing-library/user-event/dist/keyboard/getNextKeyDef";
import React from "react";
import { Todo } from "./components/todo";

function App() {
	const [inputValue, setInputValue] = React.useState();
	// const [value, setValue] = React.useState();
	const [todos, setTodos] = React.useState([]);

	const GetInputValue = (e) => {
		setInputValue(e.target.value);
	};

	const getKey = () => {
		return Math.random().toString(32).substring(2);
	};
	const AddTodos = () => {
		const newTodo = {
			key: getKey(),
			text: inputValue,
			done: false,
		};
		setTodos([...todos, newTodo]);
	};

	const OnDone = (e) => {
		// console.log(e.target.name);
		const key = e.target.name;
		const nowTodos = [...todos];
		nowTodos.map((todo) => {
			if (todo.key === key) {
				todo.done = true;
			}
		});
		setTodos(nowTodos);
	};

	const OnDelete = (e) => {
		const key = e.target.name;
		const nowTodos = [...todos];
		nowTodos.map((todo, index) => {
			if (todo.key === key) {
				nowTodos.splice(index, 1);
			}
		});
		setTodos(nowTodos);
	};
	return (
		<div>
			<div>
				<h1>Todoアプリ</h1>
			</div>
			<div>
				<input onChange={GetInputValue}></input>
				<button onClick={AddTodos}>登録</button>
			</div>
			<div>
				{todos.map((todo, index) => {
					return (
						<div>
							<Todo name={todo.text} dones={todo.done} />
							{/* <button onClick={(index)=>Delete(index)}>delete</button> */}
							<button name={todo.key} onClick={OnDone}>
								done
							</button>
							<button name={todo.key} onClick={OnDelete}>
								delete
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
