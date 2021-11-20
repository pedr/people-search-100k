import { useState, useEffect } from 'react';
import { beginSearchName } from '../state/searchUser.Actions';

const SearchUserFilters = ({ searchUserDispatch, searchUserState }) => {

  const [name, setName] = useState("");

  useEffect(() => {
    if (!name || name === "") return;
    
    searchUserDispatch(beginSearchName(name));
  }, [name, searchUserDispatch])

  return <div>
    <input type="text" placeholder="Search by name..." value={name} onChange={(e) => setName(e.target.value)} />
    <input type="number" placeholder="18" />
  </div>
}

export default SearchUserFilters;