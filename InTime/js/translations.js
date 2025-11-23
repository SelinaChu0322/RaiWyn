// 翻譯對象字典
const translations = {
  vi: {
    // --- 通用/導航 (若未來需要翻譯可保留，目前被 no-translate 屏蔽) ---
    'Home': 'Trang Chủ',
    'About Us': 'Về Chúng Tôi',
    'Solutions': 'Giải Pháp',
    'Showcase': 'Trưng Bày',
    'Pricing': 'Báo Giá',

    // --- About Us 頁面 ---
    'About InTime': 'Về InTime',
    'Founded in 2024, InTime specializes in AI, IoT, and smart lock technologies, offering integrated solutions that combine software, hardware, and cloud systems. Our team of experts delivers reliable and innovative designs from firmware and communication protocols to product integration and user experience.': 
    'Được thành lập vào năm 2024, InTime chuyên về công nghệ AI, IoT và khóa thông minh, cung cấp các giải pháp tích hợp kết hợp phần mềm, phần cứng và hệ thống đám mây. Đội ngũ chuyên gia của chúng tôi mang đến những thiết kế đáng tin cậy và sáng tạo từ phần sụn và giao thức truyền thông đến tích hợp sản phẩm và trải nghiệm người dùng.',
    
    'We focus on developing intelligent smart lock systems and connected platforms that enhance convenience, safety, and efficiency. Partnering with industry leaders, InTime continues to create competitive, data-driven solutions that support automation and digital transformation for a smarter future.':
    'Chúng tôi tập trung phát triển các hệ thống khóa thông minh và nền tảng kết nối giúp nâng cao sự tiện lợi, an toàn và hiệu quả. Hợp tác với các nhà lãnh đạo ngành, InTime tiếp tục tạo ra các giải pháp cạnh tranh, dựa trên dữ liệu nhằm hỗ trợ tự động hóa và chuyển đổi kỹ thuật số cho một tương lai thông minh hơn.',
    
    'InTime Company Event': 'Sự Kiện Công Ty InTime',
    'Company Event': 'Sự Kiện Công Ty',
    'Contact Us': 'Liên Hệ Với Chúng Tôi',
    'phone_number': '+84 978469953',
    'email_address': 'richard.l.c.yang@gmail.com',

    // --- Pricing AI 頁面 ---
    'AI Chatbot Pricing Plans': 'Gói Giá AI Chatbot',
    'Choose the plan that best suits your business needs and instantly unlock omnichannel AI chatbot capabilities.':
    'Chọn gói phù hợp nhất với nhu cầu doanh nghiệp của bạn và kích hoạt ngay khả năng chatbot AI đa kênh.',
    
    // Plans - Basic
    'Basic': 'Cơ Bản',
    'Ideal for small business launch': 'Lý tưởng cho doanh nghiệp nhỏ khởi nghiệp',
    ' VND / month': ' VNĐ / tháng',
    'Key Features': 'Tính Năng Chính',
    'Supports LINE / FB / IG': 'Hỗ trợ LINE / FB / IG',
    '1,000 message replies per month': '1.000 phản hồi tin nhắn mỗi tháng',
    'Includes Zalo': 'Bao gồm Zalo',
    'Platform/Data Limits': 'Giới Hạn Nền Tảng/Dữ Liệu',
    'Platform Parameters:': 'Tham số Nền tảng:',
    'Response Settings:': 'Thiết lập Phản hồi:',
    'Data Sources:': 'Nguồn Dữ liệu:',
    'Total Local File Size:': 'Tổng dung lượng tệp cục bộ:',
    'Single Local File Upload:': 'Tải lên tệp cục bộ đơn lẻ:',
    '1 platform parameter': '1 tham số nền tảng',
    '1 response setting': '1 thiết lập phản hồi',
    '1 data source': '1 nguồn dữ liệu',
    '2MB': '2MB',
    
    // Plans - Advanced
    'Advanced': 'Nâng Cao',
    'Suitable for growing small to medium businesses': 'Phù hợp cho doanh nghiệp vừa và nhỏ đang phát triển',
    'Includes all Basic features': 'Bao gồm tất cả tính năng Cơ Bản',
    'Data source support: Google Drive': 'Hỗ trợ nguồn dữ liệu: Google Drive',
    'Database integration': 'Tích hợp cơ sở dữ liệu',
    '5 platform parameters': '5 tham số nền tảng',
    '15 response settings': '15 thiết lập phản hồi',
    '5 data sources': '5 nguồn dữ liệu',
    '10MB': '10MB',

    // Plans - Premium
    'Premium': 'Cao Cấp',
    'Most Popular': 'Phổ Biến Nhất',
    'Designed for businesses requiring advanced integration': 'Thiết kế cho doanh nghiệp cần tích hợp nâng cao',
    'Includes all Advanced features': 'Bao gồm tất cả tính năng Nâng Cao',
    'Supports API / WebChat / Teams / Zalo': 'Hỗ trợ API / WebChat / Teams / Zalo',
    'Data source support: API / AI Database / Data extraction': 'Hỗ trợ nguồn dữ liệu: API / CSDL AI / Trích xuất dữ liệu',
    'Unlimited monthly conversations': 'Không giới hạn hội thoại hàng tháng',
    '15 platform parameters': '15 tham số nền tảng',
    '100 response settings': '100 thiết lập phản hồi',
    '30 data sources': '30 nguồn dữ liệu',
    '50MB': '50MB',

    // Plans - Enterprise
    'Enterprise Custom': 'Doanh Nghiệp Tùy Chỉnh',
    'Tailored solutions for large enterprises': 'Giải pháp tùy chỉnh cho doanh nghiệp lớn',
    'Custom': 'Tùy chỉnh',
    ' / quote': ' / báo giá',
    'Includes all Premium features': 'Bao gồm tất cả tính năng Cao Cấp',
    'Custom Logo & Domain': 'Logo & Tên miền tùy chỉnh',
    'API / SDK integration': 'Tích hợp API / SDK',
    'Private cloud deployment': 'Triển khai đám mây riêng',
    'Internal knowledge document integration': 'Tích hợp tài liệu kiến thức nội bộ',
    'Model fine-tuning & Customer success consultant': 'Tinh chỉnh mô hình & Tư vấn thành công khách hàng',
    'Supports Home Assistant integration': 'Hỗ trợ tích hợp Home Assistant',
    'Unlimited': 'Không giới hạn',

    // Buttons
    'Order Now': 'Đặt Hàng Ngay',
    'Contact Sales': 'Liên Hệ Kinh Doanh',
    'TOP': 'LÊN', // TOP 即使在 Footer 外也可以翻譯

    // --- Index / IoT 頁面 (新增) ---
    'From sensing to decision-making': 'Từ cảm nhận đến ra quyết định',
    'brings the future into the now.': 'đưa tương lai đến ngay hiện tại.',
    'Lightweight Transformation, Smart Upgrades': 'Chuyển đổi tinh gọn, nâng cấp thông minh',
    'Customized IoT integration service requiring no changes to existing operations or equipment replacement. Rapidly connect devices to the cloud for real-time monitoring and operational efficiency optimization.': 
    'Dịch vụ tích hợp IoT tùy chỉnh không yêu cầu thay đổi quy trình hiện có hoặc thay thế thiết bị. Kết nối thiết bị lên đám mây nhanh chóng để giám sát theo thời gian thực và tối ưu hóa hiệu quả vận hành.',
    'Enterprise AI Integration, Smarter Decisions Ahead': 'Tích hợp AI cho doanh nghiệp, ra quyết định thông minh hơn',
    'An all-in-one LLM platform that integrates social media and cross-platform data, leveraging AI for automated processing, analysis, and visualization to drive intelligent, data-driven decision-making.':
    'Nền tảng LLM tất cả trong một tích hợp dữ liệu mạng xã hội và đa nền tảng, tận dụng AI để tự động xử lý, phân tích và trực quan hóa nhằm thúc đẩy các quyết định thông minh dựa trên dữ liệu.'
  }
};

// 保存原始英文文本的 Map (避免重複切換導致丟失原文)
const originalTextMap = new WeakMap();

/**
 * 替換元素內的文本節點
 * @param {HTMLElement} element - 目標元素
 * @param {Object} dict - 翻譯字典
 */
function replaceTextNodes(element, dict) {
  // 關鍵修改：檢查元素本身及其祖先是否包含 'no-translate' 類別
  // 如果包含，則直接返回，不進行翻譯 (滿足導覽欄和頁尾不翻譯的需求)
  if (element.closest('.no-translate')) {
    return;
  }

  const i18nKey = element.getAttribute('data-i18n');
  
  // 情況 1: 有 data-i18n 屬性
  if (i18nKey && dict[i18nKey]) {
    if (!originalTextMap.has(element)) {
      originalTextMap.set(element, element.innerHTML); // 保存原始 HTML
    }
    element.innerHTML = dict[i18nKey];
    return;
  }

  // 情況 2: 無 data-i18n，遍歷子節點替換純文本
  element.childNodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const original = node.textContent;
      const trimmed = original.trim();
      
      // 跳過空文本
      if (!trimmed) return;

      if (!originalTextMap.has(node)) {
        originalTextMap.set(node, original);
      }

      if (dict[trimmed]) {
        // 保留前後空白
        const leading = original.match(/^\s*/)?.[0] ?? '';
        const trailing = original.match(/\s*$/)?.[0] ?? '';
        node.textContent = leading + dict[trimmed] + trailing;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // 遞歸處理子元素
      replaceTextNodes(node, dict);
    }
  });
}

/**
 * 切換到越南文
 */
window.translateToVietnamese = function() {
  const dict = translations.vi;
  // 選擇所有可能包含文字的元素，排除圖標
  const elements = document.querySelectorAll(
    '[data-i18n], h1, h2, h3, h4, p, li, span:not(.material-symbols-outlined), div.plan-button, a.plan-button'
  );
  
  elements.forEach(el => replaceTextNodes(el, dict));
};

/**
 * 切換到英文 (還原)
 */
window.translateToEnglish = function() {
  const elements = document.querySelectorAll(
    '[data-i18n], h1, h2, h3, h4, p, li, span:not(.material-symbols-outlined), div.plan-button, a.plan-button'
  );

  elements.forEach(el => {
    // 如果有保存的原文，則還原
    if (originalTextMap.has(el)) {
      el.innerHTML = originalTextMap.get(el);
    } else {
      // 檢查子文本節點
      el.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && originalTextMap.has(node)) {
          node.textContent = originalTextMap.get(node);
        }
      });
    }
  });
};

/**
 * 更新語言按鈕樣式 (透明黃色底)
 * @param {string} activeLang - 'en' or 'vi'
 */
function updateLanguageButtonStyles(activeLang) {
  const enBtn = document.getElementById('enBtn');
  const viBtn = document.getElementById('viBtn');
  
  // 透明黃色底: rgba(250, 204, 21, 0.2)
  const activeStyle = 'rgba(250, 204, 21, 0.2)';
  const inactiveStyle = 'transparent';

  if (enBtn) {
    enBtn.style.backgroundColor = activeLang === 'en' ? activeStyle : inactiveStyle;
  }
  if (viBtn) {
    viBtn.style.backgroundColor = activeLang === 'vi' ? activeStyle : inactiveStyle;
  }
}

/**
 * 全局語言切換函數
 * @param {string} lang - 'en' or 'vi'
 */
window.changeLanguage = function(lang) {
  // 1. 更新按鈕樣式
  updateLanguageButtonStyles(lang);

  // 2. 保存設置 (可選)
  try { localStorage.setItem('lang', lang); } catch (e) {}

  // 3. 執行翻譯邏輯
  if (lang === 'vi') {
    window.translateToVietnamese();
  } else {
    window.translateToEnglish();
  }
};