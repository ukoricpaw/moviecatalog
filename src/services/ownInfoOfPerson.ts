import { ownInfoType } from "../types/ForPerson";

interface returnedFacts {
  title: string;
  value: string | null;
}



export const ownInfoOfPerson = (params: ownInfoType): returnedFacts[] => {

  const getAge = () => {
    let now = !params.deathday ? new Date() : new Date(params.deathday);
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    let dob = new Date(params.birthday as string)
    let dobNow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())

    let age = today.getFullYear() - dob.getFullYear();

    if (today < dobNow) {
      age = age - 1;
    }

    return age;
  }

  let ownAge = getAge()

  return [
    {
      title: "Known For",
      value: params.known_for_department
    },
    {
      title: "Gender",
      value: params.gender === 1 ? "Female" : "Male"
    },
    {
      title: "Birthday",
      value: `${params.birthday} ${!params.deathday ? ` (${ownAge} years old)` : ""}`
    },
    {
      title: "Place of Birth",
      value: params.place_of_birth
    },
    {
      title: params.deathday ? "Deathday" : "",
      value: params.deathday ? `${params.deathday} (${ownAge} years old)` : ""
    }
  ]
}