import {LitElement, html, css} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

@customElement('user-card')
export class UserCard extends LitElement {
    static styles = css`
        :host {
            display: block;
            background: grey;
            border-radius: 8px;
            margin: 10px;
            min-width: 200px;
            border: 1px solid black;
        }
        .user-content {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-family: sans-serif;
            font-size: 14px;
            text-align: center;
        }

        .user-content img {
            border-radius: 50%;
            border: 4px solid black;
        }
        `;

    @property()
    email: string = 'helloworld@gmail.com';
    phone: string = '555-555-5555';
    avatar: string = 'https://randomuser.me/api/portraits/women/12.jpg';
    @property() buttonText = 'Hide Info';

    render() {
        return html `
            <div class="user-content">
                <img src="${this.avatar}"/>
                <slot name="name"></slot>
                <div class="info">
                    <h4>${this.email}</h4>
                    <h4>${this.phone}</h4>
                </div>
                <button @click=${this.toggleInfo}>${this.buttonText}</button>
            </div>
            `;
    }

    @query('.info')
    div!: HTMLElement;

    toggleInfo() {
        this.buttonText = this.buttonText === "Hide Info" ? "Show Info" : "Hide Info";
        this.div.style.display != 'none' ?  this.div.style.display = 'none' : this.div.style.display = 'block';
    }
}