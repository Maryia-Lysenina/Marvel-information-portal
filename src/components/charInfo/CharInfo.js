import './charInfo.scss';
import { useState, useEffect } from 'react';
import {API_KEY, BASED_URL, NULL_OBJ} from '../../Constants/index'
import axios from 'axios';

const CharInfo = ({hero}) => {

    const [newHero, setNewHero] = useState(NULL_OBJ)

            //первый рендер случайной карточки слева:
    useEffect(() => {
            const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
            axios(`${BASED_URL}/${id}?${API_KEY}`)
            .then(res => setNewHero(res.data.results[0]))
    }, [])
            // при клике на карточку справа перерендер подробной инфы справа:
    useEffect(() => {
        hero.name && setNewHero(hero)
    }, [hero])

    return (
        <div className="char__info">
            <div className="char__basics">
                {newHero.thumbnail.path && (
                    <img src={`${newHero.thumbnail.path}.${newHero.thumbnail.extension}`}
                        alt={newHero.name} 
                        className="randomchar__img"/>
                    )}
                <div>
                    <div className="char__info-name">{newHero.name}</div>
                    <div className="char__btns">
                        <a href={!!newHero.urls[0].url ? newHero.urls[0].url : ''} className="button button__main" target="blank">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={!!newHero.urls[1].url ? newHero.urls[1].url : ''} className="button button__secondary" target="blank">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {newHero.description ? newHero.description : 'It`s nothing about yet'}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {newHero.comics.items.map((item, id) => 
                     <li className="char__comics-item" key={id} >
                        {item && item.name}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default CharInfo;