import { useEffect, useState } from "react";
import API from "../api/api";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import StatCard from "../components/StatCard";

function Dashboard() {
  const [data, setData] = useState({
    overviewStats: [],
    followerGrowthData: [],
    engagementData: [],
    recentContent: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/overview")
      .then((res) => {
        console.log("Dashboard API response:", res.data);

        setData({
          overviewStats: res.data.overviewStats || [],
          followerGrowthData: res.data.followerGrowthData || [],
          engagementData: res.data.engagementData || [],
          recentContent: res.data.recentContent || [],
        });

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load dashboard data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-slate-500">Loading dashboard...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900">Dashboard</h2>
        <p className="text-slate-500 mt-1">Instagram account overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        {data.overviewStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Follower Growth
          </h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.followerGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="followers" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Engagement Trend
          </h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="likes" />
                <Bar dataKey="comments" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Recent Content Performance
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b text-slate-500 text-sm">
                <th className="py-3">Content</th>
                <th className="py-3">Type</th>
                <th className="py-3">Reach</th>
                <th className="py-3">Likes</th>
                <th className="py-3">Comments</th>
                <th className="py-3">Score</th>
              </tr>
            </thead>

            <tbody>
              {data.recentContent.map((item) => (
                <tr key={item.title} className="border-b last:border-b-0">
                  <td className="py-4 font-medium text-slate-900">
                    {item.title}
                  </td>
                  <td className="py-4 text-slate-600">{item.type}</td>
                  <td className="py-4 text-slate-600">{item.reach}</td>
                  <td className="py-4 text-slate-600">{item.likes}</td>
                  <td className="py-4 text-slate-600">{item.comments}</td>
                  <td className="py-4">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-sm">
                      {item.score}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {data.recentContent.length === 0 && (
            <p className="text-center text-slate-500 py-6">
              No content data available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;