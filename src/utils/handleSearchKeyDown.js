export default function HandleSearchKeyDown(value) {
  if (value.length === 42) window.location.href = `/address/${value}`;
  else if (value.length === 66) window.location.href = `/tx/${value}`;
  else if (value.length === 8) window.location.href = `/block/${value}`;
  else alert("Invalid Values");
}
