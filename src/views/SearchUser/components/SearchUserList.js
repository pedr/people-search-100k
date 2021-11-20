
import { nextPage ,lastPage} from '../state/searchUser.Actions';

function SearchUserList({ searchUserState, searchUserDispatch }) {

  const forward = () => {
    searchUserDispatch(nextPage())
  }

  const backward = () => {
    searchUserDispatch(lastPage())
  }

  return <div>
    <div>
      <label>Name:</label>
      <label>Age:</label>
    </div>
    <ul>
      {
        searchUserState.pagination.data.map(user => {
          return (
            <li key={`${user.name}${user.age}`}>
              <span>
                {user.name}
              </span>
              <span>
                {user.age}
              </span>
          </li>
          );
        })
      }
    </ul>
    <button onClick={backward}>Back</button>
    <button onClick={forward}>Forward</button>
  </div>
}

export default SearchUserList;