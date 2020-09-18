import React, { useEffect, useState } from "react";
import axios from "../hooks/axios";
import "../styles/Row.css";

const basePoster = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, islargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${islargeRow && "row__posterLarge"}`}
            src={`${basePoster}${
              islargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
