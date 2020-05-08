import axios from 'axios'
let readJson = async ()=>await axios('/fetch/contenful');
export default readJson ;