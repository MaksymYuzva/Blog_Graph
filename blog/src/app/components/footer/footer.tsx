import Image from "next/image";
import styles from "@/app/components/Footer/Footer.module.scss";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
      </div>
    </div>
  );
}

export default Footer;
