import { Download, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import API from "../api/api";

function Reports() {
  const downloadCSV = () => {
    const csvContent = [
      ["Metric", "Value"],
      ["Period", reportSummary.period],
      ["Followers Gained", reportSummary.followersGained],
      ["Total Reach", reportSummary.totalReach],
      ["Total Impressions", reportSummary.totalImpressions],
      ["Average Engagement Rate", reportSummary.avgEngagementRate],
      ["Best Content", reportSummary.bestContent],
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "instametric-report.csv";
    link.click();

    URL.revokeObjectURL(url);
  };
const [data, setData] = useState(null);

useEffect(() => {
  API.get("/reports")
    .then((res) => setData(res.data))
    .catch((err) => console.error(err));
}, []);

if (!data) {
  return <p className="text-slate-500">Loading reports...</p>;
}

const { reportSummary, reports } = data;

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Reports</h2>
          <p className="text-slate-500 mt-1">
            Export and review Instagram analytics reports
          </p>
        </div>

        <button
          onClick={downloadCSV}
          className="flex items-center gap-2 bg-slate-950 text-white px-5 py-3 rounded-xl font-semibold hover:bg-slate-800"
        >
          <Download size={18} />
          Download CSV
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Followers Gained</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-3">
            {reportSummary.followersGained.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Total Reach</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-3">
            {reportSummary.totalReach.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Total Impressions</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-3">
            {reportSummary.totalImpressions.toLocaleString()}
          </h3>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Avg Engagement</p>
          <h3 className="text-3xl font-bold text-slate-900 mt-3">
            {reportSummary.avgEngagementRate}
          </h3>
        </div>
      </div>

      {/* Best content */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 mb-6">
        <p className="text-sm text-slate-500">Best Performing Content</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-2">
          {reportSummary.bestContent}
        </h3>
        <p className="text-slate-500 mt-2">
          Based on reach, likes, comments, saves, shares, and performance score.
        </p>
      </div>

      {/* Reports list */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Available Reports
        </h3>

        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-slate-200 rounded-2xl p-4"
            >
              <div className="flex items-start gap-3">
                <div className="bg-slate-100 p-3 rounded-xl">
                  <FileText size={22} className="text-slate-700" />
                </div>

                <div>
                  <h4 className="font-bold text-slate-900">{report.title}</h4>
                  <p className="text-sm text-slate-500">{report.period}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    report.status === "Ready"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {report.status}
                </span>

                <button className="px-4 py-2 rounded-xl border border-slate-200 font-semibold hover:bg-slate-100">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reports;