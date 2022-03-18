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
  }
];

export { profiles, getGenderInfo };
