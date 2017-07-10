const loginData = (state = '', action) => {
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
