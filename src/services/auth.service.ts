
async function get_token() {
  try {
    const response = await intra({
      method: "POST",
      url: "/oauth/token",
      data: {
        client_id: process.env.CLIENT_UID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: "client_credentials"
      }
    })
    return(response.data);
  } catch (err) {
    console.error(err);
  }
}

async function get_all_students() {
  try {
    const { access_token } = await get_token();
    console.log(access_token);
    const response = await intra({
      url: "/v2/users",
      method: "GET",
      headers: { Authorization : `Bearer ${access_token}`}
    })
    return response;
  } catch (error) {
    console.error(error);
  }
}