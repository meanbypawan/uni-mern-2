/*
  1
  1>
  2
  2>
  3 
  3>
  4
  4>
  5 
*/
import "./Rating.css";

function Rating({ratingValue}){
    const showRating= ()=>{
        if(ratingValue == 1)
        return <>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
         </> 
        else if(ratingValue > 1 && ratingValue < 2)
            return <>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star-half-o checked"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
         </>  
         else if(ratingValue == 2)
            return <>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
         </>  
         else if(ratingValue > 2 && ratingValue < 3)
            return <>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star-half-o checked"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
         </>
         else if(ratingValue == 3)
            return <>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star"></span>
             <span className="fa fa-star"></span>
         </>   
         else if(ratingValue > 3 && ratingValue < 4)
            return <>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star-half-o checked"></span>
            <span className="fa fa-star"></span>
            </>
        else if(ratingValue == 4)
            return <>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            </>    
        else if(ratingValue > 4 && ratingValue < 5) 
            return <>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-star checked"></span>
             <span className="fa fa-start checked"></span>
            <span className="fa fa-star-half-o checked"></span>
            </>   
    }
    return <>
      {showRating()}
    </>
}
export default Rating;