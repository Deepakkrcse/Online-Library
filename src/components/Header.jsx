import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold text-blue-600">
          MyLibrary
        </Link>

        <div className="flex gap-4 text-sm">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link to="/books/all" className="hover:text-blue-600">
            Browse Books
          </Link>

          <Link to="/add-book" className="hover:text-blue-600">
            Add Book
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;