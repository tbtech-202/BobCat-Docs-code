import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PYCHero from "@site/src/components/PYCHero";
import PYCButton from "@site/src/components/Button";
import Head from '@docusaurus/Head';

export default function Home(): JSX.Element {
  return (
    <DefaultLayout
      title="BobCat Bot"
      description="Server Manager's website"
    >
      <Head>
      <script async src="https://arc.io/widget.min.js#hD9CJ6sv%22%3E</script>
      </Head>
      <PYCHero
        title="BobCat Bot"
        hasLogo={true}
      />
      <main className="content-wrap--home-page">
        discord bot that can do anything
      </main>
    </DefaultLayout>
  );
}
