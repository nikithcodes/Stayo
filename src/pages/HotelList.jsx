import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BlurText from '../components/animations/BlurText';


const HotelList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState('price');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetchCities();
    fetchHotels();
  }, [searchParams]);

  const fetchCities = async () => {
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/bookingportals/city', {
        headers: {
          'projectId': 'your_project_id'
        }
      });
      const data = await response.json();
      if (data.status === 'success') {
        setCities(data.data.cities.map(city => city.cityState));
      }
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const fetchHotels = async () => {
    setLoading(true);
    try {
      const search = searchParams.get('search');
      let url = 'https://academics.newtonschool.co/api/v1/bookingportals/hotel?limit=20';

      if (search) {
        url += `&search={"location":"${search}"}`;
      }

      if (priceRange[0] > 0 || priceRange[1] < 50000) {
        url += `&filter={"avgCostPerNight":{"$gte":${priceRange[0]},"$lte":${priceRange[1]}}}`;
      }

      const response = await fetch(url, {
        headers: {
          'projectId': 'your_project_id'
        }
      });

      const data = await response.json();
      if (data.status === 'success') {
        setHotels(data.data.hotels || []);
      }
    } catch (error) {
      console.error('Error fetching hotels:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchQuery) {
      params.set('search', searchQuery);
    }
    navigate(`/hotels?${params.toString()}`);
  };

  const sortedHotels = hotels.sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.avgCostPerNight - b.avgCostPerNight;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div>
      <Navbar />

      <div>
        <div>
          <BlurText delay={0.2}>
            {searchParams.get('search') ? 
              `Hotels in ${searchParams.get('search')}` : 
              'All Hotels'}
          </BlurText>
          <p>{hotels.length} properties found</p>
        </div>

        <div>
          <div>
            <Input
              placeholder="Search by city or hotel name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price">Price: Low to High</SelectItem>
                <SelectItem value="rating">Rating: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSearch}>Search</Button>
          </div>

          <div>
            <label>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={50000}
              min={0}
              step={1000}
            />
          </div>
        </div>

        {loading ? (
          <div>
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {sortedHotels.map(hotel => (
              <div
                key={hotel._id}
                onClick={() => navigate(`/hotels/${hotel._id}`)}
              >
                <Card>
                  <div>
                    <img
                      src={hotel.images?.[0] || 'https://images.unsplash.com/photo-1487958449943-2429e8be8625'}
                      alt={hotel.name}
                    />
                    <div>★ {hotel.rating || 4.5}</div>
                  </div>
                  <CardContent>
                    <h3>{hotel.name}</h3>
                    <p>{hotel.location}</p>
                    <div>
                      {hotel.amenities?.slice(0, 3).map((amenity, idx) => (
                        <span key={idx}>{amenity}</span>
                      ))}
                    </div>
                    <div>
                      <span>₹{hotel.avgCostPerNight?.toLocaleString()}</span>
                      <span>/night</span>
                      <Button variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}

        {!loading && hotels.length === 0 && (
          <div>
            <p>No hotels found matching your criteria</p>
            <Button onClick={() => window.location.reload()} variant="outline">
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelList;
