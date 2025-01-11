import { Suspense } from "react";
import BecomeAPartnerWrapper from "./BecomeAPartnerWrapper";

function Page() {
  return (
    <Suspense>
      <BecomeAPartnerWrapper />
    </Suspense>
  );
}

export default Page;
