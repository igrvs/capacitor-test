import {
  Navbar,
  Block,
  BlockTitle,
  Link,
  Button,
  Dialog,
  DialogButton,
} from "konsta/react";
import { useRouter } from "next/router";
import { Filesystem, Directory } from "@capacitor/filesystem";
import { FileOpener } from "@capacitor-community/file-opener";
import { useState } from "react";
import { Payslip } from "@/types";

export function PayslipItem({ payslip }: { payslip: Payslip }) {
  const [alert, setAlert] = useState(false);
  const router = useRouter();
  return (
    <>
      <Navbar
        left={
          <Link navbar onClick={() => router.back()}>
            Back
          </Link>
        }
        title={`Payslip №${payslip.id}`}
      />
      <BlockTitle>From - To</BlockTitle>
      <Block>
        <p>
          {new Date(payslip.fromDate).toLocaleDateString()} -{" "}
          {new Date(payslip.toDate).toLocaleDateString()}
        </p>
      </Block>
      <BlockTitle>PDF</BlockTitle>
      <Block>
        <Button
          onClick={async () => {
            try {
              const { path } = await Filesystem.downloadFile({
                path: "dummy.pdf",
                url: payslip.file,
                directory: Directory.Documents,
              });
              await FileOpener.open({
                filePath: path as string,
              });
            } catch (e) {
              setAlert(true);
            }
          }}
        >
          Download PDF
        </Button>
      </Block>

      <Dialog
        opened={alert}
        onBackdropClick={() => setAlert(false)}
        title="Error"
        content="Something went wrong. Please try again later."
        buttons={
          <DialogButton onClick={() => setAlert(false)}>Ok</DialogButton>
        }
      />
    </>
  );
}
