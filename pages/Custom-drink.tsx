import { Inter } from "@next/font/google";
import Head from "next/head";
import DrinkCard from "../components/DrinkCard";
import { BiPlus } from "react-icons/bi";

const inter = Inter({ subsets: ["latin"] });

export default function CustomDrink() {
  return (
    <>
      <Head>aaa</Head>
      <div className="flex">
        <div className="p-3">
          <DrinkCard />
        </div>
        <div className="p-3">
          <DrinkCard />
        </div>
        <div className="p-3">
          <DrinkCard />
        </div>
        <div className="p-3">
          <DrinkCard />
        </div>
      </div>
      <div className="flex">
        <div className="p-3">
          <DrinkCard />
        </div>
        <div className="p-3">
          <DrinkCard />
        </div>
        <div className="p-3">
          <DrinkCard />
        </div>
        <div className="p-3">
          <DrinkCard />
        </div>
        <button className="bg-blue-800 text-white fixed p-3 cursor-pointer rounded-md bottom-1 ">
          <BiPlus />
        </button>
      </div>
    </>
  );
}
