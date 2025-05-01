import { useEffect, useState } from "react";

const ProductDetail = ( productData) => {
  const [isLoading, setIsLoading] = useState(true);
  console.log(productData)
  useEffect(() => {
    if (product) {
    } else {
      setIsLoading(false);
    }
  }, [product]);

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
