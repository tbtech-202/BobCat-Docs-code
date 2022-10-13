import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PYCHero from "@site/src/components/PYCHero";
import PYCButton from "@site/src/components/Button";
import Head from '@docusaurus/Head';

export default function Home(): JSX.Element {
  return (
    <DefaultLayout
      title="Server Manager"
      description="Server Manager's website"
    >
<Head>
<script async src="https://arc.io/widget.min.js#hD9CJ6sv"></script>
</Head>
      <PYCHero
        title="Server Manager"
        subtitle=" A simple customizable multipurpose Discord bot"
        hasLogo={true}
      />
      <main className="content-wrap--home-page">
        Imagine a bot that can take away all the stress of setting up a simple moderation, giveaways, suggestions, and poll system, so you can relax and have the bot do it for you. Server Manager is here to help! Let Server Manager do the hard wok for you. Server Manager features many widely-used systems such as <strong>moderation</strong>, <strong>giveaways</strong>, <strong>suggestions</strong>, <strong>polls</strong>, <strong>utility</strong>, and <u>much more</u>! <a href="/intro">Learn more...</a>
      </main>
    </DefaultLayout>
  );
}
