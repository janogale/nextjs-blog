import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import Date from "../../components/date";

import { getAllPostByAuthor, getAllPathsByAuthor } from "../../lib/posts";

// Add this import at the top of the file
import utilStyles from "../../utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData[0].title}</title>
      </Head>
      {postData.map(({ title, author, date, id }) => {
        return (
          <article key={title}>
            <Link href={`/posts/${id}`}>
              <a className={utilStyles.headingMD}>{title}</a>
            </Link>
            <div className={utilStyles.lightText}>
              <Date dateString={date} />
              {" by "}
              {author && <strong>{author}</strong>}
            </div>
          </article>
        );
      })}
    </Layout>
  );
}

function slugify(title) {
  if (!title) return "/";

  let slug = title.replace(/\s+/g, "-");

  return slug.toLowerCase();
}

export async function getStaticPaths() {
  const paths = getAllPathsByAuthor();

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getAllPostByAuthor(params.author);

  return {
    props: {
      postData,
    },
  };
}
