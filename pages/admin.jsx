import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function AdminPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/admin/login");
    }
  }, [router, session]);

  return (
    <Layout title="Admin">
      <div>Welcome {session?.user.name}</div>
    </Layout>
  );
}

export default AdminPage;
