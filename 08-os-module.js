const os = require("os"); // this is a built in module

//infor about user
const user = os.userInfo();

//mothod returns system uptime in seconds]
console.log(`the system uptime is: ${os.uptime() / 86400} days`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
