import { Seat } from './Seat';


class Flight {
    FlightNumber: string;
    Departure: string;
    Destination: string;
    DepartureTime: string;
    ArrivalTime: string;
    Seats: Seat[];
    constructor(FlightNumber: string, Departure: string, Destination: string, DepartureTime: string, ArrivalTime: string, Seats: Seat[]) {
        this.FlightNumber = FlightNumber;
        this.Departure = Departure;
        this.Destination = Destination;
        this.DepartureTime = DepartureTime;
        this.ArrivalTime = ArrivalTime;
        this.Seats = Seats;
    }
}

export { Flight };
