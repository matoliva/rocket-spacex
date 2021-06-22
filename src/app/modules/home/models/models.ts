export interface Launch {
  details: string;
  flight_number: number;
  launch_date_local: string;
  launch_success: boolean;
  launch_year: string;

  mission_name: string;
  rocket: Rocket;
  rocketDetails: Rocket;
}

export interface Rocket {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}
