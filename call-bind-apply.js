let obj = {
  name: "Pratik",
};

function display(one, two, three) {
  console.log(one, "--", two, "--", three);
  console.log(this.name);
}

display.call(obj, [1, 2], 3); // [1, 2] '--' 3 '--' undefined
display.apply(obj, [1, 2, 3]); // 1 '--' 2 '--' 3
display.bind(obj, [1, 2], 3)();//[1, 2] '--' 3 '--' undefined
