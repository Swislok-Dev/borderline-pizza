import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + '- Borderline Pizza' : 'Borderline Pizza'}
        </title>
        <meta name="description" content="Pizza Restaurant Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow">
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
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center">
          <p>Copyright © 2022 Borderline Pizza</p>
        </footer>
      </div>
    </>
  );
}
