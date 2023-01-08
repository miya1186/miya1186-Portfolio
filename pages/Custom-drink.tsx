import { Inter } from "@next/font/google";
import Head from "next/head";
import DrinkCard from "../components/DrinkCard";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";
import ReactModal from "react-modal";

const inter = Inter({ subsets: ["latin"] });

export default function CustomDrink() {
  const [showModalFlag, setShowModalFlag] = useState(false);
  const showModal = () => {
    setShowModalFlag(true);
  };
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
        <button
          className="bg-blue-800 text-white fixed p-3 cursor-pointer rounded-md bottom-1 "
          onClick={showModal}
        >
          <BiPlus />
        </button>
      </div>

      <ReactModal
        isOpen={showModalFlag}
        onRequestClose={() => setShowModalFlag(false)}
        className="absolute  p-5 inset-10 overflow-auto w-1/2 mx-auto border border-gray-600 border-solid outline-none bg-white items-center justify-center"
      >
        <div className="">
          <h1 className="mb-1.5">モーダルです</h1>

          <form>
            <div className="mb-1.5">
              <label>ベースを入力してください</label>：
              <input
                type="text"
                placeholder="ベースを入力"
                className="outline-none"
              />
            </div>
            <div className="mb-1.5">
              <label>トッピングを入力してください</label>：
              <input
                type="text"
                placeholder="トッピングを入力"
                className="outline-none"
              />
            </div>
            <div className="flex border-t border-gray-600 border-solid p-5 justify-center">
              <div className="mr-5">
                <button
                  onClick={() => setShowModalFlag(false)}
                  className="bg-blue-800 w-24 h-10 text-white"
                >
                  キャンセル
                </button>
              </div>
              <div>
                <button
                  onClick={() => setShowModalFlag(false)}
                  className="bg-blue-800 w-24 h-10 text-white"
                >
                  OK
                </button>
              </div>
            </div>
          </form>
        </div>
      </ReactModal>
    </>
  );
}
