
import axios from "axios"

const axiosUrl = axios.create({
    baseURL: "https://lazy-rose-turkey-coat.cyclic.app",
    timeout: 10000
})

axiosUrl.interceptors.request.use((res)=>{
    res.headers.Authorization= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    return res;
})

export default axiosUrl