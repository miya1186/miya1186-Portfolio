import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link
                href="/Custom-drink"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                ドリンク
              </Link>
              <Link
                href="/"
                className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded"
              >
                問い合わせ
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        <div>{children}</div>
      </main>
    </div>
  );
}
