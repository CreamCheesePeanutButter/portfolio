import "./background.scss";

export default function App() {
  return (
    <div className="bubbles">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="bubble"></div>
      ))}
    </div>
  );
}
