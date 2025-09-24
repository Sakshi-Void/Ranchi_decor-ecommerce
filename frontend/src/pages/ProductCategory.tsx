import React from "react";
import { useParams } from "react-router-dom";

export default function ProductCategory() {
  const { id } = useParams();
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Category: {id}</h1>
      <p className="mt-4 text-gray-600">Products under this category.</p>
    </div>
  );
}
