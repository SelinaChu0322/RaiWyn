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

// 翻譯函數
function translateToVietnamese() {
  const elements = document.querySelectorAll('h1, h2, h3, p, a, button, span:not(.material-symbols-outlined), blockquote');
  
  elements.forEach(element => {
    const originalText = element.textContent.trim();
    if (translations.vi[originalText]) {
      element.textContent = translations.vi[originalText];
    }
  });
}

function translateToEnglish() {
  location.reload();
}