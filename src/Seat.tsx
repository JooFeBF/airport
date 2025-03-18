class Seat {
    static SeatClasses = {
        ECONOMIC: 'ECONOMIC',
        EXECUTIVE: 'EXECUTIVE'
    };
    static SeatPrices = {
        ECONOMIC: 100,
        EXECUTIVE: 200
    };
    SeatNumber: number;
    IsBooked: boolean;
    PassengerName: string | null;
    PassengerId: string | null;
    SeatClass: string;
    SeatPrice: number;
    constructor(SeatNumber: number, SeatClass: string, SeatPrice: number) {
        this.SeatNumber = SeatNumber;
        this.IsBooked = false;
        this.PassengerName = null;
        this.PassengerId = null;
        this.SeatClass = SeatClass;
        this.SeatPrice = SeatPrice;
    }

    bookSeat(): void {
    }
}

export { Seat };
