// 清除瀏覽器緩存的功能
function clearBrowserCache() {
    // 清除localStorage
    localStorage.clear();

    // 清除sessionStorage
    sessionStorage.clear();

    // 清除cookies
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }

    // 如果瀏覽器支持caches API，清除cache storage
    if ('caches' in window) {
        caches.keys().then(function(names) {
            for (let name of names) {
                caches.delete(name);
            }
        });
    }

    // 重新加載頁面以應用更改
    window.location.reload(true);
}

// 添加清除緩存按鈕的功能
function addClearCacheButton() {
    const button = document.createElement('button');
    button.textContent = '清除緩存';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 20px;
        background: linear-gradient(45deg, #0088ff, #00ff88);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;

    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });

    button.addEventListener('click', clearBrowserCache);
    document.body.appendChild(button);
}

// 當頁面加載完成時添加按鈕
document.addEventListener('DOMContentLoaded', addClearCacheButton);