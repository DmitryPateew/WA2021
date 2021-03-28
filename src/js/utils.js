import {wrapper, disabledClass} from "./constant";

export const createElement = (template, counter) => {
    const newElement = document.createElement(`div`);
    newElement.setAttribute(`id`, counter);
    newElement.innerHTML = template;
    return newElement;
};

export const saveElements = (items) => {
    localStorage.setItem(`elements`, JSON.stringify(Array.from(items.entries())));
}

export const getElements = () => {
    return new Map(JSON.parse(localStorage.getItem(`elements`)));
}

export const blockDeleteTags = () => {
    wrapper.querySelectorAll(`div`).forEach((el) => {
        el.classList.add(disabledClass);
    });
}

export const unBlockDeleteTags = () => {
    wrapper.querySelectorAll(`div`).forEach((el) => {
        el.classList.remove(disabledClass);
    });
}