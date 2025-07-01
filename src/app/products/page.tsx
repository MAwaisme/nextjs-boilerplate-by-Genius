// src/app/products/page.tsx
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    price: number;
}

async function getProducts(): Promise<Product[]> {
    const res = await fetch("https://dummyjson.com/products?limit=12");
    if (!res.ok) throw new Error("Failed to fetch products");
    const data = await res.json();
    return data.products;
}

export default async function ProductsPage() {
    const products = await getProducts();
    console.log(products, "all products");

    return (
        <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
            {products.map((product) => (
                <Link
                    href={`/product/${product.id}`}
                    key={product.id}
                    className="cursor-pointer bg-gray-900 border border-gray-800 rounded-xl shadow-lg hover:shadow-indigo-500/10 transition"
                >
                    {/* <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-t-xl"
                    /> */}

                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={48}
                        height={48}
                        className="w-full h-48 object-cover rounded-t-xl"
                    />

                    <div className="p-4">
                        <h3 className="font-semibold text-lg text-indigo-300">
                            {product.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1 line-clamp-2">
                            {product.description}
                        </p>
                        <p className="mt-2 font-bold text-indigo-400">${product.price}</p>
                    </div>
                </Link>
            ))}
        </section>
    );
}