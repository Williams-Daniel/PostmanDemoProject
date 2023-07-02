import {createBrowserRouter} from "react-router-dom"
import Layout from "../Components/Common/Layout"
import HomeScreen from "../Pages/HomeScreen"
import SignIn from "../Pages/Register/SignIn"
import SignUp from "../Pages/Register/SignUp"

const MainRoute = createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<HomeScreen/>
                },
                {
                    path:"/signin",
                    element:<SignIn/>
                },
                {
                    path:"/signup",
                    element:<SignUp/>
                },
            ]
        }
    ]
)


export default MainRoute