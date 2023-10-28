import axiosUrl from "../Components/Intercepter";
import * as types from "./actionTypes";

const getUserSuccess = (payload) => {
  return {
    type: types.GET_USER_SUCCESS,
    payload,
  };
};

const getSingleUser=(payload)=>{
    return {
        type: types.GET_SINGLEUSER_SUCCESS,
        payload,
    };
}
const postUserSuccess = (payload) => {
  return {
    type: types.POST_USER_SUCCESS,
    payload,
  };
};

const postUserDelete = () => {
  return {
    type: types.POST_USER_DELETE,
  };
};

export const GetUser = (dispatch) => {
  axiosUrl
    .get("/user")
    .then((res) => {
      dispatch(getUserSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetSingleUser=(data)=>(dispatch)=>{
    dispatch(getSingleUser(data))

}

export const PostUser = (data) => (dispatch) => {
  axiosUrl
    .post("/user", data)
    .then((res) => {
      dispatch(postUserSuccess(res.data));
      GetUser(dispatch)
    })
    .catch((err) => {
      console.log(err);
    });
};

export const DeleteUser = (id) => (dispatch) => {
  axiosUrl
    .delete(`/user/${id}`)
    .then((res) => {
      dispatch(postUserDelete());
      GetUser(dispatch)
    })
    .catch((err) => {
      console.log(err);
    });
};

//export {getUserSuccess, postUserSuccess}
