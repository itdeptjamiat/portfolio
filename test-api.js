const fetch = require('node-fetch');

async function testContactAPI() {
  try {
    console.log('Testing contact API...');

    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Message',
      message: 'This is a test message from the API test script.',
    };

    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const data = await response.json();

    console.log('Response status:', response.status);
    console.log('Response data:', data);

    if (response.ok) {
      console.log('✅ API test successful!');
    } else {
      console.log('❌ API test failed!');
    }
  } catch (error) {
    console.error('❌ API test error:', error.message);
  }
}

testContactAPI();
