import * as React from 'react'
function KeyImage({ images }) {
    
    
    return (
        <>
        {images.map((image,index)=>{ return(
        <div className="carousel">

            <input className="carousel-locator" id={`slide-${index}`} type="radio" name="carousel-radio" />
            

            <div className="carousel-container">

                <figure className="carousel-item">
                    <label className="item-prev btn btn-action btn-lg" for={`slide-${Number(index)-1}`}><i className="icon icon-arrow-left"></i></label>
                    <label className="item-next btn btn-action btn-lg" for={`slide-${Number(index)+1}`}><i className="icon icon-arrow-right"></i></label>
                    <img className="img-responsive rounded" src={`/server/${image}`} alt="macOS Yosemite Wallpaper" />
                </figure>
                <div class="carousel-nav">
        <label class="nav-item text-hide c-hand" for={`slide-${index}`} >{index}</label>
            </div>
            </div>
        </div>)
        })}
        </>
            )
}


 export default KeyImage