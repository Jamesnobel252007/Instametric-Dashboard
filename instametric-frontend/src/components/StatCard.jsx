function StatCard({ title, value, change }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
      <p className="text-sm text-slate-500">{title}</p>

      <div className="mt-3 flex items-end justify-between">
        <h3 className="text-3xl font-bold text-slate-900">{value}</h3>
        <span className="text-sm font-semibold text-green-600">{change}</span>
      </div>
    </div>
  );
}

export default StatCard;