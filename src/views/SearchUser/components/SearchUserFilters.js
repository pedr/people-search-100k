import { useState, useEffect } from 'react';
import { beginSearchName } from '../state/searchUser.Actions';
import useDebounce from './useDebeounce'

const SearchUserFilters = ({ searchUserDispatch }) => {

  const [name, setName] = useState("");

  const debouncedSearchTerm = useDebounce(name, 250)

  useEffect(() => {
    searchUserDispatch(beginSearchName(debouncedSearchTerm));
  }, [debouncedSearchTerm, searchUserDispatch])

  return <div>
    <input type="text" placeholder="Search by name..." value={name} onChange={e => setName(e.target.value)} />
    <input type="number" placeholder="18" />
  </div>
}

export default SearchUserFilters;