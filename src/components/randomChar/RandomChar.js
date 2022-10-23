import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import { useEffect, useState } from 'react';
import {API_KEY, BASED_URL, NULL_OBJ} from '../../Constants/index'
import Spinner from '../spinner/Spiner';
import ErrorMessage from '../errorMessage/ErrorMessage';


const RandomChar = () => {
   


    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [random, setRandom] = useState(false)
    const [hero, setHero] = useState(NULL_OBJ)
    let character = {};
    useEffect(() => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
            async function getCharacter(url){
                const res = await fetch(url);
                if (!res.ok){
                    setError(true)
                }
            return res.json()
            }
        getCharacter(`${BASED_URL}/${id}?${API_KEY}`)
            .then(res => setHero(res.data.results[0]))
            setLoading(false)

    }, [random])

    return (
        <div className="randomchar">
                {loading && <Spinner /> }
                {error &&  <ErrorMessage />}
                { !loading && !error && (
                <div className="randomchar__block">
                    <div>
                    { hero.thumbnail.path && (
                        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                         alt={hero.name} 
                         className="randomchar__img"/>
                    )}
                    </div>
                    <div className="randomchar__info">
                        <p className="randomchar__name">{hero.name}</p>
                        <p className="randomchar__descr">
                            {hero.description ? hero.description : 'It`s nothing about yet'}
                        </p>
                        <div className="randomchar__btns">
                            <a href={!!hero.urls[0].url ? hero.urls[0].url : ''} className="button button__main" target="blank">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={!!hero.urls[1].url ? hero.urls[1].url : ''} className="button button__secondary" target="blank">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                )}
            
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button 
                    onClick={() => {random === true ? setRandom(false) : setRandom(true)}} 
                    className="button button__main">
                        <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

export default RandomChar;