import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movies from '../Movies/Movies';

const Search = () => {
    //declaring variables
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // goBack()

        axios
            .get(
                `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchTerm}`
            )
            .then((res) => {
                console.log('response', res.data.Response === "False");
                if (res.data.Response === "False") {
                    console.log("we are in the if");

                    setResults([]);

                } else {
                    console.log("we are in the else");
                    setResults(res.data.Search);
                    console.log("display results", res.data.Search);

                }
            })
            .catch((err) => console.log(err));
    };
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log("search Tearm:", e.target.value);
    };

    useEffect(() => {
        console.log('useeffect');

    }, [results]);




    return (
        <div className="container">
            
            <div class="mx-2 row mt-3">
                <form id="search" class="form-inline">
                    <label class="sr-only" for="inlineFormInputName2">Name</label>
                    <input type="text" value={searchTerm}
                        name="searchTerm"
                        onChange={(handleChange)} className="form-control mb-2 mr-sm-2" id="search-input" placeholder="search name ..." />
                    <button type="submit" class="btn btn-primary mb-2" id="search-btn" onClick={(handleSubmit)}>Search</button>
                </form>
            </div>
            {
                results.length > 0 &&

                <Movies movies={results} />
            }
        </div>
    );
}
export default Search;



