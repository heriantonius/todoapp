const input = $("#input"),
  buttonadd = $("#add"),
  list = $("#lists"),
  buttonsort = $("#sort");

let todo = [];


buttonadd.click(add);

if (todo.length) {
  show();
}

function show() {
  list.html("");
  let content = "";
  for (let i = 0; i < todo.length; i++) {
    todo[i].date = new Date(todo[i].date);
    content += `<li>${todo[i].text} | ${todo[i].date}${todo[i].completed}</li>`;
    list.html(content);
  }
}
function add() {
  let val = input.val();
  todo.push({
    text: val,
    date: new Date(),
    completed: false,
  });
  show();
}
