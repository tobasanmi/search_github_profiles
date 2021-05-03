import { Link } from 'react-router-dom';

const UserItem = ({user}) => {
  return (
    <div className="grid-item">
    <div className=''>
      <img
        src={user.avatar_url}
        alt=''
        className='round-image'
      />
      <h3>{user.login}</h3>

      <div>
        <Link to={`/user/${user.login}`} className='btn btn-primary btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
    </div>
  );
};

export default UserItem;