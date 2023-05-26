import Date from "../Common/Date";
import Text from "../Typography/Text";

const Comment = ({content, display_name, updated_at }) => (
  <section className="bg-gray-200 rounded-md px-5 py-3">
    <header>
      <Text type="h3">{display_name}</Text>
    </header>
    <Text type="p" className="md:text-base">{content}</Text>
    <footer className="flex flex-row justify-end">

      <Date text="Last updated " date={updated_at} />
    </footer>
  </section>
)

export default Comment;
