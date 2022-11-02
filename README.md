# Aufgabe Wiederholung Webservices INF-20 // IoT-Mieterportal
## Kurzbeschreibung
Zu erstellen war ein Mieterportal für z.B. eine Wohnungsbaugesellschaft. Dort können die Mieter/Eigentümer nach Registrierung ihrer SmartMeter zur Verbrauchermittlung jederzeit die aktuellen Daten abfragen. Umgesetzt wurde das Projekt mit React, Node.js und einer mysql-Datenbank.
## Projekt starten
### Vorbereitung
Um das Projekt auf seinem Rechner zu starten, muss man sich mit einem Terminal im Hauptverzeichnis des Projektes befinden.
Erforderlich sind dann die folgenden Befehle:
1. Datenbank in mysql erstellen (Tabellen werden automatisch erzeugt): `create database iot;`
2. `npm install`
3. `npm start`
4. `node src/server.js`

Die Anwendung ist dann unter http://localhost:3000 erreichbar.
### Daten hinzufügen
Am besten in Postman ein POST-Request anlegen mit: http://localhost:3001/iotdata
Als Body raw angeben und als JSON auswählen:
```
{
    "iot_id": "newdevice",
    "consumption": 10.25
}
```
