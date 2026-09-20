export const chapter1Tasks = [
  {
    id: 1,
    title: "Full Stack Application Introduction",
    question: "Full Stack Application-la mainly eththanai important parts irukkum?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "3",
    explain: "Full Stack Application-la Frontend, Backend, Database nu 3 important parts irukkum."
  },
  {
    id: 2,
    title: "Frontend",
    question: "Frontend enraal enna?",
    options: [
      "Database storage",
      "User directly paakura and interact panra part",
      "Server configuration",
      "Database connection"
    ],
    answer: "User directly paakura and interact panra part",
    explain: "Frontend na user directly paakura and interact panra application part."
  },
  {
    id: 3,
    title: "Backend",
    question: "Namma project-la backend-ku ethu use pannuvom?",
    options: [
      "Node.js and Express.js",
      "HTML and CSS",
      "MySQL Workbench",
      "React.js only"
    ],
    answer: "Node.js and Express.js",
    explain: "Namma project-oda backend logic-ah handle panna Node.js and Express.js use pannuvom."
  },
  {
    id: 4,
    title: "Database",
    question: "Application-oda data-va store panna enna use pannuvom?",
    options: [
      "MySQL database",
      "Express server",
      "React client",
      "Nodemon tool"
    ],
    answer: "MySQL database",
    explain: "Database na application-oda data-va store panra place, intha project-la MySQL use pannuvom."
  },
  {
    id: 5,
    title: "Database Creation",
    question: "MySQL-la oru database-ah create panna ethu use aagum?",
    options: [
      "CREATE DATABASE IF NOT EXISTS employee_directory;",
      "SHOW DATABASES;",
      "USE employee_directory;",
      "DESCRIBE employees;"
    ],
    answer: "CREATE DATABASE IF NOT EXISTS employee_directory;",
    explain: "CREATE DATABASE query moolama pudhu database create pannalam, IF NOT EXISTS error varama thadukkum."
  },
  {
    id: 6,
    title: "Database Select",
    question: "Current working database-ah select panna enna query use pannuvom?",
    options: [
      "SELECT database;",
      "USE employee_directory;",
      "OPEN DATABASE employee_directory;",
      "CONNECT employee_directory;"
    ],
    answer: "USE employee_directory;",
    explain: "USE database_name; command moolama active database-ah select pannalam."
  },
  {
    id: 7,
    title: "Table Creation",
    question: "Employees table create pannum pothu ID-ku ethu primary key-ah set panrom?",
    options: [
      "INT AUTO_INCREMENT PRIMARY KEY",
      "VARCHAR(120) NOT NULL",
      "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      "EMAIL UNIQUE"
    ],
    answer: "INT AUTO_INCREMENT PRIMARY KEY",
    explain: "Employee ID unique-ah irukka INT AUTO_INCREMENT PRIMARY KEY use pannuvom."
  },
  {
    id: 8,
    title: "NOT NULL Constraint",
    question: "SQL query-la 'NOT NULL' enna meaning tharum?",
    options: [
      "Field empty-aa irukka koodathu",
      "Field automatic-aa fill aagum",
      "Field numbers mattum accept pannum",
      "Field duplicate values allow pannum"
    ],
    answer: "Field empty-aa irukka koodathu",
    explain: "NOT NULL constraint irundha antha field-la value illama data insert panna முடியாது."
  },
  {
    id: 9,
    title: "VARCHAR Data Type",
    question: "SQL-la text/string data store panna enna data type use pannuvom?",
    options: [
      "VARCHAR",
      "INT",
      "TIMESTAMP",
      "FLOAT"
    ],
    answer: "VARCHAR",
    explain: "Name, email maathiri string values store panna VARCHAR use pannuvom."
  },
  {
    id: 10,
    title: "Timestamp",
    question: "Record create aana current date and time automatic-aa save aana enna use pannuvom?",
    options: [
      "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
      "AUTO_INCREMENT",
      "PRIMARY KEY",
      "VARCHAR(40)"
    ],
    answer: "TIMESTAMP DEFAULT CURRENT_TIMESTAMP",
    explain: "DEFAULT CURRENT_TIMESTAMP moolama record create agum pothu current date/time save aagum."
  },
  {
    id: 11,
    title: "Database Verification",
    question: "Existing database list-ah check panna enna query use pannuvom?",
    options: [
      "SHOW DATABASES;",
      "LIST DATABASES;",
      "GET DATABASES;",
      "SELECT DATABASES;"
    ],
    answer: "SHOW DATABASES;",
    explain: "SHOW DATABASES; query moolama server-la irukkura ellaa databases-ayum parkalam."
  },
  {
    id: 12,
    title: "Table Verification",
    question: "Oru database-kuLLa irukkura tables-ah check panna enna query use pannuvom?",
    options: [
      "SHOW TABLES;",
      "LIST TABLES;",
      "DESCRIBE TABLES;",
      "SELECT TABLES;"
    ],
    answer: "SHOW TABLES;",
    explain: "SHOW TABLES; query moolama active database-la irukkura tables-ah list out pannalam."
  },
  {
    id: 13,
    title: "Table Structure",
    question: "Oru table-oda columns and data types-ah check panna enna query use pannuvom?",
    options: [
      "DESCRIBE employees;",
      "SHOW employees;",
      "CHECK employees;",
      "GET employees;"
    ],
    answer: "DESCRIBE employees;",
    explain: "DESCRIBE table_name; moolama table structure-ah romba asathalanadha view pannalam."
  },
  {
    id: 14,
    title: "Node Project Initialize",
    question: "Node.js project-la package.json file create panna enna command use pannuvom?",
    options: [
      "npm init -y",
      "npm start",
      "node create",
      "npm install json"
    ],
    answer: "npm init -y",
    explain: "npm init -y command moolama package.json file quick-aa generate pannalam."
  },
  {
    id: 15,
    title: "Express Package",
    question: "Node.js-la server/API create panna use panra popular framework ethu?",
    options: [
      "express",
      "mysql2",
      "dotenv",
      "cors"
    ],
    answer: "express",
    explain: "Express framework moolama thaan Node.js-la server mattum API endpoints easy-aa build panrom."
  },
  {
    id: 16,
    title: "CORS Package",
    question: "Frontend and Backend different ports-la run aagumbothu communication restriction-ah avoid panna enna use pannuvom?",
    options: [
      "cors",
      "dotenv",
      "nodemon",
      "mysql2"
    ],
    answer: "cors",
    explain: "CORS middleware frontend (5173) and backend (5000) middle communication error varama protect pannum."
  },
  {
    id: 17,
    title: "MySQL2 Package",
    question: "Node.js backend-la irunthu MySQL database-kku async/await style-la connect aaga enna package use pannuvom?",
    options: [
      "mysql2/promise",
      "express/db",
      "node-mysql",
      "sql-connection"
    ],
    answer: "mysql2/promise",
    explain: "mysql2/promise use pannathala async/await queries-ah clean-aa execute panna mudiyum."
  },
  {
    id: 18,
    title: "Dotenv Package",
    question: "Database password, port number maathiri configuration values-ah .env file-la irunthu read panna enna package use pannuvom?",
    options: [
      "dotenv",
      "config",
      "env-reader",
      "secure-env"
    ],
    answer: "dotenv",
    explain: "dotenv package process.env moolama .env file variables-ah load panna help pannuradhu."
  },
  {
    id: 19,
    title: "Nodemon Package",
    question: "Development time-la server code change pannumbothu automatically server restart panna enna install pannuvom?",
    options: [
      "nodemon",
      "autorestart",
      "express-live",
      "node-refresh"
    ],
    answer: "nodemon",
    explain: "Nodemon development dependency-aa irunthu code save panra pothu server-ah auto restart pannum."
  },
  {
    id: 20,
    title: "Development Dependency",
    question: "Nodemon-ah development dependency-aa install panna npm command-la enna flag use pannuvom?",
    options: [
      "-D",
      "-G",
      "-S",
      "-P"
    ],
    answer: "-D",
    explain: "-D flag (or --save-dev) development time tools-ah specify panna use aagum."
  },
  {
    id: 21,
    title: "Dotenv Configuration",
    question: ".env file-la irukkura values-ah code-la read panna code-la enna run seiyanum?",
    options: [
      "require('dotenv').config();",
      "import dotenv from 'env';",
      "dotenv.load();",
      "process.env.load();"
    ],
    answer: "require('dotenv').config();",
    explain: "require('dotenv').config(); command moolama environment variables process.env-ku load aagum."
  },
  {
    id: 22,
    title: "Git Security",
    question: "Password irukkura .env file-ah engu upload panna koodathu?",
    options: [
      "GitHub",
      "Local Computer",
      "VS Code",
      "Node Modules"
    ],
    answer: "GitHub",
    explain: ".env file-la database secrets irukkurathala atha GitHub-la upload panna koodathu, .gitignore-la add pannanum."
  },
  {
    id: 23,
    title: "Git Ignore",
    question: "Git tracking-la irunthu .env file-ah block panna enna file-la add pannuvom?",
    options: [
      ".gitignore",
      "package.json",
      "server.js",
      "README.md"
    ],
    answer: ".gitignore",
    explain: ".gitignore file-la .env and node_modules/ add panni unmaintained files push aaguratha thadukalam."
  },
  {
    id: 24,
    title: "Express JSON Middleware",
    question: "Frontend-la irunthu varra JSON request body-ah read panna Express-la enna middleware use pannuvom?",
    options: [
      "app.use(express.json());",
      "app.use(cors());",
      "app.use(express.body());",
      "app.use(json.parse());"
    ],
    answer: "app.use(express.json());",
    explain: "express.json() middleware JSON payloads-ah JavaScript object-aa req.body-la convert pannum."
  },
  {
    id: 25,
    title: "Health Check Route",
    question: "Server and database connection correct-aa work aagutha-nu check panna namma create panra route ethu?",
    options: [
      "/api/health",
      "/api/check",
      "/api/status",
      "/api/test"
    ],
    answer: "/api/health",
    explain: "/api/health endpoint moolama SELECT 1 query run panni DB status test panrom."
  },
  {
    id: 26,
    title: "Connection Pool",
    question: "MySQL database connections-ah efficiently handle panna mysql.createPool()-la default-aa connectionLimit enna vachirunthom?",
    options: [
      "10",
      "5",
      "50",
      "100"
    ],
    answer: "10",
    explain: "connectionLimit: 10 configuration moolama max 10 database connections pool-la maintain panrom."
  },
  {
    id: 27,
    title: "HTTP Status Code",
    question: "Database connection fail aana health check API enna HTTP status code return pannum?",
    options: [
      "503",
      "404",
      "200",
      "401"
    ],
    answer: "503",
    explain: "Database unavailable aana 503 (Service Unavailable) status code return pannuvom."
  },
  {
    id: 28,
    title: "Server Listen",
    question: "Express server-ah specific port-la run start panna enna method use pannuvom?",
    options: [
      "app.listen(port, callback);",
      "app.run(port);",
      "server.start(port);",
      "app.start(port);"
    ],
    answer: "app.listen(port, callback);",
    explain: "app.listen() method server-ah specified port-la bind panni request-ah listen panna start pannum."
  },
  {
    id: 29,
    title: "Default Port",
    question: ".env-la PORT mention pannatti namma code-la enna default port use panrom?",
    options: [
      "5000",
      "3000",
      "8080",
      "4200"
    ],
    answer: "5000",
    explain: "const port = Number(process.env.PORT) || 5000; - moolama 5000 default-aa set pannirukkom."
  },
  {
    id: 30,
    title: "Test Query",
    question: "Database connection working-aa nu check panna pool.query()-la enna simple test query pass pannuvom?",
    options: [
      "SELECT 1",
      "SHOW TABLES",
      "SELECT * FROM employees",
      "PING DATABASE"
    ],
    answer: "SELECT 1",
    explain: "SELECT 1 query romba lightweight test query, idhu connection valid-aa irukka-nu verify pannum."
  }
];

export const chapter2Tasks = [
  {
    id: 1,
    title: "MVC Definition",
    question: "MVC-la expansion enna?",
    options: [
      "Model, View, Controller",
      "Main, Visual, Control",
      "Module, Validation, Client",
      "Method, Variable, Component"
    ],
    answer: "Model, View, Controller",
    explain: "MVC enbathu Model, View, Controller aaki software architectural pattern-ah குறிக்கும்."
  },
  {
    id: 2,
    title: "Model Role",
    question: "MVC architecture-la Model-oda main responsibility enna?",
    options: [
      "Database-kitta pesurathu (SQL Queries)",
      "User-ku UI display panrathu",
      "Request validation handling",
      "URL routing manage panrathu"
    ],
    answer: "Database-kitta pesurathu (SQL Queries)",
    explain: "Model layer database queries (SELECT, INSERT, UPDATE, DELETE) handling-ah mattumae care edukkum."
  },
  {
    id: 3,
    title: "View Role",
    question: "Namma full stack project-la View layer-ah yaaru handle panranga?",
    options: [
      "React.js frontend",
      "Node.js server",
      "MySQL database",
      "Express controllers"
    ],
    answer: "React.js frontend",
    explain: "Namma project-la user paakura forms, tables, UI components ellam React.js (View) moolama handle aaguthu."
  },
  {
    id: 4,
    title: "Controller Role",
    question: "Controller-oda primary responsibility enna?",
    options: [
      "Validation, business logic, and request/response handling",
      "Direct database table creation",
      "CSS stylesheet loading",
      "HTML rendering inside server"
    ],
    answer: "Validation, business logic, and request/response handling",
    explain: "Controller request-ah receive panni, validation check panni, model-ai call panni response anuppum."
  },
  {
    id: 5,
    title: "Routes Role",
    question: "Express project-la Routes-oda main job enna?",
    options: [
      "API URL-ah correct Controller function-oda connect panrathu",
      "Database connection pool create panrathu",
      "Environment variables read panrathu",
      "Frontend styling apply panrathu"
    ],
    answer: "API URL-ah correct Controller function-oda connect panrathu",
    explain: "Routes URL endpoints (like /api/employees) matching controller actions-ku route pannum."
  },
  {
    id: 6,
    title: "Separation of Concerns",
    question: "Ellaa code-ayum ore server.js-la podama separate files-la split panra concept-ku enna peru?",
    options: [
      "Separation of Concerns",
      "Single Page Application",
      "Component Architecture",
      "Data Normalization"
    ],
    answer: "Separation of Concerns",
    explain: "Separation of Concerns principle moolama each file-kum individual responsibility irukkum."
  },
  {
    id: 7,
    title: "Config Folder",
    question: "Database connection pool configuration-ah namma enna folder/file-la maintain panrom?",
    options: [
      "config/db.js",
      "models/dbModel.js",
      "controllers/dbController.js",
      "routes/dbRoutes.js"
    ],
    answer: "config/db.js",
    explain: "config/db.js file-la database connection setup mattum maintain panni export panrom."
  },
  {
    id: 8,
    title: "Module Export",
    question: "Oru file-la create panna pool-ah vera file-la use panna enna command use pannuvom?",
    options: [
      "module.exports = pool;",
      "export default pool;",
      "require.pool();",
      "include pool;"
    ],
    answer: "module.exports = pool;",
    explain: "CommonJS module system-la module.exports use panni values/objects-ah export panrom."
  },
  {
    id: 9,
    title: "Model Query Ordering",
    question: "getAllEmployees() model function-la employees-ah enna order-la fetch panrom?",
    options: [
      "ORDER BY created_at DESC",
      "ORDER BY id ASC",
      "ORDER BY name DESC",
      "ORDER BY role ASC"
    ],
    answer: "ORDER BY created_at DESC",
    explain: "DESC order use panrathala newest created employees list-oda mela (first) varuvanga."
  },
  {
    id: 10,
    title: "Get Employee By ID",
    question: "Specific employee ID use panni details fetch panna model query-la enna placeholder use pannuvom?",
    options: [
      "WHERE id = ?",
      "WHERE id = :id",
      "WHERE id = $1",
      "WHERE id = %d"
    ],
    answer: "WHERE id = ?",
    explain: "mysql2 prepared statements safe-aa query run panna ? placeholder use pannuradhu."
  },
  {
    id: 11,
    title: "Insert ID",
    question: "MySQL-la pudhu employee insert aana apram namma kidaikira auto-generated ID-ah epdi eduppom?",
    options: [
      "result.insertId",
      "result.id",
      "result.lastId",
      "result.newId"
    ],
    answer: "result.insertId",
    explain: "result.insertId moolama recently inserted row-oda primary key ID-ah obtain panrom."
  },
  {
    id: 12,
    title: "Update Affected Rows",
    question: "Update query run panrum pothu antha ID database-la illana result-la enna check pannuvom?",
    options: [
      "result.affectedRows === 0",
      "result.changedRows === 1",
      "result.status === false",
      "result.count === null"
    ],
    answer: "result.affectedRows === 0",
    explain: "affectedRows === 0 na update panra ID row database-la match aagala (not found) nu artham."
  },
  {
    id: 13,
    title: "Delete Return Value",
    question: "deleteEmployee() model function-la delete successful-na enna return pannuvom?",
    options: [
      "result.affectedRows > 0",
      "result.insertId",
      "null",
      "result.deletedCount"
    ],
    answer: "result.affectedRows > 0",
    explain: "affectedRows > 0 irundha delete success aayiruchu (true) nu return pannuvom."
  },
  {
    id: 14,
    title: "Model Rule",
    question: "Model file-kulla koodaatha oru mukkiamana item ethu?",
    options: [
      "res.json() or req.body",
      "pool.query()",
      "async functions",
      "SQL select statements"
    ],
    answer: "res.json() or req.body",
    explain: "Model database-kitta mattum pesanum, HTTP response sending (res.json) or req handling model-la irukka koodathu."
  },
  {
    id: 15,
    title: "Controller Validation",
    question: "Controller-la validation function moolama check pannaatha field ethu?",
    options: [
      "password",
      "name",
      "role",
      "email"
    ],
    answer: "password",
    explain: "Namma employee directory form-la name, role, email, phone mattum dhaan required fields."
  },
  {
    id: 16,
    title: "Validation Missing Field",
    question: "Validation function-la required field empty-aa irundha enna message return pannum?",
    options: [
      "The [field] field is required.",
      "Invalid input format.",
      "Data missing error.",
      "Please fill all boxes."
    ],
    answer: "The [field] field is required.",
    explain: "Code-la fields.find() check panni missing field name vachu dynamic message return panrom."
  },
  {
    id: 17,
    title: "HTTP Status 201",
    question: "Puthu employee successfully database-la create aana controller enna status code anuppum?",
    options: [
      "201 Created",
      "200 OK",
      "204 No Content",
      "202 Accepted"
    ],
    answer: "201 Created",
    explain: "New resource successfully created status-ku HTTP 201 status code use pannuvom."
  },
  {
    id: 18,
    title: "HTTP Status 400",
    question: "Validation fail aana or required field missing-na controller enna status code anuppum?",
    options: [
      "400 Bad Request",
      "404 Not Found",
      "500 Internal Error",
      "401 Unauthorized"
    ],
    answer: "400 Bad Request",
    explain: "Client send panna request invalid/incomplete-na 400 Bad Request status code return pannum."
  },
  {
    id: 19,
    title: "HTTP Status 404",
    question: "Update or Delete panra employee ID database-la illana controller enna status code anuppum?",
    options: [
      "404 Not Found",
      "400 Bad Request",
      "204 No Content",
      "503 Unavailable"
    ],
    answer: "404 Not Found",
    explain: "Resource database-la kidaikkala-na 404 Not Found message return pannuvom."
  },
  {
    id: 20,
    title: "HTTP Status 204",
    question: "Employee successfully delete aana response body illama enna status code send pannuvom?",
    options: [
      "204 No Content",
      "200 OK",
      "201 Created",
      "202 Accepted"
    ],
    answer: "204 No Content",
    explain: "204 No Content meaning request successful, but response body content thevai illa."
  },
  {
    id: 21,
    title: "Route Parameter",
    question: "Express route-la ID-ah capture panna enna syntax use pannuvom?",
    options: [
      "/:id",
      "/(id)",
      "/:id?",
      "/{id}"
    ],
    answer: "/:id",
    explain: "/:id route parameter moolama req.params.id vachu specific ID-ah catch panrom."
  },
  {
    id: 22,
    title: "Access Route Parameter",
    question: "Controller-la route parameter-il varum ID-ah eppadi access pannuvom?",
    options: [
      "req.params.id",
      "req.body.id",
      "req.query.id",
      "req.id"
    ],
    answer: "req.params.id",
    explain: "URL parameters-ah access panna req.params object use pannuvom."
  },
  {
    id: 23,
    title: "Router Initialization",
    question: "Express Router create panna enna command use pannuvom?",
    options: [
      "const router = express.Router();",
      "const router = new Router();",
      "const router = express.createRouter();",
      "const router = app.Router();"
    ],
    answer: "const router = express.Router();",
    explain: "express.Router() use panni modular, mountable route handlers create panrom."
  },
  {
    id: 24,
    title: "Server Mounting",
    question: "server.js-la employee routes-ah connect panna enna method use pannuvom?",
    options: [
      "app.use('/api/employees', employeeRoutes);",
      "app.route('/api/employees', employeeRoutes);",
      "app.get('/api/employees', employeeRoutes);",
      "app.connect(employeeRoutes);"
    ],
    answer: "app.use('/api/employees', employeeRoutes);",
    explain: "app.use() moolama employeeRoutes router-ah /api/employees base path-la mount panrom."
  },
  {
    id: 25,
    title: "GET Request Method",
    question: "All employees fetch panna routes-la enna method use pannuvom?",
    options: [
      "router.get('/', ...)",
      "router.post('/', ...)",
      "router.put('/', ...)",
      "router.delete('/', ...)"
    ],
    answer: "router.get('/', ...)",
    explain: "GET method data retrieval/reading operations-ku use aagum."
  },
  {
    id: 26,
    title: "POST Request Method",
    question: "New employee create panna routes-la enna method use pannuvom?",
    options: [
      "router.post('/', ...)",
      "router.get('/', ...)",
      "router.put('/', ...)",
      "router.delete('/', ...)"
    ],
    answer: "router.post('/', ...)",
    explain: "POST method server-la pudhu resource create panra requests-ku use panrom."
  },
  {
    id: 27,
    title: "PUT Request Method",
    question: "Existing employee details update panna routes-la enna method use pannuvom?",
    options: [
      "router.put('/:id', ...)",
      "router.post('/:id', ...)",
      "router.get('/:id', ...)",
      "router.patch('/:id', ...)"
    ],
    answer: "router.put('/:id', ...)",
    explain: "PUT method specific ID resource-ah update/replace panna use pannuvom."
  },
  {
    id: 28,
    title: "DELETE Request Method",
    question: "Employee-ah database-la irunthu remove panna routes-la enna method use pannuvom?",
    options: [
      "router.delete('/:id', ...)",
      "router.remove('/:id', ...)",
      "router.clear('/:id', ...)",
      "router.drop('/:id', ...)"
    ],
    answer: "router.delete('/:id', ...)",
    explain: "DELETE method specific database record-ah remove panna use pannuvom."
  },
  {
    id: 29,
    title: "MVC Benefit",
    question: "MVC architecture follow panrathala mukkiamana benefit enna?",
    options: [
      "Code maintainability, debugging and scalability easy aagum",
      "Server speed 10x increase aagum",
      "Database size automatic-aa compress aagum",
      "Frontend bugs automatic-aa fix aagum"
    ],
    answer: "Code maintainability, debugging and scalability easy aagum",
    explain: "MVC structure separates concerns, making large scale enterprise applications easy to maintain."
  },
  {
    id: 30,
    title: "Server Cleanliness",
    question: "MVC architecture apply pannina apram server.js file epdi irukkum?",
    options: [
      "Romba clean-aa configuration mattum irukkum",
      "Ellaa SQL queries-um inga thaan irukkum",
      "Validation functions full-aa irukkum",
      "CSS stylesheets load aagum"
    ],
    answer: "Romba clean-aa configuration mattum irukkum",
    explain: "Business logic and queries split aagurathala server.js entry point romba clean-aa irukkum."
  }
];

export const chapter3Tasks = [
  {
    id: 1,
    title: "Postman Definition",
    question: "Postman tool ennadhukaaga mukkiamanatha use panrom?",
    options: [
      "API request send panni backend response-ah test panna",
      "React frontend components design panna",
      "MySQL database tables create panna",
      "Node.js package manager-ah run panna"
    ],
    answer: "API request send panni backend response-ah test panna",
    explain: "Postman is a popular API testing tool used to send requests and verify responses."
  },
  {
    id: 2,
    title: "Server Prerequisite",
    question: "Postman-la API test panrathuku munnadi enna must seiyanum?",
    options: [
      "Backend server-ah run seiyanum (npm run dev)",
      "React client browser-la open seiyanum",
      "VS Code-ah close seiyanum",
      "GitHub repository create seiyanum"
    ],
    answer: "Backend server-ah run seiyanum (npm run dev)",
    explain: "Backend server running-la irundha thaan Postman-la HTTP requests successful-aa connect aagum."
  },
  {
    id: 3,
    title: "Postman Collection",
    question: "Postman-la related API requests-ah oru group-aa organize panni store panra idhukku enna peru?",
    options: [
      "Collection",
      "Workspace folder",
      "Environment pack",
      "Request bundle"
    ],
    answer: "Collection",
    explain: "Collections group multiple related requests together for structured API testing."
  },
  {
    id: 4,
    title: "Health Check Purpose",
    question: "Health check API-oda main purpose enna?",
    options: [
      "Backend server-um database-um correct-aa communicate pannutha nu check panna",
      "All employee records table-la display panna",
      "New employee database-la insert panna",
      "Deleted employee count verify panna"
    ],
    answer: "Backend server-um database-um correct-aa communicate pannutha nu check panna",
    explain: "Health check endpoint quickly verifies database connectivity without fetching bulk data."
  },
  {
    id: 5,
    title: "Health Check URL",
    question: "Namma project-la health check API-oda standard URL enna?",
    options: [
      "http://localhost:5000/api/health",
      "http://localhost:5000/api/employees",
      "http://localhost:5173/health",
      "http://localhost:5000/healthcheck"
    ],
    answer: "http://localhost:5000/api/health",
    explain: "Local backend server port 5000-la /api/health route-la health check setup pannirukkom."
  },
  {
    id: 6,
    title: "Read Operation Method",
    question: "All employees fetch panra READ operation-ku Postman-la enna HTTP method select pannuvom?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE"
    ],
    answer: "GET",
    explain: "GET method is standard for reading or fetching data from server."
  },
  {
    id: 7,
    title: "Empty Database Response",
    question: "Employees table empty-aa irukkumbothu GET /api/employees call panna enna response varum?",
    options: [
      "[] (Empty array)",
      "404 Not Found error",
      "500 Internal Error",
      "null object"
    ],
    answer: "[] (Empty array)",
    explain: "Database empty-aa irundha server empty array [] return pannum, idhu error illa."
  },
  {
    id: 8,
    title: "Create Operation Method",
    question: "New employee create panra CREATE operation-ku Postman-la enna HTTP method select pannuvom?",
    options: [
      "POST",
      "GET",
      "PUT",
      "PATCH"
    ],
    answer: "POST",
    explain: "POST method is used to send new data and create resources in database."
  },
  {
    id: 9,
    title: "Postman Body Format",
    question: "Postman-la POST request anuppum pothu Body tab-la enna format select pannanum?",
    options: [
      "raw -> JSON",
      "form-data",
      "binary text",
      "XML payload"
    ],
    answer: "raw -> JSON",
    explain: "JSON format data pass panna Body tab-la raw select panni JSON choose pannanum."
  },
  {
    id: 10,
    title: "POST Success Status",
    question: "Successful-aa new employee create aana Postman-la enna HTTP status code return aagum?",
    options: [
      "201 Created",
      "200 OK",
      "204 No Content",
      "302 Found"
    ],
    answer: "201 Created",
    explain: "Successful creation triggers HTTP 201 Created status code response."
  },
  {
    id: 11,
    title: "Auto Generated Fields",
    question: "POST request moolama employee create panrum pothu database automatic-aa generate panra fields ethu?",
    options: [
      "id and created_at",
      "name and role",
      "email and phone",
      "password and token"
    ],
    answer: "id and created_at",
    explain: "Primary key ID (AUTO_INCREMENT) and created_at (TIMESTAMP) database-la auto generate aagum."
  },
  {
    id: 12,
    title: "Update Operation Method",
    question: "Employee details modify/update panra UPDATE operation-ku Postman-la enna HTTP method use pannuvom?",
    options: [
      "PUT",
      "POST",
      "GET",
      "UPDATE"
    ],
    answer: "PUT",
    explain: "PUT method is standard for updating existing records using specific ID."
  },
  {
    id: 13,
    title: "PUT URL Structure",
    question: "ID 1 irukkura employee-ah update panna Postman URL eppadi irukkanum?",
    options: [
      "http://localhost:5000/api/employees/1",
      "http://localhost:5000/api/employees?id=1",
      "http://localhost:5000/api/employees/update/1",
      "http://localhost:5000/api/update"
    ],
    answer: "http://localhost:5000/api/employees/1",
    explain: "RESTful convention-badi resource endpoint-oda id suffix-ah pass pannuvom (/api/employees/1)."
  },
  {
    id: 14,
    title: "Delete Operation Method",
    question: "Employee record-ah remove panra DELETE operation-ku Postman-la enna HTTP method use pannuvom?",
    options: [
      "DELETE",
      "REMOVE",
      "CLEAR",
      "DESTROY"
    ],
    answer: "DELETE",
    explain: "DELETE method is used to remove specific database records."
  },
  {
    id: 15,
    title: "DELETE Success Status",
    question: "Successful DELETE request-ku apram standard-aa enna HTTP status code response varum?",
    options: [
      "204 No Content",
      "200 OK",
      "201 Created",
      "404 Not Found"
    ],
    answer: "204 No Content",
    explain: "DELETE success aana body data thevai illathathala 204 No Content status code return panrom."
  },
  {
    id: 16,
    title: "HTTP Status 200",
    question: "HTTP 200 status code enna meaning tharum?",
    options: [
      "Request successful (GET / PUT success)",
      "Resource created successfully",
      "Bad request from client",
      "Internal server error"
    ],
    answer: "Request successful (GET / PUT success)",
    explain: "HTTP 200 OK means standard successful HTTP request execution."
  },
  {
    id: 17,
    title: "HTTP Status 400",
    question: "Client send panna request-la required fields (name, email) missing-na server enna status code anuppum?",
    options: [
      "400 Bad Request",
      "404 Not Found",
      "500 Server Error",
      "204 No Content"
    ],
    answer: "400 Bad Request",
    explain: "Missing or invalid client payload triggers 400 Bad Request status."
  },
  {
    id: 18,
    title: "HTTP Status 404",
    question: "Database-la illatha employee ID-ku PUT or DELETE call panna server enna status code return pannum?",
    options: [
      "404 Not Found",
      "400 Bad Request",
      "503 Unavailable",
      "200 OK"
    ],
    answer: "404 Not Found",
    explain: "Requested resource ID database-la kidaikkala-na 404 Not Found status code return aagum."
  },
  {
    id: 19,
    title: "HTTP Status 500",
    question: "Backend code-la unexpected error / server-side crash aana enna status code varum?",
    options: [
      "500 Internal Server Error",
      "400 Bad Request",
      "404 Not Found",
      "204 No Content"
    ],
    answer: "500 Internal Server Error",
    explain: "Unexpected server-side exceptions return HTTP 500 Internal Server Error."
  },
  {
    id: 20,
    title: "CRUD Abbreviation - C",
    question: "CRUD acronym-la 'C' enna represent pannuthu?",
    options: [
      "Create",
      "Connect",
      "Compute",
      "Control"
    ],
    answer: "Create",
    explain: "CRUD stands for Create, Read, Update, Delete. Here C is Create (POST)."
  },
  {
    id: 21,
    title: "CRUD Abbreviation - R",
    question: "CRUD acronym-la 'R' enna represent pannuthu?",
    options: [
      "Read",
      "Remove",
      "Run",
      "Register"
    ],
    answer: "Read",
    explain: "R stands for Read (GET method)."
  },
  {
    id: 22,
    title: "CRUD Abbreviation - U",
    question: "CRUD acronym-la 'U' enna represent pannuthu?",
    options: [
      "Update",
      "Upload",
      "Unlock",
      "Unlink"
    ],
    answer: "Update",
    explain: "U stands for Update (PUT method)."
  },
  {
    id: 23,
    title: "CRUD Abbreviation - D",
    question: "CRUD acronym-la 'D' enna represent pannuthu?",
    options: [
      "Delete",
      "Download",
      "Display",
      "Dispatch"
    ],
    answer: "Delete",
    explain: "D stands for Delete (DELETE method)."
  },
  {
    id: 24,
    title: "HTTP Method Mapping",
    question: "POST HTTP method evvarkku mapping aaguthu?",
    options: [
      "Create operation",
      "Read operation",
      "Update operation",
      "Delete operation"
    ],
    answer: "Create operation",
    explain: "POST maps directly to Create operation in CRUD."
  },
  {
    id: 25,
    title: "Validation Error Testing",
    question: "Empty name vachu POST request anuppum pothu expected error status enna?",
    options: [
      "400 Bad Request",
      "201 Created",
      "200 OK",
      "500 Error"
    ],
    answer: "400 Bad Request",
    explain: "Empty name validation failure trigger panrathu 400 Bad Request response."
  },
  {
    id: 26,
    title: "Database Verification",
    question: "Postman-la POST success aana apram data save aayirukha-nu engu check panrom?",
    options: [
      "MySQL Workbench (SELECT * FROM employees;)",
      "Browser history tab",
      "VS Code terminal settings",
      "package.json dependencies"
    ],
    answer: "MySQL Workbench (SELECT * FROM employees;)",
    explain: "MySQL query run panni backend database storage-ah direct-aa verify panrom."
  },
  {
    id: 27,
    title: "Postman Role",
    question: "Postman application-oda actual role enna?",
    options: [
      "Testing tool (Not the actual backend server)",
      "Permanent database storage",
      "React UI rendering engine",
      "Cloud hosting server"
    ],
    answer: "Testing tool (Not the actual backend server)",
    explain: "Postman is just a tool to send requests and inspect backend server responses."
  },
  {
    id: 28,
    title: "Request Flow Order",
    question: "Postman test panrum pothu correct data flow order ethu?",
    options: [
      "Postman -> Express Backend -> Controller -> Model -> MySQL",
      "MySQL -> Postman -> React -> Node",
      "Controller -> Postman -> MySQL -> Routes",
      "Postman -> React -> CSS -> Database"
    ],
    answer: "Postman -> Express Backend -> Controller -> Model -> MySQL",
    explain: "Request Postman-il irunthu start aagi backend routes, controllers, models moolama MySQL-ku pogum."
  },
  {
    id: 29,
    title: "Delete Verification Query",
    question: "DELETE API call successful aana apram database table-ah verify panna enna query use pannuvom?",
    options: [
      "SELECT * FROM employees;",
      "SHOW DATABASES;",
      "DROP TABLE employees;",
      "CREATE TABLE employees;"
    ],
    answer: "SELECT * FROM employees;",
    explain: "SELECT query moolama delete panna record table-il irunthu poranthuta-nu verify panrom."
  },
  {
    id: 30,
    title: "Collection Benefit",
    question: "Postman-la collection create panrathala kidaikira mukkiamana advantage enna?",
    options: [
      "All CRUD requests-ah oru place-la group panni easy-aa test pannalam",
      "Automatic code syntax error fix aagum",
      "Frontend React code generate aagum",
      "MySQL database backup take aagum"
    ],
    answer: "All CRUD requests-ah oru place-la group panni easy-aa test pannalam",
    explain: "Collections organize all APIs in order, making workflow testing smooth and structured."
  }
];

export const chapter4Tasks = [
  {
    id: 1,
    title: "React Definition",
    question: "React.js library-ah create panni maintain panra company ethu?",
    options: [
      "Meta (Facebook)",
      "Google",
      "Microsoft",
      "Apple"
    ],
    answer: "Meta (Facebook)",
    explain: "React was created and is maintained by Meta (formerly Facebook)."
  },
  {
    id: 2,
    title: "React Purpose",
    question: "React.js library mukkiamanatha enna build panna use panrom?",
    options: [
      "User Interface (UI) for web applications",
      "Backend database engines",
      "Operating system kernels",
      "Network router firmware"
    ],
    answer: "User Interface (UI) for web applications",
    explain: "React is a JavaScript library specialized in building dynamic user interfaces."
  },
  {
    id: 3,
    title: "SPA Definition",
    question: "SPA expansion enna?",
    options: [
      "Single Page Application",
      "Simple Program Architecture",
      "Server Process Automation",
      "Secure Protocol Access"
    ],
    answer: "Single Page Application",
    explain: "SPA stands for Single Page Application, where content updates without full page reloads."
  },
  {
    id: 4,
    title: "SPA Benefit",
    question: "React SPA approach-oda big advantage enna?",
    options: [
      "Full page reload illama necessary UI portion mattum update aagum",
      "Internet connection thevaiye illa",
      "Database direct-aa browser-la run aagum",
      "HTML files thevai padathu"
    ],
    answer: "Full page reload illama necessary UI portion mattum update aagum",
    explain: "In SPA, dynamic rendering updates only the changed components without reloading the browser."
  },
  {
    id: 5,
    title: "Component Architecture",
    question: "React-la website/application-ah small reusable blocks-aa split panra concept-ku enna peru?",
    options: [
      "Component-Based Architecture",
      "Monolithic Design",
      "Linear Execution Model",
      "Procedural Programming"
    ],
    answer: "Component-Based Architecture",
    explain: "Component-Based Architecture breaks UIs into independent, reusable pieces."
  },
  {
    id: 6,
    title: "React Hooks",
    question: "Functional components-la state and lifecycle features use panna enna use pannuvom?",
    options: [
      "Hooks",
      "Classes",
      "Pointers",
      "Macros"
    ],
    answer: "Hooks",
    explain: "React Hooks (like useState, useEffect) let functional components manage state and side effects."
  },
  {
    id: 7,
    title: "useState Hook",
    question: "Component-kulla local data/value maintain panna use panra mukkiamana Hook ethu?",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    answer: "useState",
    explain: "useState is the core hook used to manage reactive local state in React components."
  },
  {
    id: 8,
    title: "State Behavior",
    question: "React-la state value change aana ennanadhu?",
    options: [
      "React automatically component-ah re-render panni UI-ah update pannum",
      "Browser crash aagum",
      "Database connection disconnect aagum",
      "Server restart aagum"
    ],
    answer: "React automatically component-ah re-render panni UI-ah update pannum",
    explain: "State updates trigger component re-rendering to keep UI synchronized with data."
  },
  {
    id: 9,
    title: "useEffect Hook",
    question: "Side effects (like API data fetching, timers) handle panna mukkiamana Hook ethu?",
    options: [
      "useEffect",
      "useState",
      "useMemo",
      "useCallback"
    ],
    answer: "useEffect",
    explain: "useEffect handles side effects such as data fetching, subscriptions, and DOM manipulations."
  },
  {
    id: 10,
    title: "useEffect Dependency Array",
    question: "useEffect-la empty dependency array [] kuduthal antha effect eppo run aagum?",
    options: [
      "Component initial mount aana odane oru thadava mattum",
      "Every time state change aagumbothum",
      "Browser close panrum pothu",
      "Server restart panrum pothu"
    ],
    answer: "Component initial mount aana odane oru thadava mattum",
    explain: "An empty dependency array [] ensures the effect runs only once when the component mounts."
  },
  {
    id: 11,
    title: "Vite Definition",
    question: "React project-ah fast-aa create panna and develop panna use panra modern tool ethu?",
    options: [
      "Vite",
      "Webpack",
      "Gulp",
      "Grunt"
    ],
    answer: "Vite",
    explain: "Vite is a modern, ultra-fast frontend build tool used for React projects."
  },
  {
    id: 12,
    title: "Vite Create Command",
    question: "Vite vachu client folder-la React project create panna enna command use pannuvom?",
    options: [
      "npm create vite@latest client -- --template react",
      "npx react-init client",
      "npm install react-vite",
      "node create-react-app client"
    ],
    answer: "npm create vite@latest client -- --template react",
    explain: "npm create vite@latest client -- --template react sets up a clean Vite + React template."
  },
  {
    id: 13,
    title: "Vite Port Number",
    question: "Vite development server default-aa enna port-la run aagum?",
    options: [
      "5173",
      "3000",
      "5000",
      "8080"
    ],
    answer: "5173",
    explain: "Vite development server typically runs on http://localhost:5173 by default."
  },
  {
    id: 14,
    title: "App.jsx File",
    question: "React project-la main UI component file-oda name enna?",
    options: [
      "App.jsx",
      "Main.jsx",
      "Index.js",
      "Root.jsx"
    ],
    answer: "App.jsx",
    explain: "App.jsx serves as the root application component where major UI is structured."
  },
  {
    id: 15,
    title: "Empty Form State",
    question: "Form fields-oda initial empty values-ah store panna emptyForm object-la enna properties irukku?",
    options: [
      "name, role, email, phone",
      "id, date, time, status",
      "username, password, token",
      "title, description, price"
    ],
    answer: "name, role, email, phone",
    explain: "emptyForm object has name, role, email, and phone initialized to empty strings."
  },
  {
    id: 16,
    title: "handleChange Function",
    question: "Input box-la user type panra pothu state-ah update panna enna function use pannuvom?",
    options: [
      "handleChange()",
      "handleUpdate()",
      "handleInput()",
      "handleSubmit()"
    ],
    answer: "handleChange()",
    explain: "handleChange function captures input changes and updates form state dynamically."
  },
  {
    id: 17,
    title: "Spread Operator",
    question: "handleChange() function-la existing form values-ah retain panna enna operator use pannuvom?",
    options: [
      "Spread operator (...form)",
      "Rest operator (...args)",
      "Assignment operator (=)",
      "Logical operator (&&)"
    ],
    answer: "Spread operator (...form)",
    explain: "...form spread operator retains existing properties while updating the modified field."
  },
  {
    id: 18,
    title: "Target Name Property",
    question: "Input field-oda name attribute-ah eppadi access pannuvom?",
    options: [
      "event.target.name",
      "event.name",
      "event.value.name",
      "event.target.id"
    ],
    answer: "event.target.name",
    explain: "event.target.name identifies which input field triggered the change event."
  },
  {
    id: 19,
    title: "Target Value Property",
    question: "Input field-la user type panna actual text value-ah eppadi eduppom?",
    options: [
      "event.target.value",
      "event.value",
      "event.text",
      "event.input"
    ],
    answer: "event.target.value",
    explain: "event.target.value retrieves the current string typed inside the input element."
  },
  {
    id: 20,
    title: "Controlled Component",
    question: "Input value React state-oda control-la iruntha antha component-ku enna peru?",
    options: [
      "Controlled Component",
      "Uncontrolled Component",
      "Static Component",
      "Raw Component"
    ],
    answer: "Controlled Component",
    explain: "When input value is bound to React state, it's called a Controlled Component."
  },
  {
    id: 21,
    title: "Form Submit Handler",
    question: "Form submit aagum pothu execute aagura function ethu?",
    options: [
      "handleSubmit()",
      "handleSend()",
      "handlePost()",
      "handleForm()"
    ],
    answer: "handleSubmit()",
    explain: "handleSubmit function handles form submission events and form processing."
  },
  {
    id: 22,
    title: "Prevent Default",
    question: "Browser form submit panrum pothu page reload aaguratha stop panna enna seiyanum?",
    options: [
      "event.preventDefault()",
      "event.stopPropagation()",
      "event.cancel()",
      "return false"
    ],
    answer: "event.preventDefault()",
    explain: "event.preventDefault() stops default browser page reload on form submission."
  },
  {
    id: 23,
    title: "Form Reset",
    question: "Form submit aana apram inputs-ah empty panna enna function use pannuvom?",
    options: [
      "setForm(emptyForm)",
      "form.reset()",
      "clearForm()",
      "setForm({})"
    ],
    answer: "setForm(emptyForm)",
    explain: "setForm(emptyForm) resets all form input states back to initial blank values."
  },
  {
    id: 24,
    title: "Array Map Method",
    question: "Employees array data-va table rows (<tr>) -aa convert panna enna JavaScript method use pannuvom?",
    options: [
      "map()",
      "filter()",
      "reduce()",
      "forEach()"
    ],
    answer: "map()",
    explain: "map() method iterates through the array and returns JSX elements for table rendering."
  },
  {
    id: 25,
    title: "List Key Property",
    question: "React list render panrum pothu each item-ah uniquely identify panna enna property mukkiam?",
    options: [
      "key={employee.id}",
      "index={i}",
      "id={unique}",
      "ref={id}"
    ],
    answer: "key={employee.id}",
    explain: "React requires a unique key prop (like employee.id) to efficiently update list items."
  },
  {
    id: 26,
    title: "Avatar First Letter",
    question: "Employee name-oda first letter-ah uppercase-aa avatar-la display panna enna code use pannuvom?",
    options: [
      "employee.name.charAt(0).toUpperCase()",
      "employee.name.slice(1)",
      "employee.name.toLowerCase()",
      "employee.name.first()"
    ],
    answer: "employee.name.charAt(0).toUpperCase()",
    explain: "charAt(0).toUpperCase() extracts and capitalizes the initial letter for avatar display."
  },
  {
    id: 27,
    title: "Email Mailto Link",
    question: "User email-ah click pannumbothu default mail app open aaga href-la enna poduvom?",
    options: [
      "href={`mailto:${employee.email}`}",
      "href={`email:${employee.email}`}",
      "href={`send:${employee.email}`}",
      "href={`contact:${employee.email}`}"
    ],
    answer: "href={`mailto:${employee.email}`}",
    explain: "mailto: protocol triggers the user's email client when clicked."
  },
  {
    id: 28,
    title: "Employees Length",
    question: "Header-la total team members count-ah display panna enna property use pannuvom?",
    options: [
      "employees.length",
      "employees.count",
      "employees.size",
      "employees.total"
    ],
    answer: "employees.length",
    explain: "employees.length returns the total number of items in the employee array."
  },
  {
    id: 29,
    title: "Day 3 Dummy Data",
    question: "Day 3-la backend connect panrathuku munnadi UI test panna enna use pannom?",
    options: [
      "Dummy employee state data",
      "Local storage files",
      "Static HTML tables",
      "JSON server mock"
    ],
    answer: "Dummy employee state data",
    explain: "Day 3-la UI layout and map() testing-ku dummy employee state data use pannom."
  },
  {
    id: 30,
    title: "Component Re-render",
    question: "React component eppo re-render aagum?",
    options: [
      "State or props change aagumbothu",
      "Browser resize panrum pothu",
      "Mouse hover panrum pothu",
      "Console log print aagumbothu"
    ],
    answer: "State or props change aagumbothu",
    explain: "React components re-render automatically whenever their state or props update."
  }
];

export const chapter5Tasks = [
  {
    id: 1,
    title: "Fetch API Definition",
    question: "Browser-la already available-aa irukkura built-in JavaScript API for network requests ethu?",
    options: [
      "fetch()",
      "axios()",
      "http()",
      "request()"
    ],
    answer: "fetch()",
    explain: "fetch() is a built-in browser API used to make HTTP requests to servers."
  },
  {
    id: 2,
    title: "Async Await Purpose",
    question: "JavaScript-la asynchronous network requests complete aagura vara wait panna enna keywords use pannuvom?",
    options: [
      "async / await",
      "wait / then",
      "delay / resume",
      "sync / hold"
    ],
    answer: "async / await",
    explain: "async and await allow clean handling of asynchronous promises in JavaScript."
  },
  {
    id: 3,
    title: "Async Function Keyword",
    question: "Oru function asynchronous operation handle pannum-nu indicate panna munnadi enna keyword poduvom?",
    options: [
      "async",
      "await",
      "promise",
      "delayed"
    ],
    answer: "async",
    explain: "Placing async before function declaration enables await capability inside it."
  },
  {
    id: 4,
    title: "Await Keyword Purpose",
    question: "await keyword-oda mukkiamana job enna?",
    options: [
      "Promise result varra varaikkum execution-ah pause panni wait panrathu",
      "Server memory-ah clear panrathu",
      "Browser reload-ah trigger panrathu",
      "Database connection close panrathu"
    ],
    answer: "Promise result varra varaikkum execution-ah pause panni wait panrathu",
    explain: "await pauses async function execution until the promise settles with a response."
  },
  {
    id: 5,
    title: "GET Employees Hook",
    question: "React component load aana odaney employees list-ah fetch panna enna Hook use pannuvom?",
    options: [
      "useEffect",
      "useState",
      "useMemo",
      "useRef"
    ],
    answer: "useEffect",
    explain: "useEffect with empty dependency array triggers fetchEmployees() on component mount."
  },
  {
    id: 6,
    title: "Response OK Property",
    question: "fetch() response success-aa (200 OK) vandhucha-nu check panna enna property use pannuvom?",
    options: [
      "response.ok",
      "response.success",
      "response.status200",
      "response.valid"
    ],
    answer: "response.ok",
    explain: "response.ok is a boolean indicating if HTTP status is in the successful 200-299 range."
  },
  {
    id: 7,
    title: "Response JSON Method",
    question: "Backend-la irunthu varra raw response-ah JavaScript object/array-ku convert panna enna method use pannuvom?",
    options: [
      "response.json()",
      "response.parse()",
      "response.string()",
      "response.data()"
    ],
    answer: "response.json()",
    explain: "response.json() reads the response stream and parses it into JSON JavaScript data."
  },
  {
    id: 8,
    title: "Set Employees State",
    question: "Backend-la fetch panna employee list-ah React state-la store panna enna function use pannuvom?",
    options: [
      "setEmployees(data)",
      "employees.push(data)",
      "updateEmployees(data)",
      "saveEmployees(data)"
    ],
    answer: "setEmployees(data)",
    explain: "setEmployees(data) updates the employees state array with fetched database records."
  },
  {
    id: 9,
    title: "POST Request Method",
    question: "Frontend-la irunthu backend-kku new employee data send panna fetch() options-la method enna koduppom?",
    options: [
      "method: 'POST'",
      "method: 'SEND'",
      "method: 'CREATE'",
      "method: 'PUT'"
    ],
    answer: "method: 'POST'",
    explain: "method: 'POST' specifies that the fetch request is for creating a new resource."
  },
  {
    id: 10,
    title: "JSON Stringify Method",
    question: "React form state object-ah JSON string-aa convert panni POST request body-la anuppa enna use pannuvom?",
    options: [
      "JSON.stringify(form)",
      "JSON.parse(form)",
      "form.toString()",
      "String(form)"
    ],
    answer: "JSON.stringify(form)",
    explain: "JSON.stringify(form) serializes JavaScript object into a JSON string payload."
  },
  {
    id: 11,
    title: "Content-Type Header",
    question: "POST request headers-la JSON data anuppuren-nu backend-kku solla enna property specify pannuvom?",
    options: [
      "'Content-Type': 'application/json'",
      "'Accept': 'text/html'",
      "'Data-Type': 'json'",
      "'Format': 'application/json'"
    ],
    answer: "'Content-Type': 'application/json'",
    explain: "Content-Type header tells the Express server that incoming body payload is JSON format."
  },
  {
    id: 12,
    title: "Loading State Variable",
    question: "GET request pending-la irukkumbothu loading message show panna enna state variable use pannuvom?",
    options: [
      "loading",
      "waiting",
      "pending",
      "fetching"
    ],
    answer: "loading",
    explain: "loading boolean state tracks whether data is currently being fetched from server."
  },
  {
    id: 13,
    title: "Submitting State Variable",
    question: "POST request process aagumbothu button disable panni 'Saving...' show panna enna state use pannuvom?",
    options: [
      "submitting",
      "saving",
      "posting",
      "processing"
    ],
    answer: "submitting",
    explain: "submitting boolean state manages form submission progress and button disable state."
  },
  {
    id: 14,
    title: "Error State Variable",
    question: "API request fail aana error message-ah store panni UI-la display panna enna state use pannuvom?",
    options: [
      "error",
      "failed",
      "message",
      "alert"
    ],
    answer: "error",
    explain: "error string state stores request error messages to display inside notice boxes."
  },
  {
    id: 15,
    title: "Try Catch Block",
    question: "Async fetch requests-la unexpected network errors-ah handle panna enna block use pannuvom?",
    options: [
      "try / catch",
      "if / else",
      "error / success",
      "begin / rescue"
    ],
    answer: "try / catch",
    explain: "try...catch block catches exceptions thrown during asynchronous network requests."
  },
  {
    id: 16,
    title: "Finally Block Purpose",
    question: "API request success aanaalum failure aanaalum run aagi loading state-ah stop panra block ethu?",
    options: [
      "finally",
      "always",
      "complete",
      "end"
    ],
    answer: "finally",
    explain: "finally block executes regardless of success or error, ideal for clearing loading flags."
  },
  {
    id: 17,
    title: "Post Submit Refresh",
    question: "Puthu employee successfully create aana apram table-ah update panna enna function-ah call pannuvom?",
    options: [
      "await fetchEmployees()",
      "refreshTable()",
      "reloadWindow()",
      "resetDatabase()"
    ],
    answer: "await fetchEmployees()",
    explain: "Calling await fetchEmployees() after POST fetches the latest list from DB and updates UI."
  },
  {
    id: 18,
    title: "API URL Constant",
    question: "Namma project-la backend employee endpoint-ah store panna constant variable name enna?",
    options: [
      "API_URL",
      "SERVER_PATH",
      "BACKEND_LINK",
      "ENDPOINT"
    ],
    answer: "API_URL",
    explain: "API_URL constant stores 'http://localhost:5000/api/employees' for clean fetch calls."
  },
  {
    id: 19,
    title: "Table Loading State UI",
    question: "loading true-aa irukkum pothu table-la mukkiamanatha enna display aagum?",
    options: [
      "Loading directory...",
      "No employees yet.",
      "Error connecting database.",
      "Empty table headers only."
    ],
    answer: "Loading directory...",
    explain: "When loading is true, table displays 'Loading directory...' message row."
  },
  {
    id: 20,
    title: "Empty State UI",
    question: "employees.length === 0 irukkum pothu table-la enna display aagum?",
    options: [
      "No employees yet. Add the first team member above.",
      "Loading directory...",
      "Database error occurred.",
      "Records table hidden."
    ],
    answer: "No employees yet. Add the first team member above.",
    explain: "When array is empty, table shows 'No employees yet' guidance row."
  },
  {
    id: 21,
    title: "CORS Error Cause",
    question: "Frontend-il irunthu backend request anuppum pothu CORS error vantha backend-la enna missing-nu artham?",
    options: [
      "app.use(cors()) middleware",
      "express.json() parser",
      "dotenv config",
      "mysql connection pool"
    ],
    answer: "app.use(cors()) middleware",
    explain: "Missing cors middleware in Express backend causes browser CORS policy blocking."
  },
  {
    id: 22,
    title: "Failed to Fetch Cause",
    question: "Browser console-la 'Failed to fetch' error vantha mukkiamana reason enna?",
    options: [
      "Backend server running-la illa (or wrong port)",
      "Database table empty-aa irukku",
      "React CSS file missing",
      "Node modules deleted"
    ],
    answer: "Backend server running-la illa (or wrong port)",
    explain: "'Failed to fetch' happens when client cannot reach the backend server URL."
  },
  {
    id: 23,
    title: "Form Submission Disabled State",
    question: "submitting true-aa irukkum pothu submit button-ku enna prop set pannuvom?",
    options: [
      "disabled={submitting}",
      "active={false}",
      "loading={true}",
      "hidden={true}"
    ],
    answer: "disabled={submitting}",
    explain: "disabled={submitting} prevents multiple duplicate form submissions while saving."
  },
  {
    id: 24,
    title: "Button Text Dynamic Change",
    question: "submitting true-aa irukkum pothu submit button text enna-nu maarum?",
    options: [
      "Saving...",
      "Loading...",
      "Waiting...",
      "Processing..."
    ],
    answer: "Saving...",
    explain: "Button text dynamically switches to 'Saving...' during submission."
  },
  {
    id: 25,
    title: "Error Notice Display",
    question: "error state-la message irundha UI-la enna color-la notice box display aagum?",
    options: [
      "Red",
      "Green",
      "Blue",
      "Yellow"
    ],
    answer: "Red",
    explain: "Error notice messages are styled with red text and background for visibility."
  },
  {
    id: 26,
    title: "Frontend Server Port",
    question: "React Vite frontend development server standard-aa enna port-la run aagum?",
    options: [
      "5173",
      "5000",
      "3000",
      "8080"
    ],
    answer: "5173",
    explain: "React client runs on http://localhost:5173."
  },
  {
    id: 27,
    title: "Backend Server Port",
    question: "Node.js Express backend server standard-aa enna port-la run aagum?",
    options: [
      "5000",
      "5173",
      "3306",
      "8000"
    ],
    answer: "5000",
    explain: "Express backend API runs on http://localhost:5000."
  },
  {
    id: 28,
    title: "Data Flow Direction",
    question: "React Form -> fetch() POST -> Express Backend -> MySQL - intha flow-ku enna peru?",
    options: [
      "Full-Stack API Integration Flow",
      "Client Side Rendering Only",
      "Database Backup Routine",
      "Static Web Hosting"
    ],
    answer: "Full-Stack API Integration Flow",
    explain: "This represents the complete request-response flow in a full-stack application."
  },
  {
    id: 29,
    title: "State Update Re-render",
    question: "setEmployees(data) call aana apram React enna pannum?",
    options: [
      "Table component-ah re-render panni new records-ah display pannum",
      "Page-ah full reload pannum",
      "Database-ah clear pannum",
      "Form inputs-ah reset pannum"
    ],
    answer: "Table component-ah re-render panni new records-ah display pannum",
    explain: "State update triggers component re-render, updating the UI table with fresh data."
  },
  {
    id: 30,
    title: "Integration Checklist",
    question: "Day 4 API integration mudiyumbothu mukkiamanatha check seiyathu ethu?",
    options: [
      "Form submit aagi database-la save aagi table-la auto display aagutha nu parkirathu",
      "GitHub stars count check panrathu",
      "CSS font family change panrathu",
      "React logo animation test panrathu"
    ],
    answer: "Form submit aagi database-la save aagi table-la auto display aagutha nu parkirathu",
    explain: "Successful end-to-end CRUD integration is verified when UI submission reflects in DB and table."
  }
];

export const chapter6Tasks = [
  {
    id: 1,
    title: "Update Operation Method",
    question: "Existing employee details-ah modify/update panna enna HTTP method use pannuvom?",
    options: [
      "PUT",
      "POST",
      "GET",
      "PATCH"
    ],
    answer: "PUT",
    explain: "PUT method is standard for updating existing records in RESTful APIs."
  },
  {
    id: 2,
    title: "EditingId State Purpose",
    question: "React component-la Add mode-aa or Edit mode-aa nu track panna use panra state variable ethu?",
    options: [
      "editingId",
      "activeId",
      "updateId",
      "statusId"
    ],
    answer: "editingId",
    explain: "editingId state stores employee ID when editing, or null when adding new record."
  },
  {
    id: 3,
    title: "EditingId Null Meaning",
    question: "editingId state value null-aa iruntha antha state enna operation-ah represent pannuthu?",
    options: [
      "Create (Add Employee) mode",
      "Update (Edit Employee) mode",
      "Delete operation mode",
      "Read only mode"
    ],
    answer: "Create (Add Employee) mode",
    explain: "If editingId is null, handleSubmit executes POST for creating a new employee."
  },
  {
    id: 4,
    title: "EditingId ID Meaning",
    question: "editingId state-la specific ID (like 5) iruntha antha state enna operation-ah represent pannuthu?",
    options: [
      "Update (Edit Employee) mode",
      "Create new employee mode",
      "Table refresh mode",
      "Database reset mode"
    ],
    answer: "Update (Edit Employee) mode",
    explain: "If editingId has a value, handleSubmit executes PUT request for updating that ID."
  },
  {
    id: 5,
    title: "Dynamic Submit Method",
    question: "handleSubmit() function-la PUT or POST method-ah determine panna enna JavaScript syntax use panrom?",
    options: [
      "method: editingId ? 'PUT' : 'POST'",
      "method: editingId == null ? 'PUT' : 'POST'",
      "method: 'PUT' || 'POST'",
      "method: submitType()"
    ],
    answer: "method: editingId ? 'PUT' : 'POST'",
    explain: "Ternary operator checks editingId to dynamically switch between PUT and POST methods."
  },
  {
    id: 6,
    title: "Dynamic Submit URL",
    question: "handleSubmit() function-la API URL-ah dynamic-aa switch panna enna use panrom?",
    options: [
      "editingId ? `${API_URL}/${editingId}` : API_URL",
      "API_URL + '/update'",
      "API_URL.concat(editingId)",
      "API_URL/edit"
    ],
    answer: "editingId ? `${API_URL}/${editingId}` : API_URL",
    explain: "URL switches to include ID endpoint for PUT, or base API URL for POST."
  },
  {
    id: 7,
    title: "Begin Edit Function",
    question: "Table-la irukkura Edit button click panrum pothu execute aagi form-ah fill panra function ethu?",
    options: [
      "beginEdit(employee)",
      "startUpdate(employee)",
      "loadEditForm()",
      "editRecord()"
    ],
    answer: "beginEdit(employee)",
    explain: "beginEdit sets editingId and populates form state with selected employee details."
  },
  {
    id: 8,
    title: "Begin Edit Actions",
    question: "beginEdit() function mukkiamanatha enna two actions-ah perform pannuthu?",
    options: [
      "setEditingId(employee.id) and setForm(employee details)",
      "deleteEmployee(id) and fetchEmployees()",
      "setError('') and setLoading(true)",
      "window.confirm() and resetForm()"
    ],
    answer: "setEditingId(employee.id) and setForm(employee details)",
    explain: "beginEdit tracks the editing ID and loads existing employee data into form inputs."
  },
  {
    id: 9,
    title: "Smooth Scroll",
    question: "Edit button click pannum pothu user screen-ah top-ku smooth-aa bring panna enna use pannuvom?",
    options: [
      "window.scrollTo({ top: 0, behavior: 'smooth' })",
      "document.body.scrollTop = 0",
      "window.scrollSmooth(0)",
      "element.scrollIntoView()"
    ],
    answer: "window.scrollTo({ top: 0, behavior: 'smooth' })",
    explain: "window.scrollTo with smooth behavior scrolls page view up to the form section."
  },
  {
    id: 10,
    title: "Cancel Edit Function",
    question: "Edit mode-kku poyi irunthu cancel panra pothu state-ah reset panra function ethu?",
    options: [
      "cancelEdit()",
      "resetEdit()",
      "abortEdit()",
      "clearForm()"
    ],
    answer: "cancelEdit()",
    explain: "cancelEdit clears editingId, resets form to emptyForm, and clears errors."
  },
  {
    id: 11,
    title: "Cancel Button Display Condition",
    question: "Cancel button React UI-la eppo mattum display aagum?",
    options: [
      "editingId true-aa irukkum pothu (Edit mode)",
      "Always visible on screen",
      "Only when loading is true",
      "When employees array is empty"
    ],
    answer: "editingId true-aa irukkum pothu (Edit mode)",
    explain: "Conditional rendering `{editingId && (<button>Cancel</button>)}` shows cancel only during edit."
  },
  {
    id: 12,
    title: "Delete Operation Method",
    question: "Employee record-ah remove panra DELETE operation-ku enna HTTP method use pannuvom?",
    options: [
      "DELETE",
      "REMOVE",
      "CLEAR",
      "DROP"
    ],
    answer: "DELETE",
    explain: "DELETE method is used to remove database records via API."
  },
  {
    id: 13,
    title: "Delete Confirmation Box",
    question: "Employee delete panrathuku munnadi user-ta confirmation kekka enna use pannuvom?",
    options: [
      "window.confirm('Delete this employee record?')",
      "window.alert('Are you sure?')",
      "prompt('Confirm delete')",
      "confirmBox.show()"
    ],
    answer: "window.confirm('Delete this employee record?')",
    explain: "window.confirm opens a browser dialog box asking user confirmation before deleting."
  },
  {
    id: 14,
    title: "Delete State Filtering",
    question: "Database-la delete aana apram full page reload panrathukku badhila UI-ah update panna enna use pannuvom?",
    options: [
      "setEmployees(currentEmployees.filter(emp => emp.id !== id))",
      "employees.pop()",
      "fetchEmployees() only",
      "window.location.reload()"
    ],
    answer: "setEmployees(currentEmployees.filter(emp => emp.id !== id))",
    explain: "filter() removes the deleted ID from React state array for instant UI update."
  },
  {
    id: 15,
    title: "HTTP Status 204 Handling",
    question: "Delete API response status 204 (No Content) iruntha frontend-la result eppadi handle pannuvom?",
    options: [
      "response.status === 204 ? null : await response.json()",
      "await response.json() always",
      "response.text()",
      "response.empty()"
    ],
    answer: "response.status === 204 ? null : await response.json()",
    explain: "Status 204 has no body content, so parsing JSON directly would throw an error without this check."
  },
  {
    id: 16,
    title: "Form Title Dynamic Change",
    question: "Form heading title 'Edit employee' la irunthu 'Add employee' nu maruthu eppothu?",
    options: [
      "editingId iruntha 'Edit employee', illana 'Add employee'",
      "Always 'Add employee'",
      "When table has employees",
      "When loading is finished"
    ],
    answer: "editingId iruntha 'Edit employee', illana 'Add employee'",
    explain: "Ternary operator `{editingId ? 'Edit employee' : 'Add employee'}` updates the header dynamically."
  },
  {
    id: 17,
    title: "Submit Button Text Dynamic",
    question: "Submit button text 'Save changes' la irunthu 'Add employee' nu eppothu maarum?",
    options: [
      "editingId active-ah iruntha 'Save changes', illana 'Add employee'",
      "When submitting is true",
      "When error occurs",
      "When form is reset"
    ],
    answer: "editingId active-ah iruntha 'Save changes', illana 'Add employee'",
    explain: "Button text adapts based on whether user is creating or updating records."
  },
  {
    id: 18,
    title: "Complete CRUD Methods",
    question: "Complete Full-Stack application-la use panna 4 HTTP methods enna-enna?",
    options: [
      "GET, POST, PUT, DELETE",
      "FETCH, PUSH, UPDATE, REMOVE",
      "READ, WRITE, EDIT, CLEAR",
      "GET, SET, PUSH, POP"
    ],
    answer: "GET, POST, PUT, DELETE",
    explain: "Standard RESTful CRUD operations map to GET (Read), POST (Create), PUT (Update), and DELETE (Delete)."
  },
  {
    id: 19,
    title: "Day 5 Workshop Learning",
    question: "5 days workshop-la students mukkiamanatha enna build pannirukanga?",
    options: [
      "Full-Stack Employee Directory Application (React + Node/Express + MySQL)",
      "Static HTML portfolio website",
      "Command line calculator tool",
      "Mobile gaming application"
    ],
    answer: "Full-Stack Employee Directory Application (React + Node/Express + MySQL)",
    explain: "The workshop successfully built a complete working Full-Stack Employee Directory app."
  },
  {
    id: 20,
    title: "MVC Architecture Review",
    question: "Backend-la separation of concerns-ah maintain panra MVC structure-la M, V, C enna?",
    options: [
      "Model (Database queries), View (React UI), Controller (Validation & Logic)",
      "Main, Visual, Control",
      "Module, Variable, Connection",
      "Method, Validation, Client"
    ],
    answer: "Model (Database queries), View (React UI), Controller (Validation & Logic)",
    explain: "MVC cleanly separates data queries (Model), business logic (Controller), and user interface (View)."
  },
  {
    id: 21,
    title: "Database Connection Pool Review",
    question: "Node backend-la database connection pool create panna enna library use pannom?",
    options: [
      "mysql2/promise",
      "express-pool",
      "sql-connection-pool",
      "node-db"
    ],
    answer: "mysql2/promise",
    explain: "mysql2/promise provides async/await connection pooling for MySQL databases."
  },
  {
    id: 22,
    title: "Environment Variable Review",
    question: "Database credentials and port numbers-ah safe-aa store panna mukkiamana file ethu?",
    options: [
      ".env file",
      "config.json",
      "settings.txt",
      "package.json"
    ],
    answer: ".env file",
    explain: ".env file stores sensitive configuration variables read via dotenv."
  },
  {
    id: 23,
    title: "React State Hook Review",
    question: "React-la component data and form inputs-ah manage panna use panra core Hook ethu?",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    answer: "useState",
    explain: "useState manages reactive local state across React functional components."
  },
  {
    id: 24,
    title: "React Effect Hook Review",
    question: "Component mount aana odaney initial API fetch call panna use panra Hook ethu?",
    options: [
      "useEffect",
      "useState",
      "useCallback",
      "useMemo"
    ],
    answer: "useEffect",
    explain: "useEffect with empty dependency array [] triggers initial fetch on mount."
  },
  {
    id: 25,
    title: "CORS Middleware Review",
    question: "Different ports (5173 and 5000) communication-ah allow panna Express-la enna middleware use pannom?",
    options: [
      "cors()",
      "json()",
      "urlencoded()",
      "static()"
    ],
    answer: "cors()",
    explain: "cors middleware enables cross-origin resource sharing between frontend and backend."
  },
  {
    id: 26,
    title: "Table Avatar Display",
    question: "Table employee name-oda circle avatar-la first letter display panna enna method use pannom?",
    options: [
      "employee.name.charAt(0).toUpperCase()",
      "employee.name.slice(0,1)",
      "employee.name.substr(0,1)",
      "All of the above work"
    ],
    answer: "All of the above work",
    explain: "String extraction methods like charAt(0), slice, or substr can retrieve the initial letter."
  },
  {
    id: 27,
    title: "No Page Reload CRUD",
    question: "CRUD operations perform panrum pothu browser full page reload aaguratha thadutha mukkiamana method ethu?",
    options: [
      "event.preventDefault()",
      "return false",
      "stopReload()",
      "disableBrowserReload()"
    ],
    answer: "event.preventDefault()",
    explain: "event.preventDefault() prevents default form submission reload, enabling smooth SPA behavior."
  },
  {
    id: 28,
    title: "Database Verification Review",
    question: "React-la add/edit/delete panra actions database-la correct-aa reflect aagutha nu check panna enna tool use pannuvom?",
    options: [
      "MySQL Workbench",
      "Google Chrome Developer Tools",
      "Postman",
      "All of the above"
    ],
    answer: "All of the above",
    explain: "Workbench checks DB storage, Postman checks backend APIs, and DevTools checks network payloads."
  },
  {
    id: 29,
    title: "Complete Stack Result",
    question: "Final-aa namma application enna name-oda complete pannirukkom?",
    options: [
      "Full-Stack Employee Directory Application",
      "Simple Task Manager",
      "React Contact Book",
      "Node Express Dashboard"
    ],
    answer: "Full-Stack Employee Directory Application",
    explain: "The final project is a complete Full-Stack Employee Directory application."
  },
  {
    id: 30,
    title: "Workshop Conclusion",
    question: "Intha 5 days workshop-la students enna kaththukitanga?",
    options: [
      "Database creation, MVC backend, React frontend, and full CRUD API integration",
      "Only HTML and CSS styling",
      "Basic Python scripting",
      "Photoshop image editing"
    ],
    answer: "Database creation, MVC backend, React frontend, and full CRUD API integration",
    explain: "Students mastered end-to-end full stack web development covering databases, backend architecture, and React integration."
  }
];



export const allNodeTasks = [
  ...chapter1Tasks,
  ...chapter2Tasks,
  ...chapter3Tasks,
  ...chapter4Tasks,
  ...chapter5Tasks,
  ...chapter6Tasks
];