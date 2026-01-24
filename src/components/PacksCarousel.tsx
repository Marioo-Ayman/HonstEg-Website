import{ useState, useEffect } from 'react';

const LogoCarousel = () => {
  const [offset, setOffset] = useState(0);

  const logos = [
    { name: 'Tatweer Misr', initials: 'TM' },
    { name: 'Al Marasem', initials: 'AM' },
    { name: 'City Edge', initials: 'CE' },
    { name: 'Emaar Misr', initials: 'EM' },
    { name: 'Hyde Park', initials: 'HP' },
    { name: 'OGA', initials: 'OG' },
    { name: 'Tatweer Misr', initials: 'TM' },
    { name: 'Al Marasem', initials: 'AM' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + 100; // Scroll by 100px every 30 seconds
        // Reset when we've scrolled enough
        return newOffset > 300 ? 0 : newOffset;
      });
    }, 10000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-100 py-8 overflow-hidden">
      <div className="max-w-full overflow-hidden">
        <div
          className="flex gap-8 px-4 transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${offset}px)`,
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="shrink-0 w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="text-gray-400 text-sm font-medium mb-1">
                  {logo.initials}
                </div>
                <div className="text-gray-600 text-xs font-semibold">
                  {logo.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;