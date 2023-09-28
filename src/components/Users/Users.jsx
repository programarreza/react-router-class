import { useLoaderData } from "react-router-dom";
import User from "../user/user";
import './Users.css';

const Users = () => {

	const users = useLoaderData();
	console.log(users);

	
	// state --> data
	// state --> loader
	// use effects
	// fetch --> state set --> set state
	return (
		<div>
			<h2>Our Users : {users.length}</h2>
			<p>Fantastic and vodro Users</p>
			<div className="users">
				{
					users.map(user => <User key={user.id} user={user}></User>)
				}
			</div>
		</div>
	);
};

export default Users;