import { useState } from "react";
import Button from "./Button";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const handleClick = () => {
    setExpanded(!isExpanded);
  };

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";

  return (
    <div>
      <span>{text}</span>
      <Button color="secondary" onClick={handleClick}>
        {isExpanded ? "Less" : "More"}
      </Button>
    </div>
  );
};

export default ExpandableText;
