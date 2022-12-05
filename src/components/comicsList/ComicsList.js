import './comicsList.scss';
import { useDispatch , useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { addComicsTC, addMoreComicsTC } from '../../Redux/Reducers/comicsReducer';
import ComicsLogo from '../comicsLogo/ComicsLogo';
import { NavLink } from 'react-router-dom';
import Spinner from '../spinner/Spiner';


const ComicsList = () => {
    const [loading, setLoading] = useState(true)
    let offset = 0;
    const [count, setCount] = useState(0);
    const [limit, setLimit] = useState(8);

    const dispatch = useDispatch();
    useEffect( () => {
       offset == 0 ? dispatch(addComicsTC(limit)) : dispatch(addMoreComicsTC(limit,offset))
        setLoading(false)    
    }, [count])

    const COMICS = useSelector((state) => state.comics.length ? state.comics : [])
    const addMoreComics = () => {
        setLimit(limit + 8);
        setCount(count + 1);
    }
    return (
        <div className="comics__wrapper">
            <ComicsLogo />
            <div className="comics__list">
            {loading ? <Spinner />
                : <ul className="comics__grid">
                    { COMICS.length ? COMICS.map((item, id) => 
                    <li className="comics__item" key={id}>
                        <NavLink to={`/comics/${item.id}`}>
                            <img 
                            src={`${item.thumbnail.path}.${item.thumbnail.extension}`} 
                            alt={item.title} className="comics__item-img"/>
                            <div className="comics__item-name">{item.title}</div>
                            <div className="comics__item-price">{item.prices[0].price != 0 ? item.prices[0].price + '$' : 'NOT AVAILABLE'}</div>
                        </NavLink>
                    </li>
                    ) : null}
                </ul>}
                <button onClick={addMoreComics} className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        </div>
    )
}

export default ComicsList;