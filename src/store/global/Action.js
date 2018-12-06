export const NAME_UPDATE = 'NAME_UPDATE'
export const NAME_REFRESH = 'NAME_REFRESH'
export const PREFERNCE_UPDATE = 'PREFERNCE_UPDATE'

// Action Creator
export const fetchNameStatics = name => {
  return {
    type: NAME_UPDATE,
    payload: name
  }
}

export const fetchLogoutStatis = () => {
  return {
    type: NAME_REFRESH
  }
}

export const fetchPreferenceStatics = preference => {
  return {
    type: PREFERNCE_UPDATE,
    payload: { preference: preference }
  }
}
