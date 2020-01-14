const doc = document;

fetch('json/virksomheden.json')
  .then(function(response) {
    return response.json();
  })
  .then(json => {
    console.log(json);
    appendBNR(json.BNR);
    appendPART(json.PART);
    appendCASES(json.CASES)
  });

function appendBNR(BNR) {
    console.log(BNR);
    //Laver data, HTML-tags der tilføjes til DOM'en - og indsættes i grid
    doc.querySelector("#gridBNR").innerHTML += `
      <div class="gridItem1">
          <p>${BNR.intro} ${BNR.name}</p>
      </div>
      `;
}

function appendPART(PART) {
    console.log(PART);
    //Laver data, HTML-tags der tilføjes til DOM'en - og indsættes i grid
    doc.querySelector("#gridPART").innerHTML += `
      <div class="gridItem1">
          <p>${PART.intro} ${PART.name}</p>
      </div>
      `;
}

function appendCASES(CASES) {
    console.log(CASES);
    //Laver data, HTML-tags der tilføjes til DOM'en - og indsættes i grid
    doc.querySelector("#gridCASES").innerHTML += `
      <div class="gridItem1">
          <p>${CASES.intro} ${CASES.name}</p>
      </div>
      `;
}