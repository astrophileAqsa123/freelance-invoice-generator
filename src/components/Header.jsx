import React from 'react'

const Header = (props) => {
    return (
        <div className="flex justify-between items-center bg-purple-600 w-full h-20 px-6">
            <div className="text-white">
                <h1 className="font-bold text-2xl sm:text-3xl italic">Freelance Invoice</h1>
                <h2 className="font-bold text-lg sm:text-2xl italic">Generator</h2>
            </div>
            <div className="space-x-3">
                <button 
                    type="button" 
                    onClick={props.onGenerateClick} 
                    className="text-black bg-white font-medium rounded-lg text-sm sm:text-base w-24 h-10 mt-3 hover:bg-purple-200 transition duration-300"
                >
                    Generate
                </button>
                <button 
                    onClick={props.onViewClick} 
                    type="button" 
                    className="text-black bg-white font-medium rounded-lg text-sm sm:text-base w-24 h-10 mt-3 hover:bg-purple-200 transition duration-300"
                >
                    View
                </button>
                <button 
                    onClick={props.onSearchClick} 
                    type="button" 
                    className="text-black bg-white font-medium rounded-lg text-sm sm:text-base w-24 h-10 mt-3 hover:bg-purple-200 transition duration-300"
                >
                    Search
                </button>
            </div>
        </div>
    )
}

export default Header
