/* File được sinh tự động bởi tools/build_data.py — sửa dữ liệu nguồn rồi chạy lại script. */
window.ISTQB = window.ISTQB || { exams: {}, lo: {} };
window.ISTQB.exams.C = { main: [
 {
  "n": "1",
  "pre": "",
  "prev": "",
  "q": "Which of the following is a typical test objective?",
  "qv": "Phương án nào sau đây là một mục tiêu kiểm thử (test objective) điển hình?",
  "o": [
   {
    "t": "Validating that documented requirements are met",
    "v": "Xác thực (validate) rằng các yêu cầu đã được tài liệu hóa được đáp ứng — sai, vì kiểm tra yêu cầu đã đặc tả là xác minh (verification), không phải xác thực."
   },
   {
    "t": "Causing failures and identifying defects",
    "v": "Gây ra sai sót (failure) và xác định khuyết tật (defect) — đúng."
   },
   {
    "t": "Initiating errors and identifying root causes",
    "v": "Khởi tạo lỗi (error) và xác định nguyên nhân gốc — sai, tester không tạo ra lỗi; tìm nguyên nhân gốc thuộc về gỡ lỗi."
   },
   {
    "t": "Verifying the test object meets user expectations",
    "v": "Xác minh (verify) đối tượng kiểm thử đáp ứng kỳ vọng người dùng — sai, đáp ứng kỳ vọng người dùng là xác thực (validation)."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Gây ra sai sót (failure) và xác định khuyết tật (defect) có lẽ là mục tiêu phổ biến nhất của kiểm thử động (dynamic testing).\n• Vì sao A sai: Xác thực (validation) liên quan đến việc đáp ứng nhu cầu và kỳ vọng của người dùng, còn xác minh (verification) liên quan đến việc đáp ứng các yêu cầu đã đặc tả. Phương án này chỉ đúng nếu thay 'validating' bằng 'verifying'.\n• Vì sao C sai: Tester không khởi tạo lỗi (error) mà cố gắng gây ra sai sót (failure). Lỗi thường do lập trình viên mắc phải (và không thể 'khởi tạo' được), dẫn tới khuyết tật; tester tìm khuyết tật trực tiếp qua kiểm thử tĩnh hoặc gián tiếp qua failure trong kiểm thử động. Xác định nguyên nhân gốc là hữu ích nhưng thuộc về gỡ lỗi (debugging) — một hoạt động tách biệt với kiểm thử.\n• Vì sao D sai: Xác minh (verification) là kiểm tra các yêu cầu đã đặc tả (tài liệu hóa) được đáp ứng; còn đáp ứng nhu cầu/kỳ vọng người dùng là xác thực (validation). Phương án này chỉ đúng nếu thay 'verifying' bằng 'validating'.",
  "lo": "FL-1.1.1",
  "k": "K1"
 },
 {
  "n": "2",
  "pre": "",
  "prev": "",
  "q": "Which of the following statements BEST describes the difference between testing and debugging?",
  "qv": "Phát biểu nào sau đây mô tả ĐÚNG NHẤT sự khác biệt giữa kiểm thử (testing) và gỡ lỗi (debugging)?",
  "o": [
   {
    "t": "Testing causes failures while debugging fixes failures",
    "v": "Kiểm thử gây ra sai sót (failure), còn gỡ lỗi sửa sai sót — sai, gỡ lỗi sửa khuyết tật chứ không sửa failure."
   },
   {
    "t": "Testing is a negative activity while debugging is a positive activity",
    "v": "Kiểm thử là hoạt động tiêu cực, còn gỡ lỗi là hoạt động tích cực — sai, cả hai đều góp phần nâng cao chất lượng."
   },
   {
    "t": "Testing determines that defects exist while debugging removes defects",
    "v": "Kiểm thử xác định rằng khuyết tật tồn tại, còn gỡ lỗi loại bỏ khuyết tật — đúng."
   },
   {
    "t": "Testing finds the cause of defects while debugging fixes the cause of defects",
    "v": "Kiểm thử tìm nguyên nhân của khuyết tật, còn gỡ lỗi sửa nguyên nhân đó — sai, nguyên nhân của khuyết tật là lỗi do con người (error)."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Kiểm thử xác định sự tồn tại của khuyết tật (defect) — trực tiếp qua quan sát khuyết tật trong review (hoặc bằng công cụ phân tích tĩnh), hoặc gián tiếp bằng cách gây ra sai sót (failure) trong kiểm thử động. Gỡ lỗi (debugging) là hoạt động tách biệt (thường do lập trình viên thực hiện), gồm định vị khuyết tật (chỉ với kiểm thử động) và sửa khuyết tật.\n• Vì sao A sai: Kiểm thử động đúng là gây ra failure (từ đó định vị và sửa khuyết tật), nhưng gỡ lỗi là định vị và sửa khuyết tật, không phải 'sửa failure'.\n• Vì sao B sai: Cả kiểm thử và gỡ lỗi đều giúp nâng cao chất lượng đối tượng kiểm thử nên đều nên được nhìn nhận tích cực. Việc kiểm thử động cố tình làm đối tượng thất bại khiến một số người coi nó là tiêu cực, nhưng đó là cách nhìn hẹp. Có cả ca kiểm thử dương (kiểm tra đối tượng làm đúng điều phải làm) và ca kiểm thử âm (kiểm tra đối tượng không làm điều không được làm).\n• Vì sao D sai: Nguyên nhân của khuyết tật thường là lỗi của con người (error). Kiểm thử tìm khuyết tật (trực tiếp qua kiểm thử tĩnh hoặc gián tiếp qua failure), còn gỡ lỗi sửa khuyết tật. Vậy kiểm thử không tìm 'nguyên nhân của khuyết tật' và gỡ lỗi cũng không sửa 'nguyên nhân của khuyết tật'.",
  "lo": "FL-1.1.2",
  "k": "K2"
 },
 {
  "n": "3",
  "pre": "",
  "prev": "",
  "q": "The ‘absence-of-defects fallacy’ is one of the principles of testing. Which of the following is an example of addressing this principle in practice?",
  "qv": "'Ngộ nhận về sự vắng mặt của khuyết tật' (absence-of-defects fallacy) là một trong các nguyên lý kiểm thử. Phương án nào sau đây là ví dụ về việc áp dụng nguyên lý này trong thực tế?",
  "o": [
   {
    "t": "Explaining that it is not possible for testing to show the absence of defects",
    "v": "Giải thích rằng kiểm thử không thể chứng minh sự vắng mặt của khuyết tật — sai, đó là nguyên lý 'kiểm thử cho thấy sự hiện diện, không phải sự vắng mặt của khuyết tật'."
   },
   {
    "t": "Supporting the end users to perform acceptance testing",
    "v": "Hỗ trợ người dùng cuối thực hiện kiểm thử chấp nhận (acceptance testing) — đúng."
   },
   {
    "t": "Ensuring that no implementation defects remain in the delivered system",
    "v": "Bảo đảm không còn khuyết tật triển khai nào trong hệ thống bàn giao — sai, điều này là bất khả thi."
   },
   {
    "t": "Modifying tests that cause no failures to ensure few defects remain",
    "v": "Sửa đổi các bài kiểm thử không gây ra failure để bảo đảm còn ít khuyết tật — sai, đó là cách xử lý nguyên lý 'kiểm thử bị mòn' (tests wear out)."
   }
  ],
  "a": 1,
  "e": "Nguyên lý 'ngộ nhận về sự vắng mặt của khuyết tật' nói rằng việc bảo đảm phần mềm đúng theo yêu cầu (tức xác minh không còn khuyết tật triển khai) không bảo đảm người dùng hài lòng. Để xử lý, cần xác thực (validate) rằng hệ thống đáp ứng nhu cầu, kỳ vọng của người dùng, đạt mục tiêu kinh doanh và vượt trội so với hệ thống cạnh tranh.\n• Vì sao B đúng: Hỗ trợ người dùng cuối thực hiện kiểm thử chấp nhận (acceptance testing) giúp xác thực rằng hệ thống đáp ứng nhu cầu và kỳ vọng của người dùng.\n• Vì sao A sai: Đây là nội dung của nguyên lý 'kiểm thử cho thấy sự hiện diện, không phải sự vắng mặt của khuyết tật' — kiểm thử phát hiện được khuyết tật nhưng không thể chứng minh không còn khuyết tật. Giải thích điều này chỉ liên quan một phần đến nguyên lý đó, không phải absence-of-defects fallacy.\n• Vì sao C sai: Không thể bảo đảm không còn khuyết tật triển khai nào trong hệ thống bàn giao, vì kiểm thử không thể chứng minh sự vắng mặt của khuyết tật.\n• Vì sao D sai: Sửa đổi các bài kiểm thử không còn gây ra failure là một cách xử lý nguyên lý 'kiểm thử bị mòn' (tests wear out) — lặp lại cùng bài kiểm thử trên mã không đổi khó tìm ra khuyết tật mới. Việc này không xác thực được hệ thống có đáp ứng nhu cầu người dùng hay không.",
  "lo": "FL-1.3.1",
  "k": "K2"
 },
 {
  "n": "4",
  "pre": "",
  "prev": "",
  "q": "Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?",
  "qv": "Những hoạt động kiểm thử nào sau đây CÓ KHẢ NĂNG NHẤT áp dụng phân tích giá trị biên (boundary value analysis) và phân vùng tương đương (equivalence partitioning)?",
  "o": [
   {
    "t": "Test implementation",
    "v": "Triển khai kiểm thử (test implementation) — sai, chủ yếu là gom ca kiểm thử thành thủ tục kiểm thử."
   },
   {
    "t": "Test design",
    "v": "Thiết kế kiểm thử (test design) — đúng."
   },
   {
    "t": "Test execution",
    "v": "Thực thi kiểm thử (test execution) — sai, chủ yếu là chạy thủ tục kiểm thử."
   },
   {
    "t": "Test monitoring",
    "v": "Giám sát kiểm thử (test monitoring) — sai, chủ yếu là kiểm tra việc tuân thủ kế hoạch."
   },
   {
    "t": "Test analysis",
    "v": "Phân tích kiểm thử (test analysis) — đúng."
   }
  ],
  "a": [
   1,
   4
  ],
  "e": "Theo giáo trình: trong phân tích kiểm thử, cơ sở kiểm thử (test basis) được phân tích để xác định các điều kiện kiểm thử (test condition), sau đó ưu tiên hóa cùng các rủi ro liên quan. Việc xác định có hệ thống các điều kiện kiểm thử thành các hạng mục bao phủ (coverage item) thường sử dụng kỹ thuật kiểm thử cả trong phân tích kiểm thử lẫn thiết kế kiểm thử. Phân tích giá trị biên và phân vùng tương đương chính là các kỹ thuật kiểm thử.\n• Vì sao B đúng: Thiết kế kiểm thử (test design) thường dùng kỹ thuật kiểm thử để tạo ca kiểm thử (test case) từ điều kiện kiểm thử và hạng mục bao phủ.\n• Vì sao E đúng: Phân tích kiểm thử (test analysis) thường dùng kỹ thuật kiểm thử để xác định các điều kiện kiểm thử.\n• Vì sao A sai: Triển khai kiểm thử (test implementation) chủ yếu là gom các ca kiểm thử thành thủ tục kiểm thử (test procedure), trong khi kỹ thuật kiểm thử dùng để tạo ca kiểm thử.\n• Vì sao C sai: Thực thi kiểm thử (test execution) chủ yếu là chạy các thủ tục kiểm thử (và ca kiểm thử), không dùng kỹ thuật kiểm thử để tạo ca kiểm thử.\n• Vì sao D sai: Giám sát kiểm thử (test monitoring) chủ yếu là kiểm tra liên tục để bảo đảm kế hoạch được tuân thủ, không dùng kỹ thuật kiểm thử.",
  "lo": "FL-1.4.1",
  "k": "K2"
 },
 {
  "n": "5",
  "pre": "<p>Given the following testware:</p><ol><li>Coverage items</li><li>Change requests</li><li>Test execution schedule</li><li>Prioritized test conditions</li></ol><p>And the following test activities:</p><ol type=\"A\"><li>Test analysis</li><li>Test design</li><li>Test implementation</li><li>Test completion</li></ol>",
  "prev": "<p>Cho các sản phẩm kiểm thử (testware) sau:</p><ol><li>Các hạng mục bao phủ (coverage items)</li><li>Các yêu cầu thay đổi (change requests)</li><li>Lịch thực thi kiểm thử (test execution schedule)</li><li>Các điều kiện kiểm thử đã được ưu tiên hóa (prioritized test conditions)</li></ol><p>Và các hoạt động kiểm thử sau:</p><ol type=\"A\"><li>Phân tích kiểm thử (test analysis)</li><li>Thiết kế kiểm thử (test design)</li><li>Triển khai kiểm thử (test implementation)</li><li>Hoàn tất kiểm thử (test completion)</li></ol>",
  "q": "Which of the following BEST shows the testware produced by the activities?",
  "qv": "Phương án nào sau đây thể hiện ĐÚNG NHẤT testware được tạo ra bởi từng hoạt động?",
  "o": [
   {
    "t": "1B, 2D, 3C, 4A",
    "v": "1B, 2D, 3C, 4A — đúng."
   },
   {
    "t": "1B, 2D, 3A, 4C",
    "v": "1B, 2D, 3A, 4C — sai, lịch thực thi thuộc triển khai, điều kiện kiểm thử thuộc phân tích."
   },
   {
    "t": "1D, 2C, 3A, 4B",
    "v": "1D, 2C, 3A, 4B — sai, ghép sai cả bốn cặp."
   },
   {
    "t": "1D, 2C, 3B, 4A",
    "v": "1D, 2C, 3B, 4A — sai, chỉ đúng cặp 4A."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Xét đầu ra (testware) của từng hoạt động:\n  - A. Phân tích kiểm thử: các điều kiện kiểm thử đã ưu tiên hóa (4) (ví dụ tiêu chí chấp nhận), và báo cáo khuyết tật cho khuyết tật tìm thấy trong cơ sở kiểm thử → 4A.\n  - B. Thiết kế kiểm thử: các ca kiểm thử đã ưu tiên hóa, test charter, hạng mục bao phủ (1), yêu cầu dữ liệu kiểm thử, yêu cầu môi trường kiểm thử → 1B.\n  - C. Triển khai kiểm thử: thủ tục kiểm thử, script kiểm thử tự động, bộ kiểm thử (test suite), dữ liệu kiểm thử, lịch thực thi kiểm thử (3), các thành phần môi trường như stub, driver, simulator, service virtualization → 3C.\n  - D. Hoàn tất kiểm thử: báo cáo hoàn tất kiểm thử, bài học kinh nghiệm, hành động cải tiến, và yêu cầu thay đổi (2) (dưới dạng product backlog item) → 2D.\n  Kết quả: 1B, 2D, 3C, 4A.\n• Vì sao B sai: Ghép 3A và 4C là sai — lịch thực thi thuộc triển khai kiểm thử, điều kiện kiểm thử thuộc phân tích kiểm thử.\n• Vì sao C sai: Hạng mục bao phủ không phải đầu ra của hoàn tất kiểm thử; yêu cầu thay đổi không phải đầu ra của triển khai kiểm thử; các cặp còn lại cũng sai.\n• Vì sao D sai: Chỉ có 4A đúng; 1D, 2C, 3B đều sai.",
  "lo": "FL-1.4.3",
  "k": "K2"
 },
 {
  "n": "6",
  "pre": "",
  "prev": "",
  "q": "Which of the following statements about the different testing roles is MOST likely to be CORRECT?",
  "qv": "Phát biểu nào sau đây về các vai trò kiểm thử khác nhau CÓ KHẢ NĂNG ĐÚNG NHẤT?",
  "o": [
   {
    "t": "In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team",
    "v": "Trong phát triển Agile, vai trò quản lý kiểm thử chủ yếu là trách nhiệm của nhóm, còn vai trò kiểm thử chủ yếu do một cá nhân bên ngoài nhóm đảm nhận — sai, kiểm thử do nhiều thành viên trong nhóm thực hiện."
   },
   {
    "t": "The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion",
    "v": "Vai trò kiểm thử chủ yếu chịu trách nhiệm giám sát và điều khiển kiểm thử, còn vai trò quản lý kiểm thử chủ yếu chịu trách nhiệm lập kế hoạch và hoàn tất kiểm thử — sai, giám sát và điều khiển thuộc vai trò quản lý kiểm thử."
   },
   {
    "t": "In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself",
    "v": "Trong phát triển Agile, các hoạt động quản lý kiểm thử trải rộng nhiều nhóm do một test manager bên ngoài nhóm xử lý, còn một số tác vụ quản lý kiểm thử do chính nhóm đảm nhận — đúng."
   },
   {
    "t": "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution",
    "v": "Vai trò quản lý kiểm thử chủ yếu chịu trách nhiệm phân tích và thiết kế kiểm thử, còn vai trò kiểm thử chủ yếu chịu trách nhiệm triển khai và thực thi kiểm thử — sai, phân tích và thiết kế thuộc vai trò kiểm thử."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Trong phát triển phần mềm Agile, một số tác vụ quản lý kiểm thử có thể do chính nhóm Agile đảm nhận. Tuy nhiên, với các hoạt động kiểm thử trải rộng trên nhiều nhóm trong tổ chức, các test manager bên ngoài nhóm phát triển có thể thực hiện những tác vụ này.\n• Vì sao A sai: Đúng là trong Agile một số tác vụ quản lý kiểm thử có thể do nhóm đảm nhận, nhưng vai trò kiểm thử không phải chủ yếu do một cá nhân bên ngoài nhóm đảm nhận; thay vào đó, việc kiểm thử thường do nhiều thành viên trong nhóm thực hiện theo cách tiếp cận toàn nhóm (whole-team approach).\n• Vì sao B sai: Vai trò quản lý kiểm thử (test management role) chủ yếu gồm lập kế hoạch kiểm thử, giám sát và điều khiển kiểm thử (test monitoring and control), và hoàn tất kiểm thử. Phát biểu đúng một phần, nhưng nói vai trò kiểm thử chịu trách nhiệm giám sát và điều khiển là sai.\n• Vì sao D sai: Vai trò kiểm thử (testing role) chịu trách nhiệm các khía cạnh kỹ thuật như phân tích, thiết kế, triển khai và thực thi kiểm thử. Vai trò quản lý kiểm thử thường không chịu trách nhiệm phân tích và thiết kế kiểm thử (dù vế sau về triển khai và thực thi là đúng).",
  "lo": "FL-1.4.5",
  "k": "K2"
 },
 {
  "n": "7",
  "pre": "",
  "prev": "",
  "q": "Which of the following is an advantage of the whole-team approach?",
  "qv": "Phương án nào sau đây là một lợi ích của cách tiếp cận toàn nhóm (whole-team approach)?",
  "o": [
   {
    "t": "Teams with no testers",
    "v": "Nhóm không có tester — sai, tester vẫn đóng vai trò quan trọng."
   },
   {
    "t": "Improved team dynamics",
    "v": "Cải thiện sự gắn kết, tương tác trong nhóm (team dynamics) — đúng."
   },
   {
    "t": "Specialist team members",
    "v": "Thành viên nhóm mang tính chuyên biệt — sai, bất kỳ ai đủ kỹ năng đều có thể làm bất kỳ việc gì."
   },
   {
    "t": "Larger team sizes",
    "v": "Quy mô nhóm lớn hơn — sai, không có khuyến nghị nào về việc nhóm lớn hơn thì tốt hơn."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Bằng cách tận dụng hiệu quả nhất các bộ kỹ năng đa dạng của từng thành viên, cách tiếp cận toàn nhóm (whole-team approach) thúc đẩy sự tương tác nhóm (team dynamics) tốt hơn, tăng cường giao tiếp và cộng tác, tạo hiệu ứng cộng hưởng có lợi cho toàn dự án.\n• Vì sao A sai: Trong cách tiếp cận toàn nhóm, tester đóng vai trò thiết yếu: chia sẻ chuyên môn kiểm thử, định hướng phát triển sản phẩm, cộng tác với các thành viên khác để đạt mức chất lượng mong muốn, làm việc với đại diện nghiệp vụ để tạo kiểm thử chấp nhận, và cùng lập trình viên xác định chiến lược kiểm thử và cách tự động hóa tối ưu.\n• Vì sao C sai: Cách tiếp cận toàn nhóm cho phép bất kỳ thành viên nào có đủ kỹ năng và kiến thức đảm nhận bất kỳ nhiệm vụ nào, nên 'thành viên chuyên biệt' không phải là lợi ích của cách tiếp cận này.\n• Vì sao D sai: Không có hướng dẫn cụ thể nào về quy mô tối ưu của nhóm dùng cách tiếp cận toàn nhóm, và cũng không có gợi ý nào rằng nhóm lớn hơn thì tốt hơn.",
  "lo": "FL-1.5.2",
  "k": "K1"
 },
 {
  "n": "8",
  "pre": "",
  "prev": "",
  "q": "Which of the following statements about the independence of testing is CORRECT?",
  "qv": "Phát biểu nào sau đây về tính độc lập của kiểm thử (independence of testing) là ĐÚNG?",
  "o": [
   {
    "t": "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers",
    "v": "Tester độc lập sẽ tìm ra khuyết tật nhờ góc nhìn kỹ thuật khác với lập trình viên, nhưng sự độc lập có thể dẫn đến quan hệ đối đầu với lập trình viên — đúng."
   },
   {
    "t": "Developers’ familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers",
    "v": "Sự quen thuộc với mã của chính mình khiến lập trình viên chỉ tìm được ít khuyết tật, nhưng do có chung nền tảng với tester nên tester cũng sẽ tìm ra các khuyết tật đó — sai."
   },
   {
    "t": "Independent testing requires testers who are outside the developer’s team and ideally from outside the organization, however these testers find it difficult to understand the application domain",
    "v": "Kiểm thử độc lập đòi hỏi tester ở ngoài nhóm phát triển và lý tưởng là ngoài tổ chức, nhưng các tester này khó hiểu lĩnh vực ứng dụng — sai."
   },
   {
    "t": "Testers from outside the developer’s team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release",
    "v": "Tester ngoài nhóm phát triển độc lập hơn tester trong nhóm, nhưng tester trong nhóm dễ bị đổ lỗi cho việc chậm phát hành hơn — sai, tester ngoài nhóm mới dễ bị đổ lỗi hơn."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Lợi ích chính của tính độc lập là tester có khả năng tìm ra các loại failure và khuyết tật khác so với lập trình viên, nhờ nền tảng, góc nhìn kỹ thuật và các thiên kiến (kể cả thiên kiến nhận thức – cognitive bias) khác nhau. Nhược điểm chính là tester có thể bị tách biệt khỏi nhóm phát triển, dẫn tới vấn đề giao tiếp, thiếu cộng tác và có thể là quan hệ đối đầu, khi tester bị đổ lỗi cho sự chậm trễ và tắc nghẽn trong quá trình phát hành.\n• Vì sao B sai: Sự quen thuộc với mã nguồn không làm lập trình viên ít tìm ra khuyết tật; ngược lại, họ có thể tìm nhiều khuyết tật trong mã của mình một cách hiệu quả. Hơn nữa, chính việc lập trình viên và tester có nền tảng KHÁC nhau mới là lý do họ tìm ra các loại khuyết tật khác nhau.\n• Vì sao C sai: Kiểm thử có thể thực hiện ở nhiều mức độ độc lập, từ không độc lập (chính tác giả) đến rất độc lập (tester ngoài tổ chức). Phần lớn dự án dùng nhiều mức: lập trình viên làm kiểm thử thành phần và tích hợp thành phần, nhóm kiểm thử làm kiểm thử hệ thống và tích hợp hệ thống, đại diện nghiệp vụ làm kiểm thử chấp nhận. Tester có thể ở trong nhóm phát triển, không bắt buộc ngoài tổ chức; hiểu biết về lĩnh vực ứng dụng tùy từng trường hợp, không phụ thuộc mức độ độc lập.\n• Vì sao D sai: Tester ngoài nhóm thường độc lập hơn tester trong nhóm là đúng, nhưng chính tester ngoài nhóm mới dễ bị tách biệt khỏi lập trình viên và do đó dễ bị đổ lỗi cho việc chậm phát hành hơn.",
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
    "t": "For each test level, there is a corresponding development level",
    "v": "Với mỗi cấp độ kiểm thử (test level) có một 'cấp độ phát triển' tương ứng — sai, không có khái niệm chung về 'development level'."
   },
   {
    "t": "For each test objective, there is a corresponding development objective",
    "v": "Với mỗi mục tiêu kiểm thử có một mục tiêu phát triển tương ứng — sai."
   },
   {
    "t": "For every test activity, there is a corresponding user activity",
    "v": "Với mỗi hoạt động kiểm thử có một hoạt động người dùng tương ứng — sai."
   },
   {
    "t": "For every development activity, there is a corresponding test activity",
    "v": "Với mỗi hoạt động phát triển có một hoạt động kiểm thử tương ứng — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Kiểm soát chất lượng áp dụng cho mọi hoạt động phát triển, nghĩa là mỗi hoạt động phát triển phần mềm đều có một hoạt động kiểm thử tương ứng.\n• Vì sao A sai: Phương án này cố đánh đồng cấp độ kiểm thử (test level) với 'cấp độ phát triển'. Ta biết rõ 'test level' là gì, nhưng không có cách hiểu chung nào cho thuật ngữ 'development level'.\n• Vì sao B sai: Mỗi hoạt động phát triển có hoạt động kiểm thử tương ứng, nhưng mục tiêu kiểm thử thì khác hẳn. Ví dụ, có thể có mục tiêu kiểm thử là bảo đảm đối tượng kiểm thử tuân thủ yêu cầu hợp đồng về việc phải thực hiện một loại kiểm thử nào đó trước khi bàn giao — không có lý do gì phải có mục tiêu phát triển tương ứng.\n• Vì sao C sai: Sự đối xứng này không áp dụng giữa kiểm thử và hoạt động người dùng. Với một số hệ thống, thậm chí khó xác định ai là người dùng cuối; ngoài ra một số hoạt động kiểm thử hướng tới lập trình viên (ví dụ kiểm thử khả năng bảo trì), không liên quan đến người dùng.",
  "lo": "FL-2.1.2",
  "k": "K1"
 },
 {
  "n": "10",
  "pre": "",
  "prev": "",
  "q": "Which of the following is an example of a test-first approach to development?",
  "qv": "Phương án nào sau đây là ví dụ về cách tiếp cận phát triển viết kiểm thử trước (test-first approach)?",
  "o": [
   {
    "t": "Component Test-Driven Development",
    "v": "Phát triển hướng kiểm thử thành phần (Component Test-Driven Development) — sai, không phải phương pháp được công nhận."
   },
   {
    "t": "Integration Test-Driven Development",
    "v": "Phát triển hướng kiểm thử tích hợp (Integration Test-Driven Development) — sai, không phải phương pháp được công nhận."
   },
   {
    "t": "System Test-Driven Development",
    "v": "Phát triển hướng kiểm thử hệ thống (System Test-Driven Development) — sai, không phải phương pháp được công nhận."
   },
   {
    "t": "Acceptance Test-Driven Development",
    "v": "Phát triển hướng kiểm thử chấp nhận (Acceptance Test-Driven Development – ATDD) — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Phát triển hướng kiểm thử chấp nhận (Acceptance Test-Driven Development – ATDD) là một ví dụ nổi tiếng về cách tiếp cận viết kiểm thử trước (test-first). Giáo trình CTFL nêu ba ví dụ: TDD, ATDD và BDD.\n• Vì sao A sai: 'Component Test-Driven Development' không phải là một ví dụ đúng của cách tiếp cận test-first (không phải thuật ngữ chuẩn).\n• Vì sao B sai: 'Integration Test-Driven Development' không phải là một ví dụ đúng của cách tiếp cận test-first.\n• Vì sao C sai: 'System Test-Driven Development' không phải là một ví dụ đúng của cách tiếp cận test-first.",
  "lo": "FL-2.1.3",
  "k": "K1"
 },
 {
  "n": "11",
  "pre": "",
  "prev": "",
  "q": "Which of the following provides the BEST description of shift-left?",
  "qv": "Phương án nào sau đây mô tả ĐÚNG NHẤT về dịch chuyển sang trái (shift-left)?",
  "o": [
   {
    "t": "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of ‘early testing saves time and money’",
    "v": "Khi được lập trình viên đồng ý, các hoạt động thủ công ở 'phía bên trái' của quy trình kiểm thử được tự động hóa để hỗ trợ nguyên lý 'kiểm thử sớm tiết kiệm thời gian và tiền bạc' — sai, không có 'phía bên trái của quy trình kiểm thử'."
   },
   {
    "t": "Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC",
    "v": "Khi hiệu quả về chi phí, các hoạt động kiểm thử được đưa lên sớm hơn trong SDLC để giảm tổng chi phí chất lượng nhờ giảm số khuyết tật tìm thấy muộn — đúng."
   },
   {
    "t": "When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests",
    "v": "Khi rảnh, tester phải tự động hóa kiểm thử hồi quy, bắt đầu từ kiểm thử thành phần và tích hợp thành phần — sai, đây không phải shift-left."
   },
   {
    "t": "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC",
    "v": "Khi có thể, tester được đào tạo để làm các tác vụ sớm trong SDLC nhằm tự động hóa nhiều hoạt động kiểm thử hơn ở giai đoạn sau — sai, tự động hóa ở giai đoạn sau không phải shift-left."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Shift-left nhấn mạnh việc bắt đầu kiểm thử sớm hơn trong SDLC. Thực hiện shift-left đòi hỏi thêm đào tạo, công sức và chi phí ở các giai đoạn đầu, nhưng tổng chi phí tiết kiệm được sẽ cao hơn (vì ít khuyết tật bị phát hiện muộn).\n• Vì sao A sai: Các thực hành shift-left nhằm đưa thêm hoạt động kiểm thử vào các giai đoạn đầu của SDLC (SDLC được hình dung chạy từ trái sang phải). Không có khái niệm 'phía bên trái của quy trình kiểm thử'.\n• Vì sao C sai: Tự động hóa kiểm thử thành phần và tích hợp thành phần cho kiểm thử hồi quy là có giá trị, nhưng thường là trách nhiệm của lập trình viên (và với CI/CD thì các kiểm thử này được nộp cùng mã nguồn). Dù đôi khi tester có thể tự động hóa kiểm thử hồi quy, việc đó không phải là shift-left (đưa kiểm thử lên sớm hơn).\n• Vì sao D sai: Đào tạo tester làm các tác vụ sớm trong SDLC thì hỗ trợ shift-left, nhưng việc tự động hóa thêm các hoạt động kiểm thử ở giai đoạn sau của SDLC không phải là shift-left.",
  "lo": "FL-2.1.5",
  "k": "K2"
 },
 {
  "n": "12",
  "pre": "",
  "prev": "",
  "q": "Which of the following is LEAST likely to occur as a result of a retrospective?",
  "qv": "Điều nào sau đây ÍT có khả năng xảy ra NHẤT như là kết quả của một buổi retrospective (họp nhìn lại)?",
  "o": [
   {
    "t": "The quality of future test objects improves by identifying improvements in development practices",
    "v": "Chất lượng các đối tượng kiểm thử tương lai được cải thiện nhờ xác định cải tiến trong thực hành phát triển — sai, điều này có khả năng xảy ra."
   },
   {
    "t": "Test efficiency improves by speeding up the configuration of test environments through automation",
    "v": "Hiệu suất kiểm thử tăng nhờ tăng tốc cấu hình môi trường kiểm thử bằng tự động hóa — sai, điều này có khả năng xảy ra."
   },
   {
    "t": "End users’ understanding of the development and test processes is improved",
    "v": "Người dùng cuối hiểu rõ hơn về quy trình phát triển và kiểm thử — đúng, điều này ít có khả năng xảy ra nhất."
   },
   {
    "t": "Automated test scripts are enhanced through feedback from developers",
    "v": "Các script kiểm thử tự động được nâng cấp nhờ phản hồi từ lập trình viên — sai, điều này có khả năng xảy ra."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng (ít khả năng nhất): Người tham gia retrospective thường gồm tester, lập trình viên, kiến trúc sư, product owner và business analyst; người dùng cuối hiếm khi được mời hoặc tham dự, và cũng khó nhận được báo cáo từ các buổi họp này. Vì vậy họ rất khó hiểu thêm về quy trình phát triển và kiểm thử thông qua retrospective.\n• Vì sao A sai: Một mục đích của retrospective là xác định các cải tiến quy trình; nếu được áp dụng, chất lượng đầu ra tương lai của quy trình phát triển (các đối tượng kiểm thử) sẽ cao hơn — điều này có khả năng xảy ra.\n• Vì sao B sai: Một lợi ích của retrospective đối với kiểm thử là tăng hiệu suất kiểm thử nhờ cải tiến quy trình — có khả năng xảy ra.\n• Vì sao D sai: Một lợi ích của retrospective đối với kiểm thử là nâng chất lượng testware (bao gồm script kiểm thử tự động) qua việc cùng review với lập trình viên — có khả năng xảy ra.",
  "lo": "FL-2.1.6",
  "k": "K2"
 },
 {
  "n": "13",
  "pre": "",
  "prev": "",
  "q": "Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers?",
  "qv": "Cấp độ kiểm thử (test level) nào sau đây CÓ KHẢ NĂNG NHẤT đang được thực hiện nếu việc kiểm thử tập trung vào xác thực (validation) và không do tester thực hiện?",
  "o": [
   {
    "t": "Component testing",
    "v": "Kiểm thử thành phần (component testing) — sai, chủ yếu là xác minh (verification)."
   },
   {
    "t": "Component integration testing",
    "v": "Kiểm thử tích hợp thành phần (component integration testing) — sai, chủ yếu là xác minh."
   },
   {
    "t": "System integration testing",
    "v": "Kiểm thử tích hợp hệ thống (system integration testing) — sai, chủ yếu là xác minh và thường do tester thực hiện."
   },
   {
    "t": "Acceptance testing",
    "v": "Kiểm thử chấp nhận (acceptance testing) — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Kiểm thử chấp nhận (acceptance testing) tập trung xác thực (validation) rằng hệ thống đáp ứng nhu cầu nghiệp vụ của người dùng và sẵn sàng triển khai. Lý tưởng nhất, kiểm thử này do chính người dùng cuối thực hiện (không phải tester).\n• Vì sao A sai: Kiểm thử thành phần (unit testing) kiểm thử từng thành phần riêng lẻ và chủ yếu là xác minh (verification) theo đặc tả, không phải xác thực theo nhu cầu người dùng — dù đúng là thường do lập trình viên thực hiện chứ không phải tester.\n• Vì sao B sai: Kiểm thử tích hợp thành phần kiểm tra giao diện và tương tác giữa các thành phần, chủ yếu là xác minh theo đặc tả — dù thường do lập trình viên thực hiện.\n• Vì sao C sai: Kiểm thử tích hợp hệ thống kiểm tra giao diện với các hệ thống và dịch vụ bên ngoài, chủ yếu là xác minh theo đặc tả, và thường do tester thực hiện.",
  "lo": "FL-2.2.1",
  "k": "K2"
 },
 {
  "n": "14",
  "pre": "",
  "prev": "",
  "q": "The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?",
  "qv": "Phần mềm hệ thống dẫn đường đã được cập nhật vì nó gợi ý các tuyến đường vi phạm luật giao thông, chẳng hạn đi ngược chiều vào đường một chiều. Phương án nào sau đây mô tả ĐÚNG NHẤT việc kiểm thử sẽ được thực hiện?",
  "o": [
   {
    "t": "Only confirmation testing",
    "v": "Chỉ kiểm thử xác nhận (confirmation testing) — sai, còn cần kiểm thử hồi quy."
   },
   {
    "t": "Confirmation testing then regression testing",
    "v": "Kiểm thử xác nhận rồi đến kiểm thử hồi quy (regression testing) — đúng."
   },
   {
    "t": "Only regression testing",
    "v": "Chỉ kiểm thử hồi quy — sai, còn cần kiểm thử xác nhận."
   },
   {
    "t": "Regression testing then confirmation testing",
    "v": "Kiểm thử hồi quy rồi đến kiểm thử xác nhận — sai thứ tự."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Kiểm thử xác nhận (confirmation testing) kiểm tra rằng bản cập nhật đã được triển khai đúng (khuyết tật đã được sửa), sau đó kiểm thử hồi quy (regression testing) bảo đảm không có khuyết tật nào mới phát sinh hoặc lộ ra ở các vùng không thay đổi của hệ thống.\n• Vì sao A sai: Kiểm thử xác nhận là cần thiết, nhưng sau đó cũng nên thực hiện kiểm thử hồi quy để bảo đảm không có khuyết tật mới phát sinh ở các vùng không thay đổi.\n• Vì sao C sai: Kiểm thử hồi quy là cần, nhưng cũng phải thực hiện kiểm thử xác nhận để kiểm tra bản cập nhật đã được triển khai đúng.\n• Vì sao D sai: Cả hai loại kiểm thử đều cần, nhưng khi kiểm thử một bản cập nhật thì kiểm thử xác nhận được thực hiện TRƯỚC kiểm thử hồi quy.",
  "lo": "FL-2.2.3",
  "k": "K2"
 },
 {
  "n": "15",
  "pre": "<p>Given the following example defects:</p><ol type=\"i\"><li>Two different parts of the design specification disagree due to the complexity of the design</li><li>A response time is too long and so makes users lose patience</li><li>A path in the code cannot be reached during execution</li><li>A variable is declared but never subsequently used in the program</li><li>The amount of memory needed by the program to generate a report is too high</li></ol>",
  "prev": "<p>Cho các ví dụ khuyết tật (defect) sau:</p><ol type=\"i\"><li>Hai phần khác nhau của đặc tả thiết kế mâu thuẫn nhau do thiết kế phức tạp</li><li>Thời gian phản hồi quá lâu khiến người dùng mất kiên nhẫn</li><li>Một đường đi trong mã không thể đạt tới khi thực thi (mã không thể tới được – unreachable code)</li><li>Một biến được khai báo nhưng sau đó không bao giờ được sử dụng trong chương trình</li><li>Lượng bộ nhớ chương trình cần để tạo một báo cáo quá lớn</li></ol>",
  "q": "Which of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)?",
  "qv": "Phương án nào sau đây xác định ĐÚNG NHẤT các ví dụ khuyết tật có thể được tìm thấy bằng kiểm thử tĩnh (static testing) (thay vì kiểm thử động – dynamic testing)?",
  "o": [
   {
    "t": "ii, v",
    "v": "ii, v — sai, cả hai đều cần chạy chương trình (kiểm thử động)."
   },
   {
    "t": "iii, v",
    "v": "iii, v — sai, v là khuyết tật hiệu năng cần kiểm thử động."
   },
   {
    "t": "i, ii, iv",
    "v": "i, ii, iv — sai, ii là khuyết tật thời gian phản hồi cần kiểm thử động."
   },
   {
    "t": "i, iii, iv",
    "v": "i, iii, iv — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Xét từng khuyết tật:\n  - i. Hai phần của đặc tả thiết kế mâu thuẫn nhau → khuyết tật đặc tả (gồm mâu thuẫn, mơ hồ, thiếu sót, không chính xác, trùng lặp) — dễ tìm nhất bằng kiểm thử tĩnh (review).\n  - ii. Thời gian phản hồi quá lâu → chỉ phát hiện được khi chạy chương trình và đo thời gian phản hồi — kiểm thử động.\n  - iii. Đường đi trong mã không thể tới được → khuyết tật mã (biến chưa có giá trị, biến chưa khai báo, mã trùng lặp hoặc không tới được, độ phức tạp quá cao) — dễ tìm nhất bằng kiểm thử tĩnh (phân tích tĩnh).\n  - iv. Biến khai báo nhưng không dùng → khuyết tật mã — dễ tìm nhất bằng kiểm thử tĩnh.\n  - v. Bộ nhớ dùng để tạo báo cáo quá lớn → khuyết tật hiệu năng, chỉ phát hiện khi chạy chương trình và đo bộ nhớ — kiểm thử động.\n  Vậy kiểm thử tĩnh tìm được: i, iii, iv.\n• Vì sao A sai: ii và v đều là khuyết tật chỉ phát hiện được bằng kiểm thử động.\n• Vì sao B sai: iii đúng, nhưng v cần kiểm thử động; thiếu i và iv.\n• Vì sao C sai: i và iv đúng, nhưng ii cần kiểm thử động; thiếu iii.",
  "lo": "FL-3.1.3",
  "k": "K2"
 },
 {
  "n": "16",
  "pre": "",
  "prev": "",
  "q": "Which of the following is a benefit of early and frequent stakeholder feedback?",
  "qv": "Phương án nào sau đây là một lợi ích của việc nhận phản hồi sớm và thường xuyên từ các bên liên quan (stakeholder)?",
  "o": [
   {
    "t": "Changes to requirements are understood and implemented earlier",
    "v": "Các thay đổi yêu cầu được hiểu và triển khai sớm hơn — đúng."
   },
   {
    "t": "It ensures business stakeholders understand user requirements",
    "v": "Bảo đảm các bên liên quan nghiệp vụ hiểu yêu cầu người dùng — sai, phản hồi đến từ chính họ."
   },
   {
    "t": "It allows product owners to change their requirements as often as they want",
    "v": "Cho phép product owner thay đổi yêu cầu thường xuyên tùy ý — sai, không khuyến khích thay đổi không giới hạn."
   },
   {
    "t": "End users are told which requirements will not be implemented prior to release",
    "v": "Người dùng cuối được thông báo yêu cầu nào sẽ không được triển khai trước khi phát hành — sai, phản hồi là từ stakeholder chứ không phải thông báo đến họ."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Nhận phản hồi từ các bên liên quan sớm và thường xuyên giúp truyền đạt sớm các vấn đề chất lượng tiềm ẩn, ngăn hiểu lầm về yêu cầu, và bảo đảm mọi thay đổi trong yêu cầu của stakeholder được hiểu và triển khai sớm hơn.\n• Vì sao B sai: Phản hồi đến từ chính các stakeholder, nên việc họ đưa ra phản hồi khó có thể giúp họ hiểu thêm về yêu cầu người dùng của chính họ.\n• Vì sao C sai: Thay đổi yêu cầu được hiểu và triển khai sớm hơn không có nghĩa là khuyến khích thay đổi yêu cầu không giới hạn.\n• Vì sao D sai: Phản hồi là từ stakeholder, không bao gồm việc truyền đạt đến họ. Việc báo cho người dùng cuối yêu cầu nào không được triển khai trước khi phát hành có thể xảy ra, nhưng lý tưởng là điều này không nên xảy ra.",
  "lo": "FL-3.2.1",
  "k": "K1"
 },
 {
  "n": "17",
  "pre": "<p>Given the following review types:</p><ol><li>Technical review</li><li>Informal review</li><li>Inspection</li><li>Walkthrough</li></ol><p>And the following descriptions:</p><ol type=\"A\"><li>Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve</li><li>Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting potential defects</li><li>The main objective is detecting potential defects and it requires metrics collection to support process improvement</li><li>The main objective is detecting potential defects and it generates no formal documented output</li></ol>",
  "prev": "<p>Cho các loại review sau:</p><ol><li>Review kỹ thuật (technical review)</li><li>Review không chính thức (informal review)</li><li>Thanh tra (inspection)</li><li>Duyệt qua (walkthrough)</li></ol><p>Và các mô tả sau:</p><ol type=\"A\"><li>Gồm các mục tiêu như đạt đồng thuận, nảy sinh ý tưởng mới và thúc đẩy tác giả cải thiện</li><li>Gồm các mục tiêu như đào tạo người review, đạt đồng thuận, nảy sinh ý tưởng mới và phát hiện khuyết tật tiềm ẩn</li><li>Mục tiêu chính là phát hiện khuyết tật tiềm ẩn và yêu cầu thu thập số liệu (metrics) để hỗ trợ cải tiến quy trình</li><li>Mục tiêu chính là phát hiện khuyết tật tiềm ẩn và không tạo ra đầu ra tài liệu chính thức</li></ol>",
  "q": "Which of the following BEST matches the review types and the descriptions?",
  "qv": "Phương án nào sau đây ghép ĐÚNG NHẤT các loại review với các mô tả?",
  "o": [
   {
    "t": "1A, 2B, 3C, 4D",
    "v": "1A, 2B, 3C, 4D — sai, informal review không có mục tiêu đào tạo người review; walkthrough không phải loại không có đầu ra chính thức."
   },
   {
    "t": "1A, 2D, 3C, 4B",
    "v": "1A, 2D, 3C, 4B — đúng."
   },
   {
    "t": "1B, 2C, 3D, 4A",
    "v": "1B, 2C, 3D, 4A — sai, informal review không yêu cầu thu thập metrics; inspection có đầu ra chính thức."
   },
   {
    "t": "1C, 2D, 3A, 4B",
    "v": "1C, 2D, 3A, 4B — sai, thu thập metrics là đặc trưng của inspection chứ không phải technical review."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Xét từng loại review:\n  - 1. Technical review: do người review có chuyên môn kỹ thuật thực hiện, moderator dẫn dắt. Mục tiêu: đạt đồng thuận và ra quyết định về vấn đề kỹ thuật, đồng thời đánh giá chất lượng, tạo niềm tin, nảy sinh ý tưởng mới, thúc đẩy tác giả cải thiện và phát hiện bất thường → khớp A.\n  - 2. Informal review: mục tiêu chính là phát hiện bất thường; quy trình không được định nghĩa và không yêu cầu đầu ra tài liệu chính thức → khớp D.\n  - 3. Inspection: loại review chính thức nhất, theo đầy đủ quy trình review chung. Mục tiêu chính là tìm nhiều bất thường nhất; ngoài ra thu thập số liệu (metrics) để cải tiến SDLC, kể cả quy trình inspection. Tác giả không được làm review leader hay người ghi chép → khớp C.\n  - 4. Walkthrough: do tác giả dẫn dắt; mục tiêu gồm đánh giá chất lượng, đào tạo người review, đạt đồng thuận, nảy sinh ý tưởng mới, thúc đẩy tác giả cải thiện và phát hiện bất thường → khớp B.\n  Kết quả: 1A, 2D, 3C, 4B.\n• Vì sao A sai: 2B và 4D sai — đào tạo người review là mục tiêu của walkthrough, còn 'không có đầu ra tài liệu chính thức' là đặc trưng của informal review.\n• Vì sao C sai: Cả bốn cặp đều sai (ví dụ: 2C – informal review không yêu cầu metrics; 3D – inspection có đầu ra chính thức).\n• Vì sao D sai: 1C và 3A sai — thu thập metrics để cải tiến quy trình là đặc trưng của inspection, không phải technical review.",
  "lo": "FL-3.2.4",
  "k": "K2"
 },
 {
  "n": "18",
  "pre": "",
  "prev": "",
  "q": "Which of the following is a factor that contributes to a successful review?",
  "qv": "Phương án nào sau đây là một yếu tố góp phần vào thành công của review?",
  "o": [
   {
    "t": "Ensure management participate as reviewers",
    "v": "Bảo đảm ban quản lý tham gia làm người review — sai, cần sự ủng hộ của quản lý chứ không cần họ làm reviewer."
   },
   {
    "t": "Split large work products in to smaller parts",
    "v": "Chia các sản phẩm công việc lớn thành các phần nhỏ hơn — đúng."
   },
   {
    "t": "Set reviewer evaluation as an objective",
    "v": "Đặt việc đánh giá người review làm mục tiêu — sai, không được đánh giá người tham gia."
   },
   {
    "t": "Plan to cover one document per review",
    "v": "Lên kế hoạch mỗi buổi review bao trọn một tài liệu — sai, nên chia nhỏ để người review không mất tập trung."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Để review thành công, cần chia sản phẩm công việc (work product) thành các phần đủ nhỏ để có thể review trong khoảng thời gian hợp lý, tránh việc người review mất tập trung trong lúc review cá nhân hoặc họp review.\n• Vì sao A sai: Cần có sự ủng hộ của ban quản lý đối với quy trình review, nhưng điều đó không có nghĩa là họ phải tham gia với vai trò người review.\n• Vì sao C sai: Cần xác định rõ mục tiêu và tiêu chí kết thúc (exit criteria) đo lường được, nhưng KHÔNG được đánh giá người tham gia.\n• Vì sao D sai: Nên chia review thành các phần nhỏ để người review không mất tập trung, vì vậy không nên lên kế hoạch mỗi buổi review bao trọn một tài liệu.",
  "lo": "FL-3.2.5",
  "k": "K1"
 },
 {
  "n": "19",
  "pre": "",
  "prev": "",
  "q": "What is the MAIN difference between black-box test techniques and experience-based test techniques?",
  "qv": "Khác biệt CHÍNH giữa kỹ thuật kiểm thử hộp đen (black-box test techniques) và kỹ thuật kiểm thử dựa trên kinh nghiệm (experience-based test techniques) là gì?",
  "o": [
   {
    "t": "The test object",
    "v": "Đối tượng kiểm thử (test object) — sai, cả hai thường dùng được cho cùng đối tượng kiểm thử."
   },
   {
    "t": "The test level at which the test technique is used",
    "v": "Cấp độ kiểm thử mà kỹ thuật được áp dụng — sai, cả hai dùng được ở mọi cấp độ."
   },
   {
    "t": "The test basis",
    "v": "Cơ sở kiểm thử (test basis) — đúng."
   },
   {
    "t": "The software development lifecycle (SDLC) in which the test technique can be used",
    "v": "Vòng đời phát triển phần mềm (SDLC) mà kỹ thuật có thể được dùng — sai, cả hai dùng được trong mọi SDLC."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Kỹ thuật hộp đen (còn gọi là kỹ thuật dựa trên đặc tả – specification-based) dựa trên phân tích hành vi đã được đặc tả của đối tượng kiểm thử mà không xét cấu trúc bên trong, nên cơ sở kiểm thử (test basis) thường là đặc tả. Kỹ thuật dựa trên kinh nghiệm tận dụng kiến thức và kinh nghiệm của tester để thiết kế và triển khai ca kiểm thử, nghĩa là tester có thể hoàn toàn không dùng đặc tả. Vậy khác biệt chính nằm ở cơ sở kiểm thử.\n• Vì sao A sai: Trong hầu hết trường hợp, cả hai loại kỹ thuật đều có thể dùng cho cùng một đối tượng kiểm thử.\n• Vì sao B sai: Cả kỹ thuật hộp đen và kỹ thuật dựa trên kinh nghiệm đều dùng được ở mọi cấp độ kiểm thử.\n• Vì sao D sai: Kỹ thuật dựa trên kinh nghiệm có thể phát hiện khuyết tật mà kỹ thuật hộp đen (và hộp trắng) bỏ sót, nên chúng bổ trợ cho nhau; cả hai đều dùng được trong mọi SDLC.",
  "lo": "FL-4.1.1",
  "k": "K2"
 },
 {
  "n": "20",
  "pre": "<p>You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit. You have identified the following valid equivalence partitions:</p><p>Variable: PIN code length</p><ul><li>The partition “length correct” - four-digit PINs</li><li>The partition “length incorrect” - PINs with length other than 4</li></ul><p>Variable: Number of different digits</p><ul><li>The partition “number of different digits correct” - PINs with at least two different digits</li><li>The partition “number of different digits incorrect” - PINs with all digits being the same</li></ul>",
  "prev": "<p>Bạn đang kiểm thử một bộ kiểm tra mã PIN, chấp nhận PIN hợp lệ và từ chối PIN không hợp lệ. PIN là một dãy chữ số. PIN hợp lệ nếu gồm bốn chữ số và các chữ số không giống hệt nhau. Bạn đã xác định các phân vùng tương đương (equivalence partition) sau:</p><p>Biến: Độ dài mã PIN</p><ul><li>Phân vùng “độ dài đúng” (length correct) - PIN có bốn chữ số</li><li>Phân vùng “độ dài sai” (length incorrect) - PIN có độ dài khác 4</li></ul><p>Biến: Số chữ số khác nhau</p><ul><li>Phân vùng “số chữ số khác nhau đúng” (number of different digits correct) - PIN có ít nhất hai chữ số khác nhau</li><li>Phân vùng “số chữ số khác nhau sai” (number of different digits incorrect) - PIN có tất cả các chữ số giống nhau</li></ul>",
  "q": "Which of the following is the BEST set of input test data to cover the identified equivalence partitions?",
  "qv": "Phương án nào sau đây là bộ dữ liệu đầu vào kiểm thử TỐT NHẤT để bao phủ các phân vùng tương đương đã xác định?",
  "o": [
   {
    "t": "12, 1111, 1234, 12345",
    "v": "12, 1111, 1234, 12345 — đúng."
   },
   {
    "t": "1, 123, 1111, 1234",
    "v": "1, 123, 1111, 1234 — sai, chỉ bao phủ phía 'quá ngắn' của độ dài sai."
   },
   {
    "t": "11, 12, 1111, 12345",
    "v": "11, 12, 1111, 12345 — sai, không có giá trị nào là PIN hợp lệ."
   },
   {
    "t": "123, 1222, 12345",
    "v": "123, 1222, 12345 — sai, không có giá trị nào có tất cả chữ số giống nhau."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Bộ dữ liệu bao phủ đủ 4 phân vùng, và còn xét cả hai phía của 'độ dài sai':\n  - '12' → độ dài sai (quá ít chữ số).\n  - '1111' → độ dài đúng + số chữ số khác nhau sai (tất cả giống nhau).\n  - '1234' → độ dài đúng + số chữ số khác nhau đúng (PIN hợp lệ).\n  - '12345' → độ dài sai (quá nhiều chữ số).\n• Vì sao B sai: Tất cả các phân vùng đều được bao phủ ('1', '123' → độ dài sai; '1111' → chữ số giống nhau; '1234' → hợp lệ), nhưng 'độ dài sai' chỉ được kiểm thử ở phía ngắn hơn 4, bỏ qua phía dài hơn 4 — nên kém hơn A.\n• Vì sao C sai: Không có giá trị nào là PIN hợp lệ (độ dài đúng + có ít nhất hai chữ số khác nhau): '11', '12', '12345' đều sai độ dài, '1111' có chữ số giống nhau.\n• Vì sao D sai: Không có giá trị nào bao phủ phân vùng 'số chữ số khác nhau sai' (tất cả chữ số giống nhau): '123', '1222', '12345' đều có ít nhất hai chữ số khác nhau.",
  "lo": "FL-4.2.1",
  "k": "K3"
 },
 {
  "n": "21",
  "pre": "<p>A developer was asked to implement the following business rule:</p><p>INPUT: value (integer number)<br>IF (value ≤ 100 OR value ≥ 200) THEN write “value incorrect”<br>ELSE write “value OK”</p><p>You design the test cases using 2-value boundary value analysis.</p>",
  "prev": "<p>Một lập trình viên được yêu cầu hiện thực quy tắc nghiệp vụ sau:</p><p>ĐẦU VÀO: value (số nguyên)<br>NẾU (value ≤ 100 HOẶC value ≥ 200) THÌ ghi “value incorrect”<br>NGƯỢC LẠI ghi “value OK”</p><p>Bạn thiết kế các ca kiểm thử (test case) bằng phân tích giá trị biên 2 giá trị (2-value boundary value analysis).</p>",
  "q": "Which of the following sets of test inputs achieves the greatest coverage?",
  "qv": "Bộ dữ liệu đầu vào kiểm thử nào sau đây đạt độ bao phủ (coverage) cao nhất?",
  "o": [
   {
    "t": "100, 150, 200, 201",
    "v": "100, 150, 200, 201 — sai, chỉ phủ 2/4 giá trị biên (100, 200) = 50%."
   },
   {
    "t": "99, 100, 200, 201",
    "v": "99, 100, 200, 201 — sai, chỉ phủ 2/4 giá trị biên (100, 200) = 50%."
   },
   {
    "t": "98, 99, 100, 101",
    "v": "98, 99, 100, 101 — sai, chỉ phủ 2/4 giá trị biên (100, 101) = 50%."
   },
   {
    "t": "101, 150, 199, 200",
    "v": "101, 150, 199, 200 — đúng, phủ 3/4 giá trị biên (101, 199, 200) = 75%."
   }
  ],
  "a": 3,
  "e": "• Cách tính: Quy tắc chia miền giá trị thành 3 phân vùng tương đương (equivalence partition): {…, 99, 100} (không hợp lệ), {101, 102, …, 198, 199} (hợp lệ) và {200, 201, …} (không hợp lệ).\n• Các giá trị biên (boundary value) là: 100, 101, 199, 200 → tổng cộng 4 giá trị biên.\n• Trong BVA 2 giá trị, mỗi giá trị biên cho 2 mục bao phủ (coverage item): chính giá trị biên và giá trị láng giềng gần nhất thuộc phân vùng kế bên. Vì các láng giềng gần nhất cũng chính là các giá trị biên của phân vùng kế bên, nên chỉ có đúng 4 mục bao phủ: 100, 101, 199, 200. Các giá trị như 98, 99, 150, 201 không phải mục bao phủ.\n• Vì sao D đúng: 101, 199, 200 là mục bao phủ → 3/4 = 75%, cao nhất trong các phương án.\n• Vì sao A sai: Chỉ 100 và 200 là mục bao phủ → 2/4 = 50%.\n• Vì sao B sai: Chỉ 100 và 200 là mục bao phủ → 2/4 = 50%.\n• Vì sao C sai: Chỉ 100 và 101 là mục bao phủ → 2/4 = 50%.",
  "lo": "FL-4.2.2",
  "k": "K3"
 },
 {
  "n": "22",
  "pre": "<p>You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table.</p><table><tr><th></th><th>R1</th><th>R2</th><th>R3</th></tr><tr><td>C1: First attempt at the exam?</td><td>-</td><td>-</td><td>F</td></tr><tr><td>C2: Theoretical exam passed?</td><td>T</td><td>F</td><td>-</td></tr><tr><td>C3: Practical exam passed?</td><td>T</td><td>-</td><td>F</td></tr><tr><td>Issue a driving license?</td><td>X</td><td></td><td></td></tr><tr><td>Request additional driving lessons?</td><td></td><td></td><td>X</td></tr><tr><td>Request to take the exam again?</td><td></td><td>X</td><td></td></tr></table>",
  "prev": "<p>Bạn đang làm việc trong một dự án phát triển hệ thống phân tích kết quả thi sát hạch lái xe. Bạn được yêu cầu thiết kế các ca kiểm thử (test case) dựa trên bảng quyết định (decision table) sau.</p><table><tr><th></th><th>R1</th><th>R2</th><th>R3</th></tr><tr><td>C1: Thi lần đầu?</td><td>-</td><td>-</td><td>F</td></tr><tr><td>C2: Đỗ bài thi lý thuyết?</td><td>T</td><td>F</td><td>-</td></tr><tr><td>C3: Đỗ bài thi thực hành?</td><td>T</td><td>-</td><td>F</td></tr><tr><td>Cấp giấy phép lái xe?</td><td>X</td><td></td><td></td></tr><tr><td>Yêu cầu học thêm giờ lái xe?</td><td></td><td></td><td>X</td></tr><tr><td>Yêu cầu thi lại?</td><td></td><td>X</td><td></td></tr></table>",
  "q": "What test data will show that there are contradictory rules in the decision table?",
  "qv": "Dữ liệu kiểm thử nào sẽ cho thấy bảng quyết định có các quy tắc mâu thuẫn nhau (contradictory rules)?",
  "o": [
   {
    "t": "C1 = T, C2 = T, C3 = F",
    "v": "C1 = T, C2 = T, C3 = F — sai, tổ hợp này không khớp quy tắc nào (thiếu sót – omission), không phải mâu thuẫn."
   },
   {
    "t": "C1 = T, C2 = F, C3 = T",
    "v": "C1 = T, C2 = F, C3 = T — sai, chỉ khớp một cột R2 nên không có mâu thuẫn."
   },
   {
    "t": "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T",
    "v": "C1 = T, C2 = T, C3 = T và C1 = F, C2 = T, C3 = T — sai, cả hai chỉ khớp duy nhất cột R1."
   },
   {
    "t": "C1 = F, C2 = F, C3 = F",
    "v": "C1 = F, C2 = F, C3 = F — đúng, khớp cả R2 và R3 nhưng hai quy tắc có hành động khác nhau."
   }
  ],
  "a": 3,
  "e": "• Cách làm: Với mỗi tổ hợp điều kiện, xem nó khớp với những cột (quy tắc) nào. Dấu “-” nghĩa là điều kiện đó không quan trọng (khớp cả T lẫn F). Mâu thuẫn xảy ra khi một tổ hợp khớp với từ 2 quy tắc trở lên mà các quy tắc đó có hành động khác nhau.\n• Vì sao D đúng: (F, F, F) khớp R2 (C2 = F, C1 và C3 tùy ý) và cũng khớp R3 (C1 = F, C3 = F, C2 tùy ý). R2 yêu cầu “thi lại” còn R3 yêu cầu “học thêm giờ lái” → hai hành động khác nhau cho cùng một đầu vào → R2 và R3 mâu thuẫn.\n• Vì sao A sai: (T, T, F) không khớp quy tắc nào (R1 cần C3 = T, R2 cần C2 = F, R3 cần C1 = F). Đây là ví dụ về sự thiếu sót (omission), không phải mâu thuẫn.\n• Vì sao B sai: (T, F, T) chỉ khớp R2 (R1 cần C2 = T, R3 cần C1 = F) → không có mâu thuẫn.\n• Vì sao C sai: Cả (T, T, T) và (F, T, T) đều chỉ khớp R1 (R2 cần C2 = F, R3 cần C3 = F) → không có mâu thuẫn.",
  "lo": "FL-4.2.3",
  "k": "K3"
 },
 {
  "n": "23",
  "pre": "<p>You are designing test cases based on the following state transition diagram:</p><ul><li>START —Room request→ REQUESTING</li><li>REQUESTING —Not available→ WAITING LIST</li><li>REQUESTING —Available→ CONFIRMED</li><li>WAITING LIST —Available→ CONFIRMED</li><li>WAITING LIST —Cancel→ END</li><li>CONFIRMED —Pay→ END</li></ul>",
  "prev": "<p>Bạn đang thiết kế các ca kiểm thử (test case) dựa trên sơ đồ chuyển trạng thái (state transition diagram) sau:</p><ul><li>START —Yêu cầu phòng (Room request)→ REQUESTING</li><li>REQUESTING —Hết phòng (Not available)→ WAITING LIST</li><li>REQUESTING —Còn phòng (Available)→ CONFIRMED</li><li>WAITING LIST —Còn phòng (Available)→ CONFIRMED</li><li>WAITING LIST —Hủy (Cancel)→ END</li><li>CONFIRMED —Thanh toán (Pay)→ END</li></ul>",
  "img": "c-state",
  "q": "What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?",
  "qv": "Số ca kiểm thử TỐI THIỂU cần có để đạt 100% độ bao phủ chuyển trạng thái hợp lệ (valid transitions coverage) là bao nhiêu?",
  "o": [
   {
    "t": "3",
    "v": "3 — đúng."
   },
   {
    "t": "2",
    "v": "2 — sai, không đủ để phủ cả 3 chuyển trạng thái không thể cùng xuất hiện trong một ca kiểm thử."
   },
   {
    "t": "5",
    "v": "5 — sai, nhiều hơn mức tối thiểu cần thiết."
   },
   {
    "t": "6",
    "v": "6 — sai, đây là số chuyển trạng thái, không phải số ca kiểm thử tối thiểu."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Ba chuyển trạng thái “REQUESTING → CONFIRMED”, “WAITING LIST → CONFIRMED” và “WAITING LIST → END” không thể cùng xuất hiện trong một ca kiểm thử (mỗi đường đi chỉ đi qua được một trong số chúng) → cần ít nhất 3 ca kiểm thử. Các chuyển trạng thái còn lại đều có thể đi kèm với một trong ba chuyển trên, nên 3 là đủ. Thực tế chỉ có đúng 3 chuỗi khả dĩ:\n  TC1: START (Room request) → REQUESTING (Available) → CONFIRMED (Pay) → END\n  TC2: START (Room request) → REQUESTING (Not available) → WAITING LIST (Available) → CONFIRMED (Pay) → END\n  TC3: START (Room request) → REQUESTING (Not available) → WAITING LIST (Cancel) → END\n  Ba ca này phủ đủ cả 6 chuyển trạng thái hợp lệ.\n• Vì sao B sai: 2 ca kiểm thử chỉ phủ được tối đa 2 trong 3 chuyển trạng thái loại trừ lẫn nhau nói trên.\n• Vì sao C sai: 5 ca là thừa, không phải mức tối thiểu.\n• Vì sao D sai: 6 là số chuyển trạng thái trong sơ đồ; một ca kiểm thử có thể phủ nhiều chuyển trạng thái nên không cần 6 ca.",
  "lo": "FL-4.2.4",
  "k": "K3"
 },
 {
  "n": "24",
  "pre": "<p>You want to apply branch testing to the code represented by the following control flow graph.</p>",
  "prev": "<p>Bạn muốn áp dụng kiểm thử nhánh (branch testing) cho đoạn mã được biểu diễn bằng đồ thị luồng điều khiển (control flow graph) sau.</p>",
  "img": "c-cfg",
  "q": "How many coverage items do you need to test?",
  "qv": "Bạn cần kiểm thử bao nhiêu mục bao phủ (coverage item)?",
  "o": [
   {
    "t": "2",
    "v": "2 — sai."
   },
   {
    "t": "4",
    "v": "4 — sai."
   },
   {
    "t": "8",
    "v": "8 — đúng, đồ thị có 8 cạnh (nhánh)."
   },
   {
    "t": "7",
    "v": "7 — sai, 7 là số nút, không phải số cạnh."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Trong kiểm thử nhánh (branch testing), mục bao phủ (coverage item) là các nhánh (branch), được biểu diễn bằng các cạnh (edge) của đồ thị luồng điều khiển. Đếm các cạnh: nút vào → nút 2 (1); nút 2 → nút vòng lặp và nút vòng lặp → nút 2 (2 cạnh, tổng 3); nút 2 → nút 4 (4); nút 4 → hai nhánh (6); hai nhánh → nút hợp (8). Tổng cộng có 8 cạnh → cần kiểm thử 8 mục bao phủ.\n• Vì sao A sai: 2 không phải số cạnh của đồ thị (có thể nhầm với số nhánh ra của một nút quyết định).\n• Vì sao B sai: 4 không phải số cạnh của đồ thị.\n• Vì sao D sai: 7 là số nút (node) của đồ thị; mục bao phủ của kiểm thử nhánh là cạnh, không phải nút.",
  "lo": "FL-4.3.2",
  "k": "K2"
 },
 {
  "n": "25",
  "pre": "",
  "prev": "",
  "q": "How can white-box testing be useful in support of black-box testing?",
  "qv": "Kiểm thử hộp trắng (white-box testing) có thể hữu ích như thế nào trong việc hỗ trợ kiểm thử hộp đen (black-box testing)?",
  "o": [
   {
    "t": "White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests",
    "v": "Các thước đo bao phủ hộp trắng giúp tester đánh giá các kiểm thử hộp đen theo độ bao phủ mã (code coverage) mà chúng đạt được — đúng."
   },
   {
    "t": "White-box coverage analysis can help testers identify unreachable fragments of the source code",
    "v": "Phân tích bao phủ hộp trắng giúp tester xác định các đoạn mã nguồn không thể tới được — sai, đúng nhưng không liên quan đến kiểm thử hộp đen."
   },
   {
    "t": "Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique",
    "v": "Kiểm thử nhánh bao hàm các kỹ thuật hộp đen, nên đạt 100% bao phủ nhánh bảo đảm đạt 100% bao phủ của mọi kỹ thuật hộp đen — sai, không có quan hệ bao hàm như vậy."
   },
   {
    "t": "White-box test techniques can provide coverage items for black-box techniques",
    "v": "Kỹ thuật hộp trắng có thể cung cấp mục bao phủ cho các kỹ thuật hộp đen — sai, hai loại dựa trên cơ sở khác nhau."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Chỉ thực hiện kiểm thử hộp đen thì không đo được độ bao phủ mã thực tế. Các thước đo bao phủ hộp trắng cung cấp phép đo khách quan về độ bao phủ mã mà các kiểm thử hộp đen đạt được, và cung cấp thông tin cần thiết để thiết kế thêm kiểm thử nhằm tăng độ bao phủ, từ đó tăng niềm tin vào mã.\n• Vì sao B sai: Phát biểu này tự nó đúng (phân tích bao phủ có thể chỉ ra mã không tới được), nhưng không liên quan gì đến việc hỗ trợ kiểm thử hộp đen.\n• Vì sao C sai: Nhìn chung không có quan hệ bao hàm (subsumption) nào giữa kỹ thuật kiểm thử hộp trắng và hộp đen; đạt 100% bao phủ nhánh không bảo đảm gì cho bao phủ của kỹ thuật hộp đen.\n• Vì sao D sai: Kỹ thuật hộp trắng thiết kế kiểm thử dựa trên chính đối tượng kiểm thử (mã, cấu trúc), còn kỹ thuật hộp đen dựa trên đặc tả. Vì vậy không có mối liên hệ giữa các mục bao phủ của hai loại kỹ thuật này.",
  "lo": "FL-4.3.3",
  "k": "K2"
 },
 {
  "n": "26",
  "pre": "<p>Consider the following list:</p><ul><li>Correct input not accepted</li><li>Incorrect input accepted</li><li>Wrong output format</li><li>Division by zero</li></ul>",
  "prev": "<p>Xem xét danh sách sau:</p><ul><li>Đầu vào đúng không được chấp nhận</li><li>Đầu vào sai lại được chấp nhận</li><li>Định dạng đầu ra sai</li><li>Chia cho 0</li></ul>",
  "q": "What test technique is MOST PROBABLY used by the tester who uses this list when performing testing?",
  "qv": "Tester sử dụng danh sách này khi kiểm thử thì NHIỀU KHẢ NĂNG NHẤT đang dùng kỹ thuật kiểm thử nào?",
  "o": [
   {
    "t": "Exploratory testing",
    "v": "Kiểm thử khám phá (exploratory testing) — sai, kỹ thuật này dùng test charter chứ không dùng danh sách sai sót."
   },
   {
    "t": "Fault attack",
    "v": "Tấn công lỗi (fault attack) — đúng, đây là danh sách các sai sót có thể xảy ra."
   },
   {
    "t": "Checklist-based testing",
    "v": "Kiểm thử dựa trên checklist (checklist-based testing) — sai, danh sách này là các sai sót tiềm ẩn chứ không phải điều kiện kiểm thử."
   },
   {
    "t": "Boundary value analysis",
    "v": "Phân tích giá trị biên (boundary value analysis) — sai, danh sách không nói gì về phân vùng hay biên."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Đây là danh sách các sai sót (failure) có thể xảy ra. Tấn công lỗi (fault attack) là cách tiếp cận có phương pháp để hiện thực kỹ thuật đoán lỗi (error guessing): tester tạo hoặc thu thập danh sách các lỗi (error), khuyết tật (defect) và sai sót (failure) có thể xảy ra, rồi thiết kế kiểm thử để xác định khuyết tật liên quan đến các lỗi đó, làm lộ khuyết tật hoặc gây ra sai sót.\n• Vì sao A sai: Kiểm thử khám phá dùng test charter, không dùng danh sách các khuyết tật/sai sót có thể xảy ra. Dù kiểm thử khám phá có thể kết hợp các kỹ thuật khác, trong tình huống này fault attack là khả năng cao nhất.\n• Vì sao C sai: Cả đoán lỗi và kiểm thử dựa trên checklist đều dùng danh sách, nhưng danh sách ở đây là các sai sót có thể xảy ra, không phải các điều kiện kiểm thử (test condition), nên kỹ thuật KHẢ NĂNG NHẤT là fault attack, vốn tập trung vào lỗi, khuyết tật và sai sót.\n• Vì sao D sai: BVA dựa trên phân tích giá trị biên của các phân vùng tương đương; danh sách trên không hề đề cập đến phân vùng hay biên.",
  "lo": "FL-4.4.1",
  "k": "K2"
 },
 {
  "n": "27",
  "pre": "",
  "prev": "",
  "q": "Which of the following BEST describes how using checklist-based testing can result in increased coverage?",
  "qv": "Phát biểu nào sau đây mô tả TỐT NHẤT cách mà kiểm thử dựa trên checklist (checklist-based testing) có thể giúp tăng độ bao phủ?",
  "o": [
   {
    "t": "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items",
    "v": "Các mục checklist có thể được định nghĩa ở mức chi tiết đủ thấp để tester hiện thực và thực thi ca kiểm thử chi tiết — sai, không giải thích được vì sao bao phủ tăng."
   },
   {
    "t": "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage",
    "v": "Checklist có thể được tự động hóa, nên mỗi lần chạy tự động phủ các mục checklist sẽ tạo thêm bao phủ — sai, chạy tự động luôn giống nhau nên không tăng bao phủ."
   },
   {
    "t": "Each checklist item should be tested separately and independently, so the elements cover different areas of the software",
    "v": "Mỗi mục checklist nên được kiểm thử riêng rẽ, độc lập, nên các phần tử phủ những vùng khác nhau của phần mềm — sai, điều này chỉ ảnh hưởng thứ tự thực thi."
   },
   {
    "t": "Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways",
    "v": "Hai tester thiết kế và thực thi kiểm thử dựa trên cùng các mục checklist mức cao thường sẽ kiểm thử theo những cách hơi khác nhau — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Nếu checklist ở mức cao (high-level), việc kiểm thử thực tế sẽ có độ biến thiên nhất định, dẫn tới khả năng bao phủ lớn hơn nhưng kém lặp lại hơn. Hai tester cùng theo một checklist mức cao có thể dùng dữ liệu kiểm thử, các bước kiểm thử khác nhau…; mỗi người sẽ phủ được một số vùng mà người kia không phủ → tăng độ bao phủ.\n• Vì sao A sai: Đúng là tester có thể hiện thực và thực thi ca kiểm thử chi tiết dựa trên checklist, nhưng điều đó không giải thích được vì sao độ bao phủ lại tăng.\n• Vì sao B sai: Các mục checklist không nên được tự động hóa. Mà kể cả có tự động hóa thì script tự động luôn thực thi kiểm thử theo cùng một cách, thường không làm tăng bao phủ.\n• Vì sao C sai: Đúng là mỗi mục checklist nên được kiểm thử riêng và độc lập, nhưng điều này chỉ ảnh hưởng đến thứ tự thực thi kiểm thử chứ không ảnh hưởng đến độ bao phủ đạt được.",
  "lo": "FL-4.4.3",
  "k": "K2"
 },
 {
  "n": "28",
  "pre": "",
  "prev": "",
  "q": "Which of the following provides the BEST example of a scenario-oriented acceptance criterion?",
  "qv": "Phương án nào sau đây là ví dụ TỐT NHẤT về một tiêu chí chấp nhận hướng kịch bản (scenario-oriented acceptance criterion)?",
  "o": [
   {
    "t": "The application must allow users to delete their account and all associated data upon request",
    "v": "Ứng dụng phải cho phép người dùng xóa tài khoản và toàn bộ dữ liệu liên quan khi có yêu cầu — sai, đây là tiêu chí hướng quy tắc (rule-oriented)."
   },
   {
    "t": "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven’t already done so",
    "v": "Khi khách hàng thêm sản phẩm vào giỏ và tiến hành thanh toán, họ phải được nhắc đăng nhập hoặc tạo tài khoản nếu chưa làm — đúng, đây là một kịch bản."
   },
   {
    "t": "IF (contain(product(23).Name, cart.products())) THEN return FALSE",
    "v": "IF (contain(product(23).Name, cart.products())) THEN return FALSE — sai, giống một dòng mã hơn là tiêu chí chấp nhận."
   },
   {
    "t": "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities",
    "v": "Website phải tuân thủ tiêu chuẩn ICT Accessibility 508 và bảo đảm mọi nội dung đều truy cập được với người khuyết tật — sai, đây là tiêu chí hướng quy tắc."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Tiêu chí chấp nhận (acceptance criterion) này mô tả một kịch bản ví dụ mà hệ thống phải hiện thực (khách thêm hàng vào giỏ → thanh toán → được nhắc đăng nhập/tạo tài khoản). Đây là ví dụ của tiêu chí chấp nhận hướng kịch bản (scenario-oriented).\n• Vì sao A sai: Tiêu chí này mô tả quy tắc/quy định mà hệ thống phải tuân thủ (ở đây là quyền được lãng quên – right to be forgotten) → là tiêu chí hướng quy tắc (rule-oriented).\n• Vì sao C sai: Câu này trông giống một dòng mã hiện thực quy tắc nghiệp vụ. Tiêu chí chấp nhận nên được viết cùng với đại diện nghiệp vụ, bằng ngôn ngữ họ hiểu; câu này nhiều khả năng các bên liên quan sẽ không hiểu được.\n• Vì sao D sai: Tiêu chí này mô tả quy định hệ thống phải tuân thủ và cách bảo đảm tuân thủ → là tiêu chí hướng quy tắc, không phải hướng kịch bản.",
  "lo": "FL-4.5.2",
  "k": "K2"
 },
 {
  "n": "29",
  "pre": "<p>You are using acceptance test-driven development and designing test cases based on the following user story:</p><p>As a Regular or Special user,<br>I want to be able to use my electronic floor card,<br>to access specific floors.</p><p>Acceptance Criteria:</p><ul><li>AC1: Regular users have access to floors 1 to 3</li><li>AC2: Floor 4 is only accessible to Special users</li><li>AC3: Special users have all the access rights of Regular users</li></ul>",
  "prev": "<p>Bạn đang áp dụng phát triển hướng kiểm thử chấp nhận (acceptance test-driven development – ATDD) và thiết kế các ca kiểm thử (test case) dựa trên user story sau:</p><p>Là người dùng Thường (Regular) hoặc Đặc biệt (Special),<br>tôi muốn có thể dùng thẻ tầng điện tử của mình,<br>để vào được các tầng nhất định.</p><p>Tiêu chí chấp nhận (acceptance criteria):</p><ul><li>AC1: Người dùng Thường được vào các tầng 1 đến 3</li><li>AC2: Tầng 4 chỉ người dùng Đặc biệt được vào</li><li>AC3: Người dùng Đặc biệt có mọi quyền truy cập của người dùng Thường</li></ul>",
  "q": "Which test case is the MOST reasonable one to test AC3?",
  "qv": "Ca kiểm thử nào HỢP LÝ NHẤT để kiểm thử AC3?",
  "o": [
   {
    "t": "Check that a Regular user can access floors 1 and 3",
    "v": "Kiểm tra người dùng Thường vào được tầng 1 và 3 — sai, AC3 nói về quyền của người dùng Đặc biệt."
   },
   {
    "t": "Check that a Regular user cannot access floor 4",
    "v": "Kiểm tra người dùng Thường không vào được tầng 4 — sai, đây là kiểm thử người dùng Thường, liên quan AC2."
   },
   {
    "t": "Check that a Special user can access floor 5",
    "v": "Kiểm tra người dùng Đặc biệt vào được tầng 5 — sai, không có tầng 5 trong tiêu chí chấp nhận."
   },
   {
    "t": "Check that a Special user can access floors 1, 2 and 3",
    "v": "Kiểm tra người dùng Đặc biệt vào được tầng 1, 2 và 3 — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: AC3 yêu cầu người dùng Đặc biệt có mọi quyền của người dùng Thường (tầng 1–3 theo AC1). Cách kiểm tra trực tiếp nhất là xác nhận người dùng Đặc biệt vào được các tầng 1, 2 và 3.\n• Vì sao A sai: Ta cần kiểm tra quyền truy cập của người dùng Đặc biệt, không phải người dùng Thường.\n• Vì sao B sai: Cũng là kiểm thử với người dùng Thường, không phải người dùng Đặc biệt nên không kiểm tra AC3.\n• Vì sao C sai: Tiêu chí chấp nhận không hề mô tả tầng 5. Ca kiểm thử không nên mở rộng phạm vi của user story; và ngay cả khi muốn kiểm thử âm (negative testing), ca này cũng không liên quan trực tiếp đến AC3.",
  "lo": "FL-4.5.3",
  "k": "K3"
 },
 {
  "n": "30",
  "pre": "",
  "prev": "",
  "q": "Which of the following is NOT a purpose of a test plan?",
  "qv": "Điều nào sau đây KHÔNG phải là mục đích của một kế hoạch kiểm thử (test plan)?",
  "o": [
   {
    "t": "To define test data and expected results for component tests and component integration tests",
    "v": "Xác định dữ liệu kiểm thử và kết quả mong đợi cho kiểm thử thành phần và kiểm thử tích hợp thành phần — đúng (KHÔNG phải mục đích của test plan)."
   },
   {
    "t": "To define as exit criteria from the component test level that “100% statement coverage and 100% branch coverage must be achieved”",
    "v": "Xác định tiêu chí kết thúc (exit criteria) của mức kiểm thử thành phần là “phải đạt 100% bao phủ câu lệnh và 100% bao phủ nhánh” — sai, đây là nội dung điển hình của test plan."
   },
   {
    "t": "To describe what fields the test progress report shall contain and what should be the form of this report",
    "v": "Mô tả báo cáo tiến độ kiểm thử phải có những trường nào và theo hình thức nào — sai, mẫu tài liệu là nội dung điển hình của test plan."
   },
   {
    "t": "To explain why system integration testing will be excluded from testing, although the test strategy requires this test level",
    "v": "Giải thích vì sao kiểm thử tích hợp hệ thống bị loại khỏi phạm vi dù chiến lược kiểm thử yêu cầu mức này — sai, giải thích sự sai khác so với chiến lược là mục đích của test plan."
   }
  ],
  "a": 0,
  "e": "• Vì sao A đúng: Kế hoạch kiểm thử có thể nêu yêu cầu về dữ liệu kiểm thử (như một phần của cách tiếp cận kiểm thử – test approach), nhưng không chứa dữ liệu kiểm thử chi tiết cho từng ca kiểm thử. Dữ liệu kiểm thử và kết quả mong đợi thuộc về ca kiểm thử, không thuộc test plan. Hơn nữa, khi lập test plan thường chưa thể xác định các dữ liệu này vì chưa biết chính xác các thành phần sẽ trông như thế nào.\n• Vì sao B sai: Một mục đích của test plan là giúp bảo đảm các hoạt động kiểm thử đáp ứng tiêu chí đã đặt ra, bằng cách nêu tiêu chí bắt đầu (entry criteria) và tiêu chí kết thúc (exit criteria). Tiêu chí bao phủ mã là ví dụ của tiêu chí như vậy cho mức kiểm thử thành phần.\n• Vì sao C sai: Mẫu tài liệu (documentation template) là nội dung điển hình của test plan, giúp giao tiếp giữa các bên liên quan bằng cách quy định cách thức trao đổi/báo cáo chuẩn.\n• Vì sao D sai: Một mục đích của test plan là chứng tỏ kiểm thử tuân thủ chính sách kiểm thử (test policy) và chiến lược kiểm thử (test strategy) hiện có, hoặc giải thích vì sao lại sai khác. Đây chính là ví dụ giải thích sự sai khác về các mức kiểm thử sẽ (hoặc không) được thực hiện.",
  "lo": "FL-5.1.1",
  "k": "K2"
 },
 {
  "n": "31",
  "pre": "<p>At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and let A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the following estimation model based on extrapolation:</p><p>E(n) = (3 · A(n − 1) + A(n − 2)) / 4</p><p>The graph shows the estimated and actual amount of work for the first four iterations.</p><table><tr><th>Iteration</th><th>Estimated (person-days)</th><th>Actual (person-days)</th></tr><tr><td>Iteration #1</td><td>8</td><td>7</td></tr><tr><td>Iteration #2</td><td>7</td><td>12</td></tr><tr><td>Iteration #3</td><td>10.75</td><td>8</td></tr><tr><td>Iteration #4</td><td>9</td><td>6</td></tr></table>",
  "prev": "<p>Đầu mỗi vòng lặp (iteration), nhóm ước lượng khối lượng công việc (tính bằng người-ngày) cần hoàn thành trong vòng lặp đó. Gọi E(n) là khối lượng công việc ước lượng cho vòng lặp n, và A(n) là khối lượng công việc thực tế đã làm trong vòng lặp n. Từ vòng lặp thứ ba, nhóm dùng mô hình ước lượng dựa trên ngoại suy (extrapolation) sau:</p><p>E(n) = (3 · A(n − 1) + A(n − 2)) / 4</p><p>Biểu đồ cho thấy khối lượng công việc ước lượng và thực tế của bốn vòng lặp đầu tiên.</p><table><tr><th>Vòng lặp</th><th>Ước lượng (người-ngày)</th><th>Thực tế (người-ngày)</th></tr><tr><td>Vòng lặp #1</td><td>8</td><td>7</td></tr><tr><td>Vòng lặp #2</td><td>7</td><td>12</td></tr><tr><td>Vòng lặp #3</td><td>10.75</td><td>8</td></tr><tr><td>Vòng lặp #4</td><td>9</td><td>6</td></tr></table>",
  "q": "What is the estimated amount of work for iteration #5?",
  "qv": "Khối lượng công việc ước lượng cho vòng lặp #5 là bao nhiêu?",
  "o": [
   {
    "t": "10.5 person-days",
    "v": "10.5 người-ngày — sai."
   },
   {
    "t": "8.25 person-days",
    "v": "8.25 người-ngày — sai."
   },
   {
    "t": "6.5 person-days",
    "v": "6.5 người-ngày — đúng, (3·6 + 8) / 4 = 6.5."
   },
   {
    "t": "9.4 person-days",
    "v": "9.4 người-ngày — sai."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Từ biểu đồ, giá trị thực tế (cột màu xám) của hai vòng lặp gần nhất là A(4) = 6 và A(3) = 8.\n  Áp dụng công thức: E(5) = (3 · A(4) + A(3)) / 4 = (3 · 6 + 8) / 4 = (18 + 8) / 4 = 26 / 4 = 6.5 người-ngày.\n  (Kiểm tra lại mô hình với dữ liệu cũ: E(3) = (3 · 12 + 7) / 4 = 10.75 và E(4) = (3 · 8 + 12) / 4 = 9, khớp với biểu đồ.)\n• Vì sao A sai: 10.5 không phải kết quả của công thức với A(4) = 6, A(3) = 8.\n• Vì sao B sai: 8.25 không phải kết quả đúng của công thức với A(4) = 6, A(3) = 8 (ví dụ trộn lẫn giá trị ước lượng và thực tế: (3 · 9 + 6) / 4 = 8.25).\n• Vì sao D sai: 9.4 là kết quả khi dùng nhầm giá trị ước lượng thay cho giá trị thực tế: (3 · E(4) + E(3)) / 4 = (3 · 9 + 10.75) / 4 ≈ 9.4. Công thức chỉ dùng giá trị THỰC TẾ A(n).",
  "lo": "FL-5.1.4",
  "k": "K3"
 },
 {
  "n": "32",
  "pre": "<p>You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7.</p><p>The following figure includes the priorities of these test cases (1 = highest priority, 3 = lowest priority).</p><p>The figure also shows the dependencies between test cases using arrows. For instance, the arrow from TC 4 to TC 5 means that TC 5 can only be executed if TC 4 was previously executed.</p><ul><li>TC 1 (priority 2) → TC 2 (priority 3)</li><li>TC 2 (priority 3) → TC 5 (priority 1)</li><li>TC 4 (priority 2) → TC 5 (priority 1)</li><li>TC 4 (priority 2) → TC 7 (priority 1)</li><li>TC 5 (priority 1) → TC 6 (priority 3)</li><li>TC 3 (priority 2) – no dependencies</li></ul>",
  "prev": "<p>Bạn đang lập lịch thực thi kiểm thử (test execution schedule) cho bảy ca kiểm thử TC 1 đến TC 7.</p><p>Hình sau cho biết độ ưu tiên của các ca kiểm thử (1 = ưu tiên cao nhất, 3 = ưu tiên thấp nhất).</p><p>Hình cũng thể hiện sự phụ thuộc giữa các ca kiểm thử bằng mũi tên. Ví dụ, mũi tên từ TC 4 đến TC 5 nghĩa là TC 5 chỉ có thể được thực thi nếu TC 4 đã được thực thi trước đó.</p><ul><li>TC 1 (ưu tiên 2) → TC 2 (ưu tiên 3)</li><li>TC 2 (ưu tiên 3) → TC 5 (ưu tiên 1)</li><li>TC 4 (ưu tiên 2) → TC 5 (ưu tiên 1)</li><li>TC 4 (ưu tiên 2) → TC 7 (ưu tiên 1)</li><li>TC 5 (ưu tiên 1) → TC 6 (ưu tiên 3)</li><li>TC 3 (ưu tiên 2) – không phụ thuộc</li></ul>",
  "img": "c-deps",
  "q": "Which test case should be executed sixth?",
  "qv": "Ca kiểm thử nào nên được thực thi thứ sáu?",
  "o": [
   {
    "t": "TC 3",
    "v": "TC 3 — đúng."
   },
   {
    "t": "TC 5",
    "v": "TC 5 — sai, TC 5 được chạy thứ năm."
   },
   {
    "t": "TC 6",
    "v": "TC 6 — sai, TC 6 có ưu tiên thấp nên chạy cuối cùng (thứ bảy)."
   },
   {
    "t": "TC 2",
    "v": "TC 2 — sai, TC 2 được chạy thứ tư."
   }
  ],
  "a": 0,
  "e": "• Cách làm: Thực thi theo độ ưu tiên nhưng phải tôn trọng phụ thuộc.\n  - Nếu chỉ xét ưu tiên: chạy TC 5, TC 7 trước (ưu tiên 1), rồi TC 1, TC 3, TC 4 (ưu tiên 2), cuối cùng TC 2, TC 6 (ưu tiên 3).\n  - Để chạy TC 7 cần chạy TC 4 trước.\n  - Để chạy TC 5 cần chạy TC 4 và TC 2; mà TC 2 lại cần TC 1 chạy trước.\n  - Vậy để chạy các ca ưu tiên 1 sớm nhất có thể, năm ca đầu là: TC 4 → TC 7 → TC 1 → TC 2 → TC 5.\n  - Tiếp theo chạy TC 3 (ưu tiên 2, cao hơn TC 6 ưu tiên 3), cuối cùng là TC 6.\n  - Lịch đầy đủ: TC 4 – TC 7 – TC 1 – TC 2 – TC 5 – TC 3 – TC 6.\n• Vì sao A đúng: Ca thứ sáu là TC 3.\n• Vì sao B sai: TC 5 ở vị trí thứ năm.\n• Vì sao C sai: TC 6 ở vị trí thứ bảy (cuối cùng).\n• Vì sao D sai: TC 2 ở vị trí thứ tư.",
  "lo": "FL-5.1.5",
  "k": "K3"
 },
 {
  "n": "33",
  "pre": "",
  "prev": "",
  "q": "What does the test pyramid model show?",
  "qv": "Mô hình kim tự tháp kiểm thử (test pyramid) thể hiện điều gì?",
  "o": [
   {
    "t": "That tests may have different priorities",
    "v": "Các kiểm thử có thể có độ ưu tiên khác nhau — sai."
   },
   {
    "t": "That tests may have different granularity",
    "v": "Các kiểm thử có thể có độ chi tiết (granularity) khác nhau — đúng."
   },
   {
    "t": "That tests may require different coverage criteria",
    "v": "Các kiểm thử có thể yêu cầu tiêu chí bao phủ khác nhau — sai."
   },
   {
    "t": "That tests may depend on other tests",
    "v": "Các kiểm thử có thể phụ thuộc vào kiểm thử khác — sai."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Mô hình kim tự tháp kiểm thử cho thấy các kiểm thử khác nhau có mức độ chi tiết (granularity) khác nhau: tầng đáy gồm nhiều kiểm thử nhỏ, cô lập, nhanh; càng lên cao càng ít kiểm thử nhưng phức tạp, tổng thể và chậm hơn.\n• Vì sao A sai: Mô hình kim tự tháp không cung cấp thông tin về độ ưu tiên của kiểm thử.\n• Vì sao C sai: Mô hình kim tự tháp độc lập với tiêu chí bao phủ.\n• Vì sao D sai: Mô hình kim tự tháp không thể hiện bất kỳ mối quan hệ (phụ thuộc) nào giữa các kiểm thử.",
  "lo": "FL-5.1.6",
  "k": "K1"
 },
 {
  "n": "34",
  "pre": "",
  "prev": "",
  "q": "What is the relationship between the testing quadrants, test levels and test types?",
  "qv": "Mối quan hệ giữa các góc phần tư kiểm thử (testing quadrants), mức kiểm thử (test level) và loại kiểm thử (test type) là gì?",
  "o": [
   {
    "t": "Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle",
    "v": "Các góc phần tư biểu diễn những tổ hợp cụ thể của mức và loại kiểm thử, xác định vị trí của chúng trong SDLC — sai."
   },
   {
    "t": "Testing quadrants describe the degree of granularity of individual test types performed at each test level",
    "v": "Các góc phần tư mô tả mức độ chi tiết của từng loại kiểm thử ở mỗi mức kiểm thử — sai, đó là kim tự tháp kiểm thử."
   },
   {
    "t": "Testing quadrants assign the test types that can be performed to the test levels",
    "v": "Các góc phần tư gán loại kiểm thử có thể thực hiện cho từng mức kiểm thử — sai, nói chung loại nào cũng làm được ở mức nào."
   },
   {
    "t": "Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders",
    "v": "Các góc phần tư nhóm mức kiểm thử và loại kiểm thử theo một số tiêu chí, như hướng tới các bên liên quan cụ thể — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Các góc phần tư kiểm thử nhóm các mức kiểm thử, loại kiểm thử, hoạt động, kỹ thuật kiểm thử và sản phẩm công việc trong phát triển Agile. Theo mô hình này, kiểm thử có thể hướng nghiệp vụ (business facing) hoặc hướng công nghệ (technology facing); có thể hỗ trợ nhóm (support the team – định hướng phát triển) hoặc đánh giá sản phẩm (critique the product – đo hành vi so với kỳ vọng). Kết hợp hai góc nhìn này tạo thành bốn góc phần tư.\n• Vì sao A sai: Các góc phần tư nhóm mức và loại kiểm thử một cách riêng rẽ theo một số tiêu chí; chúng không biểu diễn tổ hợp của mức và loại kiểm thử và không gắn với vị trí nào trong vòng đời phát triển phần mềm.\n• Vì sao B sai: Các góc phần tư không mô tả mức độ chi tiết (granularity) của các loại kiểm thử ở từng mức; mô hình làm điều đó (theo mức kiểm thử) là kim tự tháp kiểm thử (test pyramid).\n• Vì sao C sai: Nhìn chung, bất kỳ loại kiểm thử nào cũng có thể được thực hiện ở bất kỳ mức kiểm thử nào, nên không có chuyện “gán” loại kiểm thử cho mức kiểm thử.",
  "lo": "FL-5.1.7",
  "k": "K2"
 },
 {
  "n": "35",
  "pre": "",
  "prev": "",
  "q": "Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing?",
  "qv": "Điều nào sau đây là ví dụ về cách phân tích rủi ro sản phẩm (product risk analysis) có thể ảnh hưởng đến mức độ kỹ lưỡng và phạm vi kiểm thử?",
  "o": [
   {
    "t": "Continuous risk monitoring allows us to identify an emerging risk as soon as possible",
    "v": "Giám sát rủi ro liên tục giúp nhận diện rủi ro mới nổi sớm nhất có thể — sai, giám sát rủi ro thuộc kiểm soát rủi ro."
   },
   {
    "t": "Risk identification allows us to implement risk mitigation activities and reduce the risk level",
    "v": "Nhận diện rủi ro cho phép thực hiện các hoạt động giảm thiểu và hạ mức rủi ro — sai, giảm thiểu được xác định ở kiểm soát rủi ro."
   },
   {
    "t": "The assessed risk level helps us to select the rigor of testing",
    "v": "Mức rủi ro đã đánh giá giúp lựa chọn mức độ nghiêm ngặt của kiểm thử — đúng."
   },
   {
    "t": "Risk analysis allows us to derive coverage items",
    "v": "Phân tích rủi ro cho phép suy ra các mục bao phủ — sai, mục bao phủ được suy ra từ kỹ thuật kiểm thử."
   }
  ],
  "a": 2,
  "e": "• Vì sao C đúng: Đây là ví dụ về việc phân tích rủi ro ảnh hưởng đến mức độ kỹ lưỡng (thoroughness) và phạm vi kiểm thử: mức rủi ro đánh giá được quyết định mức độ nghiêm ngặt (rigor) của kiểm thử — rủi ro càng cao thì kiểm thử càng kỹ.\n• Vì sao A sai: Giám sát rủi ro (risk monitoring) là một phần của kiểm soát rủi ro (risk control), không phải phân tích rủi ro (risk analysis).\n• Vì sao B sai: Bản thân việc nhận diện rủi ro (risk identification) không cho phép thực hiện các hoạt động giảm thiểu rủi ro; các hành động giảm thiểu được xác định trong giai đoạn kiểm soát rủi ro.\n• Vì sao D sai: Mục bao phủ (coverage item) được suy ra bằng các kỹ thuật kiểm thử, không phải qua phân tích rủi ro.",
  "lo": "FL-5.2.3",
  "k": "K2"
 },
 {
  "n": "36",
  "pre": "",
  "prev": "",
  "q": "Which of the following activities in the test process makes the MOST use of test progress reports?",
  "qv": "Hoạt động nào sau đây trong quy trình kiểm thử sử dụng báo cáo tiến độ kiểm thử (test progress report) NHIỀU NHẤT?",
  "o": [
   {
    "t": "Test design",
    "v": "Thiết kế kiểm thử (test design) — sai."
   },
   {
    "t": "Test completion",
    "v": "Hoàn tất kiểm thử (test completion) — đúng."
   },
   {
    "t": "Test analysis",
    "v": "Phân tích kiểm thử (test analysis) — sai."
   },
   {
    "t": "Test planning",
    "v": "Lập kế hoạch kiểm thử (test planning) — sai."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Báo cáo hoàn tất kiểm thử (test completion report) được lập trong giai đoạn hoàn tất kiểm thử, khi một dự án, mức kiểm thử hoặc loại kiểm thử đã xong và lý tưởng là đã đạt tiêu chí kết thúc. Báo cáo này sử dụng thông tin từ các báo cáo tiến độ kiểm thử và dữ liệu khác.\n• Vì sao A sai: Báo cáo tiến độ kiểm thử chủ yếu được dùng trong giám sát và kiểm soát kiểm thử (test monitoring and test control) và hoàn tất kiểm thử, không phải trong thiết kế kiểm thử.\n• Vì sao C sai: Tương tự, báo cáo tiến độ không được dùng chủ yếu trong phân tích kiểm thử.\n• Vì sao D sai: Tương tự, báo cáo tiến độ không được dùng chủ yếu trong lập kế hoạch kiểm thử.",
  "lo": "FL-5.3.2",
  "k": "K2"
 },
 {
  "n": "37",
  "pre": "",
  "prev": "",
  "q": "Which of the following is NOT an example of how configuration management supports testing?",
  "qv": "Điều nào sau đây KHÔNG phải là ví dụ về cách quản lý cấu hình (configuration management) hỗ trợ kiểm thử?",
  "o": [
   {
    "t": "All commits to the repository are uniquely identified and version controlled",
    "v": "Mọi commit vào kho mã đều được định danh duy nhất và quản lý phiên bản — sai, đây đúng là hỗ trợ của quản lý cấu hình."
   },
   {
    "t": "All changes in the test environment elements are tracked",
    "v": "Mọi thay đổi của các thành phần môi trường kiểm thử đều được theo dõi — sai, đây đúng là hỗ trợ của quản lý cấu hình."
   },
   {
    "t": "All requirement specifications are referenced unambiguously in test plans",
    "v": "Mọi đặc tả yêu cầu đều được tham chiếu rõ ràng, không nhập nhằng trong kế hoạch kiểm thử — sai, đây đúng là hỗ trợ của quản lý cấu hình."
   },
   {
    "t": "All identified defects have an assigned status",
    "v": "Mọi khuyết tật được phát hiện đều có trạng thái được gán — đúng (KHÔNG phải quản lý cấu hình), đây là việc của quản lý khuyết tật."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Việc mỗi khuyết tật có trạng thái được gán do quản lý khuyết tật (defect management) bảo đảm, không phải quy trình quản lý cấu hình.\n• Vì sao A sai: Đây là hỗ trợ của quản lý cấu hình. Khi người dùng báo một sai sót, nhờ các commit được định danh duy nhất, có thể dựng lại các tệp của đúng phiên bản phần mềm người dùng đang dùng (cùng phiên bản test script tương ứng), từ đó tái hiện sai sót và định vị khuyết tật nhanh hơn.\n• Vì sao B sai: Đây là hỗ trợ của quản lý cấu hình. Nếu một thay đổi trong môi trường kiểm thử gây sự cố bất ngờ, quản lý cấu hình cho phép quay lui về phiên bản môi trường trước đó, giúp việc kiểm thử tiếp tục mà không bị ảnh hưởng.\n• Vì sao C sai: Đây là hỗ trợ của quản lý cấu hình. Nó bảo đảm mọi tài liệu đã định danh (như đặc tả yêu cầu) và hạng mục phần mềm được tham chiếu rõ ràng trong tài liệu kiểm thử (như kế hoạch kiểm thử).",
  "lo": "FL-5.4.1",
  "k": "K2"
 },
 {
  "n": "38",
  "pre": "<p>Consider the following defect report for a web-based shopping application:</p><p>Application: WebShop v0.99</p><p>Defect: Login button not working</p><p>Steps to Reproduce:</p><p>Launch the website<br>Click on the login button</p><p>Expected result: The user should be redirected to the login page.<br>Actual result: The login button does not respond when clicked.</p><p>Severity: High<br>Priority: Urgent</p>",
  "prev": "<p>Xem xét báo cáo khuyết tật (defect report) sau đây của một ứng dụng mua sắm trên web:</p><p>Ứng dụng: WebShop v0.99</p><p>Khuyết tật: Nút đăng nhập không hoạt động</p><p>Các bước tái hiện:</p><p>Mở website<br>Nhấn vào nút đăng nhập</p><p>Kết quả mong đợi: Người dùng được chuyển đến trang đăng nhập.<br>Kết quả thực tế: Nút đăng nhập không phản hồi khi được nhấn.</p><p>Mức độ nghiêm trọng (severity): Cao<br>Độ ưu tiên (priority): Khẩn cấp</p>",
  "q": "What is the MOST important information that is missing from this defect report?",
  "qv": "Thông tin QUAN TRỌNG NHẤT còn thiếu trong báo cáo khuyết tật này là gì?",
  "o": [
   {
    "t": "Name of the tester and date",
    "v": "Tên tester và ngày — sai, quan trọng nhưng không bằng thông tin môi trường kiểm thử."
   },
   {
    "t": "Test environment elements and their version numbers",
    "v": "Các thành phần môi trường kiểm thử và số phiên bản của chúng — đúng."
   },
   {
    "t": "Identification of the test object",
    "v": "Định danh đối tượng kiểm thử — sai, đã có (WebShop v0.99)."
   },
   {
    "t": "Impact on the interests of stakeholders",
    "v": "Tác động đến lợi ích của các bên liên quan — sai, đã có (severity: High)."
   }
  ],
  "a": 1,
  "e": "• Vì sao B đúng: Thông tin quan trọng bị thiếu là trình duyệt và thiết bị dùng để kiểm thử (các thành phần môi trường kiểm thử cùng phiên bản). Khuyết tật kiểu này có thể chỉ xảy ra trên một trình duyệt hoặc thiết bị cụ thể — ví dụ nút đăng nhập chạy tốt trên trình duyệt này (hoặc phiên bản này) nhưng không chạy trên trình duyệt khác. Thông tin này giúp lập trình viên tái hiện sự cố và tìm nguyên nhân gốc nhanh hơn.\n• Vì sao A sai: Tên tester và ngày là thông tin quan trọng, nhưng không quan trọng bằng các thành phần môi trường kiểm thử.\n• Vì sao C sai: Đối tượng kiểm thử (test object) đã được định danh: WebShop v0.99.\n• Vì sao D sai: Tác động đã có trong báo cáo — đó chính là mức độ nghiêm trọng (severity: High).",
  "lo": "FL-5.5.1",
  "k": "K3"
 },
 {
  "n": "39",
  "pre": "",
  "prev": "",
  "q": "Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?",
  "qv": "Công cụ thuộc nhóm nào sau đây hỗ trợ việc tổ chức ca kiểm thử, các khuyết tật đã phát hiện và quản lý cấu hình?",
  "o": [
   {
    "t": "Test execution and coverage tools",
    "v": "Công cụ thực thi kiểm thử và đo bao phủ — sai, không hỗ trợ tổ chức khuyết tật và quản lý cấu hình."
   },
   {
    "t": "Test design and implementation tools",
    "v": "Công cụ thiết kế và hiện thực kiểm thử — sai, chỉ hỗ trợ sinh ca kiểm thử, dữ liệu và thủ tục kiểm thử."
   },
   {
    "t": "Defect management tools",
    "v": "Công cụ quản lý khuyết tật — sai, chỉ quản lý khuyết tật, không tổ chức ca kiểm thử hay quản lý cấu hình."
   },
   {
    "t": "Test management tools",
    "v": "Công cụ quản lý kiểm thử (test management tools) — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Công cụ quản lý kiểm thử tăng hiệu quả quy trình kiểm thử bằng cách hỗ trợ quản lý vòng đời phát triển phần mềm (SDLC), yêu cầu, kiểm thử, khuyết tật và quản lý cấu hình.\n• Vì sao A sai: Công cụ thực thi kiểm thử và đo bao phủ hỗ trợ việc thực thi tự động ca kiểm thử và đo độ bao phủ đạt được, nhưng không giúp tổ chức khuyết tật và quản lý cấu hình.\n• Vì sao B sai: Công cụ thiết kế và hiện thực kiểm thử hỗ trợ sinh ca kiểm thử, dữ liệu kiểm thử và thủ tục kiểm thử, nhưng không giúp tổ chức khuyết tật và quản lý cấu hình.\n• Vì sao C sai: Công cụ quản lý khuyết tật dùng để quản lý khuyết tật, nhưng không dùng để tổ chức ca kiểm thử hay quản lý cấu hình.",
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
    "t": "The capability of generating test cases without access to the test basis",
    "v": "Khả năng sinh ca kiểm thử mà không cần truy cập cơ sở kiểm thử (test basis) — sai, điều này là bất khả."
   },
   {
    "t": "The achievement of increased coverage through more objective assessment",
    "v": "Tăng độ bao phủ nhờ đánh giá khách quan hơn — sai, đánh giá khách quan không tự làm tăng bao phủ."
   },
   {
    "t": "The increase in test execution times available with higher processing power",
    "v": "Tăng thời gian thực thi kiểm thử nhờ năng lực xử lý cao hơn — sai, phát biểu tự mâu thuẫn và thời gian dài hơn không phải lợi ích."
   },
   {
    "t": "The prevention of human errors through greater consistency and repeatability",
    "v": "Ngăn ngừa lỗi do con người nhờ tính nhất quán và khả năng lặp lại cao hơn — đúng."
   }
  ],
  "a": 3,
  "e": "• Vì sao D đúng: Ngăn ngừa lỗi do con người nhờ tính nhất quán và lặp lại cao hơn là lợi ích của tự động hóa kiểm thử, vì công cụ không mắc lỗi kiểu con người. Ví dụ: kiểm thử được suy ra nhất quán từ yêu cầu, dữ liệu kiểm thử được tạo có hệ thống, và kiểm thử được công cụ thực thi theo cùng thứ tự với cùng tần suất.\n• Vì sao A sai: Không thể sinh ca kiểm thử mà không có cơ sở kiểm thử (test basis); dù do tester hay công cụ sinh ra thì đều cần truy cập test basis.\n• Vì sao B sai: Đây không phải lợi ích trực tiếp của tự động hóa. Tự động hóa cho đánh giá khách quan hơn về độ bao phủ, nhưng bản thân việc đánh giá không làm tăng bao phủ; chỉ khi dùng kết quả đó để viết thêm ca kiểm thử thì bao phủ mới có thể tăng.\n• Vì sao C sai: Phát biểu tự mâu thuẫn: năng lực xử lý cao hơn thường làm GIẢM thời gian thực thi; và thời gian thực thi tăng thì không phải lợi ích vì kiểm thử sẽ kéo dài hơn.",
  "lo": "FL-6.2.1",
  "k": "K1"
 }
] };
