const users = [
    {
      email: "admin@gmail.com",
      password: "1234",
      role: "Admin",
    },
    {
      email: "editor@gmail.com",
      password: "1234",
      role: "Editor",
    },
    {
      email: "viewer@gmail.com",
      password: "1234",
      role: "Viewer",
    },
  ];
  
  export function authenticate(email, password) {
    return users.find(
      (user) => user.email === email && user.password === password
    );
  }