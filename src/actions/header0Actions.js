import axios from 'axios'
import { HEADER_LIST_FAIL, HEADER_LIST_REQUEST, HEADER_LIST_SUCCESS, MISSION_LIST_FAIL, MISSION_LIST_REQUEST, MISSION_LIST_SUCCESS, SOLUTION_LIST_FAIL, SOLUTION_LIST_REQUEST, SOLUTION_LIST_SUCCESS } from '../constants/header0Constants'


const listHeaders = () => async (dispatch) =>{
    try {
        dispatch({type:HEADER_LIST_REQUEST})
        const {data} = await axios.get("http://localhost:8081/")
        dispatch({type:HEADER_LIST_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({type:HEADER_LIST_FAIL,payload:error.message})
        
    }
}

const listMission = () => async(dispatch) =>{
    try {
        dispatch({type:MISSION_LIST_REQUEST})
        const {data} = await axios.get("http://localhost:8081/mission/")
        dispatch({type:MISSION_LIST_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({type:MISSION_LIST_FAIL, payload:error.message})
        
    }
}

const listSolution = () => async(dispatch) =>{
    try {
        dispatch({type:SOLUTION_LIST_REQUEST});
        const {data} = await axios.get("http://localhost:8081/solution")
        dispatch({type:SOLUTION_LIST_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:SOLUTION_LIST_FAIL,payload:error.message})
        
    }
}

export {listHeaders, listMission, listSolution}