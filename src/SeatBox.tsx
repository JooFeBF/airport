import { useState } from 'react';
import { Ticket } from './Ticket';
import { Flight } from './Flight';
import { Seat } from './Seat';
import { BookInfoModal } from './BookInfoModal';

function SeatBox({ seat, flight }: { seat: Seat; flight: Flight; }) {
    const seatClass = seat.SeatClass === Seat.SeatClasses.ECONOMIC ? 'bg-green-500' : 'bg-blue-500';
    const seatPrice = seat.SeatClass === Seat.SeatClasses.ECONOMIC ? Seat.SeatPrices.ECONOMIC : Seat.SeatPrices.EXECUTIVE;

    const [isBooked, setIsBooked] = useState(false);
    const [passengerName, setPassengerName] = useState('');
    const [passengerId, setPassengerId] = useState('');
    const [ticket, setTicket] = useState<Ticket | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const bookSeat = () => {
        if (passengerName === '' || passengerId === '') {
            alert('Please fill the passenger name and id');
            return;
        }
        setIsBooked(true);
        setPassengerName(passengerName);
        setPassengerId(passengerId);
        const ticketNumber = `T${Math.floor(Math.random() * 1000000)}`;
        const ticket = new Ticket(ticketNumber, passengerName, passengerId, seat.SeatNumber, flight.FlightNumber);
        alert(`Ticket information: ${JSON.stringify(ticket)}`);
        setTicket(ticket);
    };
    return (
        <div className={`seat ${seatClass} m-2 p-2 text-white rounded-lg text-center`}>
            {seat.SeatClass === Seat.SeatClasses.EXECUTIVE ? 'E' : 'C'}
            <div className="text-center">
                {seat.SeatNumber}
            </div>
            <div className="text-center">
                {seatPrice}$
            </div>
            <div className="text-center">
                <input
                    type="text"
                    placeholder="Passenger Name"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    className="m-1 p-1" />
            </div>
            <div className="text-center">
                <input
                    type="text"
                    placeholder="Passenger Id"
                    value={passengerId}
                    onChange={(e) => setPassengerId(e.target.value)}
                    className="m-1 p-1" />
            </div>
            <div className="text-center">
                {isBooked ? <button onClick={() => setIsModalOpen(true)} className="m-1 p-1 bg-yellow-500 rounded-lg text-white">Ticket</button> :
                    <button
                        onClick={bookSeat}
                        className="m-1 p-1 bg-yellow-500 rounded-lg text-white"
                    >
                        Book
                    </button>}
            </div>
            {isModalOpen && ticket && <BookInfoModal ticket={ticket} closeModal={() => setIsModalOpen(false)} />}
        </div>
    );
}

export { SeatBox };
