export const api = {
  login: async ({ email, password }) => {
    let data, error;
    try {
      const request = await fetch(
        "https://backend-curs.herokuapp.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const response = await request.json();

      if (response.message !== undefined) {
        error = response.message;
      } else {
        data = response;
      }

      data = response;
    } catch (err) {
      error = err.message;
    }

    return { data, error };
  },
  register: async (email, password, first_name, last_name) => {
    let data, error;
    try {
      const request = await fetch(
        "https://backend-curs.herokuapp.com/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name,
          }),
        }
      );
      const response = await request.json();
      if (response.message !== undefined) {
        error = response.message;
      } else {
        data = response;
      }

      data = response;
    } catch (err) {
      error = err.message;
    }

    return { data, error };
  },
};
