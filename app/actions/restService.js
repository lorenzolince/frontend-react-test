"use server";

const API_ENDPOINT = process.env.API_ENDPOINT || "http://localhost:8080";


export async function getAllApi() {

    return [
        {
            id: 1,
            name: "Ana Pérez",
            email: "ana.perez@test.com",
            cellPhone: "50760000001",
            address: "Panamá City"
        },
        {
            id: 2,
            name: "Carlos Rodríguez",
            email: "carlos.rodriguez@test.com",
            cellPhone: "50760000002",
            address: "David"
        },
        {
            id: 3,
            name: "María González",
            email: "maria.gonzalez@test.com",
            cellPhone: "50760000003",
            address: "Colón"
        },
        {
            id: 4,
            name: "José Martínez",
            email: "jose.martinez@test.com",
            cellPhone: "50760000004",
            address: "Santiago"
        },
        {
            id: 5,
            name: "Laura Sánchez",
            email: "laura.sanchez@test.com",
            cellPhone: "50760000005",
            address: "Chitré"
        }
    ];
}


export async function saveApi(data) {
 console.log("data", data)
}


