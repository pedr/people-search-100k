
const address = 'https://random-persons.herokuapp.com/users'

const api = {
  loadUserData: async () => {
    return fetch(address).then(r => r.json());
  }
}

export default api;