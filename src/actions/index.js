import jsonPlaceholder from "./../apis/jsonPlaceholder"
export const fetchPosts = () => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get('posts')
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        })
    }
}
export const fetchUser = (user_id) => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get(`users/${user_id}`)
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })
    }
}
export const fetchUsers = (user_id) => {
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get(`users`)
        dispatch({
            type: 'FETCH_USERS',
            payload: response.data
        })
    }
}