export default function Card({ children }) {
  return (
    <div className="card">
      <h1 className="text2">Color Palette Picker</h1>
      {children}
    </div>
  );
}