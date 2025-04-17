export default function SectionEditor() {
  return (
    <section className="p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-pink-500 mb-2">Editor's pick</h2>
        <p className="text-gray-600">
          Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {/* Stuffed sticky rice ball */}
        <div className="bg-white rounded-md overflow-hidden shadow-md p-4 flex">
          <div className="w-1/3 mr-4">
            <img
              src="../public/Lotus delight salad_01.png"
              alt="Stuffed sticky rice ball"
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
          <div className="w-2/3 relative">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl mb-1">
                Stuffed sticky rice ball
              </h3>
              <button className="bg-white">
                <img src="../public/Icon Button 73.png"></img>
              </button>
            </div>
            <p className="text-gray-500 text-sm mb-2">34 minutes</p>

            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img
                  src="../public/avatar.png"
                  alt="Jennifer King"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Jennifer King</p>
            </div>

            <p className="text-gray-600 text-sm">
              Stuffed sticky rice balls: A delightful Asian treat with chewy,
              glutinous rice and a flavorful surprise filling...
            </p>
          </div>
        </div>

        {/* Strawberry smoothie */}
        <div className="bg-white rounded-md overflow-hidden shadow-md p-4 flex">
          <div className="w-1/3 mr-4">
            <img
              src="../public/lotus_delight_salad.png"
              alt="Strawberry smoothie"
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
          <div className="w-2/3 relative">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl mb-1">Strawberry smoothie</h3>
              <button className="bg-white">
                <img src="../public/Icon Button 73.png"></img>
              </button>
            </div>
            <p className="text-gray-500 text-sm mb-2">40 minutes</p>

            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img
                  src="../public/Avatar (1).png"
                  alt="Matthew Martinez"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Matthew Martinez</p>
            </div>

            <p className="text-gray-600 text-sm">
              Savor the refreshing delight of a strawberry smoothie. Made with
              ripe strawberries, this creamy blend offers...
            </p>
          </div>
        </div>

        {/* Latte Art */}
        <div className="bg-white rounded-md overflow-hidden shadow-md p-4 flex">
          <div className="w-1/3 mr-4">
            <img
              src="../public/corn_salad.png"
              alt="Latte Art"
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
          <div className="w-2/3 relative">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl mb-1">Latte Art</h3>
              <button className="bg-white">
                <img src="../public/Icon Button 73.png"></img>
              </button>
            </div>
            <p className="text-gray-500 text-sm mb-2">19 minutes</p>

            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img
                  src="../public/Avatar (5).png"
                  alt="Sarah Hill"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Sarah Hill</p>
            </div>

            <p className="text-gray-600 text-sm">
              Latte art is the skillful craft of creating captivating designs on
              the surface of a latte...
            </p>
          </div>
        </div>

        {/* Butter fried noodles */}
        <div className="bg-white rounded-md overflow-hidden shadow-md p-4 flex">
          <div className="w-1/3 mr-4">
            <img
              src="../public/five_color_salad.png"
              alt="Butter fried noodles"
              className="w-full h-52 object-cover rounded-md"
            />
          </div>
          <div className="w-2/3 relative">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl mb-1">Butter fried noodles</h3>
              <button className="bg-white">
                <img src="../public/Icon Button 73.png"></img>
              </button>
            </div>
            <p className="text-gray-500 text-sm mb-2">16 minutes</p>

            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img
                  src="../public/Avatar (2).png"
                  alt="Julia Lopez"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium">Julia Lopez</p>
            </div>

            <p className="text-gray-600 text-sm">
              Butter fried noodles: Savory noodles cooked in butter for a
              delicious and satisfying meal...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
