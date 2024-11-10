export function flagemojiToPNG(flag) {
  const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");
  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
}

// export function flagemojiToPNG(flag) {
//   const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
//     .map((char) => String.fromCharCode(char - 127397).toLowerCase())
//     .join("");

//   const img = document.createElement("img");
//   img.src = `https://flagcdn.com/24x18/${countryCode}.png`;
//   img.alt = "flag";
//   return img;
// }

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
