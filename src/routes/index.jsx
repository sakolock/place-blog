import DefaultLayout from "../components/Layout/Default"

export default function Index() {
  return (
    <DefaultLayout>
      <h1>Hi</h1>
    </DefaultLayout>
  )
}

export const ErrorBoundary = (e) => (
  <div>{JSON.stringify(e)}</div>
)
