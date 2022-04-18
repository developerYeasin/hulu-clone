import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Results from "../components/Results";
import request from "../utils/request";

export default function Home({results}) {
  
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* navbar */}
      <Nav />
      {/* result */}
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // Fetch data from external API
  const res = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { results: data.results } };
}
