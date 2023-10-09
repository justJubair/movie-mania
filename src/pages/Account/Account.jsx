import SavedShows from "../../components/SavedShows/SavedShows"

const Account = () => {
  return (
    <div className="w-full text-white bg-black">
      <img
        className="w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/df8e61e4-213e-4edd-a057-6f4bcb4e311d/BD-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="fixed top-0 left-0 w-full h-[400px] bg-black/60"></div>
      <div className="absolute top-[40%] md:top-[20%] p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
      </div>
      <SavedShows/>
    </div>
  )
}

export default Account
