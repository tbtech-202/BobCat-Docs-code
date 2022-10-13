import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PYCHero from "@site/src/components/PYCHero";
import PYCButton from "@site/src/components/Button";
import Head from '@docusaurus/Head';
import mains from '/docs/intro';

export default function Home(): JSX.Element {
  return (
    <mains />
  );
}
