import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import App from "./App";

jest.mock("react-tsparticles", () => () => null);
jest.mock("typeit-react", () => () => null);

let container;

beforeEach(() => {
  window.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  window.matchMedia = jest.fn().mockImplementation(() => ({
    matches: true,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }));
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => { ReactDOM.render(<App />, container); });
});

afterEach(() => {
  act(() => { ReactDOM.unmountComponentAtNode(container); });
  container.remove();
});

test("section links resolve to unique targets", () => {
  const ids = Array.from(container.querySelectorAll("[id]")).map(el => el.id);
  expect(new Set(ids).size).toBe(ids.length);
  container.querySelectorAll('a[href^="#"]').forEach(link => {
    expect(document.getElementById(link.hash.slice(1))).not.toBeNull();
  });
  expect(container.querySelector("#skills-section")).not.toBeNull();
});

test("navigation moves focus, traps Tab, and restores focus on Escape", () => {
  const trigger = container.querySelector("#menuBtn");
  act(() => { Simulate.click(trigger); });
  expect(trigger.getAttribute("aria-expanded")).toBe("true");
  const drawer = container.querySelector("#mobileNavBody");
  const close = drawer.querySelector("button");
  const links = drawer.querySelectorAll("a");
  const last = links[links.length - 1];
  expect(document.activeElement).toBe(close);
  act(() => { document.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", shiftKey: true, bubbles: true, cancelable: true })); });
  expect(document.activeElement).toBe(last);
  act(() => { document.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", bubbles: true, cancelable: true })); });
  expect(document.activeElement).toBe(close);
  act(() => { document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })); });
  expect(container.querySelector("#mobileNavBody")).toBeNull();
  expect(document.activeElement).toBe(trigger);
  expect(document.body.classList.contains("overflow-hidden")).toBe(false);
});

test("selecting a mobile link closes the drawer", () => {
  act(() => { Simulate.click(container.querySelector("#menuBtn")); });
  act(() => { Simulate.click(container.querySelector('#mobileNavBody a[href="#skills-section"]')); });
  expect(container.querySelector("#mobileNavBody")).toBeNull();
});

test("skills have accessible names and reduced motion provides a static introduction", () => {
  const skills = container.querySelectorAll(".skill-button");
  expect(skills.length).toBe(24);
  skills.forEach(button => expect(button.getAttribute("aria-label")).toBeTruthy());
  expect(container.querySelector("h1").textContent).toContain("full stack developer");
  expect(container.querySelector("#tsparticles")).toBeNull();
});

test("the close button dismisses navigation", () => {
  act(() => { Simulate.click(container.querySelector("#menuBtn")); });
  act(() => { Simulate.click(container.querySelector('#mobileNavBody button')); });
  expect(container.querySelector("#mobileNavBody")).toBeNull();
});

test("resizing to desktop closes the mobile drawer and unlocks scrolling", () => {
  act(() => { Simulate.click(container.querySelector("#menuBtn")); });
  const previousWidth = window.innerWidth;
  window.innerWidth = 1280;
  act(() => { window.dispatchEvent(new Event("resize")); });
  expect(container.querySelector("#mobileNavBody")).toBeNull();
  expect(document.body.classList.contains("overflow-hidden")).toBe(false);
  window.innerWidth = previousWidth;
});
