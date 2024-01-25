// Event.js

import React from 'react';

const EventItem = ({ event }) => {
  const formattedDate = new Date(event.appt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <div className="mb-6">
        <span className="font-semibold mx-5 title-font text-gray-700">{event.department}</span>
        <span className="ml-5 text-gray-500 text-sm">{formattedDate}</span>
      </div>
      <div className="md:w-64 md:mb-0 flex-shrink-0">
        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{event.name}</h2>
        <p className="leading-relaxed">{event.subject}</p>
        <a href={event.meetlink1} target="_blank" rel="noopener noreferrer" className="text-indigo-500 inline-flex items-center mt-4">
          Join Event
        </a>
      </div>
    </div>
  );
};

const EventList = ({ events }) => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="-my-8 divide-y-2 divide-gray-100">
        {events.map((event) => (
          <div key={event._id} className="" style={{ marginLeft: "250px", marginTop: "50px", border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}> {/* Move py-8 here */}
            <EventItem event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Event({ events }) {
  return (
    <div>
      <section  className="text-gray-600 body-font overflow-hidden">
        <EventList events={events} />
      </section>
    </div>
  );
}
