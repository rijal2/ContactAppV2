const { string } = require("yargs");
const yargs = require("yargs");

yargs.command({
    command: 'add',
    describe: 'Menambahkan kontak baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email Aktif',
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: 'Nomor HP aktif anda',
            demandOption: true,
            type: 'string',
        }
    }
})

