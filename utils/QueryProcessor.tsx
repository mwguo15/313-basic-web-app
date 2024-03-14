export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "mwguo"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "bingerdooger"
    );
  }

  if (query.includes("Which of the following numbers is the largest: ")) {
    let numbers = query.match(/[0-9]+/g);
    let arr = numbers!;
    const mapped = arr.map((x) => parseInt(x));
    const max = Math.max(...mapped);
    return max.toString();
  }

  if (query.includes("plus")) {
    let numbers = query.match(/[0-9]+/g);
    let arr = numbers!;
    let sum = arr[0] + arr[1];
    return sum.toString();
  }

  if (query.includes("square and a cube")) {
    let numbers = query.match(/[0-9]+/g);
    let arr = numbers!;
    var isSquare = function (n : string) {
      let number = Number(n);
      return number > 0 && Math.sqrt(number) % 1 === 0;
    };
    var isCbrt = function (n : string) {
      let number = Number(n);
      return number > 0 && Math.cbrt(number) % 1 === 0;
    };
    const filtered = arr.filter((number) => isCbrt (number) && isSquare (number))
    return filtered.toString();
  }

  return "";
}
