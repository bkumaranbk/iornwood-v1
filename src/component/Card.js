import React from "react";
import { Link } from "react-router-dom";
import Restaurant from "../page/Restaurant";
import { withTranslation } from 'react-google-multi-lang';


// Destructure props to get title and card list
const CardList = ({ title, cards }) => {
  console.log(cards);

  return (
    <div className="mb-10">
      <div className="text-4xl text-center font-extrabold text-gray-800 bg-gradient-to-r from-gray-900  bg-clip-text text-transparent p-7 pl-0 relative">
        <div className="absolute inset-0 -z-10"></div>
        {title}
      </div>
      <div className="pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {(cards.length > 0) && cards != null  ? (
            cards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={card.Image}
                  alt={title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {card.Name}
                  </h2>
                  <p className="mt-2 text-gray-600">{card.ShortDescription}</p>
                  <div className="mt-4 text-right">
                    <Link to={`/place/${card._id}`} className="text-blue-500 hover:underline">
                         Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">Informations not available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default withTranslation(CardList);
