import jsonPlaceholder from "./../apis/jsonPlaceholder"
import _ from "lodash"
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    // const userIds = _.uniq(_.map(getState().posts, 'userId'))
    // userIds.forEach(user_id=>dispatch(fetchUser(user_id)))
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(user_id => dispatch(fetchUser(user_id)))
        .value()
}
export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('posts')
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }
}
// non memoize version
export const fetchUser = (user_id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${user_id}`)
    dispatch({type:'FETCH_USER', payload: response.data})
}
/*
// memoize version
export const fetchUser = (user_id) => (dispatch) => {
    _fetchUser(user_id, dispatch)
};
const _fetchUser = _.memoize(async (user_id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${user_id}`)
    dispatch({type:'FETCH_USER', payload: response.data})
})
*/