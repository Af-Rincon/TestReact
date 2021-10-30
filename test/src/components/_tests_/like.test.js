import Like from "../like";
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like/>,
      container
    );
  });
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });


describe("like", function()
{
    it("likes equal 0 by default", () => {
        const p = container.querySelector("p");
        expect(p.textContent).toBe("Likes: 0");
      });
    it("increments likes", ()=>{
        const p = container.querySelector("p");
        const plus = document.getElementById("increment");
        act(() => {
            plus.dispatchEvent(new MouseEvent('click', {bubbles: true}))
          });
        expect(p.textContent).toBe("Likes: 1");
    })
    it("decrease likes", ()=>{
        const p = container.querySelector("p");
        const sub = document.getElementById("decrement");
        act(() => {
            sub.dispatchEvent(new MouseEvent('click', {bubbles: true}))
          });
        expect(p.textContent).toBe("Likes: -1");
    })

});