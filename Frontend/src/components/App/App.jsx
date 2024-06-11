
import {Route , Routes} from "react-router-dom";
import Header from "../Header/Header.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";

import '../../App.css'
import Dishes from "../Dishes/Dishes.jsx";


function App() {


  return (
    <>
        <Header />
        <div className={"container"}>
            <div className={"side"}>
                <Sidebar />
            </div>


            <Routes>
                <Route exact path={'/category/:category'} element={<Dishes />} />
            </Routes>


        </div>




    </>
  )
}

export default App
