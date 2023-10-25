import { useState } from "preact/hooks";

export default function ItemPicker() {
  const values = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    52,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
  ];
  const name = "sec";
  const [number, setNumber] = useState(0);

  return (
    <div class="flex flex-col text-center">
      <label htmlFor="number-select">{name}</label>
      <div>
        <select name="number" id="number-select">
          {values.map((value) => <option value={value}>{value}</option>)}
        </select>
      </div>
    </div>
  );
}
