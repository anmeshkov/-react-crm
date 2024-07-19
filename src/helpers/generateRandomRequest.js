const generateRandomRequest = () => {
  const names = [
    "Eula Foster",
    "Louisa Rogers",
    "Roger Burke",
    "Mina Moreno",
    "Todd Holmes",
    "Ronald Osborne",
    "Jonathan Spencer",
    "Jean Williamson",
    "Jordan Webster",
    "Leroy Sanchez",
  ];
  const phones = [
    "+7 (258) 668-7098",
    "+7 (268) 479-6974",
    "+7 (587) 767-9012",
    "+7 (763) 750-8468",
    "+7 (737) 853-1182",
    "+7 (220) 986-8621",
    "+7 (434) 744-9615",
    "+7 (277) 216-5931",
    "+7 (680) 368-8555",
    "+7 (614) 979-5365",
  ]
  const emails = [
    "vudap@va.mg",
    "duf@fevfi.fj",
    "vublu@rotgogem.ki",
    "itouh@wamazeci.yt",
    "map@varid.id",
    "koc@zovejhu.bg",
    "rilerpoj@kitfaj.fm",
    "uc@ziisurej.ms",
    "jahfug@jo.ch",
    "cunfamov@zantomub.ca"
  ]
  const products = [
    "course-html",
    "course-js",
    "course-vue",
    "course-php",
    "course-wordpress",
  ];

  const randomValue = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };
  
  return {
    name: randomValue(names),
    phone: randomValue(phones),
    email: randomValue(emails),
    product: randomValue(products),
  }
};
 
export default generateRandomRequest;