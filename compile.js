const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

//console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[':Inbox'];
// If compile with a path, then we need to specify the file name
// module.exports = solc.compile(path, 3).contracts['InboxContract:Inbox'];