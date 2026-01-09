
// Header start
let elSiteHeader = document.querySelector(".site-header")


let logoImgList = [
    {
        id:1,
        src: "./images/site-logo.svg",
        alt: "Site-Logo-img",
        width:102,
        height:103
    },
    {
        id:2,
        src: "./images/logo.svg",
        alt: "Logo-img",
        width:76,
        height:46
    }
]
let navbarList = ["ABOUT", "SERVICES", "TECHNOLOGIES", "HOW TO"]
let btnTextList = ["CONTACT US", "JOIN HYDRA"]




let elContainer = document.createElement("div") // container
let elHeader = document.createElement("div") // header
let elHeaderLogoWrapper = document.createElement("div") // header__logo-wrapper
let elHeaderLogoLink = document.createElement("a") // header__logo-link
let elHeaderList = document.createElement("ul") // header__list
let elHeaderBtnWrapper = document.createElement("div") // header__btn-content


elContainer.classList.add("container")
elHeader.classList.add("header")
elHeaderLogoWrapper.classList.add("header__logo-wrapper")
elHeaderLogoWrapper.setAttribute("data-aos","fade-left")
elHeaderLogoWrapper.setAttribute("data-aos-duration", "1500")


elHeaderLogoLink.classList.add("header__logo-link")
elHeaderList.classList.add("header__list")
elHeaderList.setAttribute("data-aos", "flip-up")
elHeaderList.setAttribute("data-aos-duration", "800")
elHeaderBtnWrapper.classList.add("header__btn-content")


logoImgList.forEach(item => {
    let elHeaderLogoImg = document.createElement("img") // header__logo-img
    elHeaderLogoImg.classList.add("header__logo-img")
    
    elHeaderLogoImg.src = item.src
    elHeaderLogoImg.alt = item.alt
    elHeaderLogoImg.width = item.width
    elHeaderLogoImg.height = item.height
    
    elHeaderLogoLink.appendChild(elHeaderLogoImg)
})
navbarList.forEach(item => {
    let elHeaderItem = document.createElement("li") // header_item
    let elHeaderItemLink = document.createElement("a") // header__item-link
    
    elHeaderItem.classList.add("header_item")
    elHeaderItemLink.classList.add("header__item-link")
    elHeaderItemLink.textContent = item
    elHeaderItemLink.href = "/"
    elHeaderList.append(elHeaderItem)
    elHeaderItem.appendChild(elHeaderItemLink)
})
btnTextList.forEach(item => {
    let elHeaderBtn = document.createElement("button") // header__btn
    elHeaderBtn.classList.add("header__btn")
    elHeaderBtn.textContent = item
    elHeaderBtnWrapper.appendChild(elHeaderBtn)
})


elSiteHeader.appendChild(elContainer)
elContainer.appendChild(elHeader)
elHeader.append(elHeaderLogoWrapper, elHeaderList, elHeaderBtnWrapper)
elHeaderLogoWrapper.appendChild(elHeaderLogoLink)


// ___________________________________________________________


// hero section start 
let elSiteHero = document.querySelector(".hero-section")

let elContainerHero = document.createElement("div")
let elHero = document.createElement("div")
let elHeroContentWrapper = document.createElement("div")
let elHeroTitle = document.createElement("h1")
let elHeroTitleSpan = document.createElement("span")
let elHeroText = document.createElement("p")
let elHeroLink = document.createElement("a")
let elHeroLinkBtn = document.createElement("button")
let elHeroLinkImg = document.createElement("img")
let elHeroImg = document.createElement("img")


elContainerHero.classList.add("container")
elHero.classList.add("hero")
elHeroContentWrapper.classList.add("hero__content-wrapper")
elHeroContentWrapper.setAttribute("data-aos", "zoom-out-down")
elHeroContentWrapper.setAttribute("data-aos-duration", "1000")


elHeroTitle.classList.add("hero__title")
elHeroTitle.textContent = "Dive Into The Depths Of Virtual Reality"

elHeroText.classList.add("hero__text")
elHeroText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae ."

elHeroLink.classList.add("hero__link")
elHeroLinkBtn.classList.add("hero__link-btn")
elHeroLinkBtn.textContent = "BUILD YOUR WORLD"
elHeroLinkImg.classList.add("hero__link-img")
elHeroLinkImg.src = "./images/arrow.svg"
elHeroLinkImg.alt = "hero-arrow"
elHeroLinkImg.width = "40"
elHeroLinkImg.height = "33"


elHeroImg.classList.add("hero__img")
elHeroImg.src = "./images/hero-img.png"
elHeroImg.alt = "hero-main-img"
elHeroImg.width = "490"
elHeroImg.height = "426"
elHeroImg.setAttribute("data-aos", "zoom-out-up")
elHeroImg.setAttribute("data-aos-duration", "1000")



elSiteHero.appendChild(elContainerHero)
elContainerHero.appendChild(elHero)
elHero.append(elHeroContentWrapper, elHeroImg)
elHeroContentWrapper.append(elHeroTitle, elHeroText, elHeroLink)
elHeroLink.append(elHeroLinkBtn,elHeroLinkImg)

// ___________________________________________________________


// pay section start
let elPaySection = document.querySelector(".pay-section")
elPaySection.setAttribute("data-aos", "flip-down")
elPaySection.setAttribute("data-aos-duration", "800")


let payDataList = [
    {
        imgSrc: "./images/location.svg",
        imgWidth: "40",
        imgHeight: "60",
        title: "Pay Us a Visit",
        text: "Union St, Seattle, WA 98101, United States"
    },
    {
        imgSrc: "./images/call.svg",
        imgWidth: "44",
        imgHeight: "44",
        title: "Give Us a Call",
        text: "(110) 111-2222"
    },
    {
        imgSrc: "./images/latter.svg",
        imgWidth: "48",
        imgHeight: "37",
        title: "Send Us a Message",
        text: "Contact@HydraVTech.com"
    }
];
let elContainerPay = document.createElement("div")
let elPay = document.createElement("div")
let elPayList = document.createElement("ul")


elContainerPay.classList.add("container")
elPay.classList.add("pay")
elPayList.classList.add("pay__list")


payDataList.forEach(item => {
    let elPayItem = document.createElement("li")
    elPayItem.classList.add("pay__item")
    
    let elPayImg = document.createElement("img")
    elPayImg.classList.add("pay__img")
    elPayImg.src = item.imgSrc
    elPayImg.alt = "pay-icons"
    elPayImg.width = "40"
    elPayImg.height = "60"
    
    let elPayContentWrapper = document.createElement("div")
    elPayContentWrapper.classList.add("pay__contanet-wrapper")
    
    let elPayTitle = document.createElement("h2")
    elPayTitle.classList.add("pay__title")
    elPayTitle.textContent = item.title
    
    let elPayText = document.createElement("h2")
    elPayText.classList.add("pay__text")
    elPayText.textContent = item.text
    
    
    elPayList.appendChild(elPayItem)
    elPayItem.append(elPayImg, elPayContentWrapper)
    elPayContentWrapper.append(elPayTitle, elPayText)
    
})


elPaySection.appendChild(elContainerPay)
elContainerPay.appendChild(elPay)
elPay.appendChild(elPayList)
