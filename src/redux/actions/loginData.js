import { go } from './navigate'

export const login = (user) => {
   return (dispatch) => {
      dispatch(updateUser(user))
      dispatch(go('/Chat'))
   }
}

const updateUser = (user) => ({
   user,
   type: 'UPDATE_USER',
   loginTime: new Date().getTime()
})
