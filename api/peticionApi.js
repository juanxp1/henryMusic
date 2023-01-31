const axios = require('axios');
const access_token = 'b1e9a9546d0f4543a4eecb658e416495';
const headers = {
  'Authorization': `Bearer ${access_token}`
};

const getCurrentPlayback = async () => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me/player', { headers });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
