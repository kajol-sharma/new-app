'use client';
import React, { useEffect, useState } from 'react';
import { productFetch } from '../../helper/productFetch';
import { PRODUCT_API } from '../../api/api.js';

const MainProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await productFetch(PRODUCT_API, {
        device_id: 'qwef4323fe-ert',
        product_id: [2, 3],
      });
      setProducts(data || []);
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 py-10 px-4">
      <h1 className="text-2xl font-bold text-[var(--color-main)] mb-6 text-center">
        Products
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {products.map((item) => (
            <div
              key={item.product_id}
              className="bg-white rounded-xl shadow-md p-3 flex flex-col hover:shadow-lg transition"
            >
              {/* Product Image */}
              <div className="w-auto h-auto mb-3">
                <img
                  src="/punnyadhara.jpeg"
                  alt={item.product_name}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>

              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-green-500 flex items-center justify-center rounded-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-xs font-bold">{item.volume} ml</p>
                </div>
                <button className="bg-white text-green-500 text-xs font-bold px-3 py-1 border-1 rounded hover:bg-green-500 hover:text-white transition cursor-pointer">
                  ADD
                </button>
              </div>

              <h2 className="text-sm font-semibold mb-2">
                {item.product_name}
              </h2>

              <div className="flex items-center gap-2">
                <p className="text-sm font-bold  line-through">₹{item.mrp}</p>
                <p className="text-xl font-bold text-[var(--color-main)]">₹{item.pd_price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainProducts;
