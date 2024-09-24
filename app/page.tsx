import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <main id="home" className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Your Names Portfolio</h1>
        <p className="text-xl mb-4">キャッチメッセージを記載します</p>
      </main>

      <section id="about" className="py-20">
        <h2 className="text-3xl font-bold mb-4 text-center">ABOUT</h2>
        <p className="text-lg text-center mx-auto max-w-xl">あなたについて記載します</p>
      </section>

      <section id="work" className="py-20 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-center">WORK</h2>
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-semibold">Project title 1</h3>
            <p className="text-lg mt-2">プロジェクトについて説明します</p>
          </div>
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-semibold">Project title 2</h3>
            <p className="text-lg mt-2">プロジェクトについて説明します</p>
          </div>
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-semibold">Project title 3</h3>
            <p className="text-lg mt-2">プロジェクトについて説明します</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold mb-4 text-center">CONTACT</h2>
        <p className="text-lg text-center">Email: your.email@example.com</p>
        <p className="text-lg text-center">Phone: 123-456-7890</p>
      </section>
    </Layout>
  );
}
