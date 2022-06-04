import { FormShareProvider } from "components/Pages/Share/context";

import FormShare from "components/Pages/Share/Form";

export default function Index() {
  return (
    <FormShareProvider>
      <FormShare />
    </FormShareProvider>
  );
}
