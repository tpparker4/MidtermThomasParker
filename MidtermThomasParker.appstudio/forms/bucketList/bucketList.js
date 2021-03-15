
let list = ["Skydiving", "Owning a Ferrari"]

let n = 1

let userNumber = prompt("Hello, how many items would you like to add to your bucket list?")

while(n <= userNumber) {
  add = prompt("What shall we put on today?");
  list.push(add)
  n++;
}

var i = 0;

for (;list[i];) {
  console.log(list[i])
  i++;
}

alert(`Your bucket list has the following ${list}`)