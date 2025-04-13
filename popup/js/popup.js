let counter = 0;

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button');
    const counterDisplay = document.getElementById('counter');

    // 저장된 값 불러오기
    chrome.storage.sync.get(['counter'], function(result) {
        counter = result.counter || 0;
        counterDisplay.textContent = formatNumber(counter);
    });

    // 클릭 시 카운터 증가 및 저장
    button.addEventListener('click', function () {
        counter++;
        chrome.storage.sync.set({ counter: counter }, function () {
            console.log('Counter saved:', counter);
        });
        counterDisplay.textContent = formatNumber(counter);
        playSound(); // 🔊 사운드 재생
    });
});

function formatNumber(num) {
    if (num >= 100_000_000) {
        return (num / 100_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
    } else if (num >= 1_000_000) {
        return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (num >= 1_000) {
        return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'k'; 
    } else {
        return num.toString();
    }
}

function playSound() {
    const audio = new Audio('sound/a.mp3');
    audio.play();
}

