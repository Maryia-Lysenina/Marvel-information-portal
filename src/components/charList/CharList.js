import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';
import { useEffect, useState } from 'react';
import {API_KEY, BASED_CHARACT_URL, NULL_OBJ} from '../../Constants/index';



const CharList = ({selectedChar}) => {
    let offset = 0;
    // let offset = Math.floor(Math.random() * 100);
    const [limit, setLimit] = useState(9);
    
    const [heros, setHeros] = useState([])

    const [count, setCount] = useState(0);
    useEffect(() => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
         
            async function getCharacter(url){
                const res = await fetch(url);
            return res.json()
            }
            
        getCharacter(`${BASED_CHARACT_URL}?limit=${limit}&offset=${offset}&${API_KEY}`)
            .then(res => setHeros(res.data.results))


    }, [count])
   
    const moreChar = () => {
        setLimit(limit + 9);
        setCount(count + 1);
        console.log('clicked more')
    }

    
    return (
        <div className="char__list">
            <ul className="char__grid">

                {heros.map((item, id) => 
                     <li className="char__item" key={id} onClick={() => selectedChar(item)}>
                        {item.thumbnail.path && (
                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name}/>
                     )}
                     <div className="char__name">{item && item.name}</div>
                    </li>
                )}

            </ul>
            <button onClick={() => moreChar()}className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default CharList;