export default class Validated {

    static validFields(setting, selector, elem) {

        for (let i = 0; i < elem.querySelectorAll(selector).length; i++) {

            if (elem.querySelectorAll(selector)[i].value.length < setting.length) return false;
        }
        return {
            name: elem.querySelector("input[name='name']")?.value,
            answer: elem.querySelector("input[name='answer']")?.value,
        };
    }
}