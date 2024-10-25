const find = (partner) => {
  const opposite = {
    kimiko: "frenchi",
    frenchi: "kimiko",
    butcher: "beca",
    beca: "butcher",
    huie: "starlight",
    starlight: "huie",
  };
  lowerCasePartner = partner.map((partner) => partner.toLowerCase());

  realPartners = lowerCasePartner.map((ele) => opposite[ele]);

  output = realPartners.map((ele) => ele[0].toUpperCase() + ele.slice(1));
  return output;
};

console.log(find(["KIMIKO", "Beca", "Huie"]));
