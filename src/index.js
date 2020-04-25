/** @jsx createElement */
import {createElement} from "@bikeshaving/crank";
import {renderer} from "@bikeshaving/crank/dom";
import Greeting from './components/Greeting';

renderer.render(<Greeting />, document.body);