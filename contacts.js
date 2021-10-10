const fs = require('fs');


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


const simpanContact = (nama, email, noHP) => {
    const contact = {nama, email, noHP}
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const contacts = JSON.parse(file)

    // Cek kontak
    const duplikat = contacts.find((contact) => contact.nama === nama);
    if(duplikat){
        console.log(`Data dengan nama ${nama} sudah ada. Silahkan masukkan dengan nama lain`);
        return false
    }


    contacts.push(contact)
    
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))
    console.log('Terimakasih sudah mengisi data')
    
}

module.exports = simpanContact;