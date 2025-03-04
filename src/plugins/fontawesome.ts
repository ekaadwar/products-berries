import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome, faPen, faTrash, faArrowDownAZ, faArrowUpAZ, faEye } from "@fortawesome/free-solid-svg-icons";
import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";


const icons = [
  faHome,
  faPen,
  faTrash,
  faArrowDownAZ,
  faArrowUpAZ,
  faEye,
  faRaspberryPi
];

icons.forEach((icon) => {
  library.add(icon);
});

export default FontAwesomeIcon;