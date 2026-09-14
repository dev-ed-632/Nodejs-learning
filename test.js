const request = {
    body: {
        name: "John Doe",
        email: "abc@gmail.com",
        password: "password123"
    },
    params: {},
    URL: "http://localhost:4011/api/users",
    type: "POST",
    create: (name, email, password, confirmPassword) => {
        console.log({ name: name, email: email, password: password, confirmPassword: confirmPassword });
        console.log({ name, email, password, confirmPassword });
        console.log(name, email, password, confirmPassword);
        return "===============================";

    }
}

const { body } = request;
const { name, email, password } = request.body;

// console.log(request.place);
// console.log(request.num);
// console.log(request.body);
// console.log(name, email, password);
// console.log(id, value);

console.log(request.create(name, email, password, "confirm Password"));