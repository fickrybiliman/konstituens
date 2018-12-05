# konstituens
express crud-mysql --view=ejs
npm install
npm install sequelize --save
npm install mysql2 --save || npm install pg --save
sequelize init
sequelize model:generate --name Siswa --attributes nama:string,alamat:string,kelas:integer
sequelize seed:generate --name siswa-seeder
sequelize db:create
sequelize db:migrate
sequelize db:seed:all

mulai dari app.js :
- tambah routes nya
- tambah app.use nya

npm install bcrypt --save
npm install express-session

## Aplikasi untuk input data pemilih calon legislatif
### Sehingga caleg dapat mengetahui atau mengukur berapa jumlah pemilih nya berdasarkan ktp yang diberikan

Script start di package.json untuk local : "start": "node ./bin/www"
Script start di package.json untuk heroku : "start": "node app.js"

# Demo Link : https://data-konstituen.herokuapp.com
user: admin
pass: admin