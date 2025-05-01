export default function SectionRecipesWVideo() {
  return (
    <section className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-pink-500 mb-2">
          Recipes With Videos
        </h2>
        <p className="text-gray-600">
          Cooking Up Culinary with Step-by-Step Videos
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {/* Salad with cabbage and shrimp */}
        <div className="bg-white rounded-md overflow-hidden shadow-md relative h-80">
          <img
            src="../public/Italian-style tomato.png"
            alt="Italian-style tomato salad"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex relative">
            <h3 className="font-bold text-xl float-left w-50">
              Salad with cabbage and shrimp
            </h3>
            <button className="absolute right-4 top-4">
              <img src="../public/Icon Button 73.png"></img>
            </button>
          </div>
          <p className="text-pink-500 font-medium mt-2 absolute left-5 bottom-2 bg-pink-50 p-0.5 rounded-2xl">
            32 minutes
          </p>
        </div>

        {/*Salad of cove beans, shrimp and potatoes*/}
        <div className="bg-white rounded-md overflow-hidden shadow-md relative">
          <img
            src="../public/Vegetable and shrimp spaghetti.png"
            alt="Italian-style tomato salad"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex relative">
            <h3 className="font-bold text-xl float-left w-60">
              Salad of cove beans, shrimp and potatoes
            </h3>
            <button className="absolute right-4 top-4">
              <img src="../public/Icon Button 73.png"></img>
            </button>
          </div>
          <p className="text-pink-500 font-medium mt-2 absolute left-5 bottom-2 bg-pink-50 p-0.5 rounded-2xl">
            20 minutes
          </p>
        </div>

        {/* Sunny-side up fried eggs */}
        <div className="bg-white rounded-md overflow-hidden shadow-md relative">
          <img
            src="../public/Lotus delight salad.png"
            alt="Italian-style tomato salad"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex relative">
            <h3 className="font-bold text-xl float-left">
              Sunny-side up fried eggs
            </h3>
            <button className="absolute right-4 top-4">
              <img src="../public/Icon Button 73.png"></img>
            </button>
          </div>
          <p className="text-pink-500 font-medium mt-2 absolute left-5 bottom-2 bg-pink-50 p-0.5 rounded-2xl">
            15 minutes
          </p>
        </div>

        {/* Lotus delight salad */}
        <div className="bg-white rounded-md overflow-hidden shadow-md relative">
          <img
            src="../public/Snack cakes.png"
            alt="Italian-style tomato salad"
            className="w-full h-48 object-cover"
          />
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
      </div>
    </section>
  );
}
