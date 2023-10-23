# Dynamic Dashboard Project README

## Table of Contents
1. [Introduction](#introduction)
2. [Project Objectives](#project-objectives)
3. [Requirements](#requirements)
   - [Setup](#setup)
   - [Charts](#charts)
   - [Grid Layout](#grid-layout)
   - [Settings Menu](#settings-menu)
   - [Additional Features](#additional-features)
4. [Implementation Instructions](#implementation-instructions)
   - [Initialize Project](#initialize-project)
   - [Install Packages](#install-packages)
   - [Create Chart Components](#create-chart-components)
   - [Create Grid Layout](#create-grid-layout)
   - [Settings Menu](#settings-menu)
   - [State Management](#state-management)
   - [Readme](#readme)
5. [Evaluation Criteria](#evaluation-criteria)
6. [Some Questions for Clarity](#some-questions-for-clarity)

---

## 1. Introduction
Welcome to the Dynamic Dashboard project! This document provides a comprehensive outline of the software requirements for a coding challenge focused on creating a dynamic dashboard using React, Highcharts for charting, and React-Grid-Layout for layout management. As a developer, My aim is to understand and fulfill these requirements to successfully deliver the project.

## 2. Project Objectives
As a developer, My primary objective is to build a dynamic dashboard that allows users to interact with different chart types within a flexible layout. The key project objectives are as follows:

- Develop a React-based dynamic dashboard.
- Integrate Highcharts to render various chart types.
- Implement a responsive layout system using React-Grid-Layout.
- Create functional chart components that can be resized, dragged, and dropped.
- Develop a settings menu for customizing chart types and titles.
- Implement state management to enable dynamic chart and layout updates.

## 3. Requirements

### 3.1 Setup
- Create a new React project.
- Install necessary dependencies, including Highcharts and React-Grid-Layout, using npm or yarn.

### 3.2 Charts
- Develop separate functional components for different chart types, including Bar Chart, Box and Whisker Plot, Scatter Chart, and Area Range Chart.
- Utilize Highcharts to implement and render each chart type effectively.

### 3.3 Grid Layout
- Implement a responsive grid layout system using React-Grid-Layout.
- Place chart components into grid items, allowing them to be resized, dragged, and dropped.

### 3.4 Settings Menu
- Create a settings menu overlay for each chart component.
- Position the settings menu in the upper right corner of the chart item.
- Include a dropdown to change the chart type and an input field for updating the chart title , subtitle & colors.

### 3.5 Additional Features
- Implement state management to facilitate dynamic updates to the charts and layout.

## 4. Implementation Instructions

### 4.1 Initialize Project
- Use `npx create-react-app dynamic-dashboard` to set up the project.

### 4.2 Install Packages
- Install required packages, including Highcharts and React-Grid-Layout, using npm or yarn.

### 4.3 Create Chart Components
- Develop functional components for each chart type in the `src/components/Charts` directory.
- Utilize Highcharts to create and display the charts in these components.

### 4.4 Create Grid Layout
- Develop a functional component, `Dashboard.js`, within the `src/components` directory.
- Leverage React-Grid-Layout to establish the grid layout for chart components.

### 4.5 Settings Menu
- Create a component, `SettingsMenu.js`, for the settings menu overlay.
- Integrate the settings menu into each chart component, positioning it in the upper right corner.

### 4.6 State Management
- Implement state management in `Dashboard.js` to enable real-time updates of charts and layout.

### 4.7 Readme
- Prepare a `README.md` file with clear instructions on setting up and running the project.

## 5. Evaluation Criteria
My work will be evaluated based on the following criteria:
- Code quality, adherence to best practices, and code readability.
- Implementation of required functionality and features.
- Effective use of React, including proper component structure and state management.
- Creation of a responsive and user-friendly layout.

## 6. Project Setup on local machine
## 6. Project Deployment
