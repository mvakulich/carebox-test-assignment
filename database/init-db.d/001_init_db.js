db.createUser(
  {
      user: "carebox",
      pwd: "_carebox2022.",
      roles: [
          {
              role: "readWrite",
              db: "carebox"
          }
      ]
  }
);