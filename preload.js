const { Titlebar } = require("custom-electron-titlebar");
const path = require("path");

window.addEventListener("DOMContentLoaded", () => {
  new Titlebar({
    backgroundColor: "#131722",
    icon: path.resolve("./icon.svg"),
    menu: null,
  });

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
