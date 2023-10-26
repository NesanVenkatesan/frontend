import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

function HomePage() {
  return (
    <MainLayout>
      <div className="bg-light p-5 mt-4 rounded-3">
        <h1>Welcome to DevPOS</h1>
        <p>Shop anytime anywhere with just one click, Shopping made easy!</p>
        <p>If you have any issue, call 911 annytime.</p>
        <Link to="/pos" className="btn btn-primary">
          Shop Now
        </Link>
      </div>
    </MainLayout>
  );
}

export default HomePage;
