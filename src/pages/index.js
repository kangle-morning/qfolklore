import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function FeatureCard({ title, text, link }) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="wiki-card">
        <h3>{title}</h3>
        <p>{text}</p>
        <Link className="button button--secondary button--sm" to={link}>
          Explore
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout
      title="Mathematical Physics Statements Wiki"
      description="A structured index of proved, conjectured, and disproved statements in quantum physics and statistical physics."
    >
      <main>
        <section className="hero hero--custom">
          <div className="container">
            <h1 className="hero__title">Mathematical Physics Statements Wiki</h1>
            <p className="hero__subtitle">
              A searchable, tag-based index of proved, conjectured, and disproved statements
              in quantum physics and statistical physics.
            </p>

            <div className="hero-buttons">
              <Link className="button button--primary button--lg" to="/docs/intro">
                Start Browsing
              </Link>
              <Link className="button button--outline button--lg" to="/docs/open-problems/long-range-area-laws">
                Open Problems
              </Link>
            </div>
          </div>
        </section>

        <section className="container margin-vert--xl">
          <div className="row">
            <FeatureCard
              title="Proved"
              text="Rigorous theorems with assumptions, scope, variants, and references."
              link="/docs/proved/mermin-wagner"
            />
            <FeatureCard
              title="Conjectured"
              text="Important open statements, expected principles, and active research directions."
              link="/docs/conjectured/eth"
            />
            <FeatureCard
              title="Disproved"
              text="Counterexamples, false generalizations, and cleaned-up folklore."
              link="/docs/disproved/false-area-law-variant"
            />
          </div>
        </section>

        <section className="container margin-vert--lg">
          <div className="wiki-panel">
            <h2>How to use this site</h2>
            <ul>
              <li>Browse by status: proved, conjectured, disproved.</li>
              <li>Browse by subject: QFT, many-body, operator algebra, statistical mechanics.</li>
              <li>Use tags to jump across related statements.</li>
              <li>Use the search bar to locate statements, aliases, or keywords.</li>
            </ul>
          </div>
        </section>
      </main>
    </Layout>
  );
}