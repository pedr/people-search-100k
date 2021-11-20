
import { nextPage, lastPage, jumpToPage} from '../state/searchUser.Actions';

function SearchUserList({ searchUserState, searchUserDispatch }) {

  const forward = () => {
    searchUserDispatch(nextPage())
  }

  const backward = () => {
    searchUserDispatch(lastPage())
  }

  const handleCurrentPageInput = e => {
    const pageNumber = e.target.value;

    searchUserDispatch(jumpToPage(pageNumber))
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
    <div>
      <button onClick={backward}>Back</button>
      <label>{searchUserState.pagination.minPage}</label>
      <input 
        type="number"
        minvalue={searchUserState.pagination.minPage}
        maxvalue={searchUserState.pagination.maxPage}
        value={searchUserState.pagination.currentPage}
        onChange={handleCurrentPageInput}
      />
      <label>{searchUserState.pagination.maxPage}</label>
      <button onClick={forward}>Forward</button>
    </div>
  </div>
}

export default SearchUserList;