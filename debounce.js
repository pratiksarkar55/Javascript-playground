const inputHandler = debounce();

function debounce() {
  let timer;
  return function (event) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      console.log("network call with " + event.target.value);
    }, 3000);
  };
}
