export default function FlightStatus() {
  return (
    <section className="mx-4 mt-6 bg-white rounded-2xl shadow-sm p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-sky-100 text-sky-600">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </span>
        <h2 className="text-base font-bold text-gray-800">Flight Status</h2>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed mb-3">
        Track your flight in real-time. Get updates on departure, arrival, gate changes, and delays.
      </p>
      <a href="#" className="text-sm font-semibold text-sky-600 hover:text-sky-700">
        Check Status →
      </a>
    </section>
  )
}
