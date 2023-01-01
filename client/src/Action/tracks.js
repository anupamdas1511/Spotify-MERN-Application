import * as api from '../Api'
import { FETCH_TRACKS } from '../Constants/Tracks'

export const searchTracks = (searchQuery) => async (dispatch) => {
    try {
        const { data } = await api.searchQuery(searchQuery)
        dispatch({ type: FETCH_TRACKS, payload: data })
    } catch (error) {
        console.log(error)
    }
}