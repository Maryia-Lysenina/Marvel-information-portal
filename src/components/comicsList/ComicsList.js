import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import { useDispatch , useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { addComicsTC } from '../../Redux/Reducers/comicsReducer';


const ComicsList = () => {

    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(addComicsTC())
    }, [])

   const COMICS = useSelector((state) => {
       return state.comics.length ? state.comics : []
    })
    console.log(COMICS)

    return (
        <div className="comics__list">
            <ul className="comics__grid">
                 { COMICS.length && COMICS.map(item=> {
                    {console.log(item.prices[0].price)}
                    <li>
                        {/* <img 
                        src={`${item.thumbnail.path}.${item.thumbnail.extension}`} 
                        alt={item.title} 
                        className="comics__item-img"/> */}
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.prices[0].price}</div>
                    </li>
                })}
                <li className="comics__item">
                    <a href="#">
                        <img src={uw} alt="ultimate war" className="comics__item-img"/>
                        <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics__item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics__item">
                    <a href="#">
                        <img src={xMen} alt="x-men" className="comics__item-img"/>
                        <div className="comics__item-name">X-Men: Days of Future Past</div>
                        <div className="comics__item-price">NOT AVAILABLE</div>
                    </a>
                </li>
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;