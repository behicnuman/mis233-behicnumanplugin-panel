# MIS 233 Final Project: Custom Interactive Grafana Panel
**Developer:** Behic Numan Oruc (Individual Submission)

## 1. Project Overview
This plugin is an individually developed Grafana panel designed to display developer identity and live query data with interactive UI elements. It fulfills all mandatory requirements for the MIS 233 course and incorporates multiple bonus features for enhanced user experience.

## 2. Implemented Features

### Mandatory Requirements (Pass Criteria)
* **Successful Build & Load:** The plugin builds without errors and loads correctly within the Grafana environment.
* **Student Identity:** Displays "Developed by Behic Numan Oruc" clearly in the UI.

### Bonus Features (UI/UX & Functionality)
* **Dynamic Panel Configuration:**
    * **Developer Name Color:** A custom Color Picker in the side menu allows users to change the name's color.
    * **Circle Opacity Slider:** A slider input to adjust the transparency of the central SVG element.
* **Simple Interactivity:**
    * **Click Action:** The central circle changes color (between primary and warning states) when clicked.
    * **Hover Effects:** Smooth scaling and brightness transition when the mouse hovers over the interactive elements.
* **Real Data Rendering:**
    * **Live Query Integration:** The panel displays the latest value from a connected Grafana data source (e.g., TestData DB).
    * **Series Counter:** A dynamic counter that displays the number of active data streams, with adjustable font sizes (Small, Medium, Large).

## 3. Technical Implementation
* **Framework:** React with Grafana UI Toolkit.
* **Styling:** Emotion CSS for responsive design and layout.
* **Provisioning:** Custom dashboard JSON included for instant deployment with the plugin pre-configured.

## 4. Installation & Setup
1.  Navigate to the plugin folder: `cd /plugins/mis233-behicnumanplugin-panel`
2.  Install dependencies: `npm install`
3.  Build the plugin: `npm run build`
4.  Run environment via Docker: `docker-compose up -d`
5.  Access Grafana: `http://localhost:3000` (Login: admin / admin)