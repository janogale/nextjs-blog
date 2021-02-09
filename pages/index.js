import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../utils.module.css";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, author }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                  {author && (
                    <span>
                      {" by "}
                      <Link href={`/author/${author.toLowerCase()}`}>
                        <a>{author}</a>
                      </Link>
                    </span>
                  )}
                </small>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log(context.locales);
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
