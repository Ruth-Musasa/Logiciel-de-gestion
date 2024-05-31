"use client";

import { BaseButton, BaseAlert, Field, Button, BaseHeroIcon } from "@epsilon-pros/ui";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from "@/Components/Dashboard";
export default function Home() {
  return (
    <div>
      <div className="h-12 bg-yellow-100"> Logo</div>
      <div className="bg-white h-screen flex ">
        <div className="w-2/12">
          <Router>
            <Dashboard />
          </Router>
        </div>
        <div className="bg-gray-500 w-10/12">
        </div>
      </div>
    </div>
  );
}
