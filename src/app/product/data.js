 "use client"
import React, { useEffect, useState } from 'react';
import Productdetails from './productdetails';

const Data = ({ slug, user }) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
        const response = await fetch(`${apiUrl}/api/products?filters[slug]=${slug}&populate=*`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, user]); // Dependencies array ensures this runs only when slug or user changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!products) return <div>No product data available.</div>;

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          {products.data.map(p => <Productdetails key={p.id} {...p} />)}
        </div>
      </section>
    </div>
  );
};

export default Data;
