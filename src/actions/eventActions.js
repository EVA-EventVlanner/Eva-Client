import store from '../store/store'
import axios from 'axios'
export function fetchingDataEvent () {
    return(dispatch)=> {
        axios.get('https://eva-server.ariefardi.xyz/events')
        .then(({data})=> {
            console.log(data)
            let result = data.events
            return dispatch(setEventsState(result))
        })
    } 
}

export function setEventsState (payload) {
    return {
        type: 'SET_STATE_EVENT',
        payload: payload
    }
}