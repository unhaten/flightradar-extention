document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById("firstFilter");
    const button2 = document.getElementById("secondFilter");
    button1.addEventListener("click", () => {
        // if ((button1.textContent = "Select")) {
        //     button1.textContent = "Clear filter";
        //     button2.setAttribute("disabled", "");
        // }
        // if ((button1.textContent = "Clear filter")) {
        //     button1.textContent = "Select";
        //     button2.removeAttribute("disabled");
        // }
        button1.style.backgroundColor = "green";
        button2.style.backgroundColor = "white";
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { type: "first-filter" });
        });
    });
    button2.addEventListener("click", () => {
        // if ((button2.textContent = "Clear filter")) {
        //     button1.textContent = "Select";
        //     button2.textContent = "Select";
        // } else if ((button2.textContent = "Select")) {
        //     button1.textContent = "Clear filter";
        //     button2.textContent = "Clear filter";
        // }
        button1.style.backgroundColor = "white";
        button2.style.backgroundColor = "green";
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { type: "second-filter" });
        });
    });
});
