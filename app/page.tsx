export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/movie/background_movie.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center transition-opacity duration-1000 opacity-0 animate-fadeIn">
          <h1 className="text-5xl font-bold uppercase tracking-wide mb-4">
            伝わるデザインを提案
          </h1>
          <p className="text-3xl font-light">Design That Conveys</p>
        </div>
      </section>
    </div>
  );
}
