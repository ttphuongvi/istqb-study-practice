/* File được sinh tự động bởi tools/build_data.py — sửa dữ liệu nguồn rồi chạy lại script. */
window.ISTQB = window.ISTQB || { exams: {}, lo: {} };
window.ISTQB.syllabus = {
 "chapters": [
  {
   "id": 1,
   "en": "Fundamentals of Testing",
   "vi": "Nền tảng của kiểm thử",
   "intro": "Chương 1 đặt nền móng cho toàn bộ syllabus: kiểm thử là gì, vì sao cần kiểm thử, 7 nguyên tắc kiểm thử, các hoạt động trong quy trình kiểm thử, sản phẩm kiểm thử (testware), vai trò và kỹ năng của tester. Đây là chương có nhiều thuật ngữ gốc (error/defect/failure, verification/validation, testing/QA...) nên đề thi rất hay hỏi kiểu phân biệt khái niệm; nắm chắc chương này giúp đọc hiểu các chương sau dễ hơn.",
   "units": [
    "FL-1.1.1",
    "FL-1.1.2",
    "FL-1.2.1",
    "FL-1.2.2",
    "FL-1.2.3",
    "FL-1.3.1",
    "FL-1.4.1",
    "FL-1.4.2",
    "FL-1.4.3",
    "FL-1.4.4",
    "FL-1.4.5",
    "FL-1.5.1",
    "FL-1.5.2",
    "FL-1.5.3"
   ]
  },
  {
   "id": 2,
   "en": "Testing Throughout the Software Development Lifecycle",
   "vi": "Kiểm thử xuyên suốt vòng đời phát triển phần mềm",
   "intro": "Chương này giải thích kiểm thử thay đổi thế nào theo mô hình vòng đời phát triển phần mềm (SDLC): tuần tự, lặp, Agile, DevOps, cách tiếp cận test-first, shift left và retrospective. Phần còn lại phân biệt 5 cấp độ kiểm thử, 4 loại kiểm thử, kiểm thử xác nhận với kiểm thử hồi quy, và kiểm thử bảo trì. Đề thi rất hay hỏi phân biệt cấp độ/loại kiểm thử và confirmation vs regression, nên cần nắm chắc định nghĩa.",
   "units": [
    "FL-2.1.1",
    "FL-2.1.2",
    "FL-2.1.3",
    "FL-2.1.4",
    "FL-2.1.5",
    "FL-2.1.6",
    "FL-2.2.1",
    "FL-2.2.2",
    "FL-2.2.3",
    "FL-2.3.1"
   ]
  },
  {
   "id": 3,
   "en": "Static Testing",
   "vi": "Kiểm thử tĩnh",
   "intro": "Chương này giới thiệu kiểm thử tĩnh (static testing): đánh giá sản phẩm công việc mà không cần chạy phần mềm, bằng review thủ công hoặc phân tích tĩnh bằng công cụ. Trọng tâm thi là giá trị của kiểm thử tĩnh, so sánh tĩnh – động, 5 hoạt động của quy trình review, 6 vai trò chính và 4 loại review (informal, walkthrough, technical review, inspection). Đây là chương ngắn nhưng câu hỏi thường rất 'nguyên văn', dễ ghi điểm nếu nhớ đúng danh sách.",
   "units": [
    "FL-3.1.1",
    "FL-3.1.2",
    "FL-3.1.3",
    "FL-3.2.1",
    "FL-3.2.2",
    "FL-3.2.3",
    "FL-3.2.4",
    "FL-3.2.5"
   ]
  },
  {
   "id": 4,
   "en": "Test Analysis and Design",
   "vi": "Phân tích và thiết kế kiểm thử",
   "intro": "Chương này giới thiệu các kỹ thuật kiểm thử (test technique) hộp đen, hộp trắng, dựa trên kinh nghiệm và các cách tiếp cận dựa trên cộng tác (user story, acceptance criteria, ATDD). Đây là chương nặng nhất của đề thi với nhiều câu K3 bắt bạn tự tính: số test case tối thiểu, giá trị biên, cột decision table, độ phủ state transition và statement/branch coverage. Hãy luyện thật kỹ cách đếm coverage item của từng kỹ thuật.",
   "units": [
    "FL-4.1.1",
    "FL-4.2.1",
    "FL-4.2.2",
    "FL-4.2.3",
    "FL-4.2.4",
    "FL-4.3.1",
    "FL-4.3.2",
    "FL-4.3.3",
    "FL-4.4.1",
    "FL-4.4.2",
    "FL-4.4.3",
    "FL-4.5.1",
    "FL-4.5.2",
    "FL-4.5.3"
   ]
  },
  {
   "id": 5,
   "en": "Managing the Test Activities",
   "vi": "Quản lý các hoạt động kiểm thử",
   "intro": "Chương này bàn về lập kế hoạch kiểm thử (test plan, entry/exit criteria, ước lượng, ưu tiên test case, test pyramid, testing quadrants), quản lý rủi ro, giám sát – điều khiển – hoàn tất kiểm thử, quản lý cấu hình và quản lý lỗi. Đây là chương có nhiều câu K3 tính toán (ước lượng ba điểm, tỷ lệ, thứ tự chạy test có phụ thuộc) và câu lập defect report, nên rất đáng đầu tư để lấy điểm.",
   "units": [
    "FL-5.1.1",
    "FL-5.1.2",
    "FL-5.1.3",
    "FL-5.1.4",
    "FL-5.1.5",
    "FL-5.1.6",
    "FL-5.1.7",
    "FL-5.2.1",
    "FL-5.2.2",
    "FL-5.2.3",
    "FL-5.2.4",
    "FL-5.3.1",
    "FL-5.3.2",
    "FL-5.3.3",
    "FL-5.4.1",
    "FL-5.5.1"
   ]
  },
  {
   "id": 6,
   "en": "Test Tools",
   "vi": "Công cụ kiểm thử",
   "intro": "Chương ngắn nhất của syllabus (20 phút), nói về các loại công cụ hỗ trợ kiểm thử và lợi ích/rủi ro của tự động hóa kiểm thử (test automation). Đề thi thường có 1–2 câu: nhận diện loại công cụ theo mô tả, hoặc phân biệt đâu là lợi ích, đâu là rủi ro của automation — học thuộc hai danh sách là ăn điểm chắc.",
   "units": [
    "FL-6.1.1",
    "FL-6.2.1"
   ]
  }
 ],
 "units": {
  "FL-1.1.1": {
   "lo": "FL-1.1.1",
   "k": "K1",
   "loEn": "Identify typical test objectives",
   "loVi": "Nhận biết các mục tiêu kiểm thử điển hình",
   "sec": "1.1.1",
   "title": "Test Objectives",
   "titleVi": "Mục tiêu kiểm thử",
   "page": 15,
   "summary": [
    "Kiểm thử (testing) là tập hợp các hoạt động nhằm phát hiện lỗi và đánh giá chất lượng của sản phẩm công việc phần mềm; sản phẩm đang được kiểm thử gọi là đối tượng kiểm thử (test object).",
    "Hiểu lầm thường gặp: kiểm thử chỉ là chạy test. Thực tế kiểm thử gồm nhiều hoạt động khác (lập kế hoạch, phân tích, thiết kế...) và phải gắn với vòng đời phát triển phần mềm (SDLC).",
    "Kiểm thử không chỉ là xác minh (verification – kiểm tra hệ thống có đáp ứng yêu cầu đã đặc tả) mà còn là thẩm định (validation – kiểm tra hệ thống có đáp ứng nhu cầu người dùng và các bên liên quan trong môi trường vận hành thực tế).",
    "Kiểm thử có thể là động (dynamic testing – có chạy phần mềm) hoặc tĩnh (static testing – không chạy phần mềm, gồm review và phân tích tĩnh). Kiểm thử là hoạt động trí tuệ, cần kiến thức chuyên môn, tư duy phân tích, tư duy phản biện và tư duy hệ thống.",
    "9 mục tiêu kiểm thử điển hình: (1) đánh giá sản phẩm công việc như yêu cầu, user story, thiết kế, mã nguồn; (2) gây ra lỗi vận hành (failure) và tìm khiếm khuyết (defect); (3) đảm bảo độ bao phủ (coverage) cần thiết của đối tượng kiểm thử; (4) giảm mức rủi ro do chất lượng phần mềm không đạt; (5) xác minh các yêu cầu đã đặc tả có được đáp ứng; (6) xác minh đối tượng kiểm thử tuân thủ yêu cầu hợp đồng, pháp lý và quy định; (7) cung cấp thông tin cho các bên liên quan để ra quyết định sáng suốt; (8) xây dựng niềm tin vào chất lượng của đối tượng kiểm thử; (9) thẩm định đối tượng kiểm thử đã hoàn chỉnh và hoạt động như các bên liên quan mong đợi.",
    "Mục tiêu kiểm thử thay đổi theo bối cảnh: sản phẩm được kiểm thử, cấp độ kiểm thử (test level), rủi ro, SDLC đang áp dụng, và yếu tố kinh doanh (cơ cấu công ty, cạnh tranh, thời gian ra thị trường)."
   ],
   "en": [
    "Software testing is a set of activities to discover defects and evaluate the quality of software work products.",
    "Testing involves verification, i.e., checking whether the system meets specified requirements, it also involves validation, which means checking whether the system meets users’ and other stakeholders’ needs in its operational environment.",
    "Dynamic testing involves the execution of software, while static testing does not.",
    "Test objectives can vary, depending upon the context, which includes the work product being tested, the test level, risks, the SDLC being followed, and factors related to the business context."
   ],
   "tips": [
    "Câu hỏi dạng “which is NOT a typical test objective” thường cài đáp án như “chứng minh phần mềm không còn lỗi” (prove there are no defects) hoặc “sửa lỗi” (fixing defects) – cả hai đều KHÔNG phải mục tiêu kiểm thử.",
    "Phân biệt: verification = “làm đúng sản phẩm theo đặc tả” (build the product right); validation = “làm ra đúng sản phẩm người dùng cần” (build the right product)."
   ],
   "terms": [
    "testing",
    "test objective",
    "test object",
    "verification",
    "validation",
    "quality",
    "coverage"
   ],
   "ch": 1
  },
  "FL-1.1.2": {
   "lo": "FL-1.1.2",
   "k": "K2",
   "loEn": "Differentiate testing from debugging",
   "loVi": "Phân biệt kiểm thử với gỡ lỗi",
   "sec": "1.1.2",
   "title": "Testing and Debugging",
   "titleVi": "Kiểm thử và gỡ lỗi",
   "page": 16,
   "summary": [
    "Kiểm thử (testing) và gỡ lỗi (debugging) là hai hoạt động tách biệt.",
    "Kiểm thử động (dynamic testing) có thể kích hoạt lỗi vận hành (failure) do khiếm khuyết (defect) gây ra; kiểm thử tĩnh (static testing) tìm trực tiếp khiếm khuyết trong đối tượng kiểm thử.",
    "Khi kiểm thử động gây ra failure, debugging là việc tìm nguyên nhân (defect), phân tích và loại bỏ chúng. Quy trình debugging điển hình gồm 3 bước: tái hiện lỗi (reproduction) → chẩn đoán, tìm defect (diagnosis) → sửa defect (fixing).",
    "Sau khi sửa, kiểm thử xác nhận (confirmation testing) kiểm tra bản sửa đã giải quyết vấn đề chưa – tốt nhất do chính người đã chạy test ban đầu thực hiện. Có thể làm thêm kiểm thử hồi quy (regression testing) để kiểm tra bản sửa có gây lỗi ở phần khác không.",
    "Khi kiểm thử tĩnh tìm thấy defect, debugging chỉ cần loại bỏ nó – không cần tái hiện hay chẩn đoán, vì kiểm thử tĩnh tìm trực tiếp defect và không thể gây ra failure."
   ],
   "en": [
    "Testing and debugging are separate activities.",
    "When dynamic testing triggers a failure, debugging is concerned with finding causes of this failure (defects), analyzing these causes, and eliminating them.",
    "Preferably, confirmation testing is done by the same person who performed the initial test.",
    "When static testing identifies a defect, debugging is concerned with removing it. There is no need for reproduction or diagnosis."
   ],
   "tips": [
    "Debugging là hoạt động KHÔNG thuộc kiểm thử (non-testing activity), thường do developer làm. Tester tìm/kích hoạt lỗi; developer tìm nguyên nhân và sửa.",
    "Bẫy: với static testing, debugging KHÔNG có bước reproduction và diagnosis – chỉ còn bước loại bỏ defect."
   ],
   "terms": [
    "debugging",
    "testing",
    "defect",
    "failure"
   ],
   "ch": 1
  },
  "FL-1.2.1": {
   "lo": "FL-1.2.1",
   "k": "K2",
   "loEn": "Exemplify why testing is necessary",
   "loVi": "Nêu ví dụ minh họa vì sao kiểm thử là cần thiết",
   "sec": "1.2.1",
   "title": "Testing’s Contributions to Success",
   "titleVi": "Đóng góp của kiểm thử vào thành công",
   "page": 16,
   "summary": [
    "Kiểm thử, như một hình thức kiểm soát chất lượng (quality control), giúp đạt mục tiêu kiểm thử trong giới hạn phạm vi, thời gian, chất lượng và ngân sách. Bất kỳ bên liên quan nào cũng có thể dùng kỹ năng kiểm thử để góp phần vào thành công dự án.",
    "Kiểm thử là cách phát hiện defect hiệu quả về chi phí; defect sau đó được loại bỏ bằng debugging (hoạt động không phải kiểm thử) → kiểm thử GIÁN TIẾP góp phần nâng cao chất lượng đối tượng kiểm thử.",
    "Kiểm thử giúp đánh giá TRỰC TIẾP chất lượng đối tượng kiểm thử ở nhiều giai đoạn của SDLC; các số đo này hỗ trợ quyết định chuyển giai đoạn, ví dụ quyết định phát hành (release decision).",
    "Kiểm thử là đại diện gián tiếp của người dùng trong dự án: tester đảm bảo hiểu biết về nhu cầu người dùng được xem xét suốt vòng đời phát triển (thay vì đưa người dùng thật vào dự án – thường quá tốn kém và khó tìm người phù hợp).",
    "Kiểm thử còn có thể được yêu cầu để đáp ứng yêu cầu hợp đồng, pháp lý hoặc tuân thủ tiêu chuẩn quy định."
   ],
   "en": [
    "Testing provides a cost-effective means of detecting defects.",
    "Testing provides a means of directly evaluating the quality of a test object at various phases in the SDLC.",
    "Testing provides users with indirect representation on the development project.",
    "Testing may also be required to meet contractual or legal requirements, or to comply with regulatory standards."
   ],
   "tips": [
    "Ghi nhớ chữ “indirectly/directly”: kiểm thử GIÁN TIẾP nâng cao chất lượng (vì việc sửa lỗi là debugging), nhưng TRỰC TIẾP đánh giá chất lượng.",
    "Đáp án sai hay gặp: “testing guarantees the software has no defects” hoặc “testing directly improves quality by fixing defects”."
   ],
   "terms": [
    "quality",
    "testing",
    "defect",
    "debugging",
    "quality control"
   ],
   "ch": 1
  },
  "FL-1.2.2": {
   "lo": "FL-1.2.2",
   "k": "K1",
   "loEn": "Recall the relation between testing and quality assurance",
   "loVi": "Nhớ lại mối quan hệ giữa kiểm thử và đảm bảo chất lượng",
   "sec": "1.2.2",
   "title": "Testing and Quality Assurance (QA)",
   "titleVi": "Kiểm thử và đảm bảo chất lượng (QA)",
   "page": 17,
   "summary": [
    "Kiểm thử (testing) và đảm bảo chất lượng (quality assurance – QA) thường bị dùng lẫn nhau nhưng KHÔNG giống nhau.",
    "Kiểm thử: hướng sản phẩm (product-oriented), mang tính khắc phục (corrective); là hình thức chính của kiểm soát chất lượng (quality control). Các hình thức QC khác: phương pháp hình thức (formal methods – model checking, chứng minh tính đúng), mô phỏng (simulation), làm mẫu (prototyping).",
    "QA: hướng quy trình (process-oriented), mang tính phòng ngừa (preventive), tập trung vào triển khai và cải tiến quy trình, dựa trên giả định: quy trình tốt được làm đúng sẽ tạo ra sản phẩm tốt.",
    "QA áp dụng cho cả quy trình phát triển và quy trình kiểm thử, và là trách nhiệm của MỌI người trong dự án.",
    "Kết quả kiểm thử (test results) được cả testing và QA sử dụng: trong testing để sửa defect; trong QA để phản hồi về mức độ hiệu quả của quy trình phát triển và kiểm thử."
   ],
   "en": [
    "Testing is a product-oriented, corrective approach that focuses on those activities supporting the achievement of appropriate levels of quality.",
    "QA is a process-oriented, preventive approach that focuses on the implementation and improvement of processes.",
    "QA applies to both the development and testing processes, and is the responsibility of everyone on a project.",
    "In testing they are used to fix defects, while in QA they provide feedback on how well the development and test processes are performing."
   ],
   "tips": [
    "Cặp từ khóa cần thuộc: Testing/QC = product-oriented + corrective; QA = process-oriented + preventive. Đề hay đảo ngược hai cặp này.",
    "QA là trách nhiệm của mọi người, không chỉ của đội QA/tester."
   ],
   "terms": [
    "quality assurance",
    "quality control",
    "testing",
    "test result",
    "quality"
   ],
   "ch": 1
  },
  "FL-1.2.3": {
   "lo": "FL-1.2.3",
   "k": "K2",
   "loEn": "Distinguish between root cause, error, defect, and failure",
   "loVi": "Phân biệt nguyên nhân gốc, lỗi do con người, khiếm khuyết và lỗi vận hành",
   "sec": "1.2.3",
   "title": "Errors, Defects, Failures, and Root Causes",
   "titleVi": "Lỗi do con người, khiếm khuyết, lỗi vận hành và nguyên nhân gốc",
   "page": 17,
   "summary": [
    "Chuỗi nhân quả: con người mắc lỗi (error/mistake) → tạo ra khiếm khuyết (defect, còn gọi fault, bug) → có thể dẫn đến lỗi vận hành (failure).",
    "Lý do con người mắc error: áp lực thời gian, độ phức tạp của sản phẩm/quy trình/hạ tầng/tương tác, hoặc đơn giản là mệt mỏi, thiếu đào tạo.",
    "Defect có thể nằm trong tài liệu (đặc tả yêu cầu, test script), mã nguồn, hoặc sản phẩm hỗ trợ (build file). Defect ở sản phẩm sớm trong SDLC nếu không phát hiện thường dẫn đến sản phẩm lỗi ở giai đoạn sau.",
    "Khi đoạn code có defect được thực thi, hệ thống có thể không làm điều nên làm hoặc làm điều không nên làm → failure. Có defect luôn gây failure khi chạy, có defect chỉ gây failure trong điều kiện cụ thể, có defect không bao giờ gây failure.",
    "Failure không chỉ do error và defect: còn có thể do điều kiện môi trường, ví dụ bức xạ hoặc trường điện từ gây defect trong firmware.",
    "Nguyên nhân gốc (root cause) là lý do nền tảng khiến vấn đề xảy ra (vd tình huống dẫn đến error). Root cause được xác định qua phân tích nguyên nhân gốc (root cause analysis), thường làm khi có failure hoặc phát hiện defect; xử lý root cause giúp ngăn ngừa hoặc giảm tần suất các failure/defect tương tự.",
    "Ví dụ: BA chịu áp lực thời gian (root cause) → hiểu sai quy tắc tính lãi (error) → viết sai công thức trong đặc tả/code (defect) → khách hàng nhận sai số tiền khi chạy hệ thống (failure)."
   ],
   "en": [
    "Human beings make errors (mistakes), which produce defects (faults, bugs), which in turn may result in failures.",
    "Some defects will always result in a failure if executed, while others will only result in a failure in specific circumstances, and some may never result in a failure.",
    "Failures can also be caused by environmental conditions, such as when radiation or electromagnetic fields cause defects in firmware.",
    "A root cause is a fundamental reason for the occurrence of a problem (e.g., a situation that leads to an error)."
   ],
   "tips": [
    "Mẹo nhận diện: error = hành động sai của CON NGƯỜI; defect = chỗ sai nằm TRONG sản phẩm (code/tài liệu); failure = hiện tượng sai quan sát được KHI CHẠY; root cause = lý do sâu xa (áp lực, thiếu đào tạo...).",
    "Bẫy: “mọi defect đều gây failure” là SAI; “failure chỉ do defect gây ra” cũng SAI (còn do môi trường)."
   ],
   "terms": [
    "error",
    "defect",
    "failure",
    "root cause",
    "root cause analysis"
   ],
   "ch": 1
  },
  "FL-1.3.1": {
   "lo": "FL-1.3.1",
   "k": "K2",
   "loEn": "Explain the seven testing principles",
   "loVi": "Giải thích bảy nguyên tắc kiểm thử",
   "sec": "1.3",
   "title": "Testing Principles",
   "titleVi": "Các nguyên tắc kiểm thử",
   "page": 17,
   "summary": [
    "1. Kiểm thử cho thấy sự hiện diện, không chứng minh sự vắng mặt của defect (Testing shows the presence, not the absence of defects): kiểm thử giảm xác suất còn defect chưa phát hiện, nhưng dù không tìm thấy defect cũng không chứng minh được phần mềm đúng hoàn toàn.",
    "2. Kiểm thử toàn bộ là không thể (Exhaustive testing is impossible): trừ trường hợp tầm thường, không thể test mọi thứ; thay vào đó dùng kỹ thuật kiểm thử, ưu tiên test case (test case prioritization) và kiểm thử dựa trên rủi ro (risk-based testing) để tập trung nỗ lực.",
    "3. Kiểm thử sớm tiết kiệm thời gian và tiền bạc (Early testing saves time and money): defect loại bỏ sớm sẽ không gây ra defect kéo theo ở các sản phẩm dẫn xuất; chi phí chất lượng giảm. Cần bắt đầu cả kiểm thử tĩnh và động càng sớm càng tốt.",
    "4. Defect tập trung thành cụm (Defects cluster together): một số ít thành phần thường chứa phần lớn defect hoặc gây ra phần lớn failure khi vận hành – minh họa nguyên lý Pareto. Cụm defect dự đoán và thực tế là đầu vào quan trọng cho risk-based testing.",
    "5. Test bị “mòn” (Tests wear out): lặp lại cùng bộ test nhiều lần thì càng kém hiệu quả trong việc tìm defect mới; cần sửa đổi test và dữ liệu test, viết test mới. Tuy nhiên lặp lại test có thể có lợi, vd kiểm thử hồi quy tự động (automated regression testing).",
    "6. Kiểm thử phụ thuộc bối cảnh (Testing is context dependent): không có một cách tiếp cận kiểm thử áp dụng chung cho mọi nơi; mỗi bối cảnh kiểm thử khác nhau.",
    "7. Ngụy biện “không có lỗi” (Absence-of-defects fallacy): kỳ vọng rằng chỉ cần xác minh (verification) là hệ thống sẽ thành công là sai lầm. Test kỹ mọi yêu cầu và sửa hết defect vẫn có thể ra hệ thống không đáp ứng nhu cầu người dùng, không giúp đạt mục tiêu kinh doanh, kém hơn đối thủ. Ngoài verification cần làm cả validation."
   ],
   "en": [
    "Testing can show that defects are present in the test object, but cannot prove that there are no defects.",
    "Rather than attempting to test exhaustively, test techniques, test case prioritization, and risk-based testing should be used to focus test efforts.",
    "A small number of system components usually contain most of the defects discovered or are responsible for most of the operational failures.",
    "If the same tests are repeated many times, they become increasingly ineffective in detecting new defects."
   ],
   "tips": [
    "Đề thường mô tả một tình huống rồi hỏi nguyên tắc nào: “phần mềm đã sửa hết lỗi nhưng khách hàng không dùng” → Absence-of-defects fallacy; “80% lỗi nằm ở 2 module” → Defects cluster together; “bộ test cũ không còn tìm ra lỗi mới” → Tests wear out.",
    "Lưu ý tên v4.0: “Tests wear out” (trước đây gọi là pesticide paradox); “Testing is context dependent” khác với Absence-of-defects fallacy."
   ],
   "terms": [
    "testing",
    "defect",
    "verification",
    "validation",
    "test case",
    "pareto principle"
   ],
   "ch": 1
  },
  "FL-1.4.1": {
   "lo": "FL-1.4.1",
   "k": "K2",
   "loEn": "Explain the different test activities and related tasks",
   "loVi": "Giải thích các hoạt động kiểm thử khác nhau và các công việc liên quan",
   "sec": "1.4.1",
   "title": "Test Activities and Tasks",
   "titleVi": "Các hoạt động và công việc kiểm thử",
   "page": 18,
   "summary": [
    "Quy trình kiểm thử (test process) gồm các nhóm hoạt động chính; tuy có vẻ tuần tự nhưng thường thực hiện lặp (iterative) hoặc song song, và cần điều chỉnh theo hệ thống và dự án.",
    "Lập kế hoạch kiểm thử (test planning): xác định mục tiêu kiểm thử và chọn cách tiếp cận đạt mục tiêu tốt nhất trong các ràng buộc của bối cảnh.",
    "Giám sát và kiểm soát kiểm thử (test monitoring and test control): monitoring = kiểm tra liên tục mọi hoạt động kiểm thử, so sánh tiến độ thực tế với kế hoạch; control = thực hiện các hành động cần thiết để đạt mục tiêu kiểm thử.",
    "Phân tích kiểm thử (test analysis): phân tích cơ sở kiểm thử (test basis) để xác định tính năng có thể test, định nghĩa và ưu tiên điều kiện kiểm thử (test condition) theo rủi ro; đánh giá test basis và test object để tìm defect và đánh giá khả năng kiểm thử (testability). Trả lời câu hỏi “test cái gì?” (what to test).",
    "Thiết kế kiểm thử (test design): chi tiết hóa test condition thành test case và testware khác (vd test charter); xác định coverage item; xác định yêu cầu dữ liệu test, thiết kế môi trường test, xác định hạ tầng và công cụ. Trả lời câu hỏi “test như thế nào?” (how to test).",
    "Triển khai kiểm thử (test implementation): tạo hoặc thu thập testware cần cho thực thi (vd test data); tổ chức test case thành thủ tục kiểm thử (test procedure), gộp thành bộ test (test suite); tạo script thủ công và tự động; sắp xếp test procedure vào lịch thực thi (test execution schedule); xây dựng và kiểm tra môi trường test.",
    "Thực thi kiểm thử (test execution): chạy test theo lịch (test run), thủ công hoặc tự động (kể cả continuous testing, pair testing); so sánh kết quả thực tế với kết quả mong đợi; ghi log kết quả; phân tích bất thường (anomaly) để tìm nguyên nhân khả dĩ và báo cáo dựa trên failure quan sát được.",
    "Hoàn tất kiểm thử (test completion): thường diễn ra ở các mốc dự án (release, kết thúc iteration, hoàn thành test level); tạo change request hoặc product backlog item cho defect chưa xử lý; lưu trữ/bàn giao testware hữu ích; đưa môi trường test về trạng thái thỏa thuận; rút ra bài học kinh nghiệm; lập và truyền đạt báo cáo hoàn tất kiểm thử (test completion report)."
   ],
   "en": [
    "Although many of these activities may appear to follow a logical sequence, they are often implemented iteratively or in parallel.",
    "Test analysis answers the question “what to test?” in terms of measurable coverage criteria.",
    "Test design includes elaborating the test conditions into test cases and other testware (e.g., test charters). Test design answers the question “how to test?”.",
    "Test execution includes running the tests in accordance with the test execution schedule (test runs)."
   ],
   "tips": [
    "Phân biệt: test analysis → test CONDITION (what); test design → test CASE, coverage item, yêu cầu test data/môi trường (how); test implementation → test PROCEDURE, test suite, script, test data thực, lịch thực thi, dựng môi trường.",
    "Bẫy: “thiết kế môi trường test” thuộc test design, còn “xây dựng và kiểm tra môi trường test” thuộc test implementation; “lưu trữ testware, rút bài học” thuộc test completion."
   ],
   "terms": [
    "test process",
    "test planning",
    "test monitoring",
    "test control",
    "test analysis",
    "test design",
    "test implementation",
    "test execution",
    "test completion",
    "test basis",
    "test condition",
    "test case",
    "test procedure",
    "test data",
    "test suite"
   ],
   "ch": 1
  },
  "FL-1.4.2": {
   "lo": "FL-1.4.2",
   "k": "K2",
   "loEn": "Explain the impact of context on the test process",
   "loVi": "Giải thích ảnh hưởng của bối cảnh lên quy trình kiểm thử",
   "sec": "1.4.2",
   "title": "Test Process in Context",
   "titleVi": "Quy trình kiểm thử trong bối cảnh",
   "page": 19,
   "summary": [
    "Kiểm thử không diễn ra biệt lập: là một phần của quy trình phát triển trong tổ chức, được các bên liên quan tài trợ, mục tiêu cuối cùng là giúp đáp ứng nhu cầu kinh doanh của họ.",
    "8 nhóm yếu tố bối cảnh ảnh hưởng cách kiểm thử: (1) Các bên liên quan – stakeholders (nhu cầu, kỳ vọng, yêu cầu, mức độ sẵn sàng hợp tác); (2) Thành viên nhóm (kỹ năng, kiến thức, kinh nghiệm, sự sẵn có, nhu cầu đào tạo); (3) Lĩnh vực kinh doanh (mức độ quan trọng của test object, rủi ro, nhu cầu thị trường, quy định pháp lý cụ thể); (4) Yếu tố kỹ thuật (loại phần mềm, kiến trúc, công nghệ); (5) Ràng buộc dự án (phạm vi, thời gian, ngân sách, nguồn lực); (6) Yếu tố tổ chức (cơ cấu, chính sách, thực tiễn hiện có); (7) Vòng đời phát triển phần mềm – SDLC (thực hành kỹ thuật, phương pháp phát triển); (8) Công cụ (sẵn có, dễ dùng, tuân thủ).",
    "Các yếu tố này tác động đến: chiến lược kiểm thử (test strategy), kỹ thuật kiểm thử được dùng, mức độ tự động hóa, mức độ bao phủ yêu cầu, mức chi tiết của testware, cách báo cáo kiểm thử..."
   ],
   "en": [
    "Testing is not performed in isolation. Test activities are an integral part of the development processes carried out within an organization.",
    "Testing is also funded by stakeholders and its final goal is to help fulfill the stakeholders’ business needs.",
    "These factors will have an impact on many test-related issues, including: test strategy, test techniques used, degree of test automation, required level of coverage, level of detail of testware, test reporting, etc."
   ],
   "tips": [
    "Câu hỏi K2 thường cho tình huống (vd phần mềm y tế phải tuân thủ quy định nghiêm ngặt) và hỏi yếu tố bối cảnh nào ảnh hưởng → Business domain. Ngân sách/thời gian → Project constraints; kỹ năng nhóm → Team members.",
    "Liên hệ nguyên tắc 6 “Testing is context dependent”."
   ],
   "terms": [
    "test process",
    "coverage",
    "testware"
   ],
   "ch": 1
  },
  "FL-1.4.3": {
   "lo": "FL-1.4.3",
   "k": "K2",
   "loEn": "Differentiate the testware that supports the test activities",
   "loVi": "Phân biệt các sản phẩm kiểm thử (testware) hỗ trợ cho các hoạt động kiểm thử",
   "sec": "1.4.3",
   "title": "Testware",
   "titleVi": "Sản phẩm kiểm thử (testware)",
   "page": 20,
   "summary": [
    "Testware là các sản phẩm đầu ra (output work products) của các hoạt động kiểm thử. Tổ chức khác nhau tạo, đặt tên, quản lý testware khác nhau; quản lý cấu hình (configuration management) đảm bảo tính nhất quán và toàn vẹn.",
    "Test planning: kế hoạch kiểm thử (test plan), lịch kiểm thử (test schedule), sổ đăng ký rủi ro (risk register – danh sách rủi ro kèm khả năng xảy ra, tác động, thông tin giảm thiểu), tiêu chí đầu vào và đầu ra (entry/exit criteria). Lịch, risk register, entry/exit criteria thường là một phần của test plan.",
    "Test monitoring và test control: báo cáo tiến độ kiểm thử (test progress report), tài liệu về chỉ thị kiểm soát (control directives), thông tin về rủi ro.",
    "Test analysis: test condition (đã ưu tiên, vd acceptance criteria) và báo cáo defect về defect trong test basis (nếu không sửa trực tiếp).",
    "Test design: test case (đã ưu tiên), test charter, coverage item, yêu cầu dữ liệu test (test data requirements), yêu cầu môi trường test.",
    "Test implementation: test procedure, script test thủ công và tự động, test suite, test data, lịch thực thi (test execution schedule), các thành phần môi trường test (stub, driver, simulator, service virtualization).",
    "Test execution: nhật ký kiểm thử (test log), báo cáo defect (defect report).",
    "Test completion: báo cáo hoàn tất kiểm thử (test completion report), các hành động cải tiến cho dự án/iteration sau, bài học kinh nghiệm, change request (vd product backlog item)."
   ],
   "en": [
    "Testware is created as output work products from the test activities.",
    "Proper configuration management ensures consistency and integrity of work products.",
    "Risk register is a list of risks together with risk likelihood, risk impact and information about risk mitigation.",
    "Examples of test environment items include: stubs, drivers, simulators, and service virtualizations."
   ],
   "tips": [
    "Bẫy kinh điển: test data REQUIREMENTS là sản phẩm của test design, còn test DATA thực tế là sản phẩm của test implementation; tương tự “yêu cầu môi trường test” (design) vs “test environment items như stub, driver” (implementation).",
    "Defect report xuất hiện ở test analysis (defect trong test basis) và test execution (defect phát hiện khi chạy test)."
   ],
   "terms": [
    "testware",
    "test planning",
    "test monitoring",
    "test control",
    "test analysis",
    "test design",
    "test implementation",
    "test execution",
    "test completion",
    "test condition",
    "test case",
    "test procedure",
    "test data",
    "test suite",
    "risk register"
   ],
   "ch": 1
  },
  "FL-1.4.4": {
   "lo": "FL-1.4.4",
   "k": "K2",
   "loEn": "Explain the value of maintaining traceability",
   "loVi": "Giải thích giá trị của việc duy trì truy vết",
   "sec": "1.4.4",
   "title": "Traceability between the Test Basis and Testware",
   "titleVi": "Truy vết giữa cơ sở kiểm thử và sản phẩm kiểm thử",
   "page": 20,
   "summary": [
    "Để giám sát và kiểm soát kiểm thử hiệu quả, cần thiết lập và duy trì truy vết (traceability) suốt quy trình giữa: các phần tử của cơ sở kiểm thử (test basis), testware liên quan (test condition, rủi ro, test case), kết quả kiểm thử (test result) và defect.",
    "Truy vết chính xác hỗ trợ đánh giá độ bao phủ (coverage); tiêu chí bao phủ đo lường được có thể đóng vai trò chỉ số hiệu suất chính (KPI) cho thấy mức độ đạt mục tiêu kiểm thử.",
    "Ví dụ: truy vết test case tới yêu cầu → xác minh yêu cầu đã được test case bao phủ; truy vết kết quả test tới rủi ro → đánh giá mức rủi ro còn lại (residual risk) của test object.",
    "Lợi ích khác: xác định tác động của thay đổi (impact of changes), thuận lợi cho kiểm toán (audit), giúp đáp ứng tiêu chí quản trị CNTT (IT governance).",
    "Truy vết tốt giúp báo cáo tiến độ và báo cáo hoàn tất kiểm thử dễ hiểu hơn (kèm trạng thái của các phần tử test basis), giúp truyền đạt khía cạnh kỹ thuật cho các bên liên quan, và cung cấp thông tin đánh giá chất lượng sản phẩm, năng lực quy trình và tiến độ dự án so với mục tiêu kinh doanh."
   ],
   "en": [
    "To implement effective test monitoring and test control, it is important to establish and maintain traceability throughout the test process between the test basis elements, testware associated with these elements, test results, and defects.",
    "Traceability of test cases to requirements can verify that the requirements are covered by test cases.",
    "Traceability of test results to risks can be used to evaluate the level of residual risk in a test object.",
    "Good traceability makes it possible to determine the impact of changes, facilitates audits, and helps meet IT governance criteria."
   ],
   "tips": [
    "Đề hay hỏi “lợi ích nào KHÔNG phải của traceability” – đáp án sai thường là kiểu “tự động sinh test case” hoặc “loại bỏ nhu cầu kiểm thử hồi quy”.",
    "Ghép cặp cần nhớ: test case ↔ requirement → coverage yêu cầu; test result ↔ risk → residual risk."
   ],
   "terms": [
    "traceability",
    "test basis",
    "testware",
    "coverage",
    "test result",
    "test monitoring",
    "test control"
   ],
   "ch": 1
  },
  "FL-1.4.5": {
   "lo": "FL-1.4.5",
   "k": "K2",
   "loEn": "Compare the different roles in testing",
   "loVi": "So sánh các vai trò khác nhau trong kiểm thử",
   "sec": "1.4.5",
   "title": "Roles in Testing",
   "titleVi": "Các vai trò trong kiểm thử",
   "page": 21,
   "summary": [
    "Syllabus đề cập hai vai trò chính: vai trò quản lý kiểm thử (test management role) và vai trò kiểm thử (testing role). Nhiệm vụ của mỗi vai trò phụ thuộc bối cảnh dự án/sản phẩm, kỹ năng của người đảm nhận và tổ chức.",
    "Test management role: chịu trách nhiệm tổng thể về quy trình kiểm thử, đội kiểm thử và lãnh đạo các hoạt động kiểm thử; tập trung chủ yếu vào test planning, test monitoring, test control và test completion.",
    "Cách thực hiện vai trò quản lý thay đổi theo bối cảnh: vd trong Agile, một số nhiệm vụ quản lý kiểm thử do Agile team đảm nhận; nhiệm vụ trải rộng nhiều đội hoặc cả tổ chức có thể do test manager bên ngoài đội phát triển thực hiện.",
    "Testing role: chịu trách nhiệm tổng thể về khía cạnh kỹ thuật (engineering) của kiểm thử; tập trung chủ yếu vào test analysis, test design, test implementation và test execution.",
    "Những người khác nhau có thể đảm nhận các vai trò này vào các thời điểm khác nhau (vd vai trò quản lý có thể do team leader, test manager, development manager đảm nhận); một người cũng có thể kiêm cả hai vai trò cùng lúc."
   ],
   "en": [
    "The test management role takes overall responsibility for the test process, test team and leadership of the test activities.",
    "The test management role is mainly focused on the activities of test planning, test monitoring, test control and test completion.",
    "The testing role takes overall responsibility for the engineering (technical) aspect of testing.",
    "It is also possible for one person to take on the roles of testing and test management at the same time."
   ],
   "tips": [
    "Nhớ 4–4: quản lý = planning, monitoring, control, completion; kiểm thử = analysis, design, implementation, execution.",
    "Bẫy: “vai trò” không đồng nghĩa “chức danh” – một developer manager vẫn có thể giữ test management role; một người có thể giữ cả hai vai trò."
   ],
   "terms": [
    "test management role",
    "testing role",
    "test planning",
    "test monitoring",
    "test control",
    "test completion",
    "test analysis",
    "test design",
    "test implementation",
    "test execution"
   ],
   "ch": 1
  },
  "FL-1.5.1": {
   "lo": "FL-1.5.1",
   "k": "K2",
   "loEn": "Give examples of the generic skills required for testing",
   "loVi": "Nêu ví dụ về các kỹ năng chung cần thiết cho kiểm thử",
   "sec": "1.5.1",
   "title": "Generic Skills Required for Testing",
   "titleVi": "Các kỹ năng chung cần cho kiểm thử",
   "page": 21,
   "summary": [
    "Kỹ năng (skill) là khả năng làm tốt một việc, đến từ kiến thức, thực hành và năng khiếu. Tester giỏi cần là thành viên nhóm hiệu quả và có thể kiểm thử ở các mức độc lập khác nhau.",
    "Các kỹ năng chung đặc biệt quan trọng với tester: (1) Kiến thức kiểm thử – để tăng hiệu quả (effectiveness) kiểm thử, vd dùng kỹ thuật kiểm thử; (2) Sự kỹ lưỡng, cẩn thận, tò mò, chú ý chi tiết, làm việc có phương pháp – để tìm defect, nhất là defect khó tìm; (3) Kỹ năng giao tiếp tốt, lắng nghe chủ động, tinh thần đồng đội – để tương tác với các bên liên quan, truyền đạt, báo cáo và thảo luận defect; (4) Tư duy phân tích, tư duy phản biện, sáng tạo – để tăng hiệu quả kiểm thử; (5) Kiến thức kỹ thuật – để tăng năng suất (efficiency) kiểm thử, vd dùng công cụ phù hợp; (6) Kiến thức nghiệp vụ (domain knowledge) – để hiểu và giao tiếp với người dùng cuối/đại diện kinh doanh.",
    "Tester thường là người mang tin xấu, và con người có xu hướng đổ lỗi cho người mang tin xấu → kỹ năng giao tiếp là cực kỳ quan trọng.",
    "Kết quả kiểm thử có thể bị xem là chỉ trích sản phẩm và tác giả; thiên kiến xác nhận (confirmation bias) khiến người ta khó chấp nhận thông tin trái với niềm tin hiện có; có người xem kiểm thử là hoạt động phá hoại. Vì vậy thông tin về defect và failure cần được truyền đạt một cách xây dựng (constructive)."
   ],
   "en": [
    "Skill is the ability to do something well that comes from one’s knowledge, practice and aptitude.",
    "Testers are often the bearers of bad news. It is a common human trait to blame the bearer of bad news.",
    "Confirmation bias can make it difficult to accept information that disagrees with currently held beliefs.",
    "Information about defects and failures should be communicated in a constructive way."
   ],
   "tips": [
    "Lưu ý chữ “effectiveness” (testing knowledge, analytical thinking) vs “efficiency” (technical knowledge, tools) – đề có thể hỏi kỹ năng nào giúp tăng năng suất (efficiency) → technical knowledge.",
    "Domain knowledge gắn với giao tiếp với end user/business; communication skills gắn với báo cáo defect một cách xây dựng."
   ],
   "terms": [
    "confirmation bias",
    "defect",
    "failure"
   ],
   "ch": 1
  },
  "FL-1.5.2": {
   "lo": "FL-1.5.2",
   "k": "K1",
   "loEn": "Recall the advantages of the whole team approach",
   "loVi": "Nhớ lại các ưu điểm của cách tiếp cận cả nhóm",
   "sec": "1.5.2",
   "title": "Whole Team Approach",
   "titleVi": "Cách tiếp cận cả nhóm",
   "page": 22,
   "summary": [
    "Cách tiếp cận cả nhóm (whole team approach) là thực hành xuất phát từ Extreme Programming (XP), dựa trên kỹ năng làm việc hiệu quả trong nhóm và đóng góp tích cực cho mục tiêu chung.",
    "Bất kỳ thành viên nào có đủ kiến thức và kỹ năng đều có thể làm bất kỳ việc gì, và MỌI người đều chịu trách nhiệm về chất lượng.",
    "Các thành viên làm chung không gian làm việc (vật lý hoặc ảo), vì làm việc cùng chỗ (co-location) thúc đẩy giao tiếp và tương tác.",
    "Ưu điểm: cải thiện động lực nhóm (team dynamics), tăng cường giao tiếp và hợp tác trong nhóm, tạo hiệu ứng cộng hưởng (synergy) nhờ tận dụng các bộ kỹ năng khác nhau vì lợi ích dự án.",
    "Tester làm việc chặt chẽ với các thành viên khác: hợp tác với đại diện kinh doanh để tạo acceptance test phù hợp; làm việc với developer để thống nhất chiến lược kiểm thử và cách tự động hóa → chuyển giao kiến thức kiểm thử và ảnh hưởng đến việc phát triển sản phẩm.",
    "Tùy bối cảnh, whole team approach không phải lúc nào cũng phù hợp: vd hệ thống an toàn trọng yếu (safety-critical) có thể cần mức độc lập kiểm thử cao."
   ],
   "en": [
    "In the whole team approach any team member with the necessary knowledge and skills can perform any task, and everyone is responsible for quality.",
    "The whole team approach improves team dynamics, enhances communication and collaboration within the team, and creates synergy by allowing the various skill sets within the team to be leveraged for the benefit of the project.",
    "In some situations, such as safety-critical, a high level of test independence may be needed."
   ],
   "tips": [
    "Đáp án đúng thường chứa “everyone is responsible for quality”, “improves team dynamics/communication/collaboration”, “synergy”. Đáp án sai kiểu “tester chịu trách nhiệm duy nhất về chất lượng” hoặc “loại bỏ nhu cầu tester”.",
    "Nguồn gốc là Extreme Programming (XP) – đề có thể hỏi."
   ],
   "terms": [
    "whole team approach",
    "quality"
   ],
   "ch": 1
  },
  "FL-1.5.3": {
   "lo": "FL-1.5.3",
   "k": "K2",
   "loEn": "Distinguish the benefits and drawbacks of independence of testing",
   "loVi": "Phân biệt lợi ích và hạn chế của tính độc lập trong kiểm thử",
   "sec": "1.5.3",
   "title": "Independence of Testing",
   "titleVi": "Tính độc lập của kiểm thử",
   "page": 22,
   "summary": [
    "Một mức độ độc lập nhất định giúp tester tìm defect hiệu quả hơn do khác biệt giữa thiên kiến nhận thức (cognitive bias) của tác giả và của tester. Tuy nhiên độc lập không thay thế được sự am hiểu (familiarity): developer vẫn tìm được nhiều defect trong code của chính mình một cách hiệu quả.",
    "4 mức độc lập: (1) tác giả tự test – không độc lập (no independence); (2) đồng nghiệp cùng đội của tác giả – độc lập một phần (some independence); (3) tester ngoài đội nhưng trong tổ chức – độc lập cao (high independence); (4) tester ngoài tổ chức – độc lập rất cao (very high independence).",
    "Với đa số dự án, tốt nhất là kiểm thử ở nhiều mức độc lập: developer làm component testing và component integration testing, đội test làm system testing và system integration testing, đại diện kinh doanh làm acceptance testing.",
    "Lợi ích: tester độc lập dễ nhận ra các loại failure và defect khác với developer nhờ khác nền tảng, góc nhìn kỹ thuật và thiên kiến; có thể xác minh, thách thức hoặc bác bỏ các giả định của các bên liên quan khi đặc tả và triển khai hệ thống.",
    "Hạn chế: tester độc lập có thể bị cô lập khỏi đội phát triển → thiếu hợp tác, vấn đề giao tiếp, hoặc quan hệ đối đầu với đội dev; developer có thể mất ý thức trách nhiệm về chất lượng; tester độc lập có thể bị xem là nút thắt cổ chai (bottleneck) hoặc bị đổ lỗi khi phát hành chậm."
   ],
   "en": [
    "A certain degree of independence makes the tester more effective at finding defects due to differences between the author’s and the tester’s cognitive biases.",
    "Independence is not, however, a replacement for familiarity, e.g., developers can efficiently find many defects in their own code.",
    "An independent tester can verify, challenge, or disprove assumptions made by stakeholders during specification and implementation of the system.",
    "Developers may lose a sense of responsibility for quality. Independent testers may be seen as a bottleneck or be blamed for delays in release."
   ],
   "tips": [
    "Đề K2 thường trộn lợi ích và hạn chế: “developers may lose a sense of responsibility for quality” là HẠN CHẾ; “recognize different kinds of failures” và “challenge assumptions” là LỢI ÍCH.",
    "Nhớ thứ tự 4 mức độc lập: author → peer cùng đội → tester khác đội trong tổ chức → tester ngoài tổ chức."
   ],
   "terms": [
    "independence of testing",
    "defect",
    "failure",
    "quality"
   ],
   "ch": 1
  },
  "FL-2.1.1": {
   "lo": "FL-2.1.1",
   "k": "K2",
   "loEn": "Explain the impact of the chosen software development lifecycle on testing",
   "loVi": "Giải thích ảnh hưởng của vòng đời phát triển phần mềm được chọn đối với kiểm thử",
   "sec": "2.1.1",
   "title": "Impact of the Software Development Lifecycle on Testing",
   "titleVi": "Ảnh hưởng của vòng đời phát triển phần mềm đến kiểm thử",
   "page": 25,
   "summary": [
    "Mô hình SDLC (software development lifecycle model) là biểu diễn trừu tượng, mức cao của quy trình phát triển; ví dụ: tuần tự (sequential: waterfall, V-model), lặp (iterative: spiral, prototyping), tăng dần (incremental: Unified Process). Các phương pháp/thực hành Agile chi tiết hơn: ATDD, BDD, DDD, XP, FDD, Kanban, Lean IT, Scrum, TDD.",
    "Kiểm thử phải được điều chỉnh theo SDLC. Việc chọn SDLC ảnh hưởng đến 5 điều: (1) phạm vi và thời điểm các hoạt động kiểm thử (vd cấp độ kiểm thử, loại kiểm thử); (2) mức chi tiết của tài liệu kiểm thử; (3) lựa chọn kỹ thuật kiểm thử và cách tiếp cận kiểm thử (test approach); (4) mức độ tự động hóa kiểm thử; (5) vai trò và trách nhiệm của tester.",
    "Mô hình tuần tự: giai đoạn đầu tester tham gia review yêu cầu, phân tích kiểm thử (test analysis) và thiết kế kiểm thử (test design); code thực thi thường có ở giai đoạn sau nên kiểm thử động (dynamic testing) thường KHÔNG thể làm sớm.",
    "Mô hình lặp và tăng dần: mỗi vòng lặp giao một prototype hoặc phần tăng sản phẩm chạy được, nên trong mỗi vòng có thể làm cả kiểm thử tĩnh (static) và động (dynamic) ở mọi cấp độ kiểm thử; giao thường xuyên đòi hỏi phản hồi nhanh và kiểm thử hồi quy (regression testing) rộng.",
    "Agile giả định thay đổi có thể xảy ra suốt dự án, nên ưu tiên tài liệu sản phẩm gọn nhẹ và tự động hóa kiểm thử rộng để hồi quy dễ hơn; phần lớn kiểm thử thủ công dùng kỹ thuật dựa trên kinh nghiệm (experience-based), không cần phân tích và thiết kế trước nhiều."
   ],
   "en": [
    "Testing must be adapted to the SDLC to succeed.",
    "In sequential development models, in the initial phases testers typically participate in requirement reviews, test analysis, and test design.",
    "Frequent delivery of increments requires fast feedback and extensive regression testing.",
    "Lightweight work product documentation and extensive test automation to make regression testing easier are favored in agile projects."
   ],
   "tips": [
    "Câu hỏi kiểu 'trong mô hình tuần tự, tester làm gì ở giai đoạn đầu?' → review yêu cầu, test analysis, test design; KHÔNG phải dynamic testing (chưa có code).",
    "Agile → tài liệu nhẹ, nhiều automation, kiểm thử thủ công chủ yếu dựa trên kinh nghiệm. Đáp án nói Agile cần tài liệu kiểm thử chi tiết, đầy đủ là sai."
   ],
   "terms": [
    "software development lifecycle",
    "test level",
    "test type",
    "regression testing"
   ],
   "ch": 2
  },
  "FL-2.1.2": {
   "lo": "FL-2.1.2",
   "k": "K1",
   "loEn": "Recall good testing practices that apply to all software development lifecycles",
   "loVi": "Nhắc lại các thực hành kiểm thử tốt áp dụng cho mọi vòng đời phát triển phần mềm",
   "sec": "2.1.2",
   "title": "Software Development Lifecycle and Good Testing Practices",
   "titleVi": "Vòng đời phát triển phần mềm và các thực hành kiểm thử tốt",
   "page": 25,
   "summary": [
    "Có 4 thực hành kiểm thử tốt, không phụ thuộc mô hình SDLC:",
    "(1) Với mỗi hoạt động phát triển đều có một hoạt động kiểm thử tương ứng, để mọi hoạt động phát triển đều được kiểm soát chất lượng.",
    "(2) Các cấp độ kiểm thử (test level) khác nhau có mục tiêu kiểm thử riêng và khác nhau, giúp kiểm thử đủ toàn diện mà tránh dư thừa/trùng lặp.",
    "(3) Phân tích và thiết kế kiểm thử cho một cấp độ bắt đầu ngay trong giai đoạn phát triển tương ứng của SDLC, để tuân theo nguyên tắc kiểm thử sớm (early testing).",
    "(4) Tester tham gia review sản phẩm công việc (work product) ngay khi có bản nháp, để kiểm thử và phát hiện lỗi sớm hơn, hỗ trợ shift left."
   ],
   "en": [
    "For every software development activity, there is a corresponding test activity, so that all development activities are subject to quality control.",
    "Different test levels have specific and different test objectives, which allows for testing to be appropriately comprehensive while avoiding redundancy.",
    "Testers are involved in reviewing work products as soon as drafts of these work products are available."
   ],
   "tips": [
    "Bẫy: 'tester chờ tài liệu được phê duyệt/hoàn chỉnh rồi mới review' là SAI; đúng là review ngay khi có bản nháp (drafts).",
    "Bẫy: 'test design bắt đầu sau khi code xong' là SAI; đúng là bắt đầu trong giai đoạn phát triển tương ứng. Mục tiêu các cấp độ là KHÁC nhau (tránh redundancy), không phải giống nhau."
   ],
   "terms": [
    "test level",
    "shift left"
   ],
   "ch": 2
  },
  "FL-2.1.3": {
   "lo": "FL-2.1.3",
   "k": "K1",
   "loEn": "Recall the examples of test-first approaches to development",
   "loVi": "Nhắc lại các ví dụ về cách tiếp cận phát triển viết kiểm thử trước (test-first)",
   "sec": "2.1.3",
   "title": "Testing as a Driver for Software Development",
   "titleVi": "Kiểm thử là động lực dẫn dắt phát triển phần mềm",
   "page": 26,
   "summary": [
    "TDD, ATDD và BDD là các cách tiếp cận tương tự nhau: kiểm thử được định nghĩa để dẫn dắt việc phát triển. Cả ba thực hiện nguyên tắc kiểm thử sớm (early testing), theo shift left (vì test được định nghĩa trước khi viết code) và hỗ trợ mô hình phát triển lặp (iterative).",
    "Phát triển hướng kiểm thử (test-driven development – TDD): dẫn dắt việc code bằng test case (thay vì thiết kế phần mềm chi tiết); viết test trước, sau đó viết code để thỏa test, rồi refactor cả test và code.",
    "Phát triển hướng kiểm thử chấp nhận (acceptance test-driven development – ATDD): suy ra test từ tiêu chí chấp nhận (acceptance criteria) như một phần của quá trình thiết kế hệ thống; test được viết trước khi phần ứng dụng tương ứng được phát triển.",
    "Phát triển hướng hành vi (behavior-driven development – BDD): diễn đạt hành vi mong muốn của ứng dụng bằng test case viết ở dạng ngôn ngữ tự nhiên đơn giản, dễ hiểu với các bên liên quan, thường theo định dạng Given/When/Then; sau đó test case được tự động chuyển thành test thực thi được.",
    "Với cả ba cách tiếp cận, test có thể được giữ lại thành test tự động để đảm bảo chất lượng code khi chỉnh sửa / refactor về sau."
   ],
   "en": [
    "TDD, ATDD and BDD are similar development approaches, where tests are defined as a means of directing development.",
    "Tests are written first, then the code is written to satisfy the tests, and then the tests and code are refactored.",
    "BDD expresses the desired behavior of an application with test cases written in a simple form of natural language, usually using the Given/When/Then format."
   ],
   "tips": [
    "Nhận diện nhanh: Given/When/Then → BDD; từ acceptance criteria → ATDD; viết test – code – refactor ở mức code → TDD.",
    "Cả ba đều là 'test-first' và đều thể hiện early testing / shift left; đáp án nói chúng chỉ dùng cho mô hình tuần tự là sai (chúng hỗ trợ mô hình lặp)."
   ],
   "terms": [
    "test-driven development",
    "behavior-driven development",
    "shift left"
   ],
   "ch": 2
  },
  "FL-2.1.4": {
   "lo": "FL-2.1.4",
   "k": "K2",
   "loEn": "Summarize how DevOps might have an impact on testing",
   "loVi": "Tóm tắt DevOps có thể tác động đến kiểm thử như thế nào",
   "sec": "2.1.4",
   "title": "DevOps and Testing",
   "titleVi": "DevOps và kiểm thử",
   "page": 26,
   "summary": [
    "DevOps là cách tiếp cận tổ chức nhằm tạo sức mạnh tổng hợp bằng cách cho phát triển (bao gồm kiểm thử) và vận hành (operations) cùng làm việc vì mục tiêu chung; đòi hỏi thay đổi văn hóa, coi trọng ngang nhau các chức năng. DevOps thúc đẩy tự chủ của nhóm, phản hồi nhanh, chuỗi công cụ tích hợp, và thực hành CI (continuous integration) / CD (continuous delivery), để build, test, release code chất lượng nhanh hơn qua DevOps delivery pipeline.",
    "Lợi ích cho kiểm thử (6 ý): (1) phản hồi nhanh về chất lượng code và việc thay đổi có ảnh hưởng xấu đến code hiện có không; (2) CI thúc đẩy shift left bằng cách khuyến khích developer nộp code chất lượng kèm component test và phân tích tĩnh (static analysis); (3) quy trình tự động như CI/CD giúp thiết lập môi trường kiểm thử ổn định; (4) tăng khả năng quan sát các đặc tính chất lượng phi chức năng (vd hiệu năng, độ tin cậy); (5) tự động hóa qua delivery pipeline giảm nhu cầu kiểm thử thủ công lặp lại; (6) rủi ro hồi quy được giảm thiểu nhờ quy mô và phạm vi của test hồi quy tự động.",
    "Rủi ro và thách thức (3 ý): (1) phải định nghĩa và thiết lập DevOps delivery pipeline; (2) phải đưa vào và bảo trì công cụ CI/CD; (3) tự động hóa kiểm thử cần thêm nguồn lực, có thể khó thiết lập và duy trì.",
    "Dù DevOps có mức tự động hóa cao, kiểm thử thủ công – nhất là từ góc nhìn người dùng – vẫn cần thiết."
   ],
   "en": [
    "DevOps is an organizational approach aiming to create synergy by getting development (including testing) and operations to work together to achieve a set of common goals.",
    "CI promotes shift left in testing by encouraging developers to submit high quality code accompanied by component tests and static analysis.",
    "Although DevOps comes with a high level of automated testing, manual testing – especially from the user's perspective – will still be needed."
   ],
   "tips": [
    "Bẫy: 'DevOps loại bỏ hoàn toàn kiểm thử thủ công' là SAI. Phân biệt lợi ích (phản hồi nhanh, môi trường ổn định, giảm rủi ro hồi quy...) với rủi ro (phải dựng pipeline, duy trì công cụ CI/CD, automation tốn nguồn lực).",
    "Lưu ý chữ 'giảm' (reduces) nhu cầu kiểm thử thủ công lặp lại chứ không phải 'loại bỏ'; rủi ro hồi quy được 'giảm thiểu' (minimized) chứ không phải 'triệt tiêu'."
   ],
   "terms": [
    "devops",
    "continuous integration",
    "continuous delivery",
    "shift left",
    "regression testing"
   ],
   "ch": 2
  },
  "FL-2.1.5": {
   "lo": "FL-2.1.5",
   "k": "K2",
   "loEn": "Explain shift left",
   "loVi": "Giải thích shift left (dịch chuyển kiểm thử sang trái)",
   "sec": "2.1.5",
   "title": "Shift Left",
   "titleVi": "Dịch chuyển sang trái (shift left)",
   "page": 27,
   "summary": [
    "Nguyên tắc kiểm thử sớm (early testing) đôi khi được gọi là shift left: kiểm thử được thực hiện sớm hơn trong SDLC (không chờ code được viết xong hay các thành phần được tích hợp), nhưng KHÔNG có nghĩa là bỏ qua kiểm thử ở giai đoạn sau.",
    "5 thực hành tốt để đạt shift left: (1) review đặc tả (specification) dưới góc nhìn tester – thường tìm ra lỗi tiềm ẩn như mơ hồ, thiếu sót, mâu thuẫn; (2) viết test case trước khi viết code và cho code chạy trong test harness trong quá trình viết code; (3) dùng CI, và tốt hơn nữa là CD, vì có phản hồi nhanh và component test tự động đi kèm mã nguồn khi nộp lên kho mã; (4) hoàn thành phân tích tĩnh (static analysis) mã nguồn trước kiểm thử động, hoặc như một phần của quy trình tự động; (5) thực hiện kiểm thử phi chức năng bắt đầu từ cấp độ component test khi có thể.",
    "Shift left có thể tốn thêm đào tạo, công sức và/hoặc chi phí ở giai đoạn đầu, nhưng được kỳ vọng sẽ tiết kiệm công sức/chi phí về sau.",
    "Để shift left thành công, các bên liên quan (stakeholders) cần được thuyết phục và ủng hộ khái niệm này."
   ],
   "en": [
    "Shift left basically suggests that testing should be done earlier, but it does not mean that testing later in the SDLC should be neglected.",
    "Shift left might result in extra training, effort and/or costs earlier in the process but is expected to save efforts and/or costs later in the process.",
    "For shift left it is important that stakeholders are convinced and bought into this concept."
   ],
   "tips": [
    "Bẫy: 'shift left giảm chi phí ngay từ đầu' hoặc 'shift left thay thế kiểm thử giai đoạn sau' đều SAI. Đúng: tốn thêm lúc đầu, tiết kiệm về sau; vẫn giữ kiểm thử muộn.",
    "Câu hỏi 'hoạt động nào là ví dụ shift left?' → review đặc tả, viết test trước code, CI/CD, static analysis trước dynamic test, test phi chức năng từ cấp component."
   ],
   "terms": [
    "shift left",
    "test harness",
    "continuous integration",
    "continuous delivery",
    "non-functional testing",
    "component testing"
   ],
   "ch": 2
  },
  "FL-2.1.6": {
   "lo": "FL-2.1.6",
   "k": "K2",
   "loEn": "Explain how retrospectives can be used as a mechanism for process improvement",
   "loVi": "Giải thích cách các buổi retrospective được dùng làm cơ chế cải tiến quy trình",
   "sec": "2.1.6",
   "title": "Retrospectives and Process Improvement",
   "titleVi": "Retrospective (họp nhìn lại) và cải tiến quy trình",
   "page": 28,
   "summary": [
    "Retrospective thường được tổ chức vào cuối dự án hoặc cuối vòng lặp (iteration), tại mốc phát hành (release milestone), hoặc khi cần. Thời điểm và cách tổ chức phụ thuộc mô hình SDLC đang theo.",
    "Người tham gia không chỉ là tester mà còn developer, kiến trúc sư, product owner, business analyst... Họ thảo luận 3 câu hỏi: (1) Điều gì thành công và nên giữ lại? (2) Điều gì chưa thành công và có thể cải thiện? (3) Làm sao áp dụng cải tiến và duy trì thành công trong tương lai?",
    "Kết quả cần được ghi lại và thường là một phần của báo cáo hoàn thành kiểm thử (test completion report).",
    "Retrospective rất quan trọng để cải tiến liên tục (continuous improvement); cần theo dõi (follow up) việc thực hiện các cải tiến được đề xuất.",
    "5 lợi ích điển hình cho kiểm thử: (1) tăng hiệu lực/hiệu suất kiểm thử (effectiveness/efficiency); (2) tăng chất lượng testware (vd cùng review quy trình kiểm thử); (3) gắn kết nhóm và học hỏi; (4) cải thiện chất lượng cơ sở kiểm thử (test basis) – vd thiếu sót trong yêu cầu được xử lý; (5) hợp tác tốt hơn giữa phát triển và kiểm thử."
   ],
   "en": [
    "Retrospectives are often held at the end of a project or an iteration, at a release milestone, or can be held when needed.",
    "The results should be recorded and are normally part of the test completion report.",
    "Retrospectives are critical for the successful implementation of continuous improvement, and it is important that any recommended improvements are followed up."
   ],
   "tips": [
    "Bẫy: retrospective KHÔNG chỉ dành cho tester, và KHÔNG nhằm tìm người có lỗi; mục đích là cải tiến quy trình.",
    "Kết quả retrospective nằm trong test completion report (không phải test progress report hay test plan). Câu hỏi 'lợi ích nào của retrospective cho testing' → chọn ý cải thiện test basis, testware, hiệu quả, hợp tác dev-test, gắn kết nhóm."
   ],
   "terms": [
    "retrospective"
   ],
   "ch": 2
  },
  "FL-2.2.1": {
   "lo": "FL-2.2.1",
   "k": "K2",
   "loEn": "Distinguish the different test levels",
   "loVi": "Phân biệt các cấp độ kiểm thử khác nhau",
   "sec": "2.2.1",
   "title": "Test Levels",
   "titleVi": "Các cấp độ kiểm thử",
   "page": 28,
   "summary": [
    "Cấp độ kiểm thử (test level) là nhóm hoạt động kiểm thử được tổ chức và quản lý cùng nhau; mỗi cấp độ là một thể hiện (instance) của quy trình kiểm thử, gắn với phần mềm ở một giai đoạn phát triển. Trong mô hình tuần tự, tiêu chí kết thúc (exit criteria) của cấp này thường là một phần tiêu chí bắt đầu (entry criteria) của cấp sau; trong mô hình lặp có thể không như vậy; các cấp độ có thể chồng lấn thời gian.",
    "Kiểm thử thành phần (component testing, còn gọi unit testing): kiểm thử thành phần một cách cô lập; thường cần hỗ trợ như test harness hoặc unit test framework; thường do developer làm trong môi trường phát triển.",
    "Kiểm thử tích hợp thành phần (component integration testing, còn gọi unit integration testing): kiểm thử giao diện và tương tác giữa các thành phần; phụ thuộc nhiều vào chiến lược tích hợp: bottom-up, top-down, big-bang.",
    "Kiểm thử hệ thống (system testing): kiểm thử hành vi và năng lực tổng thể của toàn bộ hệ thống/sản phẩm, thường gồm kiểm thử chức năng các tác vụ end-to-end và kiểm thử phi chức năng; một số đặc tính (vd usability) nên test trên hệ thống hoàn chỉnh trong môi trường đại diện; có thể dùng mô phỏng hệ thống con; có thể do nhóm kiểm thử độc lập thực hiện, dựa trên đặc tả hệ thống.",
    "Kiểm thử tích hợp hệ thống (system integration testing): kiểm thử giao diện giữa hệ thống đang test với hệ thống khác và dịch vụ bên ngoài; cần môi trường kiểm thử phù hợp, tốt nhất giống môi trường vận hành.",
    "Kiểm thử chấp nhận (acceptance testing): tập trung vào xác thực (validation) và chứng minh sẵn sàng triển khai, tức hệ thống đáp ứng nhu cầu nghiệp vụ người dùng; lý tưởng do người dùng dự kiến thực hiện. Các dạng chính: user acceptance testing (UAT), operational acceptance testing, contractual acceptance testing, regulatory acceptance testing, alpha testing, beta testing.",
    "Các cấp độ được phân biệt theo các thuộc tính (danh sách không đầy đủ): đối tượng kiểm thử (test object), mục tiêu kiểm thử (test objectives), cơ sở kiểm thử (test basis), lỗi và hỏng hóc (defects and failures), cách tiếp cận và trách nhiệm (approach and responsibilities)."
   ],
   "en": [
    "Component testing (also known as unit testing) focuses on testing components in isolation.",
    "Component integration testing focuses on testing the interfaces and interactions between components.",
    "System integration testing focuses on testing the interfaces of the system under test and other systems and external services.",
    "Acceptance testing focuses on validation and on demonstrating readiness for deployment, which means that the system fulfills the user's business needs."
   ],
   "tips": [
    "Phân biệt 2 loại tích hợp: giữa các component bên trong → component integration testing; giữa hệ thống với hệ thống khác/dịch vụ ngoài (vd cổng thanh toán, API bên thứ ba) → system integration testing.",
    "Từ khóa nhận diện: 'in isolation', 'test harness', developer → component; 'end-to-end', hành vi toàn hệ thống, usability → system; 'validation', 'business needs', người dùng thực → acceptance."
   ],
   "terms": [
    "test level",
    "component testing",
    "component integration testing",
    "integration testing",
    "system testing",
    "system integration testing",
    "acceptance testing",
    "user acceptance testing",
    "operational acceptance testing",
    "contractual acceptance testing",
    "regulatory acceptance testing",
    "alpha testing",
    "beta testing",
    "test object",
    "test harness"
   ],
   "ch": 2
  },
  "FL-2.2.2": {
   "lo": "FL-2.2.2",
   "k": "K2",
   "loEn": "Distinguish the different test types",
   "loVi": "Phân biệt các loại kiểm thử khác nhau",
   "sec": "2.2.2",
   "title": "Test Types",
   "titleVi": "Các loại kiểm thử",
   "page": 29,
   "summary": [
    "Loại kiểm thử (test type) là nhóm hoạt động kiểm thử liên quan đến các đặc tính chất lượng cụ thể; phần lớn có thể thực hiện ở mọi cấp độ kiểm thử. Syllabus nêu 4 loại: functional, non-functional, black-box, white-box.",
    "Kiểm thử chức năng (functional testing): đánh giá các chức năng mà component/hệ thống phải thực hiện – hệ thống làm 'cái gì' (what). Mục tiêu chính: kiểm tra tính đầy đủ chức năng (functional completeness), tính đúng đắn chức năng (functional correctness) và tính phù hợp chức năng (functional appropriateness).",
    "Kiểm thử phi chức năng (non-functional testing): đánh giá các thuộc tính ngoài chức năng – hệ thống hoạt động 'tốt như thế nào' (how well). Theo ISO/IEC 25010 gồm 8 đặc tính: performance efficiency (hiệu năng), compatibility (tương thích), usability (khả dụng, còn gọi interaction capability), reliability (tin cậy), security (bảo mật), maintainability (bảo trì được), portability (di chuyển được, còn gọi flexibility), safety (an toàn).",
    "Kiểm thử phi chức năng nên bắt đầu sớm khi phù hợp (vd trong review hoặc component testing); nhiều test phi chức năng được suy ra từ test chức năng (cùng chức năng nhưng kiểm tra ràng buộc phi chức năng, vd chạy trong thời gian quy định). Phát hiện muộn lỗi phi chức năng có thể đe dọa nghiêm trọng thành công dự án; đôi khi cần môi trường rất riêng (vd phòng lab usability).",
    "Kiểm thử hộp đen (black-box testing): dựa trên đặc tả (specification-based), suy ra test từ tài liệu không liên quan cấu trúc bên trong; mục tiêu: kiểm tra hành vi hệ thống so với đặc tả.",
    "Kiểm thử hộp trắng (white-box testing): dựa trên cấu trúc (structure-based), suy ra test từ cài đặt/cấu trúc bên trong (code, kiến trúc, luồng công việc, luồng dữ liệu); mục tiêu: bao phủ (cover) cấu trúc bên dưới đến mức chấp nhận được.",
    "Cả 4 loại đều áp dụng được cho mọi cấp độ kiểm thử, chỉ khác trọng tâm ở mỗi cấp; có thể dùng nhiều kỹ thuật kiểm thử khác nhau để suy ra test condition và test case cho cả 4 loại."
   ],
   "en": [
    "Functional testing evaluates the functions that a component or system should perform. The functions are \"what\" the test object should do.",
    "Non-functional testing is the testing of \"how well the system behaves\".",
    "Black-box testing is specification-based and derives tests from documentation not related to the internal structure of the test object.",
    "All the four above mentioned test types can be applied to all test levels, although the focus will be different at each level."
   ],
   "tips": [
    "Bẫy: 'white-box chỉ dùng ở component testing' hoặc 'non-functional chỉ làm ở system testing' đều SAI – cả 4 loại áp dụng cho mọi cấp độ.",
    "Phân biệt: 'what' → functional; 'how well' (tốc độ, tải, bảo mật, dễ dùng) → non-functional. Test thời gian phản hồi của chức năng đăng nhập là non-functional (performance), dù dùng kịch bản chức năng."
   ],
   "terms": [
    "test type",
    "functional testing",
    "non-functional testing",
    "black-box testing",
    "white-box testing",
    "test level"
   ],
   "ch": 2
  },
  "FL-2.2.3": {
   "lo": "FL-2.2.3",
   "k": "K2",
   "loEn": "Distinguish confirmation testing from regression testing",
   "loVi": "Phân biệt kiểm thử xác nhận với kiểm thử hồi quy",
   "sec": "2.2.3",
   "title": "Confirmation Testing and Regression Testing",
   "titleVi": "Kiểm thử xác nhận và kiểm thử hồi quy",
   "page": 30,
   "summary": [
    "Thay đổi thường được thực hiện để nâng cấp (thêm tính năng mới) hoặc sửa lỗi; khi đó kiểm thử cần gồm cả kiểm thử xác nhận (confirmation testing) và kiểm thử hồi quy (regression testing).",
    "Kiểm thử xác nhận: xác nhận lỗi gốc đã được sửa thành công. Tùy rủi ro, có thể: chạy lại tất cả test trước đó đã fail do lỗi đó, và/hoặc thêm test mới để bao phủ các thay đổi cần cho việc sửa lỗi. Nếu thiếu thời gian/tiền, có thể chỉ thực hiện lại các bước tái hiện failure và kiểm tra failure không còn xảy ra.",
    "Kiểm thử hồi quy: xác nhận thay đổi (kể cả bản sửa đã qua confirmation test) không gây hậu quả bất lợi. Hậu quả có thể ở chính component được sửa, component khác trong cùng hệ thống, hoặc hệ thống kết nối khác; cũng có thể liên quan đến môi trường.",
    "Nên làm phân tích tác động (impact analysis) trước để xác định phạm vi kiểm thử hồi quy; impact analysis cho biết phần nào của phần mềm có thể bị ảnh hưởng.",
    "Bộ test hồi quy chạy nhiều lần và số lượng tăng dần qua mỗi vòng lặp/release, nên rất phù hợp để tự động hóa; tự động hóa nên bắt đầu sớm. Khi dùng CI (như trong DevOps), nên đưa test hồi quy tự động vào, có thể ở nhiều cấp độ.",
    "Kiểm thử xác nhận và/hoặc hồi quy cần ở MỌI cấp độ kiểm thử nếu có sửa lỗi và/hoặc thay đổi ở cấp độ đó."
   ],
   "en": [
    "Confirmation testing confirms that an original defect has been successfully fixed.",
    "Regression testing confirms that no adverse consequences have been caused by a change, including a fix that has already been confirmation tested.",
    "It is advisable first to perform an impact analysis to recognize the extent of the regression testing.",
    "Regression testing is a strong candidate for automation."
   ],
   "tips": [
    "Mẹo nhớ: confirmation = 'lỗi ĐÃ SỬA chưa?' (nhìn vào chỗ sửa); regression = 'có làm HỎNG chỗ khác không?' (nhìn ra xung quanh, kể cả hệ thống kết nối và môi trường).",
    "Thứ tự hợp lý: confirmation test trước, sau đó regression test. Regression (không phải confirmation) là ứng viên mạnh cho tự động hóa và cần impact analysis để xác định phạm vi."
   ],
   "terms": [
    "confirmation testing",
    "regression testing",
    "impact analysis",
    "continuous integration",
    "devops"
   ],
   "ch": 2
  },
  "FL-2.3.1": {
   "lo": "FL-2.3.1",
   "k": "K2",
   "loEn": "Summarize maintenance testing and its triggers",
   "loVi": "Tóm tắt kiểm thử bảo trì và các tác nhân kích hoạt nó",
   "sec": "2.3",
   "title": "Maintenance Testing",
   "titleVi": "Kiểm thử bảo trì",
   "page": 31,
   "summary": [
    "Bảo trì có nhiều loại: sửa lỗi (corrective), thích ứng với thay đổi môi trường (adaptive), hoặc cải thiện hiệu năng/khả năng bảo trì (xem ISO/IEC 14764); có thể là phát hành theo kế hoạch hoặc ngoài kế hoạch (hot fix).",
    "Có thể làm phân tích tác động (impact analysis) TRƯỚC khi thay đổi, để giúp quyết định có nên thay đổi không, dựa trên hậu quả tiềm ẩn ở các phần khác của hệ thống.",
    "Kiểm thử thay đổi trên hệ thống đang vận hành gồm cả đánh giá việc triển khai thay đổi có thành công không VÀ kiểm tra hồi quy ở các phần không thay đổi (thường là phần lớn hệ thống).",
    "Phạm vi kiểm thử bảo trì thường phụ thuộc 3 yếu tố: (1) mức độ rủi ro của thay đổi; (2) kích thước hệ thống hiện có; (3) kích thước thay đổi.",
    "3 nhóm tác nhân kích hoạt (triggers): (1) Sửa đổi (modifications) – nâng cấp theo kế hoạch (release-based), thay đổi sửa lỗi, hot fix; (2) Nâng cấp hoặc di chuyển (upgrades or migrations) môi trường vận hành – vd từ nền tảng này sang nền tảng khác, cần test môi trường mới và phần mềm đã thay đổi, hoặc test chuyển đổi dữ liệu (data conversion) khi di chuyển dữ liệu từ ứng dụng khác; (3) Ngừng sử dụng (retirement) – khi ứng dụng hết vòng đời, có thể cần test lưu trữ dữ liệu (data archiving) nếu yêu cầu lưu lâu, và test thủ tục khôi phục/truy xuất (restore and retrieval) sau khi lưu trữ."
   ],
   "en": [
    "Impact analysis may be done before a change is made, to help decide if the change should be made, based on the potential consequences in other areas of the system.",
    "The scope of maintenance testing typically depends on the degree of risk of the change, the size of the existing system and the size of the change.",
    "When a system is retired, this can require testing of data archiving if long data retention periods are required."
   ],
   "tips": [
    "Ba trigger cần thuộc: modifications, upgrades/migrations, retirement. Bẫy: phát triển tính năng cho sản phẩm CHƯA phát hành không phải maintenance testing; maintenance testing áp dụng cho hệ thống đang vận hành.",
    "Retirement → test data archiving, restore/retrieval; migration → test data conversion và môi trường mới. Phạm vi phụ thuộc rủi ro + kích thước hệ thống + kích thước thay đổi (không phải số lượng tester hay ngân sách)."
   ],
   "terms": [
    "maintenance testing",
    "impact analysis",
    "regression testing"
   ],
   "ch": 2
  },
  "FL-3.1.1": {
   "lo": "FL-3.1.1",
   "k": "K1",
   "loEn": "Recognize types of work products that can be examined by static testing",
   "loVi": "Nhận biết các loại sản phẩm công việc có thể được kiểm tra bằng kiểm thử tĩnh",
   "sec": "3.1.1",
   "title": "Work Products Examinable by Static Testing",
   "titleVi": "Các sản phẩm công việc có thể kiểm tra bằng kiểm thử tĩnh",
   "page": 33,
   "summary": [
    "Kiểm thử tĩnh (static testing) KHÔNG cần thực thi phần mềm; sản phẩm được đánh giá bằng kiểm tra thủ công (review) hoặc bằng công cụ (phân tích tĩnh – static analysis). Mục tiêu: nâng cao chất lượng, phát hiện lỗi, đánh giá tính dễ đọc, đầy đủ, đúng đắn, khả kiểm thử (testability), nhất quán; áp dụng được cho cả verification và validation.",
    "Hầu như mọi sản phẩm công việc (work product) đều có thể kiểm thử tĩnh. Ví dụ: tài liệu đặc tả yêu cầu, mã nguồn (source code), kế hoạch kiểm thử (test plan), test case, hạng mục product backlog, test charter, tài liệu dự án, hợp đồng (contract) và mô hình (model).",
    "Review: bất kỳ sản phẩm nào có thể ĐỌC và HIỂU được đều có thể được review.",
    "Phân tích tĩnh (static analysis): sản phẩm cần có CẤU TRÚC để công cụ kiểm tra được (vd mô hình, code, hoặc văn bản có cú pháp hình thức – formal syntax).",
    "KHÔNG phù hợp cho kiểm thử tĩnh: sản phẩm khó để con người diễn giải và không nên phân tích bằng công cụ, vd mã thực thi của bên thứ ba (3rd party executable code) vì lý do pháp lý.",
    "Tester, đại diện nghiệp vụ (Product Owner, business analyst) và developer cùng làm example mapping, viết user story cộng tác, backlog refinement để user story đạt tiêu chí như Definition of Ready, đầy đủ, dễ hiểu và có tiêu chí chấp nhận kiểm thử được.",
    "Phân tích tĩnh phát hiện vấn đề trước kiểm thử động, thường tốn ít công hơn (không cần test case, dùng công cụ), hay được tích hợp vào CI; dùng để tìm lỗi code, đánh giá maintainability và security; trình kiểm tra chính tả và công cụ đo độ dễ đọc cũng là công cụ phân tích tĩnh."
   ],
   "en": [
    "In contrast to dynamic testing, in static testing the software under test does not need to be executed.",
    "Almost any work product can be examined using static testing.",
    "Any work product that can be read and understood can be the subject of a review. However, for static analysis, work products need a structure against which they can be checked.",
    "Work products that are not appropriate for static testing include those that are difficult to interpret by human beings and that should not be analyzed by tools (e.g., 3rd party executable code due to legal reasons)."
   ],
   "tips": [
    "Câu hỏi kiểu 'sản phẩm nào KHÔNG thể kiểm thử tĩnh?' → đáp án thường là mã thực thi bên thứ ba (third-party executable code) vì lý do pháp lý. Test plan, test case, hợp đồng, backlog item, mô hình... đều kiểm thử tĩnh được.",
    "Phân biệt: review chỉ cần 'đọc hiểu được'; static analysis cần 'có cấu trúc/cú pháp hình thức'."
   ],
   "terms": [
    "static testing",
    "static analysis",
    "review",
    "dynamic testing"
   ],
   "ch": 3
  },
  "FL-3.1.2": {
   "lo": "FL-3.1.2",
   "k": "K2",
   "loEn": "Explain the value of static testing",
   "loVi": "Giải thích giá trị của kiểm thử tĩnh",
   "sec": "3.1.2",
   "title": "Value of Static Testing",
   "titleVi": "Giá trị của kiểm thử tĩnh",
   "page": 33,
   "summary": [
    "Phát hiện lỗi ở các giai đoạn SỚM NHẤT của SDLC, thực hiện nguyên tắc kiểm thử sớm (early testing).",
    "Tìm được những lỗi mà kiểm thử động (dynamic testing) KHÔNG phát hiện được: mã không thể chạy tới (unreachable code), design pattern không được hiện thực đúng như mong muốn, lỗi trong sản phẩm không thực thi được (non-executable work products).",
    "Giúp đánh giá chất lượng và xây dựng sự tin tưởng (confidence) vào sản phẩm công việc; khi xác minh yêu cầu đã ghi lại, stakeholder đảm bảo yêu cầu phản ánh đúng nhu cầu thực tế.",
    "Vì làm sớm nên tạo ra sự hiểu biết chung (shared understanding) giữa các stakeholder và cải thiện giao tiếp → khuyến nghị lôi kéo nhiều loại stakeholder tham gia kiểm thử tĩnh.",
    "Chi phí: review có thể tốn kém khi triển khai, nhưng TỔNG chi phí dự án thường thấp hơn nhiều so với không review, vì giảm thời gian và công sức sửa lỗi về sau.",
    "Một số lỗi code được phân tích tĩnh phát hiện hiệu quả hơn kiểm thử động, thường dẫn tới ít lỗi code hơn và tổng công sức phát triển thấp hơn."
   ],
   "en": [
    "Static testing can detect defects in the earliest phases of the SDLC, fulfilling the principle of early testing.",
    "It can also identify defects which cannot be detected by dynamic testing (e.g., unreachable code, design patterns not implemented as desired, defects in non-executable work products).",
    "Even though reviews can be costly to implement, the overall project costs are usually much lower than when no reviews are performed.",
    "Since static testing can be performed early in the SDLC, a shared understanding can be created among the involved stakeholders."
   ],
   "tips": [
    "Bẫy: 'review làm tăng tổng chi phí dự án' là SAI — review có chi phí riêng nhưng tổng chi phí dự án thường giảm.",
    "Ví dụ 'unreachable code' là lỗi kiểm thử động không thể tìm thấy (vì không bao giờ được thực thi) — dấu hiệu nhận ra giá trị riêng của kiểm thử tĩnh."
   ],
   "terms": [
    "static testing",
    "dynamic testing",
    "unreachable code"
   ],
   "ch": 3
  },
  "FL-3.1.3": {
   "lo": "FL-3.1.3",
   "k": "K2",
   "loEn": "Compare and contrast static testing and dynamic testing",
   "loVi": "So sánh và đối chiếu kiểm thử tĩnh và kiểm thử động",
   "sec": "3.1.3",
   "title": "Differences between Static Testing and Dynamic Testing",
   "titleVi": "Khác biệt giữa kiểm thử tĩnh và kiểm thử động",
   "page": 34,
   "summary": [
    "Kiểm thử tĩnh và động BỔ SUNG cho nhau, có mục tiêu tương tự (hỗ trợ phát hiện lỗi), nhưng có một số loại lỗi chỉ tìm được bằng một trong hai cách.",
    "Tĩnh tìm LỖI (defect) TRỰC TIẾP; động gây ra THẤT BẠI (failure), từ đó mới phân tích để xác định lỗi liên quan.",
    "Tĩnh dễ phát hiện lỗi nằm trên các đường code hiếm khi được thực thi hoặc khó tiếp cận bằng kiểm thử động.",
    "Tĩnh áp dụng được cho sản phẩm KHÔNG thực thi được; động chỉ áp dụng cho sản phẩm thực thi được.",
    "Tĩnh đo các đặc tính chất lượng không phụ thuộc việc chạy code (vd khả năng bảo trì – maintainability); động đo đặc tính phụ thuộc việc chạy code (vd hiệu năng – performance efficiency).",
    "Các lỗi dễ/rẻ tìm hơn bằng kiểm thử tĩnh (7 nhóm): (1) lỗi yêu cầu – không nhất quán, mơ hồ, mâu thuẫn, thiếu sót, không chính xác, trùng lặp; (2) lỗi thiết kế – cấu trúc CSDL kém hiệu quả, phân module kém; (3) một số lỗi code – biến có giá trị chưa xác định, biến chưa khai báo, code không chạy tới hoặc trùng lặp, độ phức tạp code quá cao; (4) sai lệch so với tiêu chuẩn – không tuân thủ quy ước đặt tên; (5) đặc tả giao diện sai – lệch số lượng, kiểu, thứ tự tham số; (6) một số lỗ hổng bảo mật – tràn bộ đệm (buffer overflow); (7) khoảng trống/sai sót trong độ bao phủ cơ sở kiểm thử – thiếu test cho một tiêu chí chấp nhận."
   ],
   "en": [
    "Static testing finds defects directly, while dynamic testing causes failures from which the associated defects are determined through subsequent analysis.",
    "Static testing can be applied to non-executable work products, while dynamic testing can only be applied to executable work products.",
    "Static testing can be used to measure quality characteristics that are not dependent on executing code (e.g., maintainability).",
    "Static testing may more easily detect defects that lay on paths through the code that are rarely executed or hard to reach using dynamic testing."
   ],
   "tips": [
    "Nhớ cặp: tĩnh → defect trực tiếp, maintainability; động → failure rồi phân tích, performance efficiency. Đề hay hỏi 'đặc tính nào chỉ đo được bằng kiểm thử động' → hiệu năng.",
    "Lỗi kiểu memory leak, thời gian phản hồi chậm thường cần kiểm thử động; còn buffer overflow, biến chưa khai báo, vi phạm quy ước đặt tên, sai thứ tự tham số giao diện là ví dụ điển hình của kiểm thử tĩnh."
   ],
   "terms": [
    "static testing",
    "dynamic testing",
    "static analysis",
    "unreachable code"
   ],
   "ch": 3
  },
  "FL-3.2.1": {
   "lo": "FL-3.2.1",
   "k": "K1",
   "loEn": "Identify the benefits of early and frequent stakeholder feedback",
   "loVi": "Xác định lợi ích của phản hồi sớm và thường xuyên từ các bên liên quan",
   "sec": "3.2.1",
   "title": "Benefits of Early and Frequent Stakeholder Feedback",
   "titleVi": "Lợi ích của phản hồi sớm và thường xuyên từ các bên liên quan",
   "page": 35,
   "summary": [
    "Phản hồi sớm và thường xuyên cho phép truyền đạt SỚM các vấn đề chất lượng tiềm ẩn.",
    "Nếu stakeholder ít tham gia trong SDLC, sản phẩm có thể không đáp ứng tầm nhìn ban đầu hoặc hiện tại của họ.",
    "Hậu quả khi không giao đúng thứ stakeholder muốn: làm lại tốn kém (costly rework), trễ hạn (missed deadlines), đổ lỗi lẫn nhau (blame games), thậm chí dự án thất bại hoàn toàn.",
    "Phản hồi thường xuyên giúp ngăn hiểu sai yêu cầu và đảm bảo thay đổi yêu cầu được hiểu và hiện thực sớm hơn.",
    "Giúp đội phát triển hiểu rõ hơn họ đang xây dựng gì, và tập trung vào các tính năng mang lại GIÁ TRỊ cao nhất cho stakeholder và có tác động tích cực nhất đến các rủi ro đã nhận diện."
   ],
   "en": [
    "Early and frequent feedback allows for the early communication of potential quality problems.",
    "A failure to deliver what the stakeholder wants can result in costly rework, missed deadlines, blame games, and might even lead to complete project failure.",
    "Frequent stakeholder feedback throughout the SDLC can prevent misunderstandings about requirements and ensure that changes to requirements are understood and implemented earlier."
   ],
   "tips": [
    "Đáp án đúng thường xoay quanh: phát hiện sớm vấn đề chất lượng, tránh hiểu sai yêu cầu, tập trung vào tính năng giá trị nhất. Phương án kiểu 'giảm nhu cầu kiểm thử động' hay 'loại bỏ hoàn toàn thay đổi yêu cầu' là bẫy.",
    "Phản hồi không ngăn thay đổi yêu cầu — nó giúp thay đổi được HIỂU và HIỆN THỰC sớm hơn."
   ],
   "terms": [
    "stakeholder feedback"
   ],
   "ch": 3
  },
  "FL-3.2.2": {
   "lo": "FL-3.2.2",
   "k": "K2",
   "loEn": "Summarize the activities of the review process",
   "loVi": "Tóm tắt các hoạt động của quy trình review",
   "sec": "3.2.2",
   "title": "Review Process Activities",
   "titleVi": "Các hoạt động của quy trình review",
   "page": 35,
   "summary": [
    "Chuẩn ISO/IEC 20246 định nghĩa quy trình review chung, có cấu trúc nhưng linh hoạt, có thể điều chỉnh (tailor). Review càng hình thức thì càng cần nhiều tác vụ hơn. Sản phẩm lớn có thể review nhiều lần để phủ hết.",
    "(1) Lập kế hoạch (Planning): xác định phạm vi review gồm mục đích, sản phẩm được review, đặc tính chất lượng cần đánh giá, khu vực tập trung, tiêu chí kết thúc (exit criteria), thông tin hỗ trợ như tiêu chuẩn, công sức và khung thời gian.",
    "(2) Khởi động review (Review initiation): đảm bảo mọi người và mọi thứ sẵn sàng — mỗi người tham gia truy cập được sản phẩm, hiểu vai trò/trách nhiệm và nhận đủ những gì cần thiết.",
    "(3) Review cá nhân (Individual review): mỗi reviewer tự đánh giá chất lượng, xác định bất thường (anomaly), đề xuất và câu hỏi bằng một hoặc nhiều kỹ thuật review (vd checklist-based, scenario-based reviewing); ghi lại tất cả.",
    "(4) Trao đổi và phân tích (Communication and analysis): anomaly chưa chắc là defect nên phải phân tích, thảo luận; quyết định trạng thái, người phụ trách và hành động cho từng anomaly; thường làm trong cuộc họp review (review meeting), đồng thời quyết định mức chất lượng sản phẩm và hành động tiếp theo; có thể cần review tiếp theo (follow-up).",
    "(5) Sửa và báo cáo (Fixing and reporting): tạo defect report cho mỗi lỗi để theo dõi hành động khắc phục; khi đạt exit criteria thì chấp nhận sản phẩm; báo cáo kết quả review."
   ],
   "en": [
    "The ISO/IEC 20246 standard defines a generic review process that provides a structured but flexible framework from which a specific review process may be tailored to a particular situation.",
    "Every reviewer performs an individual review to assess the quality of the work product under review, and to identify anomalies, recommendations, and questions by applying one or more review techniques.",
    "Since the anomalies identified during a review are not necessarily defects, all these anomalies need to be analyzed and discussed.",
    "For every defect, a defect report should be created so that corrective actions can be followed up. Once the exit criteria are reached, the work product can be accepted."
   ],
   "tips": [
    "Thuộc thứ tự 5 bước: Planning → Review initiation → Individual review → Communication and analysis → Fixing and reporting. Đề hay đưa 1 tác vụ và hỏi thuộc bước nào: 'xác định exit criteria/phạm vi' = Planning; 'đảm bảo người tham gia có quyền truy cập sản phẩm' = Initiation; 'quyết định trạng thái/chủ sở hữu anomaly' = Communication and analysis.",
    "Bẫy: anomaly ≠ defect. Anomaly chỉ thành defect sau khi được phân tích ở bước Communication and analysis."
   ],
   "terms": [
    "review",
    "anomaly",
    "individual review",
    "review meeting",
    "checklist-based reviewing",
    "scenario-based reviewing",
    "iso/iec 20246"
   ],
   "ch": 3
  },
  "FL-3.2.3": {
   "lo": "FL-3.2.3",
   "k": "K1",
   "loEn": "Recall which responsibilities are assigned to the principal roles when performing reviews",
   "loVi": "Nhớ lại các trách nhiệm được giao cho các vai trò chính khi thực hiện review",
   "sec": "3.2.3",
   "title": "Roles and Responsibilities in Reviews",
   "titleVi": "Vai trò và trách nhiệm trong review",
   "page": 36,
   "summary": [
    "Quản lý (Manager): quyết định CÁI GÌ được review và cung cấp nguồn lực (nhân sự, thời gian) cho review.",
    "Tác giả (Author): TẠO và SỬA sản phẩm được review.",
    "Người điều phối (Moderator, còn gọi là facilitator): đảm bảo cuộc họp review diễn ra hiệu quả — hòa giải (mediation), quản lý thời gian, tạo môi trường an toàn để mọi người phát biểu tự do.",
    "Thư ký (Scribe, còn gọi là recorder): tổng hợp anomaly từ các reviewer và ghi lại thông tin review như quyết định và anomaly mới phát hiện trong cuộc họp.",
    "Người review (Reviewer): thực hiện review; có thể là người trong dự án, chuyên gia lĩnh vực (subject matter expert) hoặc bất kỳ stakeholder nào.",
    "Trưởng nhóm review (Review leader): chịu trách nhiệm TỔNG THỂ về review — quyết định ai tham gia, tổ chức khi nào và ở đâu.",
    "Một người có thể đảm nhận nhiều vai trò; ISO/IEC 20246 mô tả thêm các vai trò chi tiết hơn."
   ],
   "en": [
    "Manager – decides what is to be reviewed and provides resources, such as staff and time for the review",
    "Moderator (also known as the facilitator) – ensures the effective running of review meetings, including mediation, time management, and a safe review environment in which everyone can speak freely",
    "Scribe (also known as recorder) – collates anomalies from reviewers and records review information, such as decisions and new anomalies found during the review meeting",
    "Review leader – takes overall responsibility for the review such as deciding who will be involved, and organizing when and where the review will take place"
   ],
   "tips": [
    "Dễ nhầm nhất: Manager (quyết định review CÁI GÌ + cấp nguồn lực) vs Review leader (quyết định AI tham gia, KHI NÀO, Ở ĐÂU) vs Moderator (điều hành cuộc họp, hòa giải, quản lý thời gian).",
    "Ghi nhớ tên gọi khác: moderator = facilitator, scribe = recorder."
   ],
   "terms": [
    "review",
    "manager",
    "author",
    "moderator",
    "scribe",
    "reviewer",
    "review leader"
   ],
   "ch": 3
  },
  "FL-3.2.4": {
   "lo": "FL-3.2.4",
   "k": "K2",
   "loEn": "Compare and contrast the different review types",
   "loVi": "So sánh và đối chiếu các loại review khác nhau",
   "sec": "3.2.4",
   "title": "Review Types",
   "titleVi": "Các loại review",
   "page": 36,
   "summary": [
    "Mức hình thức cần thiết phụ thuộc: SDLC đang dùng, độ trưởng thành của quy trình phát triển, mức độ quan trọng và phức tạp của sản phẩm, yêu cầu pháp lý/quy định, nhu cầu lưu vết kiểm toán (audit trail). Cùng một sản phẩm có thể review bằng nhiều loại, vd informal trước rồi formal sau.",
    "Chọn loại review dựa vào mục tiêu và các yếu tố như nhu cầu dự án, nguồn lực sẵn có, loại sản phẩm và rủi ro, lĩnh vực kinh doanh, văn hóa công ty.",
    "Review không chính thức (Informal review): không theo quy trình xác định, không yêu cầu đầu ra tài liệu hình thức; mục tiêu chính là phát hiện anomaly.",
    "Walkthrough: do TÁC GIẢ dẫn dắt; nhiều mục tiêu: đánh giá chất lượng và xây dựng tin tưởng, ĐÀO TẠO reviewer, đạt đồng thuận, tạo ý tưởng mới, thúc đẩy tác giả cải thiện, phát hiện anomaly. Review cá nhân trước walkthrough là KHÔNG bắt buộc.",
    "Technical review: do reviewer có chuyên môn kỹ thuật thực hiện, do MODERATOR dẫn dắt; mục tiêu: đạt đồng thuận và RA QUYẾT ĐỊNH về vấn đề kỹ thuật, ngoài ra phát hiện anomaly, đánh giá chất lượng, xây dựng tin tưởng, tạo ý tưởng mới, thúc đẩy tác giả cải thiện.",
    "Inspection: loại HÌNH THỨC NHẤT, theo đầy đủ quy trình chung (3.2.2); mục tiêu chính là tìm SỐ LƯỢNG anomaly TỐI ĐA; ngoài ra đánh giá chất lượng, xây dựng tin tưởng, thúc đẩy tác giả cải thiện. Thu thập METRICS để cải tiến SDLC và quy trình inspection. Tác giả KHÔNG được làm review leader hay scribe."
   ],
   "en": [
    "Informal reviews do not follow a defined process and do not require a formal documented output. The main objective is detecting anomalies.",
    "A walkthrough, which is led by the author, can serve many objectives, such as evaluating quality and building confidence in the work product, educating reviewers, gaining consensus, generating new ideas.",
    "A technical review is performed by technically qualified reviewers and led by a moderator. The objectives of a technical review are to gain consensus and make decisions regarding a technical problem.",
    "As inspections are the most formal type of review, they follow the complete generic process. In inspections, the author cannot act as the review leader or scribe."
   ],
   "tips": [
    "Từ khóa nhận diện: 'tác giả dẫn dắt / đào tạo người review' → Walkthrough; 'chuyên gia kỹ thuật, ra quyết định về vấn đề kỹ thuật' → Technical review; 'quy trình đầy đủ, metrics, tìm tối đa anomaly, tác giả không được làm leader/scribe' → Inspection; 'không quy trình, không tài liệu' → Informal review.",
    "Bẫy: 'Walkthrough bắt buộc review cá nhân trước' là SAI. 'Inspection do tác giả làm review leader' là SAI."
   ],
   "terms": [
    "informal review",
    "formal review",
    "walkthrough",
    "technical review",
    "inspection",
    "anomaly",
    "audit trail"
   ],
   "ch": 3
  },
  "FL-3.2.5": {
   "lo": "FL-3.2.5",
   "k": "K1",
   "loEn": "Recall the factors that contribute to a successful review",
   "loVi": "Nhớ lại các yếu tố góp phần vào một buổi review thành công",
   "sec": "3.2.5",
   "title": "Success Factors for Reviews",
   "titleVi": "Các yếu tố thành công của review",
   "page": 37,
   "summary": [
    "Xác định mục tiêu rõ ràng và tiêu chí kết thúc (exit criteria) đo lường được. Đánh giá người tham gia KHÔNG BAO GIỜ được là mục tiêu.",
    "Chọn loại review phù hợp để đạt mục tiêu, phù hợp loại sản phẩm, người tham gia, nhu cầu và bối cảnh dự án.",
    "Review theo từng phần nhỏ (small chunks) để reviewer không mất tập trung khi review cá nhân và/hoặc trong cuộc họp review.",
    "Cung cấp phản hồi từ review cho stakeholder và tác giả để họ cải thiện sản phẩm và hoạt động của mình.",
    "Dành đủ thời gian cho người tham gia chuẩn bị review.",
    "Có sự hỗ trợ của ban quản lý (management support) cho quy trình review.",
    "Đưa review thành một phần văn hóa tổ chức để thúc đẩy học hỏi và cải tiến quy trình; đào tạo đầy đủ cho mọi người tham gia để biết cách thực hiện vai trò; điều phối (facilitate) các cuộc họp."
   ],
   "en": [
    "Defining clear objectives and measurable exit criteria. Evaluation of participants should never be an objective",
    "Performing reviews on small chunks, so that reviewers do not lose concentration during an individual review and/or the review meeting (when held)",
    "Making reviews part of the organization's culture, to promote learning and process improvement"
   ],
   "tips": [
    "Bẫy kinh điển: 'dùng kết quả review để đánh giá hiệu suất người tham gia/tác giả' → KHÔNG phải yếu tố thành công (syllabus nói rõ không bao giờ là mục tiêu).",
    "Bẫy: 'review toàn bộ tài liệu lớn trong một lần' là sai — phải chia nhỏ (small chunks)."
   ],
   "terms": [
    "review",
    "review meeting",
    "formal review"
   ],
   "ch": 3
  },
  "FL-4.1.1": {
   "lo": "FL-4.1.1",
   "k": "K2",
   "loEn": "Distinguish black-box test techniques, white-box test techniques and experience-based test techniques",
   "loVi": "Phân biệt kỹ thuật kiểm thử hộp đen, kỹ thuật kiểm thử hộp trắng và kỹ thuật kiểm thử dựa trên kinh nghiệm",
   "sec": "4.1",
   "title": "Test Techniques Overview",
   "titleVi": "Tổng quan về kỹ thuật kiểm thử",
   "page": 39,
   "summary": [
    "Kỹ thuật kiểm thử (test technique) hỗ trợ tester trong phân tích kiểm thử (test analysis – kiểm thử CÁI GÌ) và thiết kế kiểm thử (test design – kiểm thử NHƯ THẾ NÀO), giúp tạo một bộ test case tương đối nhỏ nhưng đủ, một cách có hệ thống.",
    "Kỹ thuật còn giúp xác định điều kiện kiểm thử (test condition), mục độ phủ (coverage item) và dữ liệu kiểm thử (test data). Syllabus chia làm 3 nhóm: hộp đen, hộp trắng, dựa trên kinh nghiệm.",
    "Kỹ thuật hộp đen (black-box test technique, còn gọi là specification-based): dựa trên phân tích hành vi được đặc tả của đối tượng kiểm thử, KHÔNG xét cấu trúc bên trong. Test case độc lập với cách cài đặt → nếu code thay đổi mà hành vi yêu cầu giữ nguyên thì test case vẫn dùng được.",
    "Kỹ thuật hộp trắng (white-box test technique, còn gọi là structure-based): dựa trên phân tích cấu trúc và xử lý bên trong. Test case phụ thuộc vào thiết kế nên chỉ tạo được SAU KHI đã có thiết kế hoặc code.",
    "Kỹ thuật dựa trên kinh nghiệm (experience-based test technique): tận dụng kiến thức và kinh nghiệm của tester; hiệu quả phụ thuộc mạnh vào kỹ năng tester. Có thể tìm được defect mà hộp đen và hộp trắng bỏ sót → mang tính BỔ SUNG (complementary) cho hai nhóm kia."
   ],
   "en": [
    "Test techniques support the tester in test analysis (what to test) and in test design (how to test).",
    "Black-box test techniques (also known as specification-based techniques) are based on an analysis of the specified behavior of the test object without reference to its internal structure.",
    "White-box test techniques (also known as structure-based techniques) are based on an analysis of the test object's internal structure and processing.",
    "Experience-based test techniques can detect defects that may be missed using the black-box test techniques and white-box test techniques."
   ],
   "tips": [
    "Từ khóa nhận diện: 'specification / behavior / requirements' → hộp đen; 'internal structure / code / design' → hộp trắng; 'knowledge, experience, skills of tester' → kinh nghiệm.",
    "Bẫy: test case hộp đen vẫn còn giá trị khi implementation thay đổi; test case hộp trắng chỉ thiết kế được sau khi có design/code."
   ],
   "terms": [
    "test technique",
    "black-box test technique",
    "white-box test technique",
    "experience-based test technique",
    "coverage item"
   ],
   "ch": 4
  },
  "FL-4.2.1": {
   "lo": "FL-4.2.1",
   "k": "K3",
   "loEn": "Use equivalence partitioning to derive test cases",
   "loVi": "Sử dụng phân vùng tương đương để xây dựng test case",
   "sec": "4.2.1",
   "title": "Equivalence Partitioning",
   "titleVi": "Phân vùng tương đương",
   "page": 39,
   "summary": [
    "Phân vùng tương đương (equivalence partitioning – EP) chia dữ liệu thành các phân vùng (partition) với kỳ vọng mọi phần tử trong cùng phân vùng được xử lý giống nhau → nếu một giá trị phát hiện defect thì giá trị khác cùng phân vùng cũng phát hiện → chỉ cần 1 test cho mỗi phân vùng.",
    "Phân vùng có thể xác định cho bất kỳ phần tử dữ liệu nào: input, output, cấu hình, giá trị nội bộ, giá trị thời gian, tham số giao diện. Phân vùng có thể liên tục/rời rạc, có thứ tự/không thứ tự, hữu hạn/vô hạn; các phân vùng KHÔNG được chồng lấn và KHÔNG được rỗng.",
    "Phân vùng hợp lệ (valid partition) chứa giá trị hợp lệ; phân vùng không hợp lệ (invalid partition) chứa giá trị không hợp lệ. Định nghĩa hợp lệ/không hợp lệ có thể khác nhau giữa các nhóm/tổ chức.",
    "Coverage item = các phân vùng (kể cả phân vùng không hợp lệ). Coverage = số phân vùng được ít nhất 1 test case thực thi / tổng số phân vùng × 100%. Để đạt 100% phải phủ mỗi phân vùng ít nhất một lần.",
    "Khi có nhiều tập phân vùng (nhiều tham số input), tiêu chí đơn giản nhất là Each Choice coverage: mỗi phân vùng của mỗi tập được phủ ít nhất một lần; KHÔNG xét tổ hợp giữa các phân vùng. Số test tối thiểu = số phân vùng của tập lớn nhất (vì một test phủ đồng thời phân vùng của nhiều tập).",
    "Ví dụ: tuổi hợp lệ 18–60. Phân vùng: ≤17 (invalid), 18–60 (valid), ≥61 (invalid) → 3 coverage item → tối thiểu 3 test, vd 10, 30, 70. Nếu chỉ test 30 và 70 → coverage 2/3 ≈ 67%.",
    "Ví dụ Each Choice: Tham số A có 3 phân vùng, tham số B có 2 phân vùng → tối thiểu 3 test (vd A1-B1, A2-B2, A3-B1)."
   ],
   "en": [
    "Equivalence Partitioning (EP) divides data into partitions based on the expectation that all the elements of a given partition are to be processed in the same way by the test object.",
    "The partitions must not overlap and must be non-empty sets.",
    "In EP, the coverage items are the equivalence partitions.",
    "Each Choice coverage requires test cases to exercise each partition from each set of partitions at least once."
   ],
   "tips": [
    "Đừng quên đếm phân vùng KHÔNG hợp lệ — 100% coverage EP bao gồm cả invalid partition. Đọc kỹ đề: có khi một input vừa có phân vùng theo khoảng giá trị vừa có phân vùng như 'không phải số'.",
    "Câu hỏi 'số test case tối thiểu' với nhiều tham số theo Each Choice: lấy số phân vùng LỚN NHẤT trong các tham số, không phải nhân hoặc cộng."
   ],
   "terms": [
    "equivalence partitioning",
    "valid partition",
    "invalid partition",
    "each choice coverage",
    "coverage",
    "coverage item"
   ],
   "ch": 4
  },
  "FL-4.2.2": {
   "lo": "FL-4.2.2",
   "k": "K3",
   "loEn": "Use boundary value analysis to derive test cases",
   "loVi": "Sử dụng phân tích giá trị biên để xây dựng test case",
   "sec": "4.2.2",
   "title": "Boundary Value Analysis",
   "titleVi": "Phân tích giá trị biên",
   "page": 40,
   "summary": [
    "Phân tích giá trị biên (boundary value analysis – BVA) kiểm thử các biên của phân vùng tương đương; chỉ dùng được cho phân vùng CÓ THỨ TỰ (ordered). Giá trị nhỏ nhất và lớn nhất của một phân vùng là giá trị biên (boundary value).",
    "Lý do: developer dễ mắc lỗi ở biên; defect điển hình là biên cài đặt bị lệch lên/xuống so với vị trí dự định hoặc bị bỏ sót hoàn toàn.",
    "BVA 2 giá trị (2-value BVA): với mỗi giá trị biên có 2 coverage item: chính giá trị biên và giá trị láng giềng gần nhất thuộc phân vùng KỀ BÊN. Coverage = số giá trị biên đã thực thi / tổng số giá trị biên xác định.",
    "BVA 3 giá trị (3-value BVA): với mỗi giá trị biên có 3 coverage item: giá trị biên và CẢ HAI láng giềng (một số coverage item có thể không phải giá trị biên). Coverage = số (giá trị biên + láng giềng) đã thực thi / tổng số (giá trị biên + láng giềng).",
    "Ví dụ 2-value: hợp lệ 1–100 (số nguyên) → phân vùng ≤0 | 1–100 | ≥101; các giá trị biên: 0, 1, 100, 101 → 4 coverage item: {0, 1, 100, 101}.",
    "Ví dụ 3-value cùng đề: biên 0 → {-1, 0, 1}; biên 1 → {0, 1, 2}; biên 100 → {99, 100, 101}; biên 101 → {100, 101, 102}. Gộp giá trị trùng → 8 coverage item: -1, 0, 1, 2, 99, 100, 101, 102. Luôn loại giá trị trùng khi đếm.",
    "3-value BVA chặt hơn 2-value: nếu 'if (x ≤ 10)' bị cài sai thành 'if (x = 10)', dữ liệu 2-value (x = 10, x = 11) không phát hiện được, còn x = 9 của 3-value thì có khả năng phát hiện."
   ],
   "en": [
    "BVA can only be used for ordered partitions. The minimum and maximum values of a partition are its boundary values.",
    "In 2-value BVA, for each boundary value there are two coverage items: this boundary value and its closest neighbor belonging to the adjacent partition.",
    "In 3-value BVA, for each boundary value there are three coverage items: this boundary value and both its neighbors.",
    "3-value BVA is more rigorous than 2-value BVA as it may detect defects overlooked by 2-value BVA."
   ],
   "tips": [
    "Cách làm chắc chắn: (1) vẽ trục số và các phân vùng, (2) ghi min/max của từng phân vùng = các giá trị biên, (3) 2-value: lấy tất cả giá trị biên; 3-value: mỗi biên thêm cả hai láng giềng, (4) gộp các giá trị trùng rồi đếm.",
    "Chú ý bước nhảy của dữ liệu: số nguyên bước 1, tiền tệ bước 0.01... Láng giềng của 100 với bước 0.01 là 99.99 và 100.01."
   ],
   "terms": [
    "boundary value analysis",
    "boundary value",
    "2-value boundary value analysis",
    "3-value boundary value analysis",
    "coverage item"
   ],
   "ch": 4
  },
  "FL-4.2.3": {
   "lo": "FL-4.2.3",
   "k": "K3",
   "loEn": "Use decision table testing to derive test cases",
   "loVi": "Sử dụng kiểm thử bảng quyết định để xây dựng test case",
   "sec": "4.2.3",
   "title": "Decision Table Testing",
   "titleVi": "Kiểm thử bảng quyết định",
   "page": 41,
   "summary": [
    "Bảng quyết định (decision table) dùng để kiểm thử yêu cầu mô tả các TỔ HỢP điều kiện dẫn đến các kết quả khác nhau; hiệu quả để ghi lại logic phức tạp như quy tắc nghiệp vụ (business rules).",
    "Hàng = điều kiện (conditions) và hành động (actions); mỗi cột = một quy tắc quyết định (decision rule) gồm một tổ hợp điều kiện duy nhất và hành động tương ứng. Limited-entry: giá trị là Boolean (T/F); extended-entry: điều kiện/hành động có thể nhận nhiều giá trị (khoảng số, phân vùng, giá trị rời rạc).",
    "Ký hiệu: T = điều kiện thỏa; F = không thỏa; '–' = không liên quan đến kết quả; 'N/A' = tổ hợp không khả thi (infeasible). Hành động: X = xảy ra; để trống = không xảy ra.",
    "Bảng đầy đủ có đủ cột cho mọi tổ hợp (n điều kiện Boolean → 2^n cột). Có thể đơn giản hóa bằng cách xóa cột không khả thi, và tối giản (minimize) bằng cách gộp các cột mà một số điều kiện không ảnh hưởng kết quả (thuật toán tối giản ngoài phạm vi syllabus).",
    "Coverage item = các cột chứa tổ hợp điều kiện KHẢ THI. Coverage = số cột đã thực thi / tổng số cột khả thi × 100%.",
    "Ví dụ: Giảm giá nếu C1 'là thành viên' và C2 'đơn ≥ 1 triệu'. 2 điều kiện → 4 cột: TT→giảm 10%, TF→giảm 5%, FT→miễn phí ship, FF→không gì. 4 cột khả thi → cần 4 test cho 100%. Nếu có một cột N/A thì chỉ còn 3 coverage item.",
    "Điểm mạnh: cách tiếp cận hệ thống để tìm mọi tổ hợp (kể cả tổ hợp dễ bị bỏ sót), giúp phát hiện lỗ hổng hoặc mâu thuẫn trong yêu cầu. Điểm yếu: số quy tắc tăng theo hàm mũ khi nhiều điều kiện → dùng bảng tối giản hoặc cách tiếp cận dựa trên rủi ro."
   ],
   "en": [
    "Each column corresponds to a decision rule that defines a unique combination of conditions, along with the associated actions.",
    "In decision table testing, the coverage items are the columns containing feasible combinations of conditions.",
    "It also helps to find any gaps or contradictions in the requirements.",
    "The number of rules grows exponentially with the number of conditions."
   ],
   "tips": [
    "Đếm test cho 100% coverage = số cột KHẢ THI (bỏ cột N/A); nếu đề cho bảng đã tối giản thì đếm số cột của bảng đó, không tính lại 2^n.",
    "Bẫy: '–' (irrelevant) khác 'N/A' (infeasible). Cột có '–' vẫn là một coverage item; cột N/A thì bị loại."
   ],
   "terms": [
    "decision table testing",
    "coverage item",
    "coverage"
   ],
   "ch": 4
  },
  "FL-4.2.4": {
   "lo": "FL-4.2.4",
   "k": "K3",
   "loEn": "Use state transition testing to derive test cases",
   "loVi": "Sử dụng kiểm thử chuyển trạng thái để xây dựng test case",
   "sec": "4.2.4",
   "title": "State Transition Testing",
   "titleVi": "Kiểm thử chuyển trạng thái",
   "page": 41,
   "summary": [
    "Sơ đồ trạng thái (state diagram) mô hình hóa hành vi hệ thống bằng các trạng thái và chuyển tiếp (transition) hợp lệ. Transition được khởi phát bởi sự kiện (event), có thể kèm điều kiện bảo vệ (guard condition); cú pháp nhãn: 'event [guard condition] / action'. Transition xảy ra tức thời và có thể kèm hành động.",
    "Bảng trạng thái (state table) tương đương sơ đồ: hàng = trạng thái, cột = sự kiện (kèm guard nếu có), ô = trạng thái đích (+ hành động). Khác với sơ đồ, bảng thể hiện RÕ các transition KHÔNG hợp lệ (ô trống).",
    "Một test case thường là chuỗi sự kiện → chuỗi thay đổi trạng thái; một test case có thể (và thường) phủ nhiều transition.",
    "All states coverage: coverage item = các trạng thái. Coverage = số trạng thái đã đi qua / tổng số trạng thái.",
    "Valid transitions coverage (còn gọi 0-switch coverage): coverage item = từng transition hợp lệ. Coverage = số transition hợp lệ đã thực thi / tổng số transition hợp lệ. Đây là tiêu chí phổ biến nhất.",
    "All transitions coverage: coverage item = TẤT CẢ transition trong state table (hợp lệ + không hợp lệ). Phải thực thi mọi transition hợp lệ và THỬ mọi transition không hợp lệ; mỗi test case chỉ nên thử MỘT transition không hợp lệ để tránh che lấp lỗi (defect masking). Là yêu cầu tối thiểu cho phần mềm mission-critical và safety-critical.",
    "Quan hệ mạnh/yếu: all states < valid transitions < all transitions. 100% valid transitions ⇒ 100% all states; 100% all transitions ⇒ cả hai. All states thường đạt được mà không cần đi hết transition.",
    "Ví dụ: cửa có 3 trạng thái Đóng, Mở, Khóa; transition hợp lệ: Đóng–mở→Mở, Mở–đóng→Đóng, Đóng–khóa→Khóa, Khóa–mở khóa→Đóng (4). Test 'Đóng→Mở→Đóng→Khóa→Đóng' đạt 100% all states và 100% valid transitions. State table: 3 trạng thái × 4 sự kiện = 12 ô → 4 hợp lệ + 8 không hợp lệ = 12 coverage item cho all transitions."
   ],
   "en": [
    "A transition is initiated by an event, which may be additionally qualified by a guard condition.",
    "In contrast to the state diagram, the state table explicitly shows invalid transitions, which are represented by empty cells.",
    "Testing only one invalid transition in a single test case helps to avoid defect masking.",
    "Achieving full valid transitions coverage guarantees full all states coverage."
   ],
   "tips": [
    "Câu hỏi 'số test case tối thiểu để đạt 100% valid transitions': tìm đường đi (chuỗi sự kiện) dài nhất có thể, chú ý trạng thái kết thúc (final state) buộc phải bắt đầu test case mới.",
    "Với all transitions: số coverage item = số ô của state table (số trạng thái × số sự kiện); mỗi invalid transition thường cần một test case riêng."
   ],
   "terms": [
    "state transition testing",
    "state table",
    "transition",
    "guard condition",
    "all states coverage",
    "valid transitions coverage",
    "all transitions coverage"
   ],
   "ch": 4
  },
  "FL-4.3.1": {
   "lo": "FL-4.3.1",
   "k": "K2",
   "loEn": "Explain statement testing",
   "loVi": "Giải thích kiểm thử câu lệnh",
   "sec": "4.3.1",
   "title": "Statement Testing and Statement Coverage",
   "titleVi": "Kiểm thử câu lệnh và độ phủ câu lệnh",
   "page": 42,
   "summary": [
    "Mục 4.3 tập trung vào 2 kỹ thuật hộp trắng phổ biến, đơn giản: kiểm thử câu lệnh (statement testing) và kiểm thử nhánh (branch testing). Các kỹ thuật chặt hơn (cho môi trường safety-critical), kỹ thuật ở mức cao (API) hoặc độ phủ không liên quan code (neuron coverage) nằm ngoài syllabus.",
    "Trong statement testing, coverage item = các câu lệnh thực thi được (executable statement). Statement coverage = số câu lệnh được thực thi / tổng số câu lệnh thực thi được × 100%.",
    "Đạt 100% statement coverage đảm bảo mọi câu lệnh thực thi được chạy ít nhất một lần → mỗi câu lệnh có defect đều được thực thi, có thể gây failure để lộ defect.",
    "Hạn chế: không phát hiện mọi defect, vd defect phụ thuộc dữ liệu (chia cho 0 chỉ lỗi khi mẫu số = 0); và 100% statement coverage KHÔNG đảm bảo đã kiểm thử hết logic quyết định (có thể chưa đi hết các nhánh).",
    "Ví dụ: 'if (x > 0) { y = 1; } print(y);' — 1 test x = 5 đi qua mọi câu lệnh → 100% statement coverage, nhưng nhánh false của if (x ≤ 0) chưa được chạy."
   ],
   "en": [
    "In statement testing, the coverage items are executable statements.",
    "When 100% statement coverage is achieved, it ensures that all executable statements in the code have been exercised at least once.",
    "It may not detect defects that are data dependent (e.g., a division by zero that only fails when a denominator is set to zero).",
    "100% statement coverage does not ensure that all the decision logic has been tested."
   ],
   "tips": [
    "If không có else: một test đi vào nhánh true thường đủ 100% statement coverage; nhưng branch coverage cần thêm test cho nhánh false.",
    "Statement coverage là tiêu chí YẾU hơn branch coverage — đáp án nói 100% statement ⇒ 100% branch là SAI."
   ],
   "terms": [
    "statement coverage",
    "white-box test technique",
    "coverage"
   ],
   "ch": 4
  },
  "FL-4.3.2": {
   "lo": "FL-4.3.2",
   "k": "K2",
   "loEn": "Explain branch testing",
   "loVi": "Giải thích kiểm thử nhánh",
   "sec": "4.3.2",
   "title": "Branch Testing and Branch Coverage",
   "titleVi": "Kiểm thử nhánh và độ phủ nhánh",
   "page": 43,
   "summary": [
    "Nhánh (branch) là sự chuyển điều khiển giữa hai nút trong đồ thị luồng điều khiển (control flow graph). Nhánh có thể vô điều kiện (unconditional – code tuần tự) hoặc có điều kiện (conditional – một kết quả của quyết định).",
    "Trong branch testing, coverage item = các nhánh. Branch coverage = số nhánh được thực thi / tổng số nhánh × 100%.",
    "100% branch coverage nghĩa là mọi nhánh, cả vô điều kiện lẫn có điều kiện, đều được thực thi. Nhánh có điều kiện thường là kết quả true/false của 'if...then', một kết quả của switch/case, hoặc quyết định thoát/tiếp tục vòng lặp.",
    "Hạn chế: không phát hiện mọi defect, vd defect chỉ xuất hiện khi chạy một đường đi (path) cụ thể.",
    "Branch coverage BAO HÀM (subsumes) statement coverage: bộ test đạt 100% branch coverage cũng đạt 100% statement coverage (ngược lại thì không).",
    "Ví dụ: 'if (a > b) {...} else {...}' cần 2 test (a > b và a ≤ b) cho 100% branch coverage. Hai if nối tiếp độc lập (mỗi if có true/false) → tối thiểu 2 test (TT và FF) là đủ phủ 4 nhánh có điều kiện."
   ],
   "en": [
    "A branch is a transfer of control between two nodes in the control flow graph.",
    "In branch testing the coverage items are branches.",
    "Conditional branches typically correspond to a true or false outcome from an 'if...then' decision, an outcome from a switch/case statement, or a decision to exit or continue in a loop.",
    "Branch coverage subsumes statement coverage."
   ],
   "tips": [
    "Số test tối thiểu cho 100% branch coverage ≥ số test cho 100% statement coverage; với if không có else thường là 2 so với 1.",
    "Đọc kỹ đề: phần trăm coverage tính trên tổng số nhánh; đề có thể cho số nhánh đã phủ và yêu cầu tính %."
   ],
   "terms": [
    "branch coverage",
    "branch",
    "statement coverage",
    "white-box test technique"
   ],
   "ch": 4
  },
  "FL-4.3.3": {
   "lo": "FL-4.3.3",
   "k": "K2",
   "loEn": "Explain the value of white-box testing",
   "loVi": "Giải thích giá trị của kiểm thử hộp trắng",
   "sec": "4.3.3",
   "title": "The Value of White-box Testing",
   "titleVi": "Giá trị của kiểm thử hộp trắng",
   "page": 43,
   "summary": [
    "Điểm mạnh cốt lõi: toàn bộ phần cài đặt (implementation) được xét đến khi kiểm thử → giúp phát hiện defect ngay cả khi đặc tả mơ hồ, lỗi thời hoặc không đầy đủ.",
    "Điểm yếu tương ứng: nếu phần mềm KHÔNG cài đặt một hoặc nhiều yêu cầu, kiểm thử hộp trắng có thể không phát hiện được các defect do thiếu sót (defects of omission).",
    "Kỹ thuật hộp trắng dùng được trong kiểm thử tĩnh (static testing), vd chạy thử khô (dry run) code; phù hợp để review code chưa sẵn sàng chạy, pseudocode và logic mức cao có thể mô hình hóa bằng control flow graph.",
    "Chỉ làm kiểm thử hộp đen thì không đo được độ phủ code thực tế. Độ đo hộp trắng cho phép đo coverage một cách khách quan và cung cấp thông tin để tạo thêm test tăng coverage, qua đó tăng sự tin tưởng vào code."
   ],
   "en": [
    "The entire software implementation is taken into account during testing, which facilitates defect detection even when the software specification is vague, outdated or incomplete.",
    "If the software does not implement one or more requirements, white-box testing may not detect the resulting defects of omission.",
    "Performing only black-box testing does not provide a measure of actual code coverage."
   ],
   "tips": [
    "Bẫy: 'yêu cầu bị thiếu trong code' → hộp trắng KHÔNG phát hiện được (cần hộp đen dựa trên đặc tả).",
    "Nhớ: hộp trắng không chỉ là kiểm thử động — có thể dùng trong static testing (dry run, review pseudocode)."
   ],
   "terms": [
    "white-box test technique",
    "coverage",
    "black-box test technique"
   ],
   "ch": 4
  },
  "FL-4.4.1": {
   "lo": "FL-4.4.1",
   "k": "K2",
   "loEn": "Explain error guessing",
   "loVi": "Giải thích kỹ thuật phỏng đoán lỗi",
   "sec": "4.4.1",
   "title": "Error Guessing",
   "titleVi": "Phỏng đoán lỗi",
   "page": 43,
   "summary": [
    "Mục 4.4 gồm 3 kỹ thuật dựa trên kinh nghiệm: phỏng đoán lỗi (error guessing), kiểm thử thăm dò (exploratory testing), kiểm thử dựa trên checklist (checklist-based testing).",
    "Error guessing dự đoán sự xuất hiện của error, defect, failure dựa trên kiến thức của tester: (1) ứng dụng đã hoạt động thế nào trong quá khứ; (2) loại error developer hay mắc và defect do chúng gây ra; (3) loại failure đã xảy ra ở các ứng dụng tương tự.",
    "Error/defect/failure thường liên quan đến: input (input đúng bị từ chối, tham số sai/thiếu), output (sai định dạng, sai kết quả), logic (thiếu trường hợp, sai toán tử), tính toán (sai toán hạng, tính sai), giao diện (tham số không khớp, kiểu không tương thích), dữ liệu (khởi tạo sai, sai kiểu).",
    "Tấn công lỗi (fault attack) là một cách hiện thực error guessing: tester tạo hoặc thu thập danh sách error, defect, failure có thể xảy ra và thiết kế test để xác định defect, làm lộ defect hoặc gây ra failure. Danh sách dựa trên kinh nghiệm, dữ liệu defect/failure, hoặc hiểu biết chung về lý do phần mềm hỏng."
   ],
   "en": [
    "Error guessing is a test technique used to anticipate the occurrence of errors, defects, and failures, based on the tester's knowledge.",
    "Fault attacks are a way to implement error guessing.",
    "These lists can be built based on experience, defect and failure data, or from common knowledge about why software fails."
   ],
   "tips": [
    "Thấy 'danh sách lỗi có thể xảy ra' + 'thiết kế test để tấn công' → fault attack / error guessing, không phải checklist-based testing.",
    "Error guessing dựa vào kiến thức về lỗi quá khứ và lỗi developer hay mắc — khác exploratory testing (học về sản phẩm trong lúc test)."
   ],
   "terms": [
    "error guessing",
    "fault attack",
    "experience-based test technique"
   ],
   "ch": 4
  },
  "FL-4.4.2": {
   "lo": "FL-4.4.2",
   "k": "K2",
   "loEn": "Explain exploratory testing",
   "loVi": "Giải thích kiểm thử thăm dò",
   "sec": "4.4.2",
   "title": "Exploratory Testing",
   "titleVi": "Kiểm thử thăm dò",
   "page": 44,
   "summary": [
    "Trong exploratory testing, test được thiết kế, thực thi và đánh giá ĐỒNG THỜI trong khi tester tìm hiểu đối tượng kiểm thử; dùng để hiểu thêm về đối tượng, khám phá sâu bằng test tập trung và tạo test cho vùng chưa được kiểm thử.",
    "Có thể tổ chức theo session-based testing: thực hiện trong một khung thời gian cố định (time box); dùng test charter chứa mục tiêu kiểm thử để định hướng; sau session thường có debriefing (trao đổi giữa tester và stakeholder về kết quả).",
    "Trong cách này, mục tiêu kiểm thử có thể coi như test condition mức cao; coverage item được xác định và thực thi ngay trong session; tester có thể dùng test session sheet để ghi lại các bước và phát hiện.",
    "Hữu ích khi: đặc tả ít hoặc không đầy đủ, áp lực thời gian lớn, hoặc để bổ sung cho các kỹ thuật chính thức hơn.",
    "Hiệu quả hơn khi tester có kinh nghiệm, kiến thức nghiệp vụ và kỹ năng như phân tích, tò mò, sáng tạo. Exploratory testing có thể kết hợp kỹ thuật khác (vd equivalence partitioning)."
   ],
   "en": [
    "In exploratory testing, tests are simultaneously designed, executed, and evaluated while the tester learns about the test object.",
    "In a session-based approach, exploratory testing is performed within a defined time box. The tester uses a test charter containing test objectives to guide the testing.",
    "Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing."
   ],
   "tips": [
    "Từ khóa nhận diện: time box, test charter, debriefing, session sheet → session-based exploratory testing.",
    "Bẫy: exploratory testing KHÔNG phải là test ngẫu nhiên không cấu trúc; nó có thể có cấu trúc (session-based) và dùng cả kỹ thuật hộp đen."
   ],
   "terms": [
    "exploratory testing",
    "experience-based test technique"
   ],
   "ch": 4
  },
  "FL-4.4.3": {
   "lo": "FL-4.4.3",
   "k": "K2",
   "loEn": "Explain checklist-based testing",
   "loVi": "Giải thích kiểm thử dựa trên checklist",
   "sec": "4.4.3",
   "title": "Checklist-Based Testing",
   "titleVi": "Kiểm thử dựa trên checklist",
   "page": 44,
   "summary": [
    "Trong checklist-based testing, tester thiết kế, cài đặt và thực thi test để phủ các test condition trong một checklist. Checklist được xây dựng từ kinh nghiệm, hiểu biết về điều quan trọng với người dùng, hoặc hiểu biết vì sao/như thế nào phần mềm hỏng.",
    "Checklist KHÔNG nên chứa: mục có thể kiểm tra tự động, mục phù hợp hơn làm entry/exit criteria, hoặc mục quá chung chung.",
    "Mục checklist thường viết dạng câu hỏi, phải kiểm tra được riêng rẽ và trực tiếp; có thể liên quan đến yêu cầu, giao diện đồ họa, đặc tính chất lượng... Dùng được cho cả kiểm thử chức năng và phi chức năng (vd 10 heuristic usability của Nielsen).",
    "Một số mục giảm hiệu quả theo thời gian vì developer học cách tránh lỗi đó; cần thêm mục mới cho defect nghiêm trọng mới phát hiện → cập nhật checklist thường xuyên dựa trên phân tích defect, nhưng tránh để checklist quá dài.",
    "Khi không có test case chi tiết, checklist cung cấp hướng dẫn và mức độ nhất quán nhất định. Checklist mức cao → biến thiên trong kiểm thử thực tế → độ phủ có thể lớn hơn nhưng khả năng lặp lại (repeatability) thấp hơn."
   ],
   "en": [
    "Checklists should not contain items that can be checked automatically, items better suited as entry criteria, exit criteria, or items that are too general.",
    "Checklist items are often phrased in the form of a question.",
    "Checklists should be regularly updated based on defect analysis.",
    "If the checklists are high-level, some variability in the actual testing is likely to occur, resulting in potentially greater coverage but less repeatability."
   ],
   "tips": [
    "Câu hỏi về checklist mức cao: đáp án đúng là 'coverage có thể lớn hơn nhưng ít lặp lại hơn'.",
    "Nhớ 3 loại mục KHÔNG nên đưa vào checklist: tự động kiểm tra được, nên là entry/exit criteria, quá chung chung."
   ],
   "terms": [
    "checklist-based testing",
    "experience-based test technique"
   ],
   "ch": 4
  },
  "FL-4.5.1": {
   "lo": "FL-4.5.1",
   "k": "K2",
   "loEn": "Explain how to write user stories in collaboration with developers and business representatives",
   "loVi": "Giải thích cách viết user story với sự cộng tác giữa developer và đại diện nghiệp vụ",
   "sec": "4.5.1",
   "title": "Collaborative User Story Writing",
   "titleVi": "Viết user story cộng tác",
   "page": 45,
   "summary": [
    "Các kỹ thuật ở 4.2–4.4 nhắm vào phát hiện defect; cách tiếp cận dựa trên cộng tác (collaboration-based test approach) còn tập trung vào PHÒNG TRÁNH defect (defect avoidance) nhờ cộng tác và giao tiếp.",
    "User story mô tả một tính năng có giá trị cho người dùng hoặc người mua hệ thống. 3 khía cạnh '3 C': Card (phương tiện mô tả story – thẻ giấy, mục trên bảng điện tử); Conversation (giải thích phần mềm sẽ được dùng thế nào – có thể ghi lại hoặc nói miệng); Confirmation (tiêu chí chấp nhận – acceptance criteria).",
    "Định dạng phổ biến: 'As a [role], I want [goal to be accomplished], so that I can [resulting business value for the role]', sau đó là acceptance criteria.",
    "Viết cộng tác có thể dùng brainstorming và mind mapping; giúp cả nhóm có tầm nhìn chung nhờ kết hợp 3 góc nhìn: nghiệp vụ (business), phát triển (development) và kiểm thử (testing).",
    "User story tốt theo INVEST: Independent (độc lập), Negotiable (thương lượng được), Valuable (có giá trị), Estimable (ước lượng được), Small (nhỏ), Testable (kiểm thử được). Nếu stakeholder không biết cách test một story → story có thể chưa rõ, không có giá trị với họ, hoặc họ chỉ cần trợ giúp về kiểm thử."
   ],
   "en": [
    "Collaboration-based approaches, on the other hand, focus also on defect avoidance by collaboration and communication.",
    "User stories have three critical aspects, called together the '3 C's': Card, Conversation, Confirmation.",
    "Good user stories should be: Independent, Negotiable, Valuable, Estimable, Small and Testable (INVEST)."
   ],
   "tips": [
    "Confirmation = acceptance criteria (không phải 'xác nhận của khách hàng'). Conversation có thể ở dạng nói miệng.",
    "Thuộc lòng INVEST; chữ T = Testable là chữ liên quan trực tiếp đến tester."
   ],
   "terms": [
    "collaboration-based test approach",
    "user story",
    "acceptance criteria"
   ],
   "ch": 4
  },
  "FL-4.5.2": {
   "lo": "FL-4.5.2",
   "k": "K2",
   "loEn": "Classify the different options for writing acceptance criteria",
   "loVi": "Phân loại các cách viết tiêu chí chấp nhận",
   "sec": "4.5.2",
   "title": "Acceptance Criteria",
   "titleVi": "Tiêu chí chấp nhận",
   "page": 45,
   "summary": [
    "Tiêu chí chấp nhận (acceptance criteria) của user story là các điều kiện mà phần cài đặt phải đáp ứng để được stakeholder chấp nhận; có thể xem như test condition cần được kiểm thử. Thường là kết quả của Conversation.",
    "Acceptance criteria dùng để: (1) xác định phạm vi user story; (2) đạt đồng thuận giữa các stakeholder; (3) mô tả cả kịch bản tích cực (positive) và tiêu cực (negative); (4) làm cơ sở cho kiểm thử chấp nhận user story; (5) cho phép lập kế hoạch và ước lượng chính xác.",
    "Hai định dạng phổ biến nhất: hướng kịch bản (scenario-oriented), vd Given/When/Then dùng trong BDD; và hướng quy tắc (rule-oriented), vd danh sách gạch đầu dòng để kiểm tra, hoặc bảng ánh xạ input–output.",
    "Nhóm có thể dùng định dạng tùy chỉnh khác, miễn là acceptance criteria được định nghĩa rõ ràng, không mơ hồ."
   ],
   "en": [
    "Acceptance criteria for a user story are the conditions that an implementation of the user story must meet to be accepted by stakeholders.",
    "Acceptance criteria may be viewed as the test conditions that should be exercised by the tests.",
    "The two most common formats are: scenario-oriented (e.g., Given/When/Then format used in BDD) and rule-oriented (e.g., bullet point verification list, or tabulated form of input-output mapping)."
   ],
   "tips": [
    "Given/When/Then → scenario-oriented; danh sách gạch đầu dòng / bảng input-output → rule-oriented.",
    "Bẫy: acceptance criteria mô tả CẢ kịch bản positive và negative, không chỉ luồng thành công."
   ],
   "terms": [
    "acceptance criteria",
    "user story",
    "collaboration-based test approach"
   ],
   "ch": 4
  },
  "FL-4.5.3": {
   "lo": "FL-4.5.3",
   "k": "K3",
   "loEn": "Use acceptance test-driven development (ATDD) to derive test cases",
   "loVi": "Sử dụng phát triển hướng kiểm thử chấp nhận (ATDD) để xây dựng test case",
   "sec": "4.5.3",
   "title": "Acceptance Test-driven Development (ATDD)",
   "titleVi": "Phát triển hướng kiểm thử chấp nhận (ATDD)",
   "page": 46,
   "summary": [
    "ATDD (acceptance test-driven development) là cách tiếp cận test-first: test case được tạo TRƯỚC khi cài đặt user story, bởi các thành viên có góc nhìn khác nhau (khách hàng, developer, tester); có thể chạy thủ công hoặc tự động.",
    "Bước 1 – specification workshop: cả nhóm phân tích, thảo luận và viết user story và acceptance criteria (nếu chưa có); giải quyết các điểm chưa đầy đủ, mơ hồ hoặc defect trong story.",
    "Bước 2 – tạo test case (cả nhóm hoặc riêng tester), dựa trên acceptance criteria; test case là các ví dụ (example) về cách phần mềm hoạt động → 'example' và 'test' thường dùng thay thế cho nhau. Có thể áp dụng kỹ thuật ở 4.2, 4.3, 4.4.",
    "Thứ tự điển hình: (1) test positive trước – xác nhận hành vi đúng, không ngoại lệ/lỗi, luồng mọi thứ diễn ra như mong đợi; (2) sau đó test negative; (3) cuối cùng các đặc tính phi chức năng (vd performance efficiency, usability).",
    "Test case viết bằng ngôn ngữ tự nhiên dễ hiểu với stakeholder, gồm điều kiện tiên quyết (precondition, nếu có), input và hậu điều kiện (postcondition). Phải phủ TẤT CẢ đặc tính của story nhưng KHÔNG vượt ra ngoài story; không có hai test case mô tả cùng một đặc tính.",
    "Khi viết theo định dạng framework tự động hỗ trợ, developer có thể tự động hóa bằng cách viết code hỗ trợ khi cài đặt tính năng → acceptance test trở thành yêu cầu thực thi được (executable requirements).",
    "Ví dụ: Story 'Là khách hàng, tôi muốn rút tiền để chi tiêu'; AC: rút ≤ số dư thì thành công. Test positive: Given số dư 500, When rút 200, Then nhận 200 và số dư 300. Test negative: Given số dư 500, When rút 600, Then báo không đủ tiền, số dư giữ 500."
   ],
   "en": [
    "ATDD is a test-first approach. Test cases are created prior to implementing the user story.",
    "The first step is a specification workshop where the user story and (if not yet defined) its acceptance criteria are analyzed, discussed, and written by the team members.",
    "Typically, the first test cases are positive, confirming the correct behavior without exceptions or error conditions.",
    "The test cases must cover all the characteristics of the user story and should not go beyond the story."
   ],
   "tips": [
    "Câu K3 thường cho một user story + acceptance criteria và hỏi test case nào phù hợp: loại các đáp án kiểm thử điều NGOÀI phạm vi story hoặc trùng đặc tính với test khác; ưu tiên test bám đúng từng acceptance criterion.",
    "Thứ tự nhớ: positive → negative → non-functional."
   ],
   "terms": [
    "acceptance test-driven development",
    "acceptance criteria",
    "user story",
    "collaboration-based test approach"
   ],
   "ch": 4
  },
  "FL-5.1.1": {
   "lo": "FL-5.1.1",
   "k": "K2",
   "loEn": "Exemplify the purpose and content of a test plan",
   "loVi": "Nêu ví dụ minh họa mục đích và nội dung của một kế hoạch kiểm thử",
   "sec": "5.1.1",
   "title": "Purpose and Content of a Test Plan",
   "titleVi": "Mục đích và nội dung của kế hoạch kiểm thử",
   "page": 48,
   "summary": [
    "Kế hoạch kiểm thử (test plan) mô tả mục tiêu kiểm thử (test objectives), nguồn lực và quy trình cho một dự án kiểm thử.",
    "Mục đích của test plan: (1) ghi lại phương tiện và lịch trình để đạt mục tiêu kiểm thử; (2) giúp đảm bảo các hoạt động kiểm thử đáp ứng tiêu chí đã đề ra; (3) là phương tiện giao tiếp với thành viên nhóm và các bên liên quan (stakeholders); (4) chứng minh việc kiểm thử tuân theo chính sách kiểm thử (test policy) và chiến lược kiểm thử (test strategy) hiện có — hoặc giải thích lý do sai lệch.",
    "Việc lập kế hoạch (test planning) buộc tester suy nghĩ trước về các thách thức: rủi ro, lịch trình, con người, công cụ, chi phí, công sức (effort)… Bản thân quá trình viết plan đã có giá trị.",
    "Nội dung điển hình của test plan (7 mục): Bối cảnh kiểm thử (context: phạm vi – test scope, mục tiêu, cơ sở kiểm thử – test basis); Giả định và ràng buộc (assumptions and constraints); Các bên liên quan (vai trò, trách nhiệm, nhu cầu tuyển dụng/đào tạo); Giao tiếp (hình thức, tần suất, mẫu tài liệu); Sổ đăng ký rủi ro (risk register: product risks, project risks); Cách tiếp cận kiểm thử (test approach); Ngân sách và lịch trình (budget and schedule).",
    "Test approach bao gồm: test levels, test types, test techniques, sản phẩm bàn giao (test deliverables), entry/exit criteria, mức độc lập kiểm thử, metrics cần thu thập, yêu cầu test data, yêu cầu test environment, và các sai lệch so với test policy/test strategy.",
    "Chi tiết hơn về test plan có trong chuẩn ISO/IEC/IEEE 29119-3."
   ],
   "en": [
    "A test plan describes the test objectives, resources and processes for a test project.",
    "Serves as a means of communication with team members and other stakeholders.",
    "Demonstrates that testing will adhere to the existing test policy and test strategy (or explains why the testing will deviate from them).",
    "Test planning guides the testers' thinking and forces the testers to confront the future challenges related to risks, schedules, people, tools, costs, effort, etc."
   ],
   "tips": [
    "Đề hay hỏi 'mục nào KHÔNG thuộc nội dung test plan': các thứ như kết quả thực thi chi tiết, danh sách defect đã tìm thấy, lessons learned thuộc test report chứ không phải test plan.",
    "Entry/exit criteria, test techniques, test data/environment requirements nằm TRONG 'test approach' — một phần của test plan."
   ],
   "terms": [
    "test plan",
    "test planning",
    "test approach",
    "test strategy",
    "entry criteria",
    "exit criteria"
   ],
   "ch": 5
  },
  "FL-5.1.2": {
   "lo": "FL-5.1.2",
   "k": "K1",
   "loEn": "Recognize how a tester adds value to iteration and release planning",
   "loVi": "Nhận biết cách tester mang lại giá trị cho việc lập kế hoạch iteration và release",
   "sec": "5.1.2",
   "title": "Tester's Contribution to Iteration and Release Planning",
   "titleVi": "Đóng góp của tester vào lập kế hoạch iteration và release",
   "page": 48,
   "summary": [
    "Trong SDLC lặp (iterative), thường có 2 loại lập kế hoạch: lập kế hoạch phát hành (release planning) và lập kế hoạch vòng lặp (iteration planning).",
    "Release planning nhìn tới thời điểm phát hành sản phẩm, định nghĩa/định nghĩa lại product backlog, có thể chia user story lớn thành các story nhỏ hơn; là cơ sở cho test approach và test plan xuyên suốt các iteration.",
    "Tester trong release planning: tham gia viết user story kiểm thử được (testable) và tiêu chí chấp nhận (acceptance criteria); tham gia phân tích rủi ro dự án và rủi ro chất lượng; ước lượng công sức kiểm thử gắn với user story; xác định test approach; lập kế hoạch kiểm thử cho release.",
    "Iteration planning nhìn tới cuối một iteration và liên quan đến iteration backlog.",
    "Tester trong iteration planning: tham gia phân tích rủi ro chi tiết của user story; xác định khả năng kiểm thử (testability) của user story; chia user story thành các task (đặc biệt là task kiểm thử); ước lượng effort cho tất cả task kiểm thử; xác định và tinh chỉnh các khía cạnh chức năng và phi chức năng của đối tượng kiểm thử."
   ],
   "en": [
    "Release planning looks ahead to the release of a product, defines and re-defines the product backlog, and may involve refining larger user stories into a set of smaller user stories.",
    "Iteration planning looks ahead to the end of a single iteration and is concerned with the iteration backlog.",
    "Testers involved in iteration planning participate in the detailed risk analysis of user stories, determine the testability of user stories, break down user stories into tasks."
   ],
   "tips": [
    "Phân biệt: release planning → product backlog, viết testable user stories + acceptance criteria, xác định test approach cho cả release; iteration planning → iteration backlog, phân tích rủi ro CHI TIẾT, chia story thành task, ước lượng effort cho từng task.",
    "'Determine the testability of user stories' và 'break down user stories into tasks' là dấu hiệu của iteration planning."
   ],
   "terms": [
    "test planning",
    "test approach",
    "test effort"
   ],
   "ch": 5
  },
  "FL-5.1.3": {
   "lo": "FL-5.1.3",
   "k": "K2",
   "loEn": "Compare and contrast entry criteria and exit criteria",
   "loVi": "So sánh và phân biệt tiêu chí đầu vào và tiêu chí đầu ra",
   "sec": "5.1.3",
   "title": "Entry Criteria and Exit Criteria",
   "titleVi": "Tiêu chí đầu vào và tiêu chí đầu ra",
   "page": 49,
   "summary": [
    "Tiêu chí đầu vào (entry criteria) định nghĩa điều kiện tiên quyết để bắt đầu một hoạt động; nếu không đáp ứng, hoạt động dễ trở nên khó khăn, tốn thời gian, tốn kém và rủi ro hơn.",
    "Tiêu chí đầu ra (exit criteria) định nghĩa những gì phải đạt được để tuyên bố một hoạt động đã hoàn thành. Cả hai nên được định nghĩa cho từng test level và khác nhau tùy test objectives.",
    "Entry criteria điển hình: sẵn có nguồn lực (người, công cụ, môi trường, test data, ngân sách, thời gian); sẵn có testware (test basis, yêu cầu kiểm thử được, user story, test case); mức chất lượng ban đầu của test object (vd tất cả smoke test đã pass).",
    "Exit criteria điển hình: thước đo độ kỹ lưỡng (thoroughness) — mức coverage đạt được, số defect chưa giải quyết, mật độ defect (defect density), số test case fail; và tiêu chí nhị phân 'có/không' — đã chạy các test theo kế hoạch, đã thực hiện static testing, mọi defect tìm được đã được báo cáo, mọi regression test đã được tự động hóa.",
    "Hết thời gian hoặc hết ngân sách cũng có thể coi là exit criteria hợp lệ, nếu các bên liên quan đã xem xét và chấp nhận rủi ro go-live mà không kiểm thử thêm.",
    "Trong Agile: exit criteria thường gọi là Definition of Done (DoD); entry criteria mà user story phải thỏa để bắt đầu phát triển/kiểm thử gọi là Definition of Ready (DoR)."
   ],
   "en": [
    "Entry criteria define the preconditions for undertaking a given activity.",
    "Exit criteria define what must be achieved to declare an activity completed.",
    "Running out of time or budget can also be viewed as valid exit criteria.",
    "In Agile software development, exit criteria are often called Definition of Done … Entry criteria that a user story must fulfill … are called Definition of Ready."
   ],
   "tips": [
    "Bẫy: 'all smoke tests have passed' là ENTRY criterion (mức chất lượng ban đầu của test object), không phải exit criterion. 'Sẵn có test environment/test data' cũng là entry.",
    "DoD = exit, DoR = entry. Hết thời gian/ngân sách vẫn có thể là exit criteria hợp lệ — chỉ khi stakeholders chấp nhận rủi ro."
   ],
   "terms": [
    "entry criteria",
    "exit criteria",
    "definition of done",
    "definition of ready"
   ],
   "ch": 5
  },
  "FL-5.1.4": {
   "lo": "FL-5.1.4",
   "k": "K3",
   "loEn": "Use estimation techniques to calculate the required test effort",
   "loVi": "Sử dụng các kỹ thuật ước lượng để tính công sức kiểm thử cần thiết",
   "sec": "5.1.4",
   "title": "Estimation Techniques",
   "titleVi": "Các kỹ thuật ước lượng",
   "page": 49,
   "summary": [
    "Ước lượng công sức kiểm thử (test effort estimation) là dự đoán lượng công việc kiểm thử cần để đạt test objectives. Phải nói rõ với stakeholders rằng ước lượng dựa trên các giả định và luôn có sai số. Task nhỏ ước lượng chính xác hơn task lớn → chia task lớn thành các task nhỏ rồi ước lượng.",
    "4 kỹ thuật: 2 dựa trên số liệu (metrics-based) — tỷ lệ (ratios) và ngoại suy (extrapolation); 2 dựa trên chuyên gia (expert-based) — Wideband Delphi (biến thể Planning Poker) và ước lượng ba điểm (three-point estimation).",
    "(1) Ước lượng dựa trên tỷ lệ (estimation based on ratios): lấy số liệu từ các dự án trước trong chính tổ chức để suy ra tỷ lệ 'chuẩn'. Ví dụ: tỷ lệ dev:test dự án trước = 3:2, dev effort dự án mới = 600 person-days → test effort = 600 × 2/3 = 400 person-days. Số liệu lịch sử của chính tổ chức là nguồn tốt nhất.",
    "(2) Ngoại suy (extrapolation): đo đạc càng sớm càng tốt trong CHÍNH dự án hiện tại, đủ dữ liệu thì ngoại suy (thường bằng mô hình toán) cho phần việc còn lại. Rất hợp với SDLC lặp. Ví dụ: effort iteration tới = trung bình effort 3 iteration gần nhất (vd 30, 34, 26 → 30).",
    "(3) Wideband Delphi: kỹ thuật lặp, dựa trên kinh nghiệm chuyên gia. Mỗi chuyên gia ước lượng ĐỘC LẬP (in isolation) → gom kết quả → nếu có ước lượng lệch ra ngoài biên đã thống nhất thì các chuyên gia thảo luận → ước lượng lại (vẫn độc lập) → lặp đến khi đạt đồng thuận. Planning Poker là biến thể của Wideband Delphi dùng phổ biến trong Agile, ước lượng bằng các lá bài có số biểu thị kích cỡ effort.",
    "(4) Ước lượng ba điểm (three-point estimation): chuyên gia đưa 3 con số — lạc quan nhất a (most optimistic), khả dĩ nhất m (most likely), bi quan nhất b (most pessimistic). Ước lượng cuối là trung bình có trọng số: E = (a + 4m + b) / 6. Ưu điểm: tính được sai số đo — độ lệch chuẩn SD = (b − a) / 6.",
    "Ví dụ syllabus: a=6, m=9, b=18 person-hours → E = (6 + 36 + 18)/6 = 10; SD = (18 − 6)/6 = 2 → kết quả 10 ± 2 person-hours (tức 8 đến 12). Lưu ý m nhân 4, tổng chia 6."
   ],
   "en": [
    "Estimation for small tasks is usually more accurate than for the large ones.",
    "The ratios of an organization's own projects (e.g., taken from historical data) are generally the best source to use in the estimation process.",
    "Planning Poker is a variant of Wideband Delphi, commonly used in Agile software development.",
    "The estimate is calculated as E = (a + 4*m + b) / 6 … SD = (b – a) / 6."
   ],
   "tips": [
    "Ratios = dữ liệu dự án CŨ; extrapolation = dữ liệu đo sớm trong dự án HIỆN TẠI. Wideband Delphi/Planning Poker = ước lượng độc lập rồi thảo luận, lặp đến đồng thuận. Ba điểm = có công thức.",
    "Tính ba điểm: đừng quên nhân 4 cho m và chia 6; SD chỉ dùng a và b. Bài tỷ lệ: chú ý chiều tỷ lệ (dev:test = 3:2 → test = dev × 2/3), đừng nhân ngược."
   ],
   "terms": [
    "test effort",
    "test planning",
    "wideband delphi",
    "planning poker",
    "three-point estimation"
   ],
   "ch": 5
  },
  "FL-5.1.5": {
   "lo": "FL-5.1.5",
   "k": "K3",
   "loEn": "Apply test case prioritization",
   "loVi": "Áp dụng việc ưu tiên hóa test case",
   "sec": "5.1.5",
   "title": "Test Case Prioritization",
   "titleVi": "Ưu tiên hóa test case",
   "page": 50,
   "summary": [
    "Sau khi test case/test procedure được đặc tả và gom thành test suite, các suite được sắp vào lịch thực thi kiểm thử (test execution schedule) xác định thứ tự chạy.",
    "Chiến lược 1 — ưu tiên theo rủi ro (risk-based prioritization): thứ tự dựa trên kết quả phân tích rủi ro; test case phủ rủi ro quan trọng nhất chạy trước.",
    "Chiến lược 2 — ưu tiên theo độ bao phủ (coverage-based prioritization): test case đạt coverage cao nhất (vd statement coverage) chạy trước. Biến thể 'ưu tiên theo coverage bổ sung' (additional coverage prioritization): chạy test có coverage cao nhất trước, mỗi test tiếp theo là test đạt coverage BỔ SUNG (phần chưa phủ) cao nhất.",
    "Chiến lược 3 — ưu tiên theo yêu cầu (requirements-based prioritization): thứ tự theo độ ưu tiên của yêu cầu truy vết tới test case; độ ưu tiên yêu cầu do stakeholders định nghĩa.",
    "Phụ thuộc (dependencies): nếu test case ưu tiên CAO phụ thuộc vào test case ưu tiên THẤP hơn thì test case ưu tiên thấp phải chạy TRƯỚC. Cách làm bài: lần lượt chọn test ưu tiên cao nhất còn lại; nếu nó phụ thuộc test chưa chạy thì chạy test tiền đề đó trước.",
    "Ví dụ (1 = ưu tiên cao nhất): TC1 (4), TC2 (1, phụ thuộc TC3), TC3 (3), TC4 (2, phụ thuộc TC1). TC2 cao nhất nhưng cần TC3 → chạy TC3, TC2; tiếp theo TC4 cần TC1 → chạy TC1, TC4. Thứ tự: TC3 → TC2 → TC1 → TC4.",
    "Thứ tự chạy còn phải tính tới sự sẵn có của nguồn lực: công cụ, môi trường kiểm thử hay con người chỉ sẵn có trong một khung thời gian nhất định."
   ],
   "en": [
    "Risk-based prioritization, where the order of test execution is based on the results of risk analysis.",
    "In another variant, called additional coverage prioritization, the test case achieving the highest coverage is executed first; each subsequent test case is the one that achieves the highest additional coverage.",
    "If a test case with a higher priority is dependent on a test case with a lower priority, the lower priority test case must be executed first."
   ],
   "tips": [
    "Câu K3 hay cho bảng test case + priority + dependency và hỏi 'thứ tự nào đúng' hoặc 'test case nào chạy thứ 3'. Luôn ưu tiên thỏa phụ thuộc trước, rồi mới xét priority.",
    "Additional coverage: sau test đầu tiên, KHÔNG chọn theo coverage tổng mà theo phần coverage MỚI chưa được phủ — tính lại sau mỗi lần chọn."
   ],
   "terms": [
    "risk-based testing",
    "additional coverage prioritization",
    "risk analysis"
   ],
   "ch": 5
  },
  "FL-5.1.6": {
   "lo": "FL-5.1.6",
   "k": "K1",
   "loEn": "Recall the concepts of the test pyramid",
   "loVi": "Nhắc lại các khái niệm của kim tự tháp kiểm thử",
   "sec": "5.1.6",
   "title": "Test Pyramid",
   "titleVi": "Kim tự tháp kiểm thử",
   "page": 50,
   "summary": [
    "Kim tự tháp kiểm thử (test pyramid) là mô hình cho thấy các test có độ chi tiết (granularity) khác nhau; hỗ trợ nhóm trong tự động hóa kiểm thử và phân bổ công sức kiểm thử.",
    "Các tầng biểu diễn các nhóm test. Tầng càng CAO: granularity càng thấp, mức cô lập (isolation – mức độ phụ thuộc vào thành phần khác) càng thấp, thời gian thực thi càng cao.",
    "Tầng ĐÁY: test nhỏ, cô lập, nhanh, kiểm một phần chức năng nhỏ → cần NHIỀU test để đạt coverage hợp lý.",
    "Tầng ĐỈNH: test end-to-end phức tạp, mức cao, chậm hơn, kiểm phần chức năng lớn → chỉ cần ÍT test.",
    "Số lượng và tên các tầng có thể khác nhau: mô hình gốc của Cohn (2009) có 3 tầng 'unit tests', 'service tests', 'UI tests'; mô hình phổ biến khác: unit (component) tests, integration (component integration) tests, end-to-end tests. Có thể dùng các test level khác."
   ],
   "en": [
    "The test pyramid is a model showing that different tests may have different granularity.",
    "The higher the layer, the lower the test granularity, the lower the test isolation … and the higher the test execution time.",
    "Tests in the bottom layer are small, isolated, fast, and check a small piece of functionality, so usually a lot of them are needed."
   ],
   "tips": [
    "Nhớ chiều: lên cao → chậm hơn, ít cô lập hơn, ít test hơn, granularity thấp hơn. Đáy → nhanh, cô lập, nhiều test.",
    "Test pyramid nói về GRANULARITY và phân bổ automation/effort; đừng nhầm với testing quadrants (business/technology facing)."
   ],
   "terms": [
    "test pyramid"
   ],
   "ch": 5
  },
  "FL-5.1.7": {
   "lo": "FL-5.1.7",
   "k": "K2",
   "loEn": "Summarize the testing quadrants and their relationships with test levels and test types",
   "loVi": "Tóm tắt các góc phần tư kiểm thử và mối quan hệ của chúng với test level và test type",
   "sec": "5.1.7",
   "title": "Testing Quadrants",
   "titleVi": "Các góc phần tư kiểm thử",
   "page": 51,
   "summary": [
    "Các góc phần tư kiểm thử (testing quadrants), do Brian Marick định nghĩa, nhóm các test level với test type, hoạt động, kỹ thuật và work product phù hợp trong phát triển Agile.",
    "Mô hình giúp quản lý kiểm thử trực quan hóa để đảm bảo đủ các test type và test level cần thiết trong SDLC, hiểu rằng một số test type liên quan đến một số test level hơn; và là cách mô tả test type cho mọi stakeholders (dev, tester, đại diện nghiệp vụ).",
    "Hai trục: hướng nghiệp vụ (business facing) vs hướng công nghệ (technology facing); hỗ trợ nhóm (support the team – dẫn dắt phát triển) vs phê bình sản phẩm (critique the product – đo hành vi so với kỳ vọng).",
    "Q1 (technology facing, support the team): component tests và component integration tests; nên tự động hóa và đưa vào CI.",
    "Q2 (business facing, support the team): functional tests, examples, user story tests, nguyên mẫu trải nghiệm người dùng (user experience prototypes), API testing, mô phỏng (simulations); kiểm tra acceptance criteria; thủ công hoặc tự động.",
    "Q3 (business facing, critique the product): exploratory testing, usability testing, user acceptance testing; hướng người dùng, thường thủ công.",
    "Q4 (technology facing, critique the product): smoke tests và non-functional tests (TRỪ usability tests); thường tự động."
   ],
   "en": [
    "In this model, tests can be business facing or technology facing. Tests can also support the team (i.e., guide the development) or critique the product.",
    "Quadrant Q1 (technology facing, support the team). This quadrant contains component tests and component integration tests.",
    "Quadrant Q3 (business facing, critique the product). This quadrant contains exploratory testing, usability testing, user acceptance testing.",
    "Quadrant Q4 (technology facing, critique the product). This quadrant contains smoke tests and non-functional tests (except usability tests)."
   ],
   "tips": [
    "Bẫy kinh điển: usability testing ở Q3 chứ không phải Q4 (dù là non-functional). Smoke test ở Q4. API testing ở Q2.",
    "Mẹo nhớ: Q1/Q2 'support the team' (trước/trong phát triển), Q3/Q4 'critique the product'; Q1 & Q4 technology facing (thường tự động), Q2 & Q3 business facing."
   ],
   "terms": [
    "testing quadrants"
   ],
   "ch": 5
  },
  "FL-5.2.1": {
   "lo": "FL-5.2.1",
   "k": "K1",
   "loEn": "Identify risk level by using risk likelihood and risk impact",
   "loVi": "Xác định mức độ rủi ro bằng khả năng xảy ra và mức tác động của rủi ro",
   "sec": "5.2.1",
   "title": "Risk Definition and Risk Attributes",
   "titleVi": "Định nghĩa rủi ro và các thuộc tính của rủi ro",
   "page": 52,
   "summary": [
    "Bối cảnh 5.2: quản lý rủi ro (risk management) giúp tổ chức tăng khả năng đạt mục tiêu, cải thiện chất lượng sản phẩm, tăng niềm tin của stakeholders. Hai hoạt động chính: phân tích rủi ro (risk analysis = risk identification + risk assessment) và kiểm soát rủi ro (risk control = risk mitigation + risk monitoring).",
    "Kiểm thử dựa trên rủi ro (risk-based testing): cách tiếp cận kiểm thử trong đó các hoạt động kiểm thử được chọn, ưu tiên và quản lý dựa trên risk analysis và risk control.",
    "Rủi ro (risk) là một sự kiện, mối nguy, mối đe dọa hoặc tình huống tiềm ẩn mà nếu xảy ra sẽ gây tác động bất lợi.",
    "Hai yếu tố đặc trưng của rủi ro: khả năng xảy ra (risk likelihood) — xác suất xảy ra, lớn hơn 0 và nhỏ hơn 1; và tác động (risk impact / harm) — hậu quả khi xảy ra.",
    "Hai yếu tố này biểu thị mức độ rủi ro (risk level) — thước đo của rủi ro. Risk level càng cao thì việc xử lý càng quan trọng.",
    "Cách tính (theo 5.2.3): định lượng — risk level = likelihood × impact; định tính — dùng ma trận rủi ro (risk matrix). Ví dụ: likelihood 0.4, impact 5 → risk level 2.0; likelihood 0.8, impact 2 → 1.6 → rủi ro đầu cao hơn."
   ],
   "en": [
    "Risk is a potential event, hazard, threat, or situation whose occurrence causes an adverse effect.",
    "Risk likelihood – the probability of the risk occurrence (greater than zero and less than one).",
    "These two factors express the risk level, which is a measure for the risk. The higher the risk level, the more important is its treatment."
   ],
   "tips": [
    "Likelihood luôn nằm trong (0,1): xác suất = 0 không phải rủi ro, = 1 là đã thành sự cố (issue). Risk level phụ thuộc CẢ hai yếu tố, không chỉ impact.",
    "Khi đề cho bảng likelihood/impact, nhân lại rồi so sánh; với thang định tính (low/medium/high) thì tra risk matrix."
   ],
   "terms": [
    "risk",
    "risk level",
    "risk likelihood",
    "risk impact",
    "risk management",
    "risk-based testing"
   ],
   "ch": 5
  },
  "FL-5.2.2": {
   "lo": "FL-5.2.2",
   "k": "K2",
   "loEn": "Distinguish between project risks and product risks",
   "loVi": "Phân biệt rủi ro dự án và rủi ro sản phẩm",
   "sec": "5.2.2",
   "title": "Project Risks and Product Risks",
   "titleVi": "Rủi ro dự án và rủi ro sản phẩm",
   "page": 52,
   "summary": [
    "Trong kiểm thử có 2 loại rủi ro: rủi ro dự án (project risks) và rủi ro sản phẩm (product risks).",
    "Project risks liên quan tới quản lý và kiểm soát dự án, gồm 4 nhóm: Tổ chức (organizational: giao work product trễ, ước lượng sai, cắt giảm chi phí); Con người (people: thiếu kỹ năng, xung đột, vấn đề giao tiếp, thiếu nhân sự); Kỹ thuật (technical: phình phạm vi – scope creep, công cụ hỗ trợ kém); Nhà cung cấp (supplier: bên thứ ba giao hàng thất bại, công ty hỗ trợ phá sản).",
    "Khi xảy ra, project risks ảnh hưởng tới lịch trình, ngân sách hoặc phạm vi → ảnh hưởng khả năng đạt mục tiêu dự án.",
    "Product risks liên quan tới đặc tính chất lượng sản phẩm (vd theo mô hình ISO 25010). Ví dụ: thiếu/sai chức năng, tính toán sai, lỗi runtime, kiến trúc kém, thuật toán kém hiệu quả, thời gian phản hồi không đạt, trải nghiệm người dùng kém, lỗ hổng bảo mật.",
    "Hậu quả của product risks: người dùng không hài lòng; mất doanh thu, niềm tin, uy tín; thiệt hại cho bên thứ ba; chi phí bảo trì cao, quá tải help desk; chế tài hình sự; trường hợp cực đoan: thiệt hại vật chất, thương tích, thậm chí tử vong."
   ],
   "en": [
    "Project risks are related to the management and control of the project.",
    "Project risks, when they occur, may have an impact on the project schedule, budget or scope.",
    "Product risks are related to the product quality characteristics (e.g., described in the ISO 25010 quality model)."
   ],
   "tips": [
    "Câu hỏi: 'rủi ro này ảnh hưởng tới CHẤT LƯỢNG phần mềm hay tới LỊCH/NGÂN SÁCH/PHẠM VI dự án?' → product vs project. Vd 'test environment giao trễ', 'tester thiếu kỹ năng', 'tool kém' = project; 'response time chậm', 'tính sai thuế', 'lỗ hổng bảo mật' = product.",
    "Bẫy: 'poor tool support' và 'scope creep' là project risk (technical issues), còn 'poor architecture' là product risk."
   ],
   "terms": [
    "project risk",
    "product risk",
    "risk"
   ],
   "ch": 5
  },
  "FL-5.2.3": {
   "lo": "FL-5.2.3",
   "k": "K2",
   "loEn": "Explain how product risk analysis may influence thoroughness and test scope",
   "loVi": "Giải thích cách phân tích rủi ro sản phẩm có thể ảnh hưởng tới độ kỹ lưỡng và phạm vi kiểm thử",
   "sec": "5.2.3",
   "title": "Product Risk Analysis",
   "titleVi": "Phân tích rủi ro sản phẩm",
   "page": 52,
   "summary": [
    "Mục tiêu của phân tích rủi ro sản phẩm (product risk analysis) từ góc độ kiểm thử: nâng nhận thức về product risk để tập trung test effort sao cho mức rủi ro còn lại (residual risk) là nhỏ nhất. Lý tưởng là bắt đầu sớm trong SDLC.",
    "Gồm 2 bước: nhận diện rủi ro (risk identification) — tạo danh sách rủi ro toàn diện bằng brainstorming, workshop, phỏng vấn, sơ đồ nhân quả (cause-effect diagrams)…; và đánh giá rủi ro (risk assessment).",
    "Risk assessment gồm: phân loại (categorization) rủi ro, xác định likelihood, impact và risk level, ưu tiên hóa, đề xuất cách xử lý. Phân loại giúp gán hành động giảm thiểu vì rủi ro cùng loại thường giảm thiểu theo cách tương tự.",
    "Đánh giá có thể định lượng (quantitative: risk level = likelihood × impact), định tính (qualitative: dùng risk matrix), hoặc kết hợp.",
    "Kết quả product risk analysis được dùng để (6 mục): xác định phạm vi kiểm thử (test scope); xác định test level và đề xuất test type; xác định test technique và mức coverage cần đạt; ước lượng test effort cho từng task; ưu tiên kiểm thử để tìm defect nghiêm trọng càng sớm càng tốt; xác định có cần hoạt động nào ngoài kiểm thử để giảm rủi ro không."
   ],
   "en": [
    "The goal of product risk analysis is to provide an awareness of product risk to focus the test effort in a way that minimizes the residual level of product risk.",
    "Product risk analysis consists of risk identification and risk assessment.",
    "In the quantitative approach the risk level is calculated as the multiplication of risk likelihood and risk impact. In the qualitative approach the risk level can be determined using a risk matrix."
   ],
   "tips": [
    "Phân biệt: risk identification = LIỆT KÊ rủi ro (brainstorming, interview…); risk assessment = phân loại, tính likelihood/impact/level, ưu tiên, đề xuất xử lý.",
    "Rủi ro cao → kiểm thử kỹ hơn (kỹ thuật chặt hơn, coverage cao hơn, effort nhiều hơn, chạy sớm hơn) — đó là cách risk analysis ảnh hưởng 'thoroughness and test scope'."
   ],
   "terms": [
    "risk analysis",
    "risk identification",
    "risk assessment",
    "product risk",
    "risk level"
   ],
   "ch": 5
  },
  "FL-5.2.4": {
   "lo": "FL-5.2.4",
   "k": "K2",
   "loEn": "Explain what measures can be taken in response to analyzed product risks",
   "loVi": "Giải thích các biện pháp có thể thực hiện để ứng phó với các rủi ro sản phẩm đã phân tích",
   "sec": "5.2.4",
   "title": "Product Risk Control",
   "titleVi": "Kiểm soát rủi ro sản phẩm",
   "page": 53,
   "summary": [
    "Kiểm soát rủi ro sản phẩm (product risk control) gồm mọi biện pháp thực hiện để ứng phó với rủi ro đã nhận diện và đánh giá; gồm giảm thiểu rủi ro (risk mitigation) và giám sát rủi ro (risk monitoring).",
    "Risk mitigation: thực hiện các hành động đã đề xuất trong risk assessment để giảm risk level.",
    "Risk monitoring nhằm: đảm bảo các hành động giảm thiểu có hiệu quả; thu thêm thông tin để cải thiện risk assessment; nhận diện rủi ro mới phát sinh (emerging risks).",
    "Các phương án ứng phó sau khi phân tích: giảm thiểu bằng kiểm thử (risk mitigation by testing), chấp nhận rủi ro (risk acceptance), chuyển giao rủi ro (risk transfer), hoặc kế hoạch dự phòng (contingency plan).",
    "6 hành động giảm thiểu product risk bằng kiểm thử: chọn tester có kinh nghiệm và kỹ năng phù hợp với loại rủi ro; áp dụng mức độc lập kiểm thử phù hợp; thực hiện review và static analysis; áp dụng test technique và mức coverage phù hợp; áp dụng test type phù hợp với đặc tính chất lượng bị ảnh hưởng; thực hiện dynamic testing, kể cả regression testing."
   ],
   "en": [
    "Product risk control consists of risk mitigation and risk monitoring.",
    "Risk mitigation involves implementing the actions proposed in risk assessment to reduce the risk level.",
    "Several response options to risk are possible, e.g., risk mitigation by testing, risk acceptance, risk transfer, or a contingency plan."
   ],
   "tips": [
    "Phân biệt: mitigation = hành động GIẢM risk level; monitoring = THEO DÕI xem mitigation có hiệu quả và phát hiện rủi ro mới.",
    "Risk control (mitigation + monitoring) khác risk analysis (identification + assessment) — đề hay hỏi hoạt động nào thuộc nhóm nào."
   ],
   "terms": [
    "risk control",
    "risk mitigation",
    "risk monitoring",
    "product risk"
   ],
   "ch": 5
  },
  "FL-5.3.1": {
   "lo": "FL-5.3.1",
   "k": "K1",
   "loEn": "Recall metrics used for testing",
   "loVi": "Nhắc lại các chỉ số (metrics) dùng trong kiểm thử",
   "sec": "5.3.1",
   "title": "Metrics used in Testing",
   "titleVi": "Các chỉ số dùng trong kiểm thử",
   "page": 54,
   "summary": [
    "Bối cảnh 5.3: giám sát kiểm thử (test monitoring) thu thập thông tin về kiểm thử để đánh giá tiến độ và đo xem exit criteria đã thỏa chưa. Điều khiển kiểm thử (test control) dùng thông tin đó đưa ra chỉ thị điều khiển (control directives) và hành động khắc phục.",
    "Ví dụ control directives: ưu tiên lại test khi một rủi ro đã thành sự cố (issue); đánh giá lại test item có đạt entry/exit criteria do làm lại; điều chỉnh lịch kiểm thử khi môi trường kiểm thử giao trễ; bổ sung nguồn lực khi cần.",
    "Hoàn tất kiểm thử (test completion) thu thập dữ liệu từ hoạt động đã xong để tổng hợp kinh nghiệm, testware; diễn ra ở các mốc: xong test level, xong iteration, xong (hoặc hủy) dự án, phát hành hệ thống, xong bản phát hành bảo trì.",
    "Metrics dùng để thể hiện tiến độ so với lịch/ngân sách, chất lượng hiện tại của test object, và hiệu quả của hoạt động kiểm thử so với mục tiêu.",
    "7 nhóm metrics phổ biến: Tiến độ dự án (project progress: hoàn thành task, sử dụng nguồn lực, test effort); Tiến độ kiểm thử (test progress: tiến độ hiện thực test case, chuẩn bị môi trường, số test chạy/chưa chạy, pass/fail, thời gian thực thi); Chất lượng sản phẩm (product quality: availability, response time, mean time to failure); Defect (số lượng và độ ưu tiên defect tìm được/đã sửa, defect density, defect detection percentage); Rủi ro (risk: residual risk level); Coverage (requirements coverage, code coverage); Chi phí (cost: chi phí kiểm thử, chi phí chất lượng của tổ chức)."
   ],
   "en": [
    "Test monitoring is concerned with gathering information about testing.",
    "Test control uses the information from test monitoring to provide, in a form of the control directives, guidance and the necessary corrective actions.",
    "Test metrics are gathered to show progress against the planned test schedule and budget, the current quality of the test object, and the effectiveness of the test activities."
   ],
   "tips": [
    "Đề hay hỏi metric thuộc nhóm nào: 'mean time to failure' = product quality; 'defect density/defect detection percentage' = defect metrics; 'residual risk level' = risk; 'số test case pass/fail' = test progress.",
    "Monitoring = THU THẬP thông tin; control = HÀNH ĐỘNG điều chỉnh (control directives). Đừng đảo ngược."
   ],
   "terms": [
    "test monitoring",
    "test control"
   ],
   "ch": 5
  },
  "FL-5.3.2": {
   "lo": "FL-5.3.2",
   "k": "K2",
   "loEn": "Summarize the purposes, content, and audiences for test reports",
   "loVi": "Tóm tắt mục đích, nội dung và đối tượng của các báo cáo kiểm thử",
   "sec": "5.3.2",
   "title": "Purpose, Content and Audience for Test Reports",
   "titleVi": "Mục đích, nội dung và đối tượng của báo cáo kiểm thử",
   "page": 54,
   "summary": [
    "Báo cáo kiểm thử tóm tắt và truyền đạt thông tin kiểm thử trong và sau kiểm thử. Có 2 loại: báo cáo tiến độ (test progress report) và báo cáo hoàn tất (test completion report).",
    "Test progress report hỗ trợ test control liên tục, phải đủ thông tin để điều chỉnh lịch, nguồn lực hoặc test plan khi có sai lệch; thường lập định kỳ (hằng ngày, hằng tuần…).",
    "Nội dung test progress report (6 mục): giai đoạn kiểm thử (testing period); tiến độ (sớm/trễ so với lịch) kèm các sai lệch đáng chú ý; trở ngại và cách khắc phục tạm (impediments and workarounds); test metrics; rủi ro mới và thay đổi trong giai đoạn; kiểm thử dự kiến cho giai đoạn tiếp theo.",
    "Test completion report lập trong test completion, khi dự án/test level/test type hoàn tất và lý tưởng là exit criteria đã đạt; dùng các progress report và dữ liệu khác.",
    "Nội dung test completion report (7 mục): tóm tắt kiểm thử (test summary); đánh giá kiểm thử và chất lượng sản phẩm dựa trên test plan gốc (test objectives, exit criteria); sai lệch so với test plan (lịch, thời lượng, effort); trở ngại và workaround; test metrics dựa trên progress reports; rủi ro chưa giảm thiểu, defect chưa sửa; bài học kinh nghiệm (lessons learned).",
    "Đối tượng (audience) khác nhau cần thông tin khác nhau, ảnh hưởng mức trang trọng và tần suất: báo cáo tiến độ trong nhóm thường thường xuyên và không chính thức; báo cáo hoàn tất theo mẫu cố định và chỉ diễn ra một lần. ISO/IEC/IEEE 29119-3 có mẫu (progress report gọi là test status report)."
   ],
   "en": [
    "Test progress reports support the ongoing test control.",
    "Test completion reports summarize a specific test activity (e.g., test level, test cycle, iteration) and can give information for subsequent testing.",
    "Test progress reporting to others in the same team is often frequent and informal, while test completion reporting follows a set template and occurs only once."
   ],
   "tips": [
    "'Testing planned for the next period' chỉ có ở PROGRESS report; 'lessons learned', 'unmitigated risks, defects not fixed', 'evaluation based on the original test plan' là của COMPLETION report.",
    "Test status report (theo 29119-3) = test progress report."
   ],
   "terms": [
    "test progress report",
    "test completion report",
    "test monitoring",
    "test control"
   ],
   "ch": 5
  },
  "FL-5.3.3": {
   "lo": "FL-5.3.3",
   "k": "K2",
   "loEn": "Exemplify how to communicate the status of testing",
   "loVi": "Nêu ví dụ minh họa cách truyền đạt tình trạng kiểm thử",
   "sec": "5.3.3",
   "title": "Communicating the Status of Testing",
   "titleVi": "Truyền đạt tình trạng kiểm thử",
   "page": 55,
   "summary": [
    "Cách tốt nhất để truyền đạt tình trạng kiểm thử tùy thuộc vào mối quan tâm quản lý kiểm thử, chiến lược kiểm thử của tổ chức, chuẩn quy định (regulatory standards), hoặc — với nhóm tự tổ chức (self-organizing teams) — do chính nhóm quyết định.",
    "Các phương án (5): giao tiếp bằng lời với thành viên nhóm và stakeholders; dashboard (vd CI/CD dashboard, task board, biểu đồ burn-down); kênh điện tử (email, chat); tài liệu trực tuyến (online documentation); báo cáo kiểm thử chính thức (formal test reports).",
    "Có thể dùng một hoặc kết hợp nhiều phương án.",
    "Giao tiếp trang trọng hơn phù hợp với nhóm phân tán (distributed teams), khi không thể gặp trực tiếp do khoảng cách địa lý hoặc chênh lệch múi giờ.",
    "Các stakeholders khác nhau quan tâm tới thông tin khác nhau → nội dung giao tiếp cần được điều chỉnh (tailored) cho phù hợp."
   ],
   "en": [
    "Dashboards (e.g., CI/CD dashboards, task boards, and burn-down charts).",
    "More formal communication may be more appropriate for distributed teams where direct face-to-face communication is not always possible.",
    "Different stakeholders are interested in different types of information, so communication should be tailored accordingly."
   ],
   "tips": [
    "Câu hỏi tình huống: nhóm phân tán nhiều múi giờ → chọn phương án trang trọng hơn (formal report, tài liệu online) thay vì chỉ trao đổi miệng.",
    "Burn-down chart thuộc nhóm 'dashboards'."
   ],
   "terms": [
    "burn-down chart",
    "test progress report"
   ],
   "ch": 5
  },
  "FL-5.4.1": {
   "lo": "FL-5.4.1",
   "k": "K2",
   "loEn": "Summarize how configuration management supports testing",
   "loVi": "Tóm tắt cách quản lý cấu hình hỗ trợ kiểm thử",
   "sec": "5.4",
   "title": "Configuration Management",
   "titleVi": "Quản lý cấu hình",
   "page": 56,
   "summary": [
    "Trong kiểm thử, quản lý cấu hình (configuration management – CM) cung cấp kỷ luật để nhận diện, kiểm soát và theo dõi các work product như test plan, test strategy, test condition, test case, test script, test result, test log, test report — dưới dạng các mục cấu hình (configuration items).",
    "Với configuration item phức tạp (vd test environment), CM ghi lại các thành phần cấu thành, quan hệ giữa chúng và phiên bản.",
    "Khi configuration item được phê duyệt để kiểm thử, nó trở thành đường cơ sở (baseline) và chỉ có thể thay đổi qua quy trình kiểm soát thay đổi chính thức (formal change control process).",
    "CM lưu lại các configuration item đã thay đổi khi tạo baseline mới; có thể quay lại baseline trước để tái tạo kết quả kiểm thử trước đó.",
    "Để hỗ trợ kiểm thử, CM đảm bảo: (1) mọi configuration item, kể cả test item, được định danh duy nhất, quản lý phiên bản, theo dõi thay đổi và liên kết với nhau để duy trì truy vết (traceability) suốt quá trình kiểm thử; (2) mọi tài liệu và phần mềm được tham chiếu rõ ràng, không mơ hồ trong testware.",
    "CI, continuous delivery, continuous deployment và kiểm thử liên quan thường được triển khai trong pipeline DevOps tự động, trong đó thường có CM tự động."
   ],
   "en": [
    "Configuration management (CM) provides a discipline for identifying, controlling, and tracking work products … as configuration items.",
    "If the configuration item is approved for testing, it becomes a baseline and can only be changed through a formal change control process.",
    "It is possible to revert to a previous baseline to reproduce previous test results."
   ],
   "tips": [
    "Lợi ích then chốt: định danh duy nhất + version control + traceability + tái tạo kết quả cũ (revert baseline). Đáp án nói CM 'tìm defect' hay 'ưu tiên test' là sai.",
    "CM quản lý cả testware (test case, test log, report…), không chỉ source code."
   ],
   "terms": [
    "configuration management",
    "baseline"
   ],
   "ch": 5
  },
  "FL-5.5.1": {
   "lo": "FL-5.5.1",
   "k": "K3",
   "loEn": "Prepare a defect report",
   "loVi": "Lập một báo cáo lỗi",
   "sec": "5.5",
   "title": "Defect Management",
   "titleVi": "Quản lý lỗi",
   "page": 56,
   "summary": [
    "Quản lý lỗi (defect management) cần một quy trình được thiết lập. Bất thường (anomaly) được báo cáo có thể là defect thật hoặc thứ khác (vd kết quả dương tính giả – false positive, yêu cầu thay đổi – change request); điều này được giải quyết khi xử lý defect report. Anomaly có thể được báo cáo ở bất kỳ giai đoạn nào của SDLC.",
    "Tối thiểu, quy trình gồm workflow xử lý từng defect từ khi phát hiện đến khi đóng và quy tắc phân loại. Workflow điển hình: ghi nhận (log) → phân tích và phân loại → quyết định phản hồi (sửa hay giữ nguyên) → đóng defect report. Mọi stakeholders phải tuân theo; nên xử lý defect từ static testing (đặc biệt static analysis) tương tự.",
    "3 mục tiêu của defect report: cung cấp đủ thông tin cho người chịu trách nhiệm xử lý để giải quyết vấn đề; là phương tiện theo dõi chất lượng work product; đưa ra ý tưởng cải tiến quy trình phát triển và kiểm thử.",
    "Nội dung defect report trong dynamic testing (phần 1): (1) mã định danh duy nhất (unique identifier); (2) tiêu đề với tóm tắt ngắn về anomaly; (3) ngày quan sát, tổ chức phát hành, tác giả kèm vai trò; (4) định danh test object và test environment; (5) bối cảnh defect (test case đang chạy, hoạt động kiểm thử, giai đoạn SDLC, kỹ thuật/checklist/test data đang dùng).",
    "Nội dung defect report (phần 2): (6) mô tả failure để tái hiện và giải quyết — các bước kiểm thử phát hiện anomaly, test log, database dump, ảnh chụp màn hình, bản ghi; (7) kết quả mong đợi (expected results) và kết quả thực tế (actual results); (8) mức độ nghiêm trọng (severity – mức tác động tới lợi ích stakeholders hoặc yêu cầu); (9) độ ưu tiên sửa (priority to fix); (10) trạng thái (status: open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected); (11) tham chiếu (references, vd tới test case).",
    "Một số dữ liệu có thể được công cụ quản lý defect tự điền (identifier, ngày, tác giả, trạng thái ban đầu). ISO/IEC/IEEE 29119-3 gọi defect report là incident report.",
    "Ví dụ: ID BUG-102; Tiêu đề 'Tổng giỏ hàng sai khi áp mã giảm 10%'; Môi trường: Chrome 120, staging build 3.2; Bước: thêm SP 200.000đ → nhập mã SALE10 → xem tổng; Mong đợi 180.000đ; Thực tế 200.000đ; Severity: High; Priority: High; Status: Open; Reference: TC-45."
   ],
   "en": [
    "Although we refer to \"defects\" here, the reported anomalies may turn out to be real defects or something else (e.g., false-positive result, change request).",
    "Provide those responsible for handling and resolving reported defects with sufficient information to resolve the issue.",
    "Description of the failure to enable reproduction and resolution including the test steps that detected the anomaly.",
    "Severity of the defect (degree of impact) on the interests of stakeholders or requirements."
   ],
   "tips": [
    "Severity = mức độ tác động (kỹ thuật/nghiệp vụ); priority = mức khẩn cấp cần sửa. Hai cái có thể khác nhau (vd lỗi chính tả logo: severity thấp, priority cao).",
    "Câu K3 thường cho một defect report và hỏi 'thiếu thông tin quan trọng nào' — kiểm tra: bước tái hiện, expected vs actual, môi trường/test object, severity/priority. 'Đề xuất cách sửa code' hay 'tên người gây lỗi' KHÔNG phải nội dung bắt buộc."
   ],
   "terms": [
    "defect management",
    "defect report",
    "severity",
    "priority"
   ],
   "ch": 5
  },
  "FL-6.1.1": {
   "lo": "FL-6.1.1",
   "k": "K2",
   "loEn": "Explain how different types of test tools support testing",
   "loVi": "Giải thích các loại công cụ kiểm thử khác nhau hỗ trợ việc kiểm thử như thế nào",
   "sec": "6.1",
   "title": "Tool Support for Testing",
   "titleVi": "Công cụ hỗ trợ kiểm thử",
   "page": 59,
   "summary": [
    "Công cụ kiểm thử (test tools) hỗ trợ và tạo thuận lợi cho nhiều hoạt động kiểm thử. Syllabus liệt kê các nhóm sau (danh sách ví dụ, không giới hạn):",
    "Công cụ quản lý kiểm thử (test management tools): tăng hiệu quả quy trình kiểm thử bằng cách hỗ trợ quản lý SDLC, yêu cầu (requirements), test, lỗi (defects), cấu hình (configuration).",
    "Công cụ kiểm thử tĩnh (static testing tools): hỗ trợ tester thực hiện review và phân tích tĩnh (static analysis).",
    "Công cụ thiết kế và triển khai kiểm thử (test design and test implementation tools): hỗ trợ sinh test case, dữ liệu kiểm thử (test data) và thủ tục kiểm thử (test procedures).",
    "Công cụ thực thi kiểm thử và đo độ bao phủ (test execution and test coverage tools): hỗ trợ thực thi test tự động và đo độ bao phủ (coverage).",
    "Công cụ kiểm thử phi chức năng (non-functional testing tools): cho phép thực hiện kiểm thử phi chức năng khó hoặc không thể làm thủ công (vd tạo tải lớn cho performance test).",
    "Công cụ DevOps (DevOps tools): hỗ trợ pipeline phân phối DevOps, theo dõi luồng công việc (workflow tracking), quy trình build tự động, CI/CD. Công cụ cộng tác (collaboration tools): hỗ trợ giao tiếp.",
    "Công cụ hỗ trợ khả năng mở rộng và chuẩn hóa triển khai (tools supporting scalability and deployment standardization), vd máy ảo (virtual machines), công cụ container hóa (containerization tools); và bất kỳ công cụ nào khác hỗ trợ kiểm thử — vd bảng tính (spreadsheet) cũng là test tool trong bối cảnh kiểm thử."
   ],
   "en": [
    "Test tools support and facilitate many test activities.",
    "Test management tools – increase the test process efficiency by facilitating management of the SDLC, requirements, tests, defects, configuration.",
    "Non-functional testing tools – allow the tester to perform non-functional testing that is difficult or impossible to perform manually.",
    "Any other tool that assists in testing (e.g., a spreadsheet is a test tool in the context of testing)."
   ],
   "tips": [
    "Đề hay cho mô tả chức năng rồi hỏi loại công cụ: 'sinh test data/test case' → test design and implementation tools; 'đo coverage, chạy test tự động' → test execution and coverage tools; 'review, phân tích tĩnh' → static testing tools; 'quản lý requirements, defects, configuration' → test management tools; 'máy ảo, container' → scalability and deployment standardization; 'CI/CD, build tự động' → DevOps tools.",
    "Bẫy: nghĩ rằng chỉ phần mềm chuyên dụng mới là test tool. Syllabus nói rõ cả spreadsheet cũng là test tool khi dùng cho kiểm thử."
   ],
   "terms": [
    "test management tools",
    "static testing tools",
    "test design and test implementation tools",
    "test execution and test coverage tools",
    "non-functional testing tools",
    "devops tools",
    "collaboration tools",
    "tools supporting scalability and deployment standardization",
    "containerization"
   ],
   "ch": 6
  },
  "FL-6.2.1": {
   "lo": "FL-6.2.1",
   "k": "K1",
   "loEn": "Recall the benefits and risks of test automation",
   "loVi": "Nhắc lại các lợi ích và rủi ro của tự động hóa kiểm thử",
   "sec": "6.2",
   "title": "Benefits and Risks of Test Automation",
   "titleVi": "Lợi ích và rủi ro của tự động hóa kiểm thử",
   "page": 59,
   "summary": [
    "Chỉ mua công cụ thì không đảm bảo thành công: mỗi công cụ mới cần công sức để đạt lợi ích thực sự và lâu dài (vd giới thiệu công cụ, bảo trì, đào tạo); đồng thời có rủi ro cần phân tích và giảm thiểu.",
    "Lợi ích (1–3): (1) Tiết kiệm thời gian nhờ giảm việc thủ công lặp lại (chạy regression test, nhập lại cùng test data, so sánh kết quả mong đợi với thực tế, kiểm tra theo coding standards); (2) Ngăn lỗi đơn giản của con người nhờ tính nhất quán và lặp lại được (consistency, repeatability) — test được dẫn xuất nhất quán từ requirements, test data tạo có hệ thống, tool chạy test cùng thứ tự, cùng tần suất; (3) Đánh giá khách quan hơn (vd coverage) và cung cấp các phép đo quá phức tạp để con người tự xác định.",
    "Lợi ích (4–6): (4) Dễ truy cập thông tin kiểm thử để hỗ trợ quản lý và báo cáo (thống kê, biểu đồ, dữ liệu tổng hợp về tiến độ, tỉ lệ fail, thời gian thực thi); (5) Giảm thời gian thực thi test → phát hiện lỗi sớm hơn, phản hồi nhanh hơn, ra thị trường nhanh hơn (time to market); (6) Tester có nhiều thời gian hơn để thiết kế test mới, sâu hơn, hiệu quả hơn.",
    "Rủi ro (1–4): (1) Kỳ vọng không thực tế về lợi ích của công cụ (kể cả chức năng và độ dễ dùng); (2) Ước lượng sai thời gian, chi phí, công sức để giới thiệu công cụ, bảo trì test script và thay đổi quy trình kiểm thử thủ công hiện có; (3) Dùng công cụ khi kiểm thử thủ công phù hợp hơn; (4) Phụ thuộc quá nhiều vào công cụ, vd bỏ qua nhu cầu tư duy phản biện (critical thinking) của con người.",
    "Rủi ro (5–6): (5) Phụ thuộc vào nhà cung cấp công cụ (tool vendor) — có thể phá sản, ngừng công cụ, bán cho vendor khác hoặc hỗ trợ kém (trả lời câu hỏi, nâng cấp, sửa lỗi); (6) Dùng phần mềm mã nguồn mở (open-source) có thể bị bỏ rơi (không còn cập nhật), hoặc các thành phần bên trong cần cập nhật khá thường xuyên.",
    "Rủi ro (7–8): (7) Công cụ automation không tương thích với nền tảng phát triển (development platform); (8) Chọn công cụ không phù hợp, không tuân thủ yêu cầu pháp quy (regulatory requirements) và/hoặc tiêu chuẩn an toàn (safety standards)."
   ],
   "en": [
    "Simply acquiring a tool does not guarantee success.",
    "Each new tool will require effort to achieve real and lasting benefits (e.g., for tool introduction, maintenance and training).",
    "Prevention of simple human errors through greater consistency and repeatability.",
    "Relying on a tool too much, e.g., ignoring the need of human critical thinking."
   ],
   "tips": [
    "Câu hỏi K1 dạng 'Which of the following is a BENEFIT/RISK of test automation?': lợi ích xoay quanh tiết kiệm thời gian, nhất quán, khách quan, dễ báo cáo, phản hồi nhanh, tester rảnh để thiết kế test tốt hơn; rủi ro xoay quanh kỳ vọng ảo, ước lượng sai, lạm dụng tool, phụ thuộc vendor/open-source, không tương thích, không tuân thủ quy định.",
    "Bẫy: các phương án như 'automation thay thế hoàn toàn tester', 'không cần bảo trì script', 'tìm được mọi lỗi' đều SAI. 'Prevention of simple human errors' là LỢI ÍCH, còn 'relying on a tool too much' là RỦI RO."
   ],
   "terms": [
    "test automation",
    "tool vendor",
    "open-source software"
   ],
   "ch": 6
  }
 },
 "glossary": [
  {
   "en": "coverage",
   "vi": "độ bao phủ",
   "def": "Mức độ (thường tính bằng %) mà các phần tử bao phủ (coverage item) đã được xác định được thực thi/kiểm tra bởi bộ test.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "debugging",
   "vi": "gỡ lỗi",
   "def": "Quá trình tìm, phân tích và loại bỏ nguyên nhân (defect) gây ra failure; gồm tái hiện, chẩn đoán và sửa. Là hoạt động không thuộc kiểm thử.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "defect",
   "vi": "khiếm khuyết (lỗi trong sản phẩm)",
   "def": "Sai sót hoặc thiếu sót trong một sản phẩm công việc (code, tài liệu...) khiến nó không đáp ứng yêu cầu hoặc đặc tả; còn gọi là fault hay bug.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "error",
   "vi": "lỗi do con người (sai lầm)",
   "def": "Hành động của con người tạo ra kết quả sai; còn gọi là mistake. Error tạo ra defect.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "failure",
   "vi": "lỗi vận hành (sự cố)",
   "def": "Sự kiện hệ thống hoặc thành phần không thực hiện chức năng yêu cầu trong giới hạn đã định, quan sát được khi chạy phần mềm; do defect hoặc điều kiện môi trường gây ra.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "quality",
   "vi": "chất lượng",
   "def": "Mức độ mà sản phẩm đáp ứng các yêu cầu đã nêu và nhu cầu ngầm định của các bên liên quan.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "quality assurance",
   "vi": "đảm bảo chất lượng (QA)",
   "def": "Cách tiếp cận hướng quy trình, mang tính phòng ngừa, tập trung triển khai và cải tiến quy trình để tạo ra sản phẩm tốt; là trách nhiệm của mọi người trong dự án.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "root cause",
   "vi": "nguyên nhân gốc",
   "def": "Lý do nền tảng khiến một vấn đề xảy ra (vd tình huống dẫn tới error); xử lý nó giúp ngăn ngừa hoặc giảm các failure/defect tương tự.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test analysis",
   "vi": "phân tích kiểm thử",
   "def": "Hoạt động phân tích test basis để xác định tính năng có thể test, định nghĩa và ưu tiên test condition; trả lời câu hỏi “test cái gì?”.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test basis",
   "vi": "cơ sở kiểm thử",
   "def": "Tri thức/tài liệu được dùng làm nền tảng cho phân tích và thiết kế kiểm thử, vd đặc tả yêu cầu, user story, thiết kế.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test case",
   "vi": "ca kiểm thử",
   "def": "Tập hợp điều kiện tiên quyết, đầu vào, hành động, kết quả mong đợi và điều kiện sau, được xây dựng từ test condition.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test completion",
   "vi": "hoàn tất kiểm thử",
   "def": "Hoạt động tại các mốc dự án: xử lý defect còn tồn, lưu trữ/bàn giao testware, đưa môi trường test về trạng thái thỏa thuận, rút bài học và lập báo cáo hoàn tất kiểm thử.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test condition",
   "vi": "điều kiện kiểm thử",
   "def": "Một khía cạnh có thể kiểm thử của thành phần hoặc hệ thống, được xác định trong test analysis làm cơ sở cho kiểm thử (vd một acceptance criterion).",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test control",
   "vi": "kiểm soát kiểm thử",
   "def": "Hoạt động thực hiện các hành động cần thiết (chỉ thị điều chỉnh) để đạt mục tiêu kiểm thử dựa trên thông tin giám sát.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test data",
   "vi": "dữ liệu kiểm thử",
   "def": "Dữ liệu cần thiết để thực thi test; được tạo hoặc thu thập trong test implementation.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test design",
   "vi": "thiết kế kiểm thử",
   "def": "Hoạt động chi tiết hóa test condition thành test case và testware khác, xác định coverage item, yêu cầu dữ liệu và môi trường test; trả lời câu hỏi “test như thế nào?”.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test execution",
   "vi": "thực thi kiểm thử",
   "def": "Hoạt động chạy test theo lịch, so sánh kết quả thực tế với mong đợi, ghi log và phân tích bất thường để báo cáo.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test implementation",
   "vi": "triển khai kiểm thử",
   "def": "Hoạt động tạo/thu thập testware cần cho thực thi: test procedure, test suite, script, test data, lịch thực thi, và dựng môi trường test.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test monitoring",
   "vi": "giám sát kiểm thử",
   "def": "Hoạt động kiểm tra liên tục mọi hoạt động kiểm thử và so sánh tiến độ thực tế với kế hoạch.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test object",
   "vi": "đối tượng kiểm thử",
   "def": "Sản phẩm công việc (phần mềm, thành phần, tài liệu...) đang được kiểm thử.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test objective",
   "vi": "mục tiêu kiểm thử",
   "def": "Lý do hay mục đích của việc kiểm thử, vd tìm defect, xây dựng niềm tin, giảm rủi ro; thay đổi theo bối cảnh.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test planning",
   "vi": "lập kế hoạch kiểm thử",
   "def": "Hoạt động xác định mục tiêu kiểm thử và chọn cách tiếp cận đạt mục tiêu tốt nhất trong các ràng buộc của bối cảnh.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test procedure",
   "vi": "thủ tục kiểm thử",
   "def": "Chuỗi các test case theo thứ tự thực hiện, kèm các hành động cần thiết để chuẩn bị và kết thúc.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test process",
   "vi": "quy trình kiểm thử",
   "def": "Tập các hoạt động kiểm thử (planning, monitoring & control, analysis, design, implementation, execution, completion), được điều chỉnh theo bối cảnh.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "test result",
   "vi": "kết quả kiểm thử",
   "def": "Hệ quả/kết luận của việc thực thi test (vd pass/fail); được testing dùng để sửa defect và QA dùng để phản hồi về quy trình.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "testing",
   "vi": "kiểm thử",
   "def": "Tập hợp các hoạt động nhằm phát hiện defect và đánh giá chất lượng của sản phẩm công việc phần mềm; gồm cả kiểm thử tĩnh và động.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "testware",
   "vi": "sản phẩm kiểm thử",
   "def": "Các sản phẩm công việc được tạo ra trong quá trình kiểm thử, vd test plan, test case, test data, test log, báo cáo.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "traceability",
   "vi": "khả năng truy vết",
   "def": "Mối liên kết được duy trì giữa các phần tử test basis, testware (test condition, test case, rủi ro), kết quả test và defect; hỗ trợ đánh giá coverage và phân tích tác động.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "validation",
   "vi": "thẩm định",
   "def": "Kiểm tra xem hệ thống có đáp ứng nhu cầu của người dùng và các bên liên quan trong môi trường vận hành thực tế hay không.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "verification",
   "vi": "xác minh",
   "def": "Kiểm tra xem hệ thống có đáp ứng các yêu cầu đã đặc tả hay không.",
   "kw": true,
   "ch": 1
  },
  {
   "en": "quality control",
   "vi": "kiểm soát chất lượng (QC)",
   "def": "Các hoạt động hướng sản phẩm, mang tính khắc phục nhằm đạt mức chất lượng phù hợp; kiểm thử là hình thức chính của QC.",
   "kw": false,
   "ch": 1
  },
  {
   "en": "root cause analysis",
   "vi": "phân tích nguyên nhân gốc",
   "def": "Kỹ thuật xác định root cause của vấn đề, thường thực hiện khi xảy ra failure hoặc phát hiện defect.",
   "kw": false,
   "ch": 1
  },
  {
   "en": "test suite",
   "vi": "bộ kiểm thử",
   "def": "Tập hợp các test procedure/test script được gom lại để thực thi trong một lần chạy.",
   "kw": false,
   "ch": 1
  },
  {
   "en": "risk register",
   "vi": "sổ đăng ký rủi ro",
   "def": "Danh sách rủi ro kèm khả năng xảy ra, mức tác động và thông tin giảm thiểu; thường là một phần của test plan.",
   "kw": false,
   "ch": 1
  },
  {
   "en": "pareto principle",
   "vi": "nguyên lý Pareto",
   "def": "Nguyên lý “số ít quan trọng”: một số ít thành phần chứa phần lớn defect; minh họa cho nguyên tắc “Defects cluster together”.",
   "kw": false,
   "ch": 1
  },
  {
   "en": "test management role",
   "vi": "vai trò quản lý kiểm thử",
   "def": "Vai trò chịu trách nhiệm tổng thể về quy trình, đội và lãnh đạo hoạt động kiểm thử; tập trung vào planning, monitoring, control và completion.",
   "kw": false,
   "ch": 1
  },
  {
   "en": "testing role",
   "vi": "vai trò kiểm thử",
   "def": "Vai trò chịu trách nhiệm khía cạnh kỹ thuật của kiểm thử; tập trung vào analysis, design, implementation và execution.",
   "kw": false,
   "ch": 1
  },
  {
   "en": "whole team approach",
   "vi": "cách tiếp cận cả nhóm",
   "def": "Thực hành từ Extreme Programming, trong đó bất kỳ thành viên nào đủ năng lực đều có thể làm mọi việc và mọi người cùng chịu trách nhiệm về chất lượng.",
   "kw": false,
   "ch": 1
  },
  {
   "en": "independence of testing",
   "vi": "tính độc lập của kiểm thử",
   "def": "Mức tách biệt giữa người kiểm thử và tác giả sản phẩm (từ không độc lập đến độc lập rất cao), giúp giảm ảnh hưởng của thiên kiến tác giả.",
   "kw": false,
   "ch": 1
  },
  {
   "en": "confirmation bias",
   "vi": "thiên kiến xác nhận",
   "def": "Xu hướng khó chấp nhận thông tin trái với niềm tin hiện có; khiến kết quả kiểm thử dễ bị bác bỏ, nên tester cần truyền đạt một cách xây dựng.",
   "kw": false,
   "ch": 1
  },
  {
   "en": "acceptance testing",
   "vi": "kiểm thử chấp nhận",
   "def": "Cấp độ kiểm thử tập trung vào xác thực (validation) và chứng minh hệ thống sẵn sàng triển khai, tức đáp ứng nhu cầu nghiệp vụ của người dùng; lý tưởng do người dùng dự kiến thực hiện.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "black-box testing",
   "vi": "kiểm thử hộp đen",
   "def": "Loại kiểm thử dựa trên đặc tả, suy ra test từ tài liệu không liên quan đến cấu trúc bên trong của đối tượng kiểm thử; mục tiêu là kiểm tra hành vi hệ thống so với đặc tả.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "component integration testing",
   "vi": "kiểm thử tích hợp thành phần",
   "def": "Cấp độ kiểm thử tập trung vào giao diện và tương tác giữa các thành phần (còn gọi unit integration testing); phụ thuộc nhiều vào chiến lược tích hợp như bottom-up, top-down, big-bang.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "component testing",
   "vi": "kiểm thử thành phần",
   "def": "Cấp độ kiểm thử tập trung vào từng thành phần một cách cô lập (còn gọi unit testing); thường cần test harness hoặc unit test framework và thường do developer thực hiện.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "confirmation testing",
   "vi": "kiểm thử xác nhận",
   "def": "Kiểm thử nhằm xác nhận rằng lỗi gốc đã được sửa thành công, vd chạy lại các test từng fail do lỗi đó hoặc thêm test mới cho phần sửa.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "functional testing",
   "vi": "kiểm thử chức năng",
   "def": "Kiểm thử đánh giá các chức năng mà thành phần hoặc hệ thống phải thực hiện ('cái gì'); kiểm tra tính đầy đủ, đúng đắn và phù hợp của chức năng.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "integration testing",
   "vi": "kiểm thử tích hợp",
   "def": "Kiểm thử tập trung vào giao diện và tương tác giữa các thành phần hoặc hệ thống; gồm hai cấp độ: component integration testing và system integration testing.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "maintenance testing",
   "vi": "kiểm thử bảo trì",
   "def": "Kiểm thử các thay đổi trên hệ thống đang vận hành, gồm đánh giá việc triển khai thay đổi và kiểm tra hồi quy; được kích hoạt bởi sửa đổi, nâng cấp/di chuyển môi trường, hoặc ngừng sử dụng hệ thống.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "non-functional testing",
   "vi": "kiểm thử phi chức năng",
   "def": "Kiểm thử đánh giá các thuộc tính ngoài chức năng – hệ thống hoạt động 'tốt như thế nào', vd hiệu năng, tương thích, khả dụng, tin cậy, bảo mật, bảo trì, di chuyển, an toàn (ISO/IEC 25010).",
   "kw": true,
   "ch": 2
  },
  {
   "en": "regression testing",
   "vi": "kiểm thử hồi quy",
   "def": "Kiểm thử xác nhận rằng một thay đổi (kể cả bản sửa lỗi) không gây hậu quả bất lợi cho chính thành phần đó, thành phần khác, hệ thống kết nối hoặc môi trường; là ứng viên mạnh cho tự động hóa.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "shift left",
   "vi": "dịch chuyển sang trái",
   "def": "Cách tiếp cận thực hiện kiểm thử sớm hơn trong SDLC (nguyên tắc early testing), nhưng không bỏ qua kiểm thử ở giai đoạn sau; tốn thêm chi phí lúc đầu nhưng tiết kiệm về sau.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "system integration testing",
   "vi": "kiểm thử tích hợp hệ thống",
   "def": "Cấp độ kiểm thử tập trung vào giao diện giữa hệ thống đang kiểm thử với các hệ thống khác và dịch vụ bên ngoài; cần môi trường kiểm thử gần giống môi trường vận hành.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "system testing",
   "vi": "kiểm thử hệ thống",
   "def": "Cấp độ kiểm thử tập trung vào hành vi và năng lực tổng thể của toàn bộ hệ thống/sản phẩm, gồm kiểm thử chức năng end-to-end và kiểm thử phi chức năng; có thể do nhóm kiểm thử độc lập thực hiện.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "test level",
   "vi": "cấp độ kiểm thử",
   "def": "Nhóm hoạt động kiểm thử được tổ chức và quản lý cùng nhau, là một thể hiện của quy trình kiểm thử cho phần mềm ở một giai đoạn phát triển (component, component integration, system, system integration, acceptance).",
   "kw": true,
   "ch": 2
  },
  {
   "en": "test type",
   "vi": "loại kiểm thử",
   "def": "Nhóm hoạt động kiểm thử liên quan đến các đặc tính chất lượng cụ thể, phần lớn có thể thực hiện ở mọi cấp độ kiểm thử (vd functional, non-functional, black-box, white-box).",
   "kw": true,
   "ch": 2
  },
  {
   "en": "white-box testing",
   "vi": "kiểm thử hộp trắng",
   "def": "Loại kiểm thử dựa trên cấu trúc, suy ra test từ cài đặt hoặc cấu trúc bên trong (code, kiến trúc, luồng công việc, luồng dữ liệu); mục tiêu là bao phủ cấu trúc đến mức chấp nhận được.",
   "kw": true,
   "ch": 2
  },
  {
   "en": "software development lifecycle",
   "vi": "vòng đời phát triển phần mềm (SDLC)",
   "def": "Quy trình phát triển phần mềm; mô hình SDLC là biểu diễn trừu tượng, mức cao định nghĩa quan hệ logic và thời gian giữa các giai đoạn và hoạt động (vd waterfall, V-model, spiral, Unified Process).",
   "kw": false,
   "ch": 2
  },
  {
   "en": "test-driven development",
   "vi": "phát triển hướng kiểm thử (TDD)",
   "def": "Cách tiếp cận dẫn dắt việc viết code bằng test case: viết test trước, viết code để thỏa test, rồi refactor cả test và code.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "behavior-driven development",
   "vi": "phát triển hướng hành vi (BDD)",
   "def": "Cách tiếp cận diễn đạt hành vi mong muốn bằng test case viết ở ngôn ngữ tự nhiên đơn giản (thường dạng Given/When/Then), dễ hiểu với stakeholder, sau đó được chuyển tự động thành test thực thi được.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "devops",
   "vi": "DevOps",
   "def": "Cách tiếp cận tổ chức đưa phát triển (gồm kiểm thử) và vận hành cùng làm việc vì mục tiêu chung; thúc đẩy tự chủ nhóm, phản hồi nhanh, chuỗi công cụ tích hợp và CI/CD.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "continuous integration",
   "vi": "tích hợp liên tục (CI)",
   "def": "Thực hành tích hợp và kiểm tra code thường xuyên một cách tự động; khuyến khích developer nộp code kèm component test và phân tích tĩnh, thúc đẩy shift left.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "continuous delivery",
   "vi": "chuyển giao liên tục (CD)",
   "def": "Thực hành tự động hóa qua delivery pipeline để có thể build, test và phát hành phần mềm nhanh, thường xuyên; mang lại phản hồi nhanh.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "retrospective",
   "vi": "họp nhìn lại (retrospective)",
   "def": "Buổi họp (cuối dự án, cuối iteration, mốc release hoặc khi cần) để thảo luận điều gì thành công, điều gì cần cải thiện và cách áp dụng cải tiến; kết quả thường nằm trong test completion report.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "user acceptance testing",
   "vi": "kiểm thử chấp nhận người dùng (UAT)",
   "def": "Dạng kiểm thử chấp nhận do người dùng dự kiến thực hiện, nhằm xác thực hệ thống đáp ứng nhu cầu nghiệp vụ của họ.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "operational acceptance testing",
   "vi": "kiểm thử chấp nhận vận hành",
   "def": "Dạng kiểm thử chấp nhận tập trung vào việc hệ thống sẵn sàng cho vận hành trong môi trường vận hành (thường do bộ phận vận hành/quản trị hệ thống thực hiện).",
   "kw": false,
   "ch": 2
  },
  {
   "en": "contractual acceptance testing",
   "vi": "kiểm thử chấp nhận theo hợp đồng",
   "def": "Dạng kiểm thử chấp nhận kiểm tra hệ thống so với các tiêu chí chấp nhận đã ghi trong hợp đồng.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "regulatory acceptance testing",
   "vi": "kiểm thử chấp nhận theo quy định",
   "def": "Dạng kiểm thử chấp nhận kiểm tra hệ thống tuân thủ luật, quy định hoặc tiêu chuẩn bắt buộc (vd của cơ quan nhà nước, an toàn).",
   "kw": false,
   "ch": 2
  },
  {
   "en": "alpha testing",
   "vi": "kiểm thử alpha",
   "def": "Dạng kiểm thử chấp nhận do người dùng/khách hàng tiềm năng thực hiện tại địa điểm của tổ chức phát triển.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "beta testing",
   "vi": "kiểm thử beta",
   "def": "Dạng kiểm thử chấp nhận do người dùng/khách hàng tiềm năng thực hiện tại địa điểm của chính họ, trước khi phát hành rộng rãi.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "impact analysis",
   "vi": "phân tích tác động",
   "def": "Phân tích xác định những phần nào của phần mềm có thể bị ảnh hưởng bởi một thay đổi; dùng để xác định phạm vi kiểm thử hồi quy và giúp quyết định có nên thực hiện thay đổi trong bảo trì.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "test harness",
   "vi": "khung chạy kiểm thử (test harness)",
   "def": "Môi trường hỗ trợ gồm stub, driver và công cụ cần để chạy test cho thành phần một cách cô lập; thường dùng trong component testing.",
   "kw": false,
   "ch": 2
  },
  {
   "en": "anomaly",
   "vi": "bất thường",
   "def": "Một điều kiện sai lệch so với kỳ vọng (dựa trên yêu cầu, tiêu chuẩn, kinh nghiệm...). Anomaly phát hiện trong review chưa chắc là defect, cần được phân tích và thảo luận.",
   "kw": true,
   "ch": 3
  },
  {
   "en": "dynamic testing",
   "vi": "kiểm thử động",
   "def": "Kiểm thử có thực thi phần mềm đang được kiểm thử; gây ra failure rồi phân tích để tìm defect, chỉ áp dụng cho sản phẩm thực thi được.",
   "kw": true,
   "ch": 3
  },
  {
   "en": "formal review",
   "vi": "review chính thức",
   "def": "Loại review tuân theo quy trình được định nghĩa, có đầu ra được ghi thành tài liệu (vd technical review, inspection).",
   "kw": true,
   "ch": 3
  },
  {
   "en": "informal review",
   "vi": "review không chính thức",
   "def": "Loại review không theo quy trình xác định và không yêu cầu đầu ra tài liệu hình thức; mục tiêu chính là phát hiện anomaly.",
   "kw": true,
   "ch": 3
  },
  {
   "en": "inspection",
   "vi": "thanh tra (inspection)",
   "def": "Loại review hình thức nhất, theo đầy đủ quy trình review chung, mục tiêu chính là tìm số anomaly tối đa, có thu thập metrics; tác giả không được làm review leader hay scribe.",
   "kw": true,
   "ch": 3
  },
  {
   "en": "review",
   "vi": "rà soát / đánh giá (review)",
   "def": "Một dạng kiểm thử tĩnh trong đó con người kiểm tra thủ công sản phẩm công việc để tìm anomaly, đánh giá chất lượng hoặc đạt mục tiêu khác.",
   "kw": true,
   "ch": 3
  },
  {
   "en": "static analysis",
   "vi": "phân tích tĩnh",
   "def": "Kiểm thử tĩnh bằng công cụ, đánh giá sản phẩm có cấu trúc (code, mô hình, văn bản có cú pháp hình thức) mà không thực thi; thường tích hợp vào CI.",
   "kw": true,
   "ch": 3
  },
  {
   "en": "static testing",
   "vi": "kiểm thử tĩnh",
   "def": "Kiểm thử không cần thực thi phần mềm, đánh giá sản phẩm công việc bằng review thủ công hoặc phân tích tĩnh bằng công cụ.",
   "kw": true,
   "ch": 3
  },
  {
   "en": "technical review",
   "vi": "review kỹ thuật",
   "def": "Loại review do các reviewer có chuyên môn kỹ thuật thực hiện, do moderator dẫn dắt; mục tiêu chính là đạt đồng thuận và ra quyết định về vấn đề kỹ thuật.",
   "kw": true,
   "ch": 3
  },
  {
   "en": "walkthrough",
   "vi": "duyệt qua (walkthrough)",
   "def": "Loại review do tác giả dẫn dắt, phục vụ nhiều mục tiêu như đánh giá chất lượng, đào tạo reviewer, đạt đồng thuận, tạo ý tưởng mới, phát hiện anomaly; review cá nhân trước là không bắt buộc.",
   "kw": true,
   "ch": 3
  },
  {
   "en": "unreachable code",
   "vi": "mã không thể chạy tới",
   "def": "Đoạn code không bao giờ được thực thi; là ví dụ lỗi kiểm thử động không phát hiện được nhưng kiểm thử tĩnh tìm ra.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "stakeholder feedback",
   "vi": "phản hồi của bên liên quan",
   "def": "Ý kiến của stakeholder về sản phẩm trong suốt SDLC; nếu sớm và thường xuyên sẽ giúp phát hiện sớm vấn đề chất lượng và tránh hiểu sai yêu cầu.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "iso/iec 20246",
   "vi": "chuẩn ISO/IEC 20246",
   "def": "Tiêu chuẩn quốc tế về review sản phẩm công việc, định nghĩa quy trình review chung có cấu trúc nhưng linh hoạt, cùng các kỹ thuật và vai trò review chi tiết.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "individual review",
   "vi": "review cá nhân",
   "def": "Hoạt động trong quy trình review, khi mỗi reviewer tự đánh giá sản phẩm và ghi lại anomaly, đề xuất, câu hỏi bằng một hoặc nhiều kỹ thuật review.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "review meeting",
   "vi": "cuộc họp review",
   "def": "Cuộc họp (thường trong bước Communication and analysis) để thảo luận anomaly, quyết định trạng thái, người phụ trách, hành động và mức chất lượng của sản phẩm.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "checklist-based reviewing",
   "vi": "review dựa trên danh sách kiểm tra",
   "def": "Kỹ thuật review trong đó reviewer dùng một checklist các câu hỏi/điểm cần kiểm tra để phát hiện anomaly.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "scenario-based reviewing",
   "vi": "review dựa trên kịch bản",
   "def": "Kỹ thuật review trong đó reviewer được hướng dẫn theo các kịch bản sử dụng cụ thể khi đọc sản phẩm.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "manager",
   "vi": "quản lý (vai trò review)",
   "def": "Vai trò trong review: quyết định cái gì được review và cung cấp nguồn lực như nhân sự, thời gian.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "author",
   "vi": "tác giả",
   "def": "Vai trò trong review: người tạo ra và sửa sản phẩm được review; dẫn dắt walkthrough nhưng không được làm review leader hay scribe trong inspection.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "moderator",
   "vi": "người điều phối (facilitator)",
   "def": "Vai trò trong review: đảm bảo cuộc họp review hiệu quả — hòa giải, quản lý thời gian, tạo môi trường an toàn để mọi người phát biểu; dẫn dắt technical review.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "scribe",
   "vi": "thư ký (recorder)",
   "def": "Vai trò trong review: tổng hợp anomaly từ reviewer và ghi lại thông tin review như quyết định và anomaly mới trong cuộc họp.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "reviewer",
   "vi": "người review",
   "def": "Vai trò thực hiện review; có thể là thành viên dự án, chuyên gia lĩnh vực hoặc bất kỳ stakeholder nào.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "review leader",
   "vi": "trưởng nhóm review",
   "def": "Vai trò chịu trách nhiệm tổng thể về review: quyết định ai tham gia, tổ chức review khi nào và ở đâu.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "audit trail",
   "vi": "vết kiểm toán",
   "def": "Hồ sơ lưu vết có thể truy xét; nhu cầu audit trail là một yếu tố quyết định mức độ hình thức của review.",
   "kw": false,
   "ch": 3
  },
  {
   "en": "acceptance criteria",
   "vi": "tiêu chí chấp nhận",
   "def": "Các điều kiện mà phần cài đặt của user story phải đáp ứng để được stakeholder chấp nhận; có thể xem như các test condition cần được kiểm thử.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "acceptance test-driven development",
   "vi": "phát triển hướng kiểm thử chấp nhận (ATDD)",
   "def": "Cách tiếp cận test-first trong đó test case được tạo từ acceptance criteria trước khi cài đặt user story, với sự cộng tác của khách hàng, developer và tester.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "black-box test technique",
   "vi": "kỹ thuật kiểm thử hộp đen",
   "def": "Kỹ thuật kiểm thử dựa trên phân tích hành vi được đặc tả của đối tượng kiểm thử mà không xét cấu trúc bên trong (còn gọi là specification-based).",
   "kw": true,
   "ch": 4
  },
  {
   "en": "boundary value analysis",
   "vi": "phân tích giá trị biên",
   "def": "Kỹ thuật hộp đen trong đó test case được thiết kế dựa trên các giá trị biên (min/max) của các phân vùng tương đương có thứ tự.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "branch coverage",
   "vi": "độ phủ nhánh",
   "def": "Tỷ lệ phần trăm số nhánh (có điều kiện và vô điều kiện) được thực thi bởi bộ test trên tổng số nhánh; bao hàm statement coverage.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "checklist-based testing",
   "vi": "kiểm thử dựa trên checklist",
   "def": "Kỹ thuật dựa trên kinh nghiệm trong đó tester thiết kế, cài đặt và thực thi test để phủ các test condition có trong một checklist.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "collaboration-based test approach",
   "vi": "cách tiếp cận kiểm thử dựa trên cộng tác",
   "def": "Cách tiếp cận tập trung vào phòng tránh defect thông qua cộng tác và giao tiếp giữa các bên, vd viết user story cộng tác, acceptance criteria, ATDD.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "coverage item",
   "vi": "mục độ phủ",
   "def": "Thuộc tính hoặc tổ hợp thuộc tính được suy ra từ test condition theo một kỹ thuật kiểm thử, dùng để đo độ phủ (vd phân vùng, giá trị biên, cột decision table, transition, câu lệnh, nhánh).",
   "kw": true,
   "ch": 4
  },
  {
   "en": "decision table testing",
   "vi": "kiểm thử bảng quyết định",
   "def": "Kỹ thuật hộp đen trong đó test case được thiết kế để thực thi các tổ hợp điều kiện (cột/quy tắc khả thi) và hành động tương ứng trong bảng quyết định.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "equivalence partitioning",
   "vi": "phân vùng tương đương",
   "def": "Kỹ thuật hộp đen chia dữ liệu thành các phân vùng mà mọi phần tử trong cùng phân vùng được kỳ vọng xử lý giống nhau; mỗi phân vùng cần ít nhất một test.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "error guessing",
   "vi": "phỏng đoán lỗi",
   "def": "Kỹ thuật dựa trên kinh nghiệm dự đoán error, defect, failure có thể xảy ra dựa trên kiến thức của tester để thiết kế test.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "experience-based test technique",
   "vi": "kỹ thuật kiểm thử dựa trên kinh nghiệm",
   "def": "Kỹ thuật kiểm thử dựa vào kiến thức và kinh nghiệm của tester; bổ sung cho kỹ thuật hộp đen và hộp trắng.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "exploratory testing",
   "vi": "kiểm thử thăm dò",
   "def": "Cách kiểm thử trong đó test được thiết kế, thực thi và đánh giá đồng thời trong khi tester tìm hiểu đối tượng kiểm thử.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "state transition testing",
   "vi": "kiểm thử chuyển trạng thái",
   "def": "Kỹ thuật hộp đen trong đó test case được thiết kế dựa trên sơ đồ hoặc bảng trạng thái, nhằm thực thi các trạng thái và chuyển tiếp.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "statement coverage",
   "vi": "độ phủ câu lệnh",
   "def": "Tỷ lệ phần trăm số câu lệnh thực thi được đã được bộ test chạy qua trên tổng số câu lệnh thực thi được.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "test technique",
   "vi": "kỹ thuật kiểm thử",
   "def": "Quy trình giúp xác định test condition, coverage item và test data, từ đó thiết kế bộ test case nhỏ nhưng đủ một cách có hệ thống.",
   "kw": true,
   "ch": 4
  },
  {
   "en": "white-box test technique",
   "vi": "kỹ thuật kiểm thử hộp trắng",
   "def": "Kỹ thuật kiểm thử dựa trên phân tích cấu trúc và xử lý bên trong của đối tượng kiểm thử (còn gọi là structure-based).",
   "kw": true,
   "ch": 4
  },
  {
   "en": "valid partition",
   "vi": "phân vùng hợp lệ",
   "def": "Phân vùng tương đương chứa các giá trị hợp lệ, tức các giá trị đối tượng kiểm thử phải xử lý hoặc đặc tả có định nghĩa cách xử lý.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "invalid partition",
   "vi": "phân vùng không hợp lệ",
   "def": "Phân vùng tương đương chứa các giá trị không hợp lệ, tức các giá trị cần bị bỏ qua/từ chối hoặc đặc tả không định nghĩa cách xử lý.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "each choice coverage",
   "vi": "độ phủ mỗi lựa chọn",
   "def": "Tiêu chí độ phủ đơn giản nhất khi có nhiều tập phân vùng: mỗi phân vùng của mỗi tập được thực thi ít nhất một lần, không xét tổ hợp.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "boundary value",
   "vi": "giá trị biên",
   "def": "Giá trị nhỏ nhất hoặc lớn nhất của một phân vùng tương đương có thứ tự.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "2-value boundary value analysis",
   "vi": "phân tích giá trị biên 2 giá trị",
   "def": "Biến thể BVA trong đó mỗi giá trị biên có 2 coverage item: giá trị biên và láng giềng gần nhất thuộc phân vùng kề bên.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "3-value boundary value analysis",
   "vi": "phân tích giá trị biên 3 giá trị",
   "def": "Biến thể BVA trong đó mỗi giá trị biên có 3 coverage item: giá trị biên và cả hai láng giềng của nó; chặt hơn 2-value BVA.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "state table",
   "vi": "bảng trạng thái",
   "def": "Mô hình tương đương sơ đồ trạng thái: hàng là trạng thái, cột là sự kiện, ô là trạng thái đích; thể hiện rõ transition không hợp lệ bằng ô trống.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "transition",
   "vi": "chuyển tiếp (chuyển trạng thái)",
   "def": "Sự thay đổi từ trạng thái này sang trạng thái khác, được khởi phát bởi một sự kiện, có thể kèm guard condition và hành động.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "guard condition",
   "vi": "điều kiện bảo vệ",
   "def": "Điều kiện bổ sung cho một sự kiện, phải thỏa thì transition mới xảy ra; ghi trong ngoặc vuông theo cú pháp 'event [guard condition] / action'.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "all states coverage",
   "vi": "độ phủ tất cả trạng thái",
   "def": "Tiêu chí độ phủ state transition với coverage item là các trạng thái; yếu nhất trong ba tiêu chí của syllabus.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "valid transitions coverage",
   "vi": "độ phủ các chuyển tiếp hợp lệ (0-switch)",
   "def": "Tiêu chí độ phủ với coverage item là từng transition hợp lệ; phổ biến nhất và đảm bảo 100% all states coverage.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "all transitions coverage",
   "vi": "độ phủ tất cả chuyển tiếp",
   "def": "Tiêu chí độ phủ với coverage item là mọi transition trong state table (hợp lệ và không hợp lệ); là yêu cầu tối thiểu cho phần mềm mission/safety-critical.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "branch",
   "vi": "nhánh",
   "def": "Sự chuyển điều khiển giữa hai nút trong control flow graph; có thể vô điều kiện hoặc có điều kiện (kết quả của một quyết định).",
   "kw": false,
   "ch": 4
  },
  {
   "en": "fault attack",
   "vi": "tấn công lỗi",
   "def": "Cách hiện thực error guessing: lập danh sách error/defect/failure có thể có rồi thiết kế test để làm lộ defect hoặc gây failure.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "user story",
   "vi": "câu chuyện người dùng",
   "def": "Mô tả một tính năng có giá trị với người dùng hoặc người mua, gồm 3 khía cạnh Card, Conversation, Confirmation; định dạng 'As a..., I want..., so that...'.",
   "kw": false,
   "ch": 4
  },
  {
   "en": "defect management",
   "vi": "quản lý lỗi",
   "kw": true,
   "def": "Quy trình xử lý các bất thường được báo cáo từ khi phát hiện đến khi đóng, gồm workflow (ghi nhận, phân tích, phân loại, quyết định xử lý, đóng) và quy tắc phân loại.",
   "ch": 5
  },
  {
   "en": "defect report",
   "vi": "báo cáo lỗi",
   "kw": true,
   "def": "Tài liệu ghi lại một bất thường để người xử lý có đủ thông tin giải quyết, theo dõi chất lượng work product và gợi ý cải tiến quy trình; gồm ID, tiêu đề, bước tái hiện, expected/actual, severity, priority, status…",
   "ch": 5
  },
  {
   "en": "entry criteria",
   "vi": "tiêu chí đầu vào",
   "kw": true,
   "def": "Các điều kiện tiên quyết để bắt đầu một hoạt động (vd sẵn có nguồn lực, testware, smoke test đã pass). Trong Agile tương ứng Definition of Ready.",
   "ch": 5
  },
  {
   "en": "exit criteria",
   "vi": "tiêu chí đầu ra",
   "kw": true,
   "def": "Những gì phải đạt được để tuyên bố một hoạt động hoàn thành (vd mức coverage, số defect chưa giải quyết, đã chạy hết test theo kế hoạch). Trong Agile tương ứng Definition of Done.",
   "ch": 5
  },
  {
   "en": "product risk",
   "vi": "rủi ro sản phẩm",
   "kw": true,
   "def": "Rủi ro liên quan đến đặc tính chất lượng của sản phẩm (vd thiếu/sai chức năng, tính toán sai, phản hồi chậm, lỗ hổng bảo mật).",
   "ch": 5
  },
  {
   "en": "project risk",
   "vi": "rủi ro dự án",
   "kw": true,
   "def": "Rủi ro liên quan đến quản lý và kiểm soát dự án (vấn đề tổ chức, con người, kỹ thuật, nhà cung cấp); ảnh hưởng lịch trình, ngân sách hoặc phạm vi.",
   "ch": 5
  },
  {
   "en": "risk",
   "vi": "rủi ro",
   "kw": true,
   "def": "Một sự kiện, mối nguy, mối đe dọa hoặc tình huống tiềm ẩn mà nếu xảy ra sẽ gây tác động bất lợi; đặc trưng bởi likelihood và impact.",
   "ch": 5
  },
  {
   "en": "risk analysis",
   "vi": "phân tích rủi ro",
   "kw": true,
   "def": "Hoạt động gồm nhận diện rủi ro (risk identification) và đánh giá rủi ro (risk assessment).",
   "ch": 5
  },
  {
   "en": "risk assessment",
   "vi": "đánh giá rủi ro",
   "kw": true,
   "def": "Phân loại rủi ro đã nhận diện, xác định likelihood, impact và risk level, ưu tiên hóa và đề xuất cách xử lý; có thể định lượng hoặc định tính.",
   "ch": 5
  },
  {
   "en": "risk control",
   "vi": "kiểm soát rủi ro",
   "kw": true,
   "def": "Tất cả biện pháp ứng phó với rủi ro đã phân tích, gồm giảm thiểu rủi ro (risk mitigation) và giám sát rủi ro (risk monitoring).",
   "ch": 5
  },
  {
   "en": "risk identification",
   "vi": "nhận diện rủi ro",
   "kw": true,
   "def": "Tạo ra danh sách rủi ro toàn diện, bằng các kỹ thuật như brainstorming, workshop, phỏng vấn, sơ đồ nhân quả.",
   "ch": 5
  },
  {
   "en": "risk level",
   "vi": "mức độ rủi ro",
   "kw": true,
   "def": "Thước đo của rủi ro, xác định từ risk likelihood và risk impact (định lượng: likelihood × impact; định tính: risk matrix). Càng cao càng cần ưu tiên xử lý.",
   "ch": 5
  },
  {
   "en": "risk management",
   "vi": "quản lý rủi ro",
   "kw": true,
   "def": "Các hoạt động giúp tổ chức tăng khả năng đạt mục tiêu, cải thiện chất lượng và niềm tin; gồm risk analysis và risk control.",
   "ch": 5
  },
  {
   "en": "risk mitigation",
   "vi": "giảm thiểu rủi ro",
   "kw": true,
   "def": "Thực hiện các hành động đã đề xuất trong risk assessment nhằm giảm mức độ rủi ro (vd kiểm thử kỹ hơn, review, chọn tester phù hợp).",
   "ch": 5
  },
  {
   "en": "risk monitoring",
   "vi": "giám sát rủi ro",
   "kw": true,
   "def": "Theo dõi để đảm bảo các hành động giảm thiểu có hiệu quả, thu thêm thông tin cải thiện risk assessment và phát hiện rủi ro mới phát sinh.",
   "ch": 5
  },
  {
   "en": "risk-based testing",
   "vi": "kiểm thử dựa trên rủi ro",
   "kw": true,
   "def": "Cách tiếp cận kiểm thử trong đó các hoạt động kiểm thử được chọn, ưu tiên và quản lý dựa trên phân tích rủi ro và kiểm soát rủi ro.",
   "ch": 5
  },
  {
   "en": "test approach",
   "vi": "cách tiếp cận kiểm thử",
   "kw": true,
   "def": "Phần của test plan mô tả cách kiểm thử: test levels, test types, test techniques, deliverables, entry/exit criteria, mức độc lập, metrics, yêu cầu test data và môi trường.",
   "ch": 5
  },
  {
   "en": "test completion report",
   "vi": "báo cáo hoàn tất kiểm thử",
   "kw": true,
   "def": "Báo cáo lập khi một dự án/test level/test type hoàn tất; gồm tóm tắt, đánh giá theo test plan gốc, sai lệch, rủi ro chưa giảm thiểu, defect chưa sửa, bài học kinh nghiệm.",
   "ch": 5
  },
  {
   "en": "test plan",
   "vi": "kế hoạch kiểm thử",
   "kw": true,
   "def": "Tài liệu mô tả mục tiêu kiểm thử, nguồn lực và quy trình cho một dự án kiểm thử; cũng là phương tiện giao tiếp với stakeholders.",
   "ch": 5
  },
  {
   "en": "test progress report",
   "vi": "báo cáo tiến độ kiểm thử",
   "kw": true,
   "def": "Báo cáo định kỳ trong quá trình kiểm thử hỗ trợ test control; gồm giai đoạn, tiến độ, trở ngại, metrics, rủi ro mới, kế hoạch giai đoạn tới. Theo 29119-3 gọi là test status report.",
   "ch": 5
  },
  {
   "en": "test pyramid",
   "vi": "kim tự tháp kiểm thử",
   "kw": true,
   "def": "Mô hình cho thấy test có độ chi tiết khác nhau: tầng dưới nhiều test nhỏ, cô lập, nhanh; tầng trên ít test end-to-end, chậm, kém cô lập.",
   "ch": 5
  },
  {
   "en": "test strategy",
   "vi": "chiến lược kiểm thử",
   "kw": true,
   "def": "Mô tả chung về cách kiểm thử ở cấp tổ chức; test plan phải tuân theo test policy và test strategy hoặc giải thích sự sai lệch.",
   "ch": 5
  },
  {
   "en": "testing quadrants",
   "vi": "các góc phần tư kiểm thử",
   "kw": true,
   "def": "Mô hình của Brian Marick chia test theo hai trục business/technology facing và support the team/critique the product thành 4 góc Q1–Q4.",
   "ch": 5
  },
  {
   "en": "test effort",
   "vi": "công sức kiểm thử",
   "kw": false,
   "def": "Lượng công việc liên quan kiểm thử (thường tính bằng person-days/person-hours) cần để đạt mục tiêu kiểm thử; được ước lượng bằng các kỹ thuật estimation.",
   "ch": 5
  },
  {
   "en": "wideband delphi",
   "vi": "Wideband Delphi",
   "kw": false,
   "def": "Kỹ thuật ước lượng lặp dựa trên chuyên gia: mỗi người ước lượng độc lập, thảo luận khi chênh lệch vượt biên, rồi ước lượng lại cho đến khi đồng thuận.",
   "ch": 5
  },
  {
   "en": "planning poker",
   "vi": "Planning Poker",
   "kw": false,
   "def": "Biến thể của Wideband Delphi dùng phổ biến trong Agile, các thành viên ước lượng effort bằng lá bài có số.",
   "ch": 5
  },
  {
   "en": "three-point estimation",
   "vi": "ước lượng ba điểm",
   "kw": false,
   "def": "Kỹ thuật dựa trên chuyên gia dùng 3 giá trị a (lạc quan), m (khả dĩ nhất), b (bi quan): E = (a + 4m + b)/6, sai số SD = (b − a)/6.",
   "ch": 5
  },
  {
   "en": "risk likelihood",
   "vi": "khả năng xảy ra rủi ro",
   "kw": false,
   "def": "Xác suất rủi ro xảy ra, lớn hơn 0 và nhỏ hơn 1.",
   "ch": 5
  },
  {
   "en": "risk impact",
   "vi": "tác động của rủi ro",
   "kw": false,
   "def": "Hậu quả (thiệt hại – harm) khi rủi ro xảy ra.",
   "ch": 5
  },
  {
   "en": "definition of done",
   "vi": "định nghĩa hoàn thành (DoD)",
   "kw": false,
   "def": "Tên gọi của exit criteria trong Agile: các chỉ số khách quan để một hạng mục được coi là có thể phát hành.",
   "ch": 5
  },
  {
   "en": "definition of ready",
   "vi": "định nghĩa sẵn sàng (DoR)",
   "kw": false,
   "def": "Tên gọi của entry criteria trong Agile: điều kiện user story phải thỏa để bắt đầu phát triển và/hoặc kiểm thử.",
   "ch": 5
  },
  {
   "en": "configuration management",
   "vi": "quản lý cấu hình",
   "kw": false,
   "def": "Kỷ luật nhận diện, kiểm soát và theo dõi các work product (kể cả testware) như các configuration item, đảm bảo định danh duy nhất, quản lý phiên bản và truy vết.",
   "ch": 5
  },
  {
   "en": "baseline",
   "vi": "đường cơ sở",
   "kw": false,
   "def": "Configuration item đã được phê duyệt; chỉ được thay đổi qua quy trình kiểm soát thay đổi chính thức và có thể quay lại để tái tạo kết quả cũ.",
   "ch": 5
  },
  {
   "en": "severity",
   "vi": "mức độ nghiêm trọng",
   "kw": false,
   "def": "Mức độ tác động của defect tới lợi ích của stakeholders hoặc tới yêu cầu.",
   "ch": 5
  },
  {
   "en": "priority",
   "vi": "độ ưu tiên",
   "kw": false,
   "def": "Trong defect report: mức độ ưu tiên (khẩn cấp) cần sửa defect.",
   "ch": 5
  },
  {
   "en": "burn-down chart",
   "vi": "biểu đồ burn-down",
   "kw": false,
   "def": "Biểu đồ trên dashboard thể hiện lượng công việc còn lại theo thời gian; một cách truyền đạt tình trạng kiểm thử.",
   "ch": 5
  },
  {
   "en": "additional coverage prioritization",
   "vi": "ưu tiên theo coverage bổ sung",
   "kw": false,
   "def": "Biến thể của coverage-based prioritization: chạy test có coverage cao nhất trước, mỗi test tiếp theo là test đạt coverage bổ sung (chưa được phủ) cao nhất.",
   "ch": 5
  },
  {
   "en": "test automation",
   "vi": "tự động hóa kiểm thử",
   "def": "Việc dùng phần mềm (công cụ) để thực hiện hoặc hỗ trợ các hoạt động kiểm thử, vd thực thi test, so sánh kết quả, sinh dữ liệu. Mang lại lợi ích (tiết kiệm thời gian, nhất quán) nhưng cũng có rủi ro cần phân tích và giảm thiểu.",
   "kw": true,
   "ch": 6
  },
  {
   "en": "test management tools",
   "vi": "công cụ quản lý kiểm thử",
   "def": "Công cụ tăng hiệu quả quy trình kiểm thử bằng cách hỗ trợ quản lý SDLC, requirements, test, defect và cấu hình.",
   "kw": false,
   "ch": 6
  },
  {
   "en": "static testing tools",
   "vi": "công cụ kiểm thử tĩnh",
   "def": "Công cụ hỗ trợ tester thực hiện review và phân tích tĩnh (static analysis) mà không cần chạy phần mềm.",
   "kw": false,
   "ch": 6
  },
  {
   "en": "test design and test implementation tools",
   "vi": "công cụ thiết kế và triển khai kiểm thử",
   "def": "Công cụ hỗ trợ sinh test case, test data và test procedure.",
   "kw": false,
   "ch": 6
  },
  {
   "en": "test execution and test coverage tools",
   "vi": "công cụ thực thi kiểm thử và đo độ bao phủ",
   "def": "Công cụ hỗ trợ thực thi test tự động và đo độ bao phủ (coverage).",
   "kw": false,
   "ch": 6
  },
  {
   "en": "non-functional testing tools",
   "vi": "công cụ kiểm thử phi chức năng",
   "def": "Công cụ cho phép thực hiện kiểm thử phi chức năng (vd hiệu năng, tải) vốn khó hoặc không thể làm thủ công.",
   "kw": false,
   "ch": 6
  },
  {
   "en": "devops tools",
   "vi": "công cụ DevOps",
   "def": "Công cụ hỗ trợ pipeline phân phối DevOps, theo dõi luồng công việc, quy trình build tự động và CI/CD.",
   "kw": false,
   "ch": 6
  },
  {
   "en": "collaboration tools",
   "vi": "công cụ cộng tác",
   "def": "Công cụ tạo thuận lợi cho giao tiếp giữa các thành viên/bên liên quan trong kiểm thử.",
   "kw": false,
   "ch": 6
  },
  {
   "en": "tools supporting scalability and deployment standardization",
   "vi": "công cụ hỗ trợ khả năng mở rộng và chuẩn hóa triển khai",
   "def": "Công cụ giúp mở rộng và chuẩn hóa môi trường triển khai/kiểm thử, vd máy ảo (virtual machines) và công cụ container hóa.",
   "kw": false,
   "ch": 6
  },
  {
   "en": "containerization",
   "vi": "container hóa",
   "def": "Kỹ thuật đóng gói ứng dụng cùng môi trường chạy vào container để triển khai nhất quán; công cụ container hóa thuộc nhóm hỗ trợ khả năng mở rộng và chuẩn hóa triển khai.",
   "kw": false,
   "ch": 6
  },
  {
   "en": "tool vendor",
   "vi": "nhà cung cấp công cụ",
   "def": "Tổ chức cung cấp công cụ thương mại; phụ thuộc vào vendor là rủi ro vì vendor có thể phá sản, ngừng công cụ, bán công cụ hoặc hỗ trợ kém.",
   "kw": false,
   "ch": 6
  },
  {
   "en": "open-source software",
   "vi": "phần mềm mã nguồn mở",
   "def": "Phần mềm có mã nguồn công khai; rủi ro khi dùng cho automation là dự án có thể bị bỏ rơi (không còn cập nhật) hoặc thành phần bên trong cần cập nhật thường xuyên.",
   "kw": false,
   "ch": 6
  }
 ]
};
