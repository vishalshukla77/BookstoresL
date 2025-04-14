import React from 'react'
import bannering from "../../assets/banner.png"

function Banner() {
  return (
    <div className="flex flex-col md:flex-row py-16 px-6 md:px-20 justify-between items-center bg-white">
      {/* Text Section */}
      <div className="md:w-1/2 w-full mb-10 md:mb-0">
        <h1 className="md:text-6xl text-3xl font-extrabold mb-6 leading-tight text-gray-800">
          Discover Your Next <span className="text-indigo-600">Favorite Read</span><br />
          at <span className="text-orange-500">BookNest</span>
        </h1>

        <h5 className="md:text-4xl text-xl font-semibold mb-4 text-gray-700">
          📚 New Releases This Week
        </h5>

        <p className="text-gray-600 md:text-lg text-base mb-6">
          It's time to refresh your reading list with this week's top releases.
          From heart-pounding thrillers to inspiring memoirs, there's something
          for every kind of reader.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300">
          Subscribe Now
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center md:justify-end">
        <img src={bannering} alt="Books Banner" className="w-full max-w-md md:max-w-lg" />
      </div>
    </div>
  )
}

export default Banner
