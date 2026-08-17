import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector((state) => state.books.books);

  // Display the first four books as popular books.
  const popularBooks = books.slice(0, 4);

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* Welcome section */}
      <section className="rounded-lg bg-blue-600 p-10 text-center text-white">
        <h1 className="text-3xl font-bold">
          Welcome to MyLibrary
        </h1>

        <p className="mt-3">
          Find and explore your favorite books.
        </p>

        <Link
          to="/books/all"
          className="mt-5 inline-block rounded-md bg-white px-5 py-2 text-blue-600"
        >
          Browse Books
        </Link>
      </section>

      {/* Categories */}
      <section className="mt-10">
        <h2 className="mb-5 text-2xl font-bold">
          Book Categories
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${category}`}
              className="rounded-lg border bg-white p-5 text-center shadow-sm hover:border-blue-400"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular books */}
      <section className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Popular Books
          </h2>

          <Link
            to="/books/all"
            className="text-sm text-blue-600"
          >
            View All
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;