import { go } from './navigate'
import { getProfileInformation, updateProfileInformation } from './profile'

export const login = (user) => {
   return (dispatch) => {
      dispatch(updateUser(user))
      dispatch(go('/Chat'))
      dispatch(getProfileInformation(user))
      dispatch(updateProfileInformation(user, {
         umar:'600',
         pic: '123'
      }))
   }
}

const updateUser = (user) => ({
   user,
   type: 'UPDATE_USER',
   loginTime: new Date().getTime()
})
