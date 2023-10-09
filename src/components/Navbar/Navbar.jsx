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
    <div className="p-6 items-center  flex justify-between absolute w-full z-[100]">
        <Link to="/" className="text-3xl text-red-600 cursor-pointer">NETFLIX</Link>
        <div>
            {
              user ? <Link to="/account" className="btn mr-6 bg-black text-white border-none hover:bg-white hover:text-black">Account</Link> : <Link to="/signin" className="btn mr-6 bg-black text-white border-none hover:bg-white hover:text-black">Sign in</Link>
            }
            {
              user ? <button onClick={handleLogin} className="btn bg-red-600 border-none text-white hover:bg-red-700">Log out</button> : <Link to="/signup" className="btn bg-red-600 border-none text-white hover:bg-red-700">Sign up</Link>
            }
        </div>
    </div>
  )
}

export default Navbar
