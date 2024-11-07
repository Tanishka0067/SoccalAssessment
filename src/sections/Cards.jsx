import React from "react";
import {Star} from "lucide-react";
const Cards = ({ Poster, Title, Genre, ratings, imdbVotes }) => {
  console.log(Poster, Title, Genre, ratings, imdbVotes);
  return (
    <div className="mb-6 px-3 w-72 mx-auto">
      <div
        className="h-96 w-60 rounded-lg flex flex-col justify-end"
        style={{
          backgroundImage: `url(${Poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="rounded-md px-6 p-2 bg-black text-white flex flex-row justify-around">
          <p className="text-sm flex flex-row justify-between items-center gap-2">
            <Star /> {ratings}/10
          </p>
          <p className="text-sm"> {imdbVotes} Votes</p>
        </div>
      </div>{" "}
      <h2 className="text-xl pt-4 font-bold text-wrap">{Title}</h2>
      <p className="text-base text-gray-600 font-medium">{Genre}</p>
    </div>
  );
};

export default Cards;
