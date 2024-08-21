const fs = require('fs');

function logMessage(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `${timestamp} - ${message}\n`;
    
    fs.appendFile('log.txt', logEntry, (err) => {
        if (err) {
            console.error('Error writing to log file', err);
        }
    });
}

module.exports = logMessage;