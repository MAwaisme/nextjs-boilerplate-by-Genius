import React, { useState } from "react";

// Component: TrendingCollection.jsx
const TrendingCollection = () => {
    const [tab, setTab] = useState("NFTs");
    const [timeFilter, setTimeFilter] = useState("1h");
    return (
        <section className="px-6 pb-16">
            <h3 className="text-2xl font-semibold mb-4">Trending collection</h3>
            <div className="flex items-center gap-4 mb-2">
                <button
                    onClick={() => setTab("NFTs")}
                    className={`px-3 py-1 rounded-md ${tab === "NFTs" ? "bg-orange-500 text-white" : "bg-gray-100"
                        }`}
                >
                    NFTs
                </button>
                <button
                    onClick={() => setTab("Games")}
                    className={`px-3 py-1 rounded-md ${tab === "Games" ? "bg-orange-500 text-white" : "bg-gray-100"
                        }`}
                >
                    Games
                </button>
            </div>
            <div className="flex gap-2 flex-wrap text-sm mb-4">
                {["1h", "6h", "12h", "1d", "7d", "14d", "30d"].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTimeFilter(t)}
                        className={`px-3 py-1 rounded-md ${timeFilter === t ? "bg-orange-500 text-white" : "bg-gray-200"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="text-left bg-gray-100">
                            <th className="p-2">Collection</th>
                            <th className="p-2">Floor</th>
                            <th className="p-2">24h Vol</th>
                            <th className="p-2">Total Vol</th>
                            <th className="p-2">Owners</th>
                            <th className="p-2">Items</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...Array(5)].map((_, idx) => (
                            <tr key={idx} className="border-b">
                                <td className="p-2">Mutant Ape Yacht Club</td>
                                <td className="p-2">16.79</td>
                                <td className="p-2 text-green-500">+12.3%</td>
                                <td className="p-2">104.56</td>
                                <td className="p-2">67,256</td>
                                <td className="p-2">19,489</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TrendingCollection;