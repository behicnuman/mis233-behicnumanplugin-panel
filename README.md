# MIS 233 Final Project: Custom Grafana Panel Plugin

Developed by **Behic Numan Oruc** & **Kaan Gunal**.

## 🚀 Project Overview
This project is a custom-built Grafana Panel Plugin developed for the **MIS 233 (Management Information Systems)** course. Unlike standard Grafana panels, this plugin includes specific features designed to enhance user interaction and data awareness, demonstrating the core principles of information systems management.

---

## ✨ Implemented Bonus Features

We have extended the basic plugin template with several advanced features to fulfill the "Bonus" requirements:

### 1. Advanced Panel Options (Config Toggle)
- **Feature:** Added a dynamic "Show Series Counter" switch in the panel editor.
- **Utility:** Allows users to toggle the visibility of technical metadata (series count) on the fly without editing code. This demonstrates the MIS principle of *user-centric customization*.

### 2. Data Awareness (Dynamic Indicators)
- **Feature:** The panel automatically detects the number of data series coming from the data source.
- **Functionality:** It displays the "Series Count" in real-time. This is crucial for dashboard users to verify if all expected data streams are being visualized.

### 3. Dynamic UI Sizing (Radio Buttons)
- **Feature:** Integrated a size selector (Small, Medium, Large) for the series counter.
- **Technical Detail:** Implemented using React state and Grafana's UI components, allowing the interface to adapt to the user's aesthetic preferences.

### 4. Professional Documentation
- This `README.md` has been rewritten to reflect the specific project goals, technical implementation, and developer contributions, replacing the default boilerplate.

---

## 🛠 Technical Setup & Development

### Local Environment
1. **Install Dependencies:**
   ```bash
   npm install