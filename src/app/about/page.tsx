import Image from 'next/image';
import myImage from './myImage.jpg';
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <article className={styles.root}>
      <Image
        className={styles.image}
        src={myImage}
        alt="photo"
        loading="eager"
      />
      <div>
        {' '}
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro amet
        consequatur ipsum quo voluptatem aspernatur ut dolorem voluptatibus
        consequuntur, hic commodi unde. Doloribus, sit eius fugit maxime maiores
        ullam laborum sapiente sed assumenda ad natus beatae aut quidem itaque.
        Perspiciatis doloremque impedit iste fugiat velit necessitatibus dolores
        ratione harum repudiandae.{' '}
      </div>
    </article>
  );
}
