import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "../public/img/logo.png";
import Gallery from "../components/gallery";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bocian Production</title>
        <meta name="description" content="created by Burdych" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <Image className={styles.logo} src="/img/logo.png" layout='fill' />
        </div>

        <section className="gold about">
          <h2 className={styles.nadpis}>O mně</h2>
          <p>
            Bocian je mladý devatenáctiletý DJ, který se na české scéně pohybuje
            od roku 2016. Jeho komerční začátky ho postupem času dovedly až ke
            stylům jako je Tech House, Groove a Future House, ve kterých se
            dokáže celým svým hudebním srdcem pořádně vyřádit. Jeho cesta vedla
            do mnoha klubů po celé České republice, ale největším úspěchem byla
            zcela jistě show v pražském DupleXu a support pro holandského dj &
            producenta Luckyho Charmese v hradeckém Denoche. Supportoval také
            většinu djs, kteří patří do české špičky. Dalším důležitým pilířem v
            jeho kariéře jsou maturitní plesy, na kterých se tento mladík
            objevuje poměrně často a váš večer se tak stane těžko
            zapomenutelným.
          </p>
        </section>
        <section className={styles.videos}>
          <h2 className={styles.nadpis}>Videa</h2>
          <ul className={styles.vids}>
            <li className={styles.video}>
              <video controls src="/vids/Bocian - Got This.mp4"></video>
              <div className={styles.info}>
                <h4 className={styles.podnadpis}>Got This</h4>
                <p>
                  Z fyzikálního pohledu totiž balónky působí zcela nezajímavě.
                  Nejvíc bezpochyby zaujmou děti - jedna malá holčička zrovna
                  včera div nebrečela, že by snad balónky mohly prasknout. A co
                  teprve ta stuha. Stuha, kterou je každý z trojice balónků
                  uvázán, aby se nevypustil. Očividně je uvázaná dostatečně
                  pevně, protože balónky skutečně neucházejí. To ale není nic
                  zvláštního.
                </p>
              </div>
            </li>
            <li className={styles.video}>
              <video controls src="/vids/Bocian - Keepmastik.mp4"></video>
              <div className={styles.info}>
                <h4 className={styles.podnadpis}>Keepmastik</h4>
                <p>
                  Z fyzikálního pohledu totiž balónky působí zcela nezajímavě.
                  Nejvíc bezpochyby zaujmou děti - jedna malá holčička zrovna
                  včera div nebrečela, že by snad balónky mohly prasknout. A co
                  teprve ta stuha. Stuha, kterou je každý z trojice balónků
                  uvázán, aby se nevypustil. Očividně je uvázaná dostatečně
                  pevně, protože balónky skutečně neucházejí. To ale není nic
                  zvláštního.
                </p>
              </div>
            </li>
            <li className={styles.video}>
              <video controls src="/vids/Ples aftermovie mýto.mov"></video>
              <div className={styles.info}>
                <h4 className={styles.podnadpis}>Ples aftermovie mýto</h4>
                <p>
                  Z fyzikálního pohledu totiž balónky působí zcela nezajímavě.
                  Nejvíc bezpochyby zaujmou děti - jedna malá holčička zrovna
                  včera div nebrečela, že by snad balónky mohly prasknout. A co
                  teprve ta stuha. Stuha, kterou je každý z trojice balónků
                  uvázán, aby se nevypustil. Očividně je uvázaná dostatečně
                  pevně, protože balónky skutečně neucházejí. To ale není nic
                  zvláštního.
                </p>
              </div>
            </li>
            <li className={styles.video}>
              <video
                controls
                src="/vids/Vysoké Mýto (San Frandisco).mp4"
              ></video>
              <div className={styles.info}>
                <h4 className={styles.podnadpis}>San Frandisco</h4>
                <p>
                  Z fyzikálního pohledu totiž balónky působí zcela nezajímavě.
                  Nejvíc bezpochyby zaujmou děti - jedna malá holčička zrovna
                  včera div nebrečela, že by snad balónky mohly prasknout. A co
                  teprve ta stuha. Stuha, kterou je každý z trojice balónků
                  uvázán, aby se nevypustil. Očividně je uvázaná dostatečně
                  pevně, protože balónky skutečně neucházejí. To ale není nic
                  zvláštního.
                </p>
              </div>
            </li>
          </ul>
        </section>
        <section className={`gold ` + styles.photos}>
          <h2 className={styles.nadpis}>Fotky</h2>
          <Gallery></Gallery>
        </section>
      </main>

      <section className={styles.footer}>
        <h2 className={styles.nadpis}>Kde mě najdeš</h2>

        <ul className={styles.row}>
          <li><a href="#">SoundCloud</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Presskit</a></li>
        </ul>

      </section>
    </div>
  );
}
