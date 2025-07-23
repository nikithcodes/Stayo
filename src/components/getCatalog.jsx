import React, { useEffect, useState } from "react";
import supabase from "../../supabaseClient.js";

const GetCatalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const { data, error } = await supabase.from("Hotellist").select("*");
        if (error) throw error;
        setCatalog(data);
      } catch (err) {
        setError(err.message);
        setCatalog([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCatalog();
  }, []);

  if (loading) return <div style={{ padding: "16px" }}>Loading catalog...</div>;
  if (error) return <div style={{ color: "red", padding: "16px" }}>Error: {error}</div>;

  return (
    <div style={{ padding: "16px", backgroundColor: "#f9f9f9" }}>
      {catalog.length === 0 ? (
        <div>No hotels found.</div>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {catalog.map((hotel) => (
            <li
              key={hotel.id}
              style={{
                background: "#fff",
                marginBottom: "12px",
                padding: "12px",
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{ margin: "0 0 6px 0" }}>{hotel.name}</h3>
              <p style={{ margin: 0 }}>{hotel.description}</p>
              {/* Add more fields as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetCatalog;
