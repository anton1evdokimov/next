import Head from "next/head";
import Link from "next/link";

export const MainContainer = ({ children, keywords }) => {
  return (
    <>
    <Head>
        <meta keywords={"next test-next " + keywords} />
    </Head>
      <div className="navbar">
        <Link href="/users">
          <p>Users</p>
        </Link>
        <Link href="/">
          <p>Main</p>
        </Link>
      </div>
      <div>{children}</div>
    </>
  );
};
