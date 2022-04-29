import "./Product.css"
import { useEffect, useState } from "react"

function Product() {
  var [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   var btn_sub = document.querySelector('.btn-sub')
  //   var btn_add = document.querySelector('.btn-add')
  //   btn_add.addEventListener('click', function() {
  //     setQuantity(quantity+1)
  //   })
  //   btn_sub.addEventListener('click', function() {
  //     setQuantity(quantity-1)
  //   })
  // }, [quantity])

  useEffect(() => {
    var heart = document.querySelector('.icon-heart')
    heart.addEventListener('click', ClickHeart)
  })

  function ClickHeart(e) {
    var x = e.target.classList
    if (x.value == 'fas fa-heart') {
      x.value = 'far fa-heart'
    }
    else x.value = 'fas fa-heart';
  }

  return (
    <div className="product">
      <div className="grid">
        <div className="product__nav">
          <a href="/">Home</a>
          <i className="fa-solid fa-angle-right"></i>
          <a href="/">Đồ dùng phòng bếp</a>
          <i className="fa-solid fa-angle-right"></i>
          <a href="/">Dụng cụ để nấu</a>
          <i className="fa-solid fa-angle-right"></i>
          <a>Nồi Cơm Điện Mini Đa Năng Jiashi</a>
        </div>
        <div className="product-briefing">
          <div className="product-briefing__img">
            <img src="https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126" alt="" />
            <div className="product-briefing__img-action">
              <div className="product-briefing__img-share">
                Chia sẻ:
                <i className="fa-brands fa-facebook-messenger"></i>
                <i className="share-facebook fa-brands fa-facebook"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
              <div className="product-briefing__img-heart">
                <i className="icon-heart fa-regular fa-heart"></i>
                Đã thích(4)
              </div>
            </div>
          </div>
          <div className="product-briefing__desc">
            <div className="product-briefing__desc-heading">
              <span className="product-briefing__desc-favorite">
                Yêu Thích
              </span>
              Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01
            </div>
            <div className="product-briefing__desc-rating">
              <div className="product-briefing__desc-star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="product-briefing__desc-review">
                <a href="#">5</a>
                Đánh Giá
              </div>
              <div className="product-briefing__desc-sold">
                <a href="#">16</a>
                Đã Bán
                <i className="fa-regular fa-circle-question"></i>
              </div>
            </div>
            <div className="product-briefing__desc-price">
              <div className="product-briefing__price-old">₫655.000</div>
              <div className="product-briefing__price-current">₫380.000</div>
              <div className="product-briefing__sale-off">
                42% GIẢM
              </div>
            </div>
            <div className="product-briefing__desc-content">
              <div className="product-briefing__desc-voucher flex pdw">
                <p className="product-briefing__desc-voucher-label pdl">Mã Giảm Giá</p>
                <div className="product-briefing__desc-voucher-code pdc">
                  Giảm ₫5k
                </div>
              </div>
              <div className="product-briefing__desc-combo flex pdw">
                <p className="product-briefing__desc-combo-label pdl">Combo Khuyến Mãi</p>
                <div className="product-briefing__desc-combo-code pdc">
                  Mua 2 và giảm 2%
                </div>
              </div>
              <div className="product-briefing__desc-transport flex pdw">
                <p className="product-briefing__desc-transport-label pdl">Vận chuyển</p>
                <div className="product-briefing__desc-transport-content pdc">
                  <img src="./img/freeship.png" alt="" className="freeship-img" />
                  Vận chuyển miễn phí
                  <p className="condition-transport">Vận chuyển miễn phí cho đơn hàng trên ₫300k</p>
                </div>
              </div>
              <div className="product-briefing__desc-quantity flex pdw">
                <p className="pdl">Số lượng</p>
                <div className="pdc">
                  <button className="btn-sub" onClick={() => { setQuantity(() => { if (quantity <= 1) return 1; else return quantity - 1 }) }}>-</button>
                  <input type="text" className="product-briefing__desc-quantity-buy" value={quantity}></input>
                  <button className="btn-add" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <div className="product-available pdc">112 sản phầm có sẵn</div>
              </div>
            </div>
            <div className="product-briefing__desc-buy flex pdw">
              <button className="product-briefing__desc-add-cart pdl">
                <i className="fa-solid fa-cart-plus"></i>
                Thêm Vào Giỏ Hàng
              </button>
              <button className="product-briefing__desc-buy-btn"><a href="/cart">Mua Ngay</a></button>
            </div>
            <div className="product-briefing__desc-assurance flex">
              <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/83e10a1f95cb083579c089448ef8dd3b.png" alt="" />
              ShopND Đảm Bảo
              <p>3 Ngảy Trả Hàng / Hoàn Tiền</p>
            </div>
          </div>
        </div>
        <div className="product-content">
          <div className="product-detail">
            <div className="product-content__label">CHI TIẾT SẢN PHẨM</div>
            <div className="grid__row product-detail__row">
              <div className="grid__column-2">
                <p className="product-detail__label">Danh Mục</p>
              </div>
              <div className="grid__column-10">
                <div className="product-detail__content product__nav">
                  <a href="/">Home</a>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="/">Đồ dùng phòng bếp</a>
                  <i className="fa-solid fa-angle-right"></i>
                  <a href="/">Dụng cụ để nấu</a>
                  <a></a>
                </div>
              </div>
            </div>
            <div className="grid__row product-detail__row">
              <div className="grid__column-2">
                <p className="product-detail__label">Thương hiệu</p>
              </div>
              <div className="grid__column-10">
                <p className="product-detail__content">JIASHI</p>
              </div>
            </div>
            <div className="grid__row product-detail__row">
              <div className="grid__column-2">
                <p className="product-detail__label">Hạn bảo hành</p>
              </div>
              <div className="grid__column-10">
                <p className="product-detail__content">12 tháng</p>
              </div>
            </div>
            <div className="grid__row product-detail__row">
              <div className="grid__column-2">
                <p className="product-detail__label">Xuất xứ</p>
              </div>
              <div className="grid__column-10">
                <p className="product-detail__content">Trung Quốc</p>
              </div>
            </div>
            <div className="grid__row product-detail__row">
              <div className="grid__column-2">
                <p className="product-detail__label">Kho hàng</p>
              </div>
              <div className="grid__column-10">
                <p className="product-detail__content">112</p>
              </div>
            </div>
            <div className="grid__row product-detail__row">
              <div className="grid__column-2">
                <p className="product-detail__label">Gửi từ</p>
              </div>
              <div className="grid__column-10">
                <p className="product-detail__content">Hà Nội</p>
              </div>
            </div>
          </div>
          <div className="product-desc">
            <div className="product-content__label">MÔ TẢ SẢN PHẨM</div>
            <p className="desc">
              ✅ Mọi Người Lưu Ý : 1.2L Là Thể Tích Trung Quốc Quy Đổi Sang Thể Tích Việt Nam Sẽ Là 0.8L

              ✅ NỒI CƠM ĐIỆN MINI ĐA NĂNG - TẶNG KÈM KHAY HẤP.

              - Siêu phẩm nồi cơm điện dành cho các gia đình ít người, ăn ít cơm, sinh viên, ngại rửa cái nồi cơm điện bình thường to oạch. Đặc biệt cho gia đình có bé ở độ tuổi ăn dặm. Nấu cháo, hầm thức ăn ngon lắm cả nhà ơi. Điểm bonus nữa là có thể luộc trứng, khoai, hầm canh, nấu soup rất tiện lợi.

              ✅ Sản Phẩm Bao Gồm:
              - 1 Vỏ Nồi
              - 1 Ruột Nồi
              - 1 Khay Hấp
              - 1 Dắc Chuyển Đổi 2 Chân
              - 1 Dây Điện
              - 1 Thìa Xới
              - 1 Cốc Đong
              ✅ CÁC TÍNH NĂNG CỦA NỒI CƠM ĐIỆN ĐA NĂNG:
              - Các chức năng nấu khác nhau: nấu cơm, cháo, súp, canh, luộc đồ...
              - Dễ dàng rửa vệ sinh.
              - Nồi Cơm Mini thiết kế 5 lớp, phủ lớp chống dính đá Ceramic: không sợ tróc, an toàn cho sức khỏe, thân thiện với môi trường.
              - Thao tác sử dụng đơn giản: chỉ bấm 1 lần thôi là nấu được cơm rồi
              - Dung lượng 4,6 bát cơm: Đủ cho 2người
              - Kích thướt nồi nhỏ xinh: gọn, đẹp, nấu ít, rửa đỡ cực
              - Nồi cơm có thể Giữ ấm đến 12 tiếng: 1 người ăn thì sáng nấu rồi giữ ấm ăn được nguyên ngày luôn mà hạt cơm vẫn giữ nguyên được độ dẻo thơm.
              ✅ THÔNG TIN KỸ THUẬT:
              - Trọng lượng và kích thước: 0.8L/200(W)
              - Chất liệu: Cao su, polypropylen, nhôm (nhựa fluorocarbon)
              - Điện áp định mức / Tiêu thụ điện năng: 220V, 60Hz/250W

              ----------------------------------------------------------------------------
              ✅HAGU cam kết hoàn tiền 100% nếu hàng không chính hãng.

              ✅ĐỊA CHỈ CỬA HÀNG CHÍNH HÃNG:
              Địa chỉ: 7/2m Nguyễn Thị Minh Khai, phường Bến Nghé, Quận 1, TPHCM
              SDT: 0931149139
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
