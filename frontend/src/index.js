import {App} from "./app/App.js";
import {MainPage} from "./pages/main/MainPage.js";

document.app = new App();
document.app.drawElement(new MainPage());