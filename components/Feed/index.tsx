import FeedHeader from "components/Feed/FeedHeader";
import FeedBody from "components/Feed/FeedBody";
import FeedFooter from "components/Feed/FeedFooter";

export default function Feed() {
  return (
    <aside className="feed">
      <FeedHeader />
      <FeedBody />
      <FeedFooter />
    </aside>
  );
}
