import React from 'react';
import Head from '@docusaurus/Head';
import Layout from "@theme/Layout";

import { site } from '@site/src/constants/site';
// import '../scss/main.scss';

interface DefaultLayoutProps {
    title?: string,
    description?: string
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{ title } - { site.tagline }</title>
                <meta name="description" content={ description } />
                <meta property="og:title" content="BobCat Bot" />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="theme-color" content="#5865F2" />
            </Head>
            <Layout>
                { children }
            </Layout>
        </>
    );
};

export default DefaultLayout;
