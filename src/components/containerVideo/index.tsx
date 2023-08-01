"use client"
import ReactPlayer from 'react-player'

interface IContainerVideo{
    video: string
}

export default function ContainerVideo( {video} : IContainerVideo){

    return(
        <div >
                <ReactPlayer 
                    url={video}
                    controls={true}
                    playbackRate={1.5}
                />
        </div>
    )
}