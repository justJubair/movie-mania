import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="p-6 items-center  flex justify-between absolute w-full z-[100]">
        <Link to="/" className="text-3xl text-red-600 cursor-pointer">NETFLIX</Link>
        <div>
            <Link to="/signin" className="btn mr-6 bg-black text-white border-none hover:bg-white hover:text-black">Sign in</Link>
            <Link to="/signup" className="btn bg-red-600 border-none text-white hover:bg-red-700">Sign up</Link>
        </div>
    </div>
  )
}

export default Navbar
