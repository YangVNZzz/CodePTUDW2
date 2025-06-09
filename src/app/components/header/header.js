import styles from "./header.module.css"; // Import CSS Module đúng
import Image from "next/image"; // Import Image từ Next.js

export default function Header() {
    return (
        <div className={styles.header}>
          <div className={styles.hd}>
            <div className={styles.img}>
              <Image src="/logo.png" alt="" width={180} height={180}/>
            </div>
            <div className={styles.home}>Trang Chủ</div>
            <div className={styles.home2}>Giới Thiệu</div>
            <div className={styles.home3}>Liên Hệ</div>
          </div>
        </div>
    );
}
