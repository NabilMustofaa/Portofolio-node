const mongoose = require('mongoose');

const portos = mongoose.model('portos', {
    name: String,
    description: String,
    githubLink: String,
    liveLink: String,
    imageArray: Array,
    technologyArray: Array,
});

// const item= new portos({
//     name: "Portofolio Website",
//     description: "Portfolio  website was created for the purpose of branding myself as a web developer. This portfolio website itself has been developed several times since it was first created. This portfolio website was originally created using HTML, CSS, and Javascript. However, as time went on, he began to recognize several frameworks in website development such as node.js, express.js, and laravel. For the development of this portfolio website, I used a combination of node.js and express.js frameworks. This portfolio website itself was created using the template engine from ejs. The use of the database used in this portfolio website is quite minimal, it is only used to store portfolio data that I created. For the database used in this portfolio website, I tried to use the no sql platform, namely mongodb. This portfolio website development plan itself is to use other javascript frameworks such as react.js and vue.js. So that later this website will be fully developed using the MERN or MEVN stack.",
//     githubLink: "https://github.com/NabilMustofaa/Portofolio-node",
//     liveLink: "https://nabilmustofa.my.id/",
//     imageArray: [
//         "Portofolio/1.png","Portofolio/2.png","Portofolio/3.png"
//     ],
//     technologyArray: [
//         "Node.png","Express.png","MongoDB.png","EJS.png","Bootstrap.png"
//     ],

// });
// const item2= new portos({
//     name: "Amerta UNAIR",
//     description:"Amerta UNAIR is an activity held by the Student Executive Board of Universitas Airlangga. Amerta UNAIR itself is an activity that aims to introduce new students of Universitas Airlangga to the campus environment. Amerta UNAIR starts from 18-27 August 2022 and consists of 5 phases. Where in each phase is intended to further introduce new students to Universitas Airlangga. So to accommodate the information needs of new students, the Amerta UNAIR website was created. <br> The Amerta UNAIR website itself is only intended to fulfill information needs, so that in its development itself it is not too focused on the backend. However, website development prioritizes an attractive appearance with the aim that website visitors can easily get the desired information. For purpouse building the view CSS framework, namely Bootstrap was used. In addition to using bootstrap, a javascript framework, namely JQuery, is also used to make the website more interactive and dynamic.",
//     githubLink: "https://github.com/NabilMustofaa/AMERTA-HTML",
//     liveLink: "https://asa.bem.unair.ac.id/amerta",
//     imageArray: [
//         "Amerta/1.png","Amerta/2.png","Amerta/3.png"
//         ],
//     technologyArray: [
//         "HTML.png","CSS.png","Bootstrap.png","JQuery.png"
//     ],
// });
// const item3= new portos({
//     name: "Get Retro",
//     description:"Get Retro is a website created to meet the needs of creating websites for online stores. This website itself has several features that can be used by users. The features that users can use on this website are the feature for adding products to the cart, the feature for checkout, the feature for displaying purchase history, and several other features related to purchasing a product. While the features that can be used by the admin are features for the product CRUD process, the latest sales display feature, the sales history display feature and several other features related to the sales process.<br> The website is developed from both front-end and back-end sides. For the front-end itself using the CSS framework, namely Bootstrap. As for the back-end itself using the PHP framework, namely Laravel. For the database used in this website itself uses a MySQL database. The concept used in making this website itself is the concept of MVC (Model View Controller). The MVC concept itself is a concept used in website development to separate the front-end and back-end parts. Modeling in this project uses one of the features of Laravel, namely Eloquent. Eloquent itself is a very helpful feature in the formation of relationships between models. The view creation in this project uses a template engine, namely Blade. Blade itself is a template engine used in website development using the Laravel framework. The controller creation in this project uses a feature from Laravel, namely the resource controller. Resource controller itself is a feature that makes it easy to create controllers with the available CRUD features.",
//     githubLink: "https://github.com/NabilMustofaa/Get-Retro",
//     liveLink: "https://getretro.000webhostapp.com",
//     imageArray: [
//         "GetRetro/1.png","GetRetro/2.png","GetRetro/3.png"
//         ],
//     technologyArray: [
//         "Laravel.png","MySQL.png","Bootstrap.png"
//     ],

// });
// const item4= new portos({
//     name: "MIC IND",
//     description:"MIC IND is a website specially developed for the GEMASTIK competition. MIC IND is intended to accommodate micro influencers in developing their careers. MIC IND will develop a platform that can help sponsors find influencers who can promote their products. In supporting these needs, several features are provided that can be used by users. The features provided on the website itself include features for displaying influencers, features for registering as influencers, realtime chat features between influencers and sponsors, as well as an aggrement feature for submitting offers from sponsors to influencers. MIC IND's website is currently still in the Minimum Valuable Product (MVP) phase. So that in the future, if this product is possible to be widely implemented, further development can be carried out. <br> Websites are developed from both front-end and back-end sides. For the front-end itself, it uses a CSS framework, namely tailwindCSS. As for the back-end itself using the PHP framework, namely Laravel. For the database used in this website itself uses a MySQL database. The concept used in making this website itself is the concept of MVC (Model View Controller). In addition, this project also uses the REST API concept. The REST API is used to make it easier for users to send data such as chat without the need to refresh the page. The process of developing the realtime chat feature itself is assisted by a tool, namely Pusher. Pusher itself is a tool used to support realtime features on the website.",
//     githubLink: "https://github.com/NabilMustofaa/gemastik",
//     liveLink: "http://mcfluence.nabilmustofa.my.id",
//     imageArray: [
//         "MICIND/1.png","MICIND/2.png","MICIND/3.png"
//         ],
//     technologyArray: [
//         "Laravel.png","MySQL.png","TailwindCSS.png","Pusher.png"
//     ],


// });
// const item5= new portos({
//     name: "Ricky Nelson Academy Website",
//     description:"Ricky Nelson Academy is an academy engaged in sports, especially football. The Ricky Nelson Academy website was developed with the aim of digitizing the processes that occur in the organization or management of the academy. So that both participants and staff can get the information they need more easily. This website itself has several features that can be used by users. The features that can be used by users on this website are features to display information about the training or match schedule and make attendance related to the schedule. As for the staff themselves, they can manage the training or match schedule, check participant attendance, accept new participants and make articles to improve SEO on the website. <br> Websites are developed from both front-end and back-end sides. For the front-end itself using the CSS framework, namely Bootstrap. As for the back-end itself using the PHP framework, namely Laravel. For the database used in this website itself uses a MySQL database. The concept used in making this website itself is the concept of MVC (Model View Controller). The MVC concept itself is a concept used in website development to separate the front-end and back-end parts. Modeling in this project uses one of the features of Laravel, namely Eloquent. Eloquent itself is a very helpful feature in the formation of relationships between models. The view creation in this project uses a template engine, namely Blade. Blade itself is a template engine used in website development using the Laravel framework. The controller creation in this project uses a feature from Laravel, namely the resource controller. Resource controller itself is a feature that makes it easy to create controllers with the available CRUD features.",
//     githubLink: "https://github.com/NabilMustofaa/Ricky-Nelson-Academy-Website",
//     liveLink: "https://soccer-academy223.000webhostapp.com",
//     imageArray: [
//         "RickyNelson/1.png","RickyNelson/2.png","RickyNelson/3.png"
//         ],
//     technologyArray: [
//         "Laravel.png","MySQL.png","Bootstrap.png"
//     ],
// });
// const item6= new portos({
//     name: "Netflix Clone Website",
//     description:"Netflix Clone is a website that was developed to filling vacation time with the aim of improve my abilities in web development. This website itself is a website that has features similar to the Netflix website. The features contained on this website are features to display the films available on this website. In addition, this website also has a feature to display information about the films selected by the user. The website itself also implies machine learning features, namely a feature to recommend movies. This feature itself uses collaborative filtering algorithms and content based filtering. Collaborative filtering itself is an algorithm used to recommend films based on films that are liked by users with other films that are liked by other users. Meanwhile, content based filtering itself is an algorithm used to recommend films based on the genre of films that are liked by the user. <br> This website is developed from both front-end and back-end sides. For the front-end itself, using the CSS framework, namely Tailwind. As for the back-end itself using the PHP framework, namely Laravel. For the database used in this website itself uses a MySQL database. In meeting the data needs of various films, the API from themoviedb.org is used. In addition to only showing films, there is an option to purchase films. Where to meet the payment needs a gateway is used, namely the Xendit API. The concept in making this website itself is the concept of MVC (Model View Controller).",
//     githubLink: "https://github.com/NabilMustofaa/movie-recommender-website",
//     liveLink: "https://netflix.nabilmustofa.my.id",
//     imageArray: [
//         "Netflix/1.png","Netflix/2.png","Netflix/3.png"
//         ],
//     technologyArray: [
//         "Laravel.png","MySQL.png","TailwindCSS.png"
//     ],
// });
// item.save().then((result) => {
// });
// item2.save().then((result) => {
// });
// item3.save().then((result) => {
// });
// item4.save().then((result) => {
// });
// item5.save().then((result) => {
// });
// item6.save().then((result) => {
// });


module.exports = portos;