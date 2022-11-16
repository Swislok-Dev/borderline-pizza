import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + "- Borderline Pizza" : "Borderline Pizza"}
        </title>
        <meta name="description" content="Pizza Restaurant Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header className="sticky top-0 z-10 w-full bg-white shadow">
          <nav className="z-1 flex h-12 items-center justify-between px-4 ">
            <Link href="/">
              <a className="text-lg font-bold">Borderline Pizza</a>
            </Link>
            <div>
              <Link href="/menu">
                <a className="p-2">Menu</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4 text-center">
          {children}
        </main>
        <footer className="flex h-10 items-center justify-center shadow-inner">
          <p>Copyright © 2022 Borderline Pizza</p>
        </footer>
      </div>
    </>
  );
}
