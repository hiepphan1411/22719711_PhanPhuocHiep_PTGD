import { useEffect, useState } from "react";

export default function Content() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://67cd347add7651e464eda05a.mockapi.io/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Danh sách sản phẩm</h2>
      <div className="grid grid-cols-4 gap-4">
  {products.map((product) => (
    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between h-full">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md"/>
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <span className="text-pink-600 font-bold">{product.price}</span>
      <button className="bg-black text-pink-500 font-semibold py-2 h-10 mt-auto rounded-md">
        Mua ngay
      </button>
    </div>
  ))}
</div>

    </div>
  );
}
