import { useState } from 'react';
import { Calendar, MapPin, DollarSign, Bell, Share2, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
// import { mockEvents } from '../../utils/mockData';

const events = [
  {
    id: 'EVT001',
    name: 'National Handicraft Fair 2024',
    type: 'Exhibition',
    date: '2024-11-15',
    endDate: '2024-11-20',
    location: { venue: 'Pragati Maidan', city: 'New Delhi', state: 'Delhi' },
    distance: '250 km',
    registrationFee: 5000,
    expectedSales: 45000,
    relevanceScore: 92,
    status: 'upcoming',
    registered: false,
  },
  {
    id: 'EVT002',
    name: 'Rajasthan Craft Festival',
    type: 'Trade Fair',
    date: '2024-09-20',
    endDate: '2024-09-22',
    location: { venue: 'Jaipur Exhibition Ground', city: 'Jaipur', state: 'Rajasthan' },
    distance: '45 km',
    registrationFee: 3000,
    expectedSales: 35000,
    relevanceScore: 98,
    status: 'upcoming',
    registered: true,
  },
  {
    id: 'EVT003',
    name: 'Pottery Workshop - Advanced Techniques',
    type: 'Workshop',
    date: '2024-07-25',
    endDate: '2024-07-25',
    location: { venue: 'Online', city: 'Virtual', state: 'Online' },
    distance: '0 km',
    registrationFee: 500,
    expectedSales: 0,
    relevanceScore: 95,
    status: 'upcoming',
    registered: false,
  },
];

export default function Events() {
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [, setSelectedEvent] = useState<string | null>(null);
  const [eventTypeFilter, setEventTypeFilter] = useState('all');

  const eventTypes = ['all', 'Exhibition', 'Trade Fair', 'Workshop', 'Networking'];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-heading font-bold text-text mb-2">Events & Workshops</h1>
        <p className="text-gray-600">Never miss relevant exhibitions, fairs, and training opportunities</p>
      </div>

      {/* View Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              viewMode === 'list'
                ? 'bg-primary-green text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            List View
          </button>
          <button
            onClick={() => setViewMode('calendar')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              viewMode === 'calendar'
                ? 'bg-primary-green text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Calendar View
          </button>
        </div>
        
        <div className="flex gap-2">
          {eventTypes.map((type) => (
            <button
              key={type}
              onClick={() => setEventTypeFilter(type)}
              className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                eventTypeFilter === type
                  ? 'bg-primary-green text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedEvent(event.id)}
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-3 py-1 bg-primary-green/10 text-primary-green rounded-full text-xs font-semibold">
                          {event.type}
                        </span>
                        {event.registered && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                            Registered ✓
                          </span>
                        )}
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                          {event.relevanceScore}% match
                        </span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-text mb-2">{event.name}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span>{new Date(event.date).toLocaleDateString('en-IN', { 
                        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>{event.location.venue}, {event.location.city}</span>
                      <span className="text-xs text-gray-500">({event.distance})</span>
                    </div>
                    {event.registrationFee > 0 && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <DollarSign className="w-5 h-5" />
                        <span>Registration: ₹{event.registrationFee.toLocaleString()}</span>
                      </div>
                    )}
                    {event.expectedSales > 0 && (
                      <div className="flex items-center gap-2 text-green-600 font-semibold">
                        <TrendingUp className="w-5 h-5" />
                        <span>Expected: ₹{event.expectedSales.toLocaleString()}/artisan</span>
                      </div>
                    )}
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Why this is good for you:</strong>
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Pottery artisans from your region attending</li>
                      <li>• Previous attendees reported ₹50,000 average sales</li>
                      <li>• Award ceremony included</li>
                      <li>• Government subsidy available</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {!event.registered ? (
                    <>
                      <button className="px-6 py-2 bg-primary-green text-white rounded-lg hover:bg-primary-green-light transition-colors font-semibold">
                        Register Now
                      </button>
                      <button className="px-6 py-2 border-2 border-primary-green text-primary-green rounded-lg hover:bg-primary-green hover:text-white transition-colors font-semibold flex items-center justify-center gap-2">
                        <Bell className="w-4 h-4" />
                        Set Reminder
                      </button>
                    </>
                  ) : (
                    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-700 mb-2">✓ Registered</p>
                      <p className="text-xs text-green-600 mb-3">Registration details sent to your email</p>
                      <button className="w-full px-4 py-2 bg-white border border-green-300 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-semibold">
                        View Details
                      </button>
                    </div>
                  )}
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <div className="text-center text-gray-500 py-12">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-lg font-semibold mb-2">Calendar View</p>
            <p className="text-sm">Full calendar implementation coming soon</p>
          </div>
        </motion.div>
      )}

      {/* My Events Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 shadow-sm"
      >
        <h2 className="text-xl font-heading font-semibold mb-4 text-text">My Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-1">Registered Events</p>
            <p className="text-2xl font-bold text-text">1</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Interested (Saved)</p>
            <p className="text-2xl font-bold text-text">3</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Past Events</p>
            <p className="text-2xl font-bold text-text">5</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

