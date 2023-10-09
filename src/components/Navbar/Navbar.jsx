import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast"


const Navbar = () => {
  const {user, logOut} = useAuth()
  const navigate = useNavigate()
  const handleLogin = ()=>{
    logOut()
    .then(()=>{
      toast.success("Logged out")
      navigate("/")
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }
  return (
    <div className="p-6 items-center  flex flex-col  justify-between absolute w-full z-[100] md:flex-row">
        <Link to="/" className="text-3xl mb-2 text-red-600 cursor-pointer">NETFLIX</Link>
        <div>
            {
              user ? <Link to="/account" className="btn btn-sm mr-6 bg-black text-white border-none hover:bg-white hover:text-black md:btn md:bg-black md:text-white">Account</Link> : <Link to="/signin" className="btn btn-sm mr-6 bg-black text-white border-none hover:bg-white hover:text-black md:btn md:bg-black md:text-white">Sign in</Link>
            }
            {
              user ? <button onClick={handleLogin} className="btn btn-sm bg-red-600 border-none text-white  hover:bg-red-700 md:btn md:bg-red-600 md:text-white">Log out</button> : <Link to="/signup" className="btn btn-sm bg-red-600 border-none text-white hover:bg-red-700 md:btn md:bg-red-700 md:text-white">Sign up</Link>
            }
        </div>
    </div>
  )
}

export default Navbar
