// Conexión a la DB

import mongoose from 'mongoose';

export async function connectionMongo(){
    try {
        await mongoose.connect(process.env.URL_DATABASE);
        console.log("Conexión exitosa con la base de datos");
    } catch (error) {
        console.log("Error de conexión: ", error);
    }
  
}

// import mongoose from 'mongoose';

// export async function connectionMongo() {
//     try {
//         const dbUri = process.env.URL_DATABASE; // Asegúrate de que esta variable esté definida
//         if (!dbUri) {
//             throw new Error('La URL de la base de datos no está definida');
//         }
//         await mongoose.connect(dbUri);
//         console.log("Conexión exitosa con la base de datos");
//     } catch (error) {
//         console.error("Error de conexión: ", error);
//     }
// }
