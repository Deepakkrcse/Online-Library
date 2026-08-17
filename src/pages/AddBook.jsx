import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/booksSlice";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [error, setError] = useState("");

  // Update form values.
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check that all fields have been filled.
    if (
      !form.title ||
      !form.author ||
      !form.category ||
      !form.description ||
      !form.rating
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // Check that rating is between 1 and 5.
    if (form.rating < 1 || form.rating > 5) {
      setError("Rating must be between 1 and 5.");
      return;
    }

    const newBook = {
      id: Date.now(),
      title: form.title,
      author: form.author,
      category: form.category,
      description: form.description,
      rating: Number(form.rating),
    };

    // Save the book using Redux.
    dispatch(addBook(newBook));

    // Go to Browse Books after adding.
    navigate("/books/all");
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-3xl font-bold">
        Add Book
      </h1>

      <p className="mt-2 text-gray-600">
        Add a new book to the library.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 space-y-5 rounded-lg border bg-white p-6 shadow-sm"
      >
        {error && (
          <p className="rounded-md bg-red-50 p-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <div>
          <label className="mb-1 block text-sm font-medium">
            Title
          </label>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Author
          </label>

          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Category
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-md border bg-white px-3 py-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Description
          </label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Rating
          </label>

          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            value={form.rating}
            onChange={handleChange}
            className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;