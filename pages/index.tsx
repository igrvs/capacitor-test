import { Inter } from "next/font/google";
import { Page } from "konsta/react";
import { useRouter } from "next/router";
import { PayslipsList } from "@/components/list";
import { PayslipItem } from "@/components/item";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { PAY_SLIPS } from "@/static/payslips";

const inter = Inter({ subsets: ["latin"] });

const listVariants = {
  initial: {
    opacity: 0,
    x: "-40vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "40vw",
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    x: "40vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-40vw",
  },
};

const springConfig = {
  type: "ease",
};

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  const router = useRouter();
  const p = router.query.p;

  return (
    <Page className={`${inter.className}`}>
      <AnimatePresence mode="popLayout">
        {!p && (
          <motion.div
            key="payslipsList"
            variants={listVariants}
            animate="in"
            initial={loaded ? "initial" : false}
            exit="out"
            transition={springConfig}
          >
            <PayslipsList />
          </motion.div>
        )}
        {p &&
          PAY_SLIPS.map((payslip) => {
            if (payslip.id === p) {
              return (
                <motion.div
                  key="payslipItem"
                  variants={itemVariants}
                  animate="in"
                  exit="out"
                  initial="initial"
                  transition={springConfig}
                >
                  <PayslipItem payslip={payslip} />
                </motion.div>
              );
            }
          })}
      </AnimatePresence>
    </Page>
  );
}
