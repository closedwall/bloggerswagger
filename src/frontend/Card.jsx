import React from 'react';

const Card = ({ title="Blog1", author = "Rajesh", date="12/12/12", content="nice content" }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">Author: {author}</p>
      <p className="text-gray-600">Published on: {date}</p>
      <hr className="my-4" />
      <p className="text-gray-700">{content}</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
