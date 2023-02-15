import axios from "axios";
import shortUUID from "short-uuid";
import Country from "../models/Country.js";

export async function seed() {
  shortUUID
  const { data } = await axios.get('https://restcountries.com/v3/all')
  const countries = data.map(country => ({
    id: shortUUID.generate(),
    name: country.name.common,
  }))
  await Country.bulkCreate(countries)
}