
import constants from './searchUser.Constants';

const DEBUG = true;

const searchUserReducer = (state, action) => {
  
  if (DEBUG) console.log(action, state)

  switch (action.type) {
    case constants.BEGIN_SEARCH_NAME: 
      return _beginSearchName(state, action);

    case constants.LOAD_USER_DATA: 
      return _loadUserData(state, action);

    case constants.NEXT_PAGE:
      return _changePage(state, { value: state.pagination.currentPage + 1 })
    
    case constants.LAST_PAGE:
      return _changePage(state, { value: state.pagination.currentPage - 1 })
      
    case constants.ERROR_LOADING_DATA: 
      return _errorLoadingData(state);
    
    default: 
      return { ...state }
  }
}

const _errorLoadingData = (state) => {
  return {
    ...state,
    loading: false,
    errors: true
  }
}

const _beginSearchName = (state, action) => {

  const usersFiltered = state.users.filter(u => u.name.includes(action.value));
  const currentPage = 1
  const minPage = 1
  const maxPage = Math.ceil(usersFiltered.length / state.pagination.perPage)
  const dataToPageOne = _getUsersFromPage(currentPage, state.pagination.perPage, usersFiltered) 

  return {
    ...state,
    usersFiltered: usersFiltered,
    searchFields: {
      ...state.searchFields,
      name: action.value
    },
    pagination: {
      ...state.pagination,
      data: dataToPageOne,
      minPage,
      maxPage,
      currentPage,
    }
  }
}

const _loadUserData = (state, action) => {
  const allUsers = action.value;
  const currentPage = 1
  const minPage = 1
  const maxPage = Math.ceil(allUsers.length / state.pagination.perPage)
  const dataToPageOne = _getUsersFromPage(currentPage, state.pagination.perPage, allUsers) 

  return {
    ...state,
    loading: false,
    users: allUsers,
    usersFiltered: allUsers,
    pagination: {
      ...state.pagination,
      data: dataToPageOne,
      minPage,
      maxPage,
      currentPage
    }
  }
}

const _changePage = (state, action) => {

  const _changePageIfPossible = (pageToAdvance, maxPage, minPage) => {
    const pageIsOverMax = pageToAdvance > maxPage
    const pageIsUnderMin = pageToAdvance < minPage
    
    if (pageIsOverMax) return maxPage;
    if (pageIsUnderMin) return minPage;

    return pageToAdvance;
  }

  const newPage = _changePageIfPossible(
    action.value, 
    state.pagination.maxPage,
    state.pagination.minPage,
  )

  const data = _getUsersFromPage(newPage, state.pagination.perPage, state.usersFiltered) 

  return {
    ...state,
    pagination: {
      ...state.pagination,
      data,
      currentPage: newPage
    }
  }
}


const _getUsersFromPage = (currentPage, pageSize, users) => {
  const resultUsers = []
  for (var i = pageSize * (currentPage -1); i < currentPage * pageSize; i++) {
    if (users[i]) {
      resultUsers.push(users[i])
    }
  }
  return resultUsers;
}

const searchUserInitialState = {
  loading: true,
  searchFields: {
    name: '',
    age: 0,
  },
  errors: false,
  pagination: {
    data: [
      // {
      //   name: '',
      //   age: ''
      // },
      // {
      //   name: '',
      //   age: ''
      // },
    ],
    currentPage: 1,
    perPage: 10,
    minPage: 1,
    maxPage: 1
  },
  users: [
    // {
    //   name: '',
    //   age: ''
    // },
    // {
    //   name: '',
    //   age: ''
    // },
  ],
  usersFiltered: [
    // {
    //   name: '',
    //   age: ''
    // },
    // {
    //   name: '',
    //   age: ''
    // },
  ]
}

export { searchUserReducer, searchUserInitialState };