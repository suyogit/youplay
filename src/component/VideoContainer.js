import React from 'react'
import { useState, useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCard from './VideoCard'



const VideoContainer = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {

        getVideos();

    }, [])


    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        // console.log(json.items);
        setVideos(json.items);
    }

    return (
        <div className='flex flex-wrap'>
            {videos.map((video,) => {
                return <VideoCard key={video.id} info={video} />
            }
            )}
            {/* <VideoCard info={videos[0]} /> */}
        </div>
    )
}
export default VideoContainer