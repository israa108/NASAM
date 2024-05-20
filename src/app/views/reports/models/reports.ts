export interface VehiclesReport {
  vehicleId: number;
  vehicle: string;
  currentLocation: string;
  startTime: string;
  endTime: string;
  distanceTraveld: number | string;
  violatedGeofence: number;
  lat: number;
  lng: number;
}
export interface MaintenanceReport {
  vehicleId: string;
  lastMaintenance: string;
  nextMaintenanceDue: string;
  maintenanceType: string;
  cost: string;
  mileageAtLastMaintenance: string;
  currentMileage: string;
  notes: string;
}
export interface VehiclesReportFilter {
  vehicles: Array<number>;
  timeFrom: string;
  timeTo: string;
}
export interface MaintenanceReportFilter {
  vehicles: Array<number>;
}
export interface VehiclesReportSummary {
  totalVehicle: number;
  totalDistance: string;
  avgDistance: string;
  maxDistance: string;
  violatedGeofence: number;
}
export interface ReportDescription {
  id: number;
  favorite: boolean;
  name: string;
  description: string;
  reportType: string;
}

export interface Reports {
  favoriteData: Array<ReportDescription>;
  standerdData: Array<ReportDescription>;
  vehicleData: Array<ReportDescription>;
  mileageData: Array<ReportDescription>;
  fuelData: Array<ReportDescription>;
}
