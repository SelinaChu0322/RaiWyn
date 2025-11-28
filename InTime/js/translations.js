// 翻譯對象字典
const translations = {
  vi: {
    // --- 通用/導航 ---
    'Home': 'Trang Chủ',
    'About Us': 'Về Chúng Tôi',
    'Solutions': 'Giải Pháp',
    'Showcase': 'Trưng Bày',
    'Pricing': 'Báo Giá',

    // --- Index 頁面 ---
    'From sensing to decision-making': 'Từ cảm biến đến ra quyết định',
    'brings the future into the now.': 'mang tương lai vào hiện tại.',
    'Lightweight Transformation, Smart Upgrades': 'Chuyển đổi nhẹ nhàng, Nâng cấp thông minh',
    'Customized IoT integration service requiring no changes to existing operations or equipment replacement. Rapidly connect devices to the cloud for real-time monitoring and operational efficiency optimization.': 
    'Dịch vụ tích hợp IoT tùy chỉnh không yêu cầu thay đổi hoạt động hiện tại hoặc thay thế thiết bị. Kết nối nhanh chóng thiết bị với đám mây để giám sát thời gian thực và tối ưu hóa hiệu quả hoạt động.',
    'Enterprise AI Integration, Smarter Decisions Ahead': 'Tích hợp AI Doanh nghiệp, Quyết định thông minh hơn',
    'An all-in-one LLM platform that integrates social media and cross-platform data, leveraging AI for automated processing, analysis, and visualization to drive intelligent, data-driven decision-making.':
    'Nền tảng LLM tất cả trong một tích hợp mạng xã hội và dữ liệu đa nền tảng, tận dụng AI để xử lý, phân tích và trực quan hóa tự động nhằm thúc đẩy việc ra quyết định thông minh dựa trên dữ liệu.',
    'Order Now': 'Đặt Hàng Ngay',
    'Contact Sales': 'Liên Hệ Kinh Doanh',

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
    'Advanced': 'Nâng Cao',
    'Suitable for growing small to medium businesses': 'Phù hợp cho doanh nghiệp vừa và nhỏ đang phát triển',
    'Includes all Basic features': 'Bao gồm tất cả tính năng Cơ Bản',
    'Data source support: Google Drive': 'Hỗ trợ nguồn dữ liệu: Google Drive',
    'Database integration': 'Tích hợp cơ sở dữ liệu',
    '5 platform parameters': '5 tham số nền tảng',
    '15 response settings': '15 thiết lập phản hồi',
    '5 data sources': '5 nguồn dữ liệu',
    '10MB': '10MB',
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
    'TOP': 'LÊN',

    // --- Solutions IOT: Factory (New Features - 本次修正重點) ---
    'Product Features': 'Tính năng Sản phẩm',
    'Real-time monitoring for production line visibility': 'Giám sát thời gian thực để hiển thị dây chuyền sản xuất',
    'Always grasp the operating status and production progress of all machines on the shop floor to improve management efficiency.': 'Luôn nắm bắt tình trạng hoạt động và tiến độ sản xuất của tất cả các máy trên sàn xưởng để nâng cao hiệu quả quản lý.',
    'Clear history and complete data preservation': 'Lịch sử rõ ràng và bảo quản dữ liệu đầy đủ',
    'Automatically consolidate work order records, output data, and utilization rates to fully preserve the entire production record.': 'Tự động tổng hợp hồ sơ lệnh sản xuất, dữ liệu đầu ra và tỷ lệ sử dụng để bảo quản đầy đủ toàn bộ hồ sơ sản xuất.',
    'Lightweight deployment with effortless transformation': 'Triển khai gọn nhẹ với chuyển đổi dễ dàng',
    'No need to replace or modify existing machines; setup is quick and easy without burden.': 'Không cần thay thế hoặc sửa đổi máy hiện có; thiết lập nhanh chóng và dễ dàng mà không gây gánh nặng.',
    'Visualized presentation for intuitive analysis': 'Trình bày trực quan để phân tích trực quan',
    'Graphical data analysis makes trends clear at a glance, aiding understanding of line changes and decision-making.': 'Phân tích dữ liệu đồ họa giúp xu hướng rõ ràng trong nháy mắt, hỗ trợ hiểu các thay đổi của dây chuyền và ra quyết định.',
    'Real-time cloud uploads for anytime data access': 'Tải lên đám mây thời gian thực để truy cập dữ liệu mọi lúc',
    'Every data count is automatically uploaded to the cloud, ensuring timeliness and traceability.': 'Mọi số liệu đếm được tự động tải lên đám mây, đảm bảo tính kịp thời và khả năng truy xuất nguồn gốc.',
    'Flexible architecture supporting custom development': 'Kiến trúc linh hoạt hỗ trợ phát triển tùy chỉnh',
    '100% designed and manufactured in Taiwan, with modular functions to support diverse environments and customization needs.': '100% thiết kế và sản xuất tại Đài Loan, với các chức năng mô-đun để hỗ trợ môi trường đa dạng và nhu cầu tùy chỉnh.',
    
    // Why Choose Us (Updated Items - 本次修正重點)
    'WHY CHOOSE US': 'TẠI SAO CHỌN CHÚNG TÔI',
    'Why choose InTime\'s machine utilization monitoring system?': 'Tại sao chọn hệ thống giám sát hiệu suất máy móc của InTime?',
    'Compatible with various machine models, enabling fast installation without equipment restrictions': 'Tương thích với nhiều mẫu máy, cho phép lắp đặt nhanh chóng mà không bị hạn chế về thiết bị',
    'Data automatically uploaded and integrated into the cloud for real-time utilization monitoring': 'Dữ liệu được tự động tải lên và tích hợp vào đám mây để giám sát hiệu suất thời gian thực',
    'Paperless operation, reducing human error risks': 'Vận hành không giấy tờ, giảm rủi ro lỗi do con người',
    'Instant anomaly alerts to speed up problem resolution': 'Cảnh báo bất thường tức thì để tăng tốc độ giải quyết vấn đề',
    'Responsive RWD interface accessible anytime across multiple devices': 'Giao diện RWD đáp ứng có thể truy cập mọi lúc trên nhiều thiết bị',
    'Designed and manufactured in Taiwan, with quick and reliable technical support': 'Thiết kế và sản xuất tại Đài Loan, với hỗ trợ kỹ thuật nhanh chóng và đáng tin cậy',

    // --- Solutions IOT: Factory (Existing) ---
    'Smart Factory Solution': 'Giải pháp Nhà máy Thông minh',
    'Machine Utilization Monitoring System': 'Hệ thống Giám sát Hiệu suất Máy móc',
    'Manufacturing Equipment Operation Monitoring System': 'Hệ thống Giám sát Vận hành Thiết bị Sản xuất',
    'Old Machines, New Intelligence': 'Máy cũ, Trí tuệ mới',
    'hero_desc': 'Mở khóa sức mạnh giám sát đám mây cho thiết bị cũ. InTime cung cấp giải pháp cài đặt nhanh để số hóa máy dập, máy ép phun và nhiều hơn nữa—mà không cần thay thế phần cứng.',
    'Get Started Now': 'Bắt đầu ngay',
    'Plug & Play Module': 'Mô-đun Cắm & Chạy',
    'Quick Installation': 'Cài đặt nhanh chóng!',
    'Legacy Equipment Monitoring': 'Thiết bị cũ nay có thể tận hưởng giám sát trên đám mây',
    'quick_install_summary': 'Ngừng dựa vào nhật ký thủ công. Hộp điều khiển không xâm lấn của chúng tôi kết nối máy cũ với đám mây ngay lập tức mà không cần dừng sản xuất. Dù là máy dập hay máy đóng gói, xem trạng thái thời gian thực, tỷ lệ sử dụng và báo cáo sản xuất trên mọi thiết bị—tiết kiệm thời gian và giảm lỗi.',
    'No need to replace existing equipment': 'Không cần thay thế thiết bị hiện có',
    'RWD responsive monitoring platform': 'Nền tảng giám sát đáp ứng RWD',
    'Digital Transformation': 'Chuyển đổi số',
    'Solution Under Tariff Pressure': 'Giải pháp dưới áp lực thuế quan – Con đường nâng cấp rào cản thấp',
    'transformation_summary': 'Vượt qua thách thức thị trường và áp lực thuế quan bằng cách tối ưu hóa hiệu quả nội bộ. Hệ thống của chúng tôi xác định các điểm nghẽn và tối ưu hóa phân bổ nhân lực thông qua tính minh bạch dữ liệu thời gian thực. Ngay cả các nhà máy nhỏ cũng có thể áp dụng khả năng sản xuất thông minh để sản xuất nhiều hơn với cùng lực lượng lao động, đảm bảo khả năng cạnh tranh trong thị trường toàn cầu thay đổi.',
    'Learn more about features': 'Tìm hiểu thêm về các tính năng',
    'Implementation & Support': 'Triển khai & Hỗ trợ',
    'contact_cta': 'Đội ngũ kỹ thuật tận tâm của chúng tôi đảm bảo cài đặt suôn sẻ và đào tạo toàn diện. Chuyển đổi hoạt động sản xuất của bạn ngay hôm nay.',
    
    // --- Solutions IOT: Water ---
    'Smart water monitoring solution': 'Giải pháp Giám sát Nước Thông minh',
    'Smart Water Monitoring Solution': 'Giải pháp Giám sát Nước Thông minh',
    'Advanced IoT solutions for water quality, leakage detection, and usage management are coming soon.': 'Các giải pháp IoT tiên tiến về chất lượng nước, phát hiện rò rỉ và quản lý sử dụng sắp ra mắt.',
    'Contact for Details': 'Liên hệ để biết chi tiết',

    // --- Solutions IOT: Agriculture ---
    'Smart Agriculture Solution': 'Giải pháp Nông nghiệp Thông minh',
    'Smart Agriculture Field Monitoring System': 'Hệ thống Giám sát Cánh đồng Nông nghiệp Thông minh',
    'Ideal for precision agriculture': 'Lý tưởng cho nông nghiệp chính xác',
    "InTime's Smart Paddy Field Monitoring System aims at monitoring the weather and soil in real time. Featuring quick and easy installation, it gathers environment data and wirelessly uploads them to the cloud for integration with multiple sensors.":
    "Hệ thống Giám sát Ruộng lúa Thông minh của InTime nhằm mục đích giám sát thời tiết và đất đai theo thời gian thực. Với tính năng cài đặt nhanh chóng và dễ dàng, nó thu thập dữ liệu môi trường và tải lên đám mây không dây để tích hợp với nhiều cảm biến.",
    'Consult Now': 'Tư vấn ngay',
    
    'Improve Production Efficiency': 'Cải thiện Hiệu quả Sản xuất',
    'Increase Harvests': 'Tăng Năng suất',
    'by 20%': 'thêm 20%',
    'Precision irrigation & fertilization': 'Tưới tiêu & bón phân chính xác',
    'Save Costs': 'Tiết kiệm Chi phí',
    '30%': '30%',
    'Water, electricity, fertilizer & materials': 'Nước, điện, phân bón & vật tư',
    
    'The InTime Smart Agriculture Field Monitoring System': 'Hệ thống Giám sát Cánh đồng Nông nghiệp Thông minh InTime',
    'Wireless & Host-Free': 'Không dây & Không cần máy chủ',
    'Without wiring and host support in advance. Works independently.': 'Không cần đi dây và hỗ trợ máy chủ trước. Hoạt động độc lập.',
    'High Scalability': 'Khả năng mở rộng cao',
    'Modular system that can add sensors as required by your specific crop needs.': 'Hệ thống mô-đun có thể thêm cảm biến theo nhu cầu cây trồng cụ thể.',
    'Auto Cloud Upload': 'Tự động tải lên đám mây',
    'Data gathered are uploaded automatically without any manual recording.': 'Dữ liệu thu thập được tải lên tự động mà không cần ghi chép thủ công.',
    'Integrated Management': 'Quản lý tích hợp',
    'Cloud data integration to manage multiple farms/greenhouses concurrently.': 'Tích hợp dữ liệu đám mây để quản lý đồng thời nhiều trang trại/nhà kính.',
    'Multi-Device View': 'Xem trên nhiều thiết bị',
    'View data on devices including smartphones, tablets, and computers.': 'Xem dữ liệu trên các thiết bị bao gồm điện thoại thông minh, máy tính bảng và máy tính.',
    'Remote Control': 'Điều khiển từ xa',
    'Remote control farm equipment by working with InTime’s smart control box.': 'Điều khiển thiết bị nông nghiệp từ xa bằng cách làm việc với hộp điều khiển thông minh của InTime.',
    
    'Choose the sensor combo you really need': 'Chọn combo cảm biến bạn thực sự cần',
    "Addressing your concerns in geology, topography, crop type, and budget, InTime's Small Farmer Pack employs modular design rather than a pre-set sensor pack. Select monitoring items you need without wasting budget on non-desired ones.":
    "Giải quyết các mối quan tâm của bạn về địa chất, địa hình, loại cây trồng và ngân sách, Gói Nông dân Nhỏ của InTime sử dụng thiết kế mô-đun thay vì gói cảm biến cài sẵn. Chọn các mục giám sát bạn cần mà không lãng phí ngân sách vào những mục không mong muốn.",
    '14 Environmental Sensing Components': '14 Thành phần Cảm biến Môi trường',
    'Illuminance': 'Độ rọi',
    'Photons': 'Photon',
    'Atmospheric Pressure': 'Áp suất khí quyển',
    'Air Temp/Humidity': 'Nhiệt độ/Độ ẩm không khí',
    'Soil Temp/Humidity': 'Nhiệt độ/Độ ẩm đất',
    'Soil Salinity': 'Độ mặn đất',
    'Wind Speed': 'Tốc độ gió',
    'Wind Direction': 'Hướng gió',
    'Wireless Communication Options': 'Tùy chọn Giao tiếp Không dây',
    
    'Easily Deployed & Cost Saving': 'Triển khai dễ dàng & Tiết kiệm chi phí',
    'Solar Powered': 'Năng lượng mặt trời',
    'Highly efficient energy-saving technology works continuously on solar energy 365 days/year.': 'Công nghệ tiết kiệm năng lượng hiệu quả cao hoạt động liên tục bằng năng lượng mặt trời 365 ngày/năm.',
    'Plug & Play': 'Cắm & Chạy',
    'Just insert the sensor in soil/pot and it\'s ready. No electric construction needed.': 'Chỉ cần cắm cảm biến vào đất/chậu là sẵn sàng. Không cần thi công điện.',
    'Huge Savings': 'Tiết kiệm lớn',
    'Save on Construction/Host Costs approx.': 'Tiết kiệm chi phí Xây dựng/Máy chủ khoảng',
    
    'InTime Smart Remote Control Box': 'Hộp Điều khiển Từ xa Thông minh InTime',
    'With the help of InTime smart control box, the farms’ environment conditions and equipment operation status remain under your control even when you are traveling.':
    'Với sự trợ giúp của hộp điều khiển thông minh InTime, điều kiện môi trường trang trại và trạng thái hoạt động của thiết bị vẫn nằm trong tầm kiểm soát của bạn ngay cả khi bạn đi du lịch.',
    'This not only cuts bills of water and electricity but also saves you from patrolling the farms and equipment operation which, in turn, leaves you precious time to attend to more important things.':
    'Điều này không chỉ cắt giảm hóa đơn tiền nước và điện mà còn giúp bạn không phải đi tuần tra trang trại và vận hành thiết bị, từ đó giúp bạn có thời gian quý báu để giải quyết những việc quan trọng hơn.',
    
    'Applications of InTime Smart Field Monitoring': 'Ứng dụng của Giám sát Cánh đồng Thông minh InTime',
    'Offering the best field monitoring solutions even at remote areas and challenging scenarios.': 'Cung cấp các giải pháp giám sát thực địa tốt nhất ngay cả ở những vùng sâu vùng xa và các tình huống khó khăn.',
    'Farm Land': 'Đất Nông nghiệp',
    'GreenHouse': 'Nhà Kính',
    'Aquaculture': 'Thủy sản',
    'Livestock Farm': 'Trang trại Chăn nuôi'
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
  // 檢查元素本身及其祖先是否包含 'no-translate' 類別
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
  
  // 透明黃色底: rgba(250, 204, 21, 0.3)
  const activeStyle = 'rgba(250, 204, 21, 0.3)';
  const inactiveStyle = 'transparent';

  if (enBtn) {
    enBtn.style.backgroundColor = activeLang === 'en' ? activeStyle : inactiveStyle;
    enBtn.style.borderRadius = '0.25rem';
  }
  if (viBtn) {
    viBtn.style.backgroundColor = activeLang === 'vi' ? activeStyle : inactiveStyle;
    viBtn.style.borderRadius = '0.25rem';
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