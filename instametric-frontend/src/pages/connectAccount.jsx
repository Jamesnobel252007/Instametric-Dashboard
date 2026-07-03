import { Share2 } from "lucide-react";

function ConnectAccount() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900">
          Connect Instagram Account
        </h2>
        <p className="text-slate-500 mt-1">
          Link your Instagram Business or Creator account to sync analytics.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm max-w-2xl">
        <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center mb-5">
          <Share2 size={34} className="text-pink-600" />
        </div>

        <h3 className="text-2xl font-bold text-slate-900">
          Instagram Graph API Connection
        </h3>

        <p className="text-slate-500 mt-3 leading-7">
          Connect a professional Instagram account to fetch followers, reach,
          impressions, engagement, and content performance data.
        </p>

        <div className="mt-6 bg-slate-50 rounded-2xl p-5">
          <h4 className="font-bold text-slate-900 mb-3">Requirements</h4>

          <ul className="space-y-2 text-slate-600">
            <li>• Instagram Business or Creator account</li>
            <li>• Linked Facebook Page</li>
            <li>• Meta Developer App permissions</li>
            <li>• Insights access permission</li>
          </ul>
        </div>

        <a
  href="http://localhost:5000/api/auth/instagram"
  className="inline-block mt-6 bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700"
>
  Connect Instagram
</a>
      </div>
    </div>
  );
}

export default ConnectAccount;