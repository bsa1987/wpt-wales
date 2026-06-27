export default function PhotoStrip() {
  const images = [
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517438984742-1262db08379e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
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
