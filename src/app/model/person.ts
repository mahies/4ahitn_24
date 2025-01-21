
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
  routerLink?:string;
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
  message: "\„Wenn du es dir vorstellen kannst, kannst du es auch machen.\" \n(Walt Disney)",
  routerLink: "/page_demo"
};

export const SCHOEFFMANN : Person = {
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

export  const KLARIC : Person = {
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

export const MILLICH : Person = {
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
export const MOELZER : Person = {
  surname: "moelzer",
  firstname: "Patrick",
  urlImage: "assets-Moelzer/Moelzer.jpeg",
  birthday: new Date("2005-05-29"),
  department: "ITEL Netzwerktechnik",
  email: "190185@studierende.htl-donaustadt.at",
  github_nickname: "onesowngoal",
  zip_code: 2286,
  city: "Haringsee",
  message: "\„The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.\" \n(HP Lovecraft)"
};

export const virk : Person = {
  surname: "Virk",
  firstname: "Gurnoor",
  urlImage: "assets-VIRK/M9gK6W1D85YOw.png",
  birthday: new Date("2006-11-15"),
  department: "ITEL Netzwerktechnik",
  email: "210044@studierende.htl-donaustadt.at",
  github_nickname: "gurnoor44",
  zip_code: 1220,
  city: "Wien",
  message: "\„We are what we repeatedly do. Excellence is not an act, but a habit\" \n(Aristotle)"
}

export const STOILOV : Person = {
  surname: "Stoilov",
  firstname: "Daniel",
  urlImage: "assets-STOILOV/Ich.jpg",
  birthday: new Date("2005-12-05"),
  department: "ITEL Netzwerktechnik",
  email: "210417@studierende.htl-donaustadt.at",
  github_nickname: "Danielzis",
  zip_code: 1220, //aequivalent to integer in java
  city: "Wien",
  message: "Denn Gott hat die Menschen so sehr geliebt, dass er seinen einzigen Sohn für sie hergab. \" \nJeder, der an ihn glaubt, wird nicht zugrunde gehen, sondern das ewige Leben haben.\" - Johannes 3:16"
}

export const senjic : Person = {
  surname: "SENJIĆ ",
  firstname: "Oliver",
  urlImage: 'assets-SENJIC/fghjkdibfeb.png',
  birthday: new Date("2006-10-29"),
  city: "Wien | Floridsdorf",
  email: "210278@studierende.htl-donaustadt.at",
  github_nickname: "oliver5977",
  zip_code: 1210,
  department: "ITEL | Netzwerktechnik",
  message:"Wisst ihr, was die billigste warme Mahlzeit in Österreich ist? Sie ist nicht gesund, aber sie ist billig." +
    " Ein Hamburger bei McDonalds. 1,40 Euro. Wenn ich jetzt noch Pommes dazu kaufe - 3,50 Euro." +
    " Und jetzt behauptet wirklich einer ernsthaft, wir leben in einem Land, wo Eltern sich dieses Essen für ihr Kind nicht leisten können?"
}



export  const MATUSCHKA : Person = {
  surname: "MATUSCHKA",
  firstname: "Simon",
  urlImage: "assets-MATUSCHKA/Bild.jpg",
  birthday: new Date("2006-09-11"),
  department: "ITEL Netzwerktechnik",
  email: "210062@studierende.htl-donaustadt.at",
  github_nickname: "Simon3294",
  zip_code: 1220,
  city: "Wien",
  message: "\„You miss 100% of the shots you don't take.\" \n(Wayne Gretzky)"
};

export  const BECKER : Person = {
  surname: "BECKE",
  firstname: "Karina",
  urlImage: "",
  birthday: new Date("2006-09-07"),
  department: "ITEL Netzwerktechnik",
  email: "210033@studierende.htl-donaustadt.at",
  github_nickname: "karinaB777",
  zip_code: 1220,
  city: "Wien",
  message: "\„.\" \n()"
};


export const ibrahim : Person = {
  surname: "Ibrahim",
  firstname: "Mohamad kosai",
  urlImage: "assets-IBRAHIM/kosaibild.jpg",
  birthday: new Date("2006-06-19"),
  department: "ITEL Netzwerktechnik",
  email: "210028@studierende.htl-donaustadt.at",
  github_nickname: "kosaiib",
  zip_code: 1100,
  city: "Wien",
  message: "\„Zitat ende gänsehosen\" \n(John Zitat)"
}

export  const geihseder : Person = {
  surname: "GEIHSEDER",
  firstname: "Sebastian",
  urlImage: "assets-GEIHSEDER/geihsederbild.jpg",
  birthday: new Date("10-04-2006"),
  department: "ITEL Netzwerktechnik",
  email: "210031@studierende.htl-donaustadt.at",
  github_nickname: "sebastian447",
  zip_code: 1220,
  city: "Wien",
  message: "\"Manchmal zeigt sich der Weg erst, wenn man anfängt zu gehen.\"",
};



//list all students
export const STUDENTS:Person[] = [virk, BECKER, yohanna,schoeffmann,geihseder,KLARIC, MATUSCHKA,millich];
