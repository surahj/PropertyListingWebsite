import * as React from 'react'
function KeyImage({ images }) {
    // function for courosel checked
    const imgLength = images.length
    const check=(index)=>{
        if(index==0){
            return 0
        }
       
    }
    const indexPlus=(index)=>{
        
       if ((index+1)===(imgLength)){
           return imgLength-imgLength
       }
       else{
           return index+1
       }
    }

    const indexMinus=(index)=>{
        
        if ((index-1)===-1){
            return imgLength-1
        }
        else{
           return index-1
        }
     }
    
    return (
        <>
        
        <div className="carousel">
       
             
             {images.map((image,index)=> {return(
             <input key={index} className="carousel-locator" id={`${index}`} type="radio" name="carousel-radio" hidden={`${index}`} defaultChecked={`${check(index)}`}/> )})}
            

            <div className="carousel-container" >
            {images.map((image,index)=> {return(
                <figure className="carousel-item" key ={index}> 
                    <label className="item-prev btn btn-action btn-lg"  htmlFor={`${indexMinus(index)}`}><i className="icon icon-arrow-left"></i></label>
                    <label className="item-next btn btn-action btn-lg" htmlFor={`${indexPlus(index)}`}><i className="icon icon-arrow-right"></i></label>
                      <img className="img-responsive rounded" 
                         src={`/server/${image}`} alt={`${index}`} />
            </figure> )})}
            </div>
                <div className="carousel-nav">
                {images.map((image,index)=> {return(
                <label key ={index} className="nav-item text-hide c-hand" htmlFor={`${index}`} >{index} </label> )})}
            </div>
            
            
        </div>
      
        </>
            )
}


 export default KeyImage