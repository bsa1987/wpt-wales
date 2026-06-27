export default function PhotoStrip() {
  const images = [
    "/10.png",
  "/11.png",
  "/12.png",
  "/13.png",
  "/14.png",
  "/15.png",
  "/16.png",
  "/17.png",
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
