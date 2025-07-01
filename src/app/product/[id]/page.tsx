import { Suspense } from "react";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";
import DynamicRecommendations from "./DynamicRecommendations";
import LoadingRecommendations from "@/utils/LoadingRecommendations";
import { Product } from "@/utils/types/product";
interface PageProps {
    params: Promise<{ id: string }>;
}
const ProductPage = async ({ params }: PageProps) => {
    // Await the params Promise to get the actual parameters
    const { id } = await params;
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
        cache: "force-cache",
    });
    const product: Product = await res.json();
    return (
        <div className="max-w-7xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200 dark:bg-zinc-900 bg-white">
            <ProductInfo product={product} />
            <Suspense fallback={<LoadingRecommendations />}>
                <DynamicRecommendations productId={id} />
            </Suspense>
            {product?.reviews && <ProductReviews reviews={product.reviews} />}
        </div>
    );
};
export default ProductPage;