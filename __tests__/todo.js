/* eslint-disable no-undef */

const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
tod = new Date().toLocaleDateString("en-CA");
describe("Checking my todolist", () => {
  test("Test to checks creating a new todo", () => {
    expect(all.length).toBe(0);
    leng = all.length;
    add({
      title: "Clening",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(leng + 1);
  });
  test("Test to checks Marking a todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Test to checks retreival of all todos that are overdue", () => {
    let tlist = overdue();
    expect(
      tlist.every((todo) => {
        return todo.dueDate < tod;
      })
    ).toBe(true);
  });
  test("Test to checks retrieval of all todos that are dueToday", () => {
    let tlist = dueToday();
    expect(
      tlist.every((todo) => {
        return todo.dueDate === tod;
      })
    ).toBe(true);
  });
  test("Test to checks retrival of all todos that are dueLater", () => {
    let tlist = dueLater();
    expect(
      tlist.every((todo) => {
        return todo.dueDate > tod;
      })
    ).toBe(true);
  });
});
