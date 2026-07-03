import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Content from "./pages/Content";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import ConnectAccount from "./pages/ConnectAccount";


function ProtectedLayout({ children }) {
  const user = localStorage.getItem("instametric_user");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedLayout>
              <Dashboard />
            </ProtectedLayout>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedLayout>
              <Analytics />
            </ProtectedLayout>
          }
        />

        <Route
          path="/content"
          element={
            <ProtectedLayout>
              <Content />
            </ProtectedLayout>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedLayout>
              <Reports />
            </ProtectedLayout>
          }
        />

              <Route
  path="/connect"
  element={
    <ProtectedLayout>
      <ConnectAccount />
    </ProtectedLayout>
  }
/>      <Route
  path="/connect"
  element={
    <ProtectedLayout>
      <ConnectAccount />
    </ProtectedLayout>
  }
/>
      </Routes>


    </BrowserRouter>
  );
}

export default App;