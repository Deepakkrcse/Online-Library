import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="mt-3 text-2xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-600">
          The page <strong>{location.pathname}</strong> does not exist.
        </p>

        <Link
          to="/"
          className="mt-5 inline-block rounded-md bg-blue-600 px-5 py-2 text-white"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;