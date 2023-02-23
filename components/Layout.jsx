import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsChevronLeft } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "next-auth/react";

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();

  const [isBackButtonVisible, setIsBackButtonVisible] = useState("hidden");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/" && router.pathname !== "/menu") {
      setIsBackButtonVisible("visible");
    }
  }, [router]);

  const logoutHandler = () => {
    signOut({ callbackUrl: "/admin/login" });
  };

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

      <ToastContainer position="bottom-center" limit={2} />

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

        <main>
          {/* <aside id="admin-id">{session?.user.name}</aside> */}
          {session?.user ? (
            <aside id="admin-id">
              <p>{`Currently logged in as ${session.user.isDev ? "Dev" : "Admin"} ${session.user.name}`}</p>
              <button className="rounded bg-red-300 p-2" onClick={logoutHandler}>logout</button>
            </aside>
          ) : (
            <aside  data-logged-out id="admin-id">
              {status}
            </aside>
          )}
          {children}
        </main>

        <footer>
          <p>Copyright © 2022 Borderline Pizza</p>
        </footer>
      </div>
    </>
  );
}
