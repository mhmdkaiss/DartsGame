const initialState = {
    accessToken : '',
    time:0,
}

export default tokenReducer = (state=initialState,action) => {
    switch(action.type){
        case 'setAccessToken':
            return {accessToken:action.payload}
        case 'removeAccessToken':
            return {accessToken:action.payload}
        case 'runTimer':
            return {time:state.time+action.payload}
        case 'rerunTimer':
            return {time:action.payload}
    }
    return state
}