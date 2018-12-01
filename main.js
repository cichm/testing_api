const config = require('./config');
const fetch = require('node-fetch');

config.commands.forEach((command, index) => {
    it(`${command.name} accept ${command.name}`, (done) => {
       console.log(`invoking ${command.name} command`);

       const input = require(`./${command.location}`);
       const inputDeepCopy = {...input};
        command.params.forEach((e) => {
            inputDeepCopy.path = inputDeepCopy.path.replace(`${e.type}`, e.substitution);

            let result;
            if (inputDeepCopy.httpMethod === "GET") {
                result = fetch(`http://192.168.56.1:3000/${inputDeepCopy.path}`)
                    .then(res => res.text())
                    .then(body => body);
            }

            result.then((element) => {
                let isTheSame = true;

                Object.keys(JSON.parse(element)).forEach((e) => {
                    if (!(JSON.parse(element)[e] === command.result[e])) {
                        isTheSame = false;
                    }
                });

                return isTheSame;
            }).then((isTheSame) => {
                if (isTheSame === true) {
                    done();
                }
            });
        });
    });
});