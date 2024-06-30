const form = document.getElementById('registration-form');
const paymentMethod = document.getElementById('payment-method');
const cardDetails = document.getElementById('card-details');
const qrScanInfo = document.getElementById('qr-scan-info');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('number').value;
  const address = document.getElementById('message').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (name === '' || phoneNumber === "" || address === "" || email === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  const selectedPaymentMethod = paymentMethod.value;

  try {
    const auth = firebase.auth();
    const createUser = await auth.createUserWithEmailAndPassword(email, password);
    const user = createUser.user;

    const userData = {
      name,
      phoneNumber,
      address,
      paymentMethod: selectedPaymentMethod,
    };

    alert('Registration successful!');
    form.reset();
  } catch (error) {
    console.error('Registration error:', error);
    alert('Registration failed. Please try again later.');
  }
});


paymentMethod.addEventListener('change', () => {
  const selectedMethod = paymentMethod.value;
  cardDetails.style.display = selectedMethod === 'credit-card' || selectedMethod === 'debit-card' ? 'block' : 'none';
  qrScanInfo.style.display = selectedMethod === 'qr-scan' ? 'block' : 'none';
});
