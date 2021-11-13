import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title={process.env.appName}>
      <div className="container">
        <h1 className="font-bold text-5xl text-blue-600">Tailwind Content Home</h1>
      </div>
    </Layout>
  )
}