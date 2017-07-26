const initialState = {
   user: '',
   time: ''
}

const loginData = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
         user: action.user,
         time: action.loginTime
      }
    default:
      return state
  }
}

export default loginData
