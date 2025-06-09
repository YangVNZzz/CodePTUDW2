import Image from "next/image"; 
import Link from "next/link";
import Header from "./components/header/header"; // Import đúng Header
import Footer from "./components/footer/footer"; // Import đúng Footer
import styles from "./page.module.css"; // Giữ nguyên nếu bạn có styles cho trang
import Product from "./components/product"; // Thêm dòng này


export default function Home() {
  return (
  <main>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.ct1}>
          <Product/>
          <div className={styles.h}>
            <div className={styles.t}>
             <div className={styles.t1}>
             <Image src="/lk10vannam.jpg" alt="" width={197} height={300}/>
             <div className={styles.es}>200.000VND</div>
             </div>
             <div className={styles.t2}>
              <div className={styles.name}>
                <h1 className={styles.namef}>Luyện Khí 10 Vạn Năm</h1>
              </div>
              <div className={styles.nameother}>
                <p className={styles.nao}>Lian Qi Shi Wan Nian, One Hundred Thousand Years of Qi Training</p>
              </div>
             </div>
            </div>
          </div>
          <div className={styles.h}>
            <div className={styles.t}>
             <div className={styles.t1}>
             <Image src="/baclluyenthanhthan.jpg" alt="" width={197} height={300}/>
             <div className={styles.es}>200.000VND</div>
             </div>
             <div className={styles.t2}>
              <div className={styles.name}>
                <h1 className={styles.namef}>Bách Luyện Thành Thần</h1>
              </div>
              <div className={styles.nameother}>
                <p className={styles.nao}>Bai Lian Cheng Shen, Apotheosis</p>
              </div>
             </div>
            </div>
          </div>
          <div className={styles.h}>
            <div className={styles.t}>
             <div className={styles.t1}>
             <Image src="/dinhcapkhivan.jpg" alt="" width={197} height={300}/>
             <div className={styles.es}>200.000VND</div>
             </div>
             <div className={styles.t2}>
              <div className={styles.name}>
                <h1 className={styles.namef}>Đỉnh Cấp Khí Vận, Lặng Lẽ Tu Luyện Ngàn Năm</h1>
              </div>
              <div className={styles.nameother}>
                <p className={styles.nao}>Ding Ji Qi Yun, An Xin Xiu Lian Qian Nian</p>
              </div>
             </div>
            </div>
          </div>
          <div className={styles.h}>
            <div className={styles.t}>
             <div className={styles.t1}>
             <Image src="/taco90ty.jpg" alt="" width={197} height={300}/>
             <div className={styles.es}>210.000VND</div>
             </div>
             <div className={styles.t2}>
              <div className={styles.name}>
                <h1 className={styles.namef}>Ta Có 90 Tỷ Tiền Liếm Cẩu!</h1>
              </div>
              <div className={styles.nameother}>
                <p className={styles.nao}>Wo You 90 Yi Lian Gou Qian!</p>
              </div>
             </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </main>
  );
}
