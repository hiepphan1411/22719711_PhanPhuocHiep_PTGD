export default function Menu() {
    return (
        <div className="flex items-center justify-between p-4 shadow-md">
            <div className="text-2xl font-bold">
                <img src="/chefify.png" alt="logo" className="h-10" />
            </div>
            
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-64">
                <i className="fa fa-search text-gray-500"></i>
                <input 
                    type="text" 
                    placeholder="Tìm kiếm..." 
                    className="bg-transparent border-none outline-none ml-2 flex-1 text-gray-600"
                    value={'cakescascsa'}
                />
            </div>

            <nav className="flex gap-4 text-gray-600">
                <a href="#" className="hover:text-gray-900">What to cook</a>
                <a href="#" className="hover:text-gray-900">Recipes</a>
                <a href="#" className="hover:text-gray-900">Ingredients</a>
                <a href="#" className="hover:text-gray-900">Occasions</a>
                <a href="#" className="hover:text-gray-900">About Us</a>
            </nav>
            
            <button className="flex items-center gap-2 border border-pink-400 text-pink-600 bg-transparent px-4 py-2 rounded-md hover:bg-pink-50">
                <img src="/check.png" className="h-5" alt="check icon" />
                Your Recipe Box
            </button>

            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src="/avatar.png" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}