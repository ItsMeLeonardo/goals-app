import { useState } from "react";
import Avvatars from "avvvatars-react";

type Props = {
  alt: string;
  src: string;
};

export default function Avatar({ alt, src }: Props) {
  const [error, setError] = useState(false);
  const handleError = () => setError(true);

  return (
    <>
      {error ? (
        <Avvatars value={alt} />
      ) : (
        <img src={src} alt={alt} onError={handleError} />
      )}
    </>
  );
}
