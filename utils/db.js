const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nabilmustofaa:nabil123@portofolio.ou0dis1.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

//membuat schema
const portos = mongoose.model('portos', {
    name: String,
    description: String,
    githubLink: String,
    liveLink: String,
    imageArray: Array,
    technologyArray: Array,
});

// menambah 1 data
const item= new portos({
    name: "Portofolio Website",
    description: "Portofolio Website ini dibuat dalam rangka kebutuhan branding diri saya sebagai seorang web developer. Website portofolio ini sendiri telah dikembangkan beberapa kali sejak pertama kali dibuat. Website portofolio ini pada awalnya dibuat dengan menggunakan HTML, CSS, dan Javascript. Namun seiring berjalannya waktu mulai mengenal beberapa framework dalam pengembangan website seperti node.js, express.js, dan laravel. Untuk pengembangan website portofolio ini sendiri saya menggunakan gabungan framework node.js dan express.js. Website portofolio ini sendiri dibuat dengan menggunakan template engine dari ejs. Penggunaan database yang digunakan dalam website portofolio ini cukup minimal, hanya digunakan untuk menyimpan data-data portofolio yang saya buat. Untuk database yang digunakan dalam website portofolio ini sendiri saya mencoba menggunakan platfrom no sql yaitu mongodb. Rencana pengembangan website portofolio ini sendiri adalah untuk menggunakan framework javascript lainnya seperti react.js dan vue.js. Sehingga nantinya website ini akan secara penuh dikemabangkan menggunakan MERN atau MEVN stack.",
    githubLink: "https://github",
    liveLink: "https://github",
    imageArray: [
        "1.png","2.png","3.png"
    ],
    technologyArray: [
        "Node.png","Express.png","MongoDB.png","EJS.png","Bootstrap.png"
    ],

});

item.save().then((result) => {
    console.log(result);
});