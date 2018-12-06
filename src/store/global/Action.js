export const NAME_UPDATE = 'NAME_UPDATE'
export const NAME_REFRESH = 'NAME_REFRESH'

// Action Creator
export const fetchNameStatics = name => {
  const prepareName =
    typeof name !== 'undefined' ? name : { name: 'Chinnatip', rec: '03' }
  return {
    type: NAME_UPDATE,
    payload: prepareName
  }
}

export const fetchLogoutStatis = () => {
  return {
    type: NAME_REFRESH
  }
}
