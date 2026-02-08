interface EventItem {
    date: string;
    title: string;
    description?: string;
    time?: string;
    location?: string;
}

interface EventGroup {
    month: string;
    items: EventItem[];
}

interface EventListProps {
    events: EventGroup[];
    showDescription?: boolean;
}

export default function EventList({ events, showDescription = true }: EventListProps) {
    return (
        <div className="space-y-10">
            {events.map((group, groupIndex) => (
                <div key={groupIndex} className="animate-fade-in-up" style={{ animationDelay: `${groupIndex * 0.1}s` }}>
                    {/* Month Header */}
                    <div className="flex items-center mb-6">
                        <div className="w-2 h-8 bg-orange-500 rounded-full mr-4" />
                        <h3 className="text-2xl font-bold text-navy-500">{group.month}</h3>
                    </div>

                    {/* Events for this month */}
                    <div className="space-y-4 ml-6">
                        {group.items.map((event, eventIndex) => (
                            <div
                                key={eventIndex}
                                className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-transparent hover:border-orange-500"
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-4">
                                    {/* Date Badge */}
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-gradient-to-br from-navy-500 to-navy-600 rounded-xl flex flex-col items-center justify-center text-white shadow-lg group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                                            <span className="text-2xl font-bold leading-none">
                                                {event.date.split(' ')[0]}
                                            </span>
                                            <span className="text-xs uppercase tracking-wider mt-1">
                                                {event.date.split(' ')[1] || ''}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex-grow">
                                        <h4 className="text-lg font-bold text-navy-500 group-hover:text-orange-500 transition-colors duration-300">
                                            {event.title}
                                        </h4>

                                        {/* Time and Location */}
                                        {(event.time || event.location) && (
                                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                                                {event.time && (
                                                    <div className="flex items-center">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        {event.time}
                                                    </div>
                                                )}
                                                {event.location && (
                                                    <div className="flex items-center">
                                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        {event.location}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Description */}
                                        {showDescription && event.description && (
                                            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                                                {event.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

/*
 * Component Notes:
 * ----------------
 * - events: Array of EventGroup, each containing:
 *   - month: Display name for the month group
 *   - items: Array of EventItem with date, title, description, time, location
 * 
 * - showDescription: Toggle to show/hide event descriptions
 * 
 * - Date format: Expects "Day Month" format like "15 Sept" or "3 Oct"
 *   The component splits on space to separate day and month
 * 
 * - Example usage:
 *   const events = [
 *     {
 *       month: 'September 2025',
 *       items: [
 *         { date: '15 Sept', title: 'Resumption Day', time: '8:00 AM', location: 'Main Campus' },
 *         { date: '20 Sept', title: 'Parent Orientation', description: 'Meeting for all parents' },
 *       ]
 *     },
 *   ];
 *   <EventList events={events} />
 */
