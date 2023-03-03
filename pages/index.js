import { getSortedPostsData } from '../lib/posts';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis sollicitudin eros, ut posuere magna sodales eu. Phasellus mollis placerat nisl, at convallis nulla dapibus quis. Duis sagittis ullamcorper quam, at efficitur velit luctus id. Proin fringilla ipsum ante, in tincidunt velit rhoncus at. Mauris sagittis nibh accumsan dolor iaculis fringilla. Proin augue enim, aliquam sit amet posuere non, egestas in nisi. Vivamus eros ex, dapibus ut nisi ut, laoreet pulvinar est. In id quam tincidunt, fringilla sapien sed, posuere urna.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
            ))}
          </ul>
        </section>
      </Layout>
  );
}