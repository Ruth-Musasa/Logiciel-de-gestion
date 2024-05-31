"use client";

import { BaseButton, BaseAlert, Field, Button, BaseHeroIcon } from "@epsilon-pros/ui";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from "@/Components/Dashboard";
export default function Home() {
  return (
    <div className="bg-white h-screen flex ">
      <div className="w-2/12">
        <div className="h-20 bg-yellow-500"> Logo</div>
        <Router>
          <Dashboard />
        </Router>
      </div>
      <div className="bg-gray-500 w-10/12">
      </div>
    </div>
  );
}
