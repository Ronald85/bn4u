import { configs } from "./config.data";

const getGenderInfo = (id) => configs.find((f) => f.id === id);

const profiles = [
  {
    id: 1,
    title: "Mr.",
    firstName: "Jesu Ronald",
    lastName: "Rajesh",
    dob: new Date(),
    genderId:1,
    maritalStatusId:4
  },
  {
    id: 2,
    title: "Mr.",
    firstName: "Aloysius",
    lastName: "Deo",
    dob: new Date(),
    genderId: 1,
    maritalStatusId:4
  },
  {
    id: 3,
    title: "Mrs.",
    firstName: "Vincilin",
    lastName: "fdo",
    dob: new Date(),
    genderId: 2,
    maritalStatusId:4
  },
  {
    id: 4,
    title: "Mrs.",
    firstName: "Babitha",
    lastName: "Stephen",
    dob: new Date(),
    genderId: 2,
    maritalStatusId:4
  },
  {
    id: 5,
    title: "Mr.",
    firstName: "Stephen",
    lastName: "",
    dob: new Date(),
    genderId: 1,
    maritalStatusId:4
  },
  {
    id: 6,
    title: "Mr.",
    firstName: "Prakash",
    lastName: "Augustine",
    dob: new Date(),
    genderId: 1,
    maritalStatusId:4
  },
  {
    id: 7,
    title: "Mr.",
    firstName: "Anitha",
    lastName: "Tharock",
    dob: new Date(),
    genderId: 2,
    maritalStatusId:4
  },
];

export { profiles, getGenderInfo };
