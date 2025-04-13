document.addEventListener('DOMContentLoaded', function () {
    const settingbtn = document.getElementById('settingbtn');

    settingbtn.addEventListener('click', function () {
        chrome.tabs.create({
            url: chrome.runtime.getURL("C:/Users/a0109/Desktop/setting.html") // 경로에 맞게 수정
        });
    });
});
