import { useEffect, useState } from "react";

const ProductDetail = ({ productId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (productId) {
      fetch(`https://67cd347add7651e464eda05a.mockapi.io/ProductItems/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProductData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Lỗi khi lấy dữ liệu sản phẩm", error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [productId]);

  if (isLoading) {
    return <div className="text-center p-4">Đang tải...</div>;
  }

  if (!productData) {
    return <div className="text-center p-4">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{productData.name}</h2>
      <img src={productData.image} alt={productData.name} className="w-full h-64 object-cover rounded-md mb-4" />
      <p className="text-lg">{productData.description}</p>
    </div>
  );
};

export default ProductDetail;
