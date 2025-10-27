/**
 * 📘 MODULE: domUtils.js
 * This module handles DOM-related helper functions.
 * Example Use: Creating elements, appending, and updating UI easily.
 */

export function createElement(tag, className = "", text = "") {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

export function clearContainer(container) {
  container.innerHTML = "";
}

export function appendChildren(parent, children) {
  children.forEach(child => parent.appendChild(child));
}
