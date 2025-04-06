# Compliance Speed Challenge - Game Design Document

## Overview

**"The Compliance Speed Challenge"** is an interactive mini-game designed to engage potential leads by simulating the pressure and pitfalls of manual cross-border compliance checks versus an automated approach. The game demonstrates the value proposition of **VelocityCompliance** by allowing users to experience firsthand the complexity, time constraints, and potential costs of errors in compliance processes.

---

## Game Flow

### 1. Landing/Intro Screen

- **Headline:** "Can You Beat the Compliance Clock? Test Your Global Trade Skills!"
- **Sub-headline:** "Manual compliance costs businesses $217B annually and causes average delays of 18–42 days. See if you can navigate a shipment faster."
- **Visual:** Clean, modern graphic showing a ticking clock, a map, simplified icons for goods/documents
- **Button:** "Start the 60-Second Challenge!"

---

### 2. Gameplay (Series of Quick-Fire Challenges – ~60–90 seconds total)

#### Scenario Intro

> "Your European Green Tech company needs to ship [Product Example] to [Destination Example]."

#### Challenge 1: HS/TARIC Code Check (Accuracy & Speed)

- **Task:** "Quick! Select the correct TARIC code for your [Product]."
- **Interface:** 3–4 plausible-looking codes (one correct, others with subtle errors)
- **Timer:** 10–15 seconds countdown
- **Feedback:** Instant visual feedback (Green Check / Red X)
- **Penalty:** Flash potential penalty cost if wrong

#### Challenge 2: Denied Party Screening (Risk & Speed)

- **Task:** "Screen the Buyer: '[Fictional, slightly ambiguous name]'. Is it safe to proceed?"
- **Interface:** Name and simplified 'Risk Profile' with some slightly concerning details
- **Options:** "Clear to Ship", "Flag for Review", "Block Shipment"
- **Timer:** 10 seconds
- **Feedback:** Instant feedback on decision
- **Penalty:** "Potential Sanction Violation!" or "Opportunity Lost!" based on decision

#### Challenge 3: Regulatory Hurdle (Complexity & Speed)

- **Task:** "Does this shipment require a specific [Regulation Example] based on destination and product?"
- **Interface:** Simple "Yes" / "No" buttons with snippet of regulatory text
- **Timer:** 8 seconds
- **Feedback:** Instant feedback
- **Penalty:** "Customs Delay! Expected +5 Days" if wrong

---

### 3. Results & Value Proposition Screen

- **Headline:** "Challenge Complete! Here's Your Compliance Score:"
- **Display:**
  - **Accuracy:** X out of Y correct
  - **Total Time Taken:** Z seconds
  - **Potential Costs/Delays Incurred:** €X, Y Days Added

---

### 4. The Hook (Value Proposition)

- **Comparison:** "The average manual compliance check takes [Industry Average Time] per shipment, with error rates leading to [Average Delay] and significant fines."
- **Solution:** "Our AI-powered system performs these checks with 94% accuracy in 0.2 seconds, cutting clearance times by up to 83%."

---

## Game Mechanics

### Timing System

- Each challenge has a specific countdown timer
- Total game time tracked for final score
- Visual indicator of time remaining (progress bar or countdown)

### Scoring System

- Based on accuracy (number of correct answers)
- Time taken for each challenge
- Penalties calculated based on errors (financial cost and time delays)
- Final score combines all elements into a **"Compliance Efficiency Rating"**

### Feedback System

- Immediate visual feedback after each decision
- Sound effects for correct/incorrect answers (optional)
- Animated transitions between challenges
- Detailed breakdown of performance in results screen

---

## Content Requirements

### Challenge Scenarios

We'll need to create multiple variations of each challenge to keep the game interesting:

- **HS/TARIC Code Challenges** (5–10 variations)
  - Different products (Solar Panels, Electric Vehicles, Batteries, etc.)
  - Different correct codes with plausible incorrect alternatives

- **Denied Party Screening Challenges** (5–10 variations)
  - Different company names with varying risk profiles
  - Different risk indicators (location, ownership structure, etc.)

- **Regulatory Hurdle Challenges** (5–10 variations)
  - Different regulations based on product/destination combinations
  - Varying complexity of regulatory text snippets

---

## Visual Design

- Clean, professional interface aligned with **VelocityCompliance** brand
- Progress indicators for game flow
- Timer visualization
- Feedback animations
- Results visualization (charts/graphs for performance)

---

## Technical Implementation

- **Next.js** compatible components
- **Anime.js** for animations and transitions
- **React** state management for game logic
- Responsive design for all screen sizes
- Modular structure for easy integration with existing codebase
