# MIS 233 Final Project: Custom Interactive Grafana Panel
**Developer:** Behic Numan Oruc 

## 1. Project Overview
This plugin is an individually developed Grafana panel designed to display developer identity and live query data with interactive UI elements. It fulfills all mandatory requirements for the MIS 233 course and incorporates multiple bonus features.

## 2. Implemented Features

### Mandatory Requirements
* **Successful Build & Load:** The plugin builds without errors and loads correctly.
* **Student Identity:** Displays "Developed by Behic Numan Oruc" clearly in the UI.

### Bonus Features
* **Dynamic Panel Configuration:**
    * **Developer Name Color:** A custom Color Picker to change the name's color.
    * **Circle Opacity Slider:** A slider to adjust transparency.
* **Simple Interactivity:**
    * **Click Action:** The circle changes color when clicked.
    * **Hover Effects:** Smooth scaling and brightness effects.
* **Real Data Rendering:**
    * **Live Query Integration:** Displays real-time values from Grafana data sources.
    * **Series Counter:** Dynamic counter with adjustable font sizes (Small, Medium, Large).

## 3. Technical Setup
1. Build: `npm run build`
2. Run: `docker-compose up -d`
3. Access: `http://localhost:3000` (admin/admin)

**GitHub Repository:** [https://github.com/behicnuman/mis233-behicnumanplugin-panel](https://github.com/behicnuman/mis233-behicnumanplugin-panel)