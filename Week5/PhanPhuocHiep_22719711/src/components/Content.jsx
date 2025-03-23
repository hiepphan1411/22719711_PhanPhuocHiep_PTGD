import { Link } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

const Content = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [category, setCategory] = useState("Tất cả");
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://67cd347add7651e464eda05a.mockapi.io/ProductItems")
      .then((response) => response.json())
      .then((data) => {
        setFoodItems(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu", error);
        setIsLoading(false);
      });
  }, []);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const categories = useMemo(() => {
    return ["Tất cả", ...new Set(foodItems.map((item) => item.category))];
  }, [foodItems]);

  const filteredItems = useMemo(() => {
    return category === "Tất cả"
      ? foodItems
      : foodItems.filter((item) => item.category === category);
  }, [category, foodItems]);

  return (
    <div className="p-4">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
          <p className="ml-2">Đang tải...</p>
        </div>
      ) : (
        <>
          <div className="mb-4 flex space-x-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded ${
                  category === cat ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-4">Thực đơn</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow flex flex-col justify-between"
              >
                <Link to={{item}} className="block">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                </Link>
                <p className="min-h-[80px]">{item.description}</p>
                <p className="font-bold">{item.price.toLocaleString()} VND</p>

                <button
                  onClick={() => addToOrder(item)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 h-10"
                >
                  Thêm vào đơn hàng
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
