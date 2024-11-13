import Image from "next/image";

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        New Young Factory | Costruiamo il futuro digitale insieme a te | Web e
        Video production
      </title>

      <div id="preReleaseBody">
        <Image
          id="preReleaseImage"
          src={"/SVG/Risorsa1.svg"}
          alt="suca"
          width={500}
          height={500}
          className="scale-in-center"
        ></Image>
        <h1 id="preReleaseH1" className="tracking-in-contract">
          Coming Soon
        </h1>
      </div>
    </>
  );
}
