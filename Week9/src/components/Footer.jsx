export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-16">
      <div className="grid grid-cols-12 gap-8">
        {/* About Us */}
        <div className="col-span-6">
          <h3 className="font-bold text-xl mb-4">About Us</h3>
          <p className="text-gray-300 mb-4">
            Welcome to our website, a wonderful place to explore and learn how
            to cook like a pro.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md w-64 focus:outline-none bg-white text-gray-500"
            />
            <button className="bg-pink-500 ml-5 text-white px-4 py-2 rounded-md hover:bg-pink-600">
              Send
            </button>
          </div>
          <div className="mt-12 flex justify-between items-center border-t border-gray-700 pt-6">
            <div className="flex items-center">
              <div className="mr-4">
                <img
                  src="../public/white_chefify.png"
                  alt="Chefify Logo"
                  className="h-12"
                />
              </div>
              <div className="ml-4 text-gray-400">2023 Chefify Company</div>
            </div>
            <div className="text-gray-400">
              <a href="#" className="hover:text-pink-500 mr-4">
                Terms of Service
              </a>
              <span>|</span>
              <a href="#" className="hover:text-pink-500 ml-4">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Learn More - takes 3 columns (25%) */}
        <div className="col-span-3">
          <h3 className="font-bold text-xl mb-4">Learn More</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-pink-500">
                Our Cooks
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                See Our Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Gift Subscription
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Send Us Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* Recipes */}
        <div className="col-span-3">
          <h3 className="font-bold text-xl mb-4">Recipes</h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <a href="#" className="hover:text-pink-500">
                What to Cook This Week
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Pasta
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Dinner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Healthy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Vegetarian
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Vegan
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-500">
                Christmas
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
