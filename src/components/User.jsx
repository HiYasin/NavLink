import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {name, id} = user;

    // using event handlers
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/users/${id}`);
    };

    return (
        <div className="border border-red-400 rounded-md">
            <h1>Name: {name}</h1>
            <Link to={`/users/${id}`}><button className='bg-red-200 border rounded-md px-5 py-2 m-5 hover:shadow-lg hover:border-red-600'>See Details by Link</button></Link>
            <br />
            <button onClick={handleNavigate} className='bg-red-200 border rounded-md px-5 py-2 m-5 hover:shadow-lg hover:border-red-600'>See Details by Navigate</button>
            
        </div>
    );
};



export default User;
User.propTypes = {
    user: PropTypes.object.isRequired,
};