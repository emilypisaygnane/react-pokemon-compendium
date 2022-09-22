export default function Select({ types, setSelectedType, selectedType }) {

  return (
    <select value={ selectedType } onChange={(e) => setSelectedType(e.target.value)}>
      <option value="all"> all </option>
      {types.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    
  );
}
