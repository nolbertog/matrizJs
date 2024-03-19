function sendWelcomeEmail(name, email) {
    console.log(`Bienvenido ${name}, se envía un correo a la dirección ${email}`);
};

const user = [
    {name:  'Alice', email: 'alice@example.com'},
    {name:  'Bob', email: 'bob@example.com'},
    {name:  'Charlie', email: 'charlie@example.com'},
];

user.forEach((user) => {
    sendWelcomeEmail(user.name, user.email);
});