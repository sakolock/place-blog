import Text from "../Typography/Text"

export default function Card({title}) {
  return (
    <article className="rounded-md border border-blue-300 m-3 p-5">
      <header>
        <Text type="h3">{title}</Text>
      </header>
    </article>
  )
}
