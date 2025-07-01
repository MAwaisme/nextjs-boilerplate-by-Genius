// app/products/[id]/ProductReviews.tsx

import { Review } from "@/utils/types/product";

interface ProductReviewsProps {
    reviews: Review[];
}

export default function ProductReviews({ reviews }: ProductReviewsProps) {
    return (
        <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
            <div className="space-y-4">
                {reviews.map((review, idx) => (
                    <div
                        key={idx}
                        className="p-4 border rounded-md bg-white dark:bg-zinc-800 dark:border-zinc-700 shadow-sm"
                    >
                        <div className="flex justify-between items-center mb-1">
                            <strong>{review.reviewerName}</strong>
                            <span className="text-yellow-500">{review.rating}⭐</span>
                        </div>
                        <p className="italic text-gray-600 dark:text-gray-300">
                            &ldquo;{review.comment}&rdquo;
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                            {review.date ? new Date(review.date).toLocaleDateString() : "Unknown date"} – {review.reviewerEmail}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
