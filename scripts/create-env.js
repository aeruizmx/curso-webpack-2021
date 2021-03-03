const fs = require('fs');

fs.writeFileSync('./.env',
`NAMES_API=${process.env.NAMES_API} \n
POKE_API=${process.env.POKE_API} \n
POKE_NAMES_URL=${process.env.POKE_NAMES_URL} \n`
);