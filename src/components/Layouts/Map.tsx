import { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const Map: FunctionComponent<Props> = (props) => {
  console.log(props);
  return <div>Map</div>;
};

export default Map;
