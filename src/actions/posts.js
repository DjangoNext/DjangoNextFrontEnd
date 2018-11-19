export const SET_POSTS_DATA = Symbol('SET_POSTS_DATA')

export function setPostsData (payload) {
  return {
    type: SET_POSTS_DATA,
    payload: {
      status: 'inited',
      data: payload
    }
  }
}
