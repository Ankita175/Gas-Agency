const bookingHistoryTable = document.getElementById('booking-history');


const bookings = [
    { id: 1, date: '2024-06-20', cylinder: 'Large', status: 'Delivered' },
    { id: 2, date: '2024-06-25', cylinder: 'Small', status: 'Pending' },
    { id: 3, date: '2024-06-30', cylinder: 'Small', status: 'Delivered'},
    { id: 4, date: '2024-06-21', cylinder: 'Large', status: 'Pending'},
    { id: 5, date: '2024-06-24', cylinder: 'Large', status: 'Pending'},
];


function createBookingRow(booking) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${booking.id}</td>
        <td>${booking.date}</td>
        <td>${booking.cylinder}</td>
        <td>${booking.status}</td>
    `;
    return row;
}


bookings.forEach(booking => {
    const row = createBookingRow(booking);
    bookingHistoryTable.querySelector('tbody').appendChild(row);
});
