const APIURL = "https://fitnesstrac-kr.herokuapp.com/api";

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const results = await response.json();
    // console.log(results);
    // console.log(results.token);
    return results;
  } catch (error) {
    console.log("error logging in");
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const results = await response.json();

    return results;
  } catch (error) {
    console.log("error registering user");
  }
};

export const getUserDetails = async (token) => {
  try {
    const response = await fetch(`${APIURL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log("this is an error message");
  }
};
