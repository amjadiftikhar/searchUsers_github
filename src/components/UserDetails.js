import React, { useState, useEffect } from "react";

function UserDetails({ user }) {
	// console.log("user as props", user);
	const [details, setDetails] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchDetails = async login => {
		// console.log("information about user", user.login);
		const URL = `https://api.github.com/users/${login}`;
		setLoading(true);
		await fetch(URL)
			.then(response => response.json())
			.then(data => {
				// console.log("api data of specific user", data);
				setDetails(data);
			})
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	};

	useEffect(() => {
		fetchDetails(user.login);
	}, [user.login]);

	if (loading) return <>...loading</>;
	return (
		<div className="userDetails">
			{details ? (
				<>
					<div>{details.name}</div>
					<div>{details.blog}</div>
					<div>{details.bio}</div>
					<div>Location: {details.location}</div>
					<div>Public repos: {details.public_repos}</div>
					<div>Followers: {details.followers}</div>
				</>
			) : (
				<p>no details available</p>
			)}
		</div>
	);
}

export default UserDetails;
