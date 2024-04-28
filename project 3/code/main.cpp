#include <fstream>
#include <iostream>
#include <string>
#include <vector>
#include <iomanip>
#include "library/cInput.h"
#include "library/json.hpp"
using json = nlohmann::json;
using namespace std;

const string Line = "________________________________";
const string defaultStr = "unknown";
const int defaultNum = 0;
const string vehiculesFileName = "file/vehicles.json";
const string distanceFileName = "file/vDistance.json";

class utile
{
public:
    static void Wait(string msg)
    {

        cout << msg;
        system("pause>0");
    }
    // Method to display the menu
    static void printSectionTitle(string section)
    {
        cout << setw(70) << "\n======================================================================\n";

        cout << "                          " << section << "                          \n";
        cout << setw(70) << "======================================================================\n";
    }
};

// Base class representing a vehicle
class Vehicule
{
protected:
    string marque;
    string modele;
    int anneeFabrication;

public:
    Vehicule(string vMarque = defaultStr, string vModele = defaultStr, int vAnneeFabrication = defaultNum)
        : marque(vMarque), modele(vModele)
    {
        setAnneeFabrication(vAnneeFabrication);
    }


    virtual void afficher(bool isBase = true) const
    {
        if (isBase)
            cout << Line << "\n";
        cout << "Marque: " << marque << "\n";
        cout << "Modèle: " << modele << "\n";
        cout << "Année de fabrication: " << anneeFabrication << "\n";
        if (isBase)
            cout << Line << endl;
    }
    void setAnneeFabrication(int vAnneeFabrication)
    {

        anneeFabrication = vAnneeFabrication >= 0 ? vAnneeFabrication : 0;
    }
    string getMarque() const
    {
        return marque;
    }
    string getModele() const
    {
        return modele;
    }
    int getAnneeFabrication() const
    {
        return anneeFabrication;
    }
};

// Derived class representing a car
class Voiture : public Vehicule
{
private:
    string couleur;

public:
    Voiture(string vMarque = defaultStr, string vModele = defaultStr, int vAnneeFabrication = defaultNum, string vCouleur = defaultStr)
        : Vehicule(vMarque, vModele, vAnneeFabrication), couleur(vCouleur) {}

    void afficher(bool isBase = true) const override
    {
        if (isBase)
            cout << Line << "\n";
        cout << "--- Voiture  ---\n";
        Vehicule::afficher(false);
        cout << "Couleur: " << couleur << endl;
        if (isBase)
            cout << Line << "\n";
    }

    string getCouleur() const
    {
        return couleur;
    }
};
class Camion : public Vehicule
{
private:
    int capaciteCharge;

public:
    Camion(string vMarque = defaultStr, string vModele = defaultStr, int vAnneeFabrication = defaultNum, int vCapaciteCharge = defaultNum)
        : Vehicule(vMarque, vModele, vAnneeFabrication)
    {
        setCapaciteCharge(vCapaciteCharge);
    }

    void afficher(bool isBase = true) const override
    {
        if (isBase)
            cout << Line << "\n";
        cout << "--- Camion ---\n";
        Vehicule::afficher(false);
        cout << "Capacité de charge: " << capaciteCharge << " tonnes" << endl;
        if (isBase)
            cout << Line << "\n";
    }

    void setCapaciteCharge(int vCapaciteCharge)
    {

        capaciteCharge = vCapaciteCharge >= 0 ? vCapaciteCharge : 0;
    }
    int getCapaciteCharge() const
    {
        return capaciteCharge;
    }
};

// Derived class representing a bus
class Bus : public Vehicule
{
private:
    int capacitePassagers;

public:
    Bus(string vMarque = defaultStr, string vModele = defaultStr, int vAnneeFabrication = defaultNum, int vCapacitePassagers = defaultNum)
        : Vehicule(vMarque, vModele, vAnneeFabrication)
    {
        setCapacitePassagers(vCapacitePassagers);
    }

    void afficher(bool isBase = true) const override
    {
        if (isBase)
            cout << Line << "\n";
        cout << "--- Bus ---\n";
        Vehicule::afficher(false);
        cout << "Capacité de passagers: " << capacitePassagers << endl;
        if (isBase)
            cout << Line << "\n";
    }

    void setCapacitePassagers(int vCapacitePassagers)
    {

        capacitePassagers = vCapacitePassagers >= 0 ? vCapacitePassagers : 0;
    }
    int getCapacitePassagers() const
    {
        return capacitePassagers;
    }
};

// Derived class representing a motorcycle
class Moto : public Vehicule
{
private:
    string typeMoto;

public:
    Moto(string vMarque = defaultStr, string vModele = defaultStr, int vAnneeFabrication = defaultNum, string vTypeMoto = defaultStr)
        : Vehicule(vMarque, vModele, vAnneeFabrication), typeMoto(vTypeMoto) {}

    // Redefinition of the afficher method for motorcycles
    void afficher(bool isBase = true) const override
    {
        if (isBase)
            cout << Line << "\n";
        cout << "--- Moto  ---\n";
        Vehicule::afficher(false);
        cout << "Type de moto: " << typeMoto << endl;
        if (isBase)
            cout << Line << "\n";
    }

    string getTypeMoto() const
    {
        return typeMoto;
    }
};

class GestionTrafic
{
private:
    vector<Vehicule *> vehicules;
    vector<float> vDistance;
    static const int minDistance;
    int capacite;
    int taille;

public:
    GestionTrafic(int vCapacite) : taille(0)
    {
        setCapacite(vCapacite);
    }

    void ajouterVehicule(Vehicule *vehicule)
    {
        if (vehicules.size() < capacite)
        {
            vehicules.push_back(vehicule);
            taille++;
        }
        else
        {
            cout << "Le trafic est plein, impossible d'ajouter plus de véhicules." << endl;
        }
    }
    bool isValidToEnterDistance() const
    {
        return vDistance.size() < vehicules.size() && vehicules.size() >= 2;
    }
    void ajotuerDistance(float distanceBetweenPrevVeh = minDistance)
    {

        if (isValidToEnterDistance())
        {
            vDistance.push_back(distanceBetweenPrevVeh);
        }
    }

    void afficherVehicules() const
    {
        int index = 0;
        for (const Vehicule *v : vehicules)
        {
            cout << "\n v[" << ++index << "]"
                 << "\n";
            v->afficher();
        }
    }
    void afficherTraffic() const
    {
        if (!isValidToEnterDistance())
        {
            cout << "l n'existe pas un nombre suffisant de voitures pour l'affichage :\n";
        }
        else
        {
            for (size_t i = 0; i < vDistance.size(); i++)
            {
                cout << " ==>  v[ " << setw(20) << left << vehicules[i]->getMarque() << " ]   "
                     << "   --- [ " << setw(8) << vDistance[i] << " m ]"
                     << " ---     v[ " << setw(20) << left << vehicules[i + 1]->getMarque() << " ] "
                     << "\n";
            }
            cout << endl;
        }
    }

    void verifierCollisions() const
    {
        bool isCollisions = false;
        for (size_t i = 0; i < vDistance.size(); i++)
        {

            if (vDistance[i] < minDistance)
            {
                isCollisions = true;
                cout << "\n"
                     << Line << Line << "\n";
                cout << "Collision détectée entre :\n ";
                vehicules[i]->afficher(false);
                cout << "\n---------- et---------- Distance : [ " << vDistance[i] << " m ] \n\n ";
                vehicules[i + 1]->afficher(false);
                cout << Line << Line << endl;
            }
        }
        if (!isCollisions)
        {

            utile::Wait("Il n'y a pas de collections dans le système: ");
        }
    }
    vector<Vehicule *> getVehicules() const
    {
        return vehicules;
    }

    vector<float> getVDistance() const
    {
        return vDistance;
    }

    void setCapacite(int vCapacite)
    {
        capacite = vCapacite >= 0 ? vCapacite : 0;
    }

    ~GestionTrafic()
    {
        for (Vehicule *v : vehicules)
        {
            delete v;
        }
    }
};

const int GestionTrafic::minDistance = 5;


class cFile
{
public:
    static void saveVehiclesToFile(const GestionTrafic &gestionTrafic, const string &filename = vehiculesFileName)
    {
        json vehiclesJson;
        for (const Vehicule *vehicle : gestionTrafic.getVehicules())
        {
            vehiclesJson.push_back(serializeVehicle(vehicle));
        }
        ofstream outputFile(filename, ios::out | ios::trunc);
        outputFile << vehiclesJson.dump(4); // Dump JSON with indentation for readability
        outputFile.close();
    }
    static void saveVDistanceToFile(const GestionTrafic &gestionTrafic, const string &filename = distanceFileName)
    {
        json distanceJson;
        for (const float &distance : gestionTrafic.getVDistance())
        {
            distanceJson.push_back(serializeDistance(distance));
        }
        ofstream outputFile(filename, ios::out | ios::trunc);
        outputFile << distanceJson.dump(4); // Dump JSON with indentation for readability
        outputFile.close();
    }

    static void saveToFile(const GestionTrafic &gestionTrafic, const string &vVehiculesFileName = vehiculesFileName, const string &vDistanceFilename = distanceFileName)
    {
        saveVehiclesToFile(gestionTrafic);
        saveVDistanceToFile(gestionTrafic);
    }

    static void loadVehiclesFromFile(GestionTrafic &gestionTrafic, const string &filename = vehiculesFileName)
    {
        ifstream inputFile(filename, ios::in); // Open for reading

        if (inputFile.is_open())
        {
            // Check if the file is empty
            inputFile.seekg(0, ios::end); // Move get pointer to end of file
            if (inputFile.tellg() == 0)   // If the position is 0, the file is empty
                return;

            inputFile.seekg(0, ios::beg); // Move get pointer back to beginning of file

            json vehiclesJson;
            inputFile >> vehiclesJson;

            for (const auto &vehicleJson : vehiclesJson)
            {
                gestionTrafic.ajouterVehicule(deserializeVehicle(vehicleJson));
            }

            inputFile.close(); // Close the file stream
        }
        else
        {
            cout << "Impossible d'ouvrir le fichier: " << filename << endl;
        }
    }
    static void loadvDistanceFromFile(GestionTrafic &gestionTrafic, const string &filename = distanceFileName)
    {
        ifstream inputFile(filename, ios::in); // Open for reading

        if (inputFile.is_open())
        {
            // Check if the file is empty
            inputFile.seekg(0, ios::end); // Move get pointer to end of file
            if (inputFile.tellg() == 0)   // If the position is 0, the file is empty
                return;

            inputFile.seekg(0, ios::beg); // Move get pointer back to beginning of file

            json distanceJson;
            inputFile >> distanceJson;

            for (const auto &ditanceItem : distanceJson)
            {
                gestionTrafic.ajotuerDistance(deserializeDistance(ditanceItem));
            }

            inputFile.close(); // Close the file stream
        }
        else
        {
            cout << "Impossible d'ouvrir le fichier: " << filename << endl;
        }
    }
    static void loadFromFile(GestionTrafic &gestionTrafic, const string &vVehiculesFileName = vehiculesFileName, const string &vDistanceFilename = distanceFileName)
    {
        loadVehiclesFromFile(gestionTrafic);
        loadvDistanceFromFile(gestionTrafic);
    }

private:
    static json serializeDistance(const float vDistance)
    {
        json j;
        j["distance"] = vDistance;
        return j;
    }
    static json serializeVehicle(const Vehicule *vehicle)
    {
        json j;
        j["marque"] = vehicle->getMarque();
        j["modele"] = vehicle->getModele();
        j["anneeFabrication"] = vehicle->getAnneeFabrication();

        // Serialize specific attributes for derived classes
        const Voiture *voiturePtr = dynamic_cast<const Voiture *>(vehicle);
        const Bus *busPtr = dynamic_cast<const Bus *>(vehicle);
        const Moto *motoPtr = dynamic_cast<const Moto *>(vehicle);
        const Camion *CamionPtr = dynamic_cast<const Camion *>(vehicle);

        if (voiturePtr)
        {
            j["type"] = "Voiture";
            j["couleur"] = voiturePtr->getCouleur();
        }
        else if (busPtr)
        {
            j["type"] = "Bus";
            j["capacitePassagers"] = busPtr->getCapacitePassagers();
        }
        else if (motoPtr)
        {
            j["type"] = "Moto";
            j["typeMoto"] = motoPtr->getTypeMoto();
        }
        else if (CamionPtr)
        {
            j["type"] = "Camion";
            j["capaciteCharge"] = CamionPtr->getCapaciteCharge();
        }

        return j;
    }

    static float deserializeDistance(const json &j)
    {

        return j["distance"];
    }

    static Vehicule *deserializeVehicle(const json &j)
    {
        string marque = j["marque"];
        string modele = j["modele"];
        int anneeFabrication = j["anneeFabrication"];
        string type = j["type"];

        if (type == "Voiture")
        {
            string couleur = j["couleur"];
            return new Voiture(marque, modele, anneeFabrication, couleur);
        }
        else if (type == "Bus")
        {
            int capacitePassagers = j["capacitePassagers"];
            return new Bus(marque, modele, anneeFabrication, capacitePassagers);
        }
        else if (type == "Moto")
        {
            string typeMoto = j["typeMoto"];
            return new Moto(marque, modele, anneeFabrication, typeMoto);
        }
        else if (type == "Camion")
        {
            int capaciteCharge = j["capaciteCharge"];
            return new Camion(marque, modele, anneeFabrication, capaciteCharge);
        }
        else
        {
            // Default to Vehicule class if type is not recognized
            return new Vehicule(marque, modele, anneeFabrication);
        }
    }
};

enum MenuChoice
{
    ADD_VEHICLE = 1,
    DISPLAY_VEHICLES,
    DISPLAY_TRAFFIC,
    CHECK_COLLISIONS,
    EXIT
};
// Interface class for menu display and user input
class Interface
{
public:
    static void showMenu()
    {
        system("cls");
        utile::printSectionTitle(" Menu ");
        cout << "                "
             << "1. Ajouter un véhicule" << endl;
        cout << "                "
             << "2. Afficher les véhicules" << endl;
        cout << "                "
             << "3. Afficher le Traffic" << endl;
        cout << "                "
             << "4. Vérifier les collisions" << endl;
        cout << "                "
             << "5. Quitter" << endl;
        cout << setw(70) << "======================================================================\n";
    }

    // Method to get user choice
    static MenuChoice getUserChoice()
    {
        int choice = cInput::readIntegerInRange(1, MenuChoice::EXIT, "Votre choix :  ");

        return static_cast<MenuChoice>(choice);
    }

    static void startBuild()
    {
        GestionTrafic gestionTrafic(100);

        // Load vehicles from file
        cFile::loadFromFile(gestionTrafic);

        while (true)
        {
            showMenu();
            MenuChoice choice = getUserChoice();
            system("cls");

            switch (choice)
            {
            case ADD_VEHICLE:
            {
                utile::printSectionTitle(" AJOUTER UNE VEHICULE ");
                gestionTrafic.ajouterVehicule(inputVehicle());
                if (gestionTrafic.isValidToEnterDistance())
                    gestionTrafic.ajotuerDistance(inputDitance());

                break;
            }
            case DISPLAY_VEHICLES:
            {
                utile::printSectionTitle(" AFFICHER LES VEHICULES ");
                gestionTrafic.afficherVehicules();
                break;
            }
            case DISPLAY_TRAFFIC:
            {
                utile::printSectionTitle(" AFFICHER LE TRAFFIC ");
                gestionTrafic.afficherTraffic();
                break;
            }
            case CHECK_COLLISIONS:
            {
                utile::printSectionTitle(" VERIFIER LES COLLISIONS ");
                gestionTrafic.verifierCollisions();
                break;
            }
            case EXIT:
            {
                utile::printSectionTitle(" Au revoir ! ");
                break;
            }
            default:
            {
                utile::printSectionTitle(" CHOIX NO VALIDE ");
                cout << "Choix invalide. Veuillez réessayer." << endl;
                break;
            }
            };

            if (choice != MenuChoice::EXIT)
                utile::Wait("\nAppuyez sur Entrée pour revenir au menu principal :");
            else
                break;
        }

        // save vehicles To file
        cFile::saveToFile(gestionTrafic);
    }

    static Vehicule *inputVehicle()
    {
        string marque, modele, inputPrompt;
        int anneeFabrication, type;

        marque = cInput::readString("Entrez la marque du véhicule : ");
        modele = cInput::readString("Entrez le modèle du véhicule : ");
        anneeFabrication = cInput::readPositiveIntegerNumber("Entrez l'année de fabrication du véhicule : ");

        inputPrompt = "Choisissez le type de véhicule :\n";
        inputPrompt += "1. Voiture\n";
        inputPrompt += "2. Bus\n";
        inputPrompt += "3. Moto\n";
        inputPrompt += "4. Camion\n";
        type = cInput::readIntegerInRange(1, 4, inputPrompt);

        switch (type)
        {
        case 1:
        {
            string couleur;
            couleur = cInput::readString("Entrez la couleur de la voiture : ");
            return new Voiture(marque, modele, anneeFabrication, couleur);
        }
        case 2:
        {
            int capacitePassagers;
            capacitePassagers = cInput::readPositiveIntegerNumber("Entrez la capacité de passagers du bus : ");
            return new Bus(marque, modele, anneeFabrication, capacitePassagers);
        }
        case 3:
        {
            string typeMoto;
            typeMoto = cInput::readString("Entrez le type de moto : ");
            return new Moto(marque, modele, anneeFabrication, typeMoto);
        }
        case 4:
        {
            int capaciteCharge;
            capaciteCharge = cInput::readPositiveIntegerNumber("Entrez la Capacite de charge de Camion : ");
            return new Camion(marque, modele, anneeFabrication, capaciteCharge);
        }
        default:
        {
            cout << "Type de véhicule invalide." << endl;
            return nullptr;
        }
        }
    }
    static float inputDitance()
    {
        return cInput::readPositiveFloat("Entrez la Distance entre cette voiture est la dernier (m) : ", true, "La Distance doit entre un nombre positive : ");
    }
};

int main()
{
    try
    {
        Interface::startBuild();
    }
    catch (const runtime_error &e)
    {
        system("cls");
        cerr << "\nCaught exception: " << e.what() << endl;
        cin.clear();
    }

    return 0;
}
