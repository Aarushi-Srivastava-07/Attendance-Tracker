export default function ScanPage() {
  return (
    <div className="max-w-4xl">
      <h3 className="text-2xl font-bold tracking-tight text-zinc-950 mb-2">Scan QR</h3>
      <p className="text-sm text-zinc-500 mb-6">
        Point your camera at the meeting QR code to mark your attendance.
      </p>
      
      {/* Placeholder Box for Person 3 */}
      <div className="rounded-xl border border-zinc-200 bg-white p-12 shadow-sm flex flex-col items-center justify-center text-center">
        <div className="w-48 h-48 border-2 border-dashed border-zinc-300 rounded-lg flex items-center justify-center mb-4 bg-zinc-50">
          <span className="text-zinc-400 text-sm">Camera Feed Placeholder</span>
        </div>
        <p className="text-sm font-medium text-zinc-600">
          Person 3 will implement the qrcode.js scanner here.
        </p>
      </div>
    </div>
  );
}