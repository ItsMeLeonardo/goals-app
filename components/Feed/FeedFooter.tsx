import { Tag } from "models/tag";

type Props = {
  title: string;
  tags: Tag[];
};

// const tags = ["React", "Next.js", "TypeScript", "Node.js", "Express"];

export default function FeedFooter({ title, tags }: Props) {
  return (
    <footer className="feed-footer">
      <div className="feed-caption">
        <h3 className="feed-title">{title}</h3>
      </div>

      <ul className="feed-tag-list">
        {tags.map((tag) => (
          <li className="feed-tag" key={tag.id.toString()}>
            <span className="feed-tag-text">#{tag.name}</span>
          </li>
        ))}
      </ul>

      {/*             <div className="feed-likeBy">
<picture className="likeBy-photo">
  <img
    src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    alt=""
  />
</picture>
<picture className="likeBy-photo">
  <img
    src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    alt=""
  />
</picture>
<picture className="likeBy-photo">
  <img
    src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
    alt=""
  />
</picture>
<p className="likeBy-text">
  Leido por <strong>Anna Doe</strong> y 250 más
</p>
</div> */}

      {/* <div className="feed-comment-summary text-muted">
View all 20 comments
</div> */}
    </footer>
  );
}
