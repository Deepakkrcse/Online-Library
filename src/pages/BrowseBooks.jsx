import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();

  const books = useSelector((state) => state.books.books);

  const [search, setSearch] = useState("");

  const categories = [
    "all",
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Fantasy",
  ];

  // Filter books according to category and search text.
  const filteredBooks = books.filter((book) => {
    const categoryMatches =
      category.toLowerCase() === "all" ||
      book.category.toLowerCase() === category.toLowerCase();

    const searchMatches =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    return categoryMatches && searchMatches;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Browse Books</h1>

      <p className="mt-2 text-gray-600">
        Search and filter the books in our library.
      </p>

      {/* Search box */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Search by title or author"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border bg-white px-4 py-2 focus:border-blue-500 focus:outline-none md:w-96"
        />
      </div>

      {/* Category links */}
      <div className="mt-5 flex flex-wrap gap-2">
        {categories.map((item) => (
          <Link
            key={item}
            to={`/books/${item}`}
            className="rounded-md border bg-white px-4 py-2 text-sm hover:bg-blue-50"
          >
            {item === "all" ? "All" : item}
          </Link>
        ))}
      </div>

      {/* Books */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="text-gray-600">
            No books found.
          </p>
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;