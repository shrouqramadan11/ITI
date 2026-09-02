const images = [
  "https://images.unsplash.com/photo-1498049794561-7780e7231661",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
];

export default function Gallery() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Our Gallery
          </h1>

          <p className="mt-3 text-gray-600">
            Explore some of our products
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-md"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="h-64 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
