document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById("firstFilter");
    const button2 = document.getElementById("secondFilter");
    button1.addEventListener("click", () => {
        button1.style.backgroundColor = "green";
        button2.style.backgroundColor = "white";
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { type: "first-filter" });
        });
    });
    button2.addEventListener("click", () => {
        button1.style.backgroundColor = "white";
        button2.style.backgroundColor = "green";
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, { type: "second-filter" });
        });
    });
});
