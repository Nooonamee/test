import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="header">
        <div className="grid">
          {/* Header navbar */}
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__navbar-item--separate">
                Vào cửa hàng trên ứng dụng
                <div className="header__qr">
                  <img src="./img/QR-code.png" alt="QR Code" className="header__qr-img"></img>
                  <div className="header__qr-type-store">
                    <img src="./img/AppStore.png" alt="Google Play" className="header__qr-apps-img"></img>
                    <img src="./img/CHplay.png" alt="App Store" className="header__qr-apps-img"></img>
                    <img src="./img/AppGallery.png" alt="App Gallery" className="header__qr-apps-img pull-left"></img>
                  </div>
                </div>
              </li>
              <li className="header__navbar-item">
                <span className="cant-touch">Kết nối</span>
                <a href="https://www.facebook.com/ShopeeVN" target='_blank' className="header__navbar-icon-link">
                  <i className="header__navbar-icon fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/accounts/login/?next=/Shopee_VN" target='_blank' className="header__navbar-icon-link">
                  <i className="header__navbar-icon fa-brands fa-instagram-square"></i>
                </a>
              </li>
            </ul>

            <ul className="header__navbar-list">
              <li className="header__navbar-item">
                <a href="#" className="header__navbar-item-link">
                  <i className="header__navbar-icon fa-regular fa-bell"></i>
                  Thông báo
                </a>
                <div className="header__notify">
                  <header className="header__notify-header">
                    <h3>Thông báo mới nhận</h3>
                  </header>
                  <ul className="header__notify-list">
                    <li className="header__notify-item">
                      <a href="#" className="header__notify-link header__notify-link-viewed">
                        <img src="https://cf.shopee.vn/file/4293fecf289201c3265e38df94dc5da7" alt="" className="header__notify-img"></img>
                        <div className="header__notify-info">
                          <span className="header__notify-name">Xác nhập đã thanh toán</span>
                          <span className="header__notify-description">mô tả</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <footer className="header__notify-footer">
                    <a href="#" className="header__notify-footer-btn">Xem tất cả</a>
                  </footer>
                </div>
              </li>
              <li className="header__navbar-item">
                <a href="#" className="header__navbar-item-link">
                  <i className="header__navbar-icon fa-solid fa-circle-question"></i>
                  Trợ giúp
                </a>
              </li>
              <li className="header__navbar-item header__navbar-item-strong header__navbar-item--separate" onClick={OpenSignUp}>Đăng kí</li>
              <li className="header__navbar-item header__navbar-item-strong" onClick={OpenLogIn}>Đăng nhập</li>
            </ul>
          </nav>
          {/* Header with search */}
          <div className="header-with-search">
            <div className="header__logo">
              <i className="header__logo-icon fa-brands fa-shopify"></i>
              <span>ShopND</span>
            </div>

            <div className="header__search">
              <div className="header__search-input-wrap">
                <input type="text" className="header__search-input" onFocus={FocusInput} onBlur={OutInput} placeholder="Tìm thứ bạn muốn mua"></input>
                <div className="header__search-history">
                  <ul className="header__search-history-list">
                    <li className="header__search-history-item">
                      <a href="#" onClick={() => select_history("Nồi cơm điện")}>Nồi cơm điện</a>
                    </li>
                    <li className="header__search-history-item">
                      <a href="#">xà phòng</a>
                    </li>
                    <li className="header__search-history-item">
                      <a href="#">cốc uống nước</a>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="header__sreach-btn">
                <i className="fas fa-search"></i>
              </button>
            </div>

            <div className="header__cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <div className="header__cart-list">
                <img src="./img/no-cart.png" alt="" />
                <p>Chưa có sản phẩm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  )
}

function Modal() {
  return (
    <div className="modal">
      <div className="modal__body">
        <div className="auth-form">
          {/* form đăng kí */}
          <div className="auth-form__sign-up">
            <div className="auth-form__header">
              <h3 className="auth-form__heading">Đăng ký</h3>
              <span className="auth-form__switch-btn" onClick={OpenLogIn}>Đăng nhập</span>
            </div>

            <div className="auth-form__form">
              <div className="auth-form__group">
                <input type="tel" className="auth-form__input" pattern="[0]{1}[1-9]{1}[0-9]{8,9}" placeholder="Số điện thoại của bạn"></input>
              </div>
              <div className="auth-form__group">
                <input type="password" className="auth-form__input" placeholder="Mật khẩu của bạn"></input>
                <input type="password" className="auth-form__input" placeholder="Nhập lại mật khẩu"></input>
              </div>
            </div>

            <div className="auth-form__aside">
              <div className="auth-form__policy">
                Bằng việc đăng kí, bạn đã đồng ý với ShopND về<br />
                <a href="#" className="auth-form__policy-link">Điểu khoản dịch vụ</a>&
                <a href="#" className="auth-form__policy-link">Chính sách bảo mật</a>
              </div>
            </div>

            <div className="auth-form__controls">
              <button className="btn btn-tl" onClick={CloseForm}>TRỞ LẠI</button>
              <button className="btn btn--primary">ĐĂNG KÝ</button>
            </div>
          </div>

          {/* form đăng nhập */}
          <div className="auth-form__log-in">
            <div className="auth-form__header">
              <h3 className="auth-form__heading">Đăng nhập</h3>
              <span className="auth-form__switch-btn" onClick={OpenSignUp}>Đăng ký</span>
            </div>

            <div className="auth-form__form">
              <div className="auth-form__group">
                <input type="tel" className="auth-form__input" pattern="[0]{1}[1-9]{1}[0-9]{8,9}" placeholder="Số điện thoại của bạn"></input>
              </div>
              <div className="auth-form__group">
                <input type="password" className="auth-form__input" placeholder="Mật khẩu của bạn"></input>
              </div>
            </div>

            <div className="auth-form__aside">
              <div className="auth-form__forget-pass">
                <a href="#">Quên mật khẩu</a>
              </div>
            </div>

            <div className="auth-form__controls">
              <button className="btn btn-tl" onClick={CloseForm}>TRỞ LẠI</button>
              <button className="btn btn--primary">ĐĂNG NHẬP</button>
            </div>
          </div>

          <div className="auth-form__socials">
            <a href="#" className="btn btn--with-icon btn--with-icon">
              <i className="auth-form__icon-fb fa-brands fa-facebook"></i>
              Facebook
            </a>
            <a href="#" className="btn btn--with-icon">
              <i className="auth-form__icon-gg fa-brands fa-google"></i>
              Google
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function OpenSignUp() {
  CloseForm();
  var modal = document.querySelector('.modal');
  modal.style = "display: flex";
  var f = document.querySelector('.auth-form__sign-up'); 
  f.style = 'display: inline-block'
}

function OpenLogIn() {
  CloseForm();
  var modal = document.querySelector('.modal');
  modal.style = "display: flex";
  var f = document.querySelector('.auth-form__log-in'); 
  f.style = 'display: inline-block'
}

function CloseForm() {
  var modal = document.querySelector('.modal');
  modal.style = "display: none";
  var formLog = document.querySelector('.auth-form__log-in');
  formLog.style = 'display: none';
  var formSign = document.querySelector('.auth-form__sign-up');
  formSign.style = 'display: none';
}

function select_history(str) {
  var headerSI = document.querySelector(".header__search-input")
  headerSI.value = str
}

function OutInput() {
  setTimeout(() => {
    document.querySelector(".header__search-history").style = 'display: none'
  }, 150)
}

function FocusInput() {
  document.querySelector(".header__search-history").style = 'display: block'
}

export default Header;