import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome, faPen, faTrash, faArrowDownAZ, faArrowUpAZ } from "@fortawesome/free-solid-svg-icons";
import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";


const icons = [
  faHome,
  faPen,
  faTrash,
  faArrowDownAZ,
  faArrowUpAZ,
  faRaspberryPi
];

icons.forEach((icon) => {
  library.add(icon);
});

export default FontAwesomeIcon;