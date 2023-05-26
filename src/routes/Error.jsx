import { useRouteError } from "react-router-dom";
import DefaultLayout from "../components/Layout/Default";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <DefaultLayout>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </DefaultLayout>
  );
}
