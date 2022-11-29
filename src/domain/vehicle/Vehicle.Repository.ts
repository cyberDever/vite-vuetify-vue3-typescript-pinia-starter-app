import { axiosInstance } from '../Domain.Axios.Api'

import type { Vehicle } from './Vehicle.Model'

export const decodeVIN = async (vin: string): Promise<Vehicle> => {
  const response = await axiosInstance.get(
    `vehicles/DecodeVin/${vin}?format=json`,
  )

  const decodedVehicle = response.data.Results.reduce(
    (
      obj: { [x: string]: string },
      item: {
        Variable: string
        Value: string
        ValueId: string
        VariableId: number
      },
    ) => ((obj[item.Variable] = item.Value), obj),
    {},
  )

  return {
    VIN: vin,
    year: decodedVehicle['Model Year'],
    make: decodedVehicle.Make,
    model: decodedVehicle.Model,
  }
}
