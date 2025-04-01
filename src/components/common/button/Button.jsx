import "./Button.css";

export default function Button({ link, text }) {
  return (
    <button onClick={() => (window.location.href = link)} className="btn">
      {text}
    </button>
  );
}
