import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'
import { authReducer } from '../components/auth/authReducer'
import { songReducer } from '../components/song/songReducer'

const rootReducer = (history: History) => combineReducers({
    authReducer,
    songReducer,
    router: connectRouter(history)
})

export default rootReducer;