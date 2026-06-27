export default function PhotoStrip() {
  const images = [
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1537151625747-768eb6cf92b?auto=format&fit=crop&w=900&q=80",
  ];

  const photos = [...images, ...images];

  return (
    <section className="relative overflow-hidden bg-[#111111] py-10">
      {/* Top Gold Divider */}
      <div className="mx-auto mb-8 h-px w-[95%] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

      <div className="marquee">
        <div className="marquee-track">
          {photos.map((image, index) => (
            <div
              key={index}
              className="w-[340px] h-[220px] flex-shrink-0 overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt="WPT Wales Training"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gold Divider */}
      <div className="mx-auto mt-8 h-px w-[95%] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </section>
  );
}
