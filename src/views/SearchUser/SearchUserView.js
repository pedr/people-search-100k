
import { useReducer, useEffect} from 'react';

import SearchUserFilters from './components/SearchUserFilters';
import SearchUserList from './components/SearchUserList';
import { searchUserReducer, searchUserInitialState } from './state/searchUser.Reducer';
import { loadUserData, errorLoadingData } from './state/searchUser.Actions';
import api from './api';

function SearchUserView() {

  const [searchUserState, searchUserDispatch] = useReducer(searchUserReducer, searchUserInitialState);

  useEffect(() => {
    api.loadUserData()
      .then(({ status, data }) => {
        if (!status) {
          searchUserDispatch(errorLoadingData("Something wrong with the API"))
        }

        searchUserDispatch(loadUserData(data))
      })
      .catch(error => searchUserDispatch(errorLoadingData(error)))
  }, [])

  return (
    <div>
      <SearchUserFilters searchUserState={searchUserState} searchUserDispatch={searchUserDispatch} />
      <SearchUserList searchUserState={searchUserState} searchUserDispatch={searchUserDispatch} />
    </div>
  );
}

export default SearchUserView;