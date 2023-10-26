export default function ItemPicker(values) {
  const timeName = values.name;
  const timeNumbers = Object.values(values.values);
  return (
    <div class="flex flex-col items-center p-2">
      <label htmlFor="number-select">{timeName}</label>
      <div>
        <select
          name="number"
          id="number-select"
          onChange={values.handleSetProps}
        >
          {timeNumbers.map((value) => <option value={value}>{value}</option>)}
        </select>
      </div>
    </div>
  );
}
