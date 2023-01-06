AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [{
        title: "Microservices with Spring Boot & Spring Cloud",
        cardImage: "assets/images/education-page/springbootcert.jpg",
        moocLink: "https://www.udemy.com/course/microservices-with-spring-boot-and-spring-cloud/",
    },

    {
        title: "The Nuts and Bolts of OAuth 2.0",
        cardImage: "assets/images/education-page/oauthcert.jpg",
        moocLink: "https://udemy.com/course/oauth-2-simplified/",
    },
    {
        title: "WSO2 Micro Integrator",
        cardImage: "assets/images/education-page/wso2.jpg",
        moocLink: "https://udemy.com/course/learn-wso2-mi-a-step-guide-to-master-esb-api-integration/",
    },
    {
        title: "Computer Networking",
        cardImage: "assets/images/education-page/networking.jpg",
        moocLink: "https://udemy.com/course/world-of-computer-networking/",
    },
    {
        title: "Bash Scripting",
        cardImage: "assets/images/education-page/bash.jpg",
        moocLink: "https://udemy.com/course/bash-scripting/",
    },
    {
        title: "Cloud Computing",
        cardImage: "assets/images/education-page/cloud.jpg",
        moocLink: "https://udemy.com/course/welcome-to-cloud-computing-world/",
    },
    {
        title: "Kubernetes for the Absolute Beginners - Hands-on",
        cardImage: "assets/images/education-page/kube.jpg",
        moocLink: "https://udemy.com/course/learn-kubernetes/",
    },
    {
        title: "Scrum",
        cardImage: "assets/images/education-page/scrum.jpg",
        moocLink: "https://udemy.com/course/scrum-certification/",
    },
    {
        title: "Cyber Security",
        cardImage: "assets/images/education-page/cyber.jpg",
        moocLink: "https://udemy.com/course/1m-cyber-security-awareness/",
    },
    {
        title: "Internet Security for Employees",
        cardImage: "assets/images/education-page/security.jpg",
        moocLink: "https://udemy.com/course/security-awareness-training-internet-security-for-everyone/",
    },
    {
        title: "Agile Project Management; Agile Delivery",
        cardImage: "assets/images/education-page/agile.jpg",
        moocLink: "https://udemy.com/course/agile-crash-course/",
    },
    {
        title: "Emotional Intelligence",
        cardImage: "assets/images/education-page/EQ.jpg",
        moocLink: "https://udemy.com/course/emotional-intelligence-at-work-learn-from-your-emotions/",
    },



];

const experience = [{
        img: "assets/images/education-page/c1.png",
    },
    {
        img: "assets/images/education-page/c2.jpg",
    },
    {
        img: "assets/images/education-page/c3.png",
    },
    {
        img: "assets/images/education-page/c4.png",
    },
    {
        img: "assets/images/education-page/c5.jpg",
    },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function() {
    showExperience();
});

function showExperience() {
    setInterval(function() {
        if (currentItem === experience.length) {
            currentItem = 0;
        }
        const item = experience[currentItem];
        img.src = item.img;
        currentItem++;
    }, 3000);
}

const showCards = () => {
    let output = "";
    moocscards.forEach(
        ({ title, cardImage, moocLink }) =>
        (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
    );
    moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/



const showCards1 = () => {
    let output = "";
    badgesection.forEach(
        ({ title, image, description }) =>
        (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
    );
    bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function() {
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {
        if ($(".timeline-content").hasClass("js--fadeInLeft")) {
            $(".timeline-content")
                .removeClass("js--fadeInLeft")
                .addClass("js--fadeInRight");
        }

        sr.reveal(".js--fadeInRight", {
            origin: "right",
            distance: "300px",
            easing: "ease-in-out",
            duration: 800,
        });
    } else {
        sr.reveal(".js--fadeInLeft", {
            origin: "left",
            distance: "300px",
            easing: "ease-in-out",
            duration: 800,
        });

        sr.reveal(".js--fadeInRight", {
            origin: "right",
            distance: "300px",
            easing: "ease-in-out",
            duration: 800,
        });
    }

    sr.reveal(".js--fadeInLeft", {
        origin: "left",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
    });
});