import { ProductCard } from "@/components/ui";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
export const revalidate = 10;
const ProductsList = async () => {
  let products: Product[] = [];
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    products = await res.json();
  } catch (err) {
    console.error("Failed to fetch products", err);
  }

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </section>
  );
};
export default ProductsList;
