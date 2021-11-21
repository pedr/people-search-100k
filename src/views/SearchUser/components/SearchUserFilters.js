import { useState, useEffect } from 'react';
import { Input, Text, Grid,GridItem } from '@chakra-ui/react';

import { beginSearchName } from '../state/searchUser.Actions';
import useDebounce from './useDebeounce'

const SearchUserFilters = ({ searchUserDispatch }) => {

  const [name, setName] = useState("");

  const debouncedSearchTerm = useDebounce(name, 250)

  useEffect(() => {
    searchUserDispatch(beginSearchName(debouncedSearchTerm));
  }, [debouncedSearchTerm, searchUserDispatch])

  return  (
    <Grid templateRows="1fr 1fr" mt={2} mb={2}>
      <GridItem >
        <Text fontSize="xl">Search by:</Text>
      </GridItem>
      <Grid templateColumns="3fr 1fr" gap={2}>
        <Input 
          placeholder="Name"
          type="text" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input type="number" placeholder="Age" />
      </Grid>
    </Grid>
  )
}

export default SearchUserFilters;