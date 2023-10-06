import React from 'react'

const VideoCard = ({ info }) => {
  //console.log(info)
  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails } = snippet
  const { medium } = thumbnails

  const { viewCount } = statistics

  return (
    <div className="p-2 m-2 w-60 shadow-lg">

      <img className='rounded-lg' src={medium.url} alt="thumbnail" />

      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>


    </div>
  )
}
export const AdVideoCard = ({ info }) => {
  return (

    <div className="p-1 m-1 border border-red-700">
      <VideoCard info={info} />
    </div>

  )

}

export default VideoCard