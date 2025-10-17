// 語言切換功能
let currentLang = 'en';
const enBtn = document.getElementById('enBtn');
const viBtn = document.getElementById('viBtn');

function updateLanguageButtons() {
  enBtn.style.backgroundColor = currentLang === 'en' ? 'rgba(250, 204, 21, 0.2)' : 'transparent';
  viBtn.style.backgroundColor = currentLang === 'vi' ? 'rgba(250, 204, 21, 0.2)' : 'transparent';
}

function changeLanguage(lang) {
  currentLang = lang;
  updateLanguageButtons();
  
  if (lang === 'vi') {
    translateToVietnamese();
  } else {
    translateToEnglish();
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  updateLanguageButtons();
});

// TOP 按鈕功能
const topButton = document.getElementById('topButton');

// 監聽滾動事件
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    topButton.classList.remove('opacity-0', 'invisible');
    topButton.classList.add('opacity-100', 'visible');
  } else {
    topButton.classList.add('opacity-0', 'invisible');
    topButton.classList.remove('opacity-100', 'visible');
  }
});

// 點擊返回頂部
topButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});