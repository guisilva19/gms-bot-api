const hour = new Date().getHours();
const greetings = ["Boa madrugada", "Bom dia", "Boa tarde", "Boa noite"];

let index: number = parseInt((hour / 6).toFixed()) - 1;
export let salutation = greetings[index];