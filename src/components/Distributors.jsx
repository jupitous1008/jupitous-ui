import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../style/Distributor.scss';

// Static Data Config representing City-wise Distributor Overview
const mockDistributorData = [
    { id: 'pune', city: 'Pune', coordinates: [18.5204, 73.8567], active: 12, upcoming: 6 },
    { id: 'delhi', city: 'Delhi', coordinates: [28.6139, 77.2090], active: 0, upcoming: 4 },
    { id: 'mumbai', city: 'Mumbai', coordinates: [19.0760, 72.8777], active: 12, upcoming: 3 },
    { id: 'bengaluru', city: 'Bengaluru', coordinates: [12.9716, 77.5946], active: 18, upcoming: 5 },
    { id: 'hyderabad', city: 'Hyderabad', coordinates: [17.3850, 78.4867], active: 9, upcoming: 2 },
    { id: 'chennai', city: 'Chennai', coordinates: [13.0827, 80.2707], active: 7, upcoming: 6 },
    { id: 'kolkata', city: 'Kolkata', coordinates: [22.5726, 88.3639], active: 11, upcoming: 4 },
    { id: 'ahmedabad', city: 'Ahmedabad', coordinates: [23.0225, 72.5714], active: 6, upcoming: 2 }
];

const indiaBounds = [
    [6.4627, 68.1097],   // South-West India
    [35.5133, 97.3956],  // North-East India
];

// Component helper to handle map panning programmatically on data selection
function MapViewHandler({ center }) {
    const map = useMap();
    useEffect(() => {
        if (center) {
            map.setView(center, 6, { animate: true, duration: 1 });
        }
    }, [center, map]);
    return null;
}

export default function Dashboard() {
    const [selectedCityId, setSelectedCityId] = useState('pune');
    const [searchQuery, setSearchQuery] = useState('');

    const currentData = mockDistributorData.find(item => item.id === selectedCityId) || mockDistributorData[0];

    // Global counts for Summary Card
    const totalActiveAllCities = mockDistributorData.reduce((acc, curr) => acc + curr.active, 0);
    const totalUpcomingAllCities = mockDistributorData.reduce((acc, curr) => acc + curr.upcoming, 0);

    // Filtered list for search box matching
    const filteredCities = mockDistributorData.filter(item =>
        item.city.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Helper factory for React Leaflet custom stylized divIcon markers
    const createCustomMarker = (isActive) => {
        return L.divIcon({
            className: isActive ? 'custom-marker-active' : 'custom-marker-upcoming',
            html: `<div style="
        width: 14px; 
        height: 14px; 
        background-color: ${isActive ? '#00e676' : '#ffb703'}; 
        border: 2px solid #fff; 
        border-radius: 50%;
        box-shadow: 0 0 8px rgba(0,0,0,0.5);
      "></div>`,
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });
    };

    return (
        <div className='distributors-page'>
            <section className='distributors-hero'>
                <div className='hero-overlay'>
                    <div className='hero-copy'>
                        <h1>India Distributor Network</h1>
                        <p>Explore active and upcoming distributor hubs across India with live interactive map navigation.</p>

                         <header className="dashboard-header">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Explore City Distributors..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </header>
                    </div>
                </div>
            </section>
            <div className="dashboard-container">
                {/* Top Header Block */}
                {/* <header className="dashboard-header">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Explore City Distributors..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </header> */}

                {/* Main UI Workspace Split */}
                <main className="dashboard-grid">

                    {/* Left Bar: Navigation Lists & Ecosystem Summary */}
                    <div className="glass-panel sidebar-panel">
                        <h3>CITIES</h3>
                        <ul className="city-list">
                            {filteredCities.length > 0 ? (
                                filteredCities.map((item) => (
                                    <li
                                        key={item.id}
                                        className={item.id === selectedCityId ? 'active' : ''}
                                        onClick={() => setSelectedCityId(item.id)}
                                    >
                                        <span>{item.city}</span>
                                        <span className="city-tag">{item.active + item.upcoming} Hubs</span>
                                    </li>
                                ))
                            ) : (
                                <li className="empty-list">Not Available</li>
                            )}
                        </ul>

                        <div className="summary-box">
                            <h4>NETWORK TOTALS</h4>
                            <p>Active Across India: <strong>{totalActiveAllCities}</strong></p>
                            <p>Upcoming Pipeline: <strong>{totalUpcomingAllCities}</strong></p>
                        </div>
                    </div>

                    {/* Center Canvas: Interactive Cyber-styled Leaflet Map */}
                    <div className="glass-panel map-panel">
                        <MapContainer
                            center={[22.9734, 78.6568]}
                            zoom={5}
                            minZoom={5}
                            maxZoom={7}
                            maxBounds={indiaBounds}
                            maxBoundsViscosity={1.0}
                            scrollWheelZoom={false}
                            doubleClickZoom={false}
                            boxZoom={false}
                            keyboard={false}
                            touchZoom={false}
                            dragging={true}
                            zoomControl={true}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {/* Dynamic camera sync configuration hook */}
                            <MapViewHandler center={currentData.coordinates} />

                            {/* Loop through map objects configuration */}
                            {mockDistributorData.map((markerData) => {
                                const hasActiveHubs = markerData.active > 0;
                                return (
                                    <Marker
                                        key={markerData.id}
                                        position={markerData.coordinates}
                                        icon={createCustomMarker(hasActiveHubs)}
                                        eventHandlers={{
                                            click: () => setSelectedCityId(markerData.id),
                                        }}
                                    >
                                        <Popup>
                                            <div style={{ color: '#0d1b2a', fontFamily: 'sans-serif', margin: 0 }}>
                                                <strong style={{ fontSize: '14px' }}>{markerData.city}</strong>
                                                <hr style={{ margin: '4px 0', border: '0', borderTop: '1px solid #ccc' }} />
                                                Active Hubs: {markerData.active}<br />
                                                Upcoming Hubs: {markerData.upcoming}
                                            </div>
                                        </Popup>
                                    </Marker>
                                );
                            })}
                        </MapContainer>
                    </div>

                    {/* Right Bar: Metrics City Analytics Control Panel */}
                    <div className="glass-panel metrics-panel">
                        <div className="panel-header">
                            <h2>CITY DASHBOARD</h2>
                            <select
                                className="city-selector"
                                value={selectedCityId}
                                onChange={(e) => setSelectedCityId(e.target.value)}
                            >
                                {mockDistributorData.map((item) => (
                                    <option key={item.id} value={item.id}>{item.city.toUpperCase()}</option>
                                ))}
                            </select>
                        </div>

                        <div className="total-display">
                            <div className="count">{currentData.active + currentData.upcoming}</div>
                            <div className="label">{currentData.city} Distributor Total</div>
                        </div>

                        <div className="status-cards">
                            <div className="status-card active-card">
                                <div className="meta">
                                    <h4>ACTIVE</h4>
                                    <p>LIVE NOW: Reliable operations in {currentData.city}.</p>
                                </div>
                                <div className="value">{currentData.active}</div>
                            </div>

                            <div className="status-card upcoming-card">
                                <div className="meta">
                                    <h4>UPCOMING</h4>
                                    <p>LAUNCHING SOON: Pre-registration active.</p>
                                </div>
                                <div className="value">{currentData.upcoming}</div>
                            </div>
                        </div>

                        <div className="legend-footer">
                            <div className="legend-item active">
                                <span></span> Active
                            </div>
                            <div className="legend-item upcoming">
                                <span></span> Upcoming
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>

    );
}