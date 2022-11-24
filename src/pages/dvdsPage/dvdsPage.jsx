import React, { useEffect, useState } from "react";
import { FilterComponent } from "../../components/filter/filter.component";
import { MovieComponent } from "../../components/movies/movie.component";

import "./dvdsPage.css";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2e07c4c921msha23a305aff1953fp13be08jsnb58eded0e68c",
    "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
  },
};

export const DvdsPage = (props) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilterMovies] = useState([]);

  const getMoviesFromServer = async () => {
    let result = await fetch(
      "https://movies-app1.p.rapidapi.com/api/movies",
      options
    );
    let jsonData = await result.json();
    let moviesArr = jsonData.results;
    setMovies(moviesArr);
    setFilterMovies(moviesArr);
  };

  const handleFilter = (onChangeEvent) => {
    let freeText = onChangeEvent.target.value;
    if (freeText) {
      let filterArr = movies.filter((m) => m.titleOriginal.includes(freeText));
      setFilterMovies(filterArr);
    } else {
      setFilterMovies(movies);
    }
  };
  useEffect(() => {
    getMoviesFromServer();
  }, []);
  return <div>{getList(movies, filteredMovies, handleFilter)}</div>;
};

const getList = (movies, filteredMovies, handleChange) => {
  if (movies.length === 0) {
    return (
      <div>
        <h1>Is Loading please wait </h1>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <FilterComponent handleChange={handleChange}></FilterComponent>
          {filteredMovies.map((m) => {
            return (
              <MovieComponent
                title={m.titleOriginal}
                description={m.description}
                imageUrl={m.image}
                linkVideo={m.embedUrls[0].url}
                key={m.title}
              ></MovieComponent>
            );
          })}
        </div>
      </div>
    );
  }
};
