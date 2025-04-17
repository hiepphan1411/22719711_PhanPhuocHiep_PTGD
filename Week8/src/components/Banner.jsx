export default function Banner() {
  return (
    <section className="relative">
      <img
        src="../public/Image 73.png"
        alt="Kitchen Scene"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="max-w-md ml-16">
          <div className="bg-white rounded-md p-6 shadow-lg relative items-center justify-center text-center">
            <div className="absolute -top-5 left-34">
              <div className="bg-yellow-400 text-yellow-800 text-sm font-medium px-10 py-2 rounded-sm">
                Recipe of the day
              </div>
            </div>
            <h1 className="text-2xl font-bold text-pink-500 mb-2">
              Salad Caprese
            </h1>
            <p className="text-gray-600 mb-4">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
              herbs, olive oil, and balsamic vinegar create a refreshing dish
              for lunch or appetizer
            </p>
            <div className="flex flex-col items-center mb-4 mt-20 justify-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center overflow-hidden">
                <img
                  src="../public/avatar.png"
                  alt="Chef Avatar"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="text-gray-600">Salad Caprese</span>
            </div>
            <div className="justify-center items-center flex">
              <button className="flex items-center bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md">
                View now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
