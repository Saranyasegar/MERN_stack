import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ShowCard from "../components/ShowCard";
import ShowForm from "../components/ShowForm";

function Dashboard() {
  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    const res = await axios.get("http://localhost:4000/shows");
    setShows(res.data);
  };

  const saveShow = async (show) => {
    if (show.id) {
      await axios.put(`http://localhost:4000/shows/${show.id}`, show);
    } else {
      await axios.post("http://localhost:4000/shows", show);
    }

    fetchShows();
    setSelectedShow(null);
  };

  const deleteShow = async (id) => {
    await axios.delete(`http://localhost:4000/shows/${id}`);
    fetchShows();
  };

  const filteredShows = shows.filter((show) =>
    show.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />

      <div className="container">
        <input
          className="search"
          placeholder="Search shows..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <ShowForm selectedShow={selectedShow} saveShow={saveShow} />

        <div className="grid">
          {filteredShows.map((show) => (
            <ShowCard
              key={show.id}
              show={show}
              onDelete={deleteShow}
              onEdit={setSelectedShow}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;