import p0 from "@/assets/nih-r13/aixiang-ding.webp.asset.json";
import p1 from "@/assets/nih-r13/alexander-arteaga.webp.asset.json";
import p2 from "@/assets/nih-r13/amrita-bhagia.webp.asset.json";
import p3 from "@/assets/nih-r13/anju-rana-magar.webp.asset.json";
import p4 from "@/assets/nih-r13/bianca-pena.webp.asset.json";
import p5 from "@/assets/nih-r13/cora-ferguson.webp.asset.json";
import p6 from "@/assets/nih-r13/dana-ragbirsingh.webp.asset.json";
import p7 from "@/assets/nih-r13/dariya-lizanets-fischer.webp.asset.json";
import p10 from "@/assets/nih-r13/divya-sivalingam.webp.asset.json";
import p11 from "@/assets/nih-r13/elaine-kim.webp.asset.json";
import p13 from "@/assets/nih-r13/marrisa-therriault.webp.asset.json";
import p14 from "@/assets/nih-r13/maya-kasteleiner.webp.asset.json";
import p15 from "@/assets/nih-r13/michelle-bretl.webp.asset.json";
import p16 from "@/assets/nih-r13/paria-baninoe.webp.asset.json";
import p17 from "@/assets/nih-r13/parker-esswein.webp.asset.json";
import p23 from "@/assets/nih-r13/shivesh-anand.webp.asset.json";
import p24 from "@/assets/nih-r13/justin-svendsen.webp.asset.json";
import p27 from "@/assets/nih-r13/vikram-surendran.webp.asset.json";
import p28 from "@/assets/nih-r13/william-ofori-atta-eghan.webp.asset.json";
import p29 from "@/assets/nih-r13/wonwoo-jeong.webp.asset.json";
import p30 from "@/assets/nih-r13/xiaoqian-wang.webp.asset.json";
import p31 from "@/assets/nih-r13/vanessa-li.webp.asset.json";
import p8 from "@/assets/nih-r13/deniz-ornek.webp.asset.json";
import p12 from "@/assets/nih-r13/jiayang-rong.webp.asset.json";
import p18 from "@/assets/nih-r13/rameshwar-rao.webp.asset.json";
import p19 from "@/assets/nih-r13/rebecca-sheetz.webp.asset.json";
import p20 from "@/assets/nih-r13/reem-alhalabe.webp.asset.json";
import p21 from "@/assets/nih-r13/renjing-wang.webp.asset.json";
import p22 from "@/assets/nih-r13/salma-abdelgawad.webp.asset.json";
import p25 from "@/assets/nih-r13/thanh-nguyen.webp.asset.json";
import p26 from "@/assets/nih-r13/tianran-liu.webp.asset.json";

export interface NihR13Recipient { name: string; affiliation: string; photo?: string }

export const nihR13Recipients: NihR13Recipient[] = [
  { name: "Aixiang Ding", affiliation: "University of Illinois Chicago", photo: p0.url },
  { name: "Alexander Arteaga", affiliation: "Lehigh University", photo: p1.url },
  { name: "Amrita Bhagia", affiliation: "University of South Dakota / Sanford Research", photo: p2.url },
  { name: "Anju Rana Magar", affiliation: "The University of Akron", photo: p3.url },
  { name: "Bianca Pena", affiliation: "UC San Diego", photo: p4.url },
  { name: "Cora Ferguson", affiliation: "University of Oregon", photo: p5.url },
  { name: "Dana Ragbirsingh", affiliation: "The Children's Hospital of Philadelphia", photo: p6.url },
  { name: "Dariya Fischer", affiliation: "Wake Forest University School of Medicine", photo: p7.url },
  { name: "Deniz Ornek", affiliation: "Columbia University", photo: p8.url },
  { name: "Dhanashree Surve", affiliation: "Diabetes Research Institute, University of Miami", photo: undefined },
  { name: "Divya Sivalingam", affiliation: "University of Maryland, College Park", photo: p10.url },
  { name: "Elaine Kim", affiliation: "Hofstra University (Zucker School of Medicine)", photo: p11.url },
  { name: "Jiayang Rong", affiliation: "University of Pittsburgh", photo: p12.url },
  { name: "Marrisa Therriault", affiliation: "University of Pittsburgh", photo: p13.url },
  { name: "Maya Kasteleiner", affiliation: "Knight Campus, University of Oregon", photo: p14.url },
  { name: "Michelle Bretl", affiliation: "University of Wisconsin-Madison", photo: p15.url },
  { name: "Paria Baninoe", affiliation: "University at Albany", photo: p16.url },
  { name: "Parker Esswein", affiliation: "Duke University", photo: p17.url },
  { name: "Rameshwar Rao", affiliation: "Seattle Children's Research Institute", photo: p18.url },
  { name: "Rebecca Sheetz", affiliation: "Saint Louis University", photo: p19.url },
  { name: "Reem Alhalabe", affiliation: "University of Pittsburgh", photo: p20.url },
  { name: "Renjing Wang", affiliation: "University of Florida", photo: p21.url },
  { name: "Salma Abdelgawad", affiliation: "University of Michigan", photo: p22.url },
  { name: "Shivesh Anand", affiliation: "Stanford University", photo: p23.url },
  { name: "Justin Svendsen", affiliation: "University of Oregon", photo: p24.url },
  { name: "Thanh Nguyen", affiliation: "Baylor College of Medicine", photo: p25.url },
  { name: "Tianran Liu", affiliation: "Washington University in St. Louis", photo: p26.url },
  { name: "Vikram Surendran", affiliation: "Wake Forest Institute for Regenerative Medicine", photo: p27.url },
  { name: "William Ofori-Atta Eghan", affiliation: "Syracuse University", photo: p28.url },
  { name: "Wonwoo Jeong", affiliation: "Wake Forest Institute for Regenerative Medicine", photo: p29.url },
  { name: "Xiaoqian Wang", affiliation: "University of Michigan", photo: p30.url },
  { name: "YiRan (Vanessa) Li", affiliation: "Columbia University", photo: p31.url },
];
