import { FunctionComponent } from "react";
import Button from "./Button.tsx";
import { useNavigate } from "react-router-dom";

interface OwnProps {}

type Props = OwnProps;

const BackButton: FunctionComponent<Props> = () => {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
};

export default BackButton;
