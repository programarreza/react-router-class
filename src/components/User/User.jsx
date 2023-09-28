import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const User = ({ user }) => {
	const { id, name, email, phone } = user;
	const useStyle = {
		border: '2px solid yellow',
		padding: '10px',
		borderRadius: '20px',
		marginBottom: '10px'
	}

	return (
		<div style={useStyle}>
			<h2>{name}</h2>
			<p>email : {email}</p>
			<p>phone : {phone}</p>
			<Link to={`/user/${id}`}>Show Details</Link>
			<Link to={`/user/${id}`}>
				<button>Click Me</button>
			</Link>
		</div>
	);
};
User.propTypes = {
	user: PropTypes.object
}
export default User;