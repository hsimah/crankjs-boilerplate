/** @jsx createElement */
import {createElement} from "@bikeshaving/crank";

function Greeting({name = "World"}) {
  return (
    <div>Hello {name}</div>
  );
}

export default Greeting;