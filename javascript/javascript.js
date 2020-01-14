const doc = document;

fetch('json/virksomheden.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendBNR(json.BNR);
    appendPART(json.PART);
    appendCASES(json.CASES);
    appendContent(json.Content);
    appendSkills(json.Skills);
    appendTeam(json.Team);
    appendUpdates(json.Updates);
    appendCommunication(json.Communication);
    appendScandinavia(json.Scandinavia);
    appendPayment(json.Payment);
    appendSupport(json.Support);
    appendPremium(json.Premium);
    appendDesign(json.Design);
    appendGps(json.Gps);
    appendDeveloped(json.Developed);
    appendResponsive(json.Responsive);
  });

function appendBNR(BNR) {
    //console.log(BNR);
    //Laver data, HTML-tags der tilføjes til DOM'en - og indsættes i grid
    doc.querySelector("#gridBNR").innerHTML += `
      <div class="gridItem1">
          <p>${BNR.intro} ${BNR.name}</p>
      </div>
      `;
}

function appendPART(PART) {
    //console.log(PART);
    //Laver data, HTML-tags der tilføjes til DOM'en - og indsættes i grid
    doc.querySelector("#gridPART").innerHTML += `
      <div class="gridItem1">
          <p>${PART.intro} ${PART.name}</p>
      </div>
      `;
}

function appendCASES(CASES) {
    //console.log(CASES);
    //Laver data, HTML-tags der tilføjes til DOM'en - og indsættes i grid
    doc.querySelector("#gridCASES").innerHTML += `
      <div class="gridItem1">
          <p>${CASES.intro} ${CASES.name}</p>
      </div>
      `;
}

function appendContent(Content) {
    //console.log(Content);
    //Laver data, HTML-tags der tilføjes til DOM'en - og indsættes i grid
    doc.querySelector("#gridContent").innerHTML += `
      <div class="gridItem1">
          <p>${Content.intro} ${Content.name}</p>
      </div>
      `;
}

function appendSkills(Skills) {
    //console.log(Skills);
    doc.querySelector(".skills").innerHTML += `
      <h4>${Skills.name}</h4>
        <p>${Skills.desc}</p>
      `;
}

function appendTeam(Team) {
    //console.log(Team);
    doc.querySelector(".team").innerHTML += `
      <h4>${Team.name}</h4>
        <p>${Team.desc}</p>
      `;
}

function appendUpdates(Updates) {
    //console.log(Updates);
    doc.querySelector(".updates").innerHTML += `
      <h4>${Updates.name}</h4>
        <p>${Updates.desc}</p>
      `;
}

function appendCommunication(Communication) {
    //console.log(Communication);
    doc.querySelector(".communication").innerHTML += `
      <h4>${Communication.name}</h4>
        <p>${Communication.desc}</p>
      `;
}

function appendScandinavia(Scandinavia) {
    //console.log(Scandinavia);
    doc.querySelector(".scandinavia").innerHTML += `
      <h4>${Scandinavia.name}</h4>
        <p>${Scandinavia.desc}</p>
      `;
}

function  appendPayment(Payment) {
    //console.log(Payment);
    doc.querySelector(".payment").innerHTML += `
      <h4>${Payment.name}</h4>
        <p>${Payment.desc}</p>
      `;
}

function appendSupport(Support) {
    //console.log(Support);
    doc.querySelector(".support").innerHTML += `
      <h4>${Support.name}</h4>
        <p>${Support.desc}</p>
      `;
}

function  appendPremium(Premium) {
    //console.log(Premium);
    doc.querySelector(".premium").innerHTML += `
      <h4>${Premium.name}</h4>
        <p>${Premium.desc}</p>
      `;
}

function appendDesign(Design) {
    //console.log(Design);
    doc.querySelector(".design").innerHTML += `
      <h4>${Design.name}</h4>
        <p>${Design.desc}</p>
      `;
}

function  appendGps(Gps) {
    //console.log(Gps);
    doc.querySelector(".gps").innerHTML += `
      <h4>${Gps.name}</h4>
        <p>${Gps.desc}</p>
      `;
}

function appendDeveloped(Developed) {
    //console.log(Developed);
    doc.querySelector(".developed").innerHTML += `
      <h4>${Developed.name}</h4>
        <p>${Developed.desc}</p>
      `;
}

function  appendResponsive(Responsive) {
    //console.log(Responsive);
    doc.querySelector(".responsive").innerHTML += `
      <h4>${Responsive.name}</h4>
        <p>${Responsive.desc}</p>
      `;
}