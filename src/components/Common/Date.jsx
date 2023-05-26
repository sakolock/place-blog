import { formatDate } from "../../utils";

const Date = ({text, date}) => (
  <span className="text-gray-700 italic">{text} {formatDate(date)}</span>
)

export default Date;
