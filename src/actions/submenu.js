export const SET_SUBMENU_DATA = Symbol('SET_SUBMENU_DATA')

export function setSubMenuData (payload) {
  return {
    type: SET_SUBMENU_DATA,
    payload: {
      data: payload
    }
  }
}
