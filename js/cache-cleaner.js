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

// 清除緩存功能已被移除
// 當頁面加載完成時不再添加按鈕
// document.addEventListener('DOMContentLoaded', addClearCacheButton);

// 確保不會有任何清除緩存按鈕被添加
function addClearCacheButton() {
    // 此函數已被禁用，不執行任何操作
    return;
}