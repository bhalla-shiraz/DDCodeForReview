import { getProfile } from 'services/profile'
import {
   FETCHING_PROFILE_INFORMATION,
   UPDATE_PROFILE_INFORMATION,
   ERROR_PROFILE_INFORMATION,
} from 'reduxConstants/profile'

export const getProfileInformation = (username) => {
   return (dispatch) => {
      dispatch(fetchProfileData())
      getProfile(username).then((response) => {
         if(response.status === 200) {
            dispatch(updateProfileData(response.data))
         } else {
            dispatch(errorFetchingProfileData("error"))
         }
      })
   }
}

const fetchProfileData = () => ({
   type: FETCHING_PROFILE_INFORMATION,
})

const updateProfileData = (data) => ({
   type: UPDATE_PROFILE_INFORMATION,
   data,
})

const errorFetchingProfileData = (error) => ({
   type: ERROR_PROFILE_INFORMATION,
   error
})
