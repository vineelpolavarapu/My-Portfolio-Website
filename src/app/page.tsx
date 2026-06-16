'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

type Stage =
  | 'idle'
  | 'mono'
  | 'fadeBlack'
  | 'typing'
  | 'popup1'
  | 'popup2'
  | 'fadeOut';

  const codeText = `
/*


> It's a product-only spec (no tech), organized into four parts.

    # <Product> — Product Requirements Document
    **Version X.Y · <date> · Status: <Draft / Ready for sign-off / TRD-ready>**

    > This document is the single source of truth. The User Flows and the clickable
  > prototype are SUPPORTING documents. Where they disagree, this PRD wins.

    > Changelog (one line per version): vX.Y — <what that pass closed/added>.

    ## How to read this document
    - It's a product spec, no technical detail (no code/data-model/platform internals).
    - Part A = why/who/rules · Part B = the build · Part C = outputs & quality · Part D = roadmap/reference.
    - Legend: 🔒 = owner/admin-only · 👥 = all roles · ➡ Prototype = where to see it live.

    # PART A — CONTEXT & FOUNDATIONS
    ## 1. Overview & Problem
       1.1 The company / context
       1.2 The way it works today (the current pipeline, in one line)
       1.3 The problem (quantify the pain — e.g. hours/week lost)
       1.4 What the app does (one-paragraph solution)
    ## 2. Goals & Success Metrics
       2.1 Goals (numbered) + a single "north star" test
       2.2 Success metrics table — | Metric | Today | Target |
    ## 3. Scope & Phasing
       3.1 In scope — Phase 1
       3.2 Phase 2 (later) — table | Item | Note |
       3.3 Non-goals (explicitly excluded, with why)
    ## 4. Personas
       4.1 App users — | Persona | Who | Devices & literacy | What they need |
       4.2 Recipients / non-users — | Who | Role | How they're reached |
    ## 5. Design Principles & Constraints (binding, numbered)
       5.1 Platform & access constraints (devices, login, roles)

    # PART B — THE BUILD
    ## 6. Roles & Permissions
       6.1 Capability matrix — | Capability | RoleA | RoleB |
       6.2 <Sensitive-data> visibility rules
       6.3 Confirmation prompts (which actions ask "are you sure?")
       6.4 Onboarding & oversight
    ## 7. Information Architecture
       7.1 Where users land (per role)
       7.2 Primary navigation
       7.3 Module map — | Module | What it holds |
       7.4 Screen Inventory (the build list) — grouped by module:
            | ID | Screen | Role | What it does | Weight (🟢/🟡/🔴) |
            + a rollup count (heavy/medium/light)
       7.5 Cross-cutting build items (shared pieces inside screens)
    ## 8. The Information the App Keeps (Masters & Records)  ← plain business terms, not a schema
       8.1 The masters (enter-once data)
       8.2 The transactional records — | Record | In plain terms | Key contents |
       8.3 Numbering rules — | Series | Rule | + series-wide rules
       8.4 Auto-fill & write-back
       8.5 How the records relate (cardinality)
    ## 9. Functional Requirements  ← one sub-section per feature, each with the SAME shape:
       ### 9.n <Feature>
       **Purpose.** · **User stories.** · **Rules.** · **Validation & edge rules.**
       · **Empty / error states.** · **Acceptance criteria.** · ➡ Prototype: <screens>
    ## 10. Status & State Transitions
       10.n <Entity> status — state list + table | From | To | When it moves | Triggered by |

    # PART C — SPECS & QUALITY
    ## 11. Document / Output Specifications
       11.n One sub-section per printable/outgoing artifact (header, fields, line table, footer)
       11.x Common document rules (overflow/pagination, amount-in-words, language, branding, number format)
    ## 12. Quality & Experience Requirements (product-level, numbered — search, speed, states, locale, etc.)
    ## 13. Cross-Cutting Rules, Lifecycle & Operations
       13.1 Accounts & access management
       13.2 Audit stamps (who & when)
       13.3 Deletion, voiding & reasons — | Record | Before live | After live |
       13.4 Initial data load (go-live / seeding)
       13.5 Settings inventory (what lives in Settings)
       13.6 Regulatory / compliance notes

    # PART D — ROADMAP & REFERENCE
    ## 14. Phase 2 Roadmap — | Item | What it adds | Why it waits |
    ## 15. Open Items (pending inputs) — | Item | Needed for | Status |
    ## 16. Glossary — | Term | Meaning |
    ## Appendix A — <Company profile / fixed boilerplate>
    ## Appendix B — Decisions Log (chronological)
    ## Appendix C — Supporting Documents (and the "PRD wins" rule)
    ## Appendix D — Decisions (resolved) — | # | Decision | Resolved as | Where |

    What makes this PRD template work (carry these conventions over):
    - Every §9 feature uses the identical 6-part shape — Purpose → User stories → Rules → Validation/edge → Empty/error states →
  Acceptance
    criteria → ➡ Prototype pointer.
    - A standing "this doc wins" clause + a version changelog at the top.
    - Decisions are tracked twice: a chronological log (Appendix B) and a resolved decision register with pointers to where each
  landed
    (Appendix D).
    - Explicit non-goals and open items so scope can't drift silently.

  This is the PRD template that i would like to use, act like a solutions architect and create a detailed PRD without cutting any
  corners, accommodate everything end to end from the template after carefully evaluating the User Flows
  @shipwithoutcode-user-flow.md  and Prototype @shipwithoutcode-prototype.html
  ⎿  Read shipwithoutcode-user-flow.md (62 lines)

● I'll start by reading the prototype HTML to understand the actual product, since the user-flow file I have is the template
  structure.

  Read 1 file (ctrl+o to expand)

● This is a Skool-like community platform called "ShipWithoutCode." Let me read the rest to capture all screens and admin features.

  Read 1 file (ctrl+o to expand)

● Let me read the remaining portion covering admin, builder, modals, and JavaScript logic.

  Read 1 file (ctrl+o to expand)

● I now have a complete picture of the product. This is ShipWithoutCode — a Skool-style private community + cohort-learning platform
  (Deccansoft / Naman Soni) with a community feed, gated classroom, resource library, members directory, a points-and-levels
  gamification spine, and an owner admin hub. Let me write the full PRD against your template.

─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 Create file
 shipwithoutcode-PRD.md
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
    1 # ShipWithoutCode — Product Requirements Document
    2 **Version 1.0 · 2026-06-16 · Status: TRD-ready**
    3
    4 > This document is the single source of truth. The **User Flows** (\`shipwithoutcode-user-flow.md\`) and the **clickable proto
      type** (\`shipwithoutcode-prototype.html\`) are SUPPORTING documents. Where they disagree, this PRD wins.
    5
    6 > **Changelog** (one line per version):
    7 > - v1.0 — First complete pass. Specified all 17 screens + 6 overlays, both roles (Owner / Member) with the level sub-gating
       spine, masters & records, the points→levels→unlocks engine, full §9 feature set, state machines, outputs, quality bar, life
      cycle/ops, and roadmap. Payments deferred to Phase 2 by decision.
    8
    9 ## How to read this document
   10 - It's a product spec, no technical detail (no code / data-model / platform internals).
   11 - **Part A** = why / who / rules · **Part B** = the build · **Part C** = outputs & quality · **Part D** = roadmap / referenc
      e.
   12 - **Legend:** 🔒 = owner/admin-only · 👥 = all roles · 🎚 = level-gated (depends on the member's points level) · ➡ Prototype
      = where to see it live.
   13 - Screen IDs (e.g. \`S04\`) are the join key across this PRD §7.4, the User Flows, and the prototype. They never drift.
   14
   15 ---
   16
   17 # PART A — CONTEXT & FOUNDATIONS
   18
   19 ## 1. Overview & Problem
   20
   21 ### 1.1 The company / context
   22 ShipWithoutCode is a private online community and cohort-learning product operated by **Naman Soni** (Director, Deccansoft).
       It serves founders and solo operators who want to build and launch real software products **without hiring or being a devel
      oper** — using AI tools, no-code/low-code platforms, agent files, and prompt workflows. The community pairs a social feed wi
      th structured courses and a curated downloadable resource library, and it uses a points-and-levels system to reward particip
      ation and progressively unlock content.
   23
   24 ### 1.2 The way it works today (the current pipeline, in one line)
   25 Today the teaching, file-sharing, and member Q&A are scattered across reels, DMs, chat groups, and ad-hoc file links — there
       is no single gated home where membership, lessons, downloads, and contribution-based access live together.
   26
   27 ### 1.3 The problem (quantify the pain)
   28 - **Fragmentation:** lessons (video), resources (agent/skill files, prompt packs, configs), and discussion live in three or
      more disconnected tools, so the Owner re-shares the same files and answers the same questions repeatedly — an estimated **5–
      8 hours/week** of duplicated effort.
   29 - **No access control:** valuable resource bundles and advanced lessons cannot be reserved for engaged members; everything i
      s either fully public or manually DM'd one person at a time.
   30 - **No participation loop:** there is no mechanism that rewards members for showing up, helping others, or shipping — so eng
      agement decays and the best contributors are invisible.
   31 - **No vetting:** anyone can land in the space; there is no request-and-approve gate to keep quality high.
   32
   33 ### 1.4 What the app does (one-paragraph solution)
   34 ShipWithoutCode brings membership, learning, resources, and community into one private space. Founders **request to join** a
      nd are **approved by the Owner**; once in, they must complete a profile before they can participate. Members read and post t
      o a categorized **community feed**, work through gated **courses** (modules → video lessons with attachments), and download
      a **resource library** of agent files, skill files, prompt packs, and configs. Every like a member earns converts to **point
      s**, points roll up into **levels**, and levels **unlock** higher courses, premium resources, and restricted post categories
      . The **Owner** runs everything — approvals, members, categories, the level/points rules, course authoring, and resource upl
      oads — from a single Admin hub and Course builder.
   35
   36 ## 2. Goals & Success Metrics
   37
   38 ### 2.1 Goals
   39 1. Give the Owner **one private home** for community, classroom, and resources, eliminating duplicated re-sharing.
   40 2. Make **participation the currency**: likes → points → levels → unlocked content, creating a self-reinforcing engagement l
      oop.
   41 3. Keep quality high with a **request-to-join + Owner-approval** gate and a **mandatory profile** before posting.
   42 4. Let the Owner **author and gate** courses and resources without any developer involvement.
   43 5. Deliver a fast, mobile-friendly, **embed-first** learning experience (video renders inline from YouTube/Vimeo/Loom).
   44
   45 **North-star test:** *A newly approved member can complete their profile, watch a lesson, download the resource that lesson
      references, post a win, and earn their first points — all in one session without leaving the app or asking the Owner for a l
      ink.*
   46
   47 ### 2.2 Success metrics
   48 | Metric | Today | Target |
   49 |---|---|---|
   50 | Owner hours/week spent re-sharing files & re-answering | 5–8 hrs | < 1 hr |
   51 | Tools a member touches to learn + get files + discuss | 3+ | 1 |
   52 | Median time from approval → first post | n/a (no funnel) | < 24 hrs |
   53 | Approved members who complete profile | n/a | ≥ 90% |
   54 | 7-day active members (post, comment, or react) | unmeasured | ≥ 40% of members |
   55 | Resource downloads served without manual Owner action | ~0% | 100% |
   56 | Join requests reviewed within 48 hrs | unmeasured | ≥ 95% |
   57
   58 ## 3. Scope & Phasing
   59
   60 ### 3.1 In scope — Phase 1 (MVP)
   61 - **Auth & entry:** email sign-up/login, request-to-join with screening questions, Owner approval, mandatory profile-setup g
      ate (photo + bio).
   62 - **Community:** categorized feed; create/read posts with rich text, image, link, and embedded video; threaded comments; lik
      es/reactions; pinned posts; post categories with per-category posting rights (owner-only / all members / level-gated).
   63 - **Classroom:** course catalog; course → module → lesson hierarchy; embed-first video lessons; lesson attachments (download
      able); per-lesson/per-course access rules (open or level-unlock); progress tracking and "mark complete"; Owner **Course buil
      der**.
   64 - **Resources:** folder-organized file library (agent files, skill files, prompt packs, configs, PDFs, code); upload (Owner)
      ; download / copy-link; resource detail slide-over; per-resource access (open or level-unlock); resource search.
   65 - **Members:** directory with sort/filter; member profiles with stats and contribution chart; follow / message entry points
      (messaging itself is Phase 2 — see §3.3); the signed-in member's own profile.
   66 - **Gamification:** 1 point per like received; configurable levels with point thresholds; levels gate courses, resources, an
      d categories; level badges shown across the app.
   67 - **Leaderboard:** 7-day / 30-day / all-time ranking by points, with podium and the member's own rank.
   68 - **Notifications:** in-app + email for likes, comments/replies, @mentions, new-member-approved, new-resource; per-type noti
      fication preferences.
   69 - **Account settings:** profile, login & security (email + password), notification preferences.
   70 - **Admin hub (Owner):** join requests (approve/decline), member management (level view, remove/ban/unban), invite links, ca
      tegory management (with posting rights & sort), levels & points configuration, community settings (name, description, privac
      y).
   71 - **Global search:** across posts, resources, and members.
   72 - **Cross-cutting:** confirmation prompts, toasts, offline/empty/error states, responsive layout, level-locked states.
   73
   74 ### 3.2 Phase 2 (later)
   75 | Item | Note |
   76 |---|---|
   77 | Payments & paid tiers | Community Settings already reserves the switch ("COMING LATER"); paid membership, paywalled course
      s/resources. |
   78 | Direct messaging | "Message" button exists on profiles as an entry point; 1:1 DM is deferred. |
   79 | Moderator role | A third role between Owner and Member to help triage requests, moderate posts, and answer Build-help. |
   80 | Course quizzes / completion certificates | Beyond "mark complete." |
   81 | Mobile native apps | Phase 1 is responsive web. |
   82 | Reactions beyond "like" | Multi-emoji reactions. |
   83 | Analytics dashboard for Owner | Engagement, retention, funnel metrics surfaced in-app. |
   84 | Bulk member operations & CSV import | For migrating an existing audience. |
   85
   86 ### 3.3 Non-goals (explicitly excluded, with why)
   87 - **Hosting/transcoding video** — videos are **embedded** from YouTube/Vimeo/Loom; the app never stores or streams raw video
      . *Why: keeps the product simple and cheap; embed-first is a core principle (§5).*
   88 - **In-app payments in Phase 1** — *Why: the MVP must prove the engagement loop before monetizing; explicitly deferred (Appe
      ndix D).*
   89 - **Real-time chat / DMs in Phase 1** — *Why: the feed + comments cover the core need; DMs add moderation and notification s
      urface area not yet justified.*
   90 - **Public, ungated content** — *Why: the product's value is a private, vetted space; default privacy is "request to join, O
      wner approves."*
   91 - **Multi-community / white-label** — *Why: Phase 1 serves a single community owned by one Owner.*
   92 - **Member-generated courses or resources** — *Why: only the Owner authors classroom content and uploads resources, to keep
      curation quality high.*
   93
   94 ## 4. Personas
   95
   96 ### 4.1 App users
   97 | Persona | Who | Devices & literacy | What they need |
   98 |---|---|---|---|
   99 | **Owner** (Naman) | Founder, instructor, and sole administrator. One Owner per community. | Desktop-first for authoring/ad
      min; mobile for engagement. High digital literacy. | Author & gate courses, upload & gate resources, approve members, config
      ure levels/points/categories, run the community, post announcements. |
  100 | **Member** (builder/founder) | Approved community participant building a product without a dev team. Sub-segmented by **le
      vel** (1→N) which governs what they can access and post. | Mobile-heavy; mixed literacy (some are first-time builders). | Le
      arn from lessons, download resources, ask for help, share wins, earn points/levels, climb the leaderboard. |
  101 | **New / unapproved applicant** | Someone who found the invite link or sign-up page and requested to join. | Mobile-heavy.
      | A clear request flow and a transparent "pending review" state. |
  102
  103 > Level sub-segments visible in the prototype: **L1 Newcomer (0 pts)**, **L3 Builder (300 pts)**, **L5 Operator (1,000 pts)*
      *, **L6 Pro (1,600 pts)**, plus an aspirational **L7 Architect**. Levels and thresholds are Owner-configurable (§9, §13.5).
  104
  105 ### 4.2 Recipients / non-users
  106 | Who | Role | How they're reached |
  107 |---|---|---|
  108 | Prospective members | Not yet in the community | Public sign-up page + shareable **invite link**; shared post links may be
       seen externally. |
  109 | Lapsed/decision-pending applicants | Submitted a request, awaiting review | Email on approval ("you're in") or decline; in
      -app "request received" state. |
  110 | Email recipients | Any member receiving notifications | Transactional emails: approval, likes, comments, @mentions, new re
      source, new-member-approved (per their preferences). |
  111
  112 ## 5. Design Principles & Constraints (binding, numbered)
  113 1. **Embed-first media.** Lessons and post videos are embedded from external hosts (YouTube/Vimeo/Loom). The app never hosts
       video. Owner pastes a URL; it renders inline.
  114 2. **Participation gates access.** Likes are the only point source (1 like = 1 point). Points→levels→unlocks is the single s
      pine of all gating in Classroom, Resources, and Categories. There is no other currency in Phase 1.
  115 3. **Vetted by default.** The community is private: request-to-join, Owner approves every member. Privacy can be switched to
       public in Settings, but private is the default.
  116 4. **Profile before participation.** A member cannot post, comment, or react until they have uploaded a photo and written a
      bio. This gate is enforced everywhere participation is attempted.
  117 5. **One Owner runs everything.** All authoring, gating, approvals, and configuration are owner-only (🔒). Members never see
       authoring or admin surfaces. No developer is needed to operate the community.
  118 6. **Mobile-friendly, fast, responsive.** Layouts collapse gracefully below ~1000px (side rails hide, primary nav condenses)
      . Screens must feel instant.
  119 7. **Levels are configurable, not hardcoded.** Level names, point thresholds, and what each unlocks are edited by the Owner;
       the rest of the app reflects those settings.
  120 8. **Destructive & irreversible actions confirm.** Ban/remove and similar actions require an explicit "are you sure?" with c
      onsequences spelled out.
  121
  122 ### 5.1 Platform & access constraints (devices, login, roles)
  123 - **Platform:** responsive web app (desktop + mobile browser). No native app in Phase 1.
  124 - **Login:** email + password. Email verification link on sign-up. Password reset supported.
  125 - **Roles:** exactly two in Phase 1 — **Owner** (🔒) and **Member** (👥, with 🎚 level sub-gating). One Owner per community.
  126 - **Access model:** private community; approved members only; level-gating layered on top for specific courses/resources/cat
      egories.
  127 - **Privacy of restricted content:** level-locked items are *visible but locked* (shown with a 🔒 and the required level) so
       members see what they're working toward — they are never silently hidden.
  128
  129 ---
  130
  131 # PART B — THE BUILD
  132
  133 ## 6. Roles & Permissions
  134
  135 ### 6.1 Capability matrix
  136 | Capability | Owner 🔒 | Member 👥 |
  137 |---|---|---|
  138 | Log in / manage own account | ✅ | ✅ |
  139 | Complete own profile (photo, bio) | ✅ | ✅ (mandatory before participating) |
  140 | View feed & post detail | ✅ | ✅ |
  141 | Create post — open categories | ✅ | ✅ (profile complete) |
  142 | Create post — Announcements / owner-only categories | ✅ | ❌ |
  143 | Create post — level-gated categories (e.g. Show your stack L3+) | ✅ | 🎚 at/above required level |
  144 | Comment / reply | ✅ | ✅ (profile complete) |
  145 | Like / react | ✅ | ✅ (profile complete) |
  146 | Pin / unpin a post | ✅ | ❌ |
  147 | Edit / delete **any** post or comment | ✅ | ❌ |
  148 | Edit / delete **own** post or comment | ✅ | ✅ |
  149 | View Classroom catalog | ✅ | ✅ |
  150 | Open a lesson — open course | ✅ | ✅ |
  151 | Open a lesson — level-locked course | ✅ | 🎚 at/above required level |
  152 | Mark lesson complete / track progress | ✅ (also has progress) | ✅ |
  153 | Create/edit/publish courses, modules, lessons (Course builder) | ✅ | ❌ |
  154 | View Resources library | ✅ | ✅ |
  155 | Download resource — open | ✅ | ✅ |
  156 | Download resource — level-locked | ✅ | 🎚 at/above required level |
  157 | Upload / edit / delete resources; manage folders | ✅ | ❌ |
  158 | View Members directory & profiles | ✅ | ✅ |
  159 | Follow a member | ✅ | ✅ |
  160 | View Leaderboard | ✅ | ✅ |
  161 | Receive notifications & set preferences | ✅ | ✅ |
  162 | Approve / decline join requests | ✅ | ❌ |
  163 | Remove / ban / unban members | ✅ | ❌ |
  164 | Generate / revoke invite links | ✅ | ❌ |
  165 | Manage categories (add/edit, posting rights, sort) | ✅ | ❌ |
  166 | Configure levels & points | ✅ | ❌ |
  167 | Edit community settings (name, description, privacy) | ✅ | ❌ |
  168 | Access Admin hub & Course builder | ✅ | ❌ (never shown) |
  169
  170 ### 6.2 Sensitive-data visibility rules
  171 - **Email addresses** are private. A member sees only their own email (in Settings). The Owner sees member emails for admini
      stration (approvals, ban-by-email). Emails are never shown on public profiles or the directory.
  172 - **Join-request answers** (why joining, what they're building, referral source) are visible only to the Owner in the Admin
      hub.
  173 - **Ban status** of a "Spam Account"-type record is visible only in the Owner's member-admin table, not publicly.
  174 - **Points & levels** are public (shown as badges, on profiles, and on the leaderboard) — they are intentionally social.
  175 - **Notification preferences, password, login activity** are visible only to the account holder.
  176
  177 ### 6.3 Confirmation prompts (which actions ask "are you sure?")
  178 | Action | Prompt | Consequence shown |
  179 |---|---|---|
  180 | Remove / ban a member | "Remove \`<name>\`?" | "They'll lose access immediately. Ban also blocks rejoining with the same ema
      il. This can be undone from the Banned list." |
  181 | Decline a join request | Confirm decline | Applicant notified; request leaves the queue. |
  182 | Delete a post / comment | Confirm delete | Content removed; (Owner deletions of others' content are audit-stamped). |
  183 | Delete / unpublish a resource or lesson | Confirm | Members lose access; affects anyone mid-course. |
  184 | Revoke an invite link | Confirm | Existing link stops working immediately. |
  185 | Generate new invite link | (Inline, no destructive confirm) | Previous link optionally still valid until revoked. |
  186 | Log out | (No confirm) | — |
  187
  188 ### 6.4 Onboarding & oversight
  189 - **Member onboarding path:** Sign up (or open invite link) → request to join with screening answers → *pending* → Owner app
      roves → email "you're in" → **mandatory profile setup (photo + bio)** → enters the feed, where a pinned "Start here → your f
      irst 7 days" post orients them.
  190 - **Owner oversight:** the Admin hub surfaces a live count of pending join requests (badge), a member table with status, and
       the levels/points/categories controls that govern the whole community. Every approval/decline, ban/unban, and content moder
      ation action is attributable to the Owner (§13.2).
  191
  192 ## 7. Information Architecture
  193
  194 ### 7.1 Where users land (per role)
  195 - **Unauthenticated:** Auth screen (\`S01\`). New applicants route to Join request (\`S02\`).
  196 - **Approved member, profile incomplete:** forced to Profile setup (\`S03\`) before the feed.
  197 - **Approved member, profile complete:** **Community feed (\`S04\`)** — the home.
  198 - **Owner:** same feed home (\`S04\`); Admin hub (\`S14\`) and Course builder (\`S15\`) reachable from the user menu.
  199
  200 ### 7.2 Primary navigation
  201 Persistent top header on every in-app screen:
  202 - **Left:** brand/logo (→ feed).
  203 - **Center nav (👥):** Community · Classroom · Resources · Members · Leaderboard.
  204 - **Right:** global search (⌘K) · notifications bell (with unread dot) · avatar menu.
  205 - **Avatar menu:** My profile · Account settings · *(Owner only)* Admin hub · Course builder · Log out.
  206 - **Responsive:** below ~1000px the center nav and search field collapse; side rails (left categories, right widgets) hide.
  207
  208 ### 7.3 Module map
  209 | Module | What it holds |
  210 |---|---|
  211 | **Auth & Entry** | Login, sign-up, request-to-join, pending state, profile-setup gate. |
  212 | **Community** | Feed, category rail, post composer, post detail, comments, reactions, pins. |
  213 | **Classroom** | Course catalog, course detail (modules), lesson player + attachments, level-locked course state, Course bu
      ilder (Owner). |
  214 | **Resources** | File library, folder tree, search, resource detail slide-over, upload (Owner), level-locked resource state
      . |
  215 | **Members** | Directory, member profile, own profile, follow, contribution chart. |
  216 | **Gamification** | Points engine, levels, level badges, level-locked states (cross-cutting, surfaced in Classroom/Resource
      s/Categories). |
  217 | **Leaderboard** | 7-day / 30-day / all-time ranking, podium. |
  218 | **Notifications** | Activity list, read/unread, mark-all-read. |
  219 | **Settings** | Profile, login & security, notification preferences. |
  220 | **Admin (Owner)** | Join requests, members, invite links, categories, levels & points, community settings. |
  221 | **Global** | Search overlay, confirmation modals, toasts, offline/empty/error states. |
  222
  223 ### 7.4 Screen Inventory (the build list)
  224 Weight legend: 🟢 light · 🟡 medium · 🔴 heavy.
  225
  226 **Auth & Entry**
  227 | ID | Screen | Role | What it does | Weight |
  228 |---|---|---|---|---|
  229 | S01 | Auth (log in / sign up) | Public | Tabbed login & sign-up; email verification messaging; forgot-password entry. | 🟡
       |
  230 | S02 | Join request | Public | Screening-question form (why join, what building, referral). | 🟢 |
  231 | S02b | Request pending | Public | Confirmation that the request is awaiting Owner review. | 🟢 |
  232 | S03 | Profile setup (gate) | Member | Mandatory photo + display name + bio before entering. | 🟡 |
  233
  234 **Community**
  235 | ID | Screen | Role | What it does | Weight |
  236 |---|---|---|---|---|
  237 | S04 | Feed | 👥 | Category rail, sort chips, composer trigger, post cards, leaderboard + level widgets. | 🔴 |
  238 | S05 | Post detail | 👥 | Full post, threaded comments, comment composer, reactions, pin/edit menu. | 🔴 |
  239 | O1 | Post composer (overlay) | 👥/🎚 | Create post: category, title, rich text, image/link/embed. | 🟡 |
  240
  241 **Classroom**
  242 | ID | Screen | Role | What it does | Weight |
  243 |---|---|---|---|---|
  244 | S06 | Classroom (catalog + course detail) | 👥/🎚 | Course cards with progress & lock state; inline course detail with modu
      les. | 🔴 |
  245 | S07 | Lesson | 👥/🎚 | Embedded video, lesson notes, attachments, module lesson nav, mark complete. | 🔴 |
  246 | S-LC | Level-locked course state | 🎚 | Shows required level, member's points, progress to unlock. | 🟢 |
  247 | S15 | Course builder | 🔒 | Tree editor for course/module/lesson; embed URL, content, access rule, attachments, publish. |
       🔴 |
  248
  249 **Resources**
  250 | ID | Screen | Role | What it does | Weight |
  251 |---|---|---|---|---|
  252 | S08 | Resources library | 👥/🎚 | Folder tree, search, file rows with type/size/date/access, download/copy-link. | 🔴 |
  253 | S-RES | Resource detail (slide-over) | 👥/🎚 | File metadata, access badge, download / copy-link. | 🟡 |
  254 | O2 | Upload resource (overlay) | 🔒 | Dropzone, title, description, folder, access rule. | 🟡 |
  255 | S-LR | Level-locked resource state | 🎚 | Shows required level and a path to earn points. | 🟢 |
  256
  257 **Members**
  258 | ID | Screen | Role | What it does | Weight |
  259 |---|---|---|---|---|
  260 | S09 | Members directory | 👥 | Searchable, sortable (most active / newest / highest level) member cards. | 🟡 |
  261 | S10 | Member profile | 👥 | Avatar, level, bio, stats, contribution chart, posts/followers/following tabs, follow/message.
       | 🔴 |
  262
  263 **Gamification & Leaderboard**
  264 | ID | Screen | Role | What it does | Weight |
  265 |---|---|---|---|---|
  266 | S11 | Leaderboard | 👥 | 7-day / 30-day / all-time podium + ranked list + the member's own rank. | 🟡 |
  267
  268 **System**
  269 | ID | Screen | Role | What it does | Weight |
  270 |---|---|---|---|---|
  271 | S12 | Notifications | 👥 | Read/unread activity feed, mark-all-read, deep-links to source. | 🟡 |
  272 | S13 | Account settings | 👥 | Profile / Login & security / Notification preferences tabs. | 🟡 |
  273
  274 **Admin (Owner)**
  275 | ID | Screen | Role | What it does | Weight |
  276 |---|---|---|---|---|
  277 | S14 | Admin hub | 🔒 | Tabbed: Join requests · Members · Invite links · Categories · Levels & points · Community settings.
       | 🔴 |
  278
  279 **Cross-cutting overlays**
  280 | ID | Screen | Role | What it does | Weight |
  281 |---|---|---|---|---|
  282 | O3 | Profile-completion gate (interstitial) | 👥 | Blocks participation until profile is complete; routes to S03. | 🟢 |
  283 | O4 | Ban confirm (modal) | 🔒 | Confirms remove/ban with consequences. | 🟢 |
  284 | O5 | Global search (overlay) | 👥 | ⌘K search across posts, resources, members. | 🟡 |
  285
  286 **Rollup:** 🔴 heavy ×9 (S04, S05, S06, S07, S15, S08, S10, S14 — plus builder) · 🟡 medium ×9 (S01, S03, O1, S-RES, O2, S09
      , S11, S12, S13, O5) · 🟢 light ×7 (S02, S02b, S-LC, S-LR, O3, O4). **≈ 25 build units** (17 primary screens + 6 overlays +
      2 locked states).
  287
  288 ### 7.5 Cross-cutting build items (shared pieces inside screens)
  289 - **Top header / shell** (nav, search trigger, notifications bell with unread dot, avatar menu) — on every in-app screen; hi
      dden on pre-entry screens (S01–S03).
  290 - **Avatar component** with initials fallback and level badge.
  291 - **Level badge** (\`L4\`, etc.) and **OWNER / YOU** tags — rendered next to author names everywhere.
  292 - **Post card** (author, level/owner badge, category·time, title, body, embed, reactions) — reused on feed, profile, search
      results.
  293 - **Reaction control** (like toggle with count) — gated by profile completion.
  294 - **Rich-text editor toolbar** (bold, italic, list, link, quote) — shared by composer (O1) and Course builder (S15).
  295 - **Embed renderer** (YouTube/Vimeo/Loom inline) — feed, post detail, lessons.
  296 - **Progress bar** — course progress, level progress.
  297 - **Level-lock pattern** (lock icon + required level + path to earn) — courses, resources, categories.
  298 - **Confirmation modal** + **toast** + **empty state** + **offline banner** — global.
  299 - **Folder/category sortable rows** (drag handle) — Admin categories, folders, Course builder tree.
  300 - **Search overlay** (⌘K) and **resource search** — shared search behavior.
  301 - **Access-rule selector** ("Open / Level-unlock — Level N+") — reused in composer category, upload, lesson builder.
  302
  303 ## 8. The Information the App Keeps (Masters & Records)
  304
  305 ### 8.1 The masters (enter-once data)
  306 - **Community profile** — name, description, privacy mode (private/public). One record. (Owner-edited in Settings.)
  307 - **Categories** — the feed's posting buckets, each with: name/emoji, description, **posting rights** (owner-only / all memb
      ers / level N+), **sort mode** (recent / top), and display order.
  308 - **Levels** — the gamification ladder: level number, name (Newcomer, Builder, Operator, Pro, Architect…), **point threshold
      **, and **what it unlocks** (courses, resources, categories). Owner-configurable.
  309 - **Points rule** — the earn rate (Phase 1: **1 point per like received**). One setting.
  310 - **Folders** — resource library taxonomy (Agent files, Skill files, Prompt packs, Configs, PDFs & guides, Code…).
  311 - **Courses** — title, description, cover, order, open/locked status. Each course owns **Modules**; each module owns **Lesso
      ns**.
  312 - **Invite link(s)** — the active shareable join link(s) and revocation status.
  313
  314 ### 8.2 The transactional records
  315 | Record | In plain terms | Key contents |
  316 |---|---|---|
  317 | **Member** | A person in the community | Name, email (private), avatar, bio, join date, role (Owner/Member), level, points
       total, status (Active/Banned), follower/following counts, post/like counts. |
  318 | **Join request** | An application to join | Applicant identity, screening answers (why join / what building / referral), s
      ubmitted-at, status (Pending/Approved/Declined). |
  319 | **Post** | A feed entry | Author, category, title (optional), body (rich text), optional image/link/embedded video, create
      d-at, pinned flag, like count, comment count, status. |
  320 | **Comment** | A reply on a post (threaded, one level of nesting shown) | Author, parent post, optional parent comment, bod
      y, created-at, like count. |
  321 | **Reaction (like)** | A like on a post or comment | Actor, target (post/comment), created-at. Drives the points ledger. |
  322 | **Lesson progress** | A member's progress through a lesson/course | Member, lesson, complete/incomplete, completed-at; rol
      ls up to course % and "continue" pointer. |
  323 | **Resource (file)** | A downloadable asset | Title, description, file type, size, folder, access rule (open / level N+), u
      ploaded-at, uploader (Owner). |
  324 | **Attachment** | A file attached to a lesson | Title, file type, size, parent lesson. |
  325 | **Notification** | An activity alert | Recipient, type (like/comment/mention/member-approved/new-resource), source link, r
      ead/unread, created-at. |
  326 | **Follow** | A directed follow relationship | Follower, followee, created-at. |
  327 | **Points ledger entry** | The audit trail behind a member's points | Member, +points, source (like on post/comment), occur
      red-at. (Net of un-likes.) |
  328 | **Ban record** | A blocked account | Member/email, banned-at, banned-by (Owner), reversible via unban. |
  329
  330 ### 8.3 Numbering & identity rules
  331 | Series | Rule |
  332 |---|---|
  333 | Invite link | Human-shareable slug, e.g. \`shipwithoutcode.com/invite/<code>-builder\`; one active code at a time per genera
      tion; revocable. |
  334 | Member handle / @mention | Derived from name (e.g. \`@namansoni\`); used in mentions and notifications; unique. |
  335 | Course / Module / Lesson order | Sequential within parent (Module 1, 2…; Lesson 1, 2…); reorderable by drag in the Course
      builder; display labels follow order. |
  336 | Resource & post identity | System-assigned, opaque; surfaced only via shareable links ("Copy link"). |
  337
  338 > *Series-wide rule:* identifiers used in shareable links remain stable for the life of the item so external links don't bre
      ak; reordering changes display position, not the item's permalink.
  339
  340 ### 8.4 Auto-fill & write-back
  341 - **Like → points → level:** a like writes +1 to the target author's points ledger; the member's points total and **level**
      recompute automatically; level changes may **unlock** courses/resources/categories and can fire a notification. Removing a l
      ike reverses the point.
  342 - **Approval → member:** approving a join request creates the Member, fires the approval email, fires a "new member approved
      " notification (per Owner/member prefs), and removes the request from the queue.
  343 - **Profile completion → participation unlock:** saving photo + bio flips the member from "gated" to "can post/comment/react
      " everywhere.
  344 - **Lesson complete → progress:** marking complete advances course % and the "Continue lesson N" pointer; the next lesson be
      comes the default.
  345 - **Post in a category:** inherits that category's sort mode and posting-rights checks at compose time.
  346 - **New resource upload:** fires a "new resource" notification to members (per prefs).
  347
  348 ### 8.5 How the records relate (cardinality)
  349 - One **Community** → many **Members**, **Categories**, **Courses**, **Folders**, **Levels**.
  350 - One **Member** → many **Posts**, **Comments**, **Reactions**, **Follows**, **Notifications**, **Lesson-progress** rows, on
      e **Level**, one running **Points** total.
  351 - One **Category** → many **Posts**. One **Post** → many **Comments** & **Reactions**.
  352 - One **Course** → many **Modules** → many **Lessons** → many **Attachments**.
  353 - One **Folder** → many **Resources**.
  354 - One **Join request** → at most one resulting **Member** (on approval).
  355 - **Follow** is a many-to-many between Members (follower ↔ followee).
  356
  357 ## 9. Functional Requirements
  358
  359 ### 9.1 Sign-up, Login & Email Verification
  360 **Purpose.** Let people create an account and existing members get back in, with verified email.
  361 **User stories.** As a visitor I can sign up with name/email/password and verify my email. As a member I can log in, and res
      et a forgotten password.
  362 **Rules.** Sign-up tab collects full name, email, password (min 8 chars); a verification link is emailed. Login tab takes em
      ail + password. "Forgot password?" starts a reset. After sign-up, the user proceeds to **Join request** (S02) (for a private
       community) or, post-approval, to **Profile setup** (S03).
  363 **Validation & edge rules.** Email must be well-formed and unique; password ≥ 8 chars; unverified emails can't be approved i
      nto the community; wrong credentials show an inline error without revealing which field failed.
  364 **Empty / error states.** Invalid login → "Email or password is incorrect." Unverified → prompt to resend link. Reset for un
      known email → neutral "if an account exists, we've sent a link."
  365 **Acceptance criteria.** (a) Valid sign-up sends a verification email and advances the flow. (b) Valid login lands the user
      on the feed (or profile gate if incomplete). (c) Reset link flow is available from login.
  366 ➡ Prototype: S01 (Auth).
  367
  368 ### 9.2 Request to Join & Owner Approval
  369 **Purpose.** Keep the community private and vetted.
  370 **User stories.** As an applicant I answer a few questions and submit a request, then see a pending state. As the Owner I re
      view answers and approve or decline.
  371 **Rules.** Request form asks: *Why do you want to join?*, *What are you working on right now?*, *How did you hear about us?*
       On submit, applicant sees **Request received** (S02b) and is told they'll be emailed on approval. The Owner sees the reques
      t in **Admin hub → Join requests** (with a live count badge), reads the answers, and clicks **Approve** or **Decline**. Appr
      ove creates the member and emails them; Decline removes it from the queue and notifies the applicant.
  372 **Validation & edge rules.** "Why join" is required; the other answers are encouraged. Duplicate requests from the same emai
      l collapse to one. A **banned** email cannot re-request (blocked). If privacy = public, this gate is bypassed (anyone can jo
      in) — but private is default.
  373 **Empty / error states.** No pending requests → empty state in the Admin tab ("You're all caught up"). Applicant revisiting
      while pending sees the pending state, not a second form.
  374 **Acceptance criteria.** (a) Submitted request appears in the Owner's queue with all answers. (b) Approve → member exists +
      approval email sent + request leaves queue. (c) Decline → request leaves queue + applicant notified. (d) Banned-email reques
      t is rejected.
  375 ➡ Prototype: S02, S02b, S14 (Join requests tab).
  376
  377 ### 9.3 Mandatory Profile Setup (participation gate)
  378 **Purpose.** Ensure every participating member has a photo and bio.
  379 **User stories.** As a newly approved member I'm required to add a photo and bio before I can post, comment, or react.
  380 **Rules.** Profile setup (S03) requires **photo (required)**, display name (pre-filled, editable), and **bio (required)**. U
      ntil both photo and bio exist, any attempt to post/comment/react triggers the **profile-completion gate** (O3) which routes
      to S03. Bio appears on the profile and in the member directory.
  381 **Validation & edge rules.** Photo must be an image (JPG/PNG, up to 4 MB). Bio cannot be blank. Members can later change pho
      to/bio in Settings, but cannot blank a required field.
  382 **Empty / error states.** Missing photo or bio → inline "required" tags; "Enter community" stays disabled until satisfied. A
      ttempting to act while incomplete → O3 interstitial ("Complete your profile to post · takes 30 seconds").
  383 **Acceptance criteria.** (a) Member cannot reach participation actions with an incomplete profile. (b) Saving photo + bio un
      locks posting/commenting/reacting. (c) The gate interstitial deep-links to S03 and back.
  384 ➡ Prototype: S03, O3.
  385
  386 ### 9.4 Community Feed & Categories
  387 **Purpose.** A single categorized stream of community activity.
  388 **User stories.** As a member I browse all posts or filter by category, sort by recent/new/top, and open any post.
  389 **Rules.** Left rail lists **All posts** + categories with counts (Announcements, Introduce yourself, Wins & launches, Build
       help, General, Show your stack, Feedback wanted). Sort chips: **Recent activity / New / Top**. Pinned posts (Owner) appear
      first. Right rail shows the **7-day leaderboard** and the member's **level progress** widget. Each post card shows author +
      level/owner badge, category·time, title, body, optional embed, and reactions.
  390 **Validation & edge rules.** Category posting rights are enforced at compose time (§9.6). Counts reflect visible posts. Leve
      l-gated categories still appear in the rail (visible) but posting is gated.
  391 **Empty / error states.** Empty category → "No posts here yet — be the first." Offline → banner; cached feed if available.
  392 **Acceptance criteria.** (a) Selecting a category filters the stream and highlights the rail item. (b) Sort chips reorder th
      e stream. (c) Pinned posts lead. (d) Clicking a card opens S05.
  393 ➡ Prototype: S04, S05.
  394
  395 ### 9.5 Create Post (composer)
  396 **Purpose.** Let members and the Owner publish to the feed.
  397 **User stories.** As a member I open the composer, pick a category, write a title (optional) and rich-text body, optionally
      embed a video / image / link, and post.
  398 **Rules.** Composer (O1) offers a category selector (only categories the user may post to), optional title, rich-text body (
      bold/italic/list/link/quote), and **Image / Link / Embed video** inserts. Embeds render inline (embed-first). Posting requir
      es a complete profile (§9.3).
  399 **Validation & edge rules.** Body required (title optional). Category must be one the user is permitted to post to (owner-on
      ly and level-gated categories are filtered out for ineligible members). Embed URL must be a supported host (YouTube/Vimeo/Lo
      om). Oversized/invalid image rejected with a message.
  400 **Empty / error states.** Empty body → "Post" disabled. Unsupported embed URL → inline error. No eligible category (edge) →
      guidance to level up.
  401 **Acceptance criteria.** (a) A valid post appears at the top of its category and the feed per sort. (b) Embeds render inline
      . (c) Ineligible categories never appear in the selector.
  402 ➡ Prototype: O1, S04.
  403
  404 ### 9.6 Post Detail, Comments & Threading
  405 **Purpose.** Read a full post and discuss it.
  406 **User stories.** As a member I read a post, react, and add comments/replies (one level of nesting). As the Owner I can pin
      and moderate.
  407 **Rules.** S05 shows the full post, reaction + comment counts, a comment composer, and threaded comments (a reply nests unde
      r its parent with a visual indent/border). @mentions link to profiles and notify the mentioned member. Owner can **pin** a p
      ost and **edit/delete any** content; members edit/delete **their own**.
  408 **Validation & edge rules.** Comment requires complete profile. Deleting a post removes its comments. Liking a comment also
      awards a point to the comment author.
  409 **Empty / error states.** No comments → "Be the first to comment." Deleted/removed post opened from a stale link → "This pos
      t is no longer available."
  410 **Acceptance criteria.** (a) Posting a comment appends it and increments the count. (b) A reply nests under its parent. (c)
      @mention fires a notification. (d) Owner pin/edit/delete works; members are limited to their own.
  411 ➡ Prototype: S05.
  412
  413 ### 9.7 Reactions & Points (the earn engine)
  414 **Purpose.** Convert appreciation into the community's progression currency.
  415 **User stories.** As a member, when others like my post or comment I earn points; my level rises and may unlock content.
  416 **Rules.** **1 like = 1 point** to the content author (Phase 1 rule, Owner-configurable rate). Points roll into the author's
       total and recompute their **level** against the levels ladder. Like is a toggle; un-liking reverses the point. Self-likes (
      if allowed) do not award points.
  417 **Validation & edge rules.** Reacting requires a complete profile. Rapid toggle is debounced so points reconcile to the net
      state. Removing/deleting content removes its earned points.
  418 **Empty / error states.** Offline → reaction queues and reconciles when back online (optimistic UI with rollback on failure)
      .
  419 **Acceptance criteria.** (a) A like increments the author's points by the configured rate. (b) Crossing a threshold raises t
      he level and unlocks gated items. (c) Un-like reverses the point. (d) Level changes reflect everywhere the badge appears.
  420 ➡ Prototype: S04, S05, S11, and the level widget.
  421
  422 ### 9.8 Levels & Unlocks
  423 **Purpose.** Gate content by participation in a way the Owner controls.
  424 **User stories.** As the Owner I define levels (name, threshold, unlocks). As a member I see my level, progress to the next,
       and what each unlocks.
  425 **Rules.** Levels are an ordered ladder of point thresholds (e.g., L1 0 / L3 300 / L5 1,000 / L6 1,600). Each level lists **
      what it unlocks** (specific courses, resources, categories). The member's level widget shows current level, points, a progre
      ss bar, and "X pts to Level N — unlocks <thing>." Locked items are **visible but locked** with the required level and a path
       to earn.
  426 **Validation & edge rules.** Thresholds must increase monotonically. Lowering a threshold can retroactively unlock content f
      or members who now qualify; raising it should not strip access a member already earned at the moment of unlock (grandfatheri
      ng rule — see Open Items §15). Editing unlock mappings updates gating immediately.
  427 **Empty / error states.** Member below requirement opening a locked course/resource → dedicated locked state (S-LC / S-LR) s
      howing required level, current points, and points-to-go.
  428 **Acceptance criteria.** (a) Owner can add/edit levels and their unlocks. (b) A member at/above a level can access its unloc
      ks; below, they see the locked state. (c) The level widget accurately shows progress.
  429 ➡ Prototype: S14 (Levels & points), S-LC, S-LR, level widget.
  430
  431 ### 9.9 Classroom — Catalog, Courses & Lessons
  432 **Purpose.** Deliver structured, gated, embed-first learning.
  433 **User stories.** As a member I browse courses, see my progress and which are locked, open a course's modules, watch a lesso
      n, download its attachments, and mark it complete.
  434 **Rules.** Catalog (S06) shows course cards with cover, module/lesson counts, progress (% done / not started), and lock stat
      e (e.g., "🔒 Level 6"). Open a course to see ordered **modules** (done / in-progress / not-started) and a progress widget wi
      th a "Continue lesson N" CTA. Lesson (S07) shows the **embedded video**, lesson notes, **attachments** (downloadable), a mod
      ule lesson-nav with completion checks, and **Mark complete**. Access rules apply at course and lesson level (open / level-un
      lock).
  435 **Validation & edge rules.** A locked course routes to S-LC instead of opening. Lessons can be individually access-ruled (e.
      g., L3+). Marking complete advances progress and the continue-pointer. Attachments respect their own download permissions.
  436 **Empty / error states.** No courses yet → empty catalog state. Locked course → S-LC. Broken embed → "This video is unavaila
      ble — try the source link."
  437 **Acceptance criteria.** (a) Progress and lock states render accurately per member level. (b) Mark-complete updates course %
       and the continue pointer. (c) Attachments download. (d) Locked courses never open the player.
  438 ➡ Prototype: S06, S07, S-LC.
  439
  440 ### 9.10 Course Builder (Owner)
  441 **Purpose.** Let the Owner author and gate courses without a developer.
  442 **User stories.** As the Owner I build a course tree (course → modules → lessons), set each lesson's video embed, content, a
      ccess rule, and attachments, toggle published state, preview, and publish.
  443 **Rules.** Builder (S15) has a left **structure tree** (drag-reorder course/module/lesson, add module/lesson) and a right **
      editor**: lesson title, **video embed URL** (YouTube/Vimeo/Loom), rich-text lesson content, **access rule** (Open / Level-un
      lock — Level N+), add attachment, and a per-lesson **Published** toggle. Course-level **Draft/Published** with Preview and P
      ublish.
  444 **Validation & edge rules.** A lesson needs a title to save; embed URL must be a supported host. Publishing a course makes i
      ts published lessons visible per access rules; unpublished lessons stay hidden. Reordering updates display order, not permal
      inks. Deleting a lesson/module confirms (affects members mid-course).
  445 **Empty / error states.** Empty course → prompt to add the first module/lesson. Invalid embed → inline error. Unsaved change
      s → warn on navigate away.
  446 **Acceptance criteria.** (a) Owner can create/reorder/edit/delete course structure. (b) Access rules set here drive gating i
      n S06/S07. (c) Draft content is invisible to members until published. (d) Embeds render inline for members.
  447 ➡ Prototype: S15.
  448
  449 ### 9.11 Resources — Library, Download & Access
  450 **Purpose.** A curated, gated file library.
  451 **User stories.** As a member I browse folders, search, open a resource's details, and download or copy its link — subject t
      o level gating.
  452 **Rules.** Library (S08) shows a **folder tree** with counts (All files, Agent files, Skill files, Prompt packs, Configs, PD
      Fs & guides, Code), a **search** box, and file rows (type icon, title, size, date, access badge, Download / Copy link). Leve
      l-locked files show a 🔒 + required level and route to S-LR if the member is below it. A **slide-over** (S-RES) shows full m
      etadata + Download / Copy link.
  453 **Validation & edge rules.** Download/copy-link enforce the access rule (open vs level N+). Locked rows show a disabled acti
      on. Search matches title/description across the library.
  454 **Empty / error states.** Empty folder → "Nothing here yet." Locked file → S-LR. No search matches → "No resources match '<q
      uery>'."
  455 **Acceptance criteria.** (a) Folder filter and search work. (b) Open resources download; locked ones route to S-LR for under
      -level members. (c) Slide-over shows accurate metadata and access. (d) Copy-link yields a stable, permission-checked link.
  456 ➡ Prototype: S08, S-RES, S-LR.
  457
  458 ### 9.12 Upload & Manage Resources (Owner)
  459 **Purpose.** Let the Owner publish and gate downloadable assets.
  460 **User stories.** As the Owner I upload a file with a title, description, folder, and access rule.
  461 **Rules.** Upload (O2) accepts **zip, md, json, pdf, txt, py, js** up to **25 MB**, with title, description, **folder**, and
       **access** (Open / Level-unlock — Level 3+ / Level 6+). On upload, a "new resource" notification fires to members (per pref
      s). Owner can also manage folders (§13.5).
  462 **Validation & edge rules.** File type must be allowed; size ≤ 25 MB; title required; folder required. Re-uploading replaces
       or versions the file (versioning rule — Open Items §15).
  463 **Empty / error states.** Disallowed type/oversize → inline error naming the limit. Upload failure → retryable error, no par
      tial record.
  464 **Acceptance criteria.** (a) A valid upload appears in the chosen folder with the chosen access. (b) Access rule immediately
       governs member downloads. (c) Members are notified per preferences.
  465 ➡ Prototype: O2, S08.
  466
  467 ### 9.13 Members Directory & Profiles
  468 **Purpose.** Make the community legible and its contributors visible.
  469 **User stories.** As a member I browse/search members, sort by activity/newest/level, open a profile to see stats, contribut
      ions, and posts, and follow them.
  470 **Rules.** Directory (S09) shows member cards (avatar, name, join date, level, post/like stats) with search and sort chips (
      **Most active / Newest / Highest level**). Profile (S10) shows avatar, name + level, bio, join date + points, **stats** (pos
      ts, likes earned, followers, following), a **contribution chart** (last 6 months), and tabs (Posts / Followers / Following),
       plus **Follow** and **Message** (Message = Phase 2 entry point). The Owner card carries an OWNER badge.
  471 **Validation & edge rules.** Follow is idempotent (toggle). Email is never shown. Banned members do not appear in the direct
      ory.
  472 **Empty / error states.** No posts on a profile → "No posts yet." Search no-match → "No members match." Self-profile shows e
      dit affordances instead of Follow.
  473 **Acceptance criteria.** (a) Sort/search behave as labeled. (b) Profile stats and contribution chart render. (c) Follow togg
      les and updates counts. (d) Owner/level badges show correctly.
  474 ➡ Prototype: S09, S10.
  475
  476 ### 9.14 Leaderboard
  477 **Purpose.** Surface and reward the most active contributors.
  478 **User stories.** As a member I see who's leading over 7-day / 30-day / all-time and where I rank.
  479 **Rules.** Leaderboard (S11) has timeframe chips (**7-day / 30-day / all-time**), a **podium** (top 3), a ranked list, and t
      he **member's own row highlighted** even if outside the top. Points come from likes on posts and comments.
  480 **Validation & edge rules.** Timeframe recomputes from the points ledger within the window. Ties broken by earliest to reach
       the score (tie-break rule — Open Items §15). All-time mirrors the member's total points.
  481 **Empty / error states.** Brand-new community → "No points yet — start engaging."
  482 **Acceptance criteria.** (a) Each timeframe ranks correctly. (b) Podium shows top 3. (c) The viewer's own rank is always vis
      ible.
  483 ➡ Prototype: S11, and the feed leaderboard widget.
  484
  485 ### 9.15 Notifications
  486 **Purpose.** Bring members back for relevant activity.
  487 **User stories.** As a member I see likes, comments/replies, @mentions, new-member-approved, and new-resource alerts, and I
      can mark them read.
  488 **Rules.** Notifications (S12) lists items with type icon, text, and time; **unread** items are visually distinct; **Mark al
      l read** clears the unread state; each item **deep-links** to its source (post, members, resources). The header bell shows a
      n unread dot. Delivery channels (in-app / email) per type follow the member's preferences (§9.18).
  489 **Validation & edge rules.** Aggregation: "Priya and 11 others liked your post." Opening an item marks it read. Email delive
      ry respects per-type email toggles.
  490 **Empty / error states.** No notifications → "You're all caught up."
  491 **Acceptance criteria.** (a) Each event type produces the right notification. (b) Mark-all-read clears unread + dot. (c) Ite
      ms deep-link correctly. (d) Email fires only for types the member enabled.
  492 ➡ Prototype: S12.
  493
  494 ### 9.16 Global Search
  495 **Purpose.** Find anything fast.
  496 **User stories.** As a member I press ⌘K and search posts, resources, and members, then jump to a result.
  497 **Rules.** Search overlay (O5) opens via the header field or **⌘K**; results group by **Posts / Resources / Members**; selec
      ting a result navigates to it and closes the overlay. Esc closes.
  498 **Validation & edge rules.** Results respect access — a member never sees content they can't access surfaced as openable. Re
      source search also exists inline on S08.
  499 **Empty / error states.** No query → recent/empty prompt. No matches → "No results for '<query>'."
  500 **Acceptance criteria.** (a) ⌘K opens search. (b) Grouped results render and navigate. (c) Access rules are honored in resul
      ts.
  501 ➡ Prototype: O5, S08 search.
  502
  503 ### 9.17 Account Settings — Profile / Login & Security
  504 **Purpose.** Let members manage their identity and credentials.
  505 **User stories.** As a member I change my photo, display name, and bio; update my email and password.
  506 **Rules.** Settings (S13) tabs: **Profile** (photo ≤ 4 MB JPG/PNG, display name, bio), **Login & security** (email, current+
      new password). Save shows a success toast.
  507 **Validation & edge rules.** Required fields (photo, bio) can't be blanked. Password change needs the current password; new
      ≥ 8 chars. Email change may require re-verification.
  508 **Empty / error states.** Wrong current password → inline error. Invalid image → error naming the limit.
  509 **Acceptance criteria.** (a) Profile edits persist and reflect across the app. (b) Password update validates current passwor
      d. (c) Email change triggers re-verification where required.
  510 ➡ Prototype: S13 (Profile, Login & security).
  511
  512 ### 9.18 Notification Preferences
  513 **Purpose.** Let members control what reaches them and how.
  514 **User stories.** As a member I toggle in-app and email delivery per notification type.
  515 **Rules.** Preferences (S13 → Notifications) list each type — **Likes on my posts, Comments & replies, @mentions, New member
       approved, New resource uploaded** — each with independent **IN-APP** and **EMAIL** toggles.
  516 **Validation & edge rules.** Disabling in-app for a type suppresses its bell entries; disabling email suppresses its emails.
       Critical transactional emails (approval, password reset) are not suppressible.
  517 **Empty / error states.** N/A (always populated).
  518 **Acceptance criteria.** (a) Toggling a channel changes delivery for that type. (b) Preferences persist. (c) Transactional e
      mails are unaffected.
  519 ➡ Prototype: S13 (Notifications tab).
  520
  521 ### 9.19 Admin — Member Management (approve, ban, unban, invite)
  522 **Purpose.** Give the Owner full control of who is in the community.
  523 **User stories.** As the Owner I approve/decline requests, view all members, remove/ban or unban members, and manage invite
      links.
  524 **Rules.** **Members** tab: a table (member, level, joined, status, actions) with **Remove / ban** (confirmed via O4) and **
      Unban** for banned rows. Ban blocks rejoining with the same email. **Invite links** tab: an active shareable link with **Cop
      y**, **Generate new link**, **Revoke**. Approvals/declines live in the Join requests tab (§9.2).
  525 **Validation & edge rules.** Ban is immediate and reversible from the Banned list. Revoking a link breaks it immediately. Th
      e Owner cannot ban themselves.
  526 **Empty / error states.** No members beyond Owner → minimal table. No active invite link → "Generate a link to start invitin
      g."
  527 **Acceptance criteria.** (a) Ban removes access immediately and blocks the email; unban restores. (b) Generate/Copy/Revoke l
      ink behave as labeled. (c) All actions are attributable to the Owner (§13.2).
  528 ➡ Prototype: S14 (Members, Invite links), O4.
  529
  530 ### 9.20 Admin — Categories, Levels & Community Settings
  531 **Purpose.** Configure the community's structure and gamification spine.
  532 **User stories.** As the Owner I add/edit/reorder feed categories with posting rights and sort, configure the levels ladder
      and what it unlocks, and edit community name/description/privacy.
  533 **Rules.** **Categories** tab: rows with drag-reorder, name/emoji, posting rights (OWNER ONLY / ALL MEMBERS / 🔒 LEVEL N+),
      sort mode (recent/top), Edit, and **Add category**. **Levels & points** tab: the points rule ("1 point per like received") a
      nd a ladder of levels (number, name, threshold, unlocks) with Edit and **Add level**. **Community settings** tab: name, desc
      ription, **privacy** (Private — request+approve / Public — anyone joins), Save; plus a reserved **Payments & paid tiers** bl
      ock ("COMING LATER").
  534 **Validation & edge rules.** Category posting rights take effect immediately in the composer. Level thresholds must increase
       monotonically; edits re-gate content live (see grandfathering Open Item §15). Switching to Public bypasses the join gate.
  535 **Empty / error states.** Removing a category with posts requires choosing what happens to those posts (reassign/hide — Open
       Item §15).
  536 **Acceptance criteria.** (a) Category changes (rights/sort/order) reflect in the feed and composer. (b) Level edits change g
      ating across Classroom/Resources/Categories. (c) Settings changes (name/description/privacy) take effect. (d) Payments block
       is visibly reserved, not functional.
  537 ➡ Prototype: S14 (Categories, Levels & points, Community settings).
  538
  539 ## 10. Status & State Transitions
  540
  541 ### 10.1 Join request status
  542 States: **Pending → Approved / Declined.**
  543 | From | To | When it moves | Triggered by |
  544 |---|---|---|---|
  545 | (none) | Pending | Applicant submits the request form | Applicant |
  546 | Pending | Approved | Owner approves; member created + approval email | Owner |
  547 | Pending | Declined | Owner declines; applicant notified | Owner |
  548
  549 ### 10.2 Member status
  550 States: **Active ↔ Banned.**
  551 | From | To | When it moves | Triggered by |
  552 |---|---|---|---|
  553 | (request approved) | Active | On approval | Owner |
  554 | Active | Banned | Remove/ban (confirmed) — access revoked, email blocked from rejoining | Owner |
  555 | Banned | Active | Unban from the Banned list | Owner |
  556
  557 ### 10.3 Profile completion status
  558 States: **Incomplete → Complete.**
  559 | From | To | When it moves | Triggered by |
  560 |---|---|---|---|
  561 | Incomplete | Complete | Photo + bio saved | Member |
  562 | Complete | Incomplete | (Not allowed — required fields can't be blanked) | — |
  563
  564 ### 10.4 Post status
  565 States: **Published (optionally Pinned) → Deleted.**
  566 | From | To | When it moves | Triggered by |
  567 |---|---|---|---|
  568 | (compose) | Published | Member/Owner posts | Author / Owner |
  569 | Published | Pinned | Owner pins | Owner |
  570 | Pinned | Published | Owner unpins | Owner |
  571 | Published/Pinned | Deleted | Author deletes own / Owner deletes any | Author / Owner |
  572
  573 ### 10.5 Course & Lesson status
  574 States: **Draft → Published (→ Unpublished).**
  575 | From | To | When it moves | Triggered by |
  576 |---|---|---|---|
  577 | Draft | Published | Owner publishes (course / per-lesson toggle) | Owner |
  578 | Published | Unpublished/Draft | Owner toggles off | Owner |
  579 | (any) | Deleted | Owner deletes (confirmed) | Owner |
  580
  581 ### 10.6 Resource access status
  582 States: **Open / Level-locked.**
  583 | From | To | When it moves | Triggered by |
  584 |---|---|---|---|
  585 | (upload) | Open or Level-locked | Owner sets access rule | Owner |
  586 | Level-locked | Effectively unlocked for a member | Member reaches required level | Points engine (auto) |
  587
  588 ### 10.7 Invite link status
  589 States: **Active → Revoked.**
  590 | From | To | When it moves | Triggered by |
  591 |---|---|---|---|
  592 | (generate) | Active | Owner generates | Owner |
  593 | Active | Revoked | Owner revokes (immediate) | Owner |
  594 | Active | Superseded | Owner generates a new link | Owner |
  595
  596 ---
  597
  598 # PART C — SPECS & QUALITY
  599
  600 ## 11. Document / Output Specifications
  601 > ShipWithoutCode is a community app, not a document-generation system, so it has **no printable business documents** (no in
      voices/receipts). Its "outputs" are outgoing/shareable artifacts. Each is specified below.
  602
  603 ### 11.1 Shareable post link / preview card
  604 - **Header/context:** community brand; post author + level/owner badge; category · timestamp.
  605 - **Body:** post title, body excerpt, and (if present) the embedded media thumbnail.
  606 - **Footer/meta:** reaction and comment counts; "Open in ShipWithoutCode" affordance.
  607 - **Behavior:** "Copy link" yields a stable permalink (§8.3) that is **permission-checked** on open (non-members hit the joi
      n/login wall; under-level members hit the relevant gate).
  608
  609 ### 11.2 Resource download / copy-link
  610 - **Header:** resource title + type icon (ZIP/MD/JSON/PDF/SKILL/…).
  611 - **Fields:** description, file type, size, uploaded date, access badge (Open / Level N+).
  612 - **Action:** Download (delivers the file) or Copy link (permission-checked link).
  613 - **Behavior:** locked resources never deliver bytes to under-level members; the link routes to S-LR.
  614
  615 ### 11.3 Invite link
  616 - **Form:** \`shipwithoutcode.com/invite/<code>-builder\`.
  617 - **Behavior:** opens the **Join request** flow (S02). Honors revoke/regenerate. Anyone with the link can *request*; the Own
      er still approves each.
  618
  619 ### 11.4 Transactional & notification emails
  620 - **Header:** community branding (name/logo), recipient greeting.
  621 - **Body:** the event — *approval ("you're in")*, *decline*, *like(s) on your post*, *comment/reply*, *@mention*, *new membe
      r approved*, *new resource*, *password reset*.
  622 - **Footer:** link back to the relevant in-app screen; **notification-preferences / unsubscribe** link (except non-suppressi
      ble transactional types).
  623 - **Behavior:** sent per the member's per-type EMAIL toggles (§9.18); approval/reset always send.
  624
  625 ### 11.5 Contribution chart (profile output)
  626 - A 6-month, intensity-shaded grid of a member's activity (like a contribution graph) rendered on the profile (S10).
  627
  628 ### 11.x Common output rules
  629 - **Overflow/pagination:** long feeds, member lists, leaderboards, and resource lists paginate or lazy-load; comment threads
       expand on demand.
  630 - **Branding:** every outgoing artifact (link card, email) carries the community name/logo; the brand red accent (\`#E10600\`)
       is the primary accent.
  631 - **Language & locale:** English (Phase 1); dates shown human-friendly (e.g., "5h ago", "Jun 12, 2026"); numbers abbreviated
       where dense (e.g., "2.1k likes"). i18n is a Phase 2 consideration.
  632 - **Permission-checking:** all shareable links and downloads re-check access on open; nothing bypasses gating via a stale li
      nk.
  633
  634 ## 12. Quality & Experience Requirements (product-level)
  635 1. **Speed:** primary screens feel instant; navigation is client-fast; media is embedded (no heavy uploads to wait on).
  636 2. **Search:** ⌘K global search and inline resource search return grouped, access-respecting results.
  637 3. **Responsive:** full functionality on mobile browser; side rails collapse below ~1000px; primary actions remain reachable
      .
  638 4. **States everywhere:** every list has explicit **empty**, **loading**, **error**, and (where relevant) **offline** states
      ; every gated item has a **locked** state showing the path to unlock.
  639 5. **Optimistic interactions:** likes and similar toggles update immediately and reconcile (rollback on failure).
  640 6. **Accessibility:** sufficient contrast, keyboard navigability (incl. ⌘K and Esc), focus states, and image alt/avatars wit
      h initials fallback.
  641 7. **Consistency:** shared components (post card, level badge, reaction control, editor toolbar, confirmation modal, toast)
      behave identically wherever they appear.
  642 8. **Clarity of gating:** restricted content is **visible but clearly locked**, never silently hidden, with the required lev
      el and a "go earn points" path.
  643 9. **Trust & safety:** destructive actions confirm; banned users are blocked by email; the Owner can moderate any content.
  644 10. **Locale/format:** consistent relative + absolute date formats, abbreviated counts, single currency-free model in Phase
      1.
  645
  646 ## 13. Cross-Cutting Rules, Lifecycle & Operations
  647
  648 ### 13.1 Accounts & access management
  649 - One **Owner** account per community (the founder). Members are created only via approved join requests (or open join if pr
      ivacy = public).
  650 - Email verification on sign-up; password reset from login; password change requires the current password.
  651 - Banning blocks rejoining with the same email; unban restores access.
  652 - Level-based access is recomputed continuously from points; profile-completion gating is enforced at every participation po
      int.
  653
  654 ### 13.2 Audit stamps (who & when)
  655 - **Members** carry join date and points history (ledger).
  656 - **Posts/comments/resources/lessons** carry created/uploaded timestamps and author/uploader.
  657 - **Owner moderation** (approve/decline, ban/unban, pin, delete-others, link revoke, level/category edits) is attributable t
      o the Owner with a timestamp.
  658 - **Points ledger** records each +/- with its source for leaderboard/level integrity.
  659
  660 ### 13.3 Deletion, voiding & reasons
  661 | Record | Before "live" (draft/pending) | After "live" (published/active) |
  662 |---|---|---|
  663 | Course / lesson | Edit/delete freely while Draft | Unpublish or delete (confirmed); affects members mid-course |
  664 | Resource | Replace before announce | Delete/replace (confirmed); members lose access; consider versioning (Open Item §15)
      |
  665 | Post / comment | Author edits/deletes own | Owner may delete any (audit-stamped); deletion removes earned points |
  666 | Member | Decline a pending request | Remove/ban (confirmed, O4); reversible via unban |
  667 | Invite link | — | Revoke (immediate) / regenerate |
  668 | Join request | Withdraw (pending) | Approved → becomes member; Declined → archived |
  669
  670 ### 13.4 Initial data load (go-live / seeding)
  671 - Owner account created; community profile set (name, description, privacy = Private).
  672 - Seed **categories** (Announcements, Introduce yourself, Wins & launches, Build help, General, Show your stack, Feedback wa
      nted) with posting rights/sort.
  673 - Seed **levels** ladder (e.g., L1 0 / L3 300 / L5 1,000 / L6 1,600) and unlock mappings.
  674 - Seed **folders** (Agent files, Skill files, Prompt packs, Configs, PDFs & guides, Code).
  675 - Author the first **course** (Foundations) and upload starter **resources**.
  676 - Post the pinned **"Start here → your first 7 days"** orientation post.
  677 - Generate the first **invite link**.
  678
  679 ### 13.5 Settings inventory (what lives in Settings)
  680 - **Account (member):** photo, display name, bio; email; password; per-type notification preferences (in-app/email).
  681 - **Community (Owner — Admin hub):** community name, description, privacy mode; **categories** (rights/sort/order); **levels
       & points** (rate, thresholds, unlocks); **folders**; **invite links**; reserved **Payments & paid tiers** (Phase 2).
  682
  683 ### 13.6 Regulatory / compliance notes
  684 - **Personal data:** names, emails, photos, bios, and activity are stored; provide privacy-respecting handling, the ability
      to update/delete one's account data, and email-preference controls (unsubscribe on non-transactional emails).
  685 - **Content ownership/licensing:** members own their posts; the Owner curates classroom/resource content. Uploaded files mus
      t respect copyright (Owner-uploaded only).
  686 - **Embedded media:** governed by the source platform's (YouTube/Vimeo/Loom) terms; the app only links/embeds.
  687 - **Payments (Phase 2):** when enabled, payment handling must meet the relevant payment-compliance standards.
  688
  689 ---
  690
  691 # PART D — ROADMAP & REFERENCE
  692
  693 ## 14. Phase 2 Roadmap
  694 | Item | What it adds | Why it waits |
  695 |---|---|---|
  696 | Payments & paid tiers | Paid membership and paywalled courses/resources; the reserved Settings switch turns on. | MVP must
       prove the engagement loop before monetizing. |
  697 | Direct messaging | 1:1 member messaging (the "Message" button becomes live). | Adds moderation + notification surface not
      yet justified. |
  698 | Moderator role | Third role to triage requests, moderate posts, answer Build-help. | One Owner suffices at MVP scale. |
  699 | Quizzes & certificates | Assessed completion beyond "mark complete." | Core learning loop comes first. |
  700 | Owner analytics dashboard | Engagement, retention, funnel metrics in-app. | Manual signals suffice initially. |
  701 | Native mobile apps | iOS/Android. | Responsive web covers Phase 1. |
  702 | Richer reactions | Multi-emoji reactions. | Single "like" keeps the points model clean. |
  703 | Bulk member ops / CSV import | Migrate an existing audience. | Not needed for an initial cohort. |
  704 | Internationalization | Multi-language UI/locale. | English-first launch. |
  705
  706 ## 15. Open Items (pending inputs)
  707 | Item | Needed for | Status |
  708 |---|---|---|
  709 | Level grandfathering rule | Whether raising a threshold strips already-granted access | Pending Owner decision |
  710 | Leaderboard tie-break rule | Deterministic ordering at equal points | Pending |
  711 | Category deletion behavior | What happens to posts in a deleted category (reassign/hide/delete) | Pending |
  712 | Resource versioning vs replace | Behavior when re-uploading a file with the same name | Pending |
  713 | Points on comment likes vs post likes | Confirm both award equally (assumed yes) | Pending confirmation |
  714 | Self-like / self-points policy | Whether self-likes count (assumed no) | Pending confirmation |
  715 | Email sender identity & deliverability | Domain/sender for transactional + notification email | Pending |
  716 | Max image/file sizes & allowed types final list | Confirm 4 MB image, 25 MB resource, type allow-list | Confirmed in proto
      type; ratify |
  717 | Public-mode specifics | Exact behavior when privacy = Public (skip approval entirely?) | Pending |
  718 | Editing/redaction of join-request answers | Retention/visibility of screening answers post-approval | Pending |
  719
  720 ## 16. Glossary
  721 | Term | Meaning |
  722 |---|---|
  723 | **Owner** | The single administrator/founder who runs the community. |
  724 | **Member** | An approved community participant. |
  725 | **Level** | A rank earned by accumulating points; gates content. |
  726 | **Points** | Earned currency; 1 per like received (Phase 1). |
  727 | **Unlock** | Content (course/resource/category) made available at a level. |
  728 | **Embed-first** | Video is embedded from an external host, never uploaded/stored. |
  729 | **Category** | A feed bucket with its own posting rights and sort. |
  730 | **Resource** | A downloadable file (agent/skill files, prompt packs, configs, PDFs, code). |
  731 | **Attachment** | A downloadable file tied to a lesson. |
  732 | **Pin** | Owner action to surface a post at the top of the feed. |
  733 | **Join request** | An application to join, with screening answers, awaiting Owner approval. |
  734 | **Invite link** | A shareable URL that opens the join-request flow. |
  735 | **Profile gate** | The mandatory photo+bio requirement before participating. |
  736 | **Locked state** | A visible-but-restricted view showing the required level. |
  737 | **Contribution chart** | A 6-month activity heatmap on a member profile. |
  738
  739 ## Appendix A — Company profile / fixed boilerplate
  740 **ShipWithoutCode** is operated by **Naman Soni**, Director at **Deccansoft**. It is a private community for founders who wa
      nt to build and ship real products without writing the hard parts themselves — using AI tools, no-code/low-code platforms, a
      gent & skill files, and prompt workflows. Prototype branding: wordmark "ShipWithoutCode" with an "S" logo mark; primary acce
      nt red \`#E10600\`; type families Space Grotesk (display), IBM Plex Sans (body), IBM Plex Mono (mono). Headline framing: *"Bui
      ld real products without writing the hard parts yourself."* Reference community size in prototype copy: ~2,840 builders, 40
      lessons, 180+ resources.
  741
  742 ## Appendix B — Decisions Log (chronological)
  743 1. **2026-06-16** — Adopted the four-part PRD template; mapped the ShipWithoutCode prototype + user-flow companion to it.
  744 2. **2026-06-16** — Confirmed **two roles** for Phase 1 (Owner, Member) with level sub-gating; Moderator deferred to Phase 2
      .
  745 3. **2026-06-16** — Confirmed **embed-first** media (no video hosting) as a binding principle.
  746 4. **2026-06-16** — Confirmed **points = 1 per like**, and points→levels→unlocks as the single gating spine.
  747 5. **2026-06-16** — Confirmed **private-by-default** community with request-to-join + Owner approval; public mode exists as
      a setting.
  748 6. **2026-06-16** — Confirmed **mandatory profile (photo + bio)** before participation.
      a setting.
  748 6. **2026-06-16** — Confirmed **mandatory profile (photo + bio)** before participation.

  This is the PRD template that i would like to use, act like a solutions architect and create a detailed PRD without cutting any
  corners, accommodate everything end to end from the template after carefully evaluating the User Flows
  @shipwithoutcode-user-flow.md  and Prototype @shipwithoutcode-prototype.html
  ⎿  Read shipwithoutcode-user-flow.md (62 lines)

● I'll start by reading the prototype HTML to understand the actual product, since the user-flow file I have is the template
  structure.

  Read 1 file (ctrl+o to expand)

● This is a Skool-like community platform called "ShipWithoutCode." Let me read the rest to capture all screens and admin features.

  Read 1 file (ctrl+o to expand)

● Let me read the remaining portion covering admin, builder, modals, and JavaScript logic.

  Read 1 file (ctrl+o to expand)

● I now have a complete picture of the product. This is ShipWithoutCode — a Skool-style private community + cohort-learning platform
  (Deccansoft / Naman Soni) with a community feed, gated classroom, resource library, members directory, a points-and-levels
  gamification spine, and an owner admin hub. Let me write the full PRD against your template.

● Write(shipwithoutcode-PRD.md)
  ⎿  Wrote 771 lines to shipwithoutcode-PRD.md
       2 **Version 1.0 · 2026-06-16 · Status: TRD-ready**t
       3
       4 > This document is the single source of truth. The **User Flows** (\`shipwithoutcode-user-flow.md\`) and the **clickabl
       5 e prototype**G documents. Where they disagree, this PRD wins.
       6 > **Changelog** (one line per version):
       7 > - v1.0 — First complete pass. Specified all 17 screens + 6 overlays, both roles (Owner / Member) with the level sub
         lity bar, lifecycle/ops, and roadmap. Payments deferred to Phase 2 by decision.ture set, state machines, outputs, qua
       8
       9 ## How to read this document
      10 - It's a product spec, no technical detail (no code / data-model / platform internals).
     … +1023 lines (ctrl+o to expand)
*/
`;

const TYPING_DURATION_MS = 4000;
const PENDING_AUTH_MS = 3000;
const wait = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export default function LandingPage() {
  const router = useRouter();
  const [hasStarted, setHasStarted] = useState(false);
  const [stage, setStage] = useState<Stage>('idle');
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');

  useEffect(() => {
    router.prefetch('/portfolio');
  }, [router]);

  useEffect(() => {
    if (!hasStarted) return;
    let cancelled = false;
    let rafId = 0;

    (async () => {
      // phase 1 — image desaturates to mono (visible, slow)
      setStage('mono');
      await wait(900);
      if (cancelled) return;

      // phase 2 — black overlay fades in over the mono image (slow)
      setStage('fadeBlack');
      await wait(900);
      if (cancelled) return;

      // panel fades in AND typing starts in the same tick — they overlap
      setStage('typing');
      await new Promise<void>((resolve) => {
        const startTs = performance.now();
        const totalChars = codeText.length;
        const tick = () => {
          if (cancelled) return resolve();
          const elapsed = performance.now() - startTs;
          const progress = Math.min(elapsed / TYPING_DURATION_MS, 1);
          const visible = codeText.slice(0, Math.floor(progress * totalChars));
          const parts = visible.split('\n');
          setTypedLines(parts.slice(0, -1));
          setCurrentLine(parts[parts.length - 1] ?? '');
          if (progress >= 1) return resolve();
          rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
      });
      if (cancelled) return;

      setTypedLines(codeText.split('\n'));
      setCurrentLine('');

      await wait(600);
      if (cancelled) return;
      setStage('popup1');
      await wait(PENDING_AUTH_MS);
      if (cancelled) return;

      setStage('popup2');
      await wait(2800);
      if (cancelled) return;

      setStage('fadeOut');
      await wait(900);
      if (cancelled) return;
      router.push('/portfolio');
    })();

    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [hasStarted, router]);

  const handleEnter = () => {
    if (hasStarted) return;
    setHasStarted(true);
  };

  // black overlay starts in phase 2 (fadeBlack) — phase 1 (mono) shows desaturated bg only
  const sceneIsBlack =
    stage === 'fadeBlack' ||
    stage === 'typing' ||
    stage === 'popup1' ||
    stage === 'popup2' ||
    stage === 'fadeOut';

  const panelOpen =
    stage === 'typing' ||
    stage === 'popup1' ||
    stage === 'popup2';

  return (
    <div className="landing-cursor relative min-h-screen w-full overflow-hidden bg-black">
      {/* Scene 1 — background image with mono filter */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
        animate={{
          filter:
            stage === 'idle'
              ? 'grayscale(0%) brightness(1)'
              : 'grayscale(100%) brightness(0.55)',
        }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      />

      {/* Polished bottom-center button */}
      <AnimatePresence>
        {stage === 'idle' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute bottom-16 left-1/2 z-10 -translate-x-1/2"
          >
            <button
              onClick={handleEnter}
              className="group relative cursor-pointer overflow-hidden rounded-full border border-white/25 bg-white/[0.04] px-14 py-4 text-[11px] font-light uppercase tracking-[0.4em] text-white/90 backdrop-blur-2xl transition-all duration-700 hover:border-white/60 hover:bg-white/[0.08] hover:tracking-[0.45em] hover:text-white"
            >
              <span className="relative z-10">Enter</span>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1500ms] ease-out group-hover:translate-x-full" />
              <span className="pointer-events-none absolute -inset-px rounded-full opacity-0 shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-opacity duration-700 group-hover:opacity-100" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Black fade overlay — phase 2, fades in over the mono image */}
      <AnimatePresence>
        {sceneIsBlack && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-black"
          />
        )}
      </AnimatePresence>

      {/* Code panel — fades in while typing has already begun */}
      <AnimatePresence>
        {panelOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex items-center justify-center px-4"
          >
            <CodePanel
              typedLines={typedLines}
              currentLine={currentLine}
              typing={stage === 'typing'}
              dimmed={stage === 'popup1' || stage === 'popup2'}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup 1 — pending */}
      <AnimatePresence>
        {stage === 'popup1' && (
          <motion.div
            key="popup1"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            <AuthDialog variant="pending" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup 2 — granted (auto-redirects) */}
      <AnimatePresence>
        {stage === 'popup2' && (
          <motion.div
            key="popup2"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            <AuthDialog variant="granted" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Hyper / iTerm2-style code panel ───────────────────────────────────────────
function CodePanel({
  typedLines,
  currentLine,
  typing,
  dimmed,
}: {
  typedLines: string[];
  currentLine: string;
  typing: boolean;
  dimmed: boolean;
}) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const totalLines = typedLines.length + (typing ? 1 : 0);
  const currentLineNum = typedLines.length + 1;
  const currentCol = currentLine.length + 1;

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [typedLines, currentLine]);

  return (
    <motion.div
      animate={{ opacity: dimmed ? 0.3 : 1, scale: dimmed ? 0.985 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto flex h-[80vh] w-[55vw] max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050505]"
      style={{
        boxShadow:
          '0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      {/* breathing glow halo */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl"
        animate={{
          boxShadow: [
            '0 0 60px rgba(120,170,255,0.05), inset 0 0 0 1px rgba(255,255,255,0.04)',
            '0 0 110px rgba(120,170,255,0.10), inset 0 0 0 1px rgba(255,255,255,0.08)',
            '0 0 60px rgba(120,170,255,0.05), inset 0 0 0 1px rgba(255,255,255,0.04)',
          ],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* title bar — generic terminal */}
      <div className="relative flex items-center justify-between border-b border-white/[0.06] bg-[#0a0a0a] px-4 py-2">
      
        <span className="font-mono text-[10px] text-white/25">bash</span>
      </div>

      {/* code body */}
      <div
        ref={bodyRef}
        className="relative min-h-0 flex-1 overflow-y-auto bg-[#050505] font-mono text-[13px] leading-[1.65] text-[#e6e6e6]"
        style={{ scrollbarWidth: 'none' }}
      >
        {/* faint static scan-line overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 3px)',
          }}
        />
        {/* moving scan beam */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 z-[2] h-[120px]"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(160,200,255,0.04) 50%, transparent)',
          }}
          animate={{ top: ['-120px', '100%'] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-[3] py-6 pr-8">
          {typedLines.map((line, i) => (
            <CodeLine key={i} num={i + 1} content={line} />
          ))}
          {typing && (
            <CodeLine num={currentLineNum} content={currentLine} caret />
          )}
        </div>
      </div>

      {/* status bar */}
      <div className="relative flex items-center gap-3 border-t border-white/[0.06] bg-gradient-to-b from-[#0c0c0c] to-[#080808] px-4 py-1.5 font-mono text-[10px] text-white/40">
        <span className="flex items-center gap-1.5">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-emerald-400"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-white/60">main</span>
        </span>
        <span className="text-white/20">·</span>
        <span>python 3.12</span>
        <span className="text-white/20">·</span>
        <span>UTF-8</span>
        <span className="text-white/20">·</span>
        <span>LF</span>
        <span className="ml-auto flex items-center gap-3">
          <span>Ln {currentLineNum}:{currentCol}</span>
          <span className="text-white/20">·</span>
          <span>{totalLines} lines</span>
          <span className="text-white/20">·</span>
          <span className={typing ? 'text-amber-300' : 'text-emerald-400'}>
            {typing ? '● writing' : '✓ saved'}
          </span>
        </span>
      </div>
    </motion.div>
  );
}

function CodeLine({
  num,
  content,
  caret = false,
}: {
  num: number;
  content: string;
  caret?: boolean;
}) {
  return (
    <div className="flex items-center">
      <span className="w-14 flex-shrink-0 select-none text-right text-white/20 pr-5">
        {num}
      </span>
      <span className="flex-1 whitespace-pre">
        {content}
        {caret && (
          <span className="ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[2px] animate-pulse bg-white" />
        )}
      </span>
    </div>
  );
}

// ─── Apple Touch ID-style auth dialog ──────────────────────────────────────────
function AuthDialog({ variant }: { variant: 'pending' | 'granted' }) {
  const isPending = variant === 'pending';

  return (
    <motion.div
      className={`relative ${isPending ? 'w-[360px]' : 'w-[460px]'} overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a]`}
      style={{
        boxShadow:
          '0 50px 140px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)',
      }}
      animate={
        !isPending
          ? {
              boxShadow: [
                '0 50px 140px rgba(0,0,0,0.85), 0 0 0 1px rgba(34,197,94,0.0), inset 0 1px 0 rgba(255,255,255,0.06)',
                '0 50px 140px rgba(0,0,0,0.85), 0 0 100px rgba(34,197,94,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
                '0 50px 140px rgba(0,0,0,0.85), 0 0 0 1px rgba(34,197,94,0.0), inset 0 1px 0 rgba(255,255,255,0.06)',
              ],
            }
          : undefined
      }
      transition={!isPending ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' } : undefined}
    >
      {/* hairline highlight at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* icon block */}
      <div className="flex flex-col items-center px-6 pb-5 pt-9">
        <div className="relative flex h-24 w-24 items-center justify-center">
          {isPending ? <LoadingSpinner /> : <SuccessCheckmark />}
        </div>

        {/* header */}
        <p className="mt-6 text-center text-[13px] font-medium uppercase tracking-[0.18em] text-white/55">
          {isPending ? 'Authentication Required' : 'Access Granted'}
        </p>

        {/* prominent message — bigger & brighter for granted */}
        {isPending ? (
          <p className="mt-2 max-w-[280px] text-center text-[12px] leading-relaxed text-white/45">
            Your requesting permission to share Vineel profile
          </p>
        ) : (
          <div className="relative mt-4 w-full">
            {/* pulsing emerald highlight backdrop */}
            <motion.div
              className="absolute inset-x-2 -inset-y-1 rounded-2xl bg-emerald-500/10 blur-xl"
              animate={{ opacity: [0.45, 0.85, 0.45] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative px-2 text-center text-[22px] font-semibold leading-snug tracking-tight text-emerald-100"
              style={{
                textShadow:
                  '0 0 24px rgba(74,222,128,0.7), 0 0 56px rgba(74,222,128,0.35)',
              }}
            >
              <motion.span
                animate={{ opacity: [0.92, 1, 0.92] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="block">Congratulations!</span>
                <span className="block">Vineel allows you to know him.</span>
              </motion.span>
            </motion.p>
          </div>
        )}
      </div>

      {/* divider */}
      <div className="h-px w-full bg-white/[0.06]" />

      {/* status / message row */}
      <div className="flex items-center justify-center gap-3 px-6 py-4">
        {isPending ? (
          <>
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-white/60"
                  animate={{ opacity: [0.25, 1, 0.25], y: [0, -2.5, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.18,
                  }}
                />
              ))}
            </div>
            <span className="font-mono text-[11px] text-white/55">
              Asking to Vineel for permission…
            </span>
          </>
        ) : (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="font-mono text-[11px] text-white/45"
          >
            Permission verified by Vineel Kumar · you can go now.
          </motion.span>
        )}
      </div>

      {/* bottom accent */}
      <motion.div
        className={`h-[2px] w-full ${
          isPending
            ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
            : 'bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent'
        }`}
        animate={
          isPending
            ? { backgroundPosition: ['0% 0%', '200% 0%'] }
            : { opacity: [0.6, 1, 0.6] }
        }
        style={isPending ? { backgroundSize: '200% 100%' } : undefined}
        transition={{ duration: isPending ? 1.8 : 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}

// ─── Fancy concentric loading spinner (replaces fingerprint pending state) ────
function LoadingSpinner() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* faint backing disc */}
      <div className="absolute inset-0 rounded-full bg-white/[0.03]" />

      {/* outer rotating arc */}
      <motion.svg
        viewBox="0 0 80 80"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="40" cy="40" r="34" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
        <path
          d="M 40 6 A 34 34 0 0 1 74 40"
          stroke="white"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* inner counter-rotating arc */}
      <motion.svg
        viewBox="0 0 80 80"
        className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]"
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
      >
        <path
          d="M 40 18 A 22 22 0 0 1 62 40"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </motion.svg>

      {/* pulsing core */}
      <motion.div
        className="relative h-2.5 w-2.5 rounded-full bg-white"
        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ boxShadow: '0 0 14px rgba(255,255,255,0.65)' }}
      />
    </div>
  );
}

// ─── PhonePe-style success animation (replaces fingerprint granted state) ─────
function SuccessCheckmark() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* expanding ripples */}
      {[0, 0.5, 1].map((delay, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-emerald-400"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1.9, opacity: [0, 0.55, 0] }}
          transition={{ duration: 1.8, delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {/* solid green disc — springs in */}
      <motion.div
        className="relative flex h-full w-full items-center justify-center rounded-full bg-emerald-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 12 }}
        style={{
          boxShadow:
            '0 0 50px rgba(34,197,94,0.5), 0 0 22px rgba(34,197,94,0.45), inset 0 0 0 1px rgba(255,255,255,0.18)',
        }}
      >
        <svg width="46" height="46" viewBox="0 0 44 44" fill="none">
          <motion.path
            d="M12 22L19 29L32 15"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>
      </motion.div>

      {/* sparkle burst */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-emerald-300"
          initial={{ x: -2, y: -2, opacity: 0 }}
          animate={{
            x: Math.cos((angle * Math.PI) / 180) * 56 - 2,
            y: Math.sin((angle * Math.PI) / 180) * 56 - 2,
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 0.85, delay: 0.5, ease: 'easeOut' }}
          style={{ boxShadow: '0 0 6px rgba(110,231,183,0.85)' }}
        />
      ))}
    </div>
  );
}
