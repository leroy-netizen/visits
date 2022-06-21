// alert("sijakula siku tatu");
// Fetch data function

const fetchData = async () => {
  const response = await fetch(
    "https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0"
  );
  const data = await response.json();
  console.log(data);
};

// fetch("https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log(data);
fetchData();
