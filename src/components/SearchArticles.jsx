
'use client';
export default function SearchArtices() {
  return (
    <div className="relative w-full h-[85vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/featured/bgihs2.jpg')" }}
      ></div>
      <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white max-w-md shadow-xl border border-white/20">
        <h2 className="text-4xl font-semibold mb-2">Articles</h2>
        <p className="text-lg">
          Discover our in-depth articles on nutrition, plant-based living and productivity.
        </p>
      </div>
    </div>
  );
}