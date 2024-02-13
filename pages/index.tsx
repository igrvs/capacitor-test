import { Inter } from "next/font/google";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { FileOpener } from "@capacitor-community/file-opener";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <button
          onClick={async () => {
            const { path } = await Filesystem.downloadFile({
              path: "dummy.pdf",
              url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
              directory: Directory.Documents,
            });
            const r = await FileOpener.open({
              filePath: path as string,
            });
          }}
        >
          Download PDF
        </button>
      </div>
    </main>
  );
}
