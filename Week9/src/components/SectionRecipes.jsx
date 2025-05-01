export default function SectionRecipes() {
    return (
              <section className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-pink-500 mb-2">
            This Summer Recipes
          </h2>
          <p className="text-gray-600">
            We have all your Independence Day sweets covered.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {/* Recipe Card - Italian-style tomato salad */}
          <div className="bg-white rounded-md overflow-hidden shadow-md relative h-80">
            <img
              src="../public/Italian-style tomato.png"
              alt="Italian-style tomato salad"
              className="w-full h-48 object-cover"
            />
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M10 18.25L8.75 17.125C4.25 13.125 1.25 10.375 1.25 6.875C1.25 4.125 3.375 2 6.125 2C7.5 2 8.875 2.625 10 3.75C11.125 2.625 12.5 2 13.875 2C16.625 2 18.75 4.125 18.75 6.875C18.75 10.375 15.75 13.125 11.25 17.125L10 18.25Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="p-4 flex relative">
              <h3 className="font-bold text-xl float-left w-50">
                Italian-style tomato salad
              </h3>
              <button className="absolute right-4 top-4">
                <img src="../public/Icon Button 73.png"></img>
              </button>
            </div>
            <p className="text-pink-500 font-medium mt-2 absolute left-5 bottom-2 bg-pink-50 p-0.5 rounded-2xl">
              20 minutes
            </p>
          </div>

          {/* Recipe Card - Spaghetti with vegetables and shrimp */}
          <div className="bg-white rounded-md overflow-hidden shadow-md relative">
            <img
              src="../public/Vegetable and shrimp spaghetti.png"
              alt="Italian-style tomato salad"
              className="w-full h-48 object-cover"
            />
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M10 18.25L8.75 17.125C4.25 13.125 1.25 10.375 1.25 6.875C1.25 4.125 3.375 2 6.125 2C7.5 2 8.875 2.625 10 3.75C11.125 2.625 12.5 2 13.875 2C16.625 2 18.75 4.125 18.75 6.875C18.75 10.375 15.75 13.125 11.25 17.125L10 18.25Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="p-4 flex relative">
              <h3 className="font-bold text-xl float-left w-60">
                Spaghetti with vegetables and shrimp
              </h3>
              <button className="absolute right-4 top-4">
                <img src="../public/Icon Button 73.png"></img>
              </button>
            </div>
            <p className="text-pink-500 font-medium mt-2 absolute left-5 bottom-2 bg-pink-50 p-0.5 rounded-2xl">
              15 minutes
            </p>
          </div>

          {/* Recipe Card - Lotus delight salad */}
          <div className="bg-white rounded-md overflow-hidden shadow-md relative">
            <img
              src="../public/Lotus delight salad.png"
              alt="Italian-style tomato salad"
              className="w-full h-48 object-cover"
            />
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M10 18.25L8.75 17.125C4.25 13.125 1.25 10.375 1.25 6.875C1.25 4.125 3.375 2 6.125 2C7.5 2 8.875 2.625 10 3.75C11.125 2.625 12.5 2 13.875 2C16.625 2 18.75 4.125 18.75 6.875C18.75 10.375 15.75 13.125 11.25 17.125L10 18.25Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="p-4 flex relative">
              <h3 className="font-bold text-xl float-left">
                Lotus delight salad
              </h3>
              <button className="absolute right-4 top-4">
                <img src="../public/Icon Button 73.png"></img>
              </button>
            </div>
            <p className="text-pink-500 font-medium mt-2 absolute left-5 bottom-2 bg-pink-50 p-0.5 rounded-2xl">
              20 minutes
            </p>
          </div>

          {/* Recipe Card - Snack cakes */}
          <div className="bg-white rounded-md overflow-hidden shadow-md relative">
            <img
              src="../public/Snack cakes.png"
              alt="Italian-style tomato salad"
              className="w-full h-48 object-cover"
            />
            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-500"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M10 18.25L8.75 17.125C4.25 13.125 1.25 10.375 1.25 6.875C1.25 4.125 3.375 2 6.125 2C7.5 2 8.875 2.625 10 3.75C11.125 2.625 12.5 2 13.875 2C16.625 2 18.75 4.125 18.75 6.875C18.75 10.375 15.75 13.125 11.25 17.125L10 18.25Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="p-4 flex relative">
              <h3 className="font-bold text-xl float-left">Snack cakes</h3>
              <button className="absolute right-4 top-4">
                <img src="../public/Icon Button 73.png"></img>
              </button>
            </div>
            <p className="text-pink-500 font-medium mt-2 absolute left-5 bottom-2 bg-pink-50 p-0.5 rounded-2xl">
              21 minutes
            </p>
          </div>
        </div>
      </section>
    )
}