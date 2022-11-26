import './SearchChar.scss';
import { useEffect, useState } from 'react';
import {API_KEY, BASED_CHARACT_URL, NULL_OBJ} from '../../Constants/index';

const SearchChar = () => {
    const [nameChar, setNameChar] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [charID, setCharID] = useState(0)
    const [error, setError] = useState(false)
    const [reqError, setReqError] = useState(false)
    useEffect(() => {
        if (nameChar){
            async function getCharacter(url){
                const res = await fetch(url);
                return res.json()
            }
            getCharacter(`${BASED_CHARACT_URL}?name=${nameChar}&${API_KEY}`)
            .then(res => {
                setReqError(false)
                setError(false)
                if (res.data.results.length){
                    setCharID(res.data.results[0].id)
                } else setError(true)
            })
        }
        }, [nameChar])

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleClick = () => {
        setReqError(false)
        setError(false)
        if (inputValue){
            setNameChar(inputValue.trim().toUpperCase())
        } else setReqError(true)
       
    }
    return ( 
        <div className="char__search">
            <p className="char__comics">Or find a character by name:</p>
            <div>
              
                    <input 
                    className="char__comics__item"
                    placeholder='Enter name'
                    onChange={handleChange}
                    />
                    
                    <button onClick={handleClick}
                    className="button button__main button__find">
                        <div className="inner">FIND</div> 
                    </button>
                
              
                    {error && (
                        <p className='searchChar__error'>The character was not found. Check the name and try again</p>
                    )}
                      {reqError && (
                        <p className='searchChar__error'>This field is required</p>
                    )}
                    {!!charID && !reqError && !error && (
                        <div className='searchChar__result'>
                        <p className='searchChar__right'>There is! Visit {nameChar} page?</p>
                        <a href='' className="button button__secondary" target="blank">
                            <div className="inner">TO PAGE</div>
                        </a>
                        </div>
                       ) }
                
            </div>

        </div>
     );
}
 
export default SearchChar;