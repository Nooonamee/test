import "./Container.css";
import { useEffect, useState } from 'react'
import { categories } from "../../data/categories";

function Container() {
  return (
    <div className="Container">
      <div className="grid">
        <div className="grid__row">
          <div className="grid__column-2">
            <Category />
          </div>
          <div className="grid__column-10">
            <HomeFilter />
            <HomeProduct />
            <div className="clear"></div>
          </div>
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
}

function Category() {
  const [category, setCategory] = useState(categories[0])

  useEffect(() => {
    var category_items = document.querySelectorAll(".category-list1 .category-item")
    for (let i=0;i<category_items.length;i++) {
      category_items[i].addEventListener('click', function(e) {
        setCategory(categories[i])
        for (let j=0;j<category_items.length;j++) {
          category_items[j].classList.remove("category-item--active")
        }
        this.classList.toggle("category-item--active")
      })
    }
  })

  // function ActiveItem(id) {
  //   setCategory(categories[id-1])
  //   var category_items = document.querySelectorAll(".category-list1 .category-item")
  //   for (var i=0;i<category_items.length;i++) {
  //     if (i != id-1) category_items[i].classList.remove("category-item--active")
  //   }
  //   category_items[id-1].classList.toggle("category-item--active")
  // }

  return (
    <nav className="category">
      <div className="category__heading">
        <i className="fa-solid fa-list"></i>
        Tất Cả Danh Mục
      </div>
      <ul className="category-list category-list1">
        {categories.map(category => (
          <li key={category.id} className="category-item"><a
            href="#"
            // onClick={() => ActiveItem(category.id)}
          >{category.name}</a></li>
        ))}
      </ul>
      <div className="category-filter">
        <div className="category-filter__heading">
          <i className="fas fa-filter"></i>
          Bộ lọc tìm kiếm
        </div>
        <ul className="category-list">
          {category.category_childe.map(category_childe => (
            <li key={category_childe} className="category-item">
              <input type="checkbox" className="category-item__checkbox" id={category_childe}/>
              <label htmlFor={category_childe} className="category-item__checkbox-label">{category_childe}</label>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

function HomeFilter() {
  function ActiveBtn(id) {
    var btns = document.querySelectorAll(".btn-small")
    for (var i=0;i<btns.length;i++) {
      btns[i].classList.remove("btn--active")
    }
    btns[id-1].classList.toggle("btn--active")
  }

  return (
    <div className="home-filter">
      <span className="home-filter__label">Sắp xếp theo</span>
      <button className="btn btn-small" onClick={() => ActiveBtn(1)}>Phổ biến</button>
      <button className="btn btn-small btn--active" onClick={() => ActiveBtn(2)}>Mới nhất</button>
      <button className="btn btn-small" onClick={() => ActiveBtn(3)}>Bán chạy</button>

      <div className="select-input">
        <p className="select-input__label">Giá</p>
        <i className="select-input__icon fa-solid fa-angle-down"></i>
        <ul className="select-input__list">
          <li className="select-input__item">Giá: Thấp đến cao</li>
          <li className="select-input__item">Giá: Cao đến thấp</li>
        </ul>
      </div>

      <div className="home-filter__paginate">
        <p>1</p>/100
      </div>
    </div>
  )
}

function HomeProduct() {
  return (
    <div className="home-product">
      <div className="grid__row">
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
        <a href="/product-details" className="grid__column-2in">
          <div className="product-item">
            <div className="product-item__img" style={{backgroundImage: 'url("https://cf.shopee.vn/file/8d0beecb7f03d74178f122c875121126")'}}></div>
            <div className="product-item__info">
              <div className="product-item__name">Nồi Cơm Điện Mini Đa Năng Jiashi 1.2L Dùng Cho 1-2 Người Hàng Nội Địa Cao Cấp N01</div>
              <div className="product-item__price">
                <div className="product-item__price-old">655.000đ</div>
                <div className="product-item__price-current">380.000đ</div>
              </div>
              <div className="product-item__action">
                <span className="product-item__heart">
                  {/* <i className="fas fa-heart"></i> */}
                  <i className="far fa-heart"></i>
                </span>
                <div className="product-item__rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
              <div className="product-item__origin">
                <span>Hà Nội</span>
              </div>
              <div className="product-item__favorite">
                {/* <i className="fas fa-check"></i> */}
                Yêu thích
              </div>
              <div className="product-item__sale-off">
                <div className="product-item__sale-off-percent">10%</div>
                <div className="product-item__sale-off-label">GIẢM</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Container;