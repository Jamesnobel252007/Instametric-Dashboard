import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import API from "../api/api";

function Content() {
    const [search, setSearch] = useState("");
    const [type, setType] = useState("All");
        const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    const filteredContent = data.filter((item) => {
        const matchesSearch = item.title
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesType = type === "All" || item.type === type;

        return matchesSearch && matchesType;
    });

    const topContent = [...data].sort((a, b) => b.score - a.score)[0];



    useEffect(() => {
  API.get("/content")
    .then((res) => {
      setData(res.data);
      setLoading(false);
    })
    .catch((err) => console.error(err));
}, []);
if (loading) {
  return <p className="text-slate-500">Loading content...</p>;
}
    return (
        <div>
            <div className="mb-6">
                <h2 className="text-3xl font-bold text-slate-900">
                    Content Performance
                </h2>
                <p className="text-slate-500 mt-1">
                    Analyze how each Instagram post, reel, and carousel performs
                </p>
            </div>

            {/* Top Card */}
            <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl p-6 mb-6 shadow-sm">
                <p className="text-sm opacity-90">Top Performing Content</p>
                <h3 className="text-2xl font-bold mt-2">{topContent.title}</h3>
                <p className="mt-2 opacity-90">
                    Score {topContent.score} • Reach {topContent.reach.toLocaleString()} •{" "}
                    {topContent.likes.toLocaleString()} likes
                </p>
            </div>

            {/* Filters */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 mb-6">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                            type="text"
                            placeholder="Search content..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-pink-500"
                        />
                    </div>

                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-pink-500"
                    >
                        <option value="All">All Types</option>
                        <option value="Reel">Reels</option>
                        <option value="Carousel">Carousels</option>
                        <option value="Image">Images</option>
                    </select>
                </div>
            </div>

            {/* Content Table */}
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                    Content List
                </h3>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b text-slate-500 text-sm">
                                <th className="py-3">Title</th>
                                <th className="py-3">Type</th>
                                <th className="py-3">Date</th>
                                <th className="py-3">Reach</th>
                                <th className="py-3">Likes</th>
                                <th className="py-3">Comments</th>
                                <th className="py-3">Saves</th>
                                <th className="py-3">Shares</th>
                                <th className="py-3">Score</th>
                            </tr>
                        </thead>

                        <tbody>
                            {filteredContent.map((item) => (
                                <tr key={item.id} className="border-b last:border-b-0">
                                    <td className="py-4 font-medium text-slate-900">
                                        {item.title}
                                    </td>

                                    <td className="py-4">
                                        <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                                            {item.type}
                                        </span>
                                    </td>

                                    <td className="py-4 text-slate-600">{item.date}</td>
                                    <td className="py-4 text-slate-600">
                                        {item.reach.toLocaleString()}
                                    </td>
                                    <td className="py-4 text-slate-600">
                                        {item.likes.toLocaleString()}
                                    </td>
                                    <td className="py-4 text-slate-600">{item.comments}</td>
                                    <td className="py-4 text-slate-600">{item.saves}</td>
                                    <td className="py-4 text-slate-600">{item.shares}</td>

                                    <td className="py-4">
                                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
                                            {item.score}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredContent.length === 0 && (
                        <p className="text-center text-slate-500 py-8">
                            No content found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Content;