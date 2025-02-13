import React from "react";

const News = () => {
  return (
    <div className="flex flex-col flex-grow min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          News
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Welcome to the News page. Here, you can find the latest updates and
          information.
        </p>
        <ul className="space-y-4">
          <li className="bg-white shadow-md p-4 rounded-lg hover:bg-gray-50 transition">
            <h2 className="text-lg font-semibold text-gray-800">News Item 1</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
          <li className="bg-white shadow-md p-4 rounded-lg hover:bg-gray-50 transition">
            <h2 className="text-lg font-semibold text-gray-800">News Item 2</h2>
            <p className="text-gray-600">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
          <li className="bg-white shadow-md p-4 rounded-lg hover:bg-gray-50 transition">
            <h2 className="text-lg font-semibold text-gray-800">News Item 3</h2>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default News;
