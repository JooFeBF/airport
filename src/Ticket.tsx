class Ticket {
    TicketNumber: string;
    PassengerName: string;
    PassengerId: string;
    SeatNumber: number;
    FlightNumber: string;
    constructor(TicketNumber: string, PassengerName: string, PassengerId: string, SeatNumber: number, FlightNumber: string) {
        this.TicketNumber = TicketNumber;
        this.PassengerName = PassengerName;
        this.PassengerId = PassengerId;
        this.SeatNumber = SeatNumber;
        this.FlightNumber = FlightNumber;
    }
}

export { Ticket };
