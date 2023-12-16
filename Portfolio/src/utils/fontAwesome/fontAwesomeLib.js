import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faChevronDown,
  faArrowDownLong,
  faGlobe,
  faChevronRight,
  faChevronLeft,
  faExpand,
  faCompress,
} from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faCodepen,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
  library.add(
    fab,
    faChevronRight,
    faChevronLeft,
    faLinkedin,
    faGithub,
    faCodepen,
    faChevronDown,
    faEnvelope,
    faArrowDownLong,
    faGlobe,
    faExpand,
    faCompress,
  );
}
export default initFontAwesome;
