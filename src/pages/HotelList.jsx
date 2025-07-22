import { useState, useMemo, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { format, differenceInDays } from "date-fns";
import { CalendarIcon, MapPin, Filter, X, Star, Wifi, Car, Utensils, Waves, Dumbbell, Flower2 } from "lucide-react";

const supabase = createClient(
  'https://YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
);

const AMENITY_ICONS = {
  "WiFi": <Wifi style={{ width: '16px', height: '16px' }} />,
  "Parking": <Car style={{ width: '16px', height: '16px' }} />,
  "Restaurant": <Utensils style={{ width: '16px', height: '16px' }} />,
  "Pool": <Waves style={{ width: '16px', height: '16px' }} />,
  "Gym": <Dumbbell style={{ width: '16px', height: '16px' }} />,
  "Spa": <Flower2 style={{ width: '16px', height: '16px' }} />,
  "Breakfast": <Utensils style={{ width: '16px', height: '16px' }} />,
  "Bar": <Utensils style={{ width: '16px', height: '16px' }} />
};

const SORT_OPTIONS = [
  { key: 'rating', direction: 'desc', label: 'Highest Rated' },
  { key: 'rating', direction: 'asc', label: 'Lowest Rated' },
  { key: 'price', direction: 'asc', label: 'Price: Low to High' },
  { key: 'price', direction: 'desc', label: 'Price: High to Low' },
  { key: 'reviews', direction: 'desc', label: 'Most Reviewed' }
];

const PAGE_SIZE = 10;

const HotelList = () => {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [searchData, setSearchData] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [1000, 20000],
    minRating: 0,
    amenities: [],
    hotelTypes: []
  });
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);
  const [hotels, setHotels] = useState([]);
  const [totalHotels, setTotalHotels] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const calculateDays = () => {
    if (checkIn && checkOut) {
      return differenceInDays(checkOut, checkIn);
    }
    return 0;
  };

  const fetchHotels = async () => {
    setLoading(true);
    let query = supabase
      .from('hotels')
      .select('*', { count: 'exact' })
      .eq('city', city)
      .gte('price', filters.priceRange[0])
      .lte('price', filters.priceRange[1]);

    if (filters.hotelTypes.length > 0) {
      query = query.in('type', filters.hotelTypes);
    }

    if (filters.minRating > 0) {
      query = query.gte('rating', filters.minRating);
    }

    query = query.order(sortBy.key, { ascending: sortBy.direction === 'asc' });

    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);

    const { data, count, error } = await query;

    if (error) {
      console.error("Supabase fetch error:", error);
      setHotels([]);
    } else {
      setHotels(data || []);
      setTotalHotels(count || 0);
    }

    setLoading(false);
  };

  const handleSearch = () => {
    if (city && checkIn && checkOut && calculateDays() > 0) {
      setSearchData({ city, checkIn, checkOut, days: calculateDays() });
      setPage(1);
    }
  };

  useEffect(() => {
    if (searchData) {
      fetchHotels();
    }
  }, [searchData, filters, sortBy, page]);

  const handleClearFilters = () => {
    setFilters({
      priceRange: [1000, 20000],
      minRating: 0,
      amenities: [],
      hotelTypes: []
    });
  };

  const totalPages = Math.ceil(totalHotels / PAGE_SIZE);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      
      {/* Search Header */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px 16px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #7c3aed, #ec4899, #06b6d4)',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '24px',
            textAlign: 'center'
          }}>
            Find Perfect Hotels for Your Stay
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            alignItems: 'end'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>City</label>
              <div style={{ position: 'relative' }}>
                <MapPin style={{
                  position: 'absolute',
                  left: '12px',
                  top: '12px',
                  height: '16px',
                  width: '16px',
                  color: '#6b7280'
                }} />
                <input
                  placeholder="Enter city name"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 40px',
                    backgroundColor: 'white',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>Check-in</label>
              <input
                type="date"
                value={checkIn ? format(checkIn, 'yyyy-MM-dd') : ''}
                onChange={(e) => setCheckIn(new Date(e.target.value))}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  backgroundColor: 'white',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>Check-out</label>
              <input
                type="date"
                value={checkOut ? format(checkOut, 'yyyy-MM-dd') : ''}
                onChange={(e) => setCheckOut(new Date(e.target.value))}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  backgroundColor: 'white',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {calculateDays() > 0 && (
                <div style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>
                  {calculateDays()} {calculateDays() === 1 ? 'night' : 'nights'}
                </div>
              )}
              <button
                onClick={handleSearch}
                style={{
                  width: '100%',
                  backgroundColor: '#f97316',
                  color: 'white',
                  fontWeight: '600',
                  height: '40px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: !city || !checkIn || !checkOut || calculateDays() <= 0 ? 'not-allowed' : 'pointer',
                  opacity: !city || !checkIn || !checkOut || calculateDays() <= 0 ? 0.5 : 1
                }}
                disabled={!city || !checkIn || !checkOut || calculateDays() <= 0}
              >
                Search Hotels
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hotel Results */}
      {searchData && (
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px 32px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px'
          }}>
            <h2 style={{ fontSize: '20px', fontWeight: '600' }}>
              Hotels in {searchData.city}
            </h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '8px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                backgroundColor: 'white',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              <Filter style={{ height: '16px', width: '16px', marginRight: '8px' }} />
              Filters
            </button>
          </div>

          {loading ? (
            <p style={{ textAlign: 'center' }}>Loading hotels...</p>
          ) : hotels.length > 0 ? (
            <>
              <div style={{ display: 'grid', gap: '24px' }}>
                {hotels.map(hotel => (
                  <div key={hotel.id} style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06)',
                    padding: '20px'
                  }}>
                    <h3>{hotel.name}</h3>
                    <p>{hotel.location}</p>
                    <p>₹{hotel.price}/night</p>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                marginTop: '20px'
              }}>
                <button
                  disabled={page === 1}
                  onClick={() => setPage(p => p - 1)}
                  style={{ padding: '8px', borderRadius: '4px', border: '1px solid gray' }}
                >
                  Prev
                </button>
                <span>{page} / {totalPages}</span>
                <button
                  disabled={page === totalPages}
                  onClick={() => setPage(p => p + 1)}
                  style={{ padding: '8px', borderRadius: '4px', border: '1px solid gray' }}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <p style={{ textAlign: 'center' }}>No hotels found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default HotelList;
