export type User = {
  id: string;
  name: string;
  email: string;
};

export async function login(email: string, password: string) {
  console.log("Login", email, password);

  return {
    success: true,
    user: {
      id: "1",
      name: "Brian",
      email,
    },
  };
}

export async function register(
  name: string,
  email: string,
  password: string
) {
  console.log("Register", name, email, password);

  return {
    success: true,
    user: {
      id: "1",
      name,
      email,
    },
  };
}

export function logout() {
  console.log("Logged out");
}
