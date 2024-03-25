import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faChevronDown,
  faArrowDownLong,
  faGlobe,
  faChevronRight,
  faChevronLeft,
  faExpand,
  faCompress,
  faTrash,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faCodepen,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

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
    faTrash,
    faRotateLeft,
  );
}
export default initFontAwesome;
