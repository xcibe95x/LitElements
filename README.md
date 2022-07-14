# Lit Elements

First thing first, this repo is a follow up, of my precedent repo: https://github.com/xcibe95x/WebComponents
After learning about Web Components, i moved in learning Lit, which does the same thing, but better.
For this repo, i have generated a template, which you can find in the branch template if you want a clean one, in this template i'm using TypeScript and when you run <b>npm run start</b> it will trasnpile it to JavaScript and run a Web Server.

## What is Lit?

Lit is a simple library for building fast, lightweight web components.
At Lit's core is a boilerplate-killing component base class that provides reactive state, scoped styles, and a declarative template system that's tiny, fast and expressive.

You can experiment and learn more with Lit Playground
https://lit.dev/playground/

## What can i build with Lit?

Any kind of web UI, you can build many different web components that looks amazing ad work fas.

## What are Web Components?

Set of web platform API's that allow us to create custom reusable and encapsulated html tags to use in web pages and web apps
Web components do not require any special 3rd party libraries or frameworks (React, Angular, etc) but can certainly be used with them.

## What can i find in this repo?

In this project, you will find all the Web Components i made from the tutorials on the docs with comments on them and the Web Component i made in the JavaScript repo ported in Lit, as well as other custom components i'm going to make to learn.

## Getting Started

In this repo, as i said, we are using TypeScript, so every example is in TypeScript.
When you first initialize a TypeScript file you need to import Lit like this:

```ts
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
```

Inside this for example, i imported html only, but you can also import <b>css</b> from Lit, we also have many more decorators other than <b>@customElement("my-element")</b> so you can also import <b>Query</b> which is the equivalent of a querySelector in JavaScript

You first very basic Web Component structure will finally look like this:

```ts
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  @property()
  version = "STARTING";

  render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
    `;
  }
}
```

As we have seen in the JavaScript repo, you can call your component the same way in the html by using your new custom tag, that we defined in our @customElement decorator.

```html
<my-element></my-element>
```

You should also have to import the transpiled JavaScript as i module in the html, in this repo i made a single file for importing all of them, so you can just import one .tsx file like this:

```html
<script type="module" src="./out-tsc/src/index.js"></script>
```

# Sources

https://lit.dev/docs/
