import React from 'react'

const AboutWidget = () => {
  return (
    <div className="bg-white p-3 border-gray-300 border-2 rounded-lg mt-5 shadow-md">
    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
        <span className="">
            <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </span>
        <span className="tracking-wide">About</span>
    </div>
    <div className="text-gray-700">
        <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">User Name</div>
                <div className="px-4 py-2">23794euodn</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Position</div>
                <div className="px-4 py-2">Experienced Photographer</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Instagram</div>
                <div className="px-4 py-2">@anskjfsduf</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Contact No.</div>
                <div className="px-4 py-2">9237438574</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Events Covered</div>
                <div className="px-4 py-2">5</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Department</div>
                <div className="px-4 py-2">DNB</div>
            </div>
        </div>
    </div>

</div>
  )
}

export default AboutWidget