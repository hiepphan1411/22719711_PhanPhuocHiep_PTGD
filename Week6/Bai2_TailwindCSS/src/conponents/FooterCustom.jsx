export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/2 px-4">
                    <h4 className="font-bold text-lg">About Us</h4>
                    <p className="mt-2">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <form className="mt-4 flex items-center space-x-2">
                        <input className="bg-white text-gray-900 rounded-lg p-2 w-72" type="text" placeholder="Enter your email" />
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">Send</button>
                    </form>
                    <div className="flex items-center mt-6 space-x-4">
                        <img src="/chefifywhite.png" alt="Chefify Logo" className="w-25 h-8" />
                        <a href="#" className="text-white">2025 Chefify Company</a>
                        <a href="#" className="text-white">Terms of Service | Privacy Policy</a>
                    </div>
                </div>
                
                <div className="w-full md:w-1/4 px-4">
                    <h4 className="font-bold text-lg">Learn More</h4>
                    <nav className="mt-2 space-y-1">
                        <a href="#" className="block">Our Cooks</a>
                        <a href="#" className="block">See Our Features</a>
                        <a href="#" className="block">FAQ</a>
                    </nav>
                    <h4 className="font-bold text-lg mt-4">Shop</h4>
                    <nav className="mt-2 space-y-1">
                        <a href="#" className="block">Gift Subscription</a>
                        <a href="#" className="block">Send Us Feedback</a>
                    </nav>
                </div>
                
                <div className="w-full md:w-1/4 px-4">
                    <h4 className="font-bold text-lg">Recipes</h4>
                    <nav className="mt-2 space-y-1">
                        <a href="#" className="block">What to Cook This Week</a>
                        <a href="#" className="block">Pasta</a>
                        <a href="#" className="block">Dinner</a>
                        <a href="#" className="block">Healthy</a>
                        <a href="#" className="block">Vegetarian</a>
                        <a href="#" className="block">Vegan</a>
                        <a href="#" className="block">Christmas</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
