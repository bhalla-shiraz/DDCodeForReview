import { browserHistory } from 'react-router'
import { CHANGE_PATH } from 'reduxConstants/navigate'

export const go = (path) => {
  browserHistory.push(path)
  return {
    type: CHANGE_PATH,
    path,
  }
}
