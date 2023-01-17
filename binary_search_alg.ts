//the tripple sum function
const data = (a: number) => {
  return function (b: number) {
    return function (c: number) {
      return a + b + c;
    };
  };
};
console.log("result :", data(30)(40)(70));
