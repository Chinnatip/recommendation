import { NAME_UPDATE, NAME_REFRESH } from './Action'

const initial = {
  statics: {
    name: 'User',
    status: 'guest'
  }
}

export const statics = (state = initial.statics, action) => {
  switch (action.type) {
    case NAME_UPDATE:
      return {
        ...state,
        ...action.payload
      }
    case NAME_REFRESH:
      return initial.statics
    default:
      return state
  }
}
