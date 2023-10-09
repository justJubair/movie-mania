import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden lg:block absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/df8e61e4-213e-4edd-a057-6f4bcb4e311d/BD-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="fixed top-0 left-0 w-full h-screen bg-black/60"></div>
      <div className="fixed w-full px-4 py-12 lg:py-24 z-50">
        <div className="max-w-[450px] lg:h-[600px] mx-auto bg-black/70 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
            <form className="flex flex-col items-center">
                <input className="px-4 py-3 w-full bg-gray-600 rounded mb-4" type="email" placeholder="Email" required/>
                <input className="px-4 py-3 w-full bg-gray-600 rounded mb-2" type="password" placeholder="Password" required/>
                <input className="btn mt-8 bg-red-700 border-none w-full text-white" type="submit" value="Sign Up" />
            </form>
            <div className="flex justify-between items-center mt-3">
              
              <p className="flex items-center gap-2 text-gray-400 "> 
              <input type="checkbox" name="remember" id="remember" />
                <small>Remember me</small></p>
                <p className="text-gray-400"><small>Need help?</small></p>
            </div>
            <div className="flex gap-2 mt-14">
              <p className="text-gray-400">Already have an account?</p>
              <Link>Sign in now</Link>
            </div>
          
          </div>
        </div>
      
      </div>
     
    </div>
  );
};

export default SignUp;