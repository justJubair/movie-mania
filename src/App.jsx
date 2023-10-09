import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import { Toaster } from "react-hot-toast"


function App() {
 

  return (
    <div>
     
      <Navbar/>
      <Outlet/>
      
    <Toaster/>
    </div>
  )
}

export default App
