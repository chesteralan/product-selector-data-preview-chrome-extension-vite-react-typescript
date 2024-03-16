chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id as number },
    files: ["content-script/main.js"],
  });
});
