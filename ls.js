const fs = require('fs');


const ourFiles = fs.readdirSync('./', 'utf8', (err, files) => {
        if (err) {
            throw err
        } 
    })


function ls() {
    process.stdout.write(ourFiles.join('\n'))
    process.stdout.write("\nprompt > ");
}

module.exports = ls;