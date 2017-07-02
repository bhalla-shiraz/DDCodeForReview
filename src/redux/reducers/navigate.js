import { CHANGE_PATH } from '../constants/navigate'

const navigate = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_PATH:
      return { ...state , path: action.path}
    default:
      return state
  }
}
export default navigate
