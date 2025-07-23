import React, { useEffect, useState } from "react";
import Navbar from "./../components/Navbar.jsx";
import supabase from "../../supabaseClient";

const HotelList = () => {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHotelsByCity = async (cityName) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("Hotellist")
        .select("*")
        .ilike("City", `%${cityName}%`); // <-- Capital C here

      if (error) throw error;

      setHotels(data);
    } catch (err) {
      setError(err.message);
      setHotels([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      setSearchCity(city.trim());
    }
  };

  useEffect(() => {
    if (searchCity) {
      fetchHotelsByCity(searchCity);
    }
  }, [searchCity]);

  return (<>
    {/* <Navbar /> */}

    <div style={{ padding: "10vh" , backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Search bar */}
      <Navbar />
      <div style={{
        display: "flex",
        gap: "42px",
        marginBottom: "32px",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: "10px 16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
            width: "300px"
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6366f1",
            color: "white",
            fontWeight: "600",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Search
        </button>
      </div>

      {/* Results */}
      {searchCity && (
        <>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px", textAlign: "center" }}>
            Hotels in {searchCity}
          </h2>

          {loading ? (
            <p style={{ textAlign: "center" }}>Loading hotels...</p>
          ) : error ? (
            <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>
          ) : hotels.length === 0 ? (
            <p style={{ textAlign: "center" }}>No hotels found in {searchCity}.</p>
          ) : (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px"
            }}>
              {hotels.map((hotel) => (
                <div
                  key={hotel.id}
                  style={{
                    backgroundColor: "#fff",
                    padding: "16px",
                    borderRadius: "10px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {/* Image */}
                  {hotel["Url"] && (
                    <img
                      src={hotel["Url"]}
                      alt={hotel["Hotel Name"]}
                      style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "cover",
                        borderRadius: "8px",
                        marginBottom: "10px"
                      }}
                    />
                  )}
                  {/* Name */}
                  <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>
                    {hotel["Hotel Name"]}
                  </h3>
                  {/* Rating */}
                  {hotel.rating && (
                    <div style={{ color: "#f59e42", fontWeight: 600, marginBottom: "6px" }}>
                      ★ {hotel.rating}
                    </div>
                  )}
                  {/* Price */}
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>
                    Price: ₹{hotel.Price || hotel.price}
                  </p>
                  {/* Description */}
                  <p style={{ marginBottom: "6px" }}>
                    {hotel.Description || hotel.description}
                  </p>
                  {/* Amenities */}
                  {hotel.amenities && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
                      {(Array.isArray(hotel.amenities) ? hotel.amenities : hotel.amenities.split(',')).map((amenity, idx) => (
                        <span key={idx} style={{
                          background: "#f3f4f6",
                          color: "#374151",
                          padding: "4px 10px",
                          borderRadius: "12px",
                          fontSize: "13px"
                        }}>
                          {amenity.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* City */}
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>
                    City: {hotel.City || hotel.city}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
    </>
  );
};

export default HotelList;
