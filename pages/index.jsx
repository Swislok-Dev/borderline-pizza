import Layout from "../components/Layout.jsx";

export default function Home() {
  return (
    <Layout>
      <div id="hero">
        <h1 className="text-3xl">Borderline Pizza & Taco Jerry&apos;s</h1>
        <section id="store-info">
          <p>&quot;Best Pizza Anywhere&quot;</p>
          <div id="store-hours">
            <p>Monday - Saturday</p>
            <p>11AM - 9PM</p>
          </div>
          <p>Closed on Sunday</p>
        </section>
      </div>
    </Layout>
  );
}
