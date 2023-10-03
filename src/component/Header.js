import React from 'react'

const Header = () => {
    return (
        <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
            <div className='flex' col-span-1>
                <img className="h-10 my-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="hamburger_icon" />
                <img className="h-14 mx-2" src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg" alt="youtube_logo" />
            </div>
            <div className="col-span-10 px-10" >
                <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type="text" placeholder="Search" />
                {/* <img className="h-8" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png" alt="search_icon" /> */}
                <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 ' >🔍</button>

            </div>
            <div className='col-span-1'>
                <img className='h-8' src="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png" alt="user_icon" />

            </div>
        </div>
    )
}

export default Header