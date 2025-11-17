// 翻譯對象
const translations = {
  vi: {
    // 主要內容
    'Revolutionize Customer Engagement with AI Chatbots': 'Cách Mạng Hóa Tương Tác Khách Hàng với Chatbot AI',
    'Our AI-powered chatbots provide seamless, personalized customer experiences, driving satisfaction and efficiency.': 'Chatbot AI của chúng tôi cung cấp trải nghiệm khách hàng liền mạch và cá nhân hóa, thúc đẩy sự hài lòng và hiệu quả.',
    
    // 功能區塊
    'Key Features': 'Tính Năng Chính',
    'Our AI chatbots are equipped with advanced features to enhance customer interactions and streamline operations.': 'Chatbot AI của chúng tôi được trang bị các tính năng tiên tiến để nâng cao tương tác với khách hàng và tối ưu hóa hoạt động.',
    'Natural Language Processing': 'Xử Lý Ngôn Ngữ Tự Nhiên',
    'Understand and respond to customer queries with human-like accuracy.': 'Hiểu và phản hồi các câu hỏi của khách hàng với độ chính xác như con người.',
    'Seamless Integration': 'Tích Hợp Liền Mạch',
    'Integrate with existing systems and platforms for a unified experience.': 'Tích hợp với các hệ thống và nền tảng hiện có để tạo trải nghiệm thống nhất.',
    'Scalable Solutions': 'Giải Pháp Có Thể Mở Rộng',
    'Handle increasing customer interactions without compromising performance.': 'Xử lý tương tác khách hàng ngày càng tăng mà không ảnh hưởng đến hiệu suất.',

    // 使用案例
    'Use Cases': 'Trường Hợp Sử Dụng',
    'Explore how our AI chatbots can be applied across various industries and scenarios.': 'Khám phá cách chatbot AI của chúng tôi có thể được áp dụng trong các ngành và tình huống khác nhau.',
    'Customer Support': 'Hỗ Trợ Khách Hàng',
    'Provide instant support, answer FAQs, and resolve issues efficiently.': 'Cung cấp hỗ trợ tức thì, trả lời câu hỏi thường gặp và giải quyết vấn đề hiệu quả.',
    'Lead Generation': 'Tạo Khách Hàng Tiềm Năng',
    'Qualify leads, gather information, and schedule appointments automatically.': 'Đánh giá khách hàng tiềm năng, thu thập thông tin và lên lịch hẹn tự động.',
    'E-commerce': 'Thương Mại Điện Tử',
    'Assist customers with product selection, order tracking, and personalized recommendations.': 'Hỗ trợ khách hàng lựa chọn sản phẩm, theo dõi đơn hàng và đề xuất cá nhân hóa.',

    // 客戶評價
    'Client Testimonials': 'Đánh Giá Của Khách Hàng',
    'Our customer satisfaction scores have increased by 25% since implementing the AI chatbot.': 'Điểm hài lòng của khách hàng đã tăng 25% kể từ khi triển khai chatbot AI.',
    'The chatbot has significantly reduced our support ticket volume, allowing our team to focus on complex issues.': 'Chatbot đã giảm đáng kể số lượng yêu cầu hỗ trợ, cho phép đội ngũ của chúng tôi tập trung vào các vấn đề phức tạp.',
    'We\'ve seen a noticeable improvement in lead generation and conversion rates.': 'Chúng tôi đã thấy sự cải thiện đáng kể trong việc tạo khách hàng tiềm năng và tỷ lệ chuyển đổi.',
    'Customer Service Manager': 'Quản Lý Dịch Vụ Khách Hàng',
    'Operations Director': 'Giám Đốc Vận Hành',
    'Marketing Lead': 'Trưởng Bộ Phận Marketing',

    // CTA 區塊
    'Ready to Transform Your Customer Engagement?': 'Sẵn Sàng Chuyển Đổi Tương Tác Khách Hàng?',
    'Experience the power of AI chatbots firsthand. Request a demo today and see how our solutions can benefit your business.': 'Trải nghiệm sức mạnh của chatbot AI. Yêu cầu demo ngay hôm nay và xem giải pháp của chúng tôi có thể mang lại lợi ích gì cho doanh nghiệp của bạn.',
    'Request a Demo': 'Yêu Cầu Demo',

    // 導航按鈕
    'About Us': 'Về Chúng Tôi',
    'Solutions': 'Giải Pháp',
    'Showcase': 'Trưng Bày',
    'Pricing': 'Báo Giá',

    // 頁尾
    'Privacy Policy': 'Chính Sách Bảo Mật',
    'Terms of Service': 'Điều Khoản Dịch Vụ',
    '© 2025 InTime Co. All rights reserved.': '© 2025 InTime Co. Bảo lưu mọi quyền.',
    'TOP': 'LÊN'
  }
};

// 將 Pricing 頁面的文案合併到已存在的 translations.vi，避免重複宣告常數
Object.assign(translations.vi, {
  // Pricing 頁面標題與描述
  'AI Chatbot Pricing Plans': 'Gói Giá AI Chatbot',
  'Choose the plan that best suits your business needs and instantly unlock omnichannel AI chatbot capabilities.':
    'Chọn gói phù hợp nhất với nhu cầu doanh nghiệp của bạn và kích hoạt ngay khả năng chatbot AI đa kênh.',

  // Plans
  'Basic': 'Cơ Bản',
  'Ideal for small business launch': 'Phù hợp cho doanh nghiệp nhỏ khởi đầu',
  'Advanced': 'Nâng Cao',
  'Suitable for growing small to medium businesses': 'Phù hợp cho doanh nghiệp nhỏ đến vừa đang phát triển',
  'Premium': 'Cao Cấp',
  'Most Popular': 'Phổ Biến Nhất',
  'Designed for businesses requiring advanced integration': 'Dành cho doanh nghiệp cần tích hợp nâng cao',
  'Enterprise Custom': 'Doanh Nghiệp Tùy Chỉnh',
  'Tailored solutions for large enterprises': 'Giải pháp tùy chỉnh cho doanh nghiệp lớn',
  'Custom': 'Tùy chỉnh',
  ' / quote': ' / báo giá',

  // Features
  'Key Features': 'Tính Năng Chính',
  'Supports LINE / FB / IG': 'Hỗ trợ LINE / FB / IG',
  '1,000 message replies per month': '1.000 phản hồi tin nhắn mỗi tháng',
  'Includes Zalo': 'Bao gồm Zalo',
  'Includes all Basic features': 'Bao gồm tất cả tính năng của Cơ Bản',
  'Data source support: Google Drive': 'Hỗ trợ nguồn dữ liệu: Google Drive',
  'Database integration': 'Tích hợp cơ sở dữ liệu',
  'Includes all Advanced features': 'Bao gồm tất cả tính năng của Nâng Cao',
  'Supports API / WebChat / Teams / Zalo': 'Hỗ trợ API / WebChat / Teams / Zalo',
  'Data source support: API / AI Database / Data extraction': 'Hỗ trợ nguồn dữ liệu: API / CSDL AI / Trích xuất dữ liệu',
  'Unlimited monthly conversations': 'Hội thoại hàng tháng không giới hạn',
  'Includes all Premium features': 'Bao gồm tất cả tính năng của Cao Cấp',
  'Custom Logo & Domain': 'Logo & tên miền tùy chỉnh',
  'API / SDK integration': 'Tích hợp API / SDK',
  'Private cloud deployment': 'Triển khai đám mây riêng',
  'Internal knowledge document integration': 'Tích hợp tài liệu kiến thức nội bộ',
  'Model fine-tuning & Customer success consultant': 'Tinh chỉnh mô hình & tư vấn thành công khách hàng',
  'Supports Home Assistant integration': 'Hỗ trợ tích hợp Home Assistant',

  // Limits
  'Platform/Data Limits': 'Giới Hạn Nền Tảng/Dữ Liệu',
  'Platform Parameters:': 'Tham số Nền tảng:',
  'Response Settings:': 'Thiết lập Phản hồi:',
  'Data Sources:': 'Nguồn Dữ liệu:',
  'Total Local File Size:': 'Tổng dung lượng tệp cục bộ:',
  'Single Local File Upload:': 'Tải lên tệp cục bộ đơn lẻ:',
  'Unlimited': 'Không giới hạn',

  // Unit
  ' VND / month': ' VND / tháng',

  // Buttons / CTA
  'Order Now': 'Đặt Hàng Ngay',
  'Contact Sales': 'Liên hệ Kinh doanh',

  // Navigation (Pricing 頁面使用)
  'Home': 'Trang Chủ',
  'About Us': 'Về Chúng Tôi',
  'Solutions': 'Giải Pháp',
  'Showcase': 'Trưng Bày',
  'Pricing': 'Giá cả', // 確保有這一行
  'AI': 'AI', // 確保有這一行
  'IOT': 'IoT', // 確保有這一行

  // Footer
  'InTime official account': 'Tài khoản chính thức InTime',
  '© 2025 InTime Co. All rights reserved.': '© 2025 InTime Co. Bảo lưu mọi quyền.',
  'TOP': 'LÊN'
});

Object.assign(translations.vi, {
  // 新 IoT 區塊文案
  'Lightweight Transformation, Smart Upgrades': 'Chuyển đổi nhẹ nhàng, nâng cấp thông minh',
  'Customized IoT integration service requiring no changes to existing operations or equipment replacement. Rapidly connect devices to the cloud for real-time monitoring and operational efficiency optimization.':
    'Dịch vụ tích hợp IoT tùy chỉnh không cần thay đổi quy trình hiện có hay thay thế thiết bị. Kết nối thiết bị lên đám mây nhanh chóng để giám sát thời gian thực và tối ưu hiệu quả vận hành.'
});

// 使用 WeakMap 保存每個文字節點的原始英文字串，避免破壞 DOM 結構
const originalTextMap = new WeakMap();

// 僅替換純文字節點，保留子元素與樣式
function replaceTextNodes(element, dict) {
  const i18nKey = element.dataset.i18n;
  if (i18nKey && dict[i18nKey]) {
    if (!originalTextMap.has(element)) {
      originalTextMap.set(element, element.innerHTML);
    }
    element.innerHTML = dict[i18nKey];
  } else {
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        const original = node.textContent;
        const trimmed = original.trim();
        if (!originalTextMap.has(node)) {
          originalTextMap.set(node, original);
        }
        if (dict[trimmed]) {
          const leading = original.match(/^\s*/)?.[0] ?? '';
          const trailing = original.match(/\s*$/)?.[0] ?? '';
          node.textContent = leading + dict[trimmed] + trailing;
        }
      }
    });
  }
}

// 翻譯函數（VN）
function translateToVietnamese() {
  const elements = document.querySelectorAll(
    '[data-i18n], h1, h2, h3, p, li, span:not(.material-symbols-outlined), blockquote, .plan-button'
  );
  elements.forEach(el => replaceTextNodes(el, translations.vi));
  updateLanguageButtonStyles('vi');
}

// 還原英文（EN）
function translateToEnglish() {
  const elements = document.querySelectorAll(
    '[data-i18n], h1, h2, h3, p, li, span:not(.material-symbols-outlined), blockquote, .plan-button'
  );
  elements.forEach(el => {
    if (originalTextMap.has(el)) {
      el.innerHTML = originalTextMap.get(el);
    } else {
      el.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE && originalTextMap.has(node)) {
          node.textContent = originalTextMap.get(node);
        }
      });
    }
  });
  updateLanguageButtonStyles('en');
}

// 更新語言按鈕樣式
function updateLanguageButtonStyles(lang) {
  const enBtn = document.getElementById('enBtn');
  const viBtn = document.getElementById('viBtn');

  if (enBtn) {
    if (lang === 'en') {
      enBtn.classList.add('selected');
      enBtn.classList.remove('hover:bg-yellow-200/20');
      enBtn.classList.remove('hover:scale-110');
      enBtn.classList.add('bg-yellow-200/20');
    } else {
      enBtn.classList.remove('selected');
      enBtn.classList.add('hover:bg-yellow-200/20');
      enBtn.classList.add('hover:scale-110');
      enBtn.classList.remove('bg-yellow-200/20');
    }
  }
  if (viBtn) {
    if (lang === 'vi') {
      viBtn.classList.add('selected');
      viBtn.classList.remove('hover:bg-yellow-200/20');
      viBtn.classList.remove('hover:scale-110');
      viBtn.classList.add('bg-yellow-200/20');
    } else {
      viBtn.classList.remove('selected');
      viBtn.classList.add('hover:bg-yellow-200/20');
      viBtn.classList.add('hover:scale-110');
      viBtn.classList.remove('bg-yellow-200/20');
    }
  }
}

// 頁面加載時初始化語言和按鈕樣式
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = localStorage.getItem('lang') || 'en';
  if (currentLang === 'vi') {
    translateToVietnamese();
  } else {
    translateToEnglish();
  }

  const enBtn = document.getElementById('enBtn');
  const viBtn = document.getElementById('viBtn');

  if (enBtn) {
    enBtn.addEventListener('click', () => {
      localStorage.setItem('lang', 'en');
      translateToEnglish();
    });
  }

  if (viBtn) {
    viBtn.addEventListener('click', () => {
      localStorage.setItem('lang', 'vi');
      translateToVietnamese();
    });
  }
});