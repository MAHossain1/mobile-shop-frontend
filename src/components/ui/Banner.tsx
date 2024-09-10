import Link from 'next/link';

const Banner = () => {
  return (
    <section className="relative text-white overflow-hidden rounded-md">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://rb.gy/dmrzfs')`,
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-800/60"></div>
      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Shine Brighter with Our Premium Car Wash Services
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Experience the ultimate in car care with our top-notch services
          designed to keep your vehicle looking its best.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/services"
            className="bg-[#30415A] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#30415A] hover:text-white transition duration-300 shadow-lg text-xl md:text-2xl sm:text-xl"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
