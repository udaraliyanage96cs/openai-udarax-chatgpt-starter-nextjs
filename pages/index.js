import Head from "next/head";
import styles from "./index.module.css";

export default function Home() {

  return (
    <div>
      <Head>
        <title>OpenAI - UDARAX</title>
      </Head>

      <main className={styles.main}>
        <h3>Hi This is My Starter</h3>
      </main>
    </div>
  );
}
