export function HandleBestPosts() {
    return async (dispatch) => {
        return await fetch('http://localhost:3001/best')
            .then(res => res.json())
            .then(res => dispatch({type: 'FETCH_BEST_POSTS', payload: res}))
            .catch(err => console.log(err))
    }
}

export function HandleMoreBestPosts() {
    return async (dispatch) => {
        return await fetch('http://localhost:3001/fetchMoreBest')
            .then(res => res.json())
            .then(res => dispatch({type: 'FETCH_MORE_BEST_POSTS', payload: res}))
            .catch(err => console.log(err))
    }
}

export default {HandleBestPosts, HandleMoreBestPosts}

