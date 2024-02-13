import { Navbar, List, ListItem, BlockTitle } from "konsta/react";
import { useRouter } from "next/router";
import { PAY_SLIPS } from "@/static/payslips";

export function PayslipsList() {
  const router = useRouter();
  return (
    <>
      <Navbar title="Payslips" />
      <BlockTitle>Payslips</BlockTitle>
      <List strongIos outlineIos>
        {PAY_SLIPS.map((payslip) => (
          <ListItem
            key={payslip.id}
            link
            onClick={() => {
              router.push(`/?p=${payslip.id}`, undefined, { shallow: true });
            }}
            chevronMaterial={false}
            title={`${new Date(
              payslip.fromDate
            ).toLocaleDateString()} - ${new Date(
              payslip.toDate
            ).toLocaleDateString()}`}
            subtitle={`Payslip №${payslip.id}`}
          />
        ))}
      </List>
    </>
  );
}
