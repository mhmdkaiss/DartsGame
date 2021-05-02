const initialState = {
    accessToken : ''
}

export default tokenReducer = (state=initialState,action) => {
    switch(action.type){
        case 'setAccessToken':
            return {accessToken:action.payload}
        case 'removeAccessToken':
            return {accessToken:action.payload}
    }
    return state
}