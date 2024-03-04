const input = document.getElementById("input-id");
const listContainer = document.getElementById("list-container");
function debounce() {
  let timer;
  return function (event) {
    clearTimeout(timer);
    timer = setTimeout(async function () {
      const data = await dataFetch(event.target.value);
      console.log(data);
      data.forEach((obj) => {
        const li = document.createElement("li");
        li.innerHTML = obj.title;
        listContainer.appendChild(li);
      });
    }, 2000);
  };
}
function throttle() {
  let called = true;
  return function (event) {
    if (called) {
      setTimeout(async function () {
        const data = await dataFetch(event.target.value);
        console.log(data);
        data.forEach((obj) => {
          const li = document.createElement("li");
          li.innerHTML = obj.title;
          listContainer.appendChild(li);
        });
        called = true;
      }, 2000);
      called = false;
    }
  };
}
let handleChange = throttle();
