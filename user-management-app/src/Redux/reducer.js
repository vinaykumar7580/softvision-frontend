import * as types from "./actionTypes"

const initialState={
    user:[],
    singleUser:{}
}

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case types.GET_USER_SUCCESS:
            return{
                ...state,
                user:action.payload
            }
        case types.POST_USER_SUCCESS:
            return{
                ...state,
                user:[...state.user, action.payload]
            }

        case types.POST_USER_DELETE:
            return{
                ...state,

            }
        case types.GET_SINGLEUSER_SUCCESS:
            return{
                ...state,
                singleUser:action.payload
            }
        default:
            return state;

    }

}
export {reducer}