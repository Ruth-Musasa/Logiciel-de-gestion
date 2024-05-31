"use client";
import { BaseButton, BaseAlert, Field, Button, BaseHeroIcon } from "@epsilon-pros/ui";
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import NavBar from "@/Components/NavBar";
import Dashboard from "@/Menu/Dashboard";
export default function Home() {
  return (
    <Router>
      <div className="bg-primary-500">
        <div className="w-11/12 m-auto flex h-16  justify-between">
          <img src="./ukamililogo.png" alt="" className="h-full w-auto" />
          <div className="bg-white h-10 w-10 self-center rounded-md"></div>
        </div>
      </div>
      <div className="bg-white h-screen flex ">
        <div className="w-2/12">
          <NavBar />
        </div>
        <div className="bg-zinc-100 w-10/12">
          <Routes>
            <Route path="/dashboard" Component={Dashboard}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
