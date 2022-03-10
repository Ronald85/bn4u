import { configs } from "./config.data";

const getGenderInfo = (id) => configs.find((f) => f.id === id);

const profiles = [
  {
    id: 1,
    title: "Mr.",
    firstName: "Jesu Ronald",
    lastName: "Rajesh",
    dob: new Date(),
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    genderId: 1,
    maritalStatusId: 4
  },
  {
    id: 2,
    title: "Mr.",
    firstName: "Aloysius",
    lastName: "Deo",
    dob: new Date(),
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    genderId: 1,
    maritalStatusId: 4
  },
  {
    id: 3,
    title: "Mrs.",
    firstName: "Vincilin",
    lastName: "fdo",
    dob: new Date(),
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    genderId: 2,
    maritalStatusId: 4
  },
  {
    id: 4,
    title: "Mrs.",
    firstName: "Babitha",
    lastName: "Stephen",
    dob: new Date(),
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    genderId: 2,
    maritalStatusId: 4
  },
  {
    id: 5,
    title: "Mr.",
    firstName: "Stephen",
    lastName: "",
    dob: new Date(),
    image: "https://randomuser.me/api/portraits/men/79.jpg",
    genderId: 1,
    maritalStatusId: 4
  },
  {
    id: 6,
    title: "Mr.",
    firstName: "Prakash",
    lastName: "Augustine",
    dob: new Date(),
    image: "https://randomuser.me/api/portraits/men/80.jpg",
    genderId: 1,
    maritalStatusId: 4
  },
  {
    id: 7,
    title: "Mr.",
    firstName: "Anitha",
    lastName: "Tharock",
    dob: new Date(),
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    genderId: 2,
    maritalStatusId: 4
  }
];

export { profiles, getGenderInfo };
