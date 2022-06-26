type Props = {
  thumbnail: string;
};

export default function FeedBody({ thumbnail }: Props) {
  return (
    <section className="feed-body">
      <picture className="feed-photo">
        <img src={thumbnail} alt="" />
      </picture>
      {/* <div className="feed-photo-grid"></div> */}
    </section>
  );
}
