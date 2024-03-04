async function dataFetch(value) {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  ).then((res) => res.json());
  return data;
}
