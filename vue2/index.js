class Vue2 {
  constructor() {
    Object.defineProperty(this.data, "test", {
      get: () => {
        return "THIS IS TEST";
      },
      set: (v) => {
        return v;
      },
    });
    Object.defineProperty(this.data, "foo", {
      get: () => {
        return "this is test";
      },
      set: (v) => {
        console.log("set foo");
      },
    });
  }
  data = {};

  get bar() {
    return this.data.foo + this.data.test;
  }
  set bar(v) {
    return v;
  }
}

const V2 = new Vue2();
const output = document.getElementById("vue2-output");
const input = document.getElementById("vue2-input");
input.addEventListener("input", (e) => {
  V2.data.test = e.target.value;
  V2.data.foo = e.target.value.split("").reverse().join("");
});

const updateOutput = () => {
  const v = V2.bar;
  console.log("123", v);
  output.innerText = v;
};
