import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      <p className="mb-2 text-sm text-blue-600">{book.category}</p>

      <h3 className="text-lg font-bold">{book.title}</h3>

      <p className="mt-1 text-sm text-gray-600">
        By {book.author}
      </p>

      <p className="mt-3 text-sm text-gray-600">
        ⭐ {book.rating}
      </p>

      <Link
        to={`/book/${book.id}`}
        className="mt-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}

export default BookCard;