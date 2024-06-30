
const members = [
  { id: 1, name: "Simran Shah", cylinders: 2 },
  { id: 2, name: "Abhay Dixit", cylinders: 1 },
  {id: 3, name: "Harshit Reddy", cylinders: 2},
  {id: 4, name: "Rishi Kumar", cylinders: 3},
  {id: 5, name: "Tara Singh", cylinders: 1},
];


const bookingRequests = [
  { memberId: 1, requestedExtra: 1 },
  { memberId: 2, requestedExtra: 2 },
  { memberId: 3, requestedExtra: 1},
  { memberId: 4, requestedExtra: 2},
  { memberId: 5, requestedExtra: 3},
];


function displayMembers() {
  const memberList = document.getElementById('member-list');
  memberList.innerHTML = ''; 
}


function displayBookingRequests() {
  const tableBody = document.getElementById('booking-requests').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; 

  bookingRequests.forEach(request => {
    const member = members.find(m => m.id === request.memberId);
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${member.id}</td>
      <td>${member.name}</td>
      <td>${member.cylinders}</td>
      <td>${request.requestedExtra}</td>
      <td>
        <button class="approve">Approve</button>
        <button class="deny">Deny</button>
      </td>
    `;

    tableBody.appendChild(tableRow);

    const approveButton = tableRow.querySelector('.approve');
    approveButton.addEventListener('click', () => {
      const memberIndex = members.findIndex(m => m.id === member.id);
      members[memberIndex].cylinders += request.requestedExtra;

  
      bookingRequests.splice(bookingRequests.indexOf(request), 1);

      
      displayBookingRequests();
      console.log(`Approved extra cylinder request for member ${member.id}`);
    });

    const denyButton = tableRow.querySelector('.deny');
    denyButton.addEventListener('click', () => {
      
      bookingRequests.splice(bookingRequests.indexOf(request), 1);

    
      displayBookingRequests();
      console.log(`Denied extra cylinder request for member ${member.id}`);
    });
  });
}


displayMembers();
displayBookingRequests();
