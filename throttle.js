const inputHandler = throttle();

function throttle() {
  let active = true;
  return (event) => {
    if (active) {
      setTimeout(function () {
        console.log("network call with " + event.target.value);
        active = true;
      }, 3000);
      active = false;
    }
  };
}
