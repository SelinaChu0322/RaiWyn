function toggleMobileMenu() {
    const panel = document.getElementById('mobileMenu');
    if (!panel) return;
    const willOpen = panel.classList.contains('translate-x-full');
    panel.classList.toggle('translate-x-full');

    // 關閉時，重置所有子選單為收起狀態
    if (!willOpen) {
        document.querySelectorAll('#mobileMenu [id$="-submenu"]').forEach(p => {
            p.style.maxHeight = '0px';
            const btn = document.querySelector('[aria-controls="' + p.id + '"]');
            if (btn) {
                btn.setAttribute('aria-expanded', 'false');
                const icon = btn.querySelector('[data-icon="chevron"]');
                if (icon) icon.style.transform = 'rotate(0deg)';
            }
        });
    }
}

function toggleMobileDropdown(element) {
    const dropdownId = element.getAttribute('aria-controls');
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) return;

    const isExpanded = element.getAttribute('aria-expanded') === 'true';
    element.setAttribute('aria-expanded', String(!isExpanded));

    if (isExpanded) {
        dropdown.style.maxHeight = '0px';
    } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
    }

    const icon = element.querySelector('[data-icon="chevron"]');
    if (icon) {
        icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
    }
}

// TOP 按鈕顯示/隱藏邏輯
document.addEventListener('DOMContentLoaded', function() {
    const topButton = document.getElementById('topButton');

    // 檢查按鈕是否存在
    if (!topButton) {
        console.warn('TOP button with id "topButton" not found.');
        return;
    }

    // 滾動事件監聽器
    window.addEventListener('scroll', function() {
        if (window.scrollY > 200) { // 當滾動超過 200px 時顯示按鈕
            topButton.classList.remove('opacity-0', 'invisible');
            topButton.classList.add('opacity-100', 'visible');
        } else {
            topButton.classList.remove('opacity-100', 'visible');
            topButton.classList.add('opacity-0', 'invisible');
        }
    });

    // 點擊按鈕滾動到頂部
    topButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 初始化時檢查滾動位置，確保頁面加載時按鈕狀態正確
    if (window.scrollY > 200) {
        topButton.classList.remove('opacity-0', 'invisible');
        topButton.classList.add('opacity-100', 'visible');
    } else {
        topButton.classList.remove('opacity-100', 'visible');
        topButton.classList.add('opacity-0', 'invisible');
    }
});

// 將函數暴露給全局 window 對象
window.toggleMobileMenu = toggleMobileMenu;
window.toggleMobileDropdown = toggleMobileDropdown;