import { HEADER_LIST_FAIL, HEADER_LIST_REQUEST, HEADER_LIST_SUCCESS, MISSION_LIST_FAIL, MISSION_LIST_REQUEST, MISSION_LIST_SUCCESS, SOLUTION_LIST_FAIL, SOLUTION_LIST_REQUEST, SOLUTION_LIST_SUCCESS } from "../constants/header0Constants";

function header0Reducer(state={header0:[]}, action){
    switch(action.type){
        case HEADER_LIST_REQUEST:
            return {loading:true}
        
        case HEADER_LIST_SUCCESS:
            return {loading:false, header0:action.payload}
        
        case HEADER_LIST_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }

}

function missionReducer(state={mission:[]}, action){
    switch(action.type){
        case MISSION_LIST_REQUEST:
            return {loading:true}
        case MISSION_LIST_SUCCESS:
            return {loading:false, mission:action.payload}
        case MISSION_LIST_FAIL:
            return{loading:false, error:action.payload}
        default:
            return state;
    }
}

function solutionReducer(state={solution:[]}, action){
    switch(action.type){
        case SOLUTION_LIST_REQUEST:
            return {loading:true}
        case SOLUTION_LIST_SUCCESS:
            return {loading:false, solution:action.payload}
        case SOLUTION_LIST_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state;
    }
}

export {header0Reducer, missionReducer, solutionReducer}