import { Route, Routes } from "react-router-dom"
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import ModalPop from "../Pages/Modal"


function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/modal" element={<ModalPop/>}/>
        </Routes>
    )

}
export default AllRoutes