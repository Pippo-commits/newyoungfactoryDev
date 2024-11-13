import Link from "next/link";
import Head from "next/head";

export default function home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Young Factory Video e Siti Web</title>
      </Head>
      <div>
        <div>
          <div id="home_hero_canvas">
            <h1 id="home_hero_h1">
              Il Futuro avanza, <span>TU</span> sei al passo?
            </h1>

            <h2 id="home_hero_h2">
              Sviluppa il tuo progetto, accelera la
              <span>TUA</span>
              innovazione
            </h2>
          </div>
          <div>
            <Link href="/contacts">Condividi la tua idea!</Link>
          </div>
        </div>
        <div id="domande">
          <ul>
            <li>
              <Link href="/your-success">Video?</Link>
            </li>
            <li>
              <Link href="/contacts">Sito Web?</Link>
            </li>
            <li>
              <Link href="/">Consulenza?</Link>
            </li>
            <li>
              <Link href="/">Perchè sei qui?</Link>
            </li>
          </ul>
        </div>
        <div id="CTA_voi">
          <p>
            Crediamo siate qui perchè i nostri clienti hanno davvero la
            precedenza. Vogliamo quindi che siano i nostri clienti a parlare e a
            mostrarvi di cosa siamo capaci.
          </p>
          <button>
            <Link href="/chi-siete-voi.html">I nostri clienti</Link>
          </button>
        </div>
      </div>
    </>
  );
}
