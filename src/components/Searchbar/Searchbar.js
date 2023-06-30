import React from 'react';
import css from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';




export function SearchBar({onSubmit}) {


  const handleSubmit = event => {
    event.preventDefault();
    const searchName = event.currentTarget.elements.queryName.value;
    if(searchName.trim() === '') {
      console.log('Напиши що-небудь!');
      alert('Напиши що-небудь!');
      // toast('Напиши що-небудь!');
    }
    else {
      onSubmit(searchName);
      event.currentTarget.reset();
    }
   
  };


    return (
      <div className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={handleSubmit}> 
          <input
            className={css.SearchFormInput}
            type="text"
            name="queryName"
            autoComplete="on"
            autoFocus
            placeholder="Name movie"
            // onChange={updateQueryString}
            // value={queryMovie || ''}
          />
          <button type="submit" className={css.SearchFormButton}>
            <FaSearch className={css.Icon} ></FaSearch> 
          </button>
        </form>
      </div>
    );
  
}

