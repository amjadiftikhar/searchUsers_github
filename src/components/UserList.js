import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "./../App";

function UserList() {
	const { users } = useContext(UserContext);
	return (
		<div className="userList">
			<ul>
				{users.length > 0 ? (
					users.map(user => {
						return (
							<li key={user.id} className="items">
								<User key={user.id} user={user} />
							</li>
						);
					})
				) : (
					<p>no user</p>
				)}
			</ul>
		</div>
	);
}

export default UserList;
