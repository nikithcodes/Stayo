import React from 'react';

export default function Home() {
  return (
    <>
      \
      <div className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Discover Your Perfect Stay</h1>
          <p className="hero-subtitle">Find and book accommodations around the world</p>
        </div>

        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder="Where are you going?" />
            <input type="date" />
            <input type="date" />
            <input type="number" min="1" defaultValue={1} />
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>

      
      <section className="destinations">
        <div className="destinations-header">
          <h2>Popular Destinations</h2>
          <button className="view-all">View All</button>
        </div>

        <div className="card-grid">
          {[
            { city: "New York", country: "USA", count: 147, img: "/images/newyork.avif" },
            { city: "Miami", country: "USA", count: 83, img: "/images/miami.avif" },
            { city: "Paris", country: "France", count: 218, img: "/images/paris.avif" },
            { city: "San Francisco", country: "USA", count: 112, img: "/images/sanfrancio.avif" },
            { city: "London", country: "UK", count: 95, img: "/images/london.avif" },
            { city: "Tokyo", country: "Japan", count: 121, img: "/images/tokyo.avif" },
          ].map((item, index) => (
            <div className="destination-card" key={index}>
              <img src={item.img} alt={`${item.city}, ${item.country}`} />
              <div className="card-overlay">
                <h3>{item.city}</h3>
                <p>{item.country}</p>
                <p className="property-count">{item.count} properties</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <style>{`
        .hero {
          height: 80vh;
          background-image: url('/home.avif');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .hero-overlay {
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 40px 20px 120px;
          text-align: center;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
        }

        .hero-subtitle {
          font-size: 1.2rem;
        }

        .search-container {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          width: 100%;
          max-width: 1000px;
          padding: 0 20px;
        }

        .search-box {
          background: white;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          gap: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          flex-wrap: wrap;
        }

        .search-box input {
          flex: 1;
          min-width: 160px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        .search-btn {
          background-color: #2563eb;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .search-btn:hover {
          background-color: #1e40af;
          box-shadow: 0 0 12px #3b82f6;
        }

        .destinations {
          margin-top: 80px;
          padding: 40px 20px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .destinations-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .view-all {
          border: 1px solid #2563eb;
          color: #2563eb;
          background: transparent;
          padding: 6px 14px;
          border-radius: 6px;
          cursor: pointer;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .destination-card {
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .destination-card:hover {
          transform: scale(1.02);
        }

        .destination-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 16px;
          background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
          color: white;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: color 0.3s ease;
        }

        .destination-card:hover .card-overlay {
          color: #e0f2fe;
        }

        .card-overlay h3,
        .card-overlay p {
          margin: 0;
          transform: translateY(10px);
          opacity: 0.8;
          transition: all 0.4s ease;
        }

        .destination-card:hover .card-overlay h3,
        .destination-card:hover .card-overlay p {
          transform: translateY(0px);
          opacity: 1;
        }

        .card-overlay .property-count {
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .destination-card:hover .card-overlay .property-count {
          color: #7dd3fc;
        }
      `}</style>
    </>
  );
}




