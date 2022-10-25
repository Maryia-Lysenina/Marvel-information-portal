import RandomChar from "../../components/randomChar/RandomChar";
import decoration from '../../resources/img/vision.png';
import CharParent from "../../components/CharParent/CharParent";

const Characters = () => {
    return ( 
     <main>
          <RandomChar/>
     
          <div className="char__content">
          <CharParent />
          </div>
          
          <img className="bg-decoration" src={decoration} alt="vision"/>
     </main>
     );
}
 
export default Characters;