import Layout from "../components/Layout.jsx";

export default function Home() {
  return (
    <Layout>
      <div id="hero">
        <h1>Borderline Pizza & Taco Jerry&apos;s</h1>
        <section id="store-info">
          <h3>&quot;Best Pizza Anywhere&quot;</h3>
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
