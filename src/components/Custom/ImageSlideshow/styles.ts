import { css } from "lit";

export const styles = css`
  :host {
    display: inline-block;
    overflow: hidden;
    width: 100%;
    height: 350px;
    border-radius: 8px;
    position: relative;
  }

  ::slotted(*) {
    object-fit: cover;
    box-sizing: border-box;
    height: 350px;
    width: 100%;
    box-shadow: 1px 6px 6px 1px rgba(29, 30, 32, 0.2);
  }

  .slideshow-prev,
  .slideshow-next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }

  .slideshow-next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  .slideshow-prev:hover,
  .slideshow-next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;
