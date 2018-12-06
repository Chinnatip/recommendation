import { NAME_UPDATE, NAME_REFRESH, PREFERNCE_UPDATE } from './Action'

const initial = {
  statics: {
    name: 'User',
    status: 'guest',
    track: 'general',
    preference: 'shopping-track'
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
    case PREFERNCE_UPDATE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
