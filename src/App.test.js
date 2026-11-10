import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import App from "./App";

jest.mock("react-tsparticles", () => () => null);
jest.mock("typeit-react", () => () => null);

let container;
const initialWidth = window.innerWidth;

beforeEach(() => {
  window.innerWidth = 390;
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
  window.innerWidth = initialWidth;
  document.body.classList.remove("overflow-hidden");
});

test("section links resolve to unique targets", () => {
  const ids = Array.from(container.querySelectorAll("[id]")).map(el => el.id);
  expect(new Set(ids).size).toBe(ids.length);
  container.querySelectorAll('a[href^="#"]').forEach(link => {
    expect(document.getElementById(link.hash.slice(1))).not.toBeNull();
  });
  expect(container.querySelector("#skills-section")).not.toBeNull();
  expect(container.querySelector('a[href="#main-content"]')).not.toBeNull();
  expect(container.querySelector("main").getAttribute("tabindex")).toBe("-1");
});

test("both menus link to the visible sections and omit the archived projects", () => {
  const desktopLinks = Array.from(container.querySelectorAll('#navbar a[href^="#"]'))
    .map(link => link.getAttribute("href"));
  act(() => { Simulate.click(container.querySelector("#menuBtn")); });
  const mobileLinks = Array.from(container.querySelectorAll('#mobileNavBody a[href^="#"]'))
    .map(link => link.getAttribute("href"));
  expect(mobileLinks).toEqual(desktopLinks);
  expect(desktopLinks).not.toContain("#projects");
  expect(container.querySelector("#projects")).toBeNull();
  mobileLinks.forEach(href => expect(container.querySelector(href)).not.toBeNull());
});

test("navigation moves focus, traps Tab, and restores focus on Escape", () => {
  const trigger = container.querySelector("#menuBtn");
  act(() => { Simulate.click(trigger); });
  expect(trigger.getAttribute("aria-expanded")).toBe("true");
  expect(container.querySelector("main").hasAttribute("inert")).toBe(true);
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
  expect(container.querySelector("main").hasAttribute("inert")).toBe(false);
});

test("closing the menu preserves pre-existing scroll and focus restrictions", () => {
  const main = container.querySelector("main");
  document.body.classList.add("overflow-hidden");
  main.setAttribute("inert", "");
  act(() => { Simulate.click(container.querySelector("#menuBtn")); });
  act(() => { Simulate.click(container.querySelector('#mobileNavBody button')); });
  expect(document.body.classList.contains("overflow-hidden")).toBe(true);
  expect(main.hasAttribute("inert")).toBe(true);
});

test("the backdrop and external profile links dismiss the mobile menu", () => {
  const open = () => act(() => { Simulate.click(container.querySelector("#menuBtn")); });
  open();
  act(() => { Simulate.click(container.querySelector("#navOverlay")); });
  expect(container.querySelector("#mobileNavBody")).toBeNull();
  open();
  act(() => { Simulate.click(container.querySelector('#mobileNavBody a[href="https://github.com/vanderwooodsen"]')); });
  expect(container.querySelector("#mobileNavBody")).toBeNull();
  expect(document.body.classList.contains("overflow-hidden")).toBe(false);
});

test("selecting a mobile link closes the drawer", () => {
  act(() => { Simulate.click(container.querySelector("#menuBtn")); });
  act(() => { Simulate.click(container.querySelector('#mobileNavBody a[href="#skills-section"]')); });
  expect(container.querySelector("#mobileNavBody")).toBeNull();
});

test("skills have accessible names and reduced motion provides a static introduction", () => {
  const skills = container.querySelectorAll(".skill-button");
  expect(skills.length).toBe(27);
  skills.forEach(button => expect(button.getAttribute("aria-label")).toBeTruthy());
  expect(container.querySelector("h1").textContent).toContain("full stack developer");
  expect(container.querySelector("#tsparticles")).toBeNull();
});

test("technology filters show the selected area and All restores the full toolkit", () => {
  const filters = container.querySelector('[aria-label="Filter technologies"]');
  const selectFilter = (label) => {
    const button = Array.from(filters.querySelectorAll("button"))
      .find(candidate => candidate.textContent === label);
    act(() => { Simulate.click(button); });
    expect(button.getAttribute("aria-pressed")).toBe("true");
    expect(filters.querySelectorAll('[aria-pressed="true"]').length).toBe(1);
  };

  selectFilter("Frontend");
  expect(container.querySelector('.skill-button[aria-label="React"]')).not.toBeNull();
  expect(container.querySelector('.skill-button[aria-label="PostgreSQL"]')).toBeNull();

  selectFilter("Backend");
  expect(container.querySelector('.skill-button[aria-label="PostgreSQL"]')).not.toBeNull();
  expect(container.querySelector('.skill-button[aria-label="React"]')).toBeNull();

  selectFilter("Tools");
  expect(container.querySelector('.skill-button[aria-label="GitHub"]')).not.toBeNull();
  expect(container.querySelector('.skill-button[aria-label="Cucumber — automation testing"]')).not.toBeNull();
  expect(container.querySelector('.skill-button[aria-label="PostgreSQL"]')).toBeNull();

  selectFilter("All");
  expect(container.querySelectorAll(".skill-button").length).toBe(27);
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
  expect(container.querySelector("main").hasAttribute("inert")).toBe(false);
  expect(document.activeElement).toBe(container.querySelector('#navbar a[href="#animation"]'));
  window.innerWidth = previousWidth;
});
