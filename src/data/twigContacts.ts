export interface TwigContactPerson {
  name: string;
  email: string;
}

export interface TwigContactGroup {
  group: string;
  contacts: TwigContactPerson[];
}

// Verbatim from the source list provided by the organizers.
export const twigContacts: TwigContactGroup[] = [
  {
    group: "Musculoskeletal TWIG",
    contacts: [
      { name: "Karina Nakayama", email: "nakayaka@ohsu.edu" },
      { name: "Michael McClure", email: "mccluremj2@vcu.edu" },
    ],
  },
  {
    group: "INDUSTRY TWIG/Committee",
    contacts: [{ name: "Adam Jakus", email: "AdamJakus@BioThera3.com" }],
  },
  {
    group: "Biofabrication TWIG",
    contacts: [
      { name: "Tomas Gonzalez-Fernandez", email: "tog211@lehigh.edu" },
      { name: "Liqun Ning", email: "l.ning@csuohio.edu" },
    ],
  },
  {
    group: "Cardiovascular TWIG",
    contacts: [
      { name: "Feng Zhao", email: "fengzhao@tamu.edu" },
      { name: "Ying Wang", email: "yiwang@binghamton.edu" },
    ],
  },
  {
    group: "Neuro and Spine TWIG",
    contacts: [
      { name: "Jessica Butts", email: "jb228@rice.edu" },
      { name: "Tim O'Shea", email: "toshea@bu.edu" },
    ],
  },
  {
    group: "Dental and Craniofacial TWIG",
    contacts: [
      { name: "Fatima Syed", email: "f.syed@pitt.edu" },
      { name: "Juan Taboas", email: "juan.taboas@pitt.edu" },
    ],
  },
  {
    group: "Respiratory, urological and gastrointestinal TWIG",
    contacts: [{ name: "Basak E. Uygun", email: "Basakuygun@mgh.harvard.edu" }],
  },
  {
    group: "Skin, Wound Healing, and Inflammation TWIG",
    contacts: [{ name: "Helena Zomer", email: "helenazomer@ufl.edu" }],
  },
  {
    group: "Biomaterials, Scaffolds and Matrices",
    contacts: [{ name: "Golnaz Karoubi", email: "Golnaz.karoubi@utoronto.ca" }],
  },
  {
    group: "Stem Cells & Cell Therapies & Developmental Biology and Cell Signaling",
    contacts: [{ name: "Nasim Annabi", email: "Annabi.nasim@gmail.com" }],
  },
];
