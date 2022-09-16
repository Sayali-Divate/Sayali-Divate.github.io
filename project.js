let project_details = [
    {"project_name": "Expedia.com Clone",
     "details": "The project was a collaborative project done by 6 people altogether within 5 days. My task was to build the Hotels list page and provide different functionalities like sorting and filtering.",
    "tech_stack":"HTML, CSS, JavaScript, github",
    "data_base": "Json server",
    "banner":"https://drive.google.com/uc?export=view&id=1CI0jNP5IlvWxT_hcPYVN_Poy0XQJthx_",
    "deployed": "https://expedia-clone-developer.herokuapp.com/",
    "gitlink": "https://github.com/Sayali-Divate/ideal-loss-5580"},

    {"project_name": "Expedia.com Clone",
     "details": "A collaborative project completed within 5 days with 4 other colleagues. I've built the Hotel page which includes hotel booking functionality",
    "tech_stack":"HTML, CSS, JavaScript, github",
    "data_base": "local storage",
    "banner":"https://drive.google.com/uc?export=view&id=1CI0jNP5IlvWxT_hcPYVN_Poy0XQJthx_",
    "deployed": "https://adorable-fairy-910347.netlify.app/",
    "gitlink": "https://github.com/sukhendu32/constructProject1"},
];


project_details.forEach(project=>{

    let Projects_Div = document.getElementById("projects_div");

    let Maindiv= document.createElement("div");
    Maindiv.className="main"

    let pictureDiv = document.createElement("div");
    pictureDiv.className="picture";

    let laptopDiv = document.createElement("div");
    let screenDiv = document.createElement("div");
    let img=document.createElement("img");
    img.src = project.banner;
    screenDiv.append(img);
    laptopDiv.append(screenDiv);
    let base = document.createElement("div");
    let lower_base =document.createElement("div");

    pictureDiv.append(laptopDiv,base,lower_base);

    let descriptionDiv =document.createElement("div");
    descriptionDiv.className ="project_description";

    let nameDiv=document.createElement("div");
    nameDiv.innerText=project.project_name;
    let projectDetails = document.createElement("div");
    projectDetails.innerHTML =`<p>${project.details}</p><p>Tech Stack : ${project.tech_stack}</p><p>Database : ${project.data_base}</p>`;
    let buttonsDiv = document.createElement("div");
    let deployedBtn = document.createElement("button");
    deployedBtn.innerText = "Deployed";
    deployedBtn.onclick=()=>{
        window.open(project.deployed, "_blank");
    }
    let gitBtn = document.createElement("button");
    gitBtn.innerText = "GitHub";
    gitBtn.onclick=()=>{
        window.open(project.gitlink, "_blank");
    }

    buttonsDiv.append(deployedBtn,gitBtn);
    descriptionDiv.append(nameDiv,projectDetails,buttonsDiv);

    Maindiv.append(pictureDiv,descriptionDiv);
    Projects_Div.append(Maindiv);
});

const span = document.querySelector("#span");

span.onclick = function() {
  document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", "+91 8999196924");
    console.log(event.clipboardData.getData("text"))
  }

  alert("Contact number copied to clipboard");
});

