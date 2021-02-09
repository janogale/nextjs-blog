import React from "react";

import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";

import { getAllPostIds, getPostData } from "../../lib/posts";

// Add this import at the top of the file
import utilStyles from "../../utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          {" by "}
          {postData.author && <strong>{postData.author}</strong>}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths(id) {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, ...rest }) {
  const postData = await getPostData(params.id);

  if (!postData) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      postData,
    },
  };
}
