import { getProfile } from 'services/profile'
import { updateProfile } from 'services/profile'
import { go } from 'actions/navigate'
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
            dispatch(errorFetchingProfileData('Profile information not found'))
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

const errorFetchingProfileData = () => ({
   type: ERROR_PROFILE_INFORMATION,
})

export const updateProfileInformation = (username, data) => {
      return (dispatch) => {
         updateProfile(username, data).then((response) => {
            if(response.status == 200) {
               dispatch(getProfileInformation(username))
               dispatch(go('/chat'))
            } else {
               dispatch(errorFetchingProfileData(response.error))
            }
         })
      }
}
