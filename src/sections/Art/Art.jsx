import React from "react";
import styles from "../../sections/Art/Art.module.css";
import image1 from "../../assets/assets/Art/IMG20240713080353.jpg";

function Art() {
  
  return (
    <section id="ArtSlide" className={styles.container}>
      <div className={styles.slider}>

        <div className={styles.item} style={{backgroundImage: 'url({https://assetsio.gnwcdn.com/counter-strike-2-headline-cs2.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp})'}}>
          <div className="content">
            <div className="name">switzerland</div>
            <div className="des">sdnfjsdfl sjdfnfoinfnfknowenfowfo</div>
            <button>See More</button>
          </div>
        </div>


        <div className={styles.item} >
          <div className="content">
            <div className="name">switzerland</div>
            <div className="des">sdnfjsdfl sjdfnfoinfnfknowenfowfo</div>
            <button>See More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Art;
