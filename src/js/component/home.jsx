import React, { useState } from "react";

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	function handleChange(event) {
		setNewTask(event.target.value);
	}

	function addTask() {
		if (newTask) {
			setTasks([...tasks, newTask]);
			setNewTask("");
		}
	}

	function deleteTask(index) {
		const newTasks = tasks.filter((_, i) => i !== index);
		setTasks(newTasks);
	}

	return (
		<div className="todo-list">
			<h1>To Do List</h1>
			<div className="input-container">
				<input
					type="text"
					placeholder="Add a new task"
					value={newTask}
					onChange={handleChange}
					onKeyDown={(event) => {
						if (event.key === "Enter") {
							addTask();
						}
					}}
				/>
			</div>
			<ul className="tasksToDo">
				{tasks.map((elemento, index) => (
					<li key={index} className="task-item">
						{elemento}
						<button className="delete-button" onClick={() => deleteTask(index)}>Eliminar</button>
					</li>
				))}
			</ul>

		</div>
	);
};

export default Home;