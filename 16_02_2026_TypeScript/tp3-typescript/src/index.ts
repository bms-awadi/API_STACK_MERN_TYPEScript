import { fetchUtilisateurs } from "./service";

async function main() {
  try {
    console.log("Tentative de connexion...");

    const users = await fetchUtilisateurs();

    console.log(`Nombre d'utilisateurs : ${users.length}`);
    users.forEach(u => console.log(` - [${u.id}] ${u.nom} <${u.email}>`));

  } catch (error) {
    console.log("error :", error);
  }
}

main();