const path = require('path')

const HOME = process.platform === 'win32'
  ? process.env.USERPROFILE
  : process.env.HOME

const KEY_NAME = 'open-vpn'
const PRIVATE_KEY_PATH = path.join(HOME, '.ssh', KEY_NAME)
const PREFIX = 'aws-vpn'
const AMI = 'ami-04169656fea786776'
const PID_FILE = path.join(HOME, '.aws-vpn')

const INBOUND_RULES = [{
  Port: 1194,
  IpProtocol: 'udp'
}, {
  Port: 22,
  Description: 'SSH'
}, {
  Port: 943
}, {
  Port: 443
}]

module.exports = {
  HOME,
  KEY_NAME,
  PRIVATE_KEY_PATH,
  PREFIX,
  AMI,
  INBOUND_RULES,
  PID_FILE
}
