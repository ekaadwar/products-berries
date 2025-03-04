import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome, faPen, faTrash, faArrowDownAZ, faArrowUpAZ, faEye } from "@fortawesome/free-solid-svg-icons";
import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";

// Menambahkan ikon ke library
library.add(faHome, faPen, faTrash, faArrowDownAZ, faArrowUpAZ, faEye, faRaspberryPi);

export default FontAwesomeIcon;
