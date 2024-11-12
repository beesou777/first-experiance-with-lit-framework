import { LitElement, css, html } from "lit";

export class Card extends LitElement {
  static get properties() {
    return {
      cardData: { type: Array }
    };
  }

  constructor() {
    super();
    this.cardData = [
      {
        title: "Mastering SCSS: The Correct Way to ",
        description: "SCSS (Sassy CSS) is a powerful extension of CSS that adds features like variables, nesting, and mixins, making your stylesheets more maintainable and modular. In this blog post, we’ll dive into best practices for using SCSS effectively, including practical examples to illustrate these concepts.",
        author: "John Doe",
        link: "https://medium.com/@shahbishwa21/mastering-scss-the-correct-way-to-use-scss-in-your-projects-3a5cbc53e45b",
        imageUrl: "https://media.daily.dev/image/upload/s--dEEcOQqG--/f_auto/v1723609953/squads/043cdf8a-c0c4-4204-a94e-bfc3f561ad7c"
      },
      {
        title: "JavaScript Safe Assignment Operator (?=): A Complete Guide",
        description: "JavaScript is introducing a new operator, ?=, called the Safe Assignment Operator. This operator is designed to simplify error handling in your code, making it easier and more readable, especially when dealing with functions that might fail or throw errors.",
        author: "Bishwa Shah",
        link: "https://medium.com/@shahbishwa21/introduction-to-the-safe-assignment-operator-in-javascript-ddc35e87d37c",
        imageUrl: "https://media.daily.dev/image/upload/s--dEEcOQqG--/f_auto/v1723609953/squads/043cdf8a-c0c4-4204-a94e-bfc3f561ad7c"
      },
      {
        title: "Debugging JavaScript Like a Pro: Mastering the Different...",
        description: "As front end developers, we’re all too familiar with the long, arduous process of debugging our code. Whether we’re using the debugger or the console object, it’s a daily task that we simply can’t avoid. But here’s the thing: while most of us stick to the basic console.log()",
        author: "Kishor sir",
        link: "https://blackkspydo.com/blog/debugging-js-like-a-pro-console-log-edition",
        imageUrl: "https://media.daily.dev/image/upload/s--dEEcOQqG--/f_auto/v1723609953/squads/043cdf8a-c0c4-4204-a94e-bfc3f561ad7c"
      },
      {
        title: "JavaScript Safe Assignment Operator (?=): A Complete Guide",
        description: "JavaScript is introducing a new operator, ?=, called the Safe Assignment Operator. This operator is designed to simplify error handling in your code, making it easier and more readable, especially when dealing with functions that might fail or throw errors.",
        author: "Bishwa Shah",
        link: "https://medium.com/@shahbishwa21/introduction-to-the-safe-assignment-operator-in-javascript-ddc35e87d37c",
        imageUrl: "https://media.daily.dev/image/upload/s--dEEcOQqG--/f_auto/v1723609953/squads/043cdf8a-c0c4-4204-a94e-bfc3f561ad7c"
      },
      {
        title: "JavaScript Safe Assignment Operator (?=): A Complete Guide",
        description: "JavaScript is introducing a new operator, ?=, called the Safe Assignment Operator. This operator is designed to simplify error handling in your code, making it easier and more readable, especially when dealing with functions that might fail or throw errors.",
        author: "Bishwa Shah",
        link: "https://medium.com/@shahbishwa21/introduction-to-the-safe-assignment-operator-in-javascript-ddc35e87d37c",
        imageUrl: "https://media.daily.dev/image/upload/s--dEEcOQqG--/f_auto/v1723609953/squads/043cdf8a-c0c4-4204-a94e-bfc3f561ad7c"
      },
      {
        title: "JavaScript Safe Assignment Operator (?=): A Complete Guide",
        description: "JavaScript is introducing a new operator, ?=, called the Safe Assignment Operator. This operator is designed to simplify error handling in your code, making it easier and more readable, especially when dealing with functions that might fail or throw errors.",
        author: "Bishwa Shah",
        link: "https://medium.com/@shahbishwa21/introduction-to-the-safe-assignment-operator-in-javascript-ddc35e87d37c",
        imageUrl: "https://media.daily.dev/image/upload/s--dEEcOQqG--/f_auto/v1723609953/squads/043cdf8a-c0c4-4204-a94e-bfc3f561ad7c"
      },
      {
        title: "JavaScript Safe Assignment Operator (?=): A Complete Guide",
        description: "JavaScript is introducing a new operator, ?=, called the Safe Assignment Operator. This operator is designed to simplify error handling in your code, making it easier and more readable, especially when dealing with functions that might fail or throw errors.",
        author: "Bishwa Shah",
        link: "https://medium.com/@shahbishwa21/introduction-to-the-safe-assignment-operator-in-javascript-ddc35e87d37c",
        imageUrl: "https://media.daily.dev/image/upload/s--dEEcOQqG--/f_auto/v1723609953/squads/043cdf8a-c0c4-4204-a94e-bfc3f561ad7c"
      },
      {
        title: "JavaScript Safe Assignment Operator (?=): A Complete Guide",
        description: "JavaScript is introducing a new operator, ?=, called the Safe Assignment Operator. This operator is designed to simplify error handling in your code, making it easier and more readable, especially when dealing with functions that might fail or throw errors.",
        author: "Bishwa Shah",
        link: "https://medium.com/@shahbishwa21/introduction-to-the-safe-assignment-operator-in-javascript-ddc35e87d37c",
        imageUrl: "https://media.daily.dev/image/upload/s--dEEcOQqG--/f_auto/v1723609953/squads/043cdf8a-c0c4-4204-a94e-bfc3f561ad7c"
      },
      {
        title: "JavaScript Safe Assignment Operator (?=): A Complete Guide",
        description: "JavaScript is introducing a new operator, ?=, called the Safe Assignment Operator. This operator is designed to simplify error handling in your code, making it easier and more readable, especially when dealing with functions that might fail or throw errors.",
        author: "Bishwa Shah",
        link: "https://medium.com/@shahbishwa21/introduction-to-the-safe-assignment-operator-in-javascript-ddc35e87d37c",
        imageUrl: "https://media.daily.dev/image/upload/s--dEEcOQqG--/f_auto/v1723609953/squads/043cdf8a-c0c4-4204-a94e-bfc3f561ad7c"
      },
      {
        title: "JavaScript Safe Assignment Operator (?=): A Complete Guide",
        description: "JavaScript is introducing a new operator, ?=, called the Safe Assignment Operator. This operator is designed to simplify error handling in your code, making it easier and more readable, especially when dealing with functions that might fail or throw errors.",
        author: "Bishwa Shah",
        link: "https://medium.com/@shahbishwa21/introduction-to-the-safe-assignment-operator-in-javascript-ddc35e87d37c",
        imageUrl: "https://media.daily.dev/image/upload/s--dEEcOQqG--/f_auto/v1723609953/squads/043cdf8a-c0c4-4204-a94e-bfc3f561ad7c"
      }
    ];
  }

  render() {
    return html`
      <div class="card-wrapper">
        ${this.cardData.map(
          (item) => html`
            <div class="card">
              <img src="${item.imageUrl}" alt="${item.title}" />
              <h2>${item.title}</h2>
              <p>${item.description}</p>
              <p><strong>Author:</strong> ${item.author}</p>
              <a href="${item.link}" target="_blank">Read more</a>
            </div>
          `
        )}
      </div>
    `;
  }

  static get styles() {
    return css`
    .card-wrapper{
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap:8px;
        flex-wrap:wrap;
        font-family:arial;
        max-width:1450px;
        margin:auto;
    }
      .card {
        border: 1px solid #1e88e5;
        padding: 16px;
        width:100%;
        border-radius: 8px;
        margin-bottom: 16px;
        max-width: 300px;
      }
      img {
        width: 42px;
        height:42px;
        height: auto;
        border-radius: 50%;
      }
      h2 {
        font-size: 1.2rem;
        margin: 8px 0;
      }
      p {
        font-size: 0.9rem;
        margin: 4px 0;
      }
      a {
        color: #1e88e5;
        text-decoration: none;
      }
    `;
  }
}

customElements.define("dev-card", Card);
