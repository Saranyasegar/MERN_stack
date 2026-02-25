function ShowCard({ show, onDelete, onEdit }) {
  return (
    <div className="card">
      <h3>{show.title}</h3>
      <p><strong>Genre:</strong> {show.genre}</p>
      <p><strong>Year:</strong> {show.release_year}</p>
      <p><strong>Seasons:</strong> {show.seasons}</p>
      <p><strong>Rating:</strong> ⭐ {show.rating}</p>

      <div className="btn-group">
        <button onClick={() => onEdit(show)}>Edit</button>
        <button onClick={() => onDelete(show.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ShowCard;