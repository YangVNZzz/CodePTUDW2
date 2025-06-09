"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from './chitietsanpham.module.css';
import SimpleSlider from "../components/slider/slider";
export default function chitiet(params) {
  const [product, setProduct] = useState(null);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    async function fetchProductId(params) {
      const { productId } = await params;
      setProductId(productId);
    }
    fetchProductId(params.params);
  }, [params]);

  useEffect(() => {
    async function fetchProduct(productId) {
      try {
        if (!productId) {
          console.log("Product ID is null");
          return;
        }
        const response = await fetch(`/api/products/${productId}`);
        const result = await response.json();
        if (response.ok) {
          setProduct(result.product);
        } else {
          console.log("Error fetching product:", result.error);
        }
      } catch (error) {
        console.log("Fetch error:", error);
      }
    }
    fetchProduct(productId);
  }, [productId]);

  return (
    <div className={styles.content}>
      <div className={styles.ct}>
        <div className={styles.img}>
         <SimpleSlider/>
        </div>
        <h1 className={styles.gt}>Giới Thiệu</h1>
      </div>
      <div className={styles.thongtin}>
        <h1 className={styles.chu1}>Thương Nguyên Đồ</h1>
        <p className={styles.chund}>Tác giả: Ngã Cật Tây Hồng Thị</p>
        <p className={styles.chund}>Tình trạng: Đang Cập Nhật</p>
        <p className={styles.chund}>Thể loại: Action - Manhua - Martial Arts - Cổ Đại - Truyện Màu</p>
        <p className={styles.chund}>Lượt mua: 5,548,793</p>
        <p className={styles.chund}>lượt thích: 347,263</p>
        <p className={styles.chund}>Lượt theo dõi: 1,288,723</p>
        <div className={styles.priceContainer}>
          <span className={styles.gia}>180.000
            <span className={styles.khuyenmai}> 195.000</span>
          </span>
          <button className={styles.muangay}>Mua Ngay</button>
          <button className={styles.themgiohang}>🛒 Thêm vào Giỏ Hàng</button>
        </div>
        
        <p className={styles.chund1}>“Thương Nguyên Đồ” (滄元圖, Cang Yuan Tu) là một tiểu thuyết huyền huyễn đan xen cao võ thế giới, tác phẩm của Ngã Cật Tây Hồng Thị, </p>
        <p className={styles.chund2}></p>
        <p className={styles.chund3}></p>
        <p className={styles.chund4}></p>
      </div>
      <div>
      <h1></h1>
      </div>
    </div>
    
);
}
