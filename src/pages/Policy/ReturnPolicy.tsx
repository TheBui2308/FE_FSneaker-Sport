import React from 'react';
import BreadCrumb from '@/components/breadcrumb';
const ReturnPolicy = () => {
    const breadcrumbLinks = [
        { title: 'Chính sách đổi trả và bảo hành' }
    ];

    return (
        <div className="pb-10">
            <BreadCrumb links={breadcrumbLinks} />
            <div className='app-container text-[#333]  pt-5'>
                <h1 className="text-3xl font-bold mb-6">CHÍNH SÁCH ĐỔI TRẢ, BẢO HÀNH VÀ HOÀN TIỀN</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Chính sách đổi trả</h2>
                    <p className="mb-4">
                        Chúng tôi tin rằng một đôi giày ưng ý, mức giá hợp ví sẽ mang đến niềm vui khi mua sắm. Để tránh những trải nghiệm không đáng mong muốn, trước khi đổi giày, mong bạn dành vài giây đọc quy định bên dưới:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Thời hạn đổi sản phẩm trong vòng 3 ngày được tính từ ngày nhận hàng.
                        </li>
                        <li>
                            Sản phẩm đổi không có dấu hiệu đã qua sử dụng, còn nguyên tem, nhãn mác, không giặt tẩy, bám bẩn, biến dạng.
                        </li>
                        <li>
                            Bạn có thể đổi sang bất kì sản phẩm nào cùng giá hoặc cao hơn hoặc chỉ được đổi size, tùy theo chính sách của từng chương trình khuyến mãi đang áp dụng. Và vui lòng chịu tiền phí vận chuyển (nếu có). Đối với đơn hàng giao sai sản phẩm, không đủ số lượng hoặc nhầm size FSneaker sẽ chịu 100% phí vận chuyển.
                        </li>
                        <li>FSneaker không hoàn trả tiền nếu khách hàng tự động hủy đơn hàng với hình thức thanh toán online. Vui lòng kiểm tra kĩ đơn hàng trước khi đặt mua! Mong bạn thông cảm.</li>
                    </ul>

                    <p className="mt-4 font-semibold">
                        Khách hàng vui lòng quay video mở gói hàng chứng minh sự thiếu sót trên để hoàn thành việc đổi hàng hóa khi đặt hàng online. Hoặc kiểm tra hàng kỹ trước khi thanh toán tại quầy khi mua sắm trực tiếp tại cửa hàng.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Chính sách bảo hành</h2>
                    <p className="mb-4 font-semibold">
                        Để việc bảo hành trở nên thuận tiện và hiệu quả hơn, FSneaker mong bạn vui lòng vệ sinh giày trước khi mang đến bảo hành.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        {/* <li>
                            Sản phẩm mua 1 tặng 1 hoặc giảm từ 40% sẽ được hỗ trợ bảo hành keo chỉ miễn phí trong 1 tháng.
                        </li> */}
                        <li>
                            Sản phẩm sale thanh lý/ bỏ mẫu sẽ không hỗ trợ bảo hành.
                        </li>
                        <li>
                            Những sản phẩm nguyên giá hoặc giảm 10 - 35%, khách hàng được bảo hành keo/ chỉ miễn phí trọn đời.
                        </li>
                        <li>
                            Thời gian hoàn thành bảo hành từ 5 đến 7 ngày làm việc (tuỳ tình trạng sản phẩm), không tính ngày tiếp nhận.
                        </li>
                    </ul>
                    <p className="mt-4">
                        FSneaker nhận hỗ trợ bảo hành miễn phí 2 hạng mục: keo, chỉ trên sản phẩm. Các hạng mục khác (tùy theo mức độ hư hỏng), hoặc hư hỏng do bị tác động, phát sinh trong quá trình sử dụng chúng tôi sẽ kiểm tra và thông báo trực tiếp với khách hàng, nếu ngoài khả năng shop xin phép từ chối hỗ trợ bảo hành.
                    </p>
                </section>

                <section className='mt-6'>
                    <h2 className="text-2xl font-semibold mb-4">3. Chính sách hoàn tiền</h2>
                    <p className="mb-4 font-semibold">
                        3.1. Hoàn tiền
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        {/* <li>
                            Sản phẩm mua 1 tặng 1 hoặc giảm từ 40% sẽ được hỗ trợ bảo hành keo chỉ miễn phí trong 1 tháng.
                        </li> */}
                        <li>
                        Nếu đơn hàng vẫn chưa được xử lý (ví dụ: chưa được đóng gói hoặc chưa giao cho đơn vị vận chuyển), quý khách hàng vui lòng chủ động liên hệ với để chúng tôi hoàn tiền toàn bộ cho khách hàng sau khi hủy đơn hàng. Thời gian hoàn tiền sẽ được chuyển đến quý khách trong vòng 24h.
                        </li>
                    </ul>
                    
                    <p className="mt-4 font-semibold">
                        3.2. Không Hoàn Tiền
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        {/* <li>
                            Sản phẩm mua 1 tặng 1 hoặc giảm từ 40% sẽ được hỗ trợ bảo hành keo chỉ miễn phí trong 1 tháng.
                        </li> */}
                        <li className='mt-3'>
                        Chúng tôi rất tiếc phải thông báo rằng chúng tôi không cung cấp chính sách hoàn tiền cho các đơn hàng đã được thanh toán thành công nhưng khách hàng không nhận hàng. Điều này bao gồm các trường hợp đơn hàng bị đánh dấu là "Giao hàng thất bại" do khách hàng không có mặt để nhận hàng hoặc không liên hệ lại với chúng tôi sau khi hàng không được giao.
                        </li>
                    </ul>

                    <p className='mt-4'> <span className='font-bold'>Vui lòng đảm bảo thông tin giao hàng chính xác</span> và có mặt tại địa chỉ giao hàng để nhận hàng. Chúng tôi khuyến khích Quý khách liên hệ với chúng tôi ngay lập tức nếu có bất kỳ vấn đề nào liên quan đến việc giao hàng.</p>
                    <p className='mt-4'>Nếu Quý khách có bất kỳ câu hỏi nào về chính sách này hoặc cần hỗ trợ thêm, vui lòng liên hệ với chúng tôi qua email <span className='font-bold'>fsneakershop@gmail.com</span> hoặc số điện thoại <span className='font-bold'>0377485926.</span></p>
                </section>
            </div>
        </div>
    );
};

export default ReturnPolicy;