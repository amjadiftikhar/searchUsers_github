import React from "react";
function Form({search, setSearch}) {

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

export default Form;
