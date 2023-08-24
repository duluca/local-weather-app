export interface ICurrentWeather {
  city: string
  country: string
  // date: Date -- initial type of Date is later changed to number
  date: number
  image: string
  temperature: number
  description: string
}
