import "@testing-library/jest-dom/extend-expect";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas, far, fab);

configure({ adapter: new Adapter() });
