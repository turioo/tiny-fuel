const arr = [
  {
    id: 1,
    type: "kanistra",
  },
  {
    id: 2,
    type: "kanistra",
  },
  {
    id: 3,
    type: "kanistra",
  },
  {
    id: 4,
    type: "coffee",
  },
  {
    id: 5,
    type: "coffee",
  },
  {
    id: 6,
    type: "coffee",
  },
  {
    id: 7,
    type: "hotdog",
  },
  {
    id: 8,
    type: "hotdog",
  },
  {
    id: 9,
    type: "hotdog",
  },
];

function shuffle(arr) {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

export default shuffle(arr);
