import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import Students from "./components/pages/Students";
import Teachers from "./components/pages/Teachers";
import Settings from "./components/pages/Settings";
import Groups from "./components/pages/Groups";
import "./index.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
