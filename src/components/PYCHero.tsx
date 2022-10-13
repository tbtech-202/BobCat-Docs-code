import React from 'react';

import PYCButton from './Button';

interface PYCHeroProps {
    title?: string;
    subtitle?: string;
    hasLogo?: boolean;
}

const PYCHero: React.FC<PYCHeroProps> = ({ title, subtitle, hasLogo = true }) => {
    return (
        <section className="pyc-hero">
            <div className="pyc-hero__wrap">
                { hasLogo &&
                    <img
                        src={ '/img/logo.png' }
                        alt="Pycord Logo"
                        className="logo"
                    />
                }
                <h1>{ title }</h1>
                <span className="pyc-hero__subtitle">{ subtitle }</span>
                <div className="pyc-hero__actions">
                    <PYCButton type="filled inverted wspace" link="/intro">Get Started</PYCButton>
                    <PYCButton type="filled inverted wspace" link="/category/documentation">Documentation</PYCButton>
                </div>
            </div>
        </section>
    );
};

export default PYCHero;