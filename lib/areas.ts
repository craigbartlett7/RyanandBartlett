export type Area = {
  slug: string;
  name: string;
  postcodes: string;
  blurb: string;
  intro: string;
  character: string;
  getAround: string;
  sellingNote: string;
};

// Keep these factual and general. Add specific local figures only once you have
// checked them (for example from Land Registry data) and can cite the source.
export const areas: Area[] = [
  {
    slug: "aylesbury",
    name: "Aylesbury",
    postcodes: "HP19, HP20, HP21",
    blurb: "The county town, from period homes to new neighbourhoods.",
    intro:
      "Aylesbury is where Ryan & Bartlett is based, and it is the market we know best. The town has a broad mix of homes, from older terraces and semis close to the centre to newer estates on the edge of town.",
    character:
      "Aylesbury is growing. It is a designated Garden Town, with new neighbourhoods such as Berryfields and Kingsbrook already built and more planned. That means a lot of newer homes changing hands for the first time, alongside the established streets around the centre.",
    getAround:
      "Aylesbury and Aylesbury Vale Parkway stations both have direct trains to London Marylebone, which keeps commuter demand strong, and the town sits close to the A41 and the M40.",
    sellingNote:
      "In a town this size, buyers have plenty of choice, so presentation, pricing and a smooth sale matter. Overpricing to win an instruction is the quickest way to a stale listing, which is why we show you the evidence behind our valuation.",
  },
  {
    slug: "stoke-mandeville",
    name: "Stoke Mandeville",
    postcodes: "HP22",
    blurb: "A village on the edge of town with its own station.",
    intro:
      "Stoke Mandeville sits just south of Aylesbury, close enough for the town's shops and schools while keeping a village feel. It is popular with commuters and families.",
    character:
      "The village is known around the world as the birthplace of the Paralympic movement. Homes here range from older village properties to more modern family housing.",
    getAround:
      "Stoke Mandeville has its own station on the Chiltern line, with services towards London Marylebone and Aylesbury, and it is a short drive from the A413.",
    sellingNote:
      "Buyers here are often weighing Stoke Mandeville against Aylesbury and Wendover, so a clear, evidence-based asking price helps your home stand out against both.",
  },
  {
    slug: "wendover",
    name: "Wendover",
    postcodes: "HP22",
    blurb: "A Chilterns market town with a strong village pull.",
    intro:
      "Wendover is a market town at the foot of the Chilterns, with a high street, good schools and easy access to the countryside. It draws buyers from London and beyond.",
    character:
      "Period cottages, village houses and larger family homes make up much of the housing, and the surrounding countryside is a big part of the appeal.",
    getAround:
      "Wendover station has direct trains to London Marylebone, and the town has quick road links towards Aylesbury, High Wycombe and the M25.",
    sellingNote:
      "Homes here can attract buyers from a wider area than Aylesbury itself, so correct pricing and strong marketing matter. We will talk you through how we would reach them.",
  },
  {
    slug: "haddenham",
    name: "Haddenham",
    postcodes: "HP17",
    blurb: "A large, well-connected village near Thame.",
    intro:
      "Haddenham is one of the larger villages in the Vale, with shops, schools and a real community. It sits between Aylesbury and Thame.",
    character:
      "The village has a historic core with traditional cottages, and newer developments around it, so homes vary widely in style and price.",
    getAround:
      "Haddenham & Thame Parkway station offers direct trains to London Marylebone, which is a major draw for commuters.",
    sellingNote:
      "Commuter buyers move quickly when the right home appears, so having your paperwork ready before you list can make a real difference to how fast an offer turns into an exchange.",
  },
  {
    slug: "waddesdon",
    name: "Waddesdon",
    postcodes: "HP18",
    blurb: "A pretty village in the Vale, home to Waddesdon Manor.",
    intro:
      "Waddesdon is a village a few miles north-west of Aylesbury, best known for Waddesdon Manor. It offers a quieter pace with the town still within easy reach.",
    character:
      "Homes include traditional village properties and character cottages, and buyers are often looking for space and a village setting without losing access to Aylesbury.",
    getAround:
      "The village is on the road towards Bicester and Oxford, and Aylesbury is a short drive away for the station and shops.",
    sellingNote:
      "Village homes can be more individual, so a valuation that reflects the specifics of your property, rather than a quick average, is especially important.",
  },
  {
    slug: "weston-turville",
    name: "Weston Turville",
    postcodes: "HP22",
    blurb: "A quiet village close to Aylesbury and the reservoir.",
    intro:
      "Weston Turville is a village just outside Aylesbury, close to the town but with a village feel. It is popular with families looking for a quieter setting.",
    character:
      "The village is close to Weston Turville Reservoir, a local nature reserve, and has a mix of established family homes and some newer housing.",
    getAround:
      "Aylesbury is a few minutes away by car, with stations in the town, and Wendover and Stoke Mandeville are also close.",
    sellingNote:
      "Buyers looking in the village are usually comparing it with nearby villages and Aylesbury's edges, so competitive pricing and well-prepared marketing matter.",
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
