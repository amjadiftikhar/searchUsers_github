import React, { useContext } from "react";
import { UserContext } from "./../App";

function UserSearch() {
	const { search, setSearch } = useContext(UserContext);

	return (
		<>
			<form className="userInput">
				<input
					type="search"
					placeholder="enter user name!"
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			</form>
		</>
	);
}

export default UserSearch;
