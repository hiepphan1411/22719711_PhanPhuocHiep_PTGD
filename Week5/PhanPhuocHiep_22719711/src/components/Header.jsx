import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      <div className="w-full flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-gray-800">ABC Restaurant</h1>
        
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-gray-600 hover:text-gray-800">Trang chủ</a>
          <a href="/menu" className="text-gray-600 hover:text-gray-800">Thực đơn</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-800">Liên hệ</a>
        </nav>
        
        <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Đặt bàn
        </button>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md p-4 space-y-4 w-full">
          <a href="/" className="block text-gray-600 hover:text-gray-800">Trang chủ</a>
          <a href="/menu" className="block text-gray-600 hover:text-gray-800">Thực đơn</a>
          <a href="/contact" className="block text-gray-600 hover:text-gray-800">Liên hệ</a>
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            Đặt bàn
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
