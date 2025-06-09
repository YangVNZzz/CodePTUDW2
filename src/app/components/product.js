import Image from "next/image"; 
import Link from "next/link";
import styles from "./product.module.css"
export default function Product(props) {
    const {product} = props;
    return (
          <div className={styles.h}>
            <div className={styles.t}>
             <div className={styles.t1}>
             <Image src="/thuongnguyendo.jpg" alt="" width={197} height={300}/>
             <div className={styles.es}>180.000VND</div>
             </div>
             <div className={styles.t2}>
              <div className={styles.name}>
                <h1 className={styles.namef}>Thương Nguyên Đồ</h1>
              </div>
              <div className={styles.nameother}>
                <p className={styles.nao}>Cang Yuan To</p>
              </div>
             </div>
            </div>
          </div>
    );
}