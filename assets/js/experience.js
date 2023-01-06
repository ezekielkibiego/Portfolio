AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [{
        title: "Integration Consultant",
        
        place: "Bring' Global",
        time: "(April 2022 - Present)",
        desp: "<li>Testing the quality of bank  services </li> <li>Developing bank microservices in middleware with Java, Spring Boot, and Apache  </li> <li>Using WSO2 and Swagger in API Gateway to secure, protect, manage, and scale API calls </li> Creating pipelines through Orchestration, Containerization, Automation, and Scripting in DevOps with Kubernetes, Openshift, Jenkins, Bash/Python, and Docker.", 
    },
 
    {
        title: "Implementation Specialist",
        
        place: "Kwanza Tukule Foods",
        time: "(February 2021 - June 2021)",
        desp: "<li>Developing a Distributor and Supply system for Tukule Kwanza Foods. The app would monitor sales and publish daily reports.</li>",
    }
  
];

const showCards2 = () => {
    let output = "";
    exp.forEach(
        ({ title, cardImage, place, time, desp }) =>
        (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
    );
    experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);