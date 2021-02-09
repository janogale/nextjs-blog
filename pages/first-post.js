import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/layout";

export default function () {
  return (
    <Layout>
      <div>
        <h1>First Post</h1>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
        <div>
          <Image
            src="/images/profile.jpg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />{" "}
        </div>
        <Head>
          <title>first post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </Layout>
  );
}
