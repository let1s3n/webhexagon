import Head from "next/head";
import { Inter } from "next/font/google";
import Home from "@/components/templates/Home/home";
export default function index() {
  return (
    <>
      <Head>
        <title>Hexagon Studio</title>
      </Head>
      <Home />
    </>
  );
}
