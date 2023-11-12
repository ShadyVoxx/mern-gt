import React from 'react'

const ProfilePicWidget = () => {
  return (
    <div className="w-full md:w-3/12 md:mx-2">
    <div className="bg-white p-3 border-t-4 border-red-800">
        <div className="image overflow-hidden">
            <img className="h-auto w-[200px] mx-auto rounded-full border-2 border-gray-800"
                src="https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"
                alt=""/>
        </div>
    
        <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Name</h1>
        <h3 className="text-gray-600 font-lg text-semibold leading-6">Caption</h3>
       
        <ul
            className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
            <li className="flex items-center py-3">
                <span>Status</span>
                <span className="ml-auto"><span
                        className="bg-red-800 py-1 px-2 rounded text-white text-sm">Active</span></span>
            </li>
            <li className="flex items-center py-3">
                <span>Member since</span>
                <span className="ml-auto">Nov 07, 2016</span>
            </li>
        </ul>
    </div>
 </div>
  )
}

export default ProfilePicWidget