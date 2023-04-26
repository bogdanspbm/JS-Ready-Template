import {DOM} from "../../elements/dom/DOM.js";
import {Button} from "../../elements/default/Button.js";
import {ping} from "../../utils/Requests.js";

export class MainPage extends DOM {
    createElement(args) {
        super.createElement(args);

        const header = new DOM()
            .setStyle("header")
            .setAttribute("padding-left", "20px")
            .setText("Template");

        this.append(header);

        const container = new DOM()
            .setStyle("container-horizontal")
            .setAttribute("height", "calc(100vh - 48px)");

        this.append(container);

        const toolbar = new DOM()
            .setAttribute("width", "300px")
            .setAttribute("background", "white")
            .setAttribute("height", "100%")
            .setAttribute("padding", "10px");

        container.append(toolbar);

        const button = new Button().setClickEvent(action => {
            const pingResp = ping("http://127.0.0.1:8080/");
            console.log(pingResp);
        })
            .setText("Ping Request")
            .setStyle("blue-button")
            .setAttribute("height", "42px")
            .setAttribute("width", "calc(100%)");

        toolbar.append(button);
    }
}