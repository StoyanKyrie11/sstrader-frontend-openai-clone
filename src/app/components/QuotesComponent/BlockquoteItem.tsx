type BlockquoteItemProps = {
  content: string;
  author: string;
  title: string;
};

function BlockquoteItem({ content, author, title }: BlockquoteItemProps) {
  return (
    <div className="flex flex-col space-y-2">
      <blockquote className="text-white text-3xl md:text-heading-2 md:leading-[50px] font-sourceSansProFont font-normal after:content-['”'] after:font-lg lg:before:absolute before:left-6 before:content-['“'] before:font-lg">
        {content}
      </blockquote>
      <span className="font-sourceSansProFont text-white text-xl">
        {author}
      </span>
      <span className="font-sourceSansProFont text-white text-xl">{title}</span>
    </div>
  );
}

export default BlockquoteItem;
