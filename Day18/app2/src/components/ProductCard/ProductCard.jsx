export default function ProductCard({ product, onSelect }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-md transition hover:shadow-xl">
      <img
        src={product.image}
        alt={product.title}
        className="h-52 w-full object-contain"
      />

      <h2 className="mt-4 line-clamp-2 text-lg font-bold text-gray-800">
        {product.title}
      </h2>

      <p className="mt-2 text-xl font-semibold text-gray-900">
        ${product.price}
      </p>

      <button
        onClick={() => onSelect(product)}
        className="mt-4 w-full rounded-lg bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
      >
        View Product
      </button>
    </div>
  );
}