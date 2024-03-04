function switchTab(tabNumber) {
  let listOfElements = document.querySelectorAll(".tab-content");
  console.log(listOfElements);
  listOfElements.forEach(function (tab) {
    if (tab.id === "tab" + tabNumber) {
      tab.classList.remove("inactive");
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
      tab.classList.add("inactive");
    }
  });
}
