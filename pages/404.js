import { useRouter } from "next/router";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../utils.module.css";

export default function NofFound() {
  const router = useRouter();
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <p>
          page does not exist <strong>{router.asPath.slice(1)}</strong>
        </p>
        <h3>
          <Link href="/">
            <a>Back to Home</a>
          </Link>
        </h3>
      </section>
    </Layout>
  );
}
