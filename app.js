// File System (bawaan NODE JS / Core Modules)
// const { rejects } = require('assert');
// const fs = require('fs');
// const { resolve } = require('path/posix');

// Mrnuliskan string ke sebuah file (Sync)
/* fs.writeFileSync('data/test.txt', 'Hello World! Secara synchronus');

// Menuliskan string ke sebuah file (Async)
/*
try{
fs.writeFile('data/test.txt', 'Hello World! Secara Asynchronus gaes Siap.', (e) => console.log(e));
} catch(e) {
console.log(e)
}
*/

// Membaca file secara Sync
/*
const readFile = fs.readFileSync('test.txt', 'utf-8')
console.log(readFile)
*/

// Membaca file secara Ashyncrhonus
/*
fs.readFile('data/test.txt', 'utf-8', (err, data) => {
if(err) throw err;
console.log(data)
})
*/

// Readline
/*
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
*/

/*
rl.question('Masukkan nama Anda : ', (nama) => {
    rl.question('Masukkan noHP anda : ', (noHP) => {
        console.log(`Terimakasih ${nama}, anda telah menambahkan noHP : ${noHP}`);
        rl.close();
    })

})
*/

/*
// Membaca atau mencari folder data apakah ada atau tidak menggunakan fs.existSync, jika tidak ada maka buat menggunakan fs.mkdirSync

const folder = './data'
if(!fs.existsSync(folder)){
    fs.mkdirSync(folder)
}

// Memeriksa apakah file contact.json ada atau tidak menggunakan fs.existsSync, jika tidak ada maka buat menggunakan fs.writeFileSync
const file = './data/contacts.json'
if(!fs.existsSync(file)){
    fs.writeFileSync(file, '[]', 'utf-8')
}
*/



// Menyimpan data yang di input pada file contacts.json
/*
rl.question('Masukkan nama Anda : ', (nama) => {
    rl.question('Masukkan noHP anda : ', (noHP) => {
        const contact = {nama, noHP}
        const file = fs.readFileSync('data/contacts.json', 'utf-8')
        const contacts = JSON.parse(file)

        contacts.push(contact)
        
        fs.writeFile('data/contacts.json', JSON.stringify(contacts), (err, data) => {
            if(err) throw err
            console.log(`Terimakasih telah memasukkan data`)
        })
        
        rl.close();
    })

})
*/

// Mengelompokkan pertanyaan menggunakan Promise
/*
TEKNIK 1
const pertanyaan1 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan nama Anda : ', (nama) => {
            resolve(nama);
        })

    })

}

const pertanyaan2 = () => {
    return new Promise((resolve, reject) => {
        rl.question('Masukkan email Anda : ', (email) => {
            resolve(email);
        })

    })

}

const main = async () => {
    const nama = await pertanyaan1();
    const email = await pertanyaan2();

    const contact = {nama, email}
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)

    contacts.push(contact)
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    console.log('Terimakasih sudah mengisi data')
    rl.close();
}

main();
*/

/*
// TEKNIK 2
const buatPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        })

    })

}


const main = async () => {
    const nama = await buatPertanyaan('Masukkan nama Anda : ');
    const email = await buatPertanyaan('Masukkan email Anda : ');
    const noHP = await buatPertanyaan('Masukkan noHP Anda : ');

    const contact = {nama, email, noHP}
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)

    contacts.push(contact)
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    console.log('Terimakasih sudah mengisi data')
    rl.close();
}

main();
*/


const {buatPertanyaan, simpanContact} = require('./contacts')

const main = async () => {
    const nama = await buatPertanyaan('Masukkan nama Anda : ');
    const email = await buatPertanyaan('Masukkan email Anda : ');
    const noHP = await buatPertanyaan('Masukkan noHP Anda : ');

    simpanContact(nama, email, noHP)
}

main();
