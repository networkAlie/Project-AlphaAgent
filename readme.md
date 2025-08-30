# Project AlphaAgent

An AI-Powered Web3 Discovery Agent designed exclusively for Alie Network's HUBS (Weekly Execution & Growth System) initiative.

 <!-- It's highly recommended to add a screenshot of the app here -->

## Overview

Project AlphaAgent is an internal, AI-powered lead generation tool that transforms the slow, manual process of finding potential clients into a rapid, automated, and strategic operation. It automates the "Scanning Day" phase of Alpha Hunting by deploying an autonomous AI agent, powered by the Google Gemini API, to discover, analyze, and qualify high-potential Web3 projects.

This tool is built to find ideal candidates for Alie Network's growth services, particularly the "LAUNCHPAD" and "ECOSYSTEM GROWTH" packages, by focusing on pre-TGE or newly launched projects.

## The Problem: Scaling Agency Growth

For a Web3 growth agency like Alie Network, success depends on consistently finding the right projects at the right time. The traditional approach is flawed:

-   **Manual Labor:** Hours are spent manually scouring ICO calendars, ecosystem directories, and social media. This is inefficient and doesn't scale.
-   **Stale Data:** By the time a project is found through static lists, it might already have a marketing partner or be past the ideal engagement window.
-   **Missed Opportunities:** The most valuable clients—those in the pre-TGE or early launch phase—are the hardest to find and require constant monitoring of multiple platforms.

This manual bottleneck makes proactive, scalable outreach nearly impossible.

## The Solution: AI-Powered Discovery

Project AlphaAgent solves this by automating the entire discovery and initial qualification phase. Instead of relying on static databases, it uses the Gemini API's real-time search grounding capabilities to act as a live discovery agent.

The agent understands a user-defined strategic theme, plans a data-gathering strategy, and executes it to deliver a curated list of relevant projects, each with a potential score and an analyst note.

### Key Features

-   **🤖 Autonomous AI Agent**: Uses Google Gemini's advanced reasoning to understand complex themes and execute a discovery plan.
-   **🔎 Real-Time Web Discovery**: Leverages Google Search grounding to ensure the data is fresh and reflects the very latest project listings and statuses.
-   **📈 Automated Qualification**: Each discovered project is automatically assigned a `Potansiyel Skoru` (Potential Score) and a concise `Analist Notu` (Analyst Note), allowing for rapid qualification.
-   **🎯 Strategic Theme-Based Search**: Go beyond simple keywords. Define a strategic mission like *"Upcoming GameFi projects on the Base ecosystem"* or *"Newly launched DePIN projects with low market cap"* to get highly relevant results.
-   **📊 One-Click CSV Export**: Generates a ready-to-use CSV file with Turkish headers (`ham_veri.csv`), designed for seamless integration with Alie Network's internal HUBS workflow.
-   **🔐 Secure & Client-Side**: The Gemini API key is stored **only** in the user's browser's local storage. It is never sent to a server, ensuring complete privacy and security.
-   **✨ Clean & Intuitive UI**: A simple, powerful interface designed for rapid adoption and use by the Alie Network team.

## How to Use

1.  **Get API Key**: Obtain a Google Gemini API Key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2.  **Enter API Key**: When you first open the application, paste your API Key into the input field. The key will be saved in your browser for future sessions.
3.  **Define Strategic Theme**: In the search box, enter the theme for your discovery mission. The more specific the theme, the better the results.
4.  **Deploy Agent**: Click the "Deploy Agent" button. The application will provide live status updates as the AI works.
5.  **Review & Export**: Once the search is complete, the results will be displayed as project cards. You can archive irrelevant projects and then click "Download CSV" to export the qualified list for your outreach campaign.

## Technology Stack

-   **Frontend**: React, TypeScript
-   **AI Model**: Google Gemini API (`@google/genai`)
-   **Styling**: Tailwind CSS

## Deployment

As a pure client-side application, this project can be deployed with zero configuration to any static hosting provider, such as:

-   Vercel
-   Netlify
-   GitHub Pages

Simply upload the contents of the project's build folder to your provider of choice.

---

### About Alie Network

**Growth Partner for Web3 Founders.**

-   **Email**: [info@alie.network](mailto:info@alie.network)
-   **Website**: [alie.network](https://alie.network/)
-   **Linktree**: [linktr.ee/alienetwork](https://linktr.ee/alienetwork)
-   **X (Twitter)**: [@networkAlie](https://twitter.com/networkAlie)
-   **LinkedIn**: [linkedin.com/in/alienetwork](https://www.linkedin.com/in/alienetwork/)
-   **GitHub**: [@networkAlie](https://github.com/networkAlie)
-   **YouTube**: [@networkAlie](https://www.youtube.com/@networkAlie)
-   **Reddit**: [u/networkAlie](https://www.reddit.com/user/networkAlie)
