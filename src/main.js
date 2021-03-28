import {
    inputField,
    addButton,
    wrapper,
    counter,
    counterStartValue,
    readOnlyButton,
    clear,
    click,
    emptyInput
} from "./js/constant";
import {createElement, saveElements, getElements, blockDeleteTags, unBlockDeleteTags} from "./js/utils";


let elements = new Map();
let read = true;

const removeElement = (evt) => {
    if (read && evt.target.id) {
        evt.preventDefault();
        wrapper.querySelector(`#${CSS.escape(evt.target.id)}`).remove();
        elements.delete(Number(evt.target.id));
        saveElements(elements);
    }
}

wrapper.addEventListener(click, removeElement)


const createTag = (value, key) => {
    wrapper.append(createElement(value, key));
}

getElements().forEach((value, key) => {
    createTag(value, key);
    elements.set(key, value);
});


if (!localStorage.getItem(counter)) {
    localStorage.setItem(counter, counterStartValue);
}

addButton.addEventListener(click, () => {
    let counterValue = Number(localStorage.getItem(counter));
    let normalValue = inputField.value.trim();
    if (normalValue) {
        createTag(normalValue, counterValue);
        saveElements(elements.set(counterValue, normalValue));
        counterValue++;
        localStorage.setItem(counter, counterValue.toString());
        inputField.value = emptyInput;
    }
})


readOnlyButton.addEventListener(click, () => {
    addButton.disabled = addButton.disabled !== true;
    clear.disabled = clear.disabled !== true;
    read = !read;
    read ? unBlockDeleteTags() : blockDeleteTags();
})

clear.addEventListener(click, () => {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
    inputField.value = emptyInput;
    localStorage.clear();
});