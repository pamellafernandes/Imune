export const MOCK_USER = {
  username: "admin",
  password: "123456",
};

export function validateCredentials(username: string, password: string) {
  return (
    username.trim().toLowerCase() === MOCK_USER.username &&
    password === MOCK_USER.password
  );
}
