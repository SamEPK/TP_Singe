document.addEventListener("DOMContentLoaded",()=>{
    console.log(200);
    let date, pub, article_section, stock_article, btn_article
        date = ({
            myDate : new Date().getFullYear(),
            target : document.querySelector("footer p")
            
        })
        /* bouton pour voir les articles */
        btn_article =document.querySelector(".btn-add")
        date.target.innerText += date.myDate;
        console.log(typeof date)
        /* objet article  titre, date et paragraphe */
        pub = [
            {
                titre: "Publication 4",
                date: `04-05-${date.myDate}`,
                msg: "The missing 'E' in the word 'Monk' represents the incompleteness of one's spiritual journey to be a Monke.",
                image: "./asset/singe4.jpg", 
            },
            {
                titre: "Publication 5",
                date: `01-05-${date.myDate}`,
                msg: "Picture of a Mountain Gorilla right before he punched the photographer",
                image: "./asset/singe5.jpg",
            },
            {
                titre: "Publication 6",
                date: `02-05-${date.myDate}`,
                msg: "An iconic figure in our culture, King Kong is a giant movie monster, resembling an enormous ape, that has appeared in various media since 1933.",
                image: "./asset/singe6.jpg",     
            }

        ]
        //console.table(pub)
        /* itération */
        article_section = document.querySelector(".article_of");
        stock_article = "";
        for(data of pub){
            console.log(
                `${data.titre} ${data.date} ${data.msg} ${data.image}`
            )
            stock_article += `
                            <figure>
                                <img src="${data.image}" alt="image">
                                <figcaption>
                                    <h2>${data.titre}</h2>
                                    <time datetime="2021-04-10T20:00:00">${data.date}</time>
                                    <p>${data.msg}<span aria-hidden="true"></span></p>
                                </figcaption>
                            </figure>`
            }
     
        btn_article.addEventListener("click",function(){
            article_section.innerHTML = stock_article;
            article_section.classList.toggle("article_on");
           this.classList.toggle("btn-remove");
        })




})