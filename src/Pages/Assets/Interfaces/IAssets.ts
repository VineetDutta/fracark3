export interface IAssets {
  id: number;
  strAssetNum: string;
  strSerialNum: string;
  isOnline: boolean;
  intMake: number;
  intModel: number;
  intCategory: number;
  intCurrentLocation: number;
  intHomeDistrict: number;
  intAssignedCrew: number;
  dtmDateCreated: Date;
  dtmDateLastUpdated: Date;
}
