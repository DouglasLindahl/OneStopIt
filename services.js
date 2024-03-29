const body = document.querySelector("body");
const servicesCards = document.querySelector(".servicesCards");

const servicesCardsInfo = [
    webhotel = {header: "WEBBHOTELL", info: "DNS-HANTERING | SSL", imgUrl: "images/cloudbackup.webp"},
    cloudbackup = {header: "MOLNBACKUP", info: "HELA DATORN | MAPP | ANPASSNINGSBART", imgUrl: "images/cloudbackup.webp"},
    hardware = {header: "HÅRDVARA", info: "DATORER | SKÄRMAR | TILLBEHÖR", imgUrl: "images/cloudbackup.webp"},
    microsoft365 = {header: "MICROSOFT 365", info: "SAMARBETA MED OFFICE-APPAR | FÖRBÄTTRA ANVÄNDARPRODUKTIVITETEN", imgUrl: "images/cloudbackup.webp"},
    network = {header: "NÄRVERK", info: "WIFI | BRANDVÄGG | SWITCH", imgUrl: "images/cloudbackup.webp"},
    server = {header: "SERVER", info: "INSTALLATION |KONFIGURATION FELSÖKNING | UNDERHÅLL", imgUrl: "images/cloudbackup.webp"},
    copyprint = {header: "COPYPRINT", info: "SKRIVARE | FÖRBRUKNING | SERVICE | SSL", imgUrl: "images/cloudbackup.webp"},
    itSupport = {header: "IT-SUPPORT", info: "PERSONLIG SERVICE FÖR DIG OCH DITT BOLAG", imgUrl: "images/cloudbackup.webp"}
]

servicesCardsInfo.forEach(serviceCard => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("cardImage");

    const img = document.createElement("img");
    img.src = serviceCard.imgUrl;

    const cardText = document.createElement("div");
    cardText.classList.add("cardText");

    const cardHeader = document.createElement("h3");
    cardHeader.textContent = serviceCard.header
    const cardInfo = document.createElement("p");
    cardInfo.textContent = serviceCard.info;


    card.append(cardImage);
    card.append(cardText);
    cardImage.append(img);
    cardText.append(cardHeader);
    cardText.append(cardInfo);

    servicesCards.append(card);
});