import { Content } from "./content-interface";

export const cards: Content[] =  [
    {
      id: 0,
      title: "Dodge Challenger RT",
      description: "The interior of the SRT Demon is the same as all other Challenger trims, but with changes that differentiate it to the other trims. The Demon only includes a front driver's seat as standard, and no other seats front or rear in the vehicle. However, the front passenger's seat, as well as a rear bench seat, can both be added back as options for one dollar each. To replace the rear seats, Dodge included rear roll bars, and has a 4-point harness installed on it for the driver seat.",
      creator: "General Motors",
      imgURL: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {id: 1,
      title: "Chevrolet Camaro ZL1",
      description: "According to the book The Complete Book of Camaro: Every Model Since 1967, the name Camaro was conceived by Chevrolet merchandising manager Bob Lund and General Motors vice president Ed Rollett, while they were reading the book Heath's French and English Dictionary by James Boïelle and by de V. Payen-Payne printed in 1936.",
      creator: "General Motors",
      
      type: "Super Sport",
      tags:["rev", "v8", "sports"],
    },
    {
      id: 2,
      title: "Ford Mustang GT",
      description: "Engines and drivetrains carried over from the Mustang II including the 2.3 L I4, 2.8 L V6, and 4.9 L V8 engines. A troublesome 2.3 L turbocharged I4 was available during initial production startup and then reappeared after undergoing improvements for the mid-year introduction of the 1983 turbo GT. The 2.8 L V6, in short supply, was replaced with a 3.3 L I6 engine during the 1979-model year.",
      creator: "Ford Motors",
      
      type: "Super Sport",
      tags:["rev", "v8", "sports", "shelby"],
    },
    {
      id: 3,
      title: "Honda Accord",
      description: "According to the book The Complete Book of Camaro: Every Model Since 1967, the name accord was conceived by honda merchandising manager Bob Lund and General Motors vice president john Honda, while they were reading the book Heath's French and English Dictionary by James Boïelle and by de V. Payen-Payne printed in 1976.",
      creator: "honda",
      imgURL: "https://images.unsplash.com/photo-1592908689142-f9d2d4f5d23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZGElMjBhY2NvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      tags:["rev", "v6", "sports", "sedan"],
    },
    {
      id: 4,
      title: "Toyota Camry",
      description: "The Toyota Camry is an automobile sold internationally by the Japanese auto manufacturer Toyota since 1982, spanning multiple generations.",
      creator: "Toyota Inc.",
      imgURL: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG95b3RhJTIwY2Ftcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      type: "sedan",
      tags:["rev", "v4", "reliable"],
    },
    {
      id: 5,
      title: "Toyota Corolla",
      description: "The Toyota Corolla is a series of compact cars (formerly subcompact) manufactured and marketed globally by the Japanese automaker Toyota Motor Corporation.",
      creator: "Toyota Inc.",
      imgURL: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwY29yb2xsYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
      type: "sedan",
      tags:["rev", "v4", "midsize"],
    },
    {
      id: 6,
      title: "Chrysler 300",
      description: "Experience the 2023 Chrysler 300, the Luxury Sedan that makes a bold statement with its luxurious comfort, advanced technology and outstanding capability.",
      creator: "General Motors",
      imgURL: "https://images.unsplash.com/photo-1545642412-2fb9732aac99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      type: "Super Sport",
      tags:["rev", "v8", "sports","rt"],
    },
    {
      id: 7,
      title: "Honda Civic",
      description: "The Honda Civic is a series of automobiles manufactured by Honda since 1972. Since 2000, the Civic has been categorized as a compact car",
      creator: "Hondaa",
      imgURL: "https://images.unsplash.com/photo-1605816988069-b11383b50717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l2aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
      type: "sedan"
    }
  ];