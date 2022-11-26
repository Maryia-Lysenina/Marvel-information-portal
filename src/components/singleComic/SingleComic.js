import './singleComic.scss';
import xMen from '../../resources/img/x-men.png';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import { addComicTC } from '../../Redux/Reducers/comicReducer';
import { useEffect, useState } from 'react';

const SingleComic = () => {
    const {id} = useParams();

    const dispatch = useDispatch();
    useEffect( () => {
      dispatch(addComicTC(id))
    },[])

    const COMIC = useSelector((state) => state.comic.length ? state.comic : [])
    return ( 
        <div className="single-comic">
           {!!COMIC.length ? (<img 
           src={`${COMIC[0].thumbnail.path}.${COMIC[0].thumbnail.extension}`} 
           alt={COMIC[0].title} 
           className="single-comic__img"/>) : null}
           {!!COMIC.length && (<div className="single-comic__info">
               <h2 className="single-comic__name">{COMIC[0].name}</h2>
               <p className="single-comic__descr"> {COMIC[0].description ? COMIC[0].description : 'no information'}</p>
               <p className="single-comic__descr">{COMIC[0].pageCount != 0 ? COMIC[0].pageCount + ' pages' : null}</p>
               <p className="single-comic__descr">Language: en-us</p>
               <div className="single-comic__price">{COMIC[0].prices[0].price != 0 ? COMIC[0].prices[0].price + '$' : 'NOT AVAILABLE'}</div>
           </div>)}
            <NavLink to='/comics' className="single-comic__back">Back to all</NavLink>
        </div>
    )
}

export default SingleComic;