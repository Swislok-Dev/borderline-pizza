import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsChevronLeft } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";

export default function Layout({ title, children }) {
  const { status, data: session } = useSession();
  const [isActive, setIsActive] = useState(false);

  const [isBackButtonVisible, setIsBackButtonVisible] = useState("hidden");
  const router = useRouter();

  const hamburgerMenuExpand = () => [setIsActive(!isActive)];

  const showHamburgerMenu = isActive ? "active" : null;

  useEffect(() => {
    if (router.pathname !== "/" && router.pathname !== "/menu") {
      setIsBackButtonVisible("visible");
    }
  }, [router]);

  const logoutHandler = (event) => {
    event.preventDefault();
    toast.success("Successfully Logged Out");
    signOut({ callbackUrl: "/admin/login" });
  };

  const getFullYear = () => {
    return new Date().getFullYear();
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

            <ul className={`nav-menu ${showHamburgerMenu}`}>
              <li className="nav-item">
                <Link href="/menu">
                  <a onClick={() => setIsActive(false)}>Menu</a>
                </Link>
              </li>
            </ul>
            <div
              onClick={hamburgerMenuExpand}
              className={`hamburger ${showHamburgerMenu}`}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>

          {session?.user ? (
            <aside id="admin-id">
              <p>{`Currently logged in as ${
                session?.user.isDev == true ? "Dev" : "Admin"
              } ${session.user.name}`}</p>
              <div id="admin-links" className="flex gap-2">
                <button
                  type="button"
                  className="rounded bg-blue-400 p-2 text-white"
                >
                  <Link href="/admin">
                    <a>Admin Panel</a>
                  </Link>
                </button>
                <button
                  type="button"
                  className="rounded bg-red-300 p-2 text-white"
                  onClick={logoutHandler}
                >
                  logout
                </button>
              </div>
            </aside>
          ) : (
            <aside data-logged-out id="admin-id">
              {status}
            </aside>
          )}
        </header>

        <main className={showHamburgerMenu} onClick={() => setIsActive(false)}>
          {children}
        </main>

        <footer>
          Copyright © {getFullYear()} Borderline Pizza
        </footer>
      </div>
    </>
  );
}
