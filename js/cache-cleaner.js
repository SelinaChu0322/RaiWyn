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

// 不再自動清除緩存，避免頁面不斷刷新
// document.addEventListener('DOMContentLoaded', function() {
//     clearBrowserCache();
// });

// 添加清除緩存按鈕的功能（如需手動清除緩存）
function addClearCacheButton() {
    const button = document.createElement('button');
    button.textContent = '清除緩存';
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.right = '10px';
    button.style.zIndex = '9999';
    button.style.padding = '8px 12px';
    button.style.backgroundColor = '#333';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.onclick = clearBrowserCache;
    document.body.appendChild(button);
}