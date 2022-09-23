import '../controls/Select.css';

export default function Select({ types, setSelectedType, selectedType, setSearch }) {

  return (
    <div className='select'>Select Type
      <select className='selector' value={ selectedType } onChange={(e) => {
        setSelectedType(e.target.value);
        setSearch('');
      }}>
        <option value="all"> all </option>
        {types.map((opt) => (
          <option key={opt} value={opt}>
            {opt.toLowerCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
