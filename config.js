module.exports = {
    commands: [
        {
            name: "CreateUser",
            location: "0-CreateUser.json",
            params: [
                {
                    "type": ":type",
                    "substitution": "admin"
                },
                {
                    "type": ":name",
                    "substitution": "tomasz"
                }
            ],
            result: {"users": "admin", "name": "tomasz"}
        },
        {
            name: "CreateUser",
            location: "0-CreateUser.json",
            params: [
                {
                    "type": ":type",
                    "substitution": "user"
                },
                {
                    "type": ":name",
                    "substitution": "wiola"
                }
            ],
            result: {"users": "user", "name": "wiola"}
        },
        {
            name: "CreateUser",
            location: "0-CreateUser.json",
            params: [
                {
                    "type": ":type",
                    "substitution": "root"
                },
                {
                    "type": ":name",
                    "substitution": "root"
                }
            ],
            result: {"users": "root", "name": "root"}
        },
        {
            name: "CreateUser",
            location: "0-CreateUser.json",
            params: [
                {
                    "type": ":type",
                    "substitution": "empty"
                },
                {
                    "type": ":name",
                    "substitution": "empty"
                }
            ],
            result: {"users": "empty", "name": "empty"}
        }
    ]
};