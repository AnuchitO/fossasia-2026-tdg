export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <svg className="w-8 h-8 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-bold text-sky-700">Qoomlee</span>
          <span className="text-xs text-gray-400">Airline</span>
        </div>
      </div>
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-sky-100 text-sky-700 font-semibold text-sm">
        P
      </div>
    </header>
  )
}
