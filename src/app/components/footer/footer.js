import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        {/* Trợ giúp */}
        <div className={styles.footer_support}>
          <strong>Trợ giúp</strong>
          <ul className={styles.sec}>
            <li>Hệ thống cửa hàng</li>
            <li>Liên hệ</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản sử dụng</li>
            <li>Chính sách vận chuyển, giao hàng</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách đổi trả</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </div>

        {/* Về công ty */}
        <div className={styles.footer_company}>
          <strong>Về công ty</strong>
          <ul>
            <li>Giới thiệu công ty (MWG.vn)</li>
            <li>Tuyển dụng</li>
            <li>Gửi góp ý, khiếu nại</li>
            <li>Tìm siêu thị (2961 shop)</li>
          </ul>
        </div>

        {/* Thông tin khác */}
        <div className={styles.footer_other}>
          <strong>Thông tin khác</strong>
          <ul>
            <li>Tích điểm Quà tặng VIP</li>
            <li>Lịch sử mua hàng</li>
            <li>Tìm hiểu về mua trả chậm</li>
            <li>Xem thêm</li>
          </ul>
        </div>

        {/* Logo website */}
        <div className={styles.footer_logo}>
          <strong>Website cùng tập đoàn</strong>
          <ul className={styles.logo_website}>
            <li>Giao hàng</li>
            <li>Giao hàng tiêu chuẩn</li>
            <li>
              <a href="#">
                <Image src="/logo.png" alt="Logo Manhua" width={100} height={80} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>
          Bản quyền thuộc về G.Manhua được phân phối độc quyền tại Việt Nam bởi
          CÔNG TY CỔ PHẦN Manhua
        </p>
        <p>
          Địa chỉ: Phường 4, Quận 5, TP.Hồ Chí Minh | MST: 0313175103
        </p>
        <p>
          Hotline: 1900 2222 | Email: manhua@gmail.com
        </p>
      </div>
    </footer>
  );
}
