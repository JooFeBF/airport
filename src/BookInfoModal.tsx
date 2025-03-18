import Ticket from './Ticket';

/*
Un cliente quiere que construyamos un programa
para manejar las reservas de un vuelo. Si sabe que
el avión tiene 50 sillas, de las cuales 8 son de clase
ejecutiva y las demás de clase económica. Las
sillas ejecutivas se acomodan en filas de cuatro,
separadas en el medio por el corredor. Las sillas
económicas se acomodan en filas de seis, tres a
cada lado del corredor.
 * */

function BookInfoModal({ ticket, closeModal }: { ticket: Ticket; closeModal: () => void; }) {

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg text-black">
                <h1 className="text-2xl">Ticket Information</h1>
                <div>
                    <p>Ticket Number: {ticket.TicketNumber}</p>
                    <p>Passenger Name: {ticket.PassengerName}</p>
                    <p>Passenger Id: {ticket.PassengerId}</p>
                    <p>Seat Number: {ticket.SeatNumber}</p>
                    <p>Flight Number: {ticket.FlightNumber}</p>
                </div>
                <button onClick={closeModal} className="bg-red-500 text-white p-2 rounded-lg">Close</button>
            </div>
        </div>
    );
}

export { BookInfoModal };
