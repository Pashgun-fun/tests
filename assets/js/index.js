import Events from "./Events.js";
import {elem} from "./elements.js";

const e = new Events(
    elem.mainButton,
    elem.questionAdd,
    elem.questionNext
);

e.initEvents();