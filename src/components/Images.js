import one from "../assets/images/download (2).jpg"
import two from "../assets/images/download (3).jpg"
import three from "../assets/images/download (4).jpg"
import four from "../assets/images/download (5).jpg"
import five from "../assets/images/download (6).jpg"
import six from "../assets/images/download (7).jpg"
import seven from "../assets/images/download (8).jpg"
import eight from "../assets/images/download (9).jpg"



function Images()
{
    return(

        
        <div class="image-container">

            <div class="imgs">
                <img src={one} alt="one"></img>
                <h4>Tails of friendship</h4>
            </div>
            <div class="imgs">
                <img src={two} alt="two"></img>
                <h4>Mans Best Friend</h4>
            </div>
            <div class="imgs">
                <img src={three} alt="three"></img>
                <h4>Wings of Freedom</h4>
            </div>
            <div class="imgs">
                <img src={four} alt="four"></img>
                <h4>Gentle Giant</h4>
            </div>
            <div class="imgs">
                <img src={five} alt="five"></img>
                <h4>The King Is Miniature</h4>
            </div>
            <div class="imgs">
                <img src={six} alt="six"></img>
                <h4>Majestic Cub</h4>
            </div>
            <div class="imgs">
                <img src={seven} alt="seven"></img>
                <h4>Graceful Giraffe</h4>
            </div>
            <div class="imgs">
                <img src={eight} alt="eight"></img>
                <h4>Majestic Peacock</h4>
            </div>
            
        </div>
    )
}
export default Images