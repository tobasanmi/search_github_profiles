import { Link } from 'react-router-dom';

const UserItem = ({user}) => {
  return (
    <div className="grid-container">
    <div className='grid-item'>
      <img
        src={user.avatar_url}
        alt=''
        className='round-img'
        style={{ width: '80px' }}
      />
      <h3>{user.login}</h3>

      <div>
        <Link to={`/user/${user.login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
    </div>
  );
};

export default UserItem;