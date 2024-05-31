const trueQuestions = [
  "Bạn đã từng nói dối ai chưa? Nếu có, hãy kể lại.",
  "Lần gần nhất bạn cảm thấy xấu hổ là khi nào?",
  "Ai là người bạn thân nhất của bạn?",
  "Bạn đã bao giờ lừa dối ai chưa?",
  "Bạn có thầm thích ai trong nhóm này không?",
  "Bạn đã từng yêu thầm ai chưa?",
  "Bạn có bao giờ gian lận trong kỳ thi chưa?",
  "Bạn có thích ai trong nhóm này không?",
  "Điều xấu hổ nhất mà bạn đã làm là gì?",
  "Bạn đã bao giờ bị bắt gặp khi đang làm điều gì đó xấu hổ chưa?",
  "Bạn có bao giờ đọc trộm nhật ký của ai đó không?",
  "Điều ngớ ngẩn nhất mà bạn đã nói khi say là gì?",
  "Bạn đã từng bỏ nhà đi chưa?",
  "Bạn đã từng yêu từ cái nhìn đầu tiên chưa?",
  "Bạn có bao giờ nói dối để tránh gặp ai đó không?",
  "Bạn đã từng yêu đơn phương ai trong thời gian dài chưa?",
  "Bạn đã bao giờ thích bạn của người yêu mình không?",
  "Bạn có từng hôn ai đó mà bạn không yêu không?",
  "Bạn đã bao giờ gửi tin nhắn tình yêu cho ai đó không?",
  "Bạn có từng tham gia vào một mối quan hệ bí mật không?",
  "Điều điên rồ nhất bạn từng làm vì tình yêu là gì?",
  "Bạn có bao giờ viết thư tình chưa?",
  "Bạn đã từng bị ai đó từ chối khi tỏ tình chưa?",
  "Bạn có từng quay lại với người yêu cũ không?",
  "Bạn đã từng thích người yêu của bạn thân không?",
  "Bạn đã từng làm điều gì khiến bạn cảm thấy xấu hổ vì người khác chưa?",
  "Bạn có từng sử dụng ứng dụng hẹn hò không?",
  "Bạn có bao giờ nói dối về tuổi tác của mình chưa?",
  "Bạn đã bao giờ bị mắc kẹt trong thang máy chưa?",
  "Bạn đã từng mơ thấy ai đó trong nhóm này chưa?",
  "Bạn đã bao giờ lừa ai đó để lấy tiền chưa?",
  "Bạn có bao giờ ghét một ai đó mà bạn phải giả vờ thích không?",
  "Bạn đã bao giờ làm điều gì đó để gây ấn tượng với người bạn thích không?",
  "Bạn có bao giờ lén xem điện thoại của ai đó không?",
  "Bạn đã từng bị ai đó chọc ghẹo về ngoại hình chưa?",
  "Bạn có từng nói xấu ai đó sau lưng không?",
  "Bạn đã bao giờ phá hoại tài sản của ai đó chưa?",
  "Bạn có bao giờ ăn cắp đồ ăn từ tủ lạnh của ai đó không?",
  "Bạn có từng xem phim cấm chưa?",
  "Bạn đã bao giờ bị ai đó lợi dụng chưa?",
  "Bạn có từng nói dối để thoát khỏi một cuộc hẹn hò tồi tệ không?",
  "Bạn có bao giờ lén nghe cuộc trò chuyện của người khác không?",
  "Bạn đã từng bị bắt gặp đang làm gì đó không đứng đắn chưa?",
  "Bạn có bao giờ mơ thấy điều gì đó kỳ lạ không?",
  "Bạn đã từng ngủ quên trong lớp học chưa?",
  "Bạn có bao giờ trốn tránh trách nhiệm của mình chưa?",
  "Bạn đã từng làm điều gì đó mà bạn rất hối hận chưa?",
  "Bạn có bao giờ nghĩ đến việc kết hôn sớm không?",
  "Bạn đã từng yêu ai đó lớn hơn bạn rất nhiều tuổi chưa?",
  "Bạn có từng ghen tị với ai đó trong nhóm này không?",
  "Bạn đã bao giờ gửi tin nhắn tình cảm nhầm người chưa?",
  "Bạn có bao giờ cố gắng theo dõi người yêu cũ không?",
  "Bạn đã từng cảm thấy thất vọng về chính mình chưa?",
  "Bạn có bao giờ nói dối về công việc của mình không?",
  "Bạn đã từng hối tiếc vì không nói ra tình cảm của mình với ai đó chưa?",
];

const dareTasks = [
  "Hát một đoạn của bài hát mà bạn thích.",
  "Nhảy một điệu nhảy vui nhộn trong 30 giây.",
  "Làm mặt hề trong 1 phút.",
  "Gọi điện thoại cho một người bạn và hát chúc mừng sinh nhật.",
  "Nói một câu tiếng nước ngoài mà bạn biết.",
  "Hát một bài hát bất kỳ.",
  "Nhảy một điệu nhảy tự chọn trong 1 phút.",
  "Gọi điện cho ai đó và nói 'Tôi thích bạn'.",
  "Giả giọng một người nổi tiếng.",
  "Ăn một thìa muối.",
  "Hôn lên tay người ngồi cạnh bạn.",
  "Chụp một bức ảnh tự sướng và đăng lên mạng xã hội với một caption ngớ ngẩn.",
  "Đọc to tin nhắn gần đây nhất của bạn.",
  "Làm mặt hề trong 1 phút.",
  "Nói một câu tỏ tình với người đối diện.",
  "Thực hiện một điệu nhảy kỳ lạ ngoài đường.",
  "Đưa điện thoại của bạn cho người khác và để họ gửi một tin nhắn bất kỳ từ tài khoản của bạn.",
  "Nhảy vào thùng rác và chụp ảnh.",
  "Ăn một món ăn kỳ lạ được người khác chọn.",
  "Đội một chiếc mũ lạ trong suốt phần còn lại của trò chơi.",
  "Thực hiện một bài tập thể dục khó trong 1 phút.",
  "Nhảy dây 50 lần liên tiếp.",
  "Uống một ly nước đầy trong một hơi.",
  "Giả làm một nhân vật hoạt hình trong 2 phút.",
  "Hôn lên trán người ngồi cạnh bạn.",
  "Nói một câu chuyện ma trong 2 phút.",
  "Chạy vòng quanh nhà 3 lần.",
  "Làm động tác plank trong 1 phút.",
  "Nhắn tin cho một người bạn bất kỳ rằng bạn đang yêu họ.",
  "Thực hiện 10 cái chống đẩy.",
  "Hôn lên gương.",
  "Nhảy múa như một điên cuồng trong 30 giây.",
  "Thực hiện một tư thế yoga khó.",
  "Đọc một đoạn thơ tình cảm.",
  "Chơi một trò chơi nhỏ mà người khác chọn.",
  "Vẽ một bức tranh bằng chân của bạn.",
  "Nói với ai đó rằng bạn đã thích họ từ lâu.",
  "Thực hiện một đoạn rap ngắn.",
  "Ăn một miếng trái cây mà không dùng tay.",
  "Hát một đoạn nhạc thiếu nhi.",
  "Thực hiện một điệu nhảy từ một video nhạc pop.",
  "Uống một ly nước có chứa chanh, muối và ớt.",
  "Mô phỏng một cảnh trong phim.",
  "Giả làm một nhân vật nổi tiếng trong 1 phút.",
  "Đeo một chiếc mũ ngớ ngẩn trong suốt trò chơi.",
  "Tìm một câu chuyện cười và kể nó với mọi người.",
  "Nhảy điệu disco trong 1 phút.",
  "Gọi điện cho một người bạn và nói rằng bạn đang có một bí mật lớn.",
  "Chơi một trò chơi vẽ nhanh với mọi người.",
  "Làm 5 lần squat.",
  "Kể một câu chuyện hài hước.",
  "Thực hiện một đoạn kịch ngắn.",
  "Nói to tên người bạn thích nhất.",
  "Giả vờ làm một động vật yêu thích của bạn trong 1 phút.",
  "Thực hiện một hành động ngẫu nhiên mà người khác chọn.",
];

document.getElementById("trueButton").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * trueQuestions.length);
  document.getElementById("result").innerText = trueQuestions[randomIndex];
});

document.getElementById("dareButton").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * dareTasks.length);
  document.getElementById("result").innerText = dareTasks[randomIndex];
});

const rulesModal = document.getElementById("rulesModal");
const rulesButton = document.getElementById("rulesButton");
const closeButton = document.getElementsByClassName("close")[0];

rulesButton.onclick = function () {
  rulesModal.style.display = "block";
};

closeButton.onclick = function () {
  rulesModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === rulesModal) {
    rulesModal.style.display = "none";
  }
};
