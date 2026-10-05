# Fermor — Your Money Has a Story

A modern, responsive frontend concept and homepage implementation for **Fermor**, a modern fintech platform designed to bring clarity, confidence, and human approachable guidance to personal finance.

---

## Overview

Fermor is built around a single, resonant core belief:

> **"Your money has a story. Let's make it a better one."**

Rather than presenting users with confusing spreadsheets or overwhelming dashboards, Fermor structures the financial journey into three clear, progressive stages:

$$\text{UNDERSTAND} \longrightarrow \text{ACT} \longrightarrow \text{GROW}$$

The experience transforms raw financial figures into an intuitive narrative, helping people understand where they stand, make better everyday decisions, and build toward the future they want.

---

## Concept

The product-thinking behind the Fermor homepage guides users through three natural phases:

1. **Understand** — Gain clarity on the complete financial picture. See spending, savings, and baseline patterns without manual tracking, confusion, or guesswork.
2. **Act** — Translate financial data into simple, actionable steps. Surface high-impact recommendations and smart savings opportunities that can be implemented immediately.
3. **Grow** — Establish meaningful financial goals, develop sustainable wealth habits, and track compounding momentum toward future milestones.

---

## Features

- **Responsive Fermor Homepage**: Thoughtfully structured single-page layout optimized for mobile, tablet, and desktop viewports.
- **Responsive Navigation with Mobile Menu**: Sticky header with subtle backdrop blur, brand wordmark, smooth section anchor navigation, keyboard `Escape` dismissal, and body scroll locking.
- **Product-Focused Hero Visualization**: Original, pure HTML/CSS/SVG financial journey preview featuring health score gauge, 3-stage progression, and floating metric widgets.
- **Understand → Act → Grow Journey Section**: Alternating, staggered layout on desktop with continuous visual connecting gradient line and responsive mobile flow.
- **Financial Dashboard Preview**: High-fidelity product credibility interface featuring net worth, savings, and monthly budget envelopes.
- **Financial Health Score Visualization**: Circular SVG progress ring indicating overall financial momentum and positive score movement.
- **Financial Trend Chart Built with SVG**: Custom, zero-dependency responsive line/area chart visualizing 6-month financial trajectory with subtle stroke drawing animation.
- **Goal Progress Visualization**: Polished multi-goal progress tracking (Emergency Fund & Travel Fund) with viewport-triggered progress bar transitions.
- **Smart Financial Insight Section**: Contextual, actionable financial finding highlighting dining reallocation and potential monthly savings.
- **Emotional Closing CTA**: Deep forest green contained card providing an inspiring, confident finish to the visitor journey.
- **Responsive Minimal Footer**: Concise two-row footer with brand tagline, navigation anchors, copyright, and legal links.
- **Accessibility Support**: Semantic HTML landmarks, strict heading hierarchy (`h1`–`h5`), high-contrast color ratios exceeding WCAG standards, and explicit screen reader descriptors (`aria-label`, `aria-hidden`).
- **Reduced-Motion Support**: Respects system `prefers-reduced-motion` settings across all transitions and SVG animations.
- **Mobile/Tablet/Desktop Layouts**: Tailored fluid layouts tested across 375px, 390px, 768px, 1024px, and 1440px with zero horizontal overflow.

---

## Tech Stack

- **Next.js** (App Router with Turbopack)
- **React** (Server Components & targeted Client Components)
- **JavaScript** (Modern ES modules, no TypeScript)
- **Tailwind CSS** (v4 theme tokens & utility classes)
- **CSS** (Custom CSS variables, keyframe micro-animations, base resets)
- **SVG** (Handcrafted, responsive, zero-dependency data visualizations)
- **ESLint** (Next.js Core Web Vitals configuration)

---

## Design Direction

The visual system is designed to look like an authentic, high-end fintech startup rather than an AI-generated SaaS landing page:

- **Warm Off-White Canvas**: `#F7F7F2` provides a calm, editorial feel that is softer and more sophisticated than pure clinical white.
- **Deep Forest Green Accent**: `#174D3A` serves as the primary brand accent, conveying stability, growth, and trust.
- **Dark Charcoal Typography**: `#171A17` ensures optimal contrast and readability without harsh pure black.
- **White Product Surfaces**: `#FFFFFF` cards with subtle `#E5E8E3` borders create clear visual hierarchy and tactile depth.
- **Generous Whitespace**: Spacious margins and balanced vertical rhythm let each financial concept breathe.
- **Rounded but Restrained UI**: Consistent radius scale (`8px` to `24px` and pill badges) that feels approachable without looking playful or cartoonish.
- **Subtle Shadows**: Warm-tinted, low-opacity elevation prevents murky shadows.
- **Minimal Visual Language**: No stock photos, no generic 3D illustrations, and no decorative clutter.
- **Human and Approachable Fintech Aesthetic**: Clean typography, friendly microcopy, and purposeful financial visualizations.

---

## Getting Started

### Prerequisites

- **Node.js** (v18.17+ or v20+ recommended, tested on Node.js v24)
- **npm** (v9+ or v11+)

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd Fermor
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the homepage.

### Production Build

Create an optimized production build:

```bash
npm run build
npm run start
```
