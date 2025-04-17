export default function Header() {
  return (
    <header className="bg-white py-2 px-8 flex justify-between items-center border-b">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="../public/chefify.png" alt="Chefify Logo"></img>
      </div>

      {/* Search Bar */}
      <div className="relative flex-grow max-w-xl mx-4">
        <div className="flex items-center rounded-2xl px-3 py-2 bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="bg-transparent outline-none flex-grow text-sm"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center">
        <ul className="flex space-x-6 text-gray-600">
          <li>
            <a href="#" className="hover:text-pink-500">
              What to cook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Recipes
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Ingredients
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Occasions
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              About Us
            </a>
          </li>
        </ul>
        <div className="flex items-center ml-6">
          <button className="text-pink-500 px-4 py-1 font-medium">Login</button>
          <button className="bg-pink-500 text-white px-4 py-1 rounded-md ml-2">
            Subscribe
          </button>
        </div>
      </nav>
    </header>
  );
}
