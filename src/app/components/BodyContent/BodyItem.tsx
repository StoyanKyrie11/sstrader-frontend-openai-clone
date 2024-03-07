import { CustomLink } from "../CustomLink";

type BodyItemProps = {
  text: string;
  linkText: string;
};

function BodyItem({ text, linkText }: BodyItemProps) {
  return (
    <section className="flex flex-col space-y-2 px-4">
      <h2 className="text-xl md:text-3xl text-start cursor-pointer">{text}</h2>
      <CustomLink href="/research" variant={"bodyItem"}>
        {linkText}
      </CustomLink>
    </section>
  );
}

export default BodyItem;
