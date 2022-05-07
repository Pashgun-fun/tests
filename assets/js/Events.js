import Radio from "./Radio.js";
import Text from "./Text.js";

export default class Events {

    constructor(mainButton, questionAdd, questionNext) {
        this.mainButton = mainButton;
        this.questionAdd = questionAdd;
        this.questionNext = questionNext;
    }

    _showModal() {
        document.querySelector(".create").style.display = "flex";
    }

    _showSmallModal() {
        document.querySelector(".questions__radio-create").style.display = " flex";
    }

    _hideModal() {
        document.querySelector(".create").style.display = "none";
    }

    _hideSmallModal() {
        document.querySelector(".questions__radio-create").style.display = " none";
    }

    _hideAllModal(e) {
        if (e.target.classList.contains("create")) this._hideModal();

        if (e.target.closest(".questions__add") == null ||
            e.target.classList.contains("questions__next")) this._hideSmallModal();
    }

    _drawQuestion() {
        const choose = document.querySelector('input[name="radio"]:checked')?.value;
        switch (choose) {
            case "text":
                const text = new Text(".text-question");
                // text.getTextField(".questions__body")
                break;
            case "radio":
                const radio = new Radio();
                break;
        }

    }


    initEvents() {
        this.mainButton.addEventListener('click', this._showModal);
        this.questionAdd.addEventListener('click', this._showSmallModal);
        this.questionNext.addEventListener('click', this._drawQuestion);
        document.addEventListener('click', this._hideAllModal.bind(this));
    }
}