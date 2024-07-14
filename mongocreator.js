/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Republica_Dominicana');

db.createCollection('Provincias');


db.Provincias.insertMany([
    { nombre: "Distrito Nacional", capital: "Santo Domingo" },
    { nombre: "Azua", capital: "Azua de Compostela" },
    { nombre: "Baoruco", capital: "Neiba" },
    { nombre: "Barahona", capital: "Santa Cruz de Barahona" },
    { nombre: "Dajabón", capital: "Dajabón" },
    { nombre: "Duarte", capital: "San Francisco de Macorís" },
    { nombre: "El Seibo", capital: "Santa Cruz de El Seibo" },
    { nombre: "Elías Piña", capital: "Comendador" },
    { nombre: "Espaillat", capital: "Moca" },
    { nombre: "Hato Mayor", capital: "Hato Mayor del Rey" },
    { nombre: "Hermanas Mirabal", capital: "Salcedo" },
    { nombre: "Independencia", capital: "Jimaní" },
    { nombre: "La Altagracia", capital: "Salvaleón de Higüey" },
    { nombre: "La Romana", capital: "La Romana" },
    { nombre: "La Vega", capital: "Concepción de La Vega" },
    { nombre: "María Trinidad Sánchez", capital: "Nagua" },
    { nombre: "Monseñor Nouel", capital: "Bonao" },
    { nombre: "Monte Cristi", capital: "San Fernando de Monte Cristi" },
    { nombre: "Monte Plata", capital: "Monte Plata" },
    { nombre: "Pedernales", capital: "Pedernales" },
    { nombre: "Peravia", capital: "Baní" },
    { nombre: "Puerto Plata", capital: "San Felipe de Puerto Plata" },
    { nombre: "Samaná", capital: "Santa Bárbara de Samaná" },
    { nombre: "San Cristóbal", capital: "San Cristóbal" },
    { nombre: "San José de Ocoa", capital: "San José de Ocoa" },
    { nombre: "San Juan", capital: "San Juan de la Maguana" },
    { nombre: "San Pedro de Macorís", capital: "San Pedro de Macorís" },
    { nombre: "Sánchez Ramírez", capital: "Cotuí" },
    { nombre: "Santiago", capital: "Santiago de los Caballeros" },
    { nombre: "Santiago Rodríguez", capital: "Sabaneta" },
    { nombre: "Santo Domingo", capital: "Santo Domingo Este" },
    { nombre: "Valverde", capital: "Mao" }
]);

db.Provincias.find().pretty();


