export default function About() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid items-center gap-10 md:grid-cols-2">

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              About Us
            </p>

            <h1 className="mb-5 text-4xl font-bold text-gray-900">
              Welcome to MyStore
            </h1>

            <p className="mb-5 leading-7 text-gray-600">
              MyStore is a simple online store where you can discover
              different products and explore their details easily.
            </p>

            <p className="leading-7 text-gray-600">
              Our goal is to provide a simple and enjoyable shopping
              experience with a clean and responsive design.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Why MyStore?
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">
                  🛍️ Wide Range of Products
                </h3>
                <p className="text-sm text-gray-500">
                  Explore different products in one place.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  ⚡ Easy to Use
                </h3>
                <p className="text-sm text-gray-500">
                  Simple and user-friendly interface.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">
                  📱 Responsive Design
                </h3>
                <p className="text-sm text-gray-500">
                  Works smoothly on mobile, tablet, and desktop.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
