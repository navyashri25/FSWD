import { useState } from "react";

function PollingSystem() {
  const [votes, setVotes] = useState({
    AI: 0,
    IoT: 0,
    Cloud: 0
  });

  const vote = (course) => {
    setVotes({ ...votes, [course]: votes[course] + 1 });
  };

  return (
    <div className="poll-container">
      <h1>Classroom Elective Poll</h1>
      <p className="subtitle">Vote for your preferred elective subject</p>

      <div className="card-grid">
        <div className="poll-card">
          <h3>AI / Machine Learning</h3>
          <button onClick={() => vote("AI")}>Vote</button>
          <p>Votes: {votes.AI}</p>
        </div>

        <div className="poll-card">
          <h3>Internet of Things (IoT)</h3>
          <button onClick={() => vote("IoT")}>Vote</button>
          <p>Votes: {votes.IoT}</p>
        </div>

        <div className="poll-card">
          <h3>Cloud Computing</h3>
          <button onClick={() => vote("Cloud")}>Vote</button>
          <p>Votes: {votes.Cloud}</p>
        </div>
      </div>
    </div>
  );
}

export default PollingSystem;
