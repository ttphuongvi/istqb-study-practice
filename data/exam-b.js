/* File được sinh tự động bởi tools/build_data.py — sửa dữ liệu nguồn rồi chạy lại script. */
window.ISTQB = window.ISTQB || { exams: {}, lo: {} };
window.ISTQB.exams.B = { main: [
 {
  "n": "1",
  "pre": "",
  "prev": "",
  "q": "Which of the following is an example of why testing is necessary?",
  "qv": "Phương án nào sau đây là ví dụ cho thấy vì sao kiểm thử là cần thiết?",
  "o": [
   {
    "t": "Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users",
    "v": "Kiểm thử động (dynamic testing) nâng cao chất lượng bằng cách làm đối tượng kiểm thử hỏng theo những cách mà người dùng không bao giờ gây ra được — sai, tìm lỗi người dùng không thể gặp thì ít giá trị."
   },
   {
    "t": "Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing",
    "v": "Lập trình viên dùng kiểm thử tĩnh (static testing) để phát hiện sai sót (failure) trong code sớm hơn kiểm thử động — sai, kiểm thử tĩnh tìm khuyết tật (defect) chứ không phải failure."
   },
   {
    "t": "Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release",
    "v": "Phân tích tĩnh (static analysis) cung cấp bằng chứng cho khách hàng rằng các phần hệ thống không tạo đầu ra đã sẵn sàng phát hành — sai, kết quả phân tích tĩnh dành cho lập trình viên."
   },
   {
    "t": "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products",
    "v": "Rà soát (review) nâng cao chất lượng đặc tả yêu cầu và giúp giảm số thay đổi cần thực hiện ở các sản phẩm công việc phái sinh — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Rà soát (review) là một dạng kiểm thử tĩnh có thể áp dụng ngay từ đầu vòng đời phát triển phần mềm (SDLC). Nó giúp tìm ra khuyết tật trong đặc tả yêu cầu để loại bỏ trước khi các hoạt động phát triển tiếp theo tốn công sức trên yêu cầu sai. Nếu không phát hiện sớm, khi khuyết tật lộ ra ở các sản phẩm phái sinh (thiết kế, code) thì yêu cầu sẽ phải sửa lại, kéo theo sửa thiết kế và code.\n• Vì sao A sai: Đúng là kiểm thử động có thể làm đối tượng kiểm thử hỏng theo cách người dùng không bao giờ gây ra (ví dụ fault injection). Nhưng nếu sai sót đó không bao giờ xảy ra với người dùng thật thì việc tìm ra nó không có nhiều giá trị — kiểm thử nhằm cải thiện sản phẩm cho người dùng cuối, nên dồn thời gian vào đó là không hiệu quả.\n• Vì sao B sai: Lập trình viên đúng là dùng phân tích tĩnh để tìm khuyết tật sớm hơn kiểm thử động. Nhưng kiểm thử tĩnh phát hiện khuyết tật (defect), còn sai sót (failure) chỉ được phát hiện khi chạy chương trình (kiểm thử động). Chính từ “failures” làm phương án này sai.\n• Vì sao C sai: Phân tích tĩnh trực tiếp phát hiện khuyết tật trong code, và thông tin này thường dành cho lập trình viên chứ không phải cho khách hàng.",
  "lo": "FL-1.2.1",
  "k": "K2"
 },
 {
  "n": "2",
  "pre": "",
  "prev": "",
  "q": "Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?",
  "qv": "Phát biểu nào sau đây về đảm bảo chất lượng (QA) và/hoặc kiểm soát chất lượng (QC) là đúng?",
  "o": [
   {
    "t": "QA is performed as part of testing",
    "v": "QA được thực hiện như một phần của kiểm thử — sai, ngược lại: kiểm thử là một phần của QC."
   },
   {
    "t": "Testing is performed as part of QC",
    "v": "Kiểm thử được thực hiện như một phần của QC — đúng."
   },
   {
    "t": "Testing is another term for QC",
    "v": "Kiểm thử là tên gọi khác của QC — sai, QC còn gồm nhiều kỹ thuật khác ngoài kiểm thử."
   },
   {
    "t": "Testing is performed as part of QA",
    "v": "Kiểm thử được thực hiện như một phần của QA — sai, QA hướng đến quy trình, kiểm thử thuộc QC."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: QC hướng đến việc đạt mức chất lượng phù hợp bằng cách tập trung xác định và sửa khuyết tật của sản phẩm. Kiểm thử là một phần quan trọng của QC, giúp phát hiện các khuyết tật này.\n• Vì sao A sai: QA tập trung vào việc triển khai và cải tiến quy trình, theo cách tiếp cận phòng ngừa để tránh lỗi (error) và khuyết tật; còn kiểm thử là một hình thức của QC dùng để phát hiện khuyết tật. QA không phải là một phần của kiểm thử.\n• Vì sao C sai: Kiểm thử là phần quan trọng của QC nhưng không đồng nghĩa với QC. QC còn dùng các kỹ thuật không phải kiểm thử như phương pháp hình thức (model checking, chứng minh tính đúng đắn — proof of correctness), mô phỏng và làm mẫu thử (prototyping).\n• Vì sao D sai: QA hướng đến quy trình và mang tính phòng ngừa; kiểm thử là hoạt động thuộc QC nhằm phát hiện khuyết tật trong sản phẩm.",
  "lo": "FL-1.2.2",
  "k": "K1"
 },
 {
  "n": "3",
  "pre": "",
  "prev": "",
  "q": "One of the ‘principles of testing’ states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?",
  "qv": "Một trong các ‘nguyên lý kiểm thử’ phát biểu rằng kiểm thử vét cạn (exhaustive testing) là bất khả thi. Phương án nào sau đây là ví dụ về cách xử lý nguyên lý này trong thực tế?",
  "o": [
   {
    "t": "Creating test cases that cover every possible specified output",
    "v": "Tạo ca kiểm thử (test case) bao phủ mọi đầu ra được đặc tả có thể có — sai, không giải quyết được vấn đề số lượng tổ hợp đầu vào."
   },
   {
    "t": "Documenting all possible test input variations and prioritizing these based on importance",
    "v": "Ghi lại mọi biến thể đầu vào có thể có rồi ưu tiên theo mức độ quan trọng — sai, liệt kê hết là bất khả thi."
   },
   {
    "t": "Starting testing as early as possible with reviews and other static testing approaches",
    "v": "Bắt đầu kiểm thử càng sớm càng tốt bằng rà soát và các cách kiểm thử tĩnh khác — sai, đó là nguyên lý kiểm thử sớm."
   },
   {
    "t": "Using equivalence partitioning and boundary value analysis to generate test cases",
    "v": "Dùng phân vùng tương đương (equivalence partitioning) và phân tích giá trị biên (boundary value analysis) để sinh ca kiểm thử — đúng."
   }
  ],
  "a": 3,
  "e": "Nguyên lý ‘kiểm thử vét cạn là bất khả thi’ nói rằng không thể kiểm thử mọi biến thể đầu vào trong mọi hoàn cảnh (trừ trường hợp tầm thường). Thay vào đó, kiểm thử dùng các kỹ thuật kiểm thử, ưu tiên ca kiểm thử và kiểm thử dựa trên rủi ro để chọn mẫu và tập trung nỗ lực.\n• Vì sao D đúng: Phân vùng tương đương và phân tích giá trị biên là các kỹ thuật kiểm thử giúp rút ra một tập con hữu hạn, có hệ thống từ vô số ca kiểm thử có thể có — chính là cách xử lý nguyên lý này.\n• Vì sao A sai: Kiểm thử mọi đầu ra mong đợi không giải quyết được vấn đề, vì quan hệ giữa đầu vào và đầu ra khác nhau với từng đối tượng kiểm thử. Có khi số đầu ra gần như vô hạn (nhiều biến số thực), có khi chỉ có hai đầu ra (một biến true/false) nhưng vẫn có vô số tổ hợp đầu vào.\n• Vì sao B sai: Với hệ thống không tầm thường, số biến thể đầu vào gần như vô hạn, nên việc ghi lại tất cả là phi thực tế (mất thời gian vô hạn).\n• Vì sao C sai: Bắt đầu kiểm thử sớm bằng rà soát và kiểm thử tĩnh không giải quyết vấn đề có quá nhiều ca kiểm thử. Đó là nguyên lý ‘kiểm thử sớm tiết kiệm thời gian và tiền bạc’ — sửa khuyết tật sớm để tránh khuyết tật lan sang các sản phẩm phái sinh.",
  "lo": "FL-1.3.1",
  "k": "K2"
 },
 {
  "n": "4",
  "pre": "",
  "prev": "",
  "q": "Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?",
  "qv": "Hoạt động kiểm thử nào liên quan đến việc làm việc với yêu cầu dữ liệu kiểm thử (test data requirements), điều kiện kiểm thử (test conditions), yêu cầu môi trường kiểm thử (test environment requirements) và ca kiểm thử (test cases)?",
  "o": [
   {
    "t": "Test design",
    "v": "Thiết kế kiểm thử (test design) — đúng."
   },
   {
    "t": "Test execution",
    "v": "Thực thi kiểm thử (test execution) — sai, không trực tiếp xử lý yêu cầu dữ liệu, yêu cầu môi trường và điều kiện kiểm thử."
   },
   {
    "t": "Test analysis",
    "v": "Phân tích kiểm thử (test analysis) — sai, chỉ làm việc với điều kiện kiểm thử."
   },
   {
    "t": "Test implementation",
    "v": "Triển khai kiểm thử (test implementation) — sai, không làm việc với điều kiện kiểm thử."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Thiết kế kiểm thử dùng các điều kiện kiểm thử để tạo ra ca kiểm thử và các testware cần thiết khác như yêu cầu dữ liệu kiểm thử và test charter cho kiểm thử khám phá. Yêu cầu môi trường kiểm thử (gồm hạ tầng và công cụ cần thiết) cũng được xác định ở bước này. Như vậy cả bốn thứ trong câu hỏi đều có mặt.\n• Vì sao B sai: Thực thi kiểm thử là chạy các ca kiểm thử (trong các thủ tục kiểm thử), nhưng không trực tiếp làm việc với yêu cầu dữ liệu kiểm thử, yêu cầu môi trường kiểm thử và điều kiện kiểm thử.\n• Vì sao C sai: Phân tích kiểm thử xác định những gì cần kiểm thử: phân tích cơ sở kiểm thử (test basis) thành các điều kiện kiểm thử và ưu tiên chúng cùng các rủi ro liên quan. Hoạt động này có làm việc với điều kiện kiểm thử nhưng không với yêu cầu dữ liệu, yêu cầu môi trường và ca kiểm thử.\n• Vì sao D sai: Triển khai kiểm thử tạo thủ tục kiểm thử (test procedure, script thủ công/tự động) từ ca kiểm thử, gom thành bộ kiểm thử (test suite), sắp lịch thực thi, tạo dữ liệu kiểm thử và dựng môi trường. Nó có làm việc với ca kiểm thử, yêu cầu dữ liệu và yêu cầu môi trường, nhưng không làm việc với điều kiện kiểm thử.",
  "lo": "FL-1.4.1",
  "k": "K2"
 },
 {
  "n": "5",
  "pre": "",
  "prev": "",
  "q": "Which of the following is MOST likely to impact how testing is performed for a given test object?",
  "qv": "Yếu tố nào sau đây CÓ KHẢ NĂNG NHẤT ảnh hưởng đến cách thực hiện kiểm thử cho một đối tượng kiểm thử (test object) cụ thể?",
  "o": [
   {
    "t": "The average level of experience of the organization’s marketing team",
    "v": "Mức kinh nghiệm trung bình của đội marketing trong tổ chức — sai, đội marketing hầu như không làm kiểm thử."
   },
   {
    "t": "The knowledge of users that a new system is being developed for them",
    "v": "Việc người dùng biết rằng một hệ thống mới đang được phát triển cho họ — sai, không ảnh hưởng cách kiểm thử."
   },
   {
    "t": "The number of years’ experience of the members of the test team",
    "v": "Số năm kinh nghiệm của các thành viên đội kiểm thử — đúng."
   },
   {
    "t": "The end user’s organizational structure for a commercial music streaming application",
    "v": "Cơ cấu tổ chức của người dùng cuối đối với một ứng dụng nghe nhạc trực tuyến thương mại — sai, khác nhau giữa người dùng và thường không biết được."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Số năm kinh nghiệm của các thành viên đội kiểm thử quyết định năng lực và kiến thức (ví dụ về các công cụ, các loại khuyết tật) mà họ áp dụng khi kiểm thử. Đây là một yếu tố ngữ cảnh (con người) ảnh hưởng trực tiếp đến cách kiểm thử được thực hiện.\n• Vì sao A sai: Đội marketing hiếm khi tham gia kiểm thử nhiều (có thể chỉ tham gia kiểm thử chấp nhận ở một số tổ chức), và kinh nghiệm của họ chủ yếu là về marketing, nên khó ảnh hưởng đến cách kiểm thử đối tượng này.\n• Vì sao B sai: Việc người dùng biết hệ thống đang được xây dựng cho họ hầu như không ảnh hưởng đến cách kiểm thử. Sự tham gia của người dùng (nếu có ảnh hưởng) thường là do quyết định của tester, khách hàng và quản lý dự án.\n• Vì sao D sai: Người dùng cuối của ứng dụng nghe nhạc rất đa dạng, cơ cấu tổ chức khác nhau giữa từng người dùng và thậm chí không thể biết khi kiểm thử, nên hầu như không ảnh hưởng đến cách kiểm thử.",
  "lo": "FL-1.4.2",
  "k": "K2"
 },
 {
  "n": "6",
  "pre": "",
  "prev": "",
  "q": "Which of the following statements is a CORRECT example of the value of traceability?",
  "qv": "Phát biểu nào sau đây là ví dụ ĐÚNG về giá trị của truy vết (traceability)?",
  "o": [
   {
    "t": "Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk",
    "v": "Truy vết giữa các rủi ro đã được giảm thiểu và các ca kiểm thử đã đạt (passed) giúp xác định mức rủi ro còn lại (residual risk) — sai, cần truy vết giữa tất cả rủi ro và kết quả kiểm thử."
   },
   {
    "t": "Traceability between user requirements and test results provides a means of measuring project progress against business goals",
    "v": "Truy vết giữa yêu cầu người dùng và kết quả kiểm thử giúp đo tiến độ dự án so với mục tiêu kinh doanh — đúng."
   },
   {
    "t": "Traceability between testers and test cases that failed provides a means of determining the skill level of the testers",
    "v": "Truy vết giữa tester và các ca kiểm thử thất bại (failed) giúp xác định trình độ của tester — sai, không phản ánh kỹ năng và còn phản tác dụng."
   },
   {
    "t": "Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing",
    "v": "Truy vết giữa các rủi ro đã nhận diện và các điều kiện kiểm thử đã viết giúp xác định rủi ro nào đáng kiểm thử — sai, nó chỉ cho biết cần viết thêm điều kiện kiểm thử nào."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Truy vết giữa yêu cầu người dùng và kết quả kiểm thử cho biết yêu cầu nào đã được kiểm thử (và kết quả ra sao), nhờ đó đo được tiến độ dự án (về mặt kiểm thử) so với các mục tiêu kinh doanh.\n• Vì sao A sai: Rủi ro “đã được giảm thiểu” (bằng kiểm thử) thì đương nhiên đã có ca kiểm thử tương ứng đạt, nên truy vết này cho ít thông tin. Để đánh giá rủi ro còn lại, cần truy vết giữa TẤT CẢ rủi ro và kết quả kiểm thử, từ đó những rủi ro không có ca kiểm thử đạt tương ứng chính là rủi ro còn lại.\n• Vì sao C sai: Ca kiểm thử thất bại không cho thấy kỹ năng tester hơn gì ca kiểm thử đạt — còn tùy mục tiêu kiểm thử (xây dựng niềm tin hay gây ra sai sót). Đánh giá tester theo số ca đạt/thất bại còn phản tác dụng vì tester sẽ tối ưu theo chỉ số đó thay vì mục tiêu kiểm thử.\n• Vì sao D sai: Truy vết giữa rủi ro đã nhận diện và điều kiện kiểm thử đã viết giúp xác định cần viết thêm điều kiện kiểm thử nào. Việc quyết định rủi ro nào đáng kiểm thử thuộc về quản lý rủi ro (cụ thể là giảm thiểu rủi ro).",
  "lo": "FL-1.4.4",
  "k": "K2"
 },
 {
  "n": "7",
  "pre": "",
  "prev": "",
  "q": "Which of the following is MOST likely to be an example of a tester using a generic skill when testing?",
  "qv": "Phương án nào sau đây CÓ KHẢ NĂNG NHẤT là ví dụ về việc tester sử dụng một kỹ năng chung (generic skill) khi kiểm thử?",
  "o": [
   {
    "t": "The tester’s deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming",
    "v": "Tester am hiểu sâu nhiều trò chơi điện tử nên hợp tính với một lập trình viên cũng mê game — sai, đây không phải kỹ năng chung hữu ích cho kiểm thử."
   },
   {
    "t": "The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system",
    "v": "Tester từng là phi công nên hiểu tốt hơn các tiêu chí chấp nhận (acceptance criteria) của hệ thống điều khiển trực thăng — đúng, đây là kiến thức nghiệp vụ (domain knowledge)."
   },
   {
    "t": "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts",
    "v": "Tester từng là lập trình viên và dùng kỹ năng đó để giao tiếp tốt hơn với chuyên viên phân tích nghiệp vụ — sai, kỹ năng lập trình khó giúp giao tiếp với BA."
   },
   {
    "t": "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session",
    "v": "Tester rất cẩn thận, có phương pháp khi tạo ca kiểm thử trước khi bắt đầu phiên kiểm thử khám phá (exploratory testing) — sai, kiểm thử khám phá không viết ca kiểm thử trước."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Kiến thức nghiệp vụ (domain knowledge) giúp hiểu và giao tiếp với người dùng cuối và đại diện nghiệp vụ là một trong các kỹ năng chung cần có của tester. Kinh nghiệm làm phi công giúp tester hiểu rõ hơn các tiêu chí chấp nhận của hệ thống điều khiển trực thăng.\n• Vì sao A sai: Kỹ năng giao tiếp, lắng nghe chủ động và làm việc nhóm giúp tester tương tác hiệu quả với mọi bên liên quan, nhưng việc am hiểu game để hợp tính với một lập trình viên không phải là kỹ năng chung hữu ích cho kiểm thử.\n• Vì sao C sai: Kỹ năng lập trình có thể xem là kiến thức kỹ thuật giúp dùng một số công cụ kiểm thử hiệu quả hơn, nhưng khó có khả năng giúp cải thiện giao tiếp với chuyên viên phân tích nghiệp vụ (business analyst).\n• Vì sao D sai: Sự kỹ lưỡng, chú ý chi tiết, tò mò và cách làm có phương pháp đều là kỹ năng chung hữu ích. Tuy nhiên, khó có chuyện tester tạo ca kiểm thử trước khi bắt đầu kiểm thử khám phá, vì nguyên tắc cốt lõi của kiểm thử khám phá là ca kiểm thử được tạo ra trong lúc kiểm thử chứ không viết kịch bản trước.",
  "lo": "FL-1.5.1",
  "k": "K2"
 },
 {
  "n": "8",
  "pre": "",
  "prev": "",
  "q": "Which of the following is an advantage of the whole-team approach?",
  "qv": "Phương án nào sau đây là một lợi ích của cách tiếp cận toàn đội (whole-team approach)?",
  "o": [
   {
    "t": "It allows team members to take on any role at any time",
    "v": "Cho phép thành viên đảm nhận bất kỳ vai trò nào vào bất kỳ lúc nào — sai, chỉ đảm nhận vai trò mình đủ năng lực."
   },
   {
    "t": "It only needs a single team to support the complete development project",
    "v": "Chỉ cần một đội duy nhất cho toàn bộ dự án phát triển — sai, cách tiếp cận này nói về cách một đội làm việc, không nói chỉ cần một đội."
   },
   {
    "t": "It embeds business representatives alongside developers in the same team",
    "v": "Đặt đại diện nghiệp vụ làm việc cùng lập trình viên trong cùng một đội — sai, đây không phải lợi ích được nêu của cách tiếp cận toàn đội."
   },
   {
    "t": "It generates a team synergy that benefits the entire project",
    "v": "Tạo ra sức mạnh cộng hưởng (synergy) của đội, mang lại lợi ích cho toàn dự án — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Bằng cách tận dụng hiệu quả nhất các kỹ năng đa dạng của từng thành viên, cách tiếp cận toàn đội thúc đẩy động lực nhóm tốt hơn, tăng cường giao tiếp và cộng tác, và tạo ra sức mạnh cộng hưởng có lợi cho toàn bộ dự án.\n• Vì sao A sai: Cách tiếp cận toàn đội cho phép bất kỳ thành viên nào có đủ kỹ năng và kiến thức đảm nhận bất kỳ công việc nào, nhưng không có nghĩa ai cũng có thể đảm nhận mọi vai trò bất cứ lúc nào. Thường thành viên chỉ nhận vai trò mà mình có năng lực.\n• Vì sao B sai: Cách tiếp cận toàn đội mô tả cách một đội (thường trong Agile) làm việc; nó không nói về cách nhiều đội phối hợp trong dự án lớn, cũng không ngụ ý chỉ cần một đội “toàn diện” cho cả dự án.\n• Vì sao C sai: Theo giải thích chính thức, cách tiếp cận toàn đội không đòi hỏi mọi thành viên tham gia mọi quyết định quan trọng. Ví dụ, đại diện nghiệp vụ (Product Owner) không cần tham gia mọi quyết định kỹ thuật không ảnh hưởng đến kết quả kinh doanh — làm vậy chỉ làm chậm đội. Phương án này không mô tả lợi ích của cách tiếp cận toàn đội.",
  "lo": "FL-1.5.2",
  "k": "K1"
 },
 {
  "n": "9",
  "pre": "",
  "prev": "",
  "q": "Which of the following statements about the chosen software development lifecycle is CORRECT?",
  "qv": "Phát biểu nào sau đây về vòng đời phát triển phần mềm (SDLC) được chọn là ĐÚNG?",
  "o": [
   {
    "t": "If agile software development is used, automation of system tests replaces the need for regression testing",
    "v": "Nếu dùng phát triển phần mềm Agile thì tự động hóa kiểm thử hệ thống thay thế nhu cầu kiểm thử hồi quy (regression testing) — sai."
   },
   {
    "t": "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle",
    "v": "Nếu dùng mô hình phát triển tuần tự (sequential) thì kiểm thử động thường chỉ diễn ra ở giai đoạn sau của vòng đời — đúng."
   },
   {
    "t": "If an iterative development model is used, then component testing is typically performed manually by developers",
    "v": "Nếu dùng mô hình lặp (iterative) thì kiểm thử thành phần (component testing) thường được lập trình viên làm thủ công — sai, thường được tự động hóa."
   },
   {
    "t": "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments",
    "v": "Nếu dùng mô hình tăng dần (incremental) thì kiểm thử tĩnh làm ở các bước tăng đầu, kiểm thử động ở các bước sau — sai, mỗi bước tăng đều cần cả hai."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Trong mô hình tuần tự, giai đoạn đầu chưa có code để chạy nên chỉ làm kiểm thử tĩnh (ví dụ rà soát). Đến giai đoạn sau, khi đã có code chạy được, mới có thể kiểm thử động. Lưu ý: việc chuẩn bị cho kiểm thử động thường vẫn bắt đầu sớm trong bất kỳ SDLC nào.\n• Vì sao A sai: Trong Agile, mỗi vòng lặp đều tạo ra sản phẩm bàn giao, việc bàn giao thường xuyên đòi hỏi kiểm thử hồi quy nhiều. Một phần (hoặc toàn bộ) kiểm thử hồi quy có thể được tự động hóa, nhưng kiểm thử hồi quy không thể bị thay thế bởi việc tự động hóa kiểm thử hệ thống.\n• Vì sao C sai: Trong mô hình lặp (như Agile), kiểm thử thành phần thường được dùng làm kiểm thử hồi quy cho mỗi vòng lặp, phải chạy thường xuyên nên có lý do mạnh để tự động hóa, không phải để lập trình viên chạy thủ công.\n• Vì sao D sai: Trong hầu hết mô hình tăng dần, mỗi bước tăng đều tạo ra sản phẩm bàn giao, nên cần cả kiểm thử tĩnh lẫn kiểm thử động ở mọi cấp kiểm thử cho từng bước tăng.",
  "lo": "FL-2.1.1",
  "k": "K2"
 },
 {
  "n": "10",
  "pre": "",
  "prev": "",
  "q": "Which of the following is a good testing practice that applies to all software development lifecycles?",
  "qv": "Phương án nào sau đây là một thực hành kiểm thử tốt áp dụng cho mọi vòng đời phát triển phần mềm?",
  "o": [
   {
    "t": "Testers should review work products as part of the next development phase",
    "v": "Tester nên rà soát sản phẩm công việc như một phần của giai đoạn phát triển tiếp theo — sai, quá muộn."
   },
   {
    "t": "Testers should review work products as soon as drafts are available",
    "v": "Tester nên rà soát sản phẩm công việc ngay khi có bản nháp — đúng."
   },
   {
    "t": "Testers should review work products before test analysis and test design begin",
    "v": "Tester nên rà soát sản phẩm công việc trước khi bắt đầu phân tích và thiết kế kiểm thử — sai, rà soát cơ sở kiểm thử là một phần của phân tích kiểm thử."
   },
   {
    "t": "Testers should review work products immediately after they are published",
    "v": "Tester nên rà soát sản phẩm công việc ngay sau khi chúng được phát hành — sai, quá muộn."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Tester nên rà soát sản phẩm công việc ngay khi có bản nháp để kiểm thử sớm, theo cách tiếp cận dịch trái (shift-left). Đây là thực hành tốt áp dụng cho mọi SDLC.\n• Vì sao A sai: Nếu đợi đến giai đoạn phát triển tiếp theo mới rà soát, công việc phát triển (và kiểm thử) không cần thiết có thể đã bắt đầu dựa trên sản phẩm chưa rà soát và còn lỗi.\n• Vì sao C sai: Tester thường rà soát các sản phẩm công việc đóng vai trò cơ sở kiểm thử (test basis) trong lúc phân tích kiểm thử, chứ không phải trước phân tích và thiết kế kiểm thử.\n• Vì sao D sai: Đợi đến khi phát hành mới rà soát nghĩa là những khuyết tật lẽ ra tester tìm được sẽ nằm sẵn trong tài liệu đã phát hành. Cần rà soát ngay từ bản nháp.",
  "lo": "FL-2.1.2",
  "k": "K1"
 },
 {
  "n": "11",
  "pre": "",
  "prev": "",
  "q": "Which of the following is an example of a test-first approach to development?",
  "qv": "Phương án nào sau đây là ví dụ về cách tiếp cận phát triển viết kiểm thử trước (test-first)?",
  "o": [
   {
    "t": "Test-Driven Development",
    "v": "Phát triển hướng kiểm thử (Test-Driven Development – TDD) — đúng."
   },
   {
    "t": "Coverage-Driven Development",
    "v": "Phát triển hướng độ bao phủ (Coverage-Driven Development) — sai, không phải cách tiếp cận test-first."
   },
   {
    "t": "Quality-Driven Development",
    "v": "Phát triển hướng chất lượng (Quality-Driven Development) — sai, không phải cách tiếp cận test-first."
   },
   {
    "t": "Feature-Driven Development",
    "v": "Phát triển hướng tính năng (Feature-Driven Development) — sai, đây là một phương pháp Agile dựa trên bàn giao tính năng."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Phát triển hướng kiểm thử (TDD) là ví dụ nổi tiếng của cách tiếp cận test-first: viết kiểm thử trước, rồi viết code để kiểm thử đạt.\n• Vì sao B sai: Coverage-Driven Development không phải là ví dụ đúng của cách tiếp cận test-first.\n• Vì sao C sai: Quality-Driven Development không phải là ví dụ đúng của cách tiếp cận test-first.\n• Vì sao D sai: Feature-Driven Development không phải cách tiếp cận test-first mà là một phương pháp phát triển phần mềm Agile xoay quanh việc bàn giao các tính năng (thay vì user story như trong Scrum).",
  "lo": "FL-2.1.3",
  "k": "K1"
 },
 {
  "n": "12",
  "pre": "",
  "prev": "",
  "q": "Which of the following statements about DevOps is CORRECT?",
  "qv": "Phát biểu nào sau đây về DevOps là ĐÚNG?",
  "o": [
   {
    "t": "To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing",
    "v": "Để phát hành nhanh hơn, tích hợp liên tục (continuous integration) được dùng để khuyến khích lập trình viên nộp code nhanh mà không cần hoàn tất kiểm thử thành phần — sai."
   },
   {
    "t": "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression",
    "v": "Để có thể cập nhật và phát hành hệ thống thường xuyên hơn, cần nhiều kiểm thử hồi quy tự động để giảm rủi ro hồi quy — đúng."
   },
   {
    "t": "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach",
    "v": "Để đối xử công bằng giữa lập trình viên và vận hành, tester sẽ dồn nhiều công sức hơn cho kiểm thử phát hành do bộ phận vận hành thực hiện theo cách dịch phải (shift-right) — sai."
   },
   {
    "t": "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing",
    "v": "Để tăng sức cộng hưởng giữa tester, lập trình viên và vận hành, kiểm thử phải được tự động hóa hoàn toàn, không còn kiểm thử thủ công — sai."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: DevOps hỗ trợ kiểm thử theo nhiều cách: phản hồi nhanh về chất lượng code, kiểm thử hồi quy tự động giúp giảm rủi ro hồi quy, và thúc đẩy dịch trái (shift-left) với việc nộp code chất lượng cao kèm kiểm thử thành phần. Để phát hành thường xuyên, cần nhiều kiểm thử hồi quy tự động.\n• Vì sao A sai: Trong tích hợp liên tục, lập trình viên nộp kiểm thử thành phần (unit test) kèm code mới, và các kiểm thử này phải đạt thì code mới được đưa vào bản build. Vì vậy lập trình viên vẫn phải hoàn tất kiểm thử thành phần.\n• Vì sao C sai: Tester không tìm cách “đối xử công bằng” giữa lập trình viên và vận hành bằng cách dồn thời gian cho kiểm thử phát hành. Cách tiếp cận dịch phải (kiểm thử trong môi trường production) có thể được dùng, nhưng không vì lý do đó.\n• Vì sao D sai: CI/CD trong DevOps giúp môi trường kiểm thử ổn định và giảm nhu cầu kiểm thử thủ công, nhưng có rủi ro bỏ qua tầm quan trọng của kiểm thử thủ công, nhất là từ góc nhìn người dùng. Không có yêu cầu tự động hóa hoàn toàn.",
  "lo": "FL-2.1.4",
  "k": "K2"
 },
 {
  "n": "13",
  "pre": "",
  "prev": "",
  "q": "Which of the following is MOST likely to be performed as part of system testing?",
  "qv": "Hoạt động nào sau đây CÓ KHẢ NĂNG NHẤT được thực hiện như một phần của kiểm thử hệ thống (system testing)?",
  "o": [
   {
    "t": "Security testing of a credit management system by an independent test team",
    "v": "Kiểm thử bảo mật một hệ thống quản lý tín dụng do một đội kiểm thử độc lập thực hiện — đúng."
   },
   {
    "t": "Testing the interface of a currency exchange system with an external banking system",
    "v": "Kiểm thử giao diện giữa hệ thống đổi ngoại tệ và một hệ thống ngân hàng bên ngoài — sai, đây là kiểm thử tích hợp hệ thống (system integration testing)."
   },
   {
    "t": "Beta testing of a remote learning system by courseware developers",
    "v": "Kiểm thử beta một hệ thống học từ xa do người phát triển học liệu thực hiện — sai, beta testing là một dạng kiểm thử chấp nhận."
   },
   {
    "t": "Testing interactions between the user interface and database of a human resources system",
    "v": "Kiểm thử tương tác giữa giao diện người dùng và cơ sở dữ liệu của hệ thống nhân sự — sai, đây là kiểm thử tích hợp thành phần (component integration testing)."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Kiểm thử hệ thống xem xét hành vi và năng lực của toàn bộ hệ thống, bao gồm kiểm thử phi chức năng các đặc tính chất lượng như bảo mật. Kiểm thử này thường do một đội kiểm thử độc lập thực hiện dựa trên đặc tả hệ thống.\n• Vì sao B sai: Kiểm thử giao diện với các hệ thống và dịch vụ bên ngoài thuộc kiểm thử tích hợp hệ thống.\n• Vì sao C sai: Kiểm thử beta là một loại kiểm thử chấp nhận, thực hiện tại địa điểm bên ngoài bởi những người không thuộc tổ chức phát triển.\n• Vì sao D sai: Kiểm thử (giao diện và) tương tác giữa các thành phần của một hệ thống, như giữa giao diện người dùng và cơ sở dữ liệu, là kiểm thử tích hợp thành phần.",
  "lo": "FL-2.2.1",
  "k": "K2"
 },
 {
  "n": "14",
  "pre": "",
  "prev": "",
  "q": "Which of the following statements is CORRECT?",
  "qv": "Phát biểu nào sau đây là ĐÚNG?",
  "o": [
   {
    "t": "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses",
    "v": "Số kiểm thử hồi quy tăng dần theo tiến độ dự án, còn số kiểm thử xác nhận (confirmation test) giảm dần — sai, cả hai đều thường tăng."
   },
   {
    "t": "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced",
    "v": "Kiểm thử hồi quy được tạo và chạy khi đối tượng kiểm thử được sửa lỗi, còn kiểm thử xác nhận chạy khi đối tượng được nâng cấp — sai, ngược lại."
   },
   {
    "t": "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object",
    "v": "Kiểm thử hồi quy kiểm tra rằng môi trường vận hành không thay đổi, còn kiểm thử xác nhận kiểm thử các thay đổi của đối tượng kiểm thử — sai ở vế hồi quy."
   },
   {
    "t": "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code",
    "v": "Kiểm thử hồi quy quan tâm đến tác động bất lợi lên phần code không thay đổi, còn kiểm thử xác nhận quan tâm đến việc kiểm thử phần code đã thay đổi — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Kiểm thử hồi quy bảo đảm các thay đổi không gây tác động tiêu cực lên phần mềm không thay đổi. Kiểm thử xác nhận (confirmation testing) xác minh một khuyết tật đã được sửa đúng — tức là liên quan đến phần code đã thay đổi.\n• Vì sao A sai: Số kiểm thử hồi quy tăng dần vì mỗi thay đổi thường cần thêm kiểm thử hồi quy mới. Tương tự, số kiểm thử xác nhận cũng thường tăng vì mỗi bản sửa lỗi cần kiểm thử xác nhận mới.\n• Vì sao B sai: Ngược lại mới đúng: kiểm thử xác nhận được tạo và chạy khi đối tượng kiểm thử được sửa lỗi, còn kiểm thử hồi quy (lý tưởng) được chạy mỗi khi đối tượng kiểm thử được nâng cấp/thay đổi.\n• Vì sao C sai: Vế kiểm thử xác nhận đúng, nhưng kiểm thử hồi quy bảo đảm các thay đổi (kể cả thay đổi môi trường vận hành) không gây ảnh hưởng xấu đến phần mềm không đổi, chứ không kiểm tra rằng môi trường vận hành giữ nguyên.",
  "lo": "FL-2.2.3",
  "k": "K2"
 },
 {
  "n": "15",
  "pre": "",
  "prev": "",
  "q": "Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing?",
  "qv": "Phương án nào sau đây là ví dụ về một khuyết tật có thể được tìm thấy bằng kiểm thử tĩnh nhưng KHÔNG thể tìm bằng kiểm thử động?",
  "o": [
   {
    "t": "Lack of usability provided through the user interface",
    "v": "Giao diện người dùng thiếu tính khả dụng (usability) — sai, kiểm thử động với người dùng cũng phát hiện được."
   },
   {
    "t": "Code with no path that reaches it",
    "v": "Đoạn code không có đường thực thi nào đi tới (code không thể đạt tới — unreachable code) — đúng."
   },
   {
    "t": "Poor response times for most of the expected users",
    "v": "Thời gian phản hồi kém với phần lớn người dùng dự kiến — sai, cần chạy code mới phát hiện được, tức là kiểm thử động."
   },
   {
    "t": "Required features that are not implemented in the code",
    "v": "Các tính năng bắt buộc chưa được hiện thực trong code — sai, cả kiểm thử tĩnh lẫn động đều phát hiện được."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Rà soát code có thể phát hiện đoạn code mà không đường thực thi nào đi tới được. Kiểm thử động chỉ thực thi được code có thể đạt tới, và muốn kết luận một đoạn code không thể đạt tới thì phải chạy mọi tổ hợp đầu vào và trạng thái — điều bất khả thi với code thực tế.\n• Vì sao A sai: Thiếu tính khả dụng có thể phát hiện qua rà soát với checklist phù hợp, nhưng cũng có thể phát hiện bằng kiểm thử động khi cho một số người dùng điển hình dùng thử giao diện và góp ý.\n• Vì sao C sai: Thời gian phản hồi kém khó xác định nếu không chạy code; kiểm thử động phát hiện được, còn kiểm thử tĩnh khó có khả năng phát hiện. Đây là trường hợp ngược lại với yêu cầu câu hỏi.\n• Vì sao D sai: Người rà soát code nắm được các tính năng bắt buộc có thể phát hiện tính năng chưa được hiện thực, và kiểm thử động cũng phát hiện được điều này.",
  "lo": "FL-3.1.3",
  "k": "K2"
 },
 {
  "n": "16",
  "pre": "",
  "prev": "",
  "q": "Which of the following is a benefit of early and frequent stakeholder feedback?",
  "qv": "Phương án nào sau đây là lợi ích của việc nhận phản hồi sớm và thường xuyên từ các bên liên quan (stakeholder)?",
  "o": [
   {
    "t": "Managers are aware of which developers are less productive",
    "v": "Quản lý biết được lập trình viên nào kém năng suất hơn — sai, phản hồi đến từ stakeholder chứ không phải về lập trình viên."
   },
   {
    "t": "It allows project managers to prioritize their stakeholder interactions",
    "v": "Giúp quản lý dự án ưu tiên việc tương tác với các stakeholder — sai."
   },
   {
    "t": "It facilitates early communication of potential quality issues",
    "v": "Tạo điều kiện trao đổi sớm về các vấn đề chất lượng tiềm ẩn — đúng."
   },
   {
    "t": "End users better understand why the delivery of the work product is delayed",
    "v": "Người dùng cuối hiểu rõ hơn vì sao sản phẩm bị giao trễ — sai, phản hồi giúp tránh trễ hạn, và đi từ người dùng chứ không đến người dùng."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Nhận phản hồi từ stakeholder sớm và thường xuyên giúp trao đổi sớm về các vấn đề chất lượng tiềm ẩn, ngăn hiểu lầm về yêu cầu, và bảo đảm các thay đổi yêu cầu của stakeholder được hiểu và hiện thực sớm hơn.\n• Vì sao A sai: Phản hồi đến từ stakeholder (đại diện nghiệp vụ, người dùng cuối), không phải từ lập trình viên, nên khó có thể cho quản lý biết lập trình viên nào năng suất cao hay thấp.\n• Vì sao B sai: Phản hồi sớm và thường xuyên từ stakeholder không được quản lý dự án dùng để ưu tiên cách họ tương tác với từng stakeholder.\n• Vì sao D sai: Phản hồi sớm giúp tránh làm ra sản phẩm không đáp ứng nhu cầu (dẫn đến làm lại tốn kém và trễ hạn), nên lý tưởng là không có trễ hạn. Hơn nữa, phản hồi đi TỪ stakeholder (gồm người dùng cuối), không phải ĐẾN họ, nên không giúp người dùng cuối hiểu thêm.",
  "lo": "FL-3.2.1",
  "k": "K1"
 },
 {
  "n": "17",
  "pre": "<p>Given the following task descriptions:</p><ol><li>The quality characteristics to be evaluated and the exit criteria are selected</li><li>Everyone has access to the work product</li><li>Anomalies are identified in the work product</li><li>Anomalies are discussed</li></ol><p>And the following review activities:</p><ul><li>A. Individual review</li><li>B. Review initiation</li><li>C. Planning</li><li>D. Communication and analysis</li></ul>",
  "prev": "<p>Cho các mô tả công việc sau:</p><ol><li>Các đặc tính chất lượng cần đánh giá và tiêu chí kết thúc (exit criteria) được lựa chọn</li><li>Mọi người đều có quyền truy cập sản phẩm công việc (work product)</li><li>Các điểm bất thường (anomaly) được xác định trong sản phẩm công việc</li><li>Các điểm bất thường được thảo luận</li></ol><p>Và các hoạt động rà soát (review) sau:</p><ul><li>A. Rà soát cá nhân (Individual review)</li><li>B. Khởi động rà soát (Review initiation)</li><li>C. Lập kế hoạch (Planning)</li><li>D. Trao đổi và phân tích (Communication and analysis)</li></ul>",
  "q": "Which of the following BEST matches the task descriptions and activities?",
  "qv": "Phương án nào sau đây ghép mô tả công việc với hoạt động rà soát CHÍNH XÁC NHẤT?",
  "o": [
   {
    "t": "1B, 2C, 3D, 4A",
    "v": "1B, 2C, 3D, 4A — sai."
   },
   {
    "t": "1B, 2D, 3C, 4A",
    "v": "1B, 2D, 3C, 4A — sai."
   },
   {
    "t": "1C, 2A, 3B, 4D",
    "v": "1C, 2A, 3B, 4D — sai."
   },
   {
    "t": "1C, 2B, 3A, 4D",
    "v": "1C, 2B, 3A, 4D — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Xét từng mô tả công việc:\n  1 → C (Lập kế hoạch): xác định phạm vi rà soát, mục đích, sản phẩm cần rà soát, đặc tính chất lượng cần đánh giá, trọng tâm, tiêu chí kết thúc, thông tin hỗ trợ (tiêu chuẩn), công sức và khung thời gian.\n  2 → B (Khởi động rà soát): bảo đảm mọi người tham gia đều truy cập được sản phẩm công việc và tài nguyên cần thiết, làm rõ vai trò và trách nhiệm.\n  3 → A (Rà soát cá nhân): đánh giá chất lượng sản phẩm, xác định và ghi lại các điểm bất thường, đề xuất, câu hỏi bằng các kỹ thuật rà soát như dựa trên checklist hay dựa trên kịch bản.\n  4 → D (Trao đổi và phân tích): phân tích và thảo luận từng điểm bất thường, xác định trạng thái, người chịu trách nhiệm, hành động cần làm và đưa ra quyết định rà soát (thường trong cuộc họp), có thể quyết định cần rà soát lại.\n  Vậy đáp án là 1C, 2B, 3A, 4D.\n• Vì sao A sai: Ghép 1 với B và 2 với C là đảo ngược Lập kế hoạch và Khởi động; 3D, 4A cũng đảo ngược Rà soát cá nhân và Trao đổi–phân tích.\n• Vì sao B sai: 1 không thuộc Khởi động rà soát, và việc xác định điểm bất thường (3) không thuộc Lập kế hoạch.\n• Vì sao C sai: Truy cập sản phẩm (2) thuộc Khởi động chứ không phải Rà soát cá nhân, và xác định điểm bất thường (3) thuộc Rà soát cá nhân chứ không phải Khởi động.",
  "lo": "FL-3.2.2",
  "k": "K2"
 },
 {
  "n": "18",
  "pre": "<p>Given the following roles in reviews:</p><ol><li>Scribe</li><li>Review leader</li><li>Facilitator</li><li>Manager</li></ol><p>And the following responsibilities in reviews:</p><ul><li>A. Ensures the effective running of review meetings and the setting up a safe review environment</li><li>B. Records review information, such as decisions and new anomalies found during the review meeting</li><li>C. Decides what is to be reviewed and provides resources, such as staff and time for the review</li><li>D. Takes overall responsibility for the review such as organizing when and where the review will take place</li></ul>",
  "prev": "<p>Cho các vai trò trong rà soát (review) sau:</p><ol><li>Thư ký (Scribe)</li><li>Trưởng nhóm rà soát (Review leader)</li><li>Người điều phối (Facilitator)</li><li>Quản lý (Manager)</li></ol><p>Và các trách nhiệm trong rà soát sau:</p><ul><li>A. Bảo đảm các cuộc họp rà soát diễn ra hiệu quả và thiết lập một môi trường rà soát an toàn</li><li>B. Ghi lại thông tin rà soát, như các quyết định và các điểm bất thường (anomaly) mới phát hiện trong cuộc họp rà soát</li><li>C. Quyết định những gì cần rà soát và cung cấp nguồn lực, như nhân sự và thời gian cho việc rà soát</li><li>D. Chịu trách nhiệm chung về việc rà soát, như sắp xếp thời gian và địa điểm diễn ra rà soát</li></ul>",
  "q": "Which of the following BEST matches the roles and responsibilities?",
  "qv": "Phương án nào sau đây ghép vai trò với trách nhiệm CHÍNH XÁC NHẤT?",
  "o": [
   {
    "t": "1A, 2B, 3D, 4C",
    "v": "1A, 2B, 3D, 4C — sai."
   },
   {
    "t": "1A, 2C, 3B, 4D",
    "v": "1A, 2C, 3B, 4D — sai."
   },
   {
    "t": "1B, 2D, 3A, 4C",
    "v": "1B, 2D, 3A, 4C — đúng."
   },
   {
    "t": "1B, 2D, 3C, 4A",
    "v": "1B, 2D, 3C, 4A — sai."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Xét từng vai trò:\n  1. Thư ký (Scribe / Recorder) → B: thu thập phản hồi từ người rà soát và ghi lại thông tin rà soát như các quyết định và điểm bất thường mới phát hiện trong cuộc họp.\n  2. Trưởng nhóm rà soát (Review leader) → D: chịu trách nhiệm chung cho quá trình rà soát, như chọn thành viên, lên lịch họp (thời gian, địa điểm) và bảo đảm rà soát hoàn tất thành công.\n  3. Người điều phối (Facilitator / Moderator) → A: bảo đảm cuộc họp rà soát diễn ra hiệu quả — quản lý thời gian, hòa giải thảo luận, tạo môi trường an toàn để mọi người tự do nêu ý kiến.\n  4. Quản lý (Manager) → C: quyết định cần rà soát những gì và phân bổ nguồn lực như nhân sự và thời gian.\n  Vậy đáp án là 1B, 2D, 3A, 4C.\n• Vì sao A sai: Ghép Thư ký với A và Trưởng nhóm với B là sai; Người điều phối không chịu trách nhiệm chung (D).\n• Vì sao B sai: Thư ký không điều phối cuộc họp (A), Trưởng nhóm không cấp nguồn lực (C), Người điều phối không ghi biên bản (B), Quản lý không tổ chức thời gian/địa điểm rà soát (D).\n• Vì sao D sai: 1B, 2D đúng nhưng 3 và 4 bị đảo: Người điều phối không quyết định phạm vi và nguồn lực (C), Quản lý không điều hành cuộc họp (A).",
  "lo": "FL-3.2.3",
  "k": "K1"
 },
 {
  "n": "19",
  "pre": "",
  "prev": "",
  "q": "Which of the following statements BEST describes the difference between decision table testing and branch testing?",
  "qv": "Phát biểu nào sau đây mô tả ĐÚNG NHẤT sự khác biệt giữa kiểm thử bảng quyết định (decision table testing) và kiểm thử nhánh (branch testing)?",
  "o": [
   {
    "t": "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object.",
    "v": "Trong kiểm thử bảng quyết định, ca kiểm thử được rút ra từ các câu lệnh quyết định trong code. Trong kiểm thử nhánh, ca kiểm thử được rút ra từ hiểu biết về luồng điều khiển của đối tượng kiểm thử — sai, bảng quyết định là kỹ thuật hộp đen."
   },
   {
    "t": "In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code.",
    "v": "Trong kiểm thử bảng quyết định, ca kiểm thử được rút ra từ đặc tả mô tả logic nghiệp vụ. Trong kiểm thử nhánh, ca kiểm thử dựa trên việc dự đoán các khuyết tật tiềm ẩn trong mã nguồn — sai, dự đoán khuyết tật là đoán lỗi (error guessing)."
   },
   {
    "t": "In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic.",
    "v": "Trong kiểm thử bảng quyết định, ca kiểm thử được rút ra từ hiểu biết về luồng điều khiển. Trong kiểm thử nhánh, ca kiểm thử được rút ra từ đặc tả logic nghiệp vụ — sai, bị đảo ngược hộp đen/hộp trắng."
   },
   {
    "t": "In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code.",
    "v": "Trong kiểm thử bảng quyết định, ca kiểm thử độc lập với cách phần mềm được hiện thực. Trong kiểm thử nhánh, ca kiểm thử chỉ có thể được tạo sau khi đã có thiết kế hoặc hiện thực code — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Kiểm thử bảng quyết định là kỹ thuật hộp đen (black-box), dựa trên phân tích hành vi được đặc tả của đối tượng kiểm thử mà không cần biết cấu trúc bên trong, nên ca kiểm thử độc lập với cách hiện thực phần mềm. Kiểm thử nhánh là kỹ thuật hộp trắng (white-box), dựa trên phân tích cấu trúc và xử lý bên trong; vì phụ thuộc vào cách thiết kế và viết code nên chỉ tạo được sau khi có thiết kế hoặc code.\n• Vì sao A sai: Kiểm thử bảng quyết định là kỹ thuật hộp đen, không phải hộp trắng — ca kiểm thử không dựa trên các câu lệnh quyết định trong mã nguồn. (Vế về kiểm thử nhánh thì đúng.)\n• Vì sao B sai: Dự đoán các khuyết tật tiềm ẩn là đặc trưng của đoán lỗi (error guessing — kỹ thuật dựa trên kinh nghiệm), không phải kiểm thử nhánh (kỹ thuật hộp trắng). (Vế về bảng quyết định thì đúng.)\n• Vì sao C sai: Hai vế bị đảo ngược. Dựa trên luồng điều khiển là kỹ thuật hộp trắng, trong khi bảng quyết định thường dựa trên logic nghiệp vụ (hộp đen). Kiểm thử nhánh không rút ra từ đặc tả — nếu vậy nó sẽ là kỹ thuật hộp đen; thực tế nó dựa trên cấu trúc mã nguồn.",
  "lo": "FL-4.1.1",
  "k": "K2"
 },
 {
  "n": "20",
  "pre": "<p>Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to.</p><p>For every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total).</p>",
  "prev": "<p>Khách hàng của chuỗi rửa xe TestWash có thẻ ghi lại số lần rửa xe họ đã mua cho đến nay. Giá trị ban đầu là 0. Sau khi vào trạm rửa xe, hệ thống tăng số trên thẻ thêm một. Giá trị này là số thứ tự của lần rửa hiện tại. Dựa trên số này, hệ thống quyết định khách hàng được hưởng mức giảm giá nào.</p><p>Cứ mỗi lần rửa thứ mười, hệ thống giảm giá 10%, và mỗi lần rửa thứ hai mươi, hệ thống giảm thêm 40% (tức là tổng cộng giảm 50%).</p>",
  "q": "Which of the following sets of input data (understood as the numbers of the current wash) achieves the highest equivalence partition coverage?",
  "qv": "Bộ dữ liệu đầu vào nào sau đây (hiểu là số thứ tự của lần rửa hiện tại) đạt độ bao phủ phân vùng tương đương (equivalence partition coverage) cao nhất?",
  "o": [
   {
    "t": "19, 20, 30",
    "v": "19, 20, 30 — đúng, phủ cả 3 phân vùng."
   },
   {
    "t": "11, 12, 20",
    "v": "11, 12, 20 — sai, chỉ phủ 2/3 phân vùng (thiếu giảm 10%)."
   },
   {
    "t": "1, 10, 50",
    "v": "1, 10, 50 — sai, chỉ phủ 2/3 phân vùng (thiếu giảm 50%)."
   },
   {
    "t": "10, 29, 30, 31",
    "v": "10, 29, 30, 31 — sai, chỉ phủ 2/3 phân vùng (thiếu giảm 50%)."
   }
  ],
  "a": 0,
  "e": "Xác định các phân vùng tương đương hợp lệ theo số lần rửa n:\n  - “Không giảm giá”: n không chia hết cho 10 (1–9, 11–19, 21–29, ...).\n  - “Giảm 10%”: n chia hết cho 10 nhưng không chia hết cho 20 (10, 30, 50, ...).\n  - “Giảm 50%”: n chia hết cho 20 (20, 40, 60, ...).\n• Vì sao A đúng: 19 → không giảm giá; 20 → giảm 50%; 30 → giảm 10%. Ba giá trị phủ đủ cả 3 phân vùng hợp lệ (3/3 = 100%).\n• Vì sao B sai: 11 và 12 → không giảm giá; 20 → giảm 50%. Chỉ phủ 2/3 phân vùng (thiếu “giảm 10%”).\n• Vì sao C sai: 1 → không giảm giá; 10 và 50 → giảm 10% (50 không chia hết cho 20). Thiếu “giảm 50%”, chỉ phủ 2/3.\n• Vì sao D sai: 29 và 31 → không giảm giá; 10 và 30 → giảm 10%. Thiếu “giảm 50%”, chỉ phủ 2/3 dù có 4 giá trị.",
  "lo": "FL-4.2.1",
  "k": "K3"
 },
 {
  "n": "21",
  "pre": "<p>You are testing a form that verifies the correctness of the length of the password given as input. The form accepts a password with the correct length and rejects a password that is too short or too long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it is considered incorrect.</p><p>At first, the form is empty (password length = 0). You apply boundary value analysis to the “password length” variable.</p><p>Your set of test cases achieves 100% 2-value boundary value coverage. The team decided that due to the high risk of this component, test cases should be added to ensure 100% 3-value boundary value coverage.</p>",
  "prev": "<p>Bạn đang kiểm thử một form kiểm tra độ dài của mật khẩu được nhập vào. Form chấp nhận mật khẩu có độ dài đúng và từ chối mật khẩu quá ngắn hoặc quá dài. Độ dài mật khẩu được coi là đúng nếu có từ 6 đến 12 ký tự (tính cả hai đầu). Ngược lại, nó được coi là không đúng.</p><p>Ban đầu form rỗng (độ dài mật khẩu = 0). Bạn áp dụng phân tích giá trị biên (boundary value analysis – BVA) cho biến “độ dài mật khẩu”.</p><p>Bộ ca kiểm thử (test case) của bạn đạt 100% độ bao phủ giá trị biên 2 giá trị (2-value boundary value coverage). Do thành phần này có rủi ro cao, nhóm quyết định bổ sung ca kiểm thử để đạt 100% độ bao phủ giá trị biên 3 giá trị (3-value boundary value coverage).</p>",
  "q": "Which additional password lengths should be tested to achieve this?",
  "qv": "Cần kiểm thử thêm những độ dài mật khẩu nào để đạt được điều này?",
  "o": [
   {
    "t": "4, 5, 13, 14",
    "v": "4, 5, 13, 14 — sai, vì 5 và 13 đã được phủ bởi BVA 2 giá trị, đồng thời còn thiếu 1, 7, 11."
   },
   {
    "t": "7, 11",
    "v": "7, 11 — sai, vì còn thiếu 1, 4 và 14."
   },
   {
    "t": "1, 5, 13",
    "v": "1, 5, 13 — sai, vì 5 và 13 đã được kiểm thử, còn thiếu 4, 7, 11, 14."
   },
   {
    "t": "1, 4, 7, 11, 14",
    "v": "1, 4, 7, 11, 14 — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Miền giá trị của độ dài mật khẩu có ba phân vùng tương đương (equivalence partition):\n  - Quá ngắn: {0, 1, …, 4, 5}\n  - Hợp lệ: {6, 7, …, 11, 12}\n  - Quá dài: {13, 14, …}\nCác giá trị biên (boundary value) là 0, 5, 6, 12, 13 (0 là giá trị nhỏ nhất vì form ban đầu rỗng; phân vùng \"quá dài\" không có biên trên).\nBước 1 – BVA 2 giá trị (2-value BVA): với mỗi biên, kiểm thử chính giá trị biên và giá trị liền kề thuộc phân vùng bên cạnh → các giá trị 0, 5, 6, 12, 13. Đây là những độ dài đã được kiểm thử.\nBước 2 – BVA 3 giá trị (3-value BVA): với mỗi biên, kiểm thử giá trị biên và cả hai giá trị liền kề hai bên → 0, 1, 4, 5, 6, 7, 11, 12, 13, 14.\nBước 3 – Lấy hiệu: {0, 1, 4, 5, 6, 7, 11, 12, 13, 14} trừ {0, 5, 6, 12, 13} = {1, 4, 7, 11, 14}.\n• Vì sao A sai: 5 và 13 đã được kiểm thử ở BVA 2 giá trị; ngoài ra thiếu 1, 7, 11.\n• Vì sao B sai: 7 và 11 là cần thiết nhưng chưa đủ — thiếu 1, 4, 14.\n• Vì sao C sai: 5 và 13 đã được kiểm thử; thiếu 4, 7, 11, 14.",
  "lo": "FL-4.2.2",
  "k": "K3"
 },
 {
  "n": "22",
  "pre": "<p>The following decision table contains the rules for determining the risk of atherosclerosis.</p><table><tr><th></th><th></th><th>Rule 1</th><th>Rule 2</th><th>Rule 3</th><th>Rule 4</th><th>Rule 5</th></tr><tr><th>Conditions</th><td>Cholesterol (mg/dl)</td><td>≤ 124</td><td>≤ 124</td><td>125 – 200</td><td>125 – 200</td><td>≥ 201</td></tr><tr><th></th><td>Blood pressure (mm Hg)</td><td>≤ 140</td><td>&gt; 140</td><td>≤ 140</td><td>&gt; 140</td><td>–</td></tr><tr><th>Action</th><td>Risk level</td><td>very low</td><td>low</td><td>medium</td><td>high</td><td>very high</td></tr></table><p>You designed the test cases with the following input data:</p><ul><li>TC1: Cholesterol = 125 mg/dl, Blood pressure = 141 mm Hg</li><li>TC2: Cholesterol = 200 mg/dl, Blood pressure = 201 mm Hg</li><li>TC3: Cholesterol = 124 mg/dl, Blood pressure = 201 mm Hg</li><li>TC4: Cholesterol = 109 mg/dl, Blood pressure = 200 mm Hg</li><li>TC5: Cholesterol = 201 mg/dl, Blood pressure = 140 mm Hg</li></ul>",
  "prev": "<p>Bảng quyết định (decision table) sau chứa các quy tắc xác định nguy cơ xơ vữa động mạch.</p><table><tr><th></th><th></th><th>Rule 1</th><th>Rule 2</th><th>Rule 3</th><th>Rule 4</th><th>Rule 5</th></tr><tr><th>Điều kiện (Conditions)</th><td>Cholesterol (mg/dl)</td><td>≤ 124</td><td>≤ 124</td><td>125 – 200</td><td>125 – 200</td><td>≥ 201</td></tr><tr><th></th><td>Huyết áp (mm Hg)</td><td>≤ 140</td><td>&gt; 140</td><td>≤ 140</td><td>&gt; 140</td><td>–</td></tr><tr><th>Hành động (Action)</th><td>Mức rủi ro</td><td>rất thấp</td><td>thấp</td><td>trung bình</td><td>cao</td><td>rất cao</td></tr></table><p>Bạn đã thiết kế các ca kiểm thử (test case) với dữ liệu đầu vào như sau:</p><ul><li>TC1: Cholesterol = 125 mg/dl, Huyết áp = 141 mm Hg</li><li>TC2: Cholesterol = 200 mg/dl, Huyết áp = 201 mm Hg</li><li>TC3: Cholesterol = 124 mg/dl, Huyết áp = 201 mm Hg</li><li>TC4: Cholesterol = 109 mg/dl, Huyết áp = 200 mm Hg</li><li>TC5: Cholesterol = 201 mg/dl, Huyết áp = 140 mm Hg</li></ul>",
  "q": "What is the decision table coverage achieved by these test cases?",
  "qv": "Độ bao phủ bảng quyết định (decision table coverage) mà các ca kiểm thử này đạt được là bao nhiêu?",
  "o": [
   {
    "t": "40%",
    "v": "40% — sai, các ca kiểm thử phủ 3 chứ không phải 2 cột."
   },
   {
    "t": "60%",
    "v": "60% — đúng (3/5 cột)."
   },
   {
    "t": "80%",
    "v": "80% — sai, Rule 1 và Rule 3 không được phủ."
   },
   {
    "t": "100%",
    "v": "100% — sai, có hai cột chưa được phủ."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Bảng quyết định có 5 cột (rule); mỗi ca kiểm thử phủ đúng một cột. Xét từng ca:\n  - TC1: Cholesterol 125 (thuộc 125–200), huyết áp 141 (> 140) → Rule 4.\n  - TC2: Cholesterol 200 (thuộc 125–200), huyết áp 201 (> 140) → Rule 4.\n  - TC3: Cholesterol 124 (≤ 124), huyết áp 201 (> 140) → Rule 2.\n  - TC4: Cholesterol 109 (≤ 124), huyết áp 200 (> 140) → Rule 2.\n  - TC5: Cholesterol 201 (≥ 201), huyết áp không quan trọng → Rule 5.\nCác cột được phủ: Rule 2, Rule 4, Rule 5 → 3/5 cột. Độ bao phủ = (3/5) × 100% = 60%.\n• Vì sao A sai: 40% tương ứng 2/5 cột, nhưng thực tế phủ được 3 cột.\n• Vì sao C sai: 80% đòi hỏi phủ 4 cột; Rule 1 (≤ 124, ≤ 140) và Rule 3 (125–200, ≤ 140) đều không có ca kiểm thử nào.\n• Vì sao D sai: 100% đòi hỏi phủ cả 5 cột; có 5 ca kiểm thử nhưng nhiều ca trùng cột.",
  "lo": "FL-4.2.3",
  "k": "K3"
 },
 {
  "n": "23",
  "pre": "<p>A storage system can store up to three elements and is modeled by the following state transition diagram. The variable N represents the number of currently stored elements.</p><p>States: START, NOT FULL, FULL. Transitions:</p><ul><li>START → NOT FULL: Add / N := 1</li><li>NOT FULL → NOT FULL: Add [N &lt; 2] / N := N + 1</li><li>NOT FULL → FULL: Add [N = 2] / N := N + 1</li><li>FULL → NOT FULL: Remove / N := N – 1</li><li>NOT FULL → NOT FULL: Remove [N &gt; 0] / N := N – 1</li></ul>",
  "prev": "<p>Một hệ thống lưu trữ có thể chứa tối đa ba phần tử và được mô hình hóa bằng sơ đồ chuyển trạng thái (state transition diagram) sau. Biến N biểu thị số phần tử đang được lưu trữ.</p><p>Các trạng thái: START, NOT FULL (chưa đầy), FULL (đầy). Các chuyển trạng thái (transition):</p><ul><li>START → NOT FULL: Add / N := 1</li><li>NOT FULL → NOT FULL: Add [N &lt; 2] / N := N + 1</li><li>NOT FULL → FULL: Add [N = 2] / N := N + 1</li><li>FULL → NOT FULL: Remove / N := N – 1</li><li>NOT FULL → NOT FULL: Remove [N &gt; 0] / N := N – 1</li></ul>",
  "img": "b-state",
  "q": "Which of the following test cases, represented as sequences of events, achieves the highest level of valid transitions coverage?",
  "qv": "Ca kiểm thử nào sau đây (biểu diễn dưới dạng chuỗi sự kiện) đạt mức độ bao phủ chuyển trạng thái hợp lệ (valid transitions coverage) cao nhất?",
  "o": [
   {
    "t": "Add, Remove, Add, Add, Add",
    "v": "Add, Remove, Add, Add, Add — sai, chỉ phủ 4/5 chuyển trạng thái (80%), thiếu Remove từ FULL."
   },
   {
    "t": "Add, Add, Add, Add, Remove, Remove",
    "v": "Add, Add, Add, Add, Remove, Remove — sai, không thực hiện được vì không có Add hợp lệ từ FULL."
   },
   {
    "t": "Add, Add, Add, Remove, Remove",
    "v": "Add, Add, Add, Remove, Remove — đúng, phủ 5/5 chuyển trạng thái (100%)."
   },
   {
    "t": "Add, Add, Add, Remove, Add",
    "v": "Add, Add, Add, Remove, Add — sai, chỉ phủ 4/5 (80%), thiếu Remove [N > 0] trong NOT FULL."
   }
  ],
  "a": 2,
  "e": "Có 5 chuyển trạng thái hợp lệ:\n  T1: START → NOT FULL: Add / N := 1\n  T2: NOT FULL → NOT FULL: Add [N < 2] / N := N + 1\n  T3: NOT FULL → FULL: Add [N = 2] / N := N + 1\n  T4: FULL → NOT FULL: Remove / N := N – 1\n  T5: NOT FULL → NOT FULL: Remove [N > 0] / N := N – 1\nMỗi Add tăng N thêm 1, mỗi Remove giảm N đi 1. Khi N = 0 không thể Remove; khi N = 3 (FULL) không thể Add.\n• Vì sao C đúng: Add (T1, N=1) → Add (T2, N=2) → Add (T3, N=3, FULL) → Remove (T4, N=2, NOT FULL) → Remove (T5, N=1). Phủ cả 5/5 chuyển trạng thái = 100%.\n• Vì sao A sai: Add (T1, N=1) → Remove (T5, N=0) → Add (T2, N=1) → Add (T2, N=2) → Add (T3, N=3). Phủ T1, T2, T3, T5 = 4/5 = 80%; thiếu T4.\n• Vì sao B sai: Sau ba lần Add (T1, T2, T3) hệ thống ở trạng thái FULL, và không có chuyển trạng thái hợp lệ nào từ FULL với sự kiện Add → ca kiểm thử không khả thi. Đến lúc đó mới đạt 3/5 = 60%.\n• Vì sao D sai: Add (T1) → Add (T2) → Add (T3) → Remove (T4, N=2) → Add (T3 lần nữa, N=3). Phủ T1, T2, T3, T4 = 4/5 = 80%; thiếu T5.",
  "lo": "FL-4.2.4",
  "k": "K3"
 },
 {
  "n": "24",
  "pre": "<p>You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage.</p>",
  "prev": "<p>Bạn chạy hai ca kiểm thử T1 và T2 trên cùng một đoạn mã. T1 đạt 40% độ bao phủ câu lệnh (statement coverage) và T2 đạt 65% độ bao phủ câu lệnh.</p>",
  "q": "Which of the following sentences must be necessarily true?",
  "qv": "Câu nào sau đây chắc chắn phải đúng?",
  "o": [
   {
    "t": "The test suite composed of tests T1 and T2 achieves 105% statement coverage",
    "v": "Bộ kiểm thử gồm T1 và T2 đạt 105% độ bao phủ câu lệnh — sai, độ bao phủ không thể vượt quá 100%."
   },
   {
    "t": "There exists at least one statement that must have been executed by both T1 and T2",
    "v": "Tồn tại ít nhất một câu lệnh được thực thi bởi cả T1 và T2 — đúng."
   },
   {
    "t": "At least 5% of the statements in the code that was tested are non-executable",
    "v": "Ít nhất 5% câu lệnh trong mã được kiểm thử là không thể thực thi — sai, độ bao phủ câu lệnh không cho biết điều này."
   },
   {
    "t": "The test suite composed of tests T1 and T2 achieves full branch coverage",
    "v": "Bộ kiểm thử gồm T1 và T2 đạt độ bao phủ nhánh đầy đủ — sai."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: 40% + 65% = 105% > 100%. Nếu tập câu lệnh mà T1 và T2 thực thi hoàn toàn không giao nhau thì bộ {T1, T2} sẽ phủ 105% — điều không thể. Vì vậy ít nhất 5% số câu lệnh thực thi được phải được cả T1 lẫn T2 thực thi, tức chắc chắn có ít nhất một câu lệnh chung.\n• Vì sao A sai: Độ bao phủ (coverage) luôn là tỷ lệ phần trăm các phần tử được phủ nên không thể vượt quá 100%. Độ bao phủ của bộ kiểm thử là hợp của các câu lệnh đã chạy, không phải tổng hai con số.\n• Vì sao C sai: Độ bao phủ câu lệnh (statement coverage) không nói gì về số lượng câu lệnh không thể thực thi trong mã.\n• Vì sao D sai: Ngay cả khi đạt 100% độ bao phủ câu lệnh cũng không suy ra đạt 100% độ bao phủ nhánh (branch coverage); ở đây ta còn không biết độ bao phủ câu lệnh có đạt 100% hay không.",
  "lo": "FL-4.3.1",
  "k": "K2"
 },
 {
  "n": "25",
  "pre": "<p>Let the branch coverage metric be defined as BCov = (X / Y) * 100%.</p>",
  "prev": "<p>Giả sử chỉ số độ bao phủ nhánh (branch coverage) được định nghĩa là BCov = (X / Y) * 100%.</p>",
  "q": "What do X and Y represent in this formula?",
  "qv": "X và Y trong công thức này biểu thị điều gì?",
  "o": [
   {
    "t": "X = number of decision outcomes exercised by the test cases; Y = total number of decision outcomes in the code",
    "v": "X = số kết quả quyết định (decision outcome) được các ca kiểm thử thực thi; Y = tổng số kết quả quyết định trong mã — sai, bỏ sót nhánh không điều kiện."
   },
   {
    "t": "X = number of conditional branches exercised by the test cases; Y = total number of branches in the code",
    "v": "X = số nhánh có điều kiện được thực thi; Y = tổng số nhánh trong mã — sai, X phải tính cả nhánh không điều kiện."
   },
   {
    "t": "X = number of branches exercised by the test cases; Y = total number of branches in the code",
    "v": "X = số nhánh được các ca kiểm thử thực thi; Y = tổng số nhánh trong mã — đúng."
   },
   {
    "t": "X = number of conditional branches exercised by the test cases; Y = total number of decision outcomes in the code",
    "v": "X = số nhánh có điều kiện được thực thi; Y = tổng số kết quả quyết định trong mã — sai, chỉ tính nhánh có điều kiện."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Kiểm thử nhánh (branch testing) là kỹ thuật hộp trắng, trong đó phần tử bao phủ (coverage item) là các nhánh. Một nhánh là sự chuyển điều khiển giữa hai nút trong đồ thị luồng điều khiển (control flow graph); nhánh có thể không điều kiện (mã tuần tự thẳng) hoặc có điều kiện (một kết quả quyết định – decision outcome). Độ bao phủ nhánh = số nhánh được các ca kiểm thử thực thi / tổng số nhánh × 100%.\n• Vì sao A sai: Kết quả quyết định chính là nhánh có điều kiện; độ bao phủ nhánh phải tính cả nhánh không điều kiện, không chỉ nhánh có điều kiện.\n• Vì sao B sai: X chỉ đếm nhánh có điều kiện trong khi độ bao phủ nhánh phải đếm cả nhánh không điều kiện.\n• Vì sao D sai: Cả X và Y đều chỉ đếm nhánh có điều kiện, bỏ qua các nhánh không điều kiện.",
  "lo": "FL-4.3.2",
  "k": "K2"
 },
 {
  "n": "26",
  "pre": "",
  "prev": "",
  "q": "Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
  "qv": "HAI phát biểu nào sau đây là lý do TỐT NHẤT để sử dụng kiểm thử thăm dò (exploratory testing)?",
  "o": [
   {
    "t": "Testers have not been allocated enough time for test design and test execution",
    "v": "Tester không được phân bổ đủ thời gian để thiết kế và thực thi kiểm thử — đúng, áp lực thời gian là lý do phù hợp."
   },
   {
    "t": "The existing test strategy requires that testers use formal, black-box test techniques",
    "v": "Chiến lược kiểm thử hiện tại yêu cầu tester dùng các kỹ thuật hộp đen chính thức — sai, kiểm thử thăm dò không phải kỹ thuật hộp đen."
   },
   {
    "t": "The specification is written in a formal language that can be processed by a tool",
    "v": "Đặc tả được viết bằng ngôn ngữ hình thức mà công cụ xử lý được — sai, kiểm thử thăm dò hữu ích khi đặc tả kém."
   },
   {
    "t": "Testers are the members of an agile team and have good programming skills",
    "v": "Tester là thành viên nhóm agile và có kỹ năng lập trình tốt — sai, kỹ năng lập trình không liên quan."
   },
   {
    "t": "Testers are experienced in the business domain and have good analytical skills",
    "v": "Tester có kinh nghiệm về nghiệp vụ và kỹ năng phân tích tốt — đúng."
   }
  ],
  "a": [
   0,
   4
  ],
  "e": "Kiểm thử thăm dò (exploratory testing) hữu ích khi đặc tả ít hoặc không đầy đủ, hoặc khi có áp lực thời gian lớn; nó cũng bổ sung cho các kỹ thuật chính thức hơn. Nó hiệu quả hơn nếu tester có kinh nghiệm, hiểu biết nghiệp vụ và các kỹ năng như phân tích, tò mò, sáng tạo.\n• Vì sao A đúng: Thiếu thời gian (áp lực thời gian) là tình huống điển hình phù hợp với kiểm thử thăm dò.\n• Vì sao E đúng: Kiểm thử thăm dò hiệu quả hơn khi tester có kinh nghiệm, kiến thức nghiệp vụ và kỹ năng phân tích tốt.\n• Vì sao B sai: Kiểm thử thăm dò không phải là kỹ thuật kiểm thử hộp đen chính thức.\n• Vì sao C sai: Kiểm thử thăm dò hữu ích khi đặc tả viết kém, không phải khi đặc tả hình thức và có thể xử lý bằng công cụ.\n• Vì sao D sai: Về nguyên tắc, kỹ năng lập trình không liên quan đến kiểm thử thăm dò.",
  "lo": "FL-4.4.2",
  "k": "K2"
 },
 {
  "n": "27",
  "pre": "",
  "prev": "",
  "q": "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
  "qv": "Mục nào sau đây phù hợp NHẤT làm một phần tử của checklist dùng trong kiểm thử dựa trên checklist (checklist-based testing)?",
  "o": [
   {
    "t": "“The developer made an error when implementing the code”",
    "v": "“Lập trình viên đã mắc lỗi khi hiện thực mã” — sai, đây là mô tả một lỗi (error), không phải điều kiện kiểm thử."
   },
   {
    "t": "“The achieved statement coverage exceeds 85%”",
    "v": "“Độ bao phủ câu lệnh đạt được vượt quá 85%” — sai, đây là tiêu chí kết thúc (exit criterion)."
   },
   {
    "t": "“The program works correctly regarding functional and non-functional requirements”",
    "v": "“Chương trình hoạt động đúng với các yêu cầu chức năng và phi chức năng” — sai, quá chung chung."
   },
   {
    "t": "“The error messages are written in language that the user can understand”",
    "v": "“Thông báo lỗi được viết bằng ngôn ngữ người dùng có thể hiểu” — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Đây là một điều kiện kiểm thử (test condition) cụ thể mà con người có thể kiểm tra — đúng loại mục cần có trong checklist.\n• Vì sao A sai: Checklist nên chứa các điều kiện kiểm thử cần xác minh. Đây là ví dụ về một lỗi (error), không phải điều kiện kiểm thử; dù có thể suy ra vài điều kiện kiểm thử từ đó thì mô tả này vẫn quá chung chung.\n• Vì sao B sai: Checklist không nên chứa các mục phù hợp hơn với tiêu chí kết thúc (exit criteria). Đây là ví dụ về tiêu chí kết thúc.\n• Vì sao C sai: Checklist không nên chứa mục quá chung chung. Mục này gần như mô tả một mục tiêu kiểm thử (test objective).",
  "lo": "FL-4.4.3",
  "k": "K2"
 },
 {
  "n": "28",
  "pre": "<p>Consider the following acceptance criteria for a user story written from the perspective of an online store owner.</p><p>Given that the user is logged in and on the homepage,<br>When the user clicks on the \"Add Item\" button,<br>Then the \"Create Item\" form should appear,<br>And the user should be able to input a name and price for the new item.</p>",
  "prev": "<p>Xem xét các tiêu chí chấp nhận (acceptance criteria) sau cho một user story được viết từ góc nhìn của chủ cửa hàng trực tuyến.</p><p>Given (Cho trước) người dùng đã đăng nhập và đang ở trang chủ,<br>When (Khi) người dùng nhấn nút \"Add Item\",<br>Then (Thì) form \"Create Item\" sẽ xuất hiện,<br>And (Và) người dùng có thể nhập tên và giá cho mặt hàng mới.</p>",
  "q": "In what format is this acceptance criteria written?",
  "qv": "Tiêu chí chấp nhận này được viết theo định dạng nào?",
  "o": [
   {
    "t": "Rule-oriented",
    "v": "Hướng quy tắc (rule-oriented) — sai, Given/When/Then là định dạng hướng kịch bản."
   },
   {
    "t": "Scenario-oriented",
    "v": "Hướng kịch bản (scenario-oriented) — đúng."
   },
   {
    "t": "Product-oriented",
    "v": "Hướng sản phẩm (product-oriented) — sai, không tồn tại định dạng này."
   },
   {
    "t": "Process-oriented",
    "v": "Hướng quy trình (process-oriented) — sai, không tồn tại định dạng này."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Đây là định dạng Given/When/Then, thuộc dạng hướng kịch bản (scenario-oriented) vì nó mô tả một kịch bản cần được xác minh.\n• Vì sao A sai: Định dạng hướng quy tắc (rule-oriented) gồm các dạng như danh sách kiểm tra gạch đầu dòng hoặc bảng ánh xạ đầu vào–đầu ra, thể hiện rõ các quy tắc cần tuân theo; Given/When/Then không thuộc dạng này.\n• Vì sao C sai: Không có định dạng tiêu chí chấp nhận nào gọi là \"product-oriented\".\n• Vì sao D sai: Không có định dạng tiêu chí chấp nhận nào gọi là \"process-oriented\".",
  "lo": "FL-4.5.2",
  "k": "K2"
 },
 {
  "n": "29",
  "pre": "<p>Your team analyzes the following user story in order to define the acceptance criteria:</p><p><i>As a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases.</i></p>",
  "prev": "<p>Nhóm của bạn phân tích user story sau để xác định tiêu chí chấp nhận (acceptance criteria):</p><p><i>Là một khách hàng đã đăng ký, tôi muốn có thể xem các đơn hàng trước đây của mình trên website của công ty, để tôi có thể theo dõi các lần mua hàng của mình.</i></p>",
  "q": "Which of the following test cases will NOT be relevant for this user story?",
  "qv": "Ca kiểm thử nào sau đây KHÔNG liên quan đến user story này?",
  "o": [
   {
    "t": "Input: the customer logs into their account on the website and clicks the “see order history” button. Expected result: the system shows a list of all the customer’s previous orders, including the date, order number, and total cost",
    "v": "Đầu vào: khách hàng đăng nhập vào tài khoản trên website và nhấn nút “see order history”. Kết quả mong đợi: hệ thống hiển thị danh sách tất cả đơn hàng trước đây, gồm ngày, số đơn hàng và tổng tiền — sai, ca này liên quan đến xem lịch sử đơn hàng."
   },
   {
    "t": "Input: the customer clicks on an order from the order list. Expected result: the system displays the individual items purchased, along with their prices and quantities",
    "v": "Đầu vào: khách hàng nhấn vào một đơn hàng trong danh sách. Kết quả mong đợi: hệ thống hiển thị từng mặt hàng đã mua kèm giá và số lượng — sai, ca này liên quan đến xem đơn hàng trước đây."
   },
   {
    "t": "Input: the customer clicks “Sort ascending” button on the order history screen. Expected result: the system shows the order history sorted by order number in ascending order",
    "v": "Đầu vào: khách hàng nhấn nút “Sort ascending” trên màn hình lịch sử đơn hàng. Kết quả mong đợi: hệ thống hiển thị lịch sử đơn hàng sắp xếp tăng dần theo số đơn hàng — sai, ca này liên quan đến lịch sử đơn hàng."
   },
   {
    "t": "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database. Expected result: the system accepts the registration and creates the account",
    "v": "Đầu vào: một khách hàng chưa đăng ký đăng ký làm khách hàng mới với địa chỉ email hợp lệ chưa có trong cơ sở dữ liệu. Kết quả mong đợi: hệ thống chấp nhận đăng ký và tạo tài khoản — đúng, đây là ca kiểm thử KHÔNG liên quan."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Ca kiểm thử này liên quan đến quy trình đăng ký tài khoản, vốn không được đề cập trong user story. User story chỉ nói về việc khách hàng đã đăng ký xem các đơn hàng trước đây.\n• Vì sao A sai: Ca kiểm thử liên quan trực tiếp đến việc xem các đơn hàng trước đây trong lịch sử đơn hàng.\n• Vì sao B sai: Ca kiểm thử liên quan đến việc xem chi tiết các đơn hàng trước đây.\n• Vì sao C sai: Ca kiểm thử liên quan đến việc xem (sắp xếp) lịch sử đơn hàng.",
  "lo": "FL-4.5.3",
  "k": "K3"
 },
 {
  "n": "30",
  "pre": "<p>Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are:</p><ol><li>Code development</li><li>Submit code into a version control system and merge it into the “test” branch</li><li>Perform component testing for the submitted code</li></ol>",
  "prev": "<p>Nhóm của bạn tuân theo quy trình sử dụng pipeline phân phối DevOps (DevOps delivery pipeline). Ba bước đầu tiên của quy trình là:</p><ol><li>Phát triển mã</li><li>Nộp mã vào hệ thống quản lý phiên bản (version control) và merge vào nhánh “test”</li><li>Thực hiện kiểm thử thành phần (component testing) cho mã đã nộp</li></ol>",
  "q": "Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
  "qv": "Điều nào sau đây phù hợp NHẤT làm tiêu chí đầu vào (entry criterion) cho bước (2) của pipeline này?",
  "o": [
   {
    "t": "Static analysis returns no high severity warnings for the submitted code",
    "v": "Phân tích tĩnh không trả về cảnh báo mức nghiêm trọng cao nào cho mã được nộp — đúng."
   },
   {
    "t": "System version control reports no conflicts when merging code into the “test” branch",
    "v": "Hệ thống quản lý phiên bản báo không có xung đột khi merge vào nhánh “test” — sai, chỉ kiểm tra được sau bước (2)."
   },
   {
    "t": "Component tests are compiled and ready to be executed",
    "v": "Các kiểm thử thành phần đã được biên dịch và sẵn sàng chạy — sai, phù hợp làm tiêu chí đầu vào cho bước (3)."
   },
   {
    "t": "Statement coverage is at least 80%",
    "v": "Độ bao phủ câu lệnh ít nhất 80% — sai, phù hợp làm tiêu chí kết thúc cho bước (3)."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Phân tích tĩnh (static analysis) có thể (và nên) được thực hiện trước khi mã được nộp vào hệ thống quản lý phiên bản, nên rất phù hợp làm tiêu chí đầu vào cho bước (2).\n• Vì sao B sai: Việc báo xung đột khi merge chỉ có thể kiểm tra sau khi mã đã được nộp và merge, tức là sau khi bước (2) được thực hiện.\n• Vì sao C sai: Điều này phù hợp hơn làm tiêu chí đầu vào cho bước (3) – kiểm thử thành phần.\n• Vì sao D sai: Điều này phù hợp hơn làm tiêu chí kết thúc (exit criterion) cho bước (3).",
  "lo": "FL-5.1.3",
  "k": "K2"
 },
 {
  "n": "31",
  "pre": "<p>You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one. The table shows this historical data.</p><table><tr><th>Project</th><th>Development effort ($)</th><th>Test effort ($)</th></tr><tr><td>P1</td><td>800,000</td><td>40,000</td></tr><tr><td>P2</td><td>1,200,000</td><td>130,000</td></tr><tr><td>P3</td><td>600,000</td><td>70,000</td></tr><tr><td>P4</td><td>1,000,000</td><td>120,000</td></tr></table>",
  "prev": "<p>Bạn muốn ước lượng nỗ lực kiểm thử (test effort) cho dự án mới bằng kỹ thuật ước lượng dựa trên tỷ lệ (estimation based on ratios). Bạn tính tỷ lệ nỗ lực kiểm thử so với nỗ lực phát triển bằng dữ liệu trung bình của cả nỗ lực phát triển lẫn nỗ lực kiểm thử từ bốn dự án trước đây tương tự dự án mới. Bảng sau là dữ liệu lịch sử đó.</p><table><tr><th>Dự án</th><th>Nỗ lực phát triển ($)</th><th>Nỗ lực kiểm thử ($)</th></tr><tr><td>P1</td><td>800,000</td><td>40,000</td></tr><tr><td>P2</td><td>1,200,000</td><td>130,000</td></tr><tr><td>P3</td><td>600,000</td><td>70,000</td></tr><tr><td>P4</td><td>1,000,000</td><td>120,000</td></tr></table>",
  "q": "The estimated development effort for the new project is $800,000. What is your estimate of the test effort in this project?",
  "qv": "Nỗ lực phát triển ước tính cho dự án mới là $800,000. Ước tính nỗ lực kiểm thử của bạn cho dự án này là bao nhiêu?",
  "o": [
   {
    "t": "$40,000",
    "v": "$40,000 — sai, đây là tỷ lệ của riêng P1 (5%), không phải trung bình."
   },
   {
    "t": "$80,000",
    "v": "$80,000 — đúng."
   },
   {
    "t": "$81,250",
    "v": "$81,250 — sai, không đúng với tỷ lệ tính từ dữ liệu trung bình."
   },
   {
    "t": "$82,500",
    "v": "$82,500 — sai, không đúng với tỷ lệ tính từ dữ liệu trung bình."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Tính theo kỹ thuật ước lượng dựa trên tỷ lệ (ratios), dùng dữ liệu trung bình:\n  Bước 1 – Nỗ lực phát triển trung bình = (800,000 + 1,200,000 + 600,000 + 1,000,000) / 4 = 3,600,000 / 4 = $900,000.\n  Bước 2 – Nỗ lực kiểm thử trung bình = (40,000 + 130,000 + 70,000 + 120,000) / 4 = 360,000 / 4 = $90,000.\n  Bước 3 – Tỷ lệ kiểm thử : phát triển = 90,000 : 900,000 = 1 : 10, tức nỗ lực kiểm thử bằng 10% nỗ lực phát triển.\n  Bước 4 – Ước tính cho dự án mới = 10% × $800,000 = $80,000.\n• Vì sao A sai: $40,000 chỉ là nỗ lực kiểm thử của P1 (dự án có cùng nỗ lực phát triển $800,000) — không dùng dữ liệu trung bình như đề yêu cầu.\n• Vì sao C sai: $81,250 là kết quả của cách tính khác (ví dụ trung bình các tỷ lệ riêng lẻ của từng dự án), không phải tỷ lệ tính từ dữ liệu trung bình.\n• Vì sao D sai: $82,500 cũng không khớp với tỷ lệ 10% tính từ dữ liệu trung bình.",
  "lo": "FL-5.1.4",
  "k": "K3"
 },
 {
  "n": "32",
  "pre": "<p>You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER.</p><p>You have prepared the following seven test cases, all of which you want to execute. The tests should be executed in the best order, based on test priority.</p><table><tr><th></th><th>Test</th><th>Priority (1 = higher priority)</th></tr><tr><td>TC1</td><td>SEARCH for product A</td><td>4</td></tr><tr><td>TC2</td><td>SEARCH for product B</td><td>4</td></tr><tr><td>TC3</td><td>VIEW product A details</td><td>3</td></tr><tr><td>TC4</td><td>VIEW product B details</td><td>2</td></tr><tr><td>TC5</td><td>ADD product A to a shopping cart</td><td>3</td></tr><tr><td>TC6</td><td>ADD product B to a shopping cart</td><td>1</td></tr><tr><td>TC7</td><td>place an ORDER</td><td>5</td></tr></table><p>You also identified the following logical dependencies between test cases:</p><ul><li>SEARCH functionality must be tested before VIEW functionality can be tested.</li><li>VIEW functionality must be tested before ADD functionality.</li><li>ADD functionality must be tested before ORDER functionality.</li></ul>",
  "prev": "<p>Bạn đang kiểm thử một ứng dụng web cho phép người dùng SEARCH (tìm kiếm) sản phẩm, VIEW (xem) chi tiết sản phẩm, ADD (thêm) sản phẩm vào giỏ hàng và đặt hàng (ORDER).</p><p>Bạn đã chuẩn bị bảy ca kiểm thử (test case) sau và muốn thực thi tất cả. Các kiểm thử cần được thực thi theo thứ tự tốt nhất, dựa trên độ ưu tiên kiểm thử.</p><table><tr><th></th><th>Kiểm thử</th><th>Độ ưu tiên (1 = ưu tiên cao hơn)</th></tr><tr><td>TC1</td><td>SEARCH (tìm) sản phẩm A</td><td>4</td></tr><tr><td>TC2</td><td>SEARCH (tìm) sản phẩm B</td><td>4</td></tr><tr><td>TC3</td><td>VIEW (xem) chi tiết sản phẩm A</td><td>3</td></tr><tr><td>TC4</td><td>VIEW (xem) chi tiết sản phẩm B</td><td>2</td></tr><tr><td>TC5</td><td>ADD (thêm) sản phẩm A vào giỏ hàng</td><td>3</td></tr><tr><td>TC6</td><td>ADD (thêm) sản phẩm B vào giỏ hàng</td><td>1</td></tr><tr><td>TC7</td><td>Đặt hàng (ORDER)</td><td>5</td></tr></table><p>Bạn cũng xác định các phụ thuộc logic sau giữa các ca kiểm thử:</p><ul><li>Chức năng SEARCH phải được kiểm thử trước khi có thể kiểm thử chức năng VIEW.</li><li>Chức năng VIEW phải được kiểm thử trước chức năng ADD.</li><li>Chức năng ADD phải được kiểm thử trước chức năng ORDER.</li></ul>",
  "q": "Which test case should be executed as the fourth one?",
  "qv": "Ca kiểm thử nào nên được thực thi ở vị trí thứ tư?",
  "o": [
   {
    "t": "TC3",
    "v": "TC3 — sai, TC1 phải chạy trước TC3."
   },
   {
    "t": "TC1",
    "v": "TC1 — đúng."
   },
   {
    "t": "TC7",
    "v": "TC7 — sai, TC7 có độ ưu tiên thấp nhất nên chạy cuối cùng."
   },
   {
    "t": "TC2",
    "v": "TC2 — sai, TC2 phải chạy đầu tiên (luồng sản phẩm B làm trước)."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Các phụ thuộc logic nghĩa là với mỗi sản phẩm phải chạy SEARCH → VIEW → ADD trước khi chạy ORDER; có thể thêm nhiều sản phẩm (cùng luồng) trước khi ORDER.\n  Bước 1 – Phải chạy TC1 hoặc TC2 đầu tiên, nếu không thì không tiến hành được gì.\n  Bước 2 – Luồng sản phẩm B (TC4 ưu tiên 2, TC6 ưu tiên 1) có độ ưu tiên cao hơn luồng sản phẩm A (TC3, TC5 ưu tiên 3), nên làm sản phẩm B trước: TC2 → TC4 → TC6.\n  Bước 3 – TC7 (ưu tiên 5) thấp hơn các ca của sản phẩm A, nên chạy luồng sản phẩm A trước: TC1 → TC3 → TC5, rồi mới đến TC7.\n  Thứ tự đầy đủ: TC2 → TC4 → TC6 → TC1 → TC3 → TC5 → TC7. Ca thứ tư là TC1.\n• Vì sao A sai: TC1 (SEARCH sản phẩm A) phải được thực thi trước TC3 (VIEW sản phẩm A).\n• Vì sao C sai: Như phân tích ở trên, TC7 là ca được thực thi cuối cùng.\n• Vì sao D sai: Luồng sản phẩm B phải được thực hiện trước sản phẩm A, nên TC2 là ca đầu tiên chứ không phải thứ tư.",
  "lo": "FL-5.1.5",
  "k": "K3"
 },
 {
  "n": "33",
  "pre": "",
  "prev": "",
  "q": "According to the testing quadrants model, which of the following falls into quadrant Q1 (“technology facing” and “support the team”)?",
  "qv": "Theo mô hình góc phần tư kiểm thử (testing quadrants), mục nào sau đây thuộc góc phần tư Q1 (“hướng công nghệ” – technology facing và “hỗ trợ nhóm” – support the team)?",
  "o": [
   {
    "t": "Usability testing",
    "v": "Kiểm thử khả năng sử dụng (usability testing) — sai, thuộc Q3."
   },
   {
    "t": "Functional testing",
    "v": "Kiểm thử chức năng (functional testing) — sai, thuộc Q2."
   },
   {
    "t": "User acceptance testing",
    "v": "Kiểm thử chấp nhận người dùng (UAT) — sai, thuộc Q3."
   },
   {
    "t": "Component integration testing",
    "v": "Kiểm thử tích hợp thành phần (component integration testing) — đúng, thuộc Q1."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Kiểm thử tích hợp thành phần là kiểm thử hướng công nghệ (technology facing) và hỗ trợ nhóm (định hướng phát triển) → Q1.\n• Vì sao A sai: Kiểm thử khả năng sử dụng là kiểm thử hướng nghiệp vụ (business facing) và phê bình sản phẩm (critique the product) → Q3.\n• Vì sao B sai: Kiểm thử chức năng là kiểm thử hướng nghiệp vụ, hỗ trợ nhóm → Q2.\n• Vì sao C sai: Kiểm thử chấp nhận người dùng là kiểm thử hướng nghiệp vụ và phê bình sản phẩm → Q3.",
  "lo": "FL-5.1.7",
  "k": "K2"
 },
 {
  "n": "34",
  "pre": "<p>Given the following risks:</p><ol><li>Ineffective loop implementation causes long system responses</li><li>Consumers change their preferences</li><li>Flooding of the server room</li><li>Patients above a certain age receive inaccurate reports</li></ol><p>And the following mitigation activities:</p><ol type=\"A\"><li>Risk acceptance</li><li>Testing for performance efficiency</li><li>Using boundary value analysis as the test technique</li><li>Risk transfer</li></ol>",
  "prev": "<p>Cho các rủi ro sau:</p><ol><li>Hiện thực vòng lặp kém hiệu quả gây phản hồi hệ thống chậm</li><li>Người tiêu dùng thay đổi sở thích</li><li>Phòng máy chủ bị ngập nước</li><li>Bệnh nhân trên một độ tuổi nhất định nhận được báo cáo không chính xác</li></ol><p>Và các hoạt động giảm thiểu rủi ro (mitigation) sau:</p><ol type=\"A\"><li>Chấp nhận rủi ro (risk acceptance)</li><li>Kiểm thử hiệu năng (performance efficiency)</li><li>Sử dụng phân tích giá trị biên (boundary value analysis) làm kỹ thuật kiểm thử</li><li>Chuyển giao rủi ro (risk transfer)</li></ol>",
  "q": "Which of the following BEST matches the risks with the mitigation activities?",
  "qv": "Phương án nào sau đây ghép các rủi ro với hoạt động giảm thiểu phù hợp NHẤT?",
  "o": [
   {
    "t": "1C, 2D, 3A, 4B",
    "v": "1C, 2D, 3A, 4B — sai."
   },
   {
    "t": "1B, 2D, 3A, 4C",
    "v": "1B, 2D, 3A, 4C — sai, rủi ro 2 nên chấp nhận còn rủi ro 3 nên chuyển giao."
   },
   {
    "t": "1B, 2A, 3D, 4C",
    "v": "1B, 2A, 3D, 4C — đúng."
   },
   {
    "t": "1C, 2A, 3D, 4B",
    "v": "1C, 2A, 3D, 4B — sai, 1 và 4 bị ghép ngược."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Xét từng rủi ro:\n  1 → B: Phản hồi hệ thống chậm có thể được kiểm tra bằng kiểm thử hiệu năng (performance efficiency testing).\n  2 → A: Thay đổi sở thích của người tiêu dùng thường nằm ngoài tầm kiểm soát, nên thường chấp nhận rủi ro (risk acceptance).\n  3 → D: Ngập phòng máy chủ có thể gây tổn thất lớn, nên chuyển giao rủi ro (risk transfer), ví dụ mua bảo hiểm.\n  4 → C: Bệnh nhân trên một độ tuổi nhất định nhận báo cáo sai gợi ý lỗi tại biên, có thể phát hiện hiệu quả bằng phân tích giá trị biên (BVA).\n  → 1B, 2A, 3D, 4C.\n• Vì sao A sai: Ghép sai cả bốn cặp (1C, 2D, 3A, 4B).\n• Vì sao B sai: 1B và 4C đúng nhưng 2D và 3A sai — rủi ro 2 nên chấp nhận, rủi ro 3 nên chuyển giao.\n• Vì sao D sai: 2A và 3D đúng nhưng 1C và 4B sai — rủi ro hiệu năng cần kiểm thử hiệu năng, rủi ro về tuổi (biên) cần BVA.",
  "lo": "FL-5.2.4",
  "k": "K2"
 },
 {
  "n": "35",
  "pre": "",
  "prev": "",
  "q": "Which of the following is a product quality metric?",
  "qv": "Chỉ số nào sau đây là chỉ số chất lượng sản phẩm (product quality metric)?",
  "o": [
   {
    "t": "Mean time to failure",
    "v": "Thời gian trung bình đến khi xảy ra sai sót (mean time to failure) — đúng."
   },
   {
    "t": "Number of defects found",
    "v": "Số khuyết tật tìm được — sai, đây là chỉ số khuyết tật."
   },
   {
    "t": "Requirements coverage",
    "v": "Độ bao phủ yêu cầu — sai, đây là chỉ số độ bao phủ."
   },
   {
    "t": "Defect detection percentage",
    "v": "Tỷ lệ phát hiện khuyết tật (DDP) — sai, đây là chỉ số khuyết tật."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Chỉ số chất lượng sản phẩm đo các đặc tính chất lượng. Mean time to failure (MTTF) đo độ trưởng thành (maturity) của sản phẩm, nên là chỉ số chất lượng sản phẩm.\n• Vì sao B sai: Số khuyết tật tìm được là chỉ số khuyết tật (defect metric), không phải chỉ số chất lượng sản phẩm.\n• Vì sao C sai: Độ bao phủ yêu cầu là chỉ số độ bao phủ (coverage metric).\n• Vì sao D sai: Tỷ lệ phát hiện khuyết tật (defect detection percentage) là chỉ số khuyết tật.",
  "lo": "FL-5.3.1",
  "k": "K1"
 },
 {
  "n": "36",
  "pre": "<p>You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline.</p>",
  "prev": "<p>Bạn là thành viên của một nhóm kiểm thử ở Bắc Mỹ, đang phát triển sản phẩm cho một khách hàng ở châu Âu. Nhóm làm việc theo agile, áp dụng cách tiếp cận DevOps và sử dụng pipeline tích hợp liên tục/phân phối liên tục (CI/CD).</p>",
  "q": "Which of the following is the LEAST effective way to communicate test progress to the customer?",
  "qv": "Cách nào sau đây là KÉM hiệu quả NHẤT để truyền đạt tiến độ kiểm thử cho khách hàng?",
  "o": [
   {
    "t": "Face-to-face",
    "v": "Gặp mặt trực tiếp — đúng, khó thực hiện vì khác địa điểm và múi giờ."
   },
   {
    "t": "Dashboards",
    "v": "Dashboard — sai, có thể truy cập bất kỳ lúc nào."
   },
   {
    "t": "Email",
    "v": "Email — sai, dù chênh lệch múi giờ gây bất tiện nhưng vẫn khả thi hơn gặp mặt."
   },
   {
    "t": "Video conferencing",
    "v": "Họp trực tuyến qua video — sai, là phương tiện giao tiếp thuận tiện."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Khách hàng ở địa điểm và múi giờ khác (châu Âu so với Bắc Mỹ), nên giao tiếp trực tiếp gặp mặt rất khó thực hiện — đây là cách kém hiệu quả nhất.\n• Vì sao B sai: Dashboard thường sẵn có cho mọi người dùng vào bất kỳ lúc nào, nên chênh lệch múi giờ không gây cản trở như gặp mặt trực tiếp.\n• Vì sao C sai: Dù chênh lệch vài giờ giữa châu Âu và châu Mỹ có thể gây bất tiện, email vẫn không khó khăn bằng gặp mặt trực tiếp.\n• Vì sao D sai: Họp video là phương tiện thuận tiện; dù thường một bên phải tham gia rất sớm hoặc rất muộn, điều này vẫn ít bất tiện hơn nhiều so với gặp mặt trực tiếp.",
  "lo": "FL-5.3.3",
  "k": "K2"
 },
 {
  "n": "37",
  "pre": "",
  "prev": "",
  "q": "Which of the following BEST describes an example of how configuration management (CM) supports testing?",
  "qv": "Điều nào sau đây mô tả TỐT NHẤT một ví dụ về cách quản lý cấu hình (configuration management – CM) hỗ trợ kiểm thử?",
  "o": [
   {
    "t": "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment",
    "v": "Có số phiên bản của môi trường, công cụ CM có thể truy xuất số phiên bản của các thư viện, stub và driver dùng trong môi trường đó — đúng."
   },
   {
    "t": "Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage",
    "v": "Có bản ghi giá trị đầu vào, công cụ CM có thể thực thi ca kiểm thử cho các cấu hình này và tính độ bao phủ — sai, CM không thực thi kiểm thử hay tính độ bao phủ."
   },
   {
    "t": "Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end",
    "v": "Có dữ liệu ngày mua giấy phép phần mềm, công cụ CM tự động báo giấy phép sắp hết hạn — sai, CM không phải công cụ quản lý giấy phép."
   },
   {
    "t": "Having the version number of the test case, the CM tool can automatically generate test data for this test case",
    "v": "Có số phiên bản của ca kiểm thử, công cụ CM có thể tự sinh dữ liệu kiểm thử — sai, CM không sinh dữ liệu kiểm thử."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Với một phần tử cấu hình phức tạp (configuration item), ví dụ một môi trường kiểm thử, quản lý cấu hình ghi nhận các thành phần cấu thành nó, quan hệ giữa chúng và phiên bản của chúng. Vì vậy từ phiên bản môi trường có thể truy ra phiên bản thư viện, stub và driver.\n• Vì sao B sai: Công cụ CM không thực thi ca kiểm thử và không tính độ bao phủ.\n• Vì sao C sai: Công cụ CM không phải công cụ quản lý giấy phép (license management).\n• Vì sao D sai: Công cụ CM không sinh dữ liệu kiểm thử.",
  "lo": "FL-5.4.1",
  "k": "K2"
 },
 {
  "n": "38",
  "pre": "<p>You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows.</p><p>Environment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5<br>Test run ID: 736<br>Start 12:43:21.003</p><table><tr><td>12:43:21.003</td><td>Execution of TC1.</td><td>Input: 3.</td><td>Output: 3.</td><td>Result: passed</td></tr><tr><td>12:43:21.003</td><td>Execution of TC2.</td><td>Input: 3 11 6 5.</td><td>Output: 3 5 6 11.</td><td>Result: passed</td></tr><tr><td>12:43:21.004</td><td>Execution of TC3.</td><td>Input: 8 7 3 7 1.</td><td>Output: 1 3 7 8.</td><td>Result: failed</td></tr><tr><td>12:43:21.005</td><td>Execution of TC4.</td><td>Input: -2 -2 -2 -3 -3.</td><td>Output: -3 -2.</td><td>Result: failed</td></tr><tr><td>12:43:21.005</td><td>Execution of TC5.</td><td>Input: 0 -2 0 3 4 4.</td><td>Output: -2 0 3 4.</td><td>Result: failed</td></tr></table><p>End 12:43:21.005<br>Total time of test cycle: 0:00:00.002</p>",
  "prev": "<p>Bạn đang kiểm thử một hàm sắp xếp nhận vào một tập số và trả về chính tập số đó được sắp xếp tăng dần. Nhật ký (log) thực thi kiểm thử như sau.</p><p>Environment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5<br>Test run ID: 736<br>Start 12:43:21.003</p><table><tr><td>12:43:21.003</td><td>Execution of TC1.</td><td>Input: 3.</td><td>Output: 3.</td><td>Result: passed</td></tr><tr><td>12:43:21.003</td><td>Execution of TC2.</td><td>Input: 3 11 6 5.</td><td>Output: 3 5 6 11.</td><td>Result: passed</td></tr><tr><td>12:43:21.004</td><td>Execution of TC3.</td><td>Input: 8 7 3 7 1.</td><td>Output: 1 3 7 8.</td><td>Result: failed</td></tr><tr><td>12:43:21.005</td><td>Execution of TC4.</td><td>Input: -2 -2 -2 -3 -3.</td><td>Output: -3 -2.</td><td>Result: failed</td></tr><tr><td>12:43:21.005</td><td>Execution of TC5.</td><td>Input: 0 -2 0 3 4 4.</td><td>Output: -2 0 3 4.</td><td>Result: failed</td></tr></table><p>End 12:43:21.005<br>Total time of test cycle: 0:00:00.002</p>",
  "q": "Which of the following provides the BEST description of the failure that can be used in a defect report?",
  "qv": "Phương án nào sau đây mô tả sai sót (failure) TỐT NHẤT để dùng trong báo cáo khuyết tật (defect report)?",
  "o": [
   {
    "t": "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5.",
    "v": "Hệ thống không sắp xếp được một số tập số. Tham chiếu: TC3, TC4, TC5. — sai, đúng nhưng không mang nhiều giá trị cho lập trình viên."
   },
   {
    "t": "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5.",
    "v": "Hệ thống dường như bỏ qua các giá trị trùng lặp khi sắp xếp. Tham chiếu: TC3, TC4, TC5. — đúng."
   },
   {
    "t": "The system fails to sort negative numbers. Reference: TC4, TC5.",
    "v": "Hệ thống không sắp xếp được số âm. Tham chiếu: TC4, TC5. — sai, vấn đề là bỏ qua giá trị trùng lặp."
   },
   {
    "t": "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected.",
    "v": "TC3, TC4 và TC5 có khuyết tật (dữ liệu đầu vào trùng lặp) và cần được sửa. — sai, không có dấu hiệu các ca kiểm thử bị lỗi."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: So sánh đầu vào và đầu ra: TC3 (8 7 3 7 1 → 1 3 7 8, mất một số 7), TC4 (-2 -2 -2 -3 -3 → -3 -2), TC5 (0 -2 0 3 4 4 → -2 0 3 4, mất một số 0 và một số 4). Cả ba ca thất bại đều có giá trị trùng lặp, và đầu ra đã loại bỏ phần trùng; TC1, TC2 không có giá trị trùng thì đều đạt. Mô tả này giúp lập trình viên tìm và sửa khuyết tật hiệu quả hơn.\n• Vì sao A sai: Câu này đúng nhưng quá chung chung, không mang nhiều giá trị cho lập trình viên.\n• Vì sao C sai: Hệ thống vẫn sắp xếp số âm đúng thứ tự (ví dụ -3 -2, -2 0 3 4); vấn đề nằm ở việc bỏ qua giá trị trùng lặp.\n• Vì sao D sai: Các ca TC3, TC4, TC5 thất bại, nhưng không có căn cứ nào cho thấy bản thân các ca kiểm thử có khuyết tật — dữ liệu trùng lặp là đầu vào hợp lệ cho hàm sắp xếp.",
  "lo": "FL-5.5.1",
  "k": "K3"
 },
 {
  "n": "39",
  "pre": "<p>Given the following descriptions:</p><ol><li>Support workflow tracking</li><li>Facilitate communication</li><li>Virtual machines</li><li>Support reviews</li></ol><p>And the following test tool categories:</p><ol type=\"A\"><li>Static testing tools</li><li>Tools supporting scalability and deployment standardization</li><li>DevOps tools</li><li>Collaboration tools</li></ol>",
  "prev": "<p>Cho các mô tả sau:</p><ol><li>Hỗ trợ theo dõi luồng công việc (workflow tracking)</li><li>Tạo thuận lợi cho giao tiếp</li><li>Máy ảo (virtual machines)</li><li>Hỗ trợ review</li></ol><p>Và các nhóm công cụ kiểm thử sau:</p><ol type=\"A\"><li>Công cụ kiểm thử tĩnh (static testing tools)</li><li>Công cụ hỗ trợ khả năng mở rộng và chuẩn hóa triển khai (scalability and deployment standardization)</li><li>Công cụ DevOps (DevOps tools)</li><li>Công cụ cộng tác (collaboration tools)</li></ol>",
  "q": "Which of the following BEST matches the descriptions and categories?",
  "qv": "Phương án nào sau đây ghép mô tả với nhóm công cụ phù hợp NHẤT?",
  "o": [
   {
    "t": "1A, 2B, 3C, 4D",
    "v": "1A, 2B, 3C, 4D — sai."
   },
   {
    "t": "1B, 2D, 3C, 4A",
    "v": "1B, 2D, 3C, 4A — sai, 1 và 3 bị ghép ngược."
   },
   {
    "t": "1C, 2D, 3B, 4A",
    "v": "1C, 2D, 3B, 4A — đúng."
   },
   {
    "t": "1D, 2C, 3A, 4B",
    "v": "1D, 2C, 3A, 4B — sai."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Xét từng nhóm công cụ:\n  A. Công cụ kiểm thử tĩnh (static testing tools) – hỗ trợ tester thực hiện review và phân tích tĩnh → 4 (hỗ trợ review).\n  B. Công cụ hỗ trợ khả năng mở rộng và chuẩn hóa triển khai – ví dụ máy ảo, công cụ container hóa → 3 (máy ảo).\n  C. Công cụ DevOps – hỗ trợ pipeline phân phối DevOps, theo dõi luồng công việc (workflow tracking), build tự động, CI/CD → 1.\n  D. Công cụ cộng tác (collaboration tools) – tạo thuận lợi cho giao tiếp → 2.\n  → 1C, 2D, 3B, 4A.\n• Vì sao A sai: Ghép sai cả bốn cặp.\n• Vì sao B sai: 2D và 4A đúng nhưng 1B và 3C sai — theo dõi luồng công việc thuộc công cụ DevOps, máy ảo thuộc nhóm công cụ mở rộng/chuẩn hóa triển khai.\n• Vì sao D sai: Ghép sai cả bốn cặp.",
  "lo": "FL-6.1.1",
  "k": "K2"
 },
 {
  "n": "40",
  "pre": "",
  "prev": "",
  "q": "Which of the following is MOST likely to be a benefit of test automation?",
  "qv": "Điều nào sau đây NHIỀU KHẢ NĂNG NHẤT là một lợi ích của tự động hóa kiểm thử (test automation)?",
  "o": [
   {
    "t": "It provides coverage measures that are too complicated for humans to derive",
    "v": "Cung cấp các số đo độ bao phủ quá phức tạp để con người tự tính — đúng."
   },
   {
    "t": "It shares responsibility for the testing with the tool vendor",
    "v": "Chia sẻ trách nhiệm kiểm thử với nhà cung cấp công cụ — sai, trách nhiệm vẫn thuộc về tester."
   },
   {
    "t": "It removes the need for critical thinking when analyzing test results",
    "v": "Loại bỏ nhu cầu tư duy phản biện khi phân tích kết quả kiểm thử — sai, tester vẫn cần tư duy phản biện."
   },
   {
    "t": "It generates test cases from an analysis of the program code",
    "v": "Sinh ca kiểm thử từ việc phân tích mã chương trình — sai, mã không cho biết kết quả mong đợi."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Tự động hóa kiểm thử có thể cung cấp các số đo quá phức tạp để con người tự suy ra, ví dụ độ bao phủ hộp trắng (white-box coverage) cho mọi đoạn mã trừ những đoạn hết sức đơn giản.\n• Vì sao B sai: Dùng công cụ không chia sẻ trách nhiệm kiểm thử với nhà cung cấp; nhà cung cấp không tham gia kiểm thử và trách nhiệm thuộc về tester. Trách nhiệm duy nhất có thể quy cho nhà cung cấp là khi công cụ hoạt động sai và cho kết quả kiểm thử không chính xác.\n• Vì sao C sai: Tester vẫn cần tư duy phản biện khi phân tích các bất thường trong kết quả kiểm thử để xác định nguyên nhân có thể.\n• Vì sao D sai: Cả tester lẫn công cụ đều không thể sinh ca kiểm thử chỉ từ việc phân tích mã, vì mã là phần hiện thực và không cung cấp kết quả mong đợi — kết quả mong đợi phải đến từ phần khác của cơ sở kiểm thử (test basis), như đặc tả thiết kế.",
  "lo": "FL-6.2.1",
  "k": "K1"
 }
] };
