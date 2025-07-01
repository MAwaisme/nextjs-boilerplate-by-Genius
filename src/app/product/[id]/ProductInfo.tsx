// app/products/[id]/ProductInfo.tsx

import { Product } from "@/utils/types/product";
import Image from "next/image";


interface ProductInfoProps {
    product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    return (
        <>
            {/* Top Section */}
            <div className="grid md:grid-cols-2 gap-12">
                <div className="flex justify-center items-center">
                    {/* <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full max-w-sm rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
                    /> */}
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={400}
                        height={160}
                        className="w-full max-w-sm rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
                    />
                </div>
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">{product.title}</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">{product.description}</p>

                    <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                        <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-md">
                            {product.discountPercentage}% OFF
                        </span>
                    </div>

                    <div className="space-y-1 text-sm text-gray-500 dark:text-gray-400">
                        <p>⭐ {product.rating} rating</p>
                        <p>🧾 SKU: {product.sku}</p>
                        <p>📦 Stock: {product.stock} | Min Order: {product.minimumOrderQuantity}</p>
                        <p>🏷️ Category: {product.category}</p>
                        <p>🏢 Brand: {product.brand}</p>
                        <p>🔖 Status: <span className="font-semibold">{product.availabilityStatus}</span></p>
                    </div>
                </div>
            </div>

            {/* Tags */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2">Tags</h2>
                <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Dimensions & Shipping Info */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Dimensions & Weight</h2>
                    <p>📏 {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
                    <p>⚖️ {product.weight} g</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Shipping & Warranty</h2>
                    <p>🚚 {product.shippingInformation}</p>
                    <p>🛡️ Warranty: {product.warrantyInformation}</p>
                    <p>↩️ Return Policy: {product.returnPolicy}</p>
                </div>
            </div>

            {/* Metadata */}
            <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">Product Metadata</h2>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <p>📅 Created: {new Date(product.meta.createdAt).toLocaleString()}</p>
                    <p>🕒 Updated: {new Date(product.meta.updatedAt).toLocaleString()}</p>
                    <p>🔍 Barcode: {product.meta.barcode}</p>
                    {/* <img src={product.meta.qrCode} alt="QR Code" className="w-24 h-auto" /> */}

                    <Image
                        src={product.meta.qrCode}
                        alt={product.title}
                        width={24}
                        height={24}
                        className="w-24 h-auto"
                    />
                </div>
            </div>

            {/* Gallery */}
            <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">Product Images</h2>
                <div className="flex flex-wrap gap-4">
                    {product.images.map((img, i) => (
                        // <img
                        //     key={i}
                        //     src={img}
                        //     alt={`image-${i}`}
                        //     className="w-32 h-32 object-cover rounded-lg border shadow-md"
                        // />

                        <Image
                            key={i}
                            src={img}
                            alt={product.title}
                            width={32}
                            height={32}
                            className="w-32 h-32 object-cover rounded-lg border shadow-md"
                        />
                    ))}
                </div>
            </div>

            {/* Reviews */}
            {/* <div className="mt-12">
                <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                    {product.reviews.map((review, idx) => (
                        <div key={idx} className="p-4 border rounded-md bg-white dark:bg-zinc-800 dark:border-zinc-700 shadow-sm">
                            <div className="flex justify-between items-center mb-1">
                                <strong>{review.reviewerName}</strong>
                                <span className="text-yellow-500">{review.rating}⭐</span>
                            </div>
                            <p className="italic text-gray-600 dark:text-gray-300">"{review.comment}"</p>
                            <p className="text-xs text-gray-400 mt-1">
                                {new Date(review.date).toLocaleDateString()} – {review.reviewerEmail}
                            </p>
                        </div>
                    ))}
                </div>
            </div> */}
        </>
    );
}  