export default function ColorButton({ color, onClick }) {
  return (
    <button
      className="color-button"
      onClick={() => onClick(color)}
    >
      {color}
    </button>
  );
}
