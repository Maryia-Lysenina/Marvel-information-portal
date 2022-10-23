import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import { useState } from 'react';
import SearchChar from "../SearchChar/SearchChar";


function CharParent() {
    const [selectedHero, setSelectedHero] = useState({});
    const handleCharChange = (char) => {
        setSelectedHero(char);

        // для скроллинга к подробностям карточки вверх:
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollTo({
                top: 420,
                left: 0,
                behavior: 'smooth',
              });

          }
    }
    return ( 
    <>
        <CharList selectedChar={handleCharChange}/>
        <div>
        <CharInfo hero={selectedHero}/>
        <SearchChar />
        </div>

    </>
    
     );
}

export default CharParent;