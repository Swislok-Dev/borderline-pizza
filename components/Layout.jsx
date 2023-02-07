import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsChevronLeft } from "react-icons/bs";

export default function Layout({ title, children }) {
  const [isBackButtonVisible, setIsBackButtonVisible] = useState("hidden");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/" && router.pathname !== "/menu") {
      setIsBackButtonVisible("visible");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>
          {title ? title + "- Borderline Pizza" : "Borderline Pizza"}
        </title>
        <meta name="description" content="Pizza Restaurant Website" />
        <link rel="icon" href="/favicon/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family=Montserrat&family=Source+Sans+Pro:wght@400;500;600;700&display=swap);
        </style>
      </Head>

      <div id="content">
        <header>
          <nav>
            <div className="back-button-container">
              <BsChevronLeft
                style={{ visibility: isBackButtonVisible }}
                onClick={() => router.back()}
                className="back-button"
              />
            </div>

            <Link href="/">
              <a>
                <h2 id="home-link">Borderline Pizza</h2>
              </a>
            </Link>

            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>Copyright © 2022 Borderline Pizza</p>
        </footer>
      </div>
    </>
  );
}
