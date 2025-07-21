export default function ColorButton({ color, onClick }) {
  return (
    <button
      className="color-button"
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
    >
      {color}
    </button>
  );
}
