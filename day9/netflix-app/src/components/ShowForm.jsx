import { useState, useEffect } from "react";

function ShowForm({ selectedShow, saveShow }) {
  const [form, setForm] = useState({
    title: "",
    genre: "",
    release_year: "",
    seasons: "",
    rating: "",
  });

  useEffect(() => {
    if (selectedShow) {
      setForm(selectedShow);
    }
  }, [selectedShow]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveShow(form);

    setForm({
      title: "",
      genre: "",
      release_year: "",
      seasons: "",
      rating: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <input
        placeholder="Genre"
        value={form.genre}
        onChange={(e) => setForm({ ...form, genre: e.target.value })}
      />

      <input
        placeholder="Release Year"
        value={form.release_year}
        onChange={(e) =>
          setForm({ ...form, release_year: e.target.value })
        }
      />

      <input
        placeholder="Seasons"
        value={form.seasons}
        onChange={(e) => setForm({ ...form, seasons: e.target.value })}
      />

      <input
        placeholder="Rating"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: e.target.value })}
      />

      <button type="submit">Save Show</button>
    </form>
  );
}

export default ShowForm;