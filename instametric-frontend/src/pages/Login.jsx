import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("demo@instametric.com");
  const [password, setPassword] = useState("123456");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("instametric_user", email);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 selection:bg-pink-500/30">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md">
        <div className="bg-slate-900/50 border border-slate-800 backdrop-blur-xl w-full rounded-3xl p-10 shadow-2xl">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white italic">
              Insta<span className="text-pink-500 not-italic">Metric</span>
            </h1>
            <p className="text-slate-400 mt-3 font-medium">
              Enterprise analytics at your fingertips
            </p>
          </header>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
              <input
                type="email"
                className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Password</label>
              <input
                type="password"
                className="w-full px-5 py-3.5 bg-slate-800/50 border border-slate-700 rounded-2xl text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            <button className="w-full mt-4 bg-gradient-to-r from-pink-600 to-rose-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-pink-500 hover:to-rose-400 active:scale-[0.98] transition-all shadow-lg shadow-pink-500/20">
              Sign In
            </button>
          </form>

          <footer className="mt-8 text-center">
            <button type="button" className="text-sm text-slate-500 hover:text-pink-400 transition-colors">
              Forgot your password?
            </button>
          </footer>
        </div>
        
        <p className="text-center text-slate-600 text-sm mt-8">
          &copy; 2026 InstaMetric Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;