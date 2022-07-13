import { LitElement, html, css } from "lit";
import { customElement, state, property, query } from "lit/decorators.js";

// This seems to look kinda like a React Interface, so i guess all it does it give a type to the element and define the properties it can have
type ToDoItem = {
  text: string;
  completed: boolean;
};

@customElement("simple-todo")
export class ToDoList extends LitElement {
  static styles = css`
    .completed {
      text-decoration-line: line-through;
      color: #777;
    }
  `;

  // This defines a private State property
  // This is our array of objects containing the ToDoList items
  @state()
  private _listItems = [
    { text: "Make to-do list", completed: true },
    { text: "Complete Lit tutorial", completed: false },
  ];

  // Checkbox Property
  @property({ type: Boolean })
  hideCompleted = false;

  // Rendering our HTML, we can use the usual JavaScripts methods, so we map the objects contained in the array
  render() {
    const items = this.hideCompleted
      ? this._listItems.filter((item) => !item.completed)
      : this._listItems;
    const todos = html`
      <ul>
        ${items.map(
          (item) =>
            html` <li
              class=${item.completed ? "completed" : ""}
              @click=${() => this.toggleCompleted(item)}
            >
              ${item.text}
            </li>`
        )}
      </ul>
    `;

    // Constants
    const caughtUpMessage = html` <p>You're all caught up!</p> `;
    const todosOrMessage = items.length > 0 ? todos : caughtUpMessage;

    return html`
      <h2>To Do</h2>
      ${todosOrMessage}
      <input id="newitem" aria-label="New item" />
      <button @click=${this.addToDo}>Add</button>
      <br />
      <label>
        <input
          type="checkbox"
          @change=${this.setHideCompleted}
          ?checked=${this.hideCompleted}
        />
        Hide completed
      </label>
    `;
  }

  // And here we have all of our usual logic
  toggleCompleted(item: ToDoItem) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  setHideCompleted(e: Event) {
    this.hideCompleted = (e.target as HTMLInputElement).checked;
  }

  // This decorator works just like a query selector, you give it a name and a type and you can call it just like a normal querySelector
  @query("#newitem")
  input!: HTMLInputElement;

  addToDo() {
    this._listItems = [
      ...this._listItems,
      { text: this.input.value, completed: false },
    ];
    this.input.value = "";
  }
}
