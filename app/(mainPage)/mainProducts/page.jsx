'use client'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [responseData, setResponseData] = useState(null);

  async function fetchProductDetails() {
    try {
      const res = await fetch(
        'https://outspokenly-unindulged-jenine.ngrok-free.dev/product/details/',
        {
          method: 'POST',             
          headers: {
            'Content-Type': 'application/json', 
          },
          body: JSON.stringify({
            device_id: 'qwef4323fe-ert',
            product_id: '3',
          }),
        }
      );

      const data = await res.json();
      console.log(data[0]);
      setResponseData(data);

    } catch (err) {
      console.error('Error fetching product details:', err);
      setResponseData({ error: 'Failed to fetch data' });
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
};

export default Page;
