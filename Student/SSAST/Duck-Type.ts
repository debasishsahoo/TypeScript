export {};

class Client {
  name = 'Sourav';
  age = 20;
  Salary = 450000000000;
  dept='cs';
}

class DB {
  name = 'Signik';
  age = 20;
  Salary = 150000000000;
}

const client: Client = new DB();
console.log(client.Salary);
