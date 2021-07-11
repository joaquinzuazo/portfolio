const Video=({url})=>{
    return (
    <div className='col-sm-8 offset-md-2 embed-responsive embed-responsive-4by3' id='video-url'>
        <iframe className='embed-responsive-item' src={url} title={ "prject-video" } />
    </div>
    )
}

export default Video
    
