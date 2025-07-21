import ColorButton from "./ColorButton";

export default function ColorPreview({ selectedColor }) {
  return (
    <div className="flex gap-5">
      {selectedColor ? (
        <>
          <span className="text1">Selected color:</span> <span className="color-preview">{selectedColor}</span>
        </>
      ) : (
        <span className="text1">No color selected</span>
      )}
    </div>
  );
}
