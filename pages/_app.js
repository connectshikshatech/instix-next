import "../styles.css";
import "../app.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { AuthProvider } from "@/context/authContext";

function MyApp({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/fav.svg" />
      </Head>
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default MyApp;
