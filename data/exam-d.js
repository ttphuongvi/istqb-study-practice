/* File được sinh tự động bởi tools/build_data.py — sửa dữ liệu nguồn rồi chạy lại script. */
window.ISTQB = window.ISTQB || { exams: {}, lo: {} };
window.ISTQB.exams.D = { main: [
 {
  "n": "1",
  "pre": "",
  "prev": "",
  "q": "Which of the following is a typical test objective?",
  "qv": "Phương án nào sau đây là một mục tiêu kiểm thử (test objective) điển hình?",
  "o": [
   {
    "t": "Finding and fixing defects in the test object",
    "v": "Tìm và sửa khuyết tật (defect) trong đối tượng kiểm thử — sai, vì sửa lỗi không phải hoạt động kiểm thử."
   },
   {
    "t": "Maintaining effective communications with developers",
    "v": "Duy trì giao tiếp hiệu quả với lập trình viên — sai, hữu ích nhưng không phải mục tiêu chính của kiểm thử."
   },
   {
    "t": "Validating that legal requirements have been met",
    "v": "Thẩm định (validate) rằng các yêu cầu pháp lý đã được đáp ứng — sai, kiểm tra yêu cầu pháp lý là xác minh (verification)."
   },
   {
    "t": "Building confidence in the quality of the test object",
    "v": "Xây dựng niềm tin vào chất lượng của đối tượng kiểm thử — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Xây dựng niềm tin vào chất lượng của đối tượng kiểm thử (test object) là một mục tiêu kiểm thử điển hình; niềm tin này đạt được khi thực thi các kiểm thử và chúng đạt (passed).\n• Vì sao A sai: Phát hiện khuyết tật (defect) đúng là một mục tiêu của kiểm thử, nhưng sửa khuyết tật (fixing/debugging) là việc của lập trình viên, không phải hoạt động kiểm thử.\n• Vì sao B sai: Giao tiếp tốt với lập trình viên rất hữu ích để đạt các mục tiêu khác (ví dụ cung cấp thông tin cho các bên liên quan ra quyết định), nhưng bản thân nó không phải là lý do chính để thực hiện kiểm thử.\n• Vì sao C sai: Thẩm định (validation) là kiểm tra hệ thống có đáp ứng nhu cầu của người dùng và các bên liên quan trong môi trường vận hành hay không. Kiểm tra việc đáp ứng yêu cầu pháp lý là một dạng xác minh (verification), nên phát biểu 'validating legal requirements' không phải mục tiêu điển hình.",
  "lo": "FL-1.1.1",
  "k": "K1"
 },
 {
  "n": "2",
  "pre": "<p>A designer documents a design for a user interface that does not suitably address disabled users because the designer is tired. The programmer implements the user interface in line with the design but as they are working under severe time pressure, they do not include suitable exception handling in their program code for bonus calculations. When the operational system is used, complaints are made by some disabled users about the interface and the company is subsequently fined by the relevant regulatory authority. No one notices that bonus calculations are sometimes incorrect.</p>",
  "prev": "<p>Một nhà thiết kế viết tài liệu thiết kế giao diện người dùng không đáp ứng phù hợp cho người khuyết tật vì nhà thiết kế bị mệt mỏi. Lập trình viên hiện thực giao diện đúng theo thiết kế, nhưng do làm việc dưới áp lực thời gian rất lớn nên họ không đưa vào cơ chế xử lý ngoại lệ (exception handling) phù hợp trong mã tính tiền thưởng. Khi hệ thống được đưa vào vận hành, một số người dùng khuyết tật phàn nàn về giao diện và sau đó công ty bị cơ quan quản lý có thẩm quyền phạt. Không ai nhận ra rằng việc tính tiền thưởng đôi khi bị sai.</p>",
  "q": "Which of the following statements is CORRECT?",
  "qv": "Phát biểu nào sau đây là ĐÚNG?",
  "o": [
   {
    "t": "The miscalculation of bonuses is a defect that occasionally occurs",
    "v": "Việc tính sai tiền thưởng là một khuyết tật (defect) thỉnh thoảng xảy ra — sai, đó là sai sót (failure)."
   },
   {
    "t": "The fine received for failing to address some disabled users is a failure",
    "v": "Khoản phạt do không đáp ứng người dùng khuyết tật là một sai sót (failure) — sai, khoản phạt chỉ là hậu quả."
   },
   {
    "t": "The programmer working under severe time pressure is a root cause",
    "v": "Việc lập trình viên làm việc dưới áp lực thời gian lớn là một nguyên nhân gốc (root cause) — đúng."
   },
   {
    "t": "The design of the user interface includes a designer error",
    "v": "Thiết kế giao diện chứa một lỗi (error) của nhà thiết kế — sai, thiết kế chứa khuyết tật (defect)."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Lập trình viên mắc lỗi (error/mistake) là bỏ sót xử lý ngoại lệ; lỗi này xảy ra do làm việc dưới áp lực thời gian lớn. Áp lực thời gian chính là nguyên nhân gốc (root cause) dẫn đến khuyết tật (defect) trong mã tính tiền thưởng.\n• Vì sao A sai: Việc hệ thống tính sai tiền thưởng khi chạy là một sai sót (failure) quan sát được, không phải khuyết tật. Khuyết tật là phần mã thiếu xử lý ngoại lệ.\n• Vì sao B sai: Việc hệ thống không hỗ trợ phù hợp người khuyết tật là sai sót (failure), và nó dẫn đến khoản phạt; nhưng bản thân khoản phạt không phải sai sót (đó là hệ thống quản lý vận hành đúng chức năng của mình).\n• Vì sao D sai: Thiết kế giao diện kém là một khuyết tật thiết kế (design defect) do lỗi (error) của nhà thiết kế gây ra. Lỗi nằm ở con người (nhà thiết kế), còn sản phẩm thiết kế chứa khuyết tật chứ không 'chứa lỗi của nhà thiết kế'.",
  "lo": "FL-1.2.3",
  "k": "K2"
 },
 {
  "n": "3",
  "pre": "<p>Test conditions are being used by testers to generate test cases and execute tests. Even though the test conditions remain the same, the test cases are varied each time.</p>",
  "prev": "<p>Các tester đang dùng các điều kiện kiểm thử (test condition) để sinh ra ca kiểm thử (test case) và thực thi kiểm thử. Mặc dù các điều kiện kiểm thử giữ nguyên, các ca kiểm thử được thay đổi mỗi lần.</p>",
  "q": "Which of the following ‘principles of testing’ is being addressed through the variation of test cases?",
  "qv": "Việc thay đổi các ca kiểm thử như vậy đang giải quyết 'nguyên lý kiểm thử' nào sau đây?",
  "o": [
   {
    "t": "Tests wear out",
    "v": "Kiểm thử bị mòn (tests wear out) — đúng."
   },
   {
    "t": "Absence-of-defects fallacy",
    "v": "Ngộ nhận về sự vắng mặt của khuyết tật (absence-of-defects fallacy) — sai, nguyên lý này nói về việc phải đáp ứng nhu cầu người dùng."
   },
   {
    "t": "Early testing saves time and money",
    "v": "Kiểm thử sớm tiết kiệm thời gian và tiền bạc — sai, liên quan đến việc bắt đầu kiểm thử sớm."
   },
   {
    "t": "Defects cluster together",
    "v": "Khuyết tật tập trung thành cụm — sai, liên quan đến phân bố khuyết tật."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Nguyên lý 'kiểm thử bị mòn' (tests wear out) nói rằng lặp lại y hệt các kiểm thử trên mã không thay đổi thì khó tìm thêm khuyết tật mới, nên cần sửa đổi kiểm thử. Dùng điều kiện kiểm thử để sinh ra ca kiểm thử mới mỗi lần giúp các kiểm thử không trùng lặp, giảm rủi ro kiểm thử bị mòn.\n• Vì sao B sai: Nguyên lý 'ngộ nhận về sự vắng mặt của khuyết tật' nhấn mạnh phải đảm bảo đáp ứng nhu cầu người dùng dù đã kiểm thử nhiều và không tìm thấy khuyết tật (tức là cần cả thẩm định - validation). Việc thay đổi ca kiểm thử không giải quyết trực tiếp vấn đề này.\n• Vì sao C sai: Nguyên lý 'kiểm thử sớm' nói về việc phát hiện và sửa khuyết tật sớm để tránh khuyết tật lan sang các sản phẩm công việc phát sinh sau, giảm chi phí. Điều này đạt được bằng cách bắt đầu kiểm thử (tĩnh và động) càng sớm càng tốt, không phải bằng việc thay đổi ca kiểm thử.\n• Vì sao D sai: Nguyên lý 'khuyết tật tập trung thành cụm' nói về sự phân bố khuyết tật (thường theo quy luật Pareto), thường được xử lý bằng kiểm thử dựa trên rủi ro (risk-based testing), không liên quan đến việc thay đổi ca kiểm thử.",
  "lo": "FL-1.3.1",
  "k": "K2"
 },
 {
  "n": "4",
  "pre": "<p>Given the following test tasks:</p><ol><li>Derive test cases from test conditions</li><li>Identify reusable testware</li><li>Organize test cases into test procedures</li><li>Evaluate the test basis and the test object</li></ol><p>And the following test activities:</p><ol type=\"A\"><li>Test analysis</li><li>Test design</li><li>Test implementation</li><li>Test completion</li></ol>",
  "prev": "<p>Cho các tác vụ kiểm thử sau:</p><ol><li>Suy ra ca kiểm thử (test case) từ các điều kiện kiểm thử (test condition)</li><li>Xác định các sản phẩm kiểm thử (testware) có thể tái sử dụng</li><li>Tổ chức các ca kiểm thử thành thủ tục kiểm thử (test procedure)</li><li>Đánh giá cơ sở kiểm thử (test basis) và đối tượng kiểm thử (test object)</li></ol><p>Và các hoạt động kiểm thử sau:</p><ol type=\"A\"><li>Phân tích kiểm thử (test analysis)</li><li>Thiết kế kiểm thử (test design)</li><li>Triển khai kiểm thử (test implementation)</li><li>Hoàn tất kiểm thử (test completion)</li></ol>",
  "q": "Which of the following BEST matches the tasks with the activities?",
  "qv": "Phương án nào sau đây ghép các tác vụ với hoạt động kiểm thử PHÙ HỢP NHẤT?",
  "o": [
   {
    "t": "1B, 2A, 3D, 4C",
    "v": "1B, 2A, 3D, 4C — sai."
   },
   {
    "t": "1B, 2D, 3C, 4A",
    "v": "1B, 2D, 3C, 4A — đúng."
   },
   {
    "t": "1C, 2A, 3B, 4D",
    "v": "1C, 2A, 3B, 4D — sai."
   },
   {
    "t": "1C, 2D, 3A, 4B",
    "v": "1C, 2D, 3A, 4B — sai."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Xét từng hoạt động:\n  - A. Phân tích kiểm thử (test analysis): phân tích cơ sở kiểm thử để xác định tính năng cần kiểm thử, định nghĩa và ưu tiên điều kiện kiểm thử; trong quá trình này thường phát hiện khuyết tật trong cơ sở kiểm thử và đánh giá khả năng kiểm thử (testability) của đối tượng kiểm thử → tác vụ 4.\n  - B. Thiết kế kiểm thử (test design): dùng điều kiện kiểm thử để tạo ca kiểm thử và các testware cần thiết khác → tác vụ 1.\n  - C. Triển khai kiểm thử (test implementation): tạo thủ tục kiểm thử (test procedure) từ ca kiểm thử, gom thành bộ kiểm thử (test suite), sắp xếp lịch thực thi → tác vụ 3.\n  - D. Hoàn tất kiểm thử (test completion): diễn ra ở các mốc dự án; xác định testware để lưu trữ hoặc bàn giao cho đội khác tái sử dụng, tắt môi trường kiểm thử, rút bài học kinh nghiệm → tác vụ 2.\n  Vậy ghép đúng là 1B, 2D, 3C, 4A.\n• Vì sao A sai: Ghép 2A (xác định testware tái sử dụng thuộc phân tích), 3D, 4C đều không đúng.\n• Vì sao C sai: 1C và 3B bị đảo ngược; 2A, 4D cũng sai.\n• Vì sao D sai: 1C, 3A, 4B đều sai; chỉ có 2D là đúng.",
  "lo": "FL-1.4.1",
  "k": "K2"
 },
 {
  "n": "5",
  "pre": "<p>Given the following testware:</p><ol type=\"i\"><li>Test completion report</li><li>Data held in a database used for test inputs and expected results</li><li>The list of elements needed to build the test environment</li><li>Documented sequences of test cases in execution order</li><li>Test cases</li></ol>",
  "prev": "<p>Cho các sản phẩm kiểm thử (testware) sau:</p><ol type=\"i\"><li>Báo cáo hoàn tất kiểm thử (test completion report)</li><li>Dữ liệu lưu trong cơ sở dữ liệu dùng làm đầu vào kiểm thử và kết quả mong đợi</li><li>Danh sách các thành phần cần thiết để dựng môi trường kiểm thử</li><li>Các chuỗi ca kiểm thử được ghi lại theo thứ tự thực thi</li><li>Ca kiểm thử (test case)</li></ol>",
  "q": "Which of the following BEST shows the testware produced as a result of performing test implementation?",
  "qv": "Phương án nào sau đây thể hiện ĐÚNG NHẤT các testware được tạo ra từ hoạt động triển khai kiểm thử (test implementation)?",
  "o": [
   {
    "t": "ii, iv",
    "v": "ii, iv — đúng."
   },
   {
    "t": "iii, v",
    "v": "iii, v — sai, cả hai là đầu ra của thiết kế kiểm thử."
   },
   {
    "t": "i, ii, v",
    "v": "i, ii, v — sai, i thuộc hoàn tất kiểm thử, v thuộc thiết kế kiểm thử."
   },
   {
    "t": "i, iii, iv",
    "v": "i, iii, iv — sai, i thuộc hoàn tất kiểm thử, iii thuộc thiết kế kiểm thử."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Xét từng testware:\n  - i. Báo cáo hoàn tất kiểm thử → đầu ra của hoàn tất kiểm thử (test completion).\n  - ii. Dữ liệu trong cơ sở dữ liệu dùng làm đầu vào và kết quả mong đợi → đó là dữ liệu kiểm thử (test data), đầu ra của triển khai kiểm thử.\n  - iii. Danh sách thành phần để dựng môi trường kiểm thử → là yêu cầu môi trường kiểm thử (test environment requirements), đầu ra của thiết kế kiểm thử (test design).\n  - iv. Chuỗi ca kiểm thử theo thứ tự thực thi → là thủ tục kiểm thử (test procedure), đầu ra của triển khai kiểm thử.\n  - v. Ca kiểm thử → đầu ra của thiết kế kiểm thử.\n  Triển khai kiểm thử tạo ra: thủ tục kiểm thử (iv), script kiểm thử tự động, bộ kiểm thử (test suite), dữ liệu kiểm thử (ii), lịch thực thi kiểm thử, và các thành phần môi trường như stub, driver, simulator, service virtualization. Vậy đáp án là ii, iv.\n• Vì sao B sai: iii và v đều là đầu ra của thiết kế kiểm thử.\n• Vì sao C sai: i thuộc hoàn tất kiểm thử và v thuộc thiết kế kiểm thử.\n• Vì sao D sai: i thuộc hoàn tất kiểm thử và iii thuộc thiết kế kiểm thử.",
  "lo": "FL-1.4.3",
  "k": "K2"
 },
 {
  "n": "6",
  "pre": "",
  "prev": "",
  "q": "Which of the following is MOST likely to describe a task performed by someone in a test management role?",
  "qv": "Phương án nào sau đây CÓ KHẢ NĂNG NHẤT mô tả một tác vụ do người giữ vai trò quản lý kiểm thử (test management role) thực hiện?",
  "o": [
   {
    "t": "Evaluate the test basis and the test object",
    "v": "Đánh giá cơ sở kiểm thử (test basis) và đối tượng kiểm thử — sai, thuộc phân tích kiểm thử, do vai trò kiểm thử (testing role) làm."
   },
   {
    "t": "Define test environment requirements",
    "v": "Xác định yêu cầu môi trường kiểm thử — sai, thuộc thiết kế kiểm thử, do vai trò kiểm thử làm."
   },
   {
    "t": "Assess testability of the test object",
    "v": "Đánh giá khả năng kiểm thử (testability) của đối tượng kiểm thử — sai, thuộc phân tích kiểm thử."
   },
   {
    "t": "Create the test completion report",
    "v": "Lập báo cáo hoàn tất kiểm thử (test completion report) — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Vai trò quản lý kiểm thử chủ yếu phụ trách lập kế hoạch kiểm thử (test planning), giám sát và kiểm soát kiểm thử (test monitoring and control) và hoàn tất kiểm thử (test completion). Báo cáo hoàn tất kiểm thử là đầu ra chính của hoạt động hoàn tất kiểm thử, nên nhiều khả năng do người quản lý kiểm thử lập.\n• Vì sao A sai: Vai trò kiểm thử (testing role) phụ trách các khía cạnh kỹ thuật như phân tích, thiết kế, triển khai và thực thi kiểm thử. Đánh giá cơ sở kiểm thử để tìm khuyết tật và đánh giá đối tượng kiểm thử về testability là tác vụ của phân tích kiểm thử, do vai trò kiểm thử làm.\n• Vì sao B sai: Xác định yêu cầu môi trường kiểm thử là tác vụ của thiết kế kiểm thử, thuộc vai trò kiểm thử.\n• Vì sao C sai: Đánh giá khả năng kiểm thử của đối tượng kiểm thử là tác vụ của phân tích kiểm thử, thuộc vai trò kiểm thử.",
  "lo": "FL-1.4.5",
  "k": "K2"
 },
 {
  "n": "7",
  "pre": "",
  "prev": "",
  "q": "Which of the following is an advantage of the whole team approach?",
  "qv": "Phương án nào sau đây là một lợi ích của cách tiếp cận cả nhóm (whole team approach)?",
  "o": [
   {
    "t": "Improved communication between team members",
    "v": "Cải thiện giao tiếp giữa các thành viên trong nhóm — đúng."
   },
   {
    "t": "Decreased individual accountability for quality",
    "v": "Giảm trách nhiệm cá nhân đối với chất lượng — sai, mỗi cá nhân vẫn chịu trách nhiệm như nhau."
   },
   {
    "t": "Faster deployment of deliverables to the end users",
    "v": "Triển khai sản phẩm đến người dùng cuối nhanh hơn — sai, không nhất thiết."
   },
   {
    "t": "Reduced collaboration with external business users",
    "v": "Giảm cộng tác với người dùng nghiệp vụ bên ngoài — sai, thực tế còn tăng cộng tác."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Cách tiếp cận cả nhóm (whole team approach) thúc đẩy giao tiếp và cộng tác chặt chẽ giữa các thành viên trong nhóm.\n• Vì sao B sai: Cách tiếp cận này đề cao trách nhiệm tập thể về chất lượng, nhưng mỗi thành viên vẫn chịu trách nhiệm về chất lượng như nhau, không hề giảm trách nhiệm cá nhân.\n• Vì sao C sai: Cách tiếp cận cả nhóm nói về cách nhóm làm việc cùng nhau nhằm tạo ra sản phẩm chất lượng cao hơn, chứ không nhất thiết giúp triển khai đến người dùng cuối nhanh hơn.\n• Vì sao D sai: Theo cách tiếp cận này, tester làm việc cùng đại diện nghiệp vụ để tạo kiểm thử chấp nhận (acceptance test); không có chuyện giảm cộng tác với người dùng nghiệp vụ bên ngoài.",
  "lo": "FL-1.5.2",
  "k": "K1"
 },
 {
  "n": "8",
  "pre": "<p>Given the following benefits and drawbacks of the independence of testing:</p><ol type=\"i\"><li>The testers work in a different location from the developers</li><li>Testers question the assumptions programmers make while writing code</li><li>A confrontational dynamic has been established between testers and developers</li><li>Developers have convinced themselves that testers are mostly accountable for quality</li><li>Testers have different biases than those held by the developers</li></ol>",
  "prev": "<p>Cho các lợi ích và bất lợi sau của tính độc lập trong kiểm thử (independence of testing):</p><ol type=\"i\"><li>Tester làm việc ở địa điểm khác với lập trình viên</li><li>Tester chất vấn các giả định mà lập trình viên đặt ra khi viết mã</li><li>Đã hình thành một quan hệ đối đầu giữa tester và lập trình viên</li><li>Lập trình viên tự cho rằng tester chịu trách nhiệm chính về chất lượng</li><li>Tester có những thiên kiến (bias) khác với lập trình viên</li></ol>",
  "q": "Which are MOST likely to be considered benefits?",
  "qv": "Những mục nào CÓ KHẢ NĂNG NHẤT được xem là lợi ích?",
  "o": [
   {
    "t": "i, iv",
    "v": "i, iv — sai, cả hai đều là bất lợi."
   },
   {
    "t": "ii, v",
    "v": "ii, v — đúng."
   },
   {
    "t": "i, iii, iv",
    "v": "i, iii, iv — sai, đây đều là bất lợi."
   },
   {
    "t": "ii, iii, v",
    "v": "ii, iii, v — sai, iii là bất lợi."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Xét từng mục:\n  - i. Lý tưởng là tester và lập trình viên cộng tác chặt chẽ; làm việc tách biệt địa điểm không giúp tăng cộng tác → bất lợi.\n  - ii. Tester và lập trình viên có nền tảng, góc nhìn kỹ thuật và thiên kiến khác nhau, nên tester có thể chất vấn hữu ích các giả định mà các bên đưa ra khi đặc tả và hiện thực hệ thống → lợi ích.\n  - iii. Bất lợi chính của tính độc lập là tester có thể bị cô lập khỏi nhóm phát triển, dẫn đến vấn đề giao tiếp, thiếu cộng tác và có thể thành quan hệ đối đầu, tester bị đổ lỗi cho chậm trễ → bất lợi.\n  - iv. Tester bị cô lập có thể khiến lập trình viên cảm thấy ít trách nhiệm hơn về chất lượng → bất lợi.\n  - v. Lợi ích chính của tính độc lập là tester có khả năng phát hiện các loại sai sót và khuyết tật khác với lập trình viên nhờ nền tảng, góc nhìn và thiên kiến (kể cả thiên kiến nhận thức) khác nhau → lợi ích.\n  Vậy lợi ích là ii và v.\n• Vì sao A sai: i và iv đều là bất lợi.\n• Vì sao C sai: i, iii, iv đều là bất lợi.\n• Vì sao D sai: iii (quan hệ đối đầu) là bất lợi.",
  "lo": "FL-1.5.3",
  "k": "K2"
 },
 {
  "n": "9",
  "pre": "",
  "prev": "",
  "q": "Which of the following is a good testing practice that applies to all software development lifecycles?",
  "qv": "Phương án nào sau đây là một thực hành kiểm thử tốt áp dụng cho mọi vòng đời phát triển phần mềm (SDLC)?",
  "o": [
   {
    "t": "Each test level has specific and distinct test objectives",
    "v": "Mỗi cấp kiểm thử (test level) có các mục tiêu kiểm thử cụ thể và riêng biệt — đúng."
   },
   {
    "t": "Test implementation and execution for a given test level should start during the corresponding development phase",
    "v": "Triển khai và thực thi kiểm thử của một cấp kiểm thử nên bắt đầu trong giai đoạn phát triển tương ứng — sai, đó là phân tích và thiết kế kiểm thử."
   },
   {
    "t": "Testers should start test design as soon as drafts of the relevant work products become available",
    "v": "Tester nên bắt đầu thiết kế kiểm thử ngay khi có bản nháp của sản phẩm công việc liên quan — sai, cần dựa trên cơ sở kiểm thử đã thống nhất."
   },
   {
    "t": "Every dynamic testing activity has a corresponding static testing activity",
    "v": "Mỗi hoạt động kiểm thử động đều có một hoạt động kiểm thử tĩnh tương ứng — sai, không có sự đối xứng này."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Mỗi cấp kiểm thử (test level) kiểm thử một dạng đối tượng kiểm thử khác nhau (ví dụ một thành phần đơn lẻ hay cả hệ thống hoàn chỉnh), nên có mục tiêu kiểm thử cụ thể và riêng biệt; mục tiêu chồng chéo sẽ gây trùng lặp không cần thiết.\n• Vì sao B sai: Thực hành tốt là phân tích và thiết kế kiểm thử cho một cấp kiểm thử nên bắt đầu trong giai đoạn phát triển tương ứng để kiểm thử sớm (ví dụ phân tích và thiết kế kiểm thử chấp nhận bắt đầu trong giai đoạn phân tích yêu cầu). Triển khai kiểm thử thường bắt đầu muộn hơn, còn thực thi kiểm thử diễn ra trong chính cấp kiểm thử đó.\n• Vì sao C sai: Thiết kế kiểm thử nên bắt đầu sớm, nhưng phải dựa trên cơ sở kiểm thử (test basis) đã được thống nhất, không phải bản nháp; nếu không, nhiều công sức có thể bị lãng phí khi thiết kế thay đổi về sau.\n• Vì sao D sai: Mọi hoạt động phát triển đều có hoạt động kiểm thử tương ứng, nhưng không có sự đối xứng giữa kiểm thử động và kiểm thử tĩnh. Có những hoạt động kiểm thử tĩnh (như phân tích tĩnh - static analysis) không có hoạt động kiểm thử động tương ứng rõ ràng.",
  "lo": "FL-2.1.2",
  "k": "K1"
 },
 {
  "n": "10",
  "pre": "",
  "prev": "",
  "q": "Which of the following is an example of a test-first approach to development?",
  "qv": "Phương án nào sau đây là ví dụ về cách tiếp cận phát triển ưu tiên kiểm thử trước (test-first approach)?",
  "o": [
   {
    "t": "Behavior-Driven Development",
    "v": "Phát triển hướng hành vi (Behavior-Driven Development - BDD) — đúng."
   },
   {
    "t": "Test Level Driven Development",
    "v": "Phát triển hướng cấp kiểm thử (Test Level Driven Development) — sai, không phải cách tiếp cận được công nhận."
   },
   {
    "t": "Function-Driven Development",
    "v": "Phát triển hướng chức năng (Function-Driven Development) — sai."
   },
   {
    "t": "Performance-Driven Development",
    "v": "Phát triển hướng hiệu năng (Performance-Driven Development) — sai."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Phát triển hướng hành vi (BDD) là ví dụ nổi tiếng về cách tiếp cận test-first, cùng với TDD và ATDD theo giáo trình.\n• Vì sao B sai: Test Level Driven Development không phải là ví dụ đúng của cách tiếp cận test-first.\n• Vì sao C sai: Function-Driven Development không phải là ví dụ đúng của cách tiếp cận test-first.\n• Vì sao D sai: Performance-Driven Development không phải là ví dụ đúng của cách tiếp cận test-first.",
  "lo": "FL-2.1.3",
  "k": "K1"
 },
 {
  "n": "11",
  "pre": "",
  "prev": "",
  "q": "Which of the following is MOST likely to be a challenge encountered when implementing DevOps?",
  "qv": "Phương án nào sau đây CÓ KHẢ NĂNG NHẤT là một thách thức gặp phải khi triển khai DevOps?",
  "o": [
   {
    "t": "Making sure that non-functional quality characteristics are not overlooked",
    "v": "Đảm bảo các đặc tính chất lượng phi chức năng không bị bỏ sót — sai, DevOps thường làm chúng rõ ràng hơn."
   },
   {
    "t": "Managing continuously changing test environments",
    "v": "Quản lý môi trường kiểm thử liên tục thay đổi — sai, CI/CD giúp môi trường kiểm thử ổn định."
   },
   {
    "t": "The need for more manual testers with suitable experience",
    "v": "Cần thêm nhiều tester thủ công có kinh nghiệm phù hợp — sai, DevOps giảm nhu cầu kiểm thử thủ công."
   },
   {
    "t": "Setting up the test automation as part of the delivery pipeline",
    "v": "Thiết lập tự động hóa kiểm thử như một phần của delivery pipeline — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Triển khai DevOps có nhiều rủi ro và thách thức, bao gồm việc phải định nghĩa và thiết lập delivery pipeline, đưa vào và duy trì các công cụ CI/CD, cũng như xây dựng và duy trì tự động hóa kiểm thử (test automation).\n• Vì sao A sai: DevOps nhìn chung làm tăng khả năng quan sát các đặc tính chất lượng phi chức năng như hiệu năng (performance) và độ tin cậy (reliability), nên đây không phải thách thức.\n• Vì sao B sai: Các quy trình tự động như tích hợp liên tục/chuyển giao liên tục (CI/CD) trong DevOps giúp môi trường kiểm thử ổn định.\n• Vì sao C sai: Các quy trình tự động như CI/CD trong DevOps nhìn chung làm giảm nhu cầu kiểm thử thủ công.",
  "lo": "FL-2.1.4",
  "k": "K2"
 },
 {
  "n": "12",
  "pre": "",
  "prev": "",
  "q": "Which of the following BEST describes retrospectives?",
  "qv": "Phương án nào sau đây mô tả ĐÚNG NHẤT về buổi họp cải tiến (retrospective)?",
  "o": [
   {
    "t": "Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole team approach",
    "v": "Retrospective cho phép thành viên chỉ ra những người chưa đóng góp đầy đủ vào chất lượng theo cách tiếp cận cả nhóm — sai, việc chỉ trích cá nhân không giúp gắn kết nhóm."
   },
   {
    "t": "Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future",
    "v": "Retrospective cho tester cơ hội xác định các hoạt động đã thành công để giữ lại khi thực hiện cải tiến trong tương lai — đúng."
   },
   {
    "t": "Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blameless environment",
    "v": "Retrospective là nơi thành viên nhóm agile được bày tỏ bức xúc về ban quản lý và khách hàng trong môi trường không đổ lỗi — sai."
   },
   {
    "t": "Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration",
    "v": "Retrospective là diễn đàn để thảo luận kế hoạch và quyết định kỹ thuật cho vòng lặp tiếp theo — sai, đó là buổi lập kế hoạch vòng lặp."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Trong buổi retrospective, nhóm thảo luận những khía cạnh nào của dự án đã thành công và nên được giữ lại, những gì có thể cải tiến và cải tiến như thế nào.\n• Vì sao A sai: Lợi ích của retrospective gồm gắn kết nhóm, học hỏi qua chia sẻ vấn đề, và cộng tác tốt hơn giữa lập trình viên và tester thông qua xem xét và cải tiến cách làm việc. Việc chỉ mặt những cá nhân bị cho là chưa đóng góp đủ sẽ không giúp gắn kết và cộng tác.\n• Vì sao C sai: Lợi ích của retrospective dựa trên việc tăng hiệu lực và hiệu quả qua cải tiến quy trình; đó không phải dịp để xả bức xúc hay chỉ trích ban quản lý và khách hàng. Hơn nữa kết quả thường được ghi lại (thường trong báo cáo hoàn tất kiểm thử), nên các bên liên quan khác có thể đọc được.\n• Vì sao D sai: Retrospective thường được tổ chức cuối vòng lặp (iteration), tập trung thảo luận các vấn đề liên quan đến chất lượng đã xảy ra trong vòng lặp hiện tại. Việc lập kế hoạch và ra quyết định kỹ thuật cho vòng lặp sau được thực hiện trong buổi lập kế hoạch vòng lặp (iteration planning) đầu vòng lặp tiếp theo.",
  "lo": "FL-2.1.6",
  "k": "K2"
 },
 {
  "n": "13",
  "pre": "",
  "prev": "",
  "q": "Which of the following tests is MOST likely to be performed as part of functional testing?",
  "qv": "Kiểm thử nào sau đây CÓ KHẢ NĂNG NHẤT được thực hiện như một phần của kiểm thử chức năng (functional testing)?",
  "o": [
   {
    "t": "The test checks that the sort function puts the elements of the list or array in ascending order",
    "v": "Kiểm tra hàm sắp xếp đặt các phần tử của danh sách hoặc mảng theo thứ tự tăng dần — đúng, đây là tính đúng đắn chức năng."
   },
   {
    "t": "The test checks whether the sort function completes sorting within one second of starting",
    "v": "Kiểm tra hàm sắp xếp hoàn tất trong vòng một giây kể từ khi bắt đầu — sai, đây là kiểm thử hiệu năng (phi chức năng)."
   },
   {
    "t": "The test checks how easily the sort function can be changed from sorting ascending to sorting descending",
    "v": "Kiểm tra mức độ dễ dàng thay đổi hàm sắp xếp từ tăng dần sang giảm dần — sai, đây là khả năng bảo trì (phi chức năng)."
   },
   {
    "t": "The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture",
    "v": "Kiểm tra hàm sắp xếp vẫn hoạt động đúng khi chuyển từ kiến trúc 32-bit sang 64-bit — sai, đây là khả năng di chuyển (phi chức năng)."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Kiểm tra hàm sắp xếp có đặt các phần tử theo thứ tự tăng dần hay không là đánh giá tính đúng đắn chức năng (functional correctness), thuộc kiểm thử chức năng.\n• Vì sao B sai: Đánh giá hàm có hoàn tất trong một giây hay không là kiểm thử hiệu năng (performance efficiency) theo yêu cầu phi chức năng, thuộc kiểm thử phi chức năng (non-functional testing).\n• Vì sao C sai: Đánh giá mức độ dễ sửa đổi hàm từ sắp xếp tăng dần sang giảm dần là kiểm thử khả năng sửa đổi (modifiability), một dạng kiểm thử khả năng bảo trì (maintainability) — phi chức năng.\n• Vì sao D sai: Đánh giá hàm vẫn chạy đúng khi chuyển từ 32-bit sang 64-bit là kiểm thử khả năng thích ứng (adaptability), một dạng kiểm thử khả năng di chuyển (portability) — phi chức năng.",
  "lo": "FL-2.2.2",
  "k": "K2"
 },
 {
  "n": "14",
  "pre": "",
  "prev": "",
  "q": "Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system?",
  "qv": "Phương án nào sau đây CÓ KHẢ NĂNG NHẤT là yếu tố kích hoạt (trigger) dẫn đến kiểm thử bảo trì (maintenance testing) cho một hệ thống đổi ngoại tệ?",
  "o": [
   {
    "t": "The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true",
    "v": "Lập trình viên báo rằng việc thay đổi hệ thống đổi ngoại tệ rất khó và tester quyết định kiểm tra điều đó — sai, đó là kiểm thử khả năng bảo trì (maintainability testing)."
   },
   {
    "t": "The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers",
    "v": "Chức năng hoàn tiền của hệ thống bị gỡ bỏ vì không phải lúc nào cũng hoàn đúng số tiền cho khách — đúng, đây là một sửa đổi hệ thống."
   },
   {
    "t": "The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system",
    "v": "Nhóm agile bắt đầu phát triển một user story bổ sung tính năng khách hàng thân thiết mới — sai, đó là kiểm thử tính năng mới và kiểm thử hồi quy."
   },
   {
    "t": "The language support option of the currency exchange system was used to enable both English and local language currency transactions",
    "v": "Tùy chọn hỗ trợ ngôn ngữ được dùng để bật giao dịch bằng cả tiếng Anh và ngôn ngữ địa phương — sai, đây chỉ là cấu hình lại, không phải trigger bảo trì."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Sửa đổi hệ thống (như sửa lỗi hoặc cải tiến) là một yếu tố kích hoạt kiểm thử bảo trì. Gỡ bỏ chức năng hoàn tiền (vì hoàn sai số tiền) là một bản sửa, dẫn đến kiểm thử bảo trì.\n• Vì sao A sai: Nếu tester kiểm tra mức độ dễ thay đổi của hệ thống thì đó là kiểm thử khả năng bảo trì (maintainability testing), không phải kiểm thử bảo trì (maintenance testing), nên không phải trigger.\n• Vì sao C sai: Khi nhóm agile phát triển user story bổ sung tính năng khách hàng thân thiết mới, họ sẽ kiểm thử tính năng mới rồi kiểm thử hồi quy (regression testing). Trường hợp này không cần kiểm thử bảo trì.\n• Vì sao D sai: Cấu hình lại hệ thống để hỗ trợ cả tiếng Anh và ngôn ngữ địa phương không phải là sửa đổi hệ thống, thay đổi môi trường vận hành hay loại bỏ hệ thống (system retirement) — ba nhóm trigger của kiểm thử bảo trì.",
  "lo": "FL-2.3.1",
  "k": "K2"
 },
 {
  "n": "15",
  "pre": "",
  "prev": "",
  "q": "Which of the following CANNOT be examined by static testing?",
  "qv": "Đối tượng nào sau đây KHÔNG THỂ được kiểm tra bằng kiểm thử tĩnh (static testing)?",
  "o": [
   {
    "t": "Contract",
    "v": "Hợp đồng — sai, con người đọc hiểu được nên có thể review."
   },
   {
    "t": "Test plan",
    "v": "Kế hoạch kiểm thử (test plan) — sai, có thể review."
   },
   {
    "t": "Encrypted code",
    "v": "Mã đã được mã hóa (encrypted code) — đúng."
   },
   {
    "t": "Test charter",
    "v": "Bản điều lệ kiểm thử (test charter) — sai, có thể review."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Hầu hết sản phẩm công việc đều có thể được kiểm tra bằng một hình thức kiểm thử tĩnh nào đó; tuy nhiên kiểm thử tĩnh không phù hợp với sản phẩm quá phức tạp để con người diễn giải và cũng không nên phân tích bằng công cụ. Mã đã mã hóa quá phức tạp với con người, và nếu được mã hóa đúng cách thì hầu hết công cụ cũng không phân tích được.\n• Vì sao A sai: Hợp đồng phải được con người đọc hiểu, nên có thể được review — một hình thức kiểm thử tĩnh.\n• Vì sao B sai: Kế hoạch kiểm thử phải được con người đọc hiểu, nên có thể được review.\n• Vì sao D sai: Test charter phải được con người đọc hiểu, nên có thể được review.",
  "lo": "FL-3.1.1",
  "k": "K1"
 },
 {
  "n": "16",
  "pre": "",
  "prev": "",
  "q": "Which of the following statements about the value of static testing is CORRECT?",
  "qv": "Phát biểu nào sau đây về giá trị của kiểm thử tĩnh (static testing) là ĐÚNG?",
  "o": [
   {
    "t": "The defect types found by static testing are different from the defect types that can be found by dynamic testing",
    "v": "Các loại khuyết tật tìm được bằng kiểm thử tĩnh khác hoàn toàn với các loại tìm được bằng kiểm thử động — sai, có những loại khuyết tật cả hai đều tìm được."
   },
   {
    "t": "Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types",
    "v": "Kiểm thử động phát hiện được mọi loại khuyết tật mà kiểm thử tĩnh tìm được, cộng thêm một số loại khác — sai."
   },
   {
    "t": "Dynamic testing can identify some of the defects that can be found by static testing but not all of them",
    "v": "Kiểm thử động có thể phát hiện một số khuyết tật mà kiểm thử tĩnh tìm được, nhưng không phải tất cả — đúng."
   },
   {
    "t": "Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types",
    "v": "Kiểm thử tĩnh phát hiện được mọi loại khuyết tật mà kiểm thử động tìm được, cộng thêm một số loại khác — sai."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Có ba nhóm khuyết tật:\n  - Chỉ kiểm thử tĩnh phát hiện được: ví dụ mã không thể chạy tới (unreachable code), mẫu thiết kế không được hiện thực như mong muốn, khuyết tật trong sản phẩm công việc không thực thi được.\n  - Cả hai đều phát hiện được: ví dụ một khuyết tật lập trình mà người review thấy được khi review mã, đồng thời gây sai sót quan sát được khi kiểm thử động.\n  - Chỉ kiểm thử động phát hiện được: ví dụ vấn đề hiệu năng hoặc bộ nhớ chỉ quan sát được khi chạy mã/hệ thống.\n  Như vậy kiểm thử động tìm được một phần (vùng giao) chứ không phải tất cả khuyết tật mà kiểm thử tĩnh tìm được.\n• Vì sao A sai: Hai tập loại khuyết tật có phần giao nhau, không khác nhau hoàn toàn.\n• Vì sao B sai: Kiểm thử động không thể tìm các khuyết tật chỉ kiểm thử tĩnh tìm được (như unreachable code, khuyết tật trong tài liệu).\n• Vì sao D sai: Kiểm thử tĩnh không thể tìm các khuyết tật chỉ lộ ra khi chạy (như vấn đề hiệu năng, bộ nhớ).",
  "lo": "FL-3.1.2",
  "k": "K2"
 },
 {
  "n": "17",
  "pre": "<p>Given the following descriptions of review activities:</p><ol><li>Detected anomalies are deliberated upon, and determinations are reached regarding their status, ownership, and any further steps needed</li><li>Defects are recorded, and any needed updates are addressed prior to the acceptance of the work product</li><li>Reviewers employ techniques to come up with suggestions and questions about the work product and to spot anomalies</li><li>The objective of the review and its schedule are established to ensure a focused and efficient review</li><li>Participants are provided with access to the item being reviewed</li></ol>",
  "prev": "<p>Cho các mô tả sau về các hoạt động review:</p><ol><li>Các bất thường (anomaly) đã phát hiện được thảo luận, và đưa ra quyết định về trạng thái, người chịu trách nhiệm và các bước tiếp theo cần thiết</li><li>Khuyết tật được ghi nhận, và các cập nhật cần thiết được xử lý trước khi sản phẩm công việc được chấp nhận</li><li>Người review áp dụng các kỹ thuật để đưa ra góp ý, câu hỏi về sản phẩm công việc và phát hiện bất thường</li><li>Mục tiêu và lịch trình của buổi review được xác lập để đảm bảo review tập trung và hiệu quả</li><li>Người tham gia được cấp quyền truy cập vào hạng mục được review</li></ol>",
  "q": "Which of the following is the CORRECT sequence in the review process of the activities that correspond to the descriptions?",
  "qv": "Phương án nào sau đây là trình tự ĐÚNG trong quy trình review của các hoạt động tương ứng với các mô tả trên?",
  "o": [
   {
    "t": "4 – 3 – 5 – 2 – 1",
    "v": "4 – 3 – 5 – 2 – 1 — sai."
   },
   {
    "t": "4 – 5 – 3 – 1 – 2",
    "v": "4 – 5 – 3 – 1 – 2 — đúng."
   },
   {
    "t": "5 – 4 – 1 – 3 – 2",
    "v": "5 – 4 – 1 – 3 – 2 — sai."
   },
   {
    "t": "5 – 4 – 3 – 2 – 1",
    "v": "5 – 4 – 3 – 2 – 1 — sai."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Ánh xạ từng mô tả sang hoạt động review:\n  - 1 → Trao đổi và phân tích (communication and analysis)\n  - 2 → Sửa chữa và báo cáo (fixing and reporting)\n  - 3 → Review cá nhân (individual review)\n  - 4 → Lập kế hoạch (planning)\n  - 5 → Khởi động review (review initiation)\n  Quy trình review chung theo ISO/IEC 20246 có thứ tự: Lập kế hoạch (4) → Khởi động review (5) → Review cá nhân (3) → Trao đổi và phân tích (1) → Sửa chữa và báo cáo (2). Vậy trình tự là 4 – 5 – 3 – 1 – 2.\n• Vì sao A sai: Đặt review cá nhân (3) trước khởi động review (5) và đảo thứ tự 2, 1.\n• Vì sao C sai: Bắt đầu bằng khởi động review (5) trước lập kế hoạch (4), và trao đổi phân tích (1) lại đứng trước review cá nhân (3).\n• Vì sao D sai: Bắt đầu bằng 5 trước 4, và sửa chữa báo cáo (2) đứng trước trao đổi phân tích (1).",
  "lo": "FL-3.2.2",
  "k": "K2"
 },
 {
  "n": "18",
  "pre": "",
  "prev": "",
  "q": "Which participant in the review process is responsible for ensuring that the review meetings run effectively and that everyone at the meetings can voice their opinions freely?",
  "qv": "Người tham gia nào trong quy trình review chịu trách nhiệm đảm bảo các buổi họp review diễn ra hiệu quả và mọi người trong buổi họp đều có thể tự do nêu ý kiến?",
  "o": [
   {
    "t": "Manager",
    "v": "Người quản lý (manager) — sai, quyết định cái gì cần review và phân bổ nguồn lực."
   },
   {
    "t": "Moderator",
    "v": "Người điều phối (moderator) — đúng."
   },
   {
    "t": "Chairperson",
    "v": "Chủ tọa (chairperson) — sai, không phải vai trò được công nhận trong review."
   },
   {
    "t": "Review Leader",
    "v": "Trưởng nhóm review (review leader) — sai, chịu trách nhiệm tổng thể quy trình review."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Người điều phối (moderator, còn gọi là facilitator) chịu trách nhiệm đảm bảo các buổi họp review diễn ra hiệu quả, bao gồm quản lý thời gian, hòa giải thảo luận và tạo môi trường an toàn để mọi người tự do nêu ý kiến.\n• Vì sao A sai: Người quản lý (manager) chịu trách nhiệm quyết định cái gì cần review và phân bổ nguồn lực như nhân sự và thời gian.\n• Vì sao C sai: Chủ tọa (chairperson) không phải là vai trò được công nhận trong review.\n• Vì sao D sai: Trưởng nhóm review (review leader) chịu trách nhiệm tổng thể về quy trình review, như chọn thành viên, lên lịch họp review và đảm bảo review hoàn thành thành công.",
  "lo": "FL-3.2.3",
  "k": "K1"
 },
 {
  "n": "19",
  "pre": "<p>You perform system testing of an e-commerce web application and are provided with the following requirement:</p><p>REQ 05-017. If the total cost of purchases exceeds $100, the customer gets a 5% discount on subsequent purchases. Otherwise, the customer does not receive a discount.</p>",
  "prev": "<p>Bạn thực hiện kiểm thử hệ thống (system testing) cho một ứng dụng web thương mại điện tử và được cung cấp yêu cầu sau:</p><p>REQ 05-017. Nếu tổng giá trị mua hàng vượt quá $100, khách hàng được giảm giá 5% cho các lần mua tiếp theo. Ngược lại, khách hàng không được giảm giá.</p>",
  "q": "Which test techniques will be MOST helpful in designing test cases based on this requirement?",
  "qv": "Kỹ thuật kiểm thử nào sẽ HỮU ÍCH NHẤT để thiết kế ca kiểm thử dựa trên yêu cầu này?",
  "o": [
   {
    "t": "White-box test techniques",
    "v": "Kỹ thuật kiểm thử hộp trắng (white-box) — sai, yêu cầu không nói về cấu trúc bên trong."
   },
   {
    "t": "Black-box test techniques",
    "v": "Kỹ thuật kiểm thử hộp đen (black-box) — đúng."
   },
   {
    "t": "Experience-based test techniques",
    "v": "Kỹ thuật kiểm thử dựa trên kinh nghiệm (experience-based) — sai, dùng được nhưng kém phù hợp hơn hộp đen."
   },
   {
    "t": "Risk-based test techniques",
    "v": "Kỹ thuật kiểm thử dựa trên rủi ro (risk-based) — sai, không phải loại kỹ thuật kiểm thử được công nhận."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Tài liệu là một yêu cầu đặc tả hành vi mong muốn của đối tượng kiểm thử, nên kỹ thuật kiểm thử hộp đen (ví dụ phân tích giá trị biên - Boundary Value Analysis, hoặc kiểm thử bảng quyết định - Decision Table Testing) là phù hợp nhất.\n• Vì sao A sai: Yêu cầu không đề cập đến cấu trúc bên trong của đối tượng kiểm thử mà chỉ mô tả hành vi mong muốn, nên kỹ thuật hộp trắng không hữu ích.\n• Vì sao C sai: Có thể dùng kỹ thuật dựa trên kinh nghiệm, nhưng kỹ thuật hộp đen phù hợp hơn. Yêu cầu mô tả một quy tắc nghiệp vụ chính xác, và cụm từ 'exceeds $100' (vượt quá $100) gợi ý có biên phân vùng tương đương quan trọng cần kiểm thử bằng phân tích giá trị biên.\n• Vì sao D sai: 'Kỹ thuật kiểm thử dựa trên rủi ro' không phải là một loại kỹ thuật kiểm thử được công nhận (kiểm thử dựa trên rủi ro là một cách tiếp cận/chiến lược, không phải kỹ thuật thiết kế ca kiểm thử).",
  "lo": "FL-4.1.1",
  "k": "K2"
 },
 {
  "n": "20",
  "pre": "<p>The system for selling cinema tickets calculates the discount type based on the client’s birth year (BY) and on the current year (CY) as follows:</p><p>Let D be the difference between CY and BY, that is, D = CY – BY</p><ul><li>If D &lt; 0 then print the error message “birth year cannot be greater than current year”</li><li>If 0 ≤ D &lt; 18 then apply the student discount</li><li>If 18 ≤ D &lt; 65 then apply no discount</li><li>If D ≥ 65 then apply the pensioner discount</li></ul><p>Your test suite already contains two test cases:</p><ul><li>BY = 1990, CY = 2020, expected result: no discount</li><li>BY = 2030, CY = 2029, expected result: print the error message</li></ul>",
  "prev": "<p>Hệ thống bán vé xem phim tính loại giảm giá dựa trên năm sinh của khách hàng (BY) và năm hiện tại (CY) như sau:</p><p>Gọi D là hiệu giữa CY và BY, tức là D = CY – BY</p><ul><li>Nếu D &lt; 0 thì in thông báo lỗi “năm sinh không được lớn hơn năm hiện tại”</li><li>Nếu 0 ≤ D &lt; 18 thì áp dụng giảm giá sinh viên (student discount)</li><li>Nếu 18 ≤ D &lt; 65 thì không giảm giá</li><li>Nếu D ≥ 65 thì áp dụng giảm giá người hưu trí (pensioner discount)</li></ul><p>Bộ kiểm thử (test suite) của bạn đã có sẵn hai ca kiểm thử:</p><ul><li>BY = 1990, CY = 2020, kết quả mong đợi: không giảm giá</li><li>BY = 2030, CY = 2029, kết quả mong đợi: in thông báo lỗi</li></ul>",
  "q": "Which of the following test data sets should be added to achieve full valid equivalence partitioning coverage for the discount type?",
  "qv": "Nên bổ sung những bộ dữ liệu kiểm thử nào sau đây để đạt độ bao phủ đầy đủ các phân vùng tương đương hợp lệ (valid equivalence partitioning coverage) cho loại giảm giá?",
  "o": [
   {
    "t": "BY = 2001, CY = 2065",
    "v": "BY = 2001, CY = 2065 — sai, D = 64 thuộc phân vùng 'không giảm giá' đã được bao phủ."
   },
   {
    "t": "BY = 1900, CY = 1965",
    "v": "BY = 1900, CY = 1965 — đúng, D = 65 thuộc phân vùng 'giảm giá hưu trí' chưa được bao phủ."
   },
   {
    "t": "BY = 1965, CY = 1900",
    "v": "BY = 1965, CY = 1900 — sai, D = –65 thuộc phân vùng 'thông báo lỗi' đã được bao phủ."
   },
   {
    "t": "BY = 2011, CY = 2029",
    "v": "BY = 2011, CY = 2029 — sai, D = 18 thuộc phân vùng 'không giảm giá' đã được bao phủ."
   },
   {
    "t": "BY = 2000, CY = 2000",
    "v": "BY = 2000, CY = 2000 — đúng, D = 0 thuộc phân vùng 'giảm giá sinh viên' chưa được bao phủ."
   }
  ],
  "a": [
   1,
   4
  ],
  "e": "• Phân tích: Có 4 phân vùng theo D: D < 0 (lỗi), 0 ≤ D < 18 (sinh viên), 18 ≤ D < 65 (không giảm giá), D ≥ 65 (hưu trí). Hai ca có sẵn: 2020 – 1990 = 30 → 'không giảm giá'; 2029 – 2030 = –1 → 'thông báo lỗi'. Còn hai phân vùng chưa được bao phủ: 'giảm giá sinh viên' và 'giảm giá hưu trí'.\n• Vì sao B đúng: D = 1965 – 1900 = 65 ≥ 65 → phân vùng 'giảm giá hưu trí', chưa được bao phủ.\n• Vì sao E đúng: D = 2000 – 2000 = 0, thỏa 0 ≤ D < 18 → phân vùng 'giảm giá sinh viên', chưa được bao phủ.\n• Vì sao A sai: D = 2065 – 2001 = 64 → thuộc phân vùng 'không giảm giá' đã được bao phủ.\n• Vì sao C sai: D = 1900 – 1965 = –65 → thuộc phân vùng 'thông báo lỗi' đã được bao phủ.\n• Vì sao D sai: D = 2029 – 2011 = 18 → thuộc phân vùng 'không giảm giá' đã được bao phủ.",
  "lo": "FL-4.2.1",
  "k": "K3"
 },
 {
  "n": "21",
  "pre": "<p>You are testing a temperature control system for a horticultural cold storage facility. The system receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and 2 degrees inclusive, the system displays the message “temperature OK”. For lower temperatures, the system displays the message “temperature too low” and for higher temperatures it displays the message “temperature too high”.</p>",
  "prev": "<p>Bạn đang kiểm thử một hệ thống điều khiển nhiệt độ cho kho lạnh bảo quản nông sản. Hệ thống nhận đầu vào là nhiệt độ (số nguyên độ C). Nếu nhiệt độ nằm trong khoảng từ 0 đến 2 độ (bao gồm cả hai đầu), hệ thống hiển thị thông báo “temperature OK”. Với nhiệt độ thấp hơn, hệ thống hiển thị “temperature too low”, còn với nhiệt độ cao hơn thì hiển thị “temperature too high”.</p>",
  "q": "Using two-value boundary value analysis, which of the following sets of test inputs provides the highest level of boundary value coverage?",
  "qv": "Áp dụng phân tích giá trị biên hai giá trị (2-value boundary value analysis — BVA), tập đầu vào kiểm thử nào sau đây đạt mức độ bao phủ giá trị biên (boundary value coverage) cao nhất?",
  "o": [
   {
    "t": "–1, 3",
    "v": "–1, 3 — sai, thiếu hai biên 0 và 2 của phân vùng hợp lệ (chỉ đạt 2/4)."
   },
   {
    "t": "0, 2",
    "v": "0, 2 — sai, thiếu biên –1 và 3 của hai phân vùng không hợp lệ (chỉ đạt 2/4)."
   },
   {
    "t": "–1, 0, 2, 3",
    "v": "–1, 0, 2, 3 — đúng, phủ đủ cả 4 giá trị biên (100%)."
   },
   {
    "t": "–2, 0, 2, 4",
    "v": "–2, 0, 2, 4 — sai, –2 và 4 không phải giá trị biên (chỉ đạt 2/4)."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Xác định các phân vùng tương đương (equivalence partition):\n  - “too low”: {…, –2, –1} → biên là –1\n  - “OK”: {0, 1, 2} → biên là 0 và 2\n  - “too high”: {3, 4, …} → biên là 3\nVới BVA 2 giá trị, cần phủ mọi giá trị biên của mọi phân vùng: –1, 0, 2, 3 (tổng 4 giá trị biên). Tập –1, 0, 2, 3 phủ đủ 4/4 = 100%.\n• Vì sao A sai: Chỉ có –1 và 3 → 2/4 = 50%, thiếu 0 và 2.\n• Vì sao B sai: Chỉ có 0 và 2 → 2/4 = 50%, thiếu –1 và 3.\n• Vì sao D sai: –2 và 4 không phải giá trị biên (chúng nằm bên trong phân vùng), nên chỉ có 0 và 2 được tính → 2/4 = 50%.",
  "lo": "FL-4.2.2",
  "k": "K3"
 },
 {
  "n": "22",
  "pre": "<p>You are designing test cases based on the following decision table.</p><table><tr><th></th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th></tr><tr><td>C1: Age</td><td>0-18</td><td>19-65</td><td>19-65</td><td>&gt;65</td><td>0-18</td><td>19-65</td><td>&gt;65</td></tr><tr><td>C2: Experience</td><td>-</td><td>0-4</td><td>&gt;4</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>C3: Registered?</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>YES</td><td>YES</td><td>YES</td></tr><tr><td>Category</td><td>A</td><td>A</td><td>B</td><td>B</td><td>B</td><td>D</td><td>C</td></tr></table><p>So far you have designed the following test cases:</p><ul><li>TC1: 19-year-old, unregistered man with no experience; expected result: category A</li><li>TC2: 65-year-old, unregistered woman with 5 years of experience; expected result: category B</li><li>TC3: 66-year-old, registered man with no experience; expected result: category C</li><li>TC4: 65-year-old, registered woman with 4 years of experience; expected result: category D</li></ul>",
  "prev": "<p>Bạn đang thiết kế ca kiểm thử (test case) dựa trên bảng quyết định (decision table) sau.</p><table><tr><th></th><th>R1</th><th>R2</th><th>R3</th><th>R4</th><th>R5</th><th>R6</th><th>R7</th></tr><tr><td>C1: Tuổi</td><td>0-18</td><td>19-65</td><td>19-65</td><td>&gt;65</td><td>0-18</td><td>19-65</td><td>&gt;65</td></tr><tr><td>C2: Kinh nghiệm (năm)</td><td>-</td><td>0-4</td><td>&gt;4</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td>C3: Đã đăng ký?</td><td>NO</td><td>NO</td><td>NO</td><td>NO</td><td>YES</td><td>YES</td><td>YES</td></tr><tr><td>Hạng (Category)</td><td>A</td><td>A</td><td>B</td><td>B</td><td>B</td><td>D</td><td>C</td></tr></table><p>Đến giờ bạn đã thiết kế các ca kiểm thử sau:</p><ul><li>TC1: nam 19 tuổi, chưa đăng ký, không có kinh nghiệm; kết quả mong đợi: hạng A</li><li>TC2: nữ 65 tuổi, chưa đăng ký, 5 năm kinh nghiệm; kết quả mong đợi: hạng B</li><li>TC3: nam 66 tuổi, đã đăng ký, không có kinh nghiệm; kết quả mong đợi: hạng C</li><li>TC4: nữ 65 tuổi, đã đăng ký, 4 năm kinh nghiệm; kết quả mong đợi: hạng D</li></ul>",
  "q": "Which of the following test cases, when added to the existing set of test cases, will increase the decision table coverage?",
  "qv": "Ca kiểm thử nào sau đây, khi được thêm vào tập ca kiểm thử hiện có, sẽ làm tăng độ bao phủ bảng quyết định (decision table coverage)?",
  "o": [
   {
    "t": "66-year-old, unregistered man with no experience; expected result: category B",
    "v": "Nam 66 tuổi, chưa đăng ký, không kinh nghiệm; kết quả mong đợi: hạng B — đúng, khớp R4 chưa được phủ."
   },
   {
    "t": "55-year-old, unregistered woman with 2 years of experience; expected result: category A",
    "v": "Nữ 55 tuổi, chưa đăng ký, 2 năm kinh nghiệm; kết quả mong đợi: hạng A — sai, khớp R2 đã được TC1 phủ."
   },
   {
    "t": "19-year-old, registered woman with 5 years of experience; expected result: category D",
    "v": "Nữ 19 tuổi, đã đăng ký, 5 năm kinh nghiệm; kết quả mong đợi: hạng D — sai, khớp R6 đã được TC4 phủ."
   },
   {
    "t": "No additional test case can increase the already achieved decision table coverage",
    "v": "Không ca kiểm thử bổ sung nào có thể tăng độ bao phủ đã đạt — sai, còn R1, R4, R5 chưa phủ."
   }
  ],
  "a": 0,
  "e": "• Ánh xạ các ca kiểm thử hiện có vào cột (rule) của bảng:\n  - TC1 (19 tuổi, NO, 0 năm KN) → R2\n  - TC2 (65 tuổi, NO, 5 năm KN) → R3\n  - TC3 (66 tuổi, YES) → R7\n  - TC4 (65 tuổi, YES) → R6\n  → Đã phủ 4/7 cột; còn R1, R4, R5 chưa phủ.\n• Vì sao A đúng: 66 tuổi (>65), chưa đăng ký (NO) → khớp R4 (hạng B), là cột chưa được phủ, nên độ bao phủ tăng từ 4/7 lên 5/7.\n• Vì sao B sai: 55 tuổi (19-65), NO, 2 năm KN (0-4) → khớp R2, đã được TC1 phủ, không tăng độ bao phủ.\n• Vì sao C sai: 19 tuổi (19-65), YES → khớp R6, đã được TC4 phủ, không tăng độ bao phủ.\n• Vì sao D sai: Mới chỉ phủ 4/7 cột; vẫn có thể tăng độ bao phủ bằng ca kiểm thử cho R1, R4 hoặc R5.",
  "lo": "FL-4.2.3",
  "k": "K3"
 },
 {
  "n": "23",
  "pre": "<p>You are applying state transition testing to the hotel room reservation system modeled by the following state transition table, with 4 states and 5 different events:</p><table><tr><th rowspan=\"2\">State</th><th colspan=\"5\">Events</th></tr><tr><th>Available</th><th>NotAvailable</th><th>ChangeRoom</th><th>Cancel</th><th>Pay</th></tr><tr><td>S1: Requesting</td><td>S2</td><td>S3</td><td></td><td></td><td></td></tr><tr><td>S2: Confirmed</td><td></td><td></td><td>S1</td><td>S4</td><td>S4</td></tr><tr><td>S3: Waiting list</td><td>S2</td><td></td><td></td><td>S4</td><td></td></tr><tr><td>S4: End</td><td></td><td></td><td></td><td></td><td></td></tr></table>",
  "prev": "<p>Bạn đang áp dụng kiểm thử chuyển trạng thái (state transition testing) cho hệ thống đặt phòng khách sạn, được mô hình hóa bằng bảng chuyển trạng thái (state transition table) sau, gồm 4 trạng thái và 5 sự kiện khác nhau:</p><table><tr><th rowspan=\"2\">Trạng thái</th><th colspan=\"5\">Sự kiện (Events)</th></tr><tr><th>Available</th><th>NotAvailable</th><th>ChangeRoom</th><th>Cancel</th><th>Pay</th></tr><tr><td>S1: Requesting (Đang yêu cầu)</td><td>S2</td><td>S3</td><td></td><td></td><td></td></tr><tr><td>S2: Confirmed (Đã xác nhận)</td><td></td><td></td><td>S1</td><td>S4</td><td>S4</td></tr><tr><td>S3: Waiting list (Danh sách chờ)</td><td>S2</td><td></td><td></td><td>S4</td><td></td></tr><tr><td>S4: End (Kết thúc)</td><td></td><td></td><td></td><td></td><td></td></tr></table>",
  "q": "Assuming all test cases start in the ‘Requesting’ state, which of the following test cases, represented as sequences of events, achieves the highest valid transitions coverage?",
  "qv": "Giả sử mọi ca kiểm thử đều bắt đầu ở trạng thái ‘Requesting’, ca kiểm thử nào sau đây (biểu diễn dưới dạng chuỗi sự kiện) đạt độ bao phủ chuyển trạng thái hợp lệ (valid transitions coverage) cao nhất?",
  "o": [
   {
    "t": "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel",
    "v": "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel — sai, chỉ phủ 4/7 (NotAvailable S1→S3 lặp lại)."
   },
   {
    "t": "Available, ChangeRoom, NotAvailable, Available, Pay",
    "v": "Available, ChangeRoom, NotAvailable, Available, Pay — đúng, phủ 5/7 chuyển trạng thái hợp lệ."
   },
   {
    "t": "Available, ChangeRoom, Available, ChangeRoom, NotAvailable",
    "v": "Available, ChangeRoom, Available, ChangeRoom, NotAvailable — sai, chỉ phủ 3/7."
   },
   {
    "t": "NotAvailable, Cancel, ChangeRoom, Available, Pay",
    "v": "NotAvailable, Cancel, ChangeRoom, Available, Pay — sai, không khả thi vì sau Cancel hệ thống đã ở trạng thái End."
   }
  ],
  "a": 1,
  "e": "• Bảng có 7 chuyển trạng thái hợp lệ: T1 S1–Available→S2, T2 S1–NotAvailable→S3, T3 S2–ChangeRoom→S1, T4 S2–Cancel→S4, T5 S2–Pay→S4, T6 S3–Available→S2, T7 S3–Cancel→S4.\n• Vì sao B đúng: S1 –Available→ S2 (T1), –ChangeRoom→ S1 (T3), –NotAvailable→ S3 (T2), –Available→ S2 (T6), –Pay→ S4 (T5). Hai sự kiện Available ứng với hai chuyển khác nhau (S1→S2 và S3→S2) → 5 chuyển khác nhau = 5/7, cao nhất.\n• Vì sao A sai: S1 –NotAvailable→ S3 (T2), –Available→ S2 (T6), –ChangeRoom→ S1 (T3), –NotAvailable→ S3 (T2 lặp lại), –Cancel→ S4 (T7) → 4 chuyển khác nhau = 4/7.\n• Vì sao C sai: S1 –Available→ S2 (T1), –ChangeRoom→ S1 (T3), –Available→ S2 (T1 lặp), –ChangeRoom→ S1 (T3 lặp), –NotAvailable→ S3 (T2) → 3 chuyển khác nhau = 3/7.\n• Vì sao D sai: S1 –NotAvailable→ S3, –Cancel→ S4 (End). Tại S4 không còn chuyển hợp lệ nào, nên ChangeRoom, Available, Pay không thể thực hiện — ca kiểm thử không khả thi.",
  "lo": "FL-4.2.4",
  "k": "K3"
 },
 {
  "n": "24",
  "pre": "<p>Your test suite S for a program P achieves 100% statement coverage. It consists of three test cases, each of which achieves 50% statement coverage.</p>",
  "prev": "<p>Bộ kiểm thử (test suite) S của bạn cho chương trình P đạt 100% độ bao phủ câu lệnh (statement coverage). Bộ này gồm ba ca kiểm thử, mỗi ca đạt 50% độ bao phủ câu lệnh.</p>",
  "q": "Which of the following statements is CORRECT?",
  "qv": "Phát biểu nào sau đây là ĐÚNG?",
  "o": [
   {
    "t": "Executing S will cause all possible failures in P",
    "v": "Thực thi S sẽ gây ra mọi sai sót (failure) có thể có trong P — sai, câu lệnh lỗi được chạy chưa chắc gây ra failure."
   },
   {
    "t": "S achieves 100% branch coverage for P",
    "v": "S đạt 100% độ bao phủ nhánh (branch coverage) cho P — sai, 100% câu lệnh không bảo đảm 100% nhánh."
   },
   {
    "t": "Every executable statement in P containing a defect has been run at least once during the execution of S",
    "v": "Mọi câu lệnh thực thi được trong P có chứa khuyết tật đều đã được chạy ít nhất một lần khi thực thi S — đúng."
   },
   {
    "t": "After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage",
    "v": "Sau khi bỏ một ca kiểm thử khỏi S, hai ca còn lại vẫn đạt 100% độ bao phủ câu lệnh — sai, ca bị bỏ có thể là ca duy nhất phủ một số câu lệnh."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: 100% statement coverage nghĩa là mọi câu lệnh thực thi được đều đã được chạy ít nhất một lần — bao gồm cả những câu lệnh chứa khuyết tật.\n• Vì sao A sai: Một câu lệnh có khuyết tật khi chạy không nhất thiết gây ra failure. Ví dụ x := y / z chỉ gây failure khi z = 0.\n• Vì sao B sai: 100% statement coverage không bảo đảm 100% branch coverage. Ví dụ với đoạn mã “1. IF (x=0) THEN 2. A; 3. ENDIF”, ca kiểm thử x=0 phủ hết câu lệnh nhưng không phủ nhánh từ 1 sang 3 (khi điều kiện sai).\n• Vì sao D sai: Ca kiểm thử bị loại bỏ có thể là ca duy nhất phủ một số câu lệnh mà hai ca còn lại không phủ, khi đó hai ca còn lại sẽ không đạt 100%.",
  "lo": "FL-4.3.1",
  "k": "K2"
 },
 {
  "n": "25",
  "pre": "",
  "prev": "",
  "q": "Why does white-box testing facilitate defect detection even when the software specification is vague, outdated or incomplete?",
  "qv": "Vì sao kiểm thử hộp trắng (white-box testing) giúp phát hiện khuyết tật ngay cả khi đặc tả phần mềm mơ hồ, lỗi thời hoặc không đầy đủ?",
  "o": [
   {
    "t": "Test cases are designed based on the structure of the test object rather than the specification",
    "v": "Ca kiểm thử được thiết kế dựa trên cấu trúc của đối tượng kiểm thử thay vì đặc tả — đúng."
   },
   {
    "t": "For each white-box test technique the coverage can be well-defined and easily measured",
    "v": "Với mỗi kỹ thuật hộp trắng, độ bao phủ được định nghĩa rõ và dễ đo — sai, đây không phải lý do."
   },
   {
    "t": "White-box test techniques are very well designed to detect omissions in the requirements",
    "v": "Kỹ thuật hộp trắng rất phù hợp để phát hiện thiếu sót trong yêu cầu — sai, hộp trắng khó phát hiện chức năng bị bỏ sót."
   },
   {
    "t": "White-box test techniques can be used in both static testing and dynamic testing",
    "v": "Kỹ thuật hộp trắng dùng được cho cả kiểm thử tĩnh và kiểm thử động — đúng về nội dung nhưng không liên quan đến câu hỏi."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Điểm mạnh chung của mọi kỹ thuật hộp trắng là toàn bộ phần cài đặt (implementation) của phần mềm được xem xét khi kiểm thử, nên vẫn phát hiện được khuyết tật dù đặc tả mơ hồ, lỗi thời hay thiếu. Ví dụ: hộp trắng có thể phát hiện một tính năng thừa được thêm vào mã (vô tình hay cố ý) mà kiểm thử hộp đen không phát hiện được.\n• Vì sao B sai: Việc độ bao phủ có thể được định nghĩa chính xác không phải là lý do; mức độ bao phủ đạt được mới có ảnh hưởng, chứ không phải khả năng đo nó.\n• Vì sao C sai: Nếu phần mềm không cài đặt một hoặc nhiều yêu cầu, kiểm thử hộp trắng khó phát hiện các khuyết tật do thiếu sót (omission) này, vì không có mã nào để phân tích.\n• Vì sao D sai: Phát biểu này đúng nhưng không liên quan — khả năng dùng cho cả kiểm thử tĩnh lẫn động không giải thích được vì sao hộp trắng phát hiện khuyết tật khi đặc tả kém.",
  "lo": "FL-4.3.3",
  "k": "K2"
 },
 {
  "n": "26",
  "pre": "",
  "prev": "",
  "q": "Which of the following is NOT anticipated by the tester while applying error guessing?",
  "qv": "Điều nào sau đây KHÔNG được tester dự đoán khi áp dụng kỹ thuật đoán lỗi (error guessing)?",
  "o": [
   {
    "t": "The developer misunderstood the formula in the user story for calculating the interest",
    "v": "Lập trình viên hiểu sai công thức tính lãi trong user story — sai, đây là dự đoán lỗi (error) của lập trình viên."
   },
   {
    "t": "The developer wrote “FA = A*(1+IR^N)” instead of “FA = A*(1+IR)^N” in the source code",
    "v": "Lập trình viên viết “FA = A*(1+IR^N)” thay vì “FA = A*(1+IR)^N” trong mã nguồn — sai, đây là dự đoán khuyết tật (defect)."
   },
   {
    "t": "The developer missed the seminar on new compound interest rate legislation",
    "v": "Lập trình viên bỏ lỡ buổi hội thảo về luật lãi kép mới — đúng, đây là nguyên nhân gốc, không phải error/defect/failure."
   },
   {
    "t": "The accuracy of the interest calculated by the system is not precise enough",
    "v": "Độ chính xác của tiền lãi do hệ thống tính không đủ chính xác — sai, đây là dự đoán sai sót (failure)."
   }
  ],
  "a": 2,
  "e": "• Đoán lỗi (error guessing) là kỹ thuật dự đoán lỗi (error), khuyết tật (defect) và sai sót (failure) dựa trên kiến thức/kinh nghiệm của tester.\n• Vì sao C đúng: Việc lập trình viên bỏ lỡ hội thảo là một nguyên nhân gốc (root cause) tiềm ẩn của khuyết tật — không phải error, defect hay failure — và tester khó có thể dự đoán điều này.\n• Vì sao A sai: Hiểu sai công thức là một lỗi (error) của con người — đúng là thứ tester dự đoán khi đoán lỗi.\n• Vì sao B sai: Viết sai công thức trong mã nguồn là một khuyết tật (defect) — tester có thể dự đoán.\n• Vì sao D sai: Kết quả tính lãi không đủ chính xác là một sai sót (failure) — tester có thể dự đoán, chẳng hạn dựa trên kinh nghiệm với các hệ thống trước trong cùng lĩnh vực.",
  "lo": "FL-4.4.1",
  "k": "K2"
 },
 {
  "n": "27",
  "pre": "",
  "prev": "",
  "q": "Which of the following is true about exploratory testing?",
  "qv": "Phát biểu nào sau đây đúng về kiểm thử khám phá (exploratory testing)?",
  "o": [
   {
    "t": "Test cases are designed before the exploratory testing session starts",
    "v": "Ca kiểm thử được thiết kế trước khi phiên kiểm thử khám phá bắt đầu — sai, chúng được tạo trong phiên."
   },
   {
    "t": "The tester can perform test execution, but cannot perform test design",
    "v": "Tester có thể thực thi kiểm thử nhưng không được thiết kế kiểm thử — sai, thiết kế và thực thi diễn ra đồng thời."
   },
   {
    "t": "Exploratory testing results are good predictors of the number of remaining defects",
    "v": "Kết quả kiểm thử khám phá là chỉ báo tốt về số khuyết tật còn lại — sai, kết quả phụ thuộc nhiều vào kinh nghiệm tester."
   },
   {
    "t": "During exploratory testing the tester may use black-box test techniques",
    "v": "Trong kiểm thử khám phá, tester có thể dùng các kỹ thuật kiểm thử hộp đen — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Trong kiểm thử khám phá, tester có thể dùng bất kỳ kỹ thuật kiểm thử nào thấy hữu ích, kể cả kỹ thuật hộp đen (black-box).\n• Vì sao A sai: Trong kiểm thử khám phá, ca kiểm thử thường được tạo ngay trong phiên (session), song song với phân tích, triển khai và thực thi kiểm thử.\n• Vì sao B sai: Trong kiểm thử khám phá, các kiểm thử được thiết kế, thực thi và đánh giá đồng thời trong khi tester tìm hiểu về đối tượng kiểm thử.\n• Vì sao C sai: Kết quả kiểm thử khám phá phụ thuộc nhiều vào kinh nghiệm của tester. Dù có thể dùng để gợi ý rủi ro hoặc so sánh nhiều/ít khuyết tật hơn so với phiên trước, chúng không phải mô hình dự đoán đáng tin cậy về số khuyết tật còn lại.",
  "lo": "FL-4.4.2",
  "k": "K2"
 },
 {
  "n": "28",
  "pre": "",
  "prev": "",
  "q": "Which collaborative user story writing practice enables the team to achieve a collective understanding of what needs to be delivered?",
  "qv": "Thực hành viết user story cộng tác (collaborative user story writing) nào giúp nhóm đạt được hiểu biết chung về những gì cần bàn giao?",
  "o": [
   {
    "t": "Planning poker, so that a team can achieve consensus on the effort needed to implement a user story",
    "v": "Planning poker, để nhóm đồng thuận về công sức cần để hiện thực một user story — sai, đó là kỹ thuật ước lượng cho story đã viết xong."
   },
   {
    "t": "Reviews, so that a team can detect inconsistencies and contradictions in a user story",
    "v": "Rà soát (review), để nhóm phát hiện điểm không nhất quán, mâu thuẫn trong user story — sai, review không phải thực hành viết user story cộng tác."
   },
   {
    "t": "Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation",
    "v": "Lập kế hoạch vòng lặp (iteration planning), để ưu tiên user story có giá trị kinh doanh cao nhất — sai, đây là thực hành quản lý dự án."
   },
   {
    "t": "Conversation, so that team members can understand how the software will be used",
    "v": "Trao đổi (Conversation), để các thành viên hiểu phần mềm sẽ được sử dụng thế nào — đúng."
   }
  ],
  "a": 3,
  "e": "• User story gồm 3 khía cạnh (3C): Card (thẻ), Conversation (trao đổi), Confirmation (xác nhận).\n• Vì sao D đúng: Conversation giải thích phần mềm sẽ được sử dụng như thế nào và thường giúp nhóm định nghĩa tiêu chí chấp nhận (acceptance criteria) có ý nghĩa, từ đó có tầm nhìn chung về những gì cần bàn giao.\n• Vì sao A sai: Planning poker dùng để ước lượng công sức cho một user story đã được viết; nó không giúp hiểu cái gì cần bàn giao.\n• Vì sao B sai: Review không phải là một thực hành viết user story cộng tác.\n• Vì sao C sai: Iteration planning là thực hành liên quan đến dự án, dùng để lập kế hoạch công việc, không phải để hiểu những gì cần bàn giao.",
  "lo": "FL-4.5.1",
  "k": "K2"
 },
 {
  "n": "29",
  "pre": "<p>You have just started designing test cases for the following user story.</p><p><i>As a customer,<br>I want to be able to filter search results by price range, so that I can find products within my budget more easily.</i></p><p>Acceptance criteria:</p><ol><li>The filter should work for all versions of the application from version 3.0 upwards</li><li>The filter should allow the customer to set a price range with a minimum and a maximum price</li><li>The search results should update dynamically as the customer adjusts the price range filter</li></ol><p>In all test cases the precondition is as follows: there are only two products available, products A and B. Product A costs $100 and product B costs $110.</p>",
  "prev": "<p>Bạn vừa bắt đầu thiết kế ca kiểm thử cho user story sau.</p><p><i>Là một khách hàng,<br>tôi muốn có thể lọc kết quả tìm kiếm theo khoảng giá, để có thể dễ dàng tìm sản phẩm phù hợp với ngân sách của mình.</i></p><p>Tiêu chí chấp nhận (acceptance criteria):</p><ol><li>Bộ lọc phải hoạt động với mọi phiên bản của ứng dụng từ phiên bản 3.0 trở lên</li><li>Bộ lọc phải cho phép khách hàng đặt khoảng giá với giá tối thiểu và giá tối đa</li><li>Kết quả tìm kiếm phải cập nhật động khi khách hàng điều chỉnh bộ lọc khoảng giá</li></ol><p>Trong mọi ca kiểm thử, điều kiện tiên quyết (precondition) như sau: chỉ có hai sản phẩm, A và B. Sản phẩm A giá $100 và sản phẩm B giá $110.</p>",
  "q": "Which of the following is the BEST example of a test case for this user story?",
  "qv": "Phương án nào sau đây là ví dụ TỐT NHẤT về một ca kiểm thử cho user story này?",
  "o": [
   {
    "t": "Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B",
    "v": "Vào trang web và đặt bộ lọc giá từ $90 đến $100. Kết quả mong đợi: chỉ hiển thị sản phẩm A. Đặt giá tối đa thành $110. Kết quả mong đợi: hiển thị cả A và B — đúng, kiểm tra tiêu chí 2 và 3."
   },
   {
    "t": "Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client’s webpage. Expected result: the default maximum price changes to $120",
    "v": "Vào trang web. Kết quả mong đợi: giá tối thiểu/tối đa mặc định là $100 và $110. Thêm sản phẩm C giá $120 vào kho, tải lại trang. Kết quả mong đợi: giá tối đa mặc định đổi thành $120 — sai, không liên quan đến tiêu chí chấp nhận nào."
   },
   {
    "t": "Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate",
    "v": "Vào trang web và đặt bộ lọc giá từ $90 đến $115. Kết quả mong đợi: hiển thị cả A và B. Đổi tiền tệ từ USD sang EUR. Kết quả mong đợi: khoảng lọc đổi đúng sang EUR theo tỷ giá hiện hành — sai, quy đổi tiền tệ không có trong user story."
   },
   {
    "t": "Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers",
    "v": "Vào trang web bằng ba trình duyệt Edge, Chrome và Opera. Ở mỗi trình duyệt đặt bộ lọc từ $90 đến $110. Kết quả mong đợi: hiển thị cả A và B, bố cục giống nhau trên cả ba trình duyệt — sai, tương thích trình duyệt không có trong user story."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Ca kiểm thử này gắn với tiêu chí chấp nhận 2 và 3: kiểm tra khách hàng có thể đặt khoảng giá (tiêu chí 2) và kết quả cập nhật động khi điều chỉnh bộ lọc (tiêu chí 3: từ chỉ A thành cả A và B khi nâng giá tối đa lên $110).\n• Vì sao B sai: Không liên quan đến tiêu chí chấp nhận nào; nó kiểm tra bộ lọc tự đặt giá tối thiểu/tối đa mặc định, chứ không phải khách hàng đặt khoảng giá.\n• Vì sao C sai: Không liên quan đến tiêu chí chấp nhận nào; nó kiểm tra tính năng quy đổi tiền tệ, vốn không được đề cập trong user story.\n• Vì sao D sai: Không liên quan đến tiêu chí chấp nhận nào; nó kiểm tra tính tương thích với các trình duyệt khác nhau, vốn không được đề cập trong user story (tiêu chí 1 nói về phiên bản ứng dụng, không phải trình duyệt).",
  "lo": "FL-4.5.3",
  "k": "K3"
 },
 {
  "n": "30",
  "pre": "",
  "prev": "",
  "q": "Which of the following BEST define EXIT criteria in a testing project?",
  "qv": "Những phương án nào sau đây định nghĩa TỐT NHẤT tiêu chí kết thúc (exit criteria) trong một dự án kiểm thử?",
  "o": [
   {
    "t": "Budget is approved",
    "v": "Ngân sách được phê duyệt — sai, đây là tiêu chí đầu vào (entry criterion)."
   },
   {
    "t": "Budget runs out",
    "v": "Hết ngân sách — đúng, có thể coi là một tiêu chí kết thúc hợp lệ."
   },
   {
    "t": "Test basis is available",
    "v": "Cơ sở kiểm thử (test basis) đã sẵn có — sai, đây là tiêu chí đầu vào."
   },
   {
    "t": "Test cases achieved at least 80% statement coverage",
    "v": "Các ca kiểm thử đạt ít nhất 80% độ bao phủ câu lệnh — đúng, độ bao phủ là tiêu chí kết thúc điển hình."
   },
   {
    "t": "All test analysts are ISTQB certified at the Foundation Level",
    "v": "Tất cả test analyst đều có chứng chỉ ISTQB Foundation — sai, đây là tiêu chí đầu vào."
   }
  ],
  "a": [
   1,
   3
  ],
  "e": "• Vì sao B đúng: Hết ngân sách có thể được xem là một tiêu chí kết thúc (exit criterion) hợp lệ.\n• Vì sao D đúng: Độ bao phủ là thước đo mức độ kỹ lưỡng (thoroughness), nên là tiêu chí kết thúc điển hình.\n• Vì sao A sai: Phê duyệt ngân sách là tiêu chí đầu vào (entry criterion); không có lý gì phê duyệt ngân sách cho một hoạt động đã làm xong.\n• Vì sao C sai: Sự sẵn có của tài nguyên (như cơ sở kiểm thử) là ví dụ về tiêu chí đầu vào.\n• Vì sao E sai: Đây là tiêu chí đầu vào, được kiểm tra trước khi dự án bắt đầu.",
  "lo": "FL-5.1.3",
  "k": "K2"
 },
 {
  "n": "31",
  "pre": "<p>The team wants to estimate the time needed for one tester to execute four test cases for a software component. The team has gathered the following measures of the effort used to execute a single test case:</p><ul><li>Best-case scenario: 1 hour</li><li>Worst-case scenario: 8 hours</li><li>Most likely scenario: 3 hours</li></ul>",
  "prev": "<p>Nhóm muốn ước lượng thời gian để một tester thực thi bốn ca kiểm thử cho một thành phần phần mềm. Nhóm đã thu thập các số đo công sức để thực thi một ca kiểm thử như sau:</p><ul><li>Kịch bản tốt nhất (lạc quan): 1 giờ</li><li>Kịch bản xấu nhất (bi quan): 8 giờ</li><li>Kịch bản khả dĩ nhất: 3 giờ</li></ul>",
  "q": "Given that the three-point estimation technique is being used, what is the final estimate of the time needed to execute all four test cases?",
  "qv": "Khi dùng kỹ thuật ước lượng ba điểm (three-point estimation), ước lượng cuối cùng cho thời gian thực thi cả bốn ca kiểm thử là bao nhiêu?",
  "o": [
   {
    "t": "14 hours",
    "v": "14 giờ — đúng: (1 + 4×3 + 8)/6 = 3,5 giờ × 4 = 14 giờ."
   },
   {
    "t": "3.5 hours",
    "v": "3,5 giờ — sai, đây chỉ là ước lượng cho một ca kiểm thử."
   },
   {
    "t": "16 hours",
    "v": "16 giờ — sai, tính toán không đúng."
   },
   {
    "t": "12 hours",
    "v": "12 giờ — sai, đây là 3 giờ (khả dĩ nhất) × 4, không áp dụng công thức ba điểm."
   }
  ],
  "a": 0,
  "e": "• Công thức ước lượng ba điểm: E = (a + 4×m + b) / 6, với a = lạc quan nhất, m = khả dĩ nhất, b = bi quan nhất.\n• Vì sao A đúng:\n  - Cho một ca kiểm thử: E = (1 + 4×3 + 8) / 6 = (1 + 12 + 8) / 6 = 21 / 6 = 3,5 giờ.\n  - Cho bốn ca kiểm thử: 3,5 × 4 = 14 giờ.\n• Vì sao B sai: 3,5 giờ chỉ là ước lượng cho một ca, chưa nhân với 4.\n• Vì sao C sai: 16 giờ không khớp với kết quả công thức.\n• Vì sao D sai: 12 giờ = 3 × 4, chỉ dùng giá trị khả dĩ nhất mà bỏ qua công thức ba điểm.",
  "lo": "FL-5.1.4",
  "k": "K3"
 },
 {
  "n": "32",
  "pre": "<p>The table shows the traceability matrix from test cases to requirements. “X” means that a given test case covers the corresponding requirement.</p><table><tr><th></th><th>Req1</th><th>Req2</th><th>Req3</th><th>Req4</th><th>Req5</th><th>Req6</th><th>Req7</th></tr><tr><td>TC1</td><td>X</td><td></td><td>X</td><td>X</td><td></td><td></td><td>X</td></tr><tr><td>TC2</td><td>X</td><td></td><td></td><td></td><td>X</td><td></td><td>X</td></tr><tr><td>TC3</td><td></td><td></td><td></td><td></td><td>X</td><td>X</td><td></td></tr><tr><td>TC4</td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td></tr></table><p>You want to prioritize the test cases following the additional coverage prioritization technique. You execute all four test cases.</p>",
  "prev": "<p>Bảng dưới là ma trận truy vết (traceability matrix) từ ca kiểm thử đến yêu cầu. “X” nghĩa là ca kiểm thử đó bao phủ yêu cầu tương ứng.</p><table><tr><th></th><th>Req1</th><th>Req2</th><th>Req3</th><th>Req4</th><th>Req5</th><th>Req6</th><th>Req7</th></tr><tr><td>TC1</td><td>X</td><td></td><td>X</td><td>X</td><td></td><td></td><td>X</td></tr><tr><td>TC2</td><td>X</td><td></td><td></td><td></td><td>X</td><td></td><td>X</td></tr><tr><td>TC3</td><td></td><td></td><td></td><td></td><td>X</td><td>X</td><td></td></tr><tr><td>TC4</td><td></td><td>X</td><td></td><td></td><td></td><td></td><td></td></tr></table><p>Bạn muốn sắp xếp thứ tự ưu tiên các ca kiểm thử theo kỹ thuật ưu tiên theo độ bao phủ bổ sung (additional coverage prioritization). Bạn thực thi cả bốn ca kiểm thử.</p>",
  "q": "Which test case should be executed as the LAST one?",
  "qv": "Ca kiểm thử nào nên được thực thi CUỐI CÙNG?",
  "o": [
   {
    "t": "TC1",
    "v": "TC1 — sai, TC1 phủ nhiều yêu cầu nhất nên chạy đầu tiên."
   },
   {
    "t": "TC2",
    "v": "TC2 — đúng, sau TC1, TC3, TC4 thì TC2 không còn bổ sung yêu cầu mới nào."
   },
   {
    "t": "TC3",
    "v": "TC3 — sai, TC3 chạy thứ hai."
   },
   {
    "t": "TC4",
    "v": "TC4 — sai, TC4 chạy thứ ba."
   }
  ],
  "a": 1,
  "e": "• Ưu tiên theo độ bao phủ bổ sung: mỗi bước chọn ca kiểm thử phủ thêm nhiều yêu cầu CHƯA được phủ nhất.\n• Bước 1: TC1 phủ 4/7 (Req1, Req3, Req4, Req7) — nhiều nhất (TC2: 3, TC3: 2, TC4: 1) → chạy TC1 đầu tiên. Còn chưa phủ: Req2, Req5, Req6.\n• Bước 2: Phủ bổ sung: TC2 → Req5 (1); TC3 → Req5, Req6 (2); TC4 → Req2 (1) → chạy TC3 thứ hai. Còn chưa phủ: Req2.\n• Bước 3: TC4 phủ Req2 (1), TC2 không phủ thêm gì (0) → chạy TC4 thứ ba.\n• Bước 4: Còn lại TC2 → chạy cuối cùng.\n• Vì sao B đúng: Thứ tự là TC1 → TC3 → TC4 → TC2, nên TC2 chạy cuối.\n• Vì sao A sai: TC1 chạy đầu tiên.\n• Vì sao C sai: TC3 chạy thứ hai.\n• Vì sao D sai: TC4 chạy thứ ba.",
  "lo": "FL-5.1.5",
  "k": "K3"
 },
 {
  "n": "33",
  "pre": "",
  "prev": "",
  "q": "How can the testing quadrants be beneficial for testing?",
  "qv": "Các góc phần tư kiểm thử (testing quadrants) có thể mang lại lợi ích gì cho kiểm thử?",
  "o": [
   {
    "t": "They help in test planning by dividing the test process into four phases, corresponding to the four basic test levels: component, integration, system, and acceptance testing",
    "v": "Giúp lập kế hoạch kiểm thử bằng cách chia quy trình kiểm thử thành bốn giai đoạn tương ứng bốn mức kiểm thử cơ bản: thành phần, tích hợp, hệ thống, chấp nhận — sai, quadrants không mô tả quan hệ giữa các mức kiểm thử."
   },
   {
    "t": "They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)",
    "v": "Giúp đánh giá độ bao phủ mức cao (vd: bao phủ yêu cầu) dựa trên độ bao phủ mức thấp (vd: bao phủ mã) — sai, quadrants không dùng để đánh giá độ bao phủ."
   },
   {
    "t": "They help non-technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels than others",
    "v": "Giúp các bên liên quan không chuyên kỹ thuật hiểu các loại kiểm thử khác nhau và rằng một số loại kiểm thử phù hợp với một số mức kiểm thử hơn — đúng."
   },
   {
    "t": "They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them",
    "v": "Giúp nhóm agile xây dựng chiến lược giao tiếp dựa trên phân loại con người theo bốn kiểu tâm lý cơ bản — sai, quadrants không phải mô hình tâm lý."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Testing quadrants giúp nhà quản lý và các bên liên quan (stakeholder) hiểu mối quan hệ giữa các loại kiểm thử (test type), hoạt động mà chúng hỗ trợ (hỗ trợ nhóm — team support, hay phê bình sản phẩm — product critique) và góc nhìn mà chúng hướng tới (hướng nghiệp vụ — business-facing, hay hướng công nghệ — technology-facing).\n• Vì sao A sai: Testing quadrants không liên quan đến việc mô tả quan hệ giữa các mức kiểm thử (test level).\n• Vì sao B sai: Testing quadrants không giúp đánh giá bất kỳ loại độ bao phủ nào.\n• Vì sao D sai: Testing quadrants không phải là một mô hình tâm lý học.",
  "lo": "FL-5.1.7",
  "k": "K2"
 },
 {
  "n": "34",
  "pre": "<p>For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%.</p>",
  "prev": "<p>Với một rủi ro cho trước, mức độ rủi ro (risk level) là $1,000 và khả năng xảy ra rủi ro (risk likelihood) được ước lượng là 50%.</p>",
  "q": "What is the risk impact?",
  "qv": "Tác động của rủi ro (risk impact) là bao nhiêu?",
  "o": [
   {
    "t": "$500",
    "v": "$500 — sai, đây là $1,000 × 50% (nhân thay vì chia)."
   },
   {
    "t": "$2,000",
    "v": "$2,000 — đúng: $1,000 / 0,5 = $2,000."
   },
   {
    "t": "$50,000",
    "v": "$50,000 — sai, đây là $1,000 × 50 (dùng 50 thay vì 0,5)."
   },
   {
    "t": "$200",
    "v": "$200 — sai, tính toán không đúng."
   }
  ],
  "a": 1,
  "e": "• Theo cách tiếp cận định lượng: Mức độ rủi ro (risk level) = Khả năng xảy ra (risk likelihood) × Tác động (risk impact).\n• Suy ra: Tác động = Mức độ rủi ro / Khả năng xảy ra.\n• Vì sao B đúng: Tác động = $1,000 / 50% = $1,000 / 0,5 = $2,000.\n• Vì sao A sai: $500 là kết quả của $1,000 × 0,5 — nhân thay vì chia.\n• Vì sao C sai: $50,000 = $1,000 × 50 — sai công thức và sai đơn vị phần trăm.\n• Vì sao D sai: $200 không khớp với bất kỳ phép tính đúng nào.",
  "lo": "FL-5.2.1",
  "k": "K1"
 },
 {
  "n": "35",
  "pre": "",
  "prev": "",
  "q": "Which of the following are product risks?",
  "qv": "Những phương án nào sau đây là rủi ro sản phẩm (product risk)?",
  "o": [
   {
    "t": "Scope creep",
    "v": "Phạm vi bị phình dần (scope creep) — sai, đây là rủi ro dự án (project risk)."
   },
   {
    "t": "Poor architecture",
    "v": "Kiến trúc kém — đúng, đây là đặc tính của sản phẩm."
   },
   {
    "t": "Cost-cutting",
    "v": "Cắt giảm chi phí — sai, đây là rủi ro dự án liên quan đến tổ chức."
   },
   {
    "t": "Poor tool support",
    "v": "Hỗ trợ công cụ kém — sai, đây là rủi ro dự án liên quan đến kỹ thuật."
   },
   {
    "t": "Too long response time",
    "v": "Thời gian phản hồi quá lâu — đúng, đây là đặc tính của sản phẩm."
   }
  ],
  "a": [
   1,
   4
  ],
  "e": "• Rủi ro sản phẩm (product risk) liên quan đến đặc tính chất lượng của sản phẩm; rủi ro dự án (project risk) liên quan đến việc quản lý và kiểm soát dự án.\n• Vì sao B đúng: Kiến trúc kém là rủi ro sản phẩm vì nó đề cập đến một đặc tính của sản phẩm.\n• Vì sao E đúng: Thời gian phản hồi quá lâu là rủi ro sản phẩm vì nó đề cập đến một đặc tính (hiệu năng) của sản phẩm.\n• Vì sao A sai: Scope creep là rủi ro dự án liên quan đến vấn đề kỹ thuật.\n• Vì sao C sai: Cắt giảm chi phí là rủi ro dự án liên quan đến vấn đề tổ chức.\n• Vì sao D sai: Hỗ trợ công cụ kém là rủi ro dự án liên quan đến vấn đề kỹ thuật.",
  "lo": "FL-5.2.2",
  "k": "K2"
 },
 {
  "n": "36",
  "pre": "",
  "prev": "",
  "q": "Which of the following is NOT a valid purpose for a test report?",
  "qv": "Điều nào sau đây KHÔNG phải là mục đích hợp lệ của báo cáo kiểm thử (test report)?",
  "o": [
   {
    "t": "Tracking test progress and identifying areas that require further attention",
    "v": "Theo dõi tiến độ kiểm thử và xác định các khu vực cần chú ý thêm — sai, đây là mục đích hợp lệ (hỗ trợ kiểm soát kiểm thử)."
   },
   {
    "t": "Providing information on the tests executed, their results, and defects found",
    "v": "Cung cấp thông tin về các kiểm thử đã thực thi, kết quả và khuyết tật tìm được — sai, đây là mục đích hợp lệ."
   },
   {
    "t": "Providing information about each defect, such as the steps to reproduce it",
    "v": "Cung cấp thông tin về từng khuyết tật, như các bước tái hiện — đúng, đây là mục đích của báo cáo khuyết tật (defect report)."
   },
   {
    "t": "Providing information on testing planned for the next period",
    "v": "Cung cấp thông tin về kiểm thử dự kiến cho giai đoạn tiếp theo — sai, đây là mục đích hợp lệ."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Cung cấp thông tin chi tiết về từng khuyết tật (như các bước tái hiện) là mục đích của báo cáo khuyết tật (defect report), không phải báo cáo kiểm thử (test report).\n• Vì sao A sai: Theo dõi tiến độ và xác định khu vực cần chú ý thêm là hỗ trợ việc kiểm soát kiểm thử (test control) đang diễn ra — một mục đích của test report.\n• Vì sao B sai: Cung cấp thông tin về các kiểm thử đã thực thi, kết quả và khuyết tật tìm thấy là tóm tắt các hoạt động kiểm thử — một mục đích của test report.\n• Vì sao D sai: Cung cấp thông tin về kiểm thử dự kiến cho giai đoạn tới là một mục đích của test report (báo cáo tiến độ kiểm thử).",
  "lo": "FL-5.3.2",
  "k": "K2"
 },
 {
  "n": "37",
  "pre": "<p>The user reported a software failure. An engineer from the support team asked the user for the software version number where the failure was observed. Based on the version number, the team reassembled all the files that made up the release. This later allowed a developer to perform analysis, find the defect, and fix it.</p>",
  "prev": "<p>Người dùng báo cáo một sai sót (failure) của phần mềm. Một kỹ sư thuộc nhóm hỗ trợ hỏi người dùng số phiên bản phần mềm nơi quan sát thấy sai sót. Dựa vào số phiên bản, nhóm đã tập hợp lại toàn bộ các tệp tạo nên bản phát hành (release) đó. Điều này sau đó giúp lập trình viên phân tích, tìm ra khuyết tật (defect) và sửa nó.</p>",
  "q": "Which of the following enabled the above activity to be performed by the team?",
  "qv": "Điều nào sau đây giúp nhóm thực hiện được hoạt động trên?",
  "o": [
   {
    "t": "Risk management",
    "v": "Quản lý rủi ro (risk management) — sai, nó xử lý rủi ro, không phải các hạng mục cấu hình."
   },
   {
    "t": "Test monitoring and control",
    "v": "Giám sát và kiểm soát kiểm thử (test monitoring and control) — sai, nó không quản lý các hạng mục cấu hình."
   },
   {
    "t": "Whole team approach",
    "v": "Cách tiếp cận cả nhóm (whole team approach) — sai, nó tập trung vào vấn đề làm việc nhóm."
   },
   {
    "t": "Configuration management",
    "v": "Quản lý cấu hình (configuration management) — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Quản lý cấu hình (configuration management) cung cấp quy tắc để nhận diện, kiểm soát và theo dõi các sản phẩm công việc. Nó lưu lại các hạng mục cấu hình (configuration item) đã thay đổi khi tạo một đường cơ sở (baseline) mới, nhờ đó có thể quay về baseline trước để tái tạo lại đúng bản phát hành và tái hiện kết quả trước đây.\n• Vì sao A sai: Quản lý rủi ro gồm phân tích rủi ro và kiểm soát rủi ro; các hoạt động này xử lý rủi ro, không hỗ trợ việc tập hợp lại các tệp của một bản phát hành.\n• Vì sao B sai: Giám sát kiểm thử thu thập thông tin để đánh giá tiến độ và tiêu chí kết thúc; kiểm soát kiểm thử dùng thông tin đó để đưa ra chỉ thị điều chỉnh. Không hoạt động nào quản lý các hạng mục cấu hình.\n• Vì sao C sai: Cách tiếp cận cả nhóm dựa trên kỹ năng làm việc nhóm của tester để đóng góp vào mục tiêu chung; nó tập trung vào vấn đề nhóm, không phải hạng mục cấu hình.",
  "lo": "FL-5.4.1",
  "k": "K2"
 },
 {
  "n": "38",
  "pre": "<p>Consider the following defect report for a Book Lending System.</p><table><tr><td>Defect ID: 001</td><td>Title: Unable to Return a Book</td></tr><tr><td>Severity: High</td><td>Priority:</td></tr><tr><td colspan=\"2\">Environment: Windows 10, Google Chrome</td></tr><tr><td colspan=\"2\">Description: When attempting to return a book using the Book Return feature, the system does not register the return and the book remains checked out to the user.</td></tr><tr><td colspan=\"2\">Steps to Reproduce:<ol><li>Login to the Book Lending System as a user who has checked out a book.</li><li>Click on the \"Book Return\" button for the book that has been checked out.</li><li>System does not register the return and the book remains checked out.</li></ol></td></tr><tr><td colspan=\"2\">Expected Result: The book should be returned and no longer appear as checked out to the user.</td></tr><tr><td colspan=\"2\">Actual Result: The book remains checked out to the user and is not registered as returned in the system.</td></tr><tr><td colspan=\"2\">Attachments: [empty list]</td></tr></table>",
  "prev": "<p>Xem xét báo cáo khuyết tật (defect report) sau đây cho một Hệ thống Cho mượn Sách.</p><table><tr><td>Mã khuyết tật: 001</td><td>Tiêu đề: Không thể trả sách</td></tr><tr><td>Mức độ nghiêm trọng (Severity): Cao</td><td>Độ ưu tiên (Priority):</td></tr><tr><td colspan=\"2\">Môi trường: Windows 10, Google Chrome</td></tr><tr><td colspan=\"2\">Mô tả (Description): Khi cố trả sách bằng chức năng Book Return, hệ thống không ghi nhận việc trả và cuốn sách vẫn ở trạng thái đang được người dùng mượn.</td></tr><tr><td colspan=\"2\">Các bước tái hiện (Steps to Reproduce):<ol><li>Đăng nhập vào Hệ thống Cho mượn Sách bằng một người dùng đang mượn sách.</li><li>Nhấn nút \"Book Return\" cho cuốn sách đang mượn.</li><li>Hệ thống không ghi nhận việc trả và cuốn sách vẫn ở trạng thái đang mượn.</li></ol></td></tr><tr><td colspan=\"2\">Kết quả mong đợi: Sách được trả và không còn hiển thị là đang được người dùng mượn.</td></tr><tr><td colspan=\"2\">Kết quả thực tế: Sách vẫn ở trạng thái đang mượn và không được ghi nhận là đã trả trong hệ thống.</td></tr><tr><td colspan=\"2\">Tệp đính kèm (Attachments): [trống]</td></tr></table>",
  "q": "Which of the following is MOST likely to help the developer reproduce the failure quickly?",
  "qv": "Điều nào sau đây CÓ KHẢ NĂNG NHẤT giúp lập trình viên tái hiện sai sót (failure) một cách nhanh chóng?",
  "o": [
   {
    "t": "Adding information about which users and which books the failure affects to the “Description” section",
    "v": "Bổ sung thông tin về người dùng nào và sách nào bị ảnh hưởng vào phần “Description” — đúng, giúp dùng đúng dữ liệu đầu vào để tái hiện."
   },
   {
    "t": "Filling in the missing value for the “Priority” field",
    "v": "Điền giá trị còn thiếu cho trường “Priority” — sai, độ ưu tiên không giúp tái hiện lỗi."
   },
   {
    "t": "Adding memory dumps and database snapshots taken after each step described in the “Steps to Reproduce” section to the “Attachments” section.",
    "v": "Đính kèm memory dump và snapshot cơ sở dữ liệu sau mỗi bước trong “Steps to Reproduce” vào phần “Attachments” — sai, quá nhiều thông tin vô ích, làm chậm việc phân tích."
   },
   {
    "t": "Repeating the same test case for different environments and writing defect reports for each of them separately",
    "v": "Lặp lại ca kiểm thử trên các môi trường khác nhau và viết báo cáo khuyết tật riêng cho từng môi trường — sai, câu hỏi là về tái hiện trên một môi trường cụ thể."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Bổ sung thông tin cụ thể về người dùng và sách bị ảnh hưởng cho phép lập trình viên dùng đúng dữ liệu đầu vào đó, nên khả năng tái hiện nhanh sai sót cao hơn và tìm ra khuyết tật nhanh hơn.\n• Vì sao B sai: Điền giá trị Priority không giúp gì cho việc tái hiện lỗi.\n• Vì sao C sai: Dù một phần thông tin có thể hữu ích, nhưng memory dump và snapshot CSDL sau mỗi bước là quá nhiều; phần lớn chứa thông tin vô ích, làm báo cáo khó đọc và khiến lập trình viên tốn nhiều thời gian phân tích, kéo dài quá trình sửa lỗi.\n• Vì sao D sai: Câu hỏi là về việc giúp lập trình viên tái hiện sai sót trên một cấu hình môi trường cụ thể, không phải kiểm thử trên nhiều môi trường.",
  "lo": "FL-5.5.1",
  "k": "K3"
 },
 {
  "n": "39",
  "pre": "<p>Given the following test tool categories:</p><ol type=\"i\"><li>Collaboration tools</li><li>DevOps tools</li><li>Management tools</li><li>Non-functional testing tools</li><li>Test design and implementation tools</li></ol>",
  "prev": "<p>Cho các nhóm công cụ kiểm thử sau:</p><ol type=\"i\"><li>Công cụ cộng tác (collaboration tools)</li><li>Công cụ DevOps (DevOps tools)</li><li>Công cụ quản lý (management tools)</li><li>Công cụ kiểm thử phi chức năng (non-functional testing tools)</li><li>Công cụ thiết kế và triển khai kiểm thử (test design and implementation tools)</li></ol>",
  "q": "Tools from which of the categories are MOST likely to facilitate test execution?",
  "qv": "Công cụ thuộc những nhóm nào CÓ KHẢ NĂNG NHẤT hỗ trợ việc thực thi kiểm thử (test execution)?",
  "o": [
   {
    "t": "i, v",
    "v": "i, v — sai, cộng tác và thiết kế/triển khai kiểm thử không hỗ trợ thực thi."
   },
   {
    "t": "ii, iv",
    "v": "ii, iv — đúng, DevOps và kiểm thử phi chức năng đều hỗ trợ thực thi kiểm thử."
   },
   {
    "t": "i, iii, v",
    "v": "i, iii, v — sai, cả ba nhóm đều không hỗ trợ thực thi kiểm thử."
   },
   {
    "t": "ii, iii, iv",
    "v": "ii, iii, iv — sai, công cụ quản lý (iii) không hỗ trợ thực thi kiểm thử."
   }
  ],
  "a": 1,
  "e": "• Xét từng nhóm công cụ:\n  - i. Cộng tác: hỗ trợ giao tiếp — không hỗ trợ thực thi kiểm thử.\n  - ii. DevOps: hỗ trợ pipeline phân phối, theo dõi luồng công việc, build tự động và CI/CD — pipeline và CI/CD có bao gồm thực thi kiểm thử (vd: kiểm thử thành phần trong CI) → CÓ.\n  - iii. Quản lý: tăng hiệu quả quy trình bằng cách quản lý SDLC, yêu cầu, kiểm thử, khuyết tật, cấu hình — không bao gồm thực thi kiểm thử.\n  - iv. Kiểm thử phi chức năng: cho phép thực hiện kiểm thử phi chức năng khó/không thể làm thủ công, bao gồm cả thực thi kiểm thử động → CÓ.\n  - v. Thiết kế và triển khai kiểm thử: hỗ trợ sinh ca kiểm thử, dữ liệu kiểm thử, quy trình kiểm thử — không bao gồm thực thi.\n• Vì sao B đúng: ii và iv đều hỗ trợ thực thi kiểm thử.\n• Vì sao A sai: i và v không hỗ trợ thực thi.\n• Vì sao C sai: i, iii, v đều không hỗ trợ thực thi.\n• Vì sao D sai: Có iii (công cụ quản lý), vốn không hỗ trợ thực thi kiểm thử.",
  "lo": "FL-6.1.1",
  "k": "K2"
 },
 {
  "n": "40",
  "pre": "",
  "prev": "",
  "q": "Which of the following is MOST likely to be a risk of test automation?",
  "qv": "Điều nào sau đây CÓ KHẢ NĂNG NHẤT là một rủi ro của tự động hóa kiểm thử (test automation)?",
  "o": [
   {
    "t": "The detection of additional high-severity defects",
    "v": "Phát hiện thêm các khuyết tật mức nghiêm trọng cao — sai, đây là lợi ích."
   },
   {
    "t": "Providing measures that are too complicated for humans to derive",
    "v": "Cung cấp các số đo quá phức tạp để con người tự tính được — sai, đây thường được coi là lợi ích."
   },
   {
    "t": "Incompatibility with the development platform",
    "v": "Không tương thích với nền tảng phát triển — đúng, đây là rủi ro."
   },
   {
    "t": "Substantially reduced test execution times",
    "v": "Thời gian thực thi kiểm thử giảm đáng kể — sai, đây là lợi ích."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Nếu công cụ tự động hóa không tương thích với nền tảng phát triển, nó sẽ không thể tích hợp với đối tượng kiểm thử — chẳng hạn không truyền được dữ liệu đầu vào cho đối tượng kiểm thử và không nhận được kết quả từ nó. Đây là một rủi ro của tự động hóa kiểm thử.\n• Vì sao A sai: Phát hiện thêm khuyết tật nghiêm trọng là lợi ích của tự động hóa, không phải rủi ro.\n• Vì sao B sai: Cung cấp các số đo quá phức tạp để con người tự tính thường được xem là lợi ích của tự động hóa.\n• Vì sao D sai: Giảm đáng kể thời gian thực thi kiểm thử là lợi ích điển hình của tự động hóa.",
  "lo": "FL-6.2.1",
  "k": "K1"
 }
] };
