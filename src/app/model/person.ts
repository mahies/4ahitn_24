
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
  surname: "Schöffmann",
  firstname: "Raphael",
  urlImage: "assets-SCHOEFFMANN/Raphael.jpeg",
  birthday: new Date("2006-09-26"),
  department: "ITEL Netzwerktechnik",
  email: "210422@htl-donaustadt.at",
  github_nickname: "theBroGrammer2624",
  zip_code: 1120,
  city: "Wien",
  message: "\„Just do it.\" \n(Raphael Schöffmann)"
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
  birthday: new Date("2007-09-29"),
  department: "ITEL Netzwerktechnik",
  email: "210027@studierende.htl-donaustadt.at",
  github_nickname: "Askaloor",
  zip_code: 1220,
  city: "Wien",
  message: "\„Zitat\" \n(Niemand)"
}

export const yohanna : Person = {
  surname: "Yohanna",
  firstname: "Adryano",
  urlImage: "assets-YOHANNA/Bild_YOHANNA.jpg",
  birthday: new Date("2006-10-25"),
  department: "ITEL Netzwerktechnik",
  email: "210424@studierende.htl-donaustadt.at",
  github_nickname: "qaxry",
  zip_code: 1210,
  city: "Wien",
  message: "\„One day or day one.\" \n(YOHANNA Adryano)"
}

export const ibrahim : Person = {
  surname: "Ibrahim",
  firstname: "Mohamad kosai",
  urlImage: "public/assets-IBRAHIM/male-model-francisco-lachowski-on-top-of-being-handsome-asf-v0-rrxuw64ie29c1.jpg",
  birthday: new Date("2006-06-19"),
  department: "ITEL Netzwerktechnik",
  email: "210028@studierende.htl-donaustadt.at",
  github_nickname: "kosaiib",
  zip_code: 1100,
  city: "Wien",
  message: "\„Zitat ende gänsehosen\" \n(John Zitat)"
}

