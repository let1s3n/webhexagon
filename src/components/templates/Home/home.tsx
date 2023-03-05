import React, { useEffect } from "react";
import Image from "next/image";

import { Container, Button } from "react-bootstrap";
import styles from "./home.module.scss";

const Home = () => {
  useEffect(() => {
    console.log("styles: ", styles);
  }, [styles]);

  return (
    <>
      <section className={styles.introduction}>
        <Container className="g-0 d-flex flex-column flex-xl-row p-3 px-xxl-10 pt-xxl-9 justify-content-between align-items-center align-items-xl-stretch">
          <div className={styles.imageContainer}>
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN}images/illustrationHome2.png`}
              alt="Illustration Home 1"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className={styles.right}>
            <div>
              <h1 className={styles.title + " text-white pb-3 text-center text-xl-end"}>
                Lorem ipsum dolor sit amet
              </h1>
              <h1 className={styles.title + " text-white text-center text-xl-end"}>
                Lorem ipsum
              </h1>
            </div>
            <div className={styles.textContainer}>
              <p className="text-white pb-3 text-center text-xl-end">
                Lorem ipsum dolor sit amet consectetur. Congue dis et mattis eu.
                Felis ipsum elit nunc sit mollis orci vestibulum. Turpis
                malesuada dui ut nisi et rutrum fermentum mattis.
              </p>
              <p className="text-white text-center text-xl-end">
                Morbi ac consequat eu lobortis sed vel. Eu feugiat nibh
                vulputate congue mattis tristique. Urna dictumst est viverra
                lacus dictumst tristique ut maecenas. Integer ac tristique
                sapien dignissim
              </p>
            </div>
            <div
              className={styles.customButtonContainer + " position-relative"}
            >
              <Button variant="link" className={styles.customButton}>
                CONTACTAR AHORA
              </Button>
              <div className={styles.buttonDecoration}></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
