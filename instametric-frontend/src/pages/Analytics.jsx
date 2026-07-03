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

import { useEffect, useState } from "react";
import API from "../api/api";

function Analytics() {

    const [data, setData] = useState(null);

useEffect(() => {
  API.get("/analytics")
    .then((res) => setData(res.data))
    .catch((err) => console.error(err));
}, []);

if (!data) {
 return (
  <div className="flex items-center justify-center h-96">
    <p className="text-slate-500 animate-pulse">
      Loading InstaMetric data...
    </p>
  </div>
);
}
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900">Analytics</h2>
        <p className="text-slate-500 mt-1">
          Visual insights for account growth and engagement
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Reach vs Impressions */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Reach vs Impressions
          </h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.reachImpressionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="reach" strokeWidth={3} />
                <Line type="monotone" dataKey="impressions" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Engagement Rate */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Engagement Rate
          </h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.engagementRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rate" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Content Type Comparison */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Content Type Comparison
          </h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.contentTypeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="engagement" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Audience Demographics */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Audience Demographics
          </h3>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.audienceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="group" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;