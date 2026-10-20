import helenLu from "@/assets/am-chapter-awards/helen-lu.jpeg.asset.json";
import robertGuldberg from "@/assets/am-chapter-awards/robert-guldberg.jpg.asset.json";
import tomas from "@/assets/am-chapter-awards/tomas-gonzalez-fernandez.jpg.asset.json";
import aliki from "@/assets/am-chapter-awards/aliki-kolliopoulos.jpg.asset.json";
import ritu from "@/assets/am-chapter-awards/ritu-raman.jpeg.asset.json";
import dana from "@/assets/am-chapter-awards/dana-wilkins.jpg.asset.json";

export interface AmChapterAwardee {
  award: string;
  name: string;
  photo: string;
  bio: string;
  position?: string;
}

export const amChapterAwardees: AmChapterAwardee[] = [
  {
    award: "Senior Scientist Award",
    name: "Helen H. Lu",
    photo: helenLu.url,
    bio: "Dr. Lu's renowned research program in Interface Tissue Engineering has recreated the body's natural synchrony between tissues—the connectivity that is the hallmark of the musculoskeletal organ system, where muscles, tendons, ligaments, cartilage, and bone must work together to enable all physical activity, from the routine to the remarkable.",
  },
  {
    award: "Innovation/Commercialization Award",
    name: "Robert Guldberg",
    photo: robertGuldberg.url,
    bio: "Robert Guldberg, vice president of the University of Oregon and executive director of the Phil and Penny Knight Campus for Accelerating Scientific Impact, is an internationally recognized musculoskeletal bioengineer and serial entrepreneur whose research has generated more than 300 publications and six start-up companies.",
  },
  {
    award: "Educational, Training and Outreach Award",
    name: "Tomás González-Fernández",
    photo: tomas.url,
    bio: "Dr. Tomas Gonzalez-Fernandez is recognized for his sustained efforts at TERMIS, Lehigh University, and across the tissue engineering field to build an inclusive early-career scientist community, advance scientific outreach in both English and Spanish, mentor graduate students, and provide meaningful research exposure and opportunities to K-12 students and undergraduates.",
  },
  {
    award: "Outstanding Postdoc Award",
    name: "Vasiliki \"Aliki\" Kolliopoulos",
    photo: aliki.url,
    bio: "Dr. Vasiliki “Aliki” Kolliopoulos is an emerging leader in tissue engineering and regenerative medicine whose innovative work in decellularized ECM biomaterials, 3D-printed scaffolds, and translational bioengineering bridges fundamental science with patient-specific therapeutic applications, while advancing the field through collaborative leadership, mentorship, and education.",
  },
  {
    award: "Young Investigator Award",
    name: "Ritu Raman",
    photo: ritu.url,
    bio: "Prof. Ritu Raman receives the TERMIS-AM Young Investigator Award for building a visionary program in 4D tissue engineering of the neuromuscular system for applications in drug discovery and living “biohybrid” robots, matched by her service to TERMIS and her reach as a public science communicator.",
  },
  {
    award: "Mary Ann Liebert, Inc. Outstanding Student Award",
    name: "Dana Wilkins",
    photo: dana.url,
    bio: "Dana is a Bioengineering PhD Candidate at UC Berkeley-UCSF and a NSF GRFP fellow working in Sanjay Kumar's lab researching mechanisms of glioblastoma invasion.",
  },
];
