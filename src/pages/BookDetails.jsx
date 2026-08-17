import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();

  const books = useSelector((state) => state.books.books);

  // Find the book using the ID from the URL.
  const book = books.find(
    (book) => book.id.toString() === id
  );

  if (!book) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-bold">
          Book Not Found
        </h1>

        <Link
          to="/books/all"
          className="mt-4 inline-block text-blue-600"
        >
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link
        to="/books/all"
        className="text-blue-600"
      >
        ← Back to Browse
      </Link>

      <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm">
        <p className="text-sm text-blue-600">
          {book.category}
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          {book.title}
        </h1>

        <p className="mt-2 text-gray-600">
          Author: {book.author}
        </p>

        <p className="mt-4">
          <strong>Rating:</strong> ⭐ {book.rating}
        </p>

        <div className="mt-6">
          <h2 className="font-bold">Description</h2>

          <p className="mt-2 leading-7 text-gray-600">
            {book.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;