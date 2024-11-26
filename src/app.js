import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our"];
  let adjs = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let finals = [".com "];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let final of finals) {
          domainNames.push(`${pronoun}${adj}${noun}${final}`);
        }
      }
    }
  }

  document.body.innerHTML = `<ul>${domainNames
    .map(domainNames => `<li>${domainNames}</li>`)
    .join(" ")}</ul>`;
};
