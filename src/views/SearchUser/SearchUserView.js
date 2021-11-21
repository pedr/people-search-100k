
import { useReducer, useEffect} from 'react';
import { Flex, Text, Link, Box, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'

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

        const usersWithNormalizedName = data.map(user => ({ ...user, normalizedName: user.name.toLowerCase() }))
        
        searchUserDispatch(loadUserData(usersWithNormalizedName))
      })
      .catch(error => searchUserDispatch(errorLoadingData(error)))
  }, [])

  return (
    <Flex direction="column" m={4} maxWidth="600" align="center">
      <SearchUserFilters searchUserState={searchUserState} searchUserDispatch={searchUserDispatch} />
      <SearchUserList searchUserState={searchUserState} searchUserDispatch={searchUserDispatch} />
      <Divider mt={4} />
      <Box mt={10} mb={3}>
        <Text fontSize="xl">What is this?</Text>
        <Text fontSize="sm">
          Project made to demonstrate my skills with React, useReducer, pagination and project organization.
        </Text>
        <Text fontSize="sm">
          Current behavior is to call <Link href="https://random-persons.herokuapp.com/users" isExternal>an external API <ExternalLinkIcon mx="2px" /></Link> that returns 100k user objects and to paginate, search and display the results in a list manner.
        </Text>
      </Box>
    </Flex>
  );
}

export default SearchUserView;