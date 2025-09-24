import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="mt-4 text-gray-600">Sorry, this page doesn’t exist.</p>
      <Link to="/" className="mt-6 inline-block text-blue-600 underline">
        Go Back Home
      </Link>
    </div>
  );
}
