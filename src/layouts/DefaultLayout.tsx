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
                <meta property="og:description" content="Server Manager is a unique Discord bot that gives server moderators and admins easy and reliable ways to moderate servers, create interactive giveaways, create polls to vote on, and more. Let Server Manager do the hard work for you." />
                <meta property="og:title" content="Server Manager" />
                <meta property="og:image" content="https://imgur.com/BHyNRD2.png"/>
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
