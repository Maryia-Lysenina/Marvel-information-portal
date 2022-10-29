import './comicsLogo.scss';
import logoimg from '../../resources/img/Avengers-for-comics.svg';
import logologo from '../../resources/img/Avengers_logo.png';
const ComicsLogo = () => {
    return ( 
        <div className="comics__logoblock">
            <div className="comics__logoimg">
                <img src={logoimg} alt="logo-img"/>
            </div>
            <p className="comics__logotext">
                New comics every week! 
                Stay tuned!
            </p>
            <div className="comics__logologo">
                <img src={logologo} alt="logo"/>
            </div>
        </div>
     );
}
 
export default ComicsLogo;