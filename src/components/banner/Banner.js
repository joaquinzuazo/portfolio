const Banner=({url})=>{
    return(
    <div className='img'>
        <img src={`${process.env.PUBLIC_URL}${url}`} className='itemBanner-img' alt="img-itemBanner" />
    </div>
    );
};

export default Banner;