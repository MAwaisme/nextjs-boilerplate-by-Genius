export const dynamic = 'force-dynamic'

import { Product, Review } from '@/utils/types/product'
import Image from 'next/image'

export default async function DynamicRecommendations({ productId }: { productId: string }) {
    // const cookieStore = await cookies()
    // const userSession = cookieStore.get('sessionId')?.value || 'guest'

    // 1. Fetch the product by ID
    const res = await fetch(`https://dummyjson.com/products/${productId}`, {
        cache: 'no-store',
    })

    if (!res.ok) {
        return <div>Product not found.</div>
    }

    const product = await res.json()

    // 2. Fetch related products by category
    const relatedRes = await fetch(`https://dummyjson.com/products/category/${product.category}?limit=4`, {
        cache: 'no-store',
    })

    if (!relatedRes.ok) {
        return <div>Related products not found.</div>
    }

    const relatedData = await relatedRes.json()

    // 3. Filter out the current product from related
    const relatedProducts = relatedData.products.filter((p: Product) => p.id !== product.id)
    console.log(relatedData, "relatedDatarelatedDatarelatedDatarelatedData", "relatedProductsrelatedProductsrelatedProductsrelatedProducts", relatedProducts);

    // 4. Render recommendations
    return (
        <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Recommended Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedProducts.map((item: Product) => (
                    <div key={item.id} className="border p-4 rounded-lg shadow-sm">
                        <Image
                            src={item.thumbnail}
                            alt={item.title}
                            width={400}
                            height={160}
                            className="w-full h-40 object-cover rounded mb-2"
                        />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                        <p className="text-sm">Brand: <span className="font-medium">{item.brand}</span></p>
                        <p className="text-sm">Category: <span className="text-blue-600">{item.category}</span></p>
                        <p className="text-sm">Price: <span className="text-green-600">${item.price}</span></p>
                        <p className="text-sm">Discount: {item.discountPercentage}%</p>
                        <p className="text-sm">Rating: ⭐ {item.rating}</p>
                        <p className="text-sm">Stock: {item.stock}</p>
                        <p className="text-sm">Warranty: {item.warrantyInformation}</p>
                        <p className="text-sm">Shipping: {item.shippingInformation}</p>
                        <p className="text-sm">Availability: {item.availabilityStatus}</p>
                        <p className="text-sm mt-2">Tags: {item.tags.join(', ')}</p>
                        <p className="text-sm">Return Policy: {item.returnPolicy}</p>
                        <p className="text-sm">Minimum Order: {item.minimumOrderQuantity}</p>
                        <p className="text-xs text-gray-500 mt-2">
                            Dimensions: {item.dimensions.width} x {item.dimensions.height} x {item.dimensions.depth} cm
                        </p>
                        <p className="text-xs text-gray-500">Weight: {item.weight}g</p>
                        <p className="text-xs text-gray-500">Barcode: {item.meta.barcode}</p>
                        <a href={item.meta.qrCode} target="_blank" className="text-blue-500 text-sm underline">
                            View QR Code
                        </a>

                        <div className="mt-2">
                            <h4 className="font-semibold text-sm">Reviews:</h4>
                            {item.reviews.map((review: Review, index: number) => (
                                <div key={index} className="text-xs border-t pt-1 mt-1">
                                    <p><strong>{review.reviewerName}</strong> ({review.rating}⭐)</p>
                                    <p>{review.comment}</p>
                                    <p className="text-gray-400">{new Date(review.date).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}