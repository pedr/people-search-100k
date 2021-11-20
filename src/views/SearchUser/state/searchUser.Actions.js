
import constants from './searchUser.Constants';

const beginSearchName = (nameToSearch) => {
  return {
    type: constants.BEGIN_SEARCH_NAME,
    value: nameToSearch
  }
}

const loadUserData = (users) => {
  return {
    type: constants.LOAD_USER_DATA,
    value: users
  }
}

const errorLoadingData = (errors) => {
  return {
    type: constants.ERROR_LOADING_DATA,
    value: errors
  }
}

const nextPage = () => {
  return {
    type: constants.NEXT_PAGE
  }
}

const lastPage = () => {
  return {
    type: constants.LAST_PAGE
  }
}

const jumpToPage = pageNumber => {
  return {
    type: constants.JUMP_TO_PAGE,
    value: pageNumber,
  }
}

export  {
  beginSearchName,
  loadUserData,
  errorLoadingData,
  nextPage,
  lastPage,
  jumpToPage,
}