import { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const submitFeedback = () => {
    if (name && product && rating) {
      setFeedbacks([
        ...feedbacks,
        { name, product, rating }
      ]);
      setName("");
      setProduct("");
      setRating("");
    }
  };

  return (
    <div className="page">
      <div className="feedback-wrapper">

        <div className="card">
          <h3> Product Feedback</h3>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select rating</option>
            <option>⭐</option>
            <option>⭐⭐</option>
            <option>⭐⭐⭐</option>
            <option>⭐⭐⭐⭐</option>
            <option>⭐⭐⭐⭐⭐</option>
          </select>

          <button onClick={submitFeedback}>
            Submit Feedback
          </button>
        </div>

        <div className="card">
          <h3> Live Feedback</h3>

          {feedbacks.length === 0 && (
            <p>No feedback submitted yet</p>
          )}

          {feedbacks.map((f, i) => (
            <div key={i} className="live-item">
              <p><b>Name:</b> {f.name}</p>
              <p><b>Product:</b> {f.product}</p>
              <p><b>Rating:</b> {f.rating}</p>
              <hr />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Feedback;
