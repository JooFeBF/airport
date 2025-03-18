import './App.css'
import { Flight } from './Flight';
import { Seat } from './Seat';
import { SeatBox } from './SeatBox';

function App() {
  const seats = [
    new Seat(43, Seat.SeatClasses.EXECUTIVE, Seat.SeatPrices.EXECUTIVE),
    new Seat(44, Seat.SeatClasses.EXECUTIVE, Seat.SeatPrices.EXECUTIVE),
    new Seat(45, Seat.SeatClasses.EXECUTIVE, Seat.SeatPrices.EXECUTIVE),
    new Seat(46, Seat.SeatClasses.EXECUTIVE, Seat.SeatPrices.EXECUTIVE),
    new Seat(47, Seat.SeatClasses.EXECUTIVE, Seat.SeatPrices.EXECUTIVE),
    new Seat(48, Seat.SeatClasses.EXECUTIVE, Seat.SeatPrices.EXECUTIVE),
    new Seat(49, Seat.SeatClasses.EXECUTIVE, Seat.SeatPrices.EXECUTIVE),
    new Seat(50, Seat.SeatClasses.EXECUTIVE, Seat.SeatPrices.EXECUTIVE),
    new Seat(1, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(2, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(3, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(4, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(5, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(6, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(7, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(8, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(9, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(10, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(11, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(12, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(13, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(14, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(15, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(16, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(17, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(18, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(19, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(20, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(21, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(22, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(23, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(24, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(25, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(26, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(27, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(28, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(29, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(30, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(31, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(32, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(33, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(34, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(35, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(36, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(37, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(38, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(39, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(40, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(41, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
    new Seat(42, Seat.SeatClasses.ECONOMIC, Seat.SeatPrices.ECONOMIC),
  ];

  const flight = new Flight('F1', 'LAX', 'JFK', '10:00', '12:00', seats);

  return (
    <div className="App">
      <div className="bg-gray-200 my-8 p-4 flex flex-col">
        <h1 className="text-center text-9xl bg-transparent">Airport seat booking</h1>
        <h2 className="text-center text-7xl bg-transparent">General Information</h2>
        <h3 className="text-center text-4xl bg-transparent">Flight: {flight.FlightNumber}</h3>
        <h3 className="text-center text-4xl bg-transparent">Departure: {flight.Departure}</h3>
        <h3 className="text-center text-4xl bg-transparent">Destination: {flight.Destination}</h3>
        <h3 className="text-center text-4xl bg-transparent">Departure Time: {flight.DepartureTime}</h3>
        <h3 className="text-center text-4xl bg-transparent">Arrival Time: {flight.ArrivalTime}</h3>
      </div>
        <div>
          <div className='max-w-[800px] mx-auto bg-gray-300 rounded-t-full pt-[400px]'>
              <div className="grid grid-cols-4">
            {
              flight.Seats.filter(seat => seat.SeatClass === Seat.SeatClasses.EXECUTIVE).map(seat => (
                <SeatBox key={seat.SeatNumber} seat={seat} flight={flight} />
              ))
            }
            </div>
             <div className="grid grid-cols-6">
            {
              flight.Seats.filter(seat => seat.SeatClass === Seat.SeatClasses.ECONOMIC).map(seat => (
                <SeatBox key={seat.SeatNumber} seat={seat} flight={flight} />
              ))
            }
            </div>
          </div>
        </div>
  </div>
  )
}

export default App
