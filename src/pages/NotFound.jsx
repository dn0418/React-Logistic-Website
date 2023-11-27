import React from "react";

const DashboardNotFound = () => {
  document.title = "404 - Page Not Found"
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="text-gray-600">Page not found.</p>
      </div>
    </div>
  );
};

export default DashboardNotFound;
