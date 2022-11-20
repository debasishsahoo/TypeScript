interface OS {
    name: String;
    language: String;
}

let OPRATINGSYSTEM = (Version: OS): void => {
    console.log(`Android ${Version.name} Has ${Version.language} Language`)
}

let OREO = {
    name: 'O',
    language: 'JAVA',
    CPU: 'COALCOM'
}


OPRATINGSYSTEM(OREO)


