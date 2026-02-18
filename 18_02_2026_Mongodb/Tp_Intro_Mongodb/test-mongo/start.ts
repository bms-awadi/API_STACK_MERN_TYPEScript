import mongoose from 'mongoose';

const uri = "mongodb+srv://admin:4EO5LKE622BoXK61@cluster18920.syqrt.mongodb.net/?appName=MernStarter"

async function testConnection() {
    try {
        console.log("Tentative de connexion...");

        await mongoose.connect(uri);


        console.log("Connexion réussie à MongoDB Atlas !");

        // 2. Définition simple d'un format de données (Schema)         
        const CatSchema = new mongoose.Schema({
            name: String
        });
        // 3. Création d'un modèle (Model) à partir du Schema         
        const Cat = mongoose.model('Cat', CatSchema);

        // 4. Création et sauvegarde d'une donnée simple
        const myCat = new Cat({ name: 'Zizou' });
        await myCat.save();

        console.log("Donnée sauvegardée : Un chat nommé Zizou a été ajouté.");
    } catch (error) {
        console.error("Erreur de connexion:", error);
    } finally {
        // 5. Fermeture de la connexion
        await mongoose.disconnect();
        console.log("Connexion fermée.");
    }
}

testConnection();
