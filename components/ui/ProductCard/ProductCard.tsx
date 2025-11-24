import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li
      key={product.id}
      className="border rounded-2xl p-4 shadow-sm flex flex-col gap-3"
    >
      <div className="flex items-center gap-4">
        <Image
          width={25}
          height={25}
          src={product.image}
          alt={product.title}
          className="w-20 h-20 object-contain"
        />
        <div>
          <p className="font-medium text-lg">{product.title}</p>
          <p className="text-sm text-gray-600">{product.category}</p>
        </div>
      </div>

      <p className="text-sm text-gray-700 line-clamp-3">
        {product.description}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <span className="font-semibold">${product.price.toFixed(2)}</span>
      </div>
    </li>
  );
};

export default ProductCard;
