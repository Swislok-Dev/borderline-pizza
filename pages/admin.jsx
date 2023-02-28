import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import clientPromise from "../lib/mongodb";

function AdminPage({ adminSettings }) {
  const { motd, hours } = adminSettings[0];
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/admin/login");
    }
  }, [router, session]);

  return (
    <Layout title="Admin">
      <section>Welcome {session?.user.name}</section>
      <section id="motd">{motd}</section>
      <section id="store-hours">
        <article id="store-hours-schdules">Store hours schedule</article>
        <p>{hours.Monday}</p>
      </section>
    </Layout>
  );
}

export default AdminPage;

export async function getServerSideProps() {
  const client = await clientPromise;
  const db = client.db("borderline-pizza");
  const adminSettings = await db.collection("adminsettings").find({}).toArray();
  return {
    props: {
      adminSettings: JSON.parse(JSON.stringify(adminSettings)),
    },
  };
}
