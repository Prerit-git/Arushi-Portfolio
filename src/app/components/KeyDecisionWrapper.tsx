"use client"
import { usePathname } from "next/navigation";
import IBKeyDecisions from "./IBKeyDecisions";
import DecisionandOutcome from "./DecisionandOutcome";

const KeyDecisionWrapper = () => {
    const pathname = usePathname();
      const IBPage = pathname.includes("indusind-bank-study");
  return (
    <>
    {
        IBPage ? <IBKeyDecisions/> : <DecisionandOutcome/>
    }
    </>
  )
}

export default KeyDecisionWrapper
