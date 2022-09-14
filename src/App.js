import React, { useState, useEffect, createContext } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import UserList from "./components/UserList";
import "./App.css";

const UserContext = createContext();

function App() {
	const [search, setSearch] = useState("");
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const URL = `https://api.github.com/search/users?`;
		const fetchUser = async () => {
			const searchUrl = `${URL}q=${search}`;
			if (search) {
				setLoading(true);
				await fetch(searchUrl)
					.then(data => data.json())
					.then(data => {
						setUsers(data.items);
					})
					.catch(error => console.log(error))
					.finally(() => setLoading(false));
			}
		};
		fetchUser();
	}, [search]);

	return (
		<div className="App">
			<Header />
			<UserContext.Provider value={{ users, search, setSearch }}>
				<Form />
				{loading ? <p>...fetching data</p> : <UserList users={users} />}
			</UserContext.Provider>
		</div>
	);
}

export { App, UserContext };
