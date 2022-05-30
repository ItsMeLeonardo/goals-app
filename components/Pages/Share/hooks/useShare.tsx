import { useContext } from "react";

import { FormShareContext } from "components/Pages/Share/context";

export const useShare = () => {
  const { state, ...shareFunctions } = useContext(FormShareContext);

  return {
    formState: state,
    ...shareFunctions,
  };
};
