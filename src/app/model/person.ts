
export interface Person {
  surname: string;
  firstname: string;
  urlImage: string;
  birthday: Date;
  department: string;
  email: string;
  github_nickname: string;
  zip_code: number; //aequivalent to integer in java
  city: string;
  message: string;
}

export  const MINNIE : Person = {
  surname: "Mouse",
  firstname: "Minni",
  urlImage: "assets/demo/Minnie_Mouse.webp",
  birthday: new Date("1928-11-18"),
  department: "ITEL Netzwerktechnik",
  email: "minni.mouse@htl-donaustadt.at",
  github_nickname: "minnie",
  zip_code: 1010,
  city: "Entenhausen",
  message: "\„Wenn du es dir vorstellen kannst, kannst du es auch machen.\" \n(Walt Disney)"
};

export const schoeffmann : Person = {
  surname: "Schoeffmann",
  firstname: "Raphael",
  urlImage: "assets/demo/Donald_Duck.webp",
  birthday: new Date("2000-00-01"),
  department: "ITEL Netzwerktechnik",
  email: "donald.duck@htl-donaustadt.at",
  github_nickname: "donaldduck042",
  zip_code: 1010,
  city: "Duckenhausen",
  message: "\„Wenn du es dir es leisten kannst, kannst du dir es leisten.\" \n(Donald Duck)"
};

export  const klaric : Person = {
  surname: "KLARIC",
  firstname: "Matteo",
  urlImage: "assets-KLARIC/Ich.jpg",
  birthday: new Date("2005-07-31"),
  department: "ITEL Netzwerktechnik",
  email: "210273@studierende.htl-donaustadt.at",
  github_nickname: "MatteoHajduk",
  zip_code: 1220,
  city: "Wien",
  message: "\„Work so hard that your idols become your rivals\" \n(KLARIC Matteo)"
};

export const millich : Person = {
  surname: "Millich",
  firstname: "Alexander",
  urlImage: "assets-MILLICH/Bild_MILLICH.jpg",
  birthday: new Date("2007-10-29"),
  department: "ITEL Netzwerktechnik",
  email: "210027@studierende.htl-donaustadt.at",
  github_nickname: "Askaloor",
  zip_code: 1220,
  city: "Wien",
  message: "\„Zitat\" \n(Niemand)"
}


