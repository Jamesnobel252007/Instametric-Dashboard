import { NavLink, useNavigate } from "react-router-dom";
import { BarChart3, Home, FileText, Image, LogOut, Share2 } from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("instametric_user");
    navigate("/login");
  };

  const links = [
    { name: "Dashboard", path: "/", icon: Home },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Content", path: "/content", icon: Image },
    { name: "Reports", path: "/reports", icon: FileText },
    { name: "Connect", path: "/connect", icon: Share2 },
  ];

  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-900 text-white p-6 flex flex-col sticky top-0">
      {/* Brand Section */}
      <div className="px-4 mb-10">
        <h1 className="text-2xl font-black tracking-tight italic">
          Insta<span className="text-pink-500 not-italic">Metric</span>
        </h1>
        <div className="h-1 w-8 bg-pink-600 rounded-full mt-1" />
      </div>

      {/* Navigation */}
      <nav className="space-y-1.5 flex-1">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3.5 rounded-2xl font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-gradient-to-r from-pink-600/20 to-transparent text-pink-500 border-l-4 border-pink-600 rounded-l-none"
                    : "text-slate-400 hover:bg-slate-900 hover:text-slate-200"
                }`
              }
            >
              <Icon 
                size={22} 
                className="transition-transform group-hover:scale-110" 
              />
              <span className="tracking-wide">{link.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* User / Logout Section */}
      <div className="mt-auto pt-6 border-t border-slate-900">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl text-slate-400 hover:bg-rose-500/10 hover:text-rose-500 transition-all duration-200 group"
        >
          <LogOut 
            size={20} 
            className="group-hover:-translate-x-1 transition-transform" 
          />
          <span className="font-semibold">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;