import React from "react";

const FeaturedCollection = () => {
    const collections = [
        { title: "Dark Echelon", count: 4100 },
        { title: "Mindblown Universe", count: 12580 },
        { title: "Karafuru x HYPEBEAST", count: 468 },
        { title: "HYPEBEAST", count: 2468 },
    ];
    return (
        <section className="px-6">
            <h3 className="text-2xl font-semibold mb-4">Featured collection</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {collections.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-100 p-4 rounded-xl shadow-sm text-center"
                    >
                        <div className="h-32 bg-gray-300 mb-2 rounded"></div>
                        <div className="font-bold">{item.title}</div>
                        <div className="text-xs text-gray-500">{item.count} NFTs</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCollection;