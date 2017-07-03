import {
   FETCHING_PROFILE_INFORMATION,
   UPDATE_PROFILE_INFORMATION,
   ERROR_PROFILE_INFORMATION,
} from 'reduxConstants/profile'

const initialState = {
   data: {},
   isFetching: false,
   error: false,
}

const profile = (state = initialState, action) => {
   switch(action.type) {
      case FETCHING_PROFILE_INFORMATION:
         return {
            ...state,
            isFetching: true
         }
      case UPDATE_PROFILE_INFORMATION:
         return {
            ...state,
            data: action.data,
            isFetching: false,

         }
      case ERROR_PROFILE_INFORMATION:
         return {
            ...state,
            error: true
         }
      default:
         return state
   }
}

export default profile
