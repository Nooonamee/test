import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'
import ProductDetail from '../components/ProductDetail/ProductDetail'

function ProductDetails() {
  return (
    <div>
      <Header />
      <a href="/">Trở về trang chủ</a>
      <ProductDetail />
      <Footer />
    </div>
  );
}

export default ProductDetails;