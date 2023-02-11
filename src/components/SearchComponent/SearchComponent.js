import React, { useState } from 'react';
import axios from 'axios';

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
                    console.log("display results", results);
                    setResults(res.data.search);
                }
            })
            .catch((err) => console.log(err));
    };
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };



    return (
        <div className="container">
            <div className="col-md-6">
                <form action="">

                    <input type="text"
                        value={searchTerm}
                        name="searchTerm"
                        className='form-control'
                        onChange={(handleChange)}
                    />
                    <button type="submit" className="btn btn-secondary" onClick={(handleSubmit)}>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Search;



