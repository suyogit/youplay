import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';


const WatchPage = () => {


    const [searchParams] = useSearchParams();
    const id = searchParams.get('v');
    //  console.log(id);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, []
    )

    return (
        <div flex flex-col>
        <div>
            <iframe width="1000" height="500" src={"https://www.youtube.com/embed/" + id}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
        </div>

            <div>
                <CommentsContainer />
            </div>
        </div>
    )
}

export default WatchPage