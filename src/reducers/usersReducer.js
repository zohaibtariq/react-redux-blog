export default (state = [], action) => {
    if (action.type === 'FETCH_USER')
        return [...state, action.payload]
    else if (action.type === 'FETCH_USERS')
        return action.payload
    return state
}