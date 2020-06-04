document.querySelector('.menu-btn').addEventListener('click',()=> { 
    document.querySelector('.nav-menu').classList.toggle('show')
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards'), {delay: 500 };
ScrollReveal().reveal('.cards-banner-one'), {delay: 500 };
ScrollReveal().reveal('.cards-banner-two'), {delay: 500 };


* {
   box-sizing: border-box; 
   margin: 0;
   padding: 0;
}

body {
    background-color: #74b9ff;
    color: blue;
    background-color: #70b9de;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='105' viewBox='0 0 80 105'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='death-star' fill='%231573b8' fill-opacity='0.2'%3E%3Cpath d='M20 10a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm15 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zM20 75a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zm30-65a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V10zm0 65a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V75zM35 10a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zM5 45a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10zm60 35a5 5 0 0 1 10 0v50a5 5 0 0 1-10 0V45zm0-35a5 5 0 0 1 10 0v20a5 5 0 0 1-10 0V10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    font-size: 16px;
    font-family: 'Oswald', sans-serif;
}

a {
    color: whitesmoke;
    text-decoration: none;
}

ul {
    list-style: none;
}

.container {
    width: 90%;
    margin: auto;
}

/* Navigation */
.nav-main {
    font-size: 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 20px 0;
}
.nav-brand {
    width: 50px;
}

/* NAV LEFT */
.nav-main ul {
    display: flex;
}
.nav-main ul li {
    padding: 10px;
}

.nav-main ul li a:hover {
    border-bottom: 2px solid #ffffff;
}

.nav-main ul.nav-menu {
    flex: 1;
    margin-left: 20px;
}

.nav-main ul:hover {
    border-bottom: 2px solid #ffffff;
}
.menu-btn {
    position: absolute;
    cursor: pointer;
    top: 15px;
    right: 30px;
    z-index: 2;
    font-size: 1.5rem;
    display: none;
}


  
/* SHOWCASE*/
hr {
    margin: 10px 0;
}

.showcase {
    width: 100%;
    background-color: #0984e3;
    color: whitesmoke;
    height: 550px;
    background-image: url(./img/board-chalk-chalk-board-chalkboard-625219.jpg);
    padding-bottom: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}

.btn {
    cursor: pointer;
    display: inline-block;
    border: 0;
    font-weight: inline-block;
    padding: 10px 20px;
    background-color: #262626;
    color: #ffffff;
    font-size: 15px;
    border: 1px solid #ffffff;
    margin: 10px 0;
}

.btn:hover {
    opacity: .7;
}

.showcase h2
.showcase p {
    margin-bottom: 10px;
}

/* NEWS CARDS */
.news-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 25px;
    margin: 10px 0;
}

.news-cards img {
    width: 100%;
    height: 180px;
}

.news-cards h3 {
    font-size: 20px;
    margin: 10px 0;
}

.news-cards a {
    padding: 10px 0;
    color: #f2f2f2;
    text-transform: uppercase;
    display: inline-block;
    font-weight: bold;
}

.news-cards a:hover {
    text-decoration: underline;
}

/* CARDS BANNER ONE */
.cards-banner-one {
    width: 100%;
    height: 320px;
    background-image: url(./img/la-escencia-de-las-matemáticas.png) ;
    margin-bottom: 40px;
}

.cards-banner-one .content {
    width: 40%;
    padding: 90px 0 0 30px;
}

.cards-banner-one p
.cards-banner-one h2 {
    margin: 10px 0 20px 0;
}

/* CARDS BANNER TWO */

.cards-banner-two {
    background-image: url(./img/las-matemáticas-tienen-belleza-y-romance.png);
    width: 100%;
    height: 350px;
}

.cards-banner-two .content {
    width: 50%;
    padding: 100px 0 0 30px;
}

/* Social*/
.social {
    margin: 50px;
}

.social p {
    text-align: center;
    font-size: 30px;
    margin-bottom: 30px;
}

.links {
    display: flex;
    align-items: center;
    justify-content: center;
}

.links a {
    margin: 0 30px;
}

.links a i {
    font-size: 3rem;
}

/* FOOTER LINKS */
.footer-links {
    background-color: #2f3640;
    color: #616161;
    font-size: 12px;
    padding: 35px 0;
}

.footer-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    align-items: flex-start;
    justify-content: center;
}

.footer-container ul {
    margin: 0 auto;
}

.footer-container ul li {
    line-height: 2.8;
}

.footer {
    background-color: #2f3640;
    color: #616161;
    font-size: 12px;
    padding: 20px 0;
    text-align: center;
    padding-bottom: 20px;
}

@media (max-width: 700px) {

    .menu-btn {
        display: block;
    }

    .nav-main ul.nav-menu {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #2f3640;
        height: 100%;
        padding: 30px;
        opacity: .5;
        transform: translateX(-400px);     
        transition: transform .5s ease-in-out;
    }

    .nav-main ul.nav-menu.show {
        transform: translateX(-20px);
    }

    .nav-main ul.nav-menu-right {
        margin-right: 40px;
    }

    .nav-main ul.nav-menu li {
        padding: 20px;
        border-bottom: #ccc solid 1px;
        font-size: 14px;
    }

    body {background-color: plum;}
    .news-cards {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .cards-banner-one .content,
    .cards-banner-two .container {
        width: 80%;
    }
    .footer-links .footer-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 500px) {
    body {background-color: aqua;}
    .news-cards {
        grid-template-columns: 1fr;
    }

    .news-cards img {
        height: 270px;
    }

    .cards-banner-two .content,
    .cards-banner-one .content {
        width: 100%;
        padding: 60px 20px;
    }

    .footer-links .footer-container {
        grid-template-columns: 1fr;
    }
}
