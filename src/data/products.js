// Product copy, taken from what the two apps actually do today (tip-vision docs/PLAN.md,
// clan-ms docs/PROJECT_HANDBOOK.md and their mobile apps). Keep it true: if a feature
// is removed from an app, remove it here too.

export const products = [
  {
    id: 'tipvision',
    name: 'TipVision',
    tagline: 'Ghi lại từng đồng lương, tiền tip và ca làm chỉ trong vài giây.',
    audience: 'Cho thợ nail, phục vụ bàn, bartender và người làm tự do',
    summary:
      'Cuối ca, chụp một tấm hóa đơn POS: AI tách tip thẻ, tip tiền mặt, phần chia cho đồng nghiệp và giờ làm. Thu nhập thật theo giờ, theo tuần, theo tháng hiện ra ngay, không cần sổ tay hay bảng tính.',
    status: 'Sắp ra mắt',
    platforms: ['iOS', 'Android'],
    accent: {
      from: '#00D06C',
      to: '#2563EB',
      glow: 'rgba(0, 208, 108, 0.28)',
      text: '#5CF2A5',
    },
    highlights: [
      {
        icon: 'scan',
        title: 'AI OCR cho hóa đơn & lịch ca',
        body: 'Một tấm phiếu có thể ra nhiều ca; một ảnh lịch chia ca ra cả tuần làm việc.',
      },
      {
        icon: 'wallet',
        title: 'Theo dõi thu nhập thật',
        body: 'Lương cứng, tip thẻ, tip tiền mặt tách riêng. Thu nhập thực mỗi giờ, so với kỳ trước.',
      },
      {
        icon: 'hand',
        title: 'Luôn có nhập tay bên cạnh',
        body: 'Chỗ nào có nút AI, chỗ đó có nút nhập tay. Ô AI chưa chắc được tô vàng để bạn kiểm tra.',
      },
    ],
    details: {
      problem:
        'Người làm nghề dịch vụ nhận tiền từ nhiều nguồn: lương giờ, tip qua thẻ, tip tiền mặt, phần chia cho lễ tân. Cuối tháng gần như không ai biết chính xác mình kiếm được bao nhiêu mỗi giờ.',
      features: [
        'Quét hóa đơn POS và phiếu ca bằng AI, trả về danh sách ca để chọn',
        'Quét lịch chia ca của quán: một ảnh, nhiều ca',
        'Vào ca / ra ca một chạm, app tự tính giờ, kể cả ca qua nửa đêm',
        'Báo cáo tuần và tháng, gợi ý tuần có tip cao nhất',
        'Xuất PDF và Excel để gửi kế toán hoặc khai thuế',
        '11 loại tiền tệ, 7 ngôn ngữ, đúng giờ khi đồng hồ đổi mùa',
      ],
      stack: ['Expo / React Native', 'NestJS', 'PostgreSQL', 'Gemini Vision'],
    },
    notifySubject: 'Báo tôi khi TipVision ra mắt',
    notifyLabel: 'Báo tôi khi ra mắt',
  },
  {
    id: 'clan-ms',
    name: 'Clan-MS',
    tagline: 'Gia phả số cho dòng họ Việt — gìn giữ cội nguồn trong túi áo.',
    audience: 'Cho các dòng họ, Ban quản trị và con cháu ở mọi nơi',
    summary:
      'Cây phả hệ nhiều đời, lịch giỗ âm lịch, tra cách xưng hô và bảng tin nội tộc trong một ứng dụng. Con cháu ở xa vẫn biết mình thuộc Phái nào, Chi nào và nên gọi người kia là gì.',
    status: 'Thử nghiệm nội bộ',
    platforms: ['iOS', 'Android', 'Web CMS'],
    accent: {
      from: '#C0392B',
      to: '#C59B27',
      glow: 'rgba(197, 155, 39, 0.24)',
      text: '#E3C25C',
    },
    highlights: [
      {
        icon: 'tree',
        title: 'Phả đồ nhiều đời',
        body: 'Họ → Phái → Chi → Hộ → Thành viên. Ngày sinh chỉ biết năm vẫn ghi đúng như sử sách.',
      },
      {
        icon: 'chat',
        title: 'Tra xưng hô tự động',
        body: 'Chọn hai người, app nói gọi nhau là chú, bác hay cô — và giải thích vì sao.',
      },
      {
        icon: 'moon',
        title: 'Lịch giỗ âm lịch',
        body: 'Tự đổi ngày âm – dương, nhắc cả họ trước 7 ngày và 1 ngày.',
      },
    ],
    details: {
      problem:
        'Gia phả giấy nằm ở nhà thờ họ, ngày giỗ chỉ vài người lớn tuổi nhớ, con cháu đi làm xa không còn biết vai vế. Mỗi đời qua đi, một phần cội nguồn bị thất lạc.',
      features: [
        'Cây phả hệ nhiều đời với vợ cả, vợ thứ, con trưởng, con thứ đúng phong tục',
        'Tra xưng hô giữa hai người bất kỳ, có giải thích',
        'Lịch giỗ âm lịch, nhắc trước 7 ngày và 1 ngày cho cả họ',
        'Bảng tin nội tộc: thông báo chính thức, bình luận, điểm danh sự kiện',
        'Gia nhập có kiểm duyệt; mọi thay đổi gia phả đều qua phê duyệt và có nhật ký',
        'AI kiểm tra ảnh chân dung: khuôn mặt, độ nét, ánh sáng',
      ],
      stack: ['Expo / React Native', 'NestJS', 'PostgreSQL ltree', 'React CMS'],
    },
    notifySubject: 'Tôi muốn dùng Clan-MS cho dòng họ của mình',
    notifyLabel: 'Đăng ký dùng thử cho dòng họ',
  },
];
