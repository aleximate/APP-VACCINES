export class VaccineDetail {
  id: number
  date: string
  place: string
  vaccines: Vaccines
  vaccinationCenter: VaccinationCenter
  persons: Persons
}

export class Vaccines {
  id: number
  name: string
  madeIn: string
  madeBy: string
  againstTo: string
  creationDate: string
  dueDate: string
}

export class VaccinationCenter {
  id: number
  name: string
  address: string
}

export class Persons {
  dni: string
  name: string
  lastname: string
  email: string
  job: string
  birthday: string
  nationality: string
  sex: string
}
