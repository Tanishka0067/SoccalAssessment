import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";
import Loader from "./Loader";

const MoviesDisp = ({ searchQuery }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null); 
      try {
        const searchResponse = await axios.get(`${apiUrl}?apikey=${apiKey}&s=${searchQuery || "batman"}&page=${page}`);
        if (searchResponse.data && searchResponse.data.Search) {
          const detailedMovies = await Promise.all(
            searchResponse.data.Search.map(async (movie) => {
              const detailsResponse = await axios.get(`${apiUrl}?apikey=${apiKey}&i=${movie.imdbID}`);
              return detailsResponse.data;
            })
          );
          setData(detailedMovies);
        } else {
          setData([]);
          setError("No movies found.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery, page]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-8 px-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {data.length ? (
          data.map((movie) => (
            <Cards
              key={movie.imdbID}
              Poster={movie.Poster}
              Title={movie.Title}
              Genre={movie.Genre}
              ratings={movie.imdbRating}
              imdbVotes={movie.imdbVotes}
            />
          ))
        ) : (
          <div>No results found</div>
        )}
      </div>
      <div className="flex flex-row justify-center gap-4 text-white">
        <button
          className="p-1 px-6 bg-slate-500 rounded-md"
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        >
          Prev
        </button>
        <button
          className="p-1 px-6 bg-slate-500 rounded-md"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MoviesDisp;
