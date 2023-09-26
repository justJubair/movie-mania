

const Navbar = () => {
  return (
    <div className="p-6 items-center flex justify-between absolute w-full z-[100]">
        <h1 className="text-3xl text-red-600 cursor-pointer">NETFLIX</h1>
        <div>
            <button className="btn mr-6 bg-black text-white border-none hover:bg-white hover:text-black">Sign in</button>
            <button className="btn bg-red-600 border-none text-white hover:bg-red-700">Sign up</button>
        </div>
    </div>
  )
}

export default Navbar
