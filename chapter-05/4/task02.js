function changeItemInCenter(arr, newItem) {
  const index = Math.floor((arr.length - 1) / 2);
  arr[index] = newItem;
}

let style = ["Джаз", "Блюз"];

style.push("Рок-н-ролл");

changeItemInCenter(style, "Классика");

let fisrtItem = style.shift();

style.unshift("Рэп", "Регги");
