import Validated from "./Validated.js";
import {test} from "./index.js";

export default class Text {
    constructor(block) {
        this.elem = document.querySelector(block).cloneNode(true);
        this._getTextField(".questions__body")
    }

    _delQuestion(event) {
        event
            .target
            .closest(".text-question")
            .remove()
    }

    _addQuestion(event) {
        const elem = event.target.closest('.text-question');
        const res = Validated.validFields(
            {length: 10, regex: null},
            ".valid-text",
            elem
        );
        if (!res) return event
            .target
            .closest('.text-question')
            .querySelector(".error-text")
            .innerHTML = "Введите корректные данные";

        event
            .target
            .closest('.text-question')
            .remove();

    }

    _initEvents(elem) {

        elem
            .querySelector(".remove-question")
            .addEventListener('click', this._delQuestion.bind(this));
        elem
            .querySelector(".add-question")
            .addEventListener('click', this._addQuestion.bind(this));

        return elem;

    }

    _getTextField(elem) {
        this.elem = this._initEvents(this.elem)
        document.querySelector(elem).append(this.elem);
    }
}