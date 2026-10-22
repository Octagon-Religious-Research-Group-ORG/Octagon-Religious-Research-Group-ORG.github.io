# 🌱 Sustainability: what keeps this portal running

> The full, current version, covering this portal, the AstroLog, the lab and the dApp preview, is a page:
> **[octagon-religious-research-group-org.github.io/changelog-astro-public/sustainability](https://octagon-religious-research-group-org.github.io/changelog-astro-public/sustainability)**.
> This file lists what applies to **this repository**, so it's here even when you're reading the code.

Nothing here costs money. What it takes is a few things that quietly expire or drift, written down
so none of it depends on anyone's memory.

## What this repository is

`Octagon-Religious-Research-Group-ORG.github.io` is the entry portal (`/`, `/donate/`, `/pledge/`,
`/map/`, the 404) and the home of the **arrival kit** (1.4.0) every ORG page loads:
`arrival/arrival.js`, `arrival/arrival.css`, `arrival/give/give.js` and `arrival/pledge/pledge.js`
(the kit), `arrival/org.js` + `arrival/org.css` (ORG's own settings and look),
plus `marble.js` (the marbled ink) and `site.css` (the portal's header, footer and dock). The
AstroLog, the drasticstatic ORG lab and the O-R-G dApp preview load the kit files from here by full
URL.

## What needs looking after

| What | Why it matters | What to do |
| --- | --- | --- |
| **The hourly README mirror** (`.github/workflows/mirror-profile-readme.yml`) | Copies the organization profile (`.github` → `profile/README.md`) into this repo's `README.md` every hour, at :17. In a public repository, GitHub switches off scheduled workflows after 60 days without activity. | If the README stops following the profile, open **Actions → Mirror org profile README** and re-enable or run it. Edit the profile, never this `README.md`. |
| **The arrival kit is vendored** | `arrival.js`, `arrival.css`, `give/give.js` and `pledge/pledge.js` are copies. The canonical copy lives in `drasticstatic/my-template` (`changelog-template/arrival/`), and every org keeps its own copy so one org's change can't break another's. | To upgrade, copy all four from the template unchanged, read the porting notes in its README, and push this repo **before** the AstroLog. |
| **Deploy order** | The AstroLog, the lab and the dApp preview load the kit from this site. A new `org.js` key they rely on must be live here first. | Push here, wait a minute for Pages, then push the others. |
| **Share images** (`social-card.jpg`, and the cards the AstroLog builds for `/donate/`, `/pledge/` and `/map/`) | Telegram, iMessage, Slack, Discord and LinkedIn keep their own copy of a link's preview. Cards never carry counts, so a cached one doesn't go stale on its own. | After changing a share image, refresh the cached previews: the steps for each app are in [`SOCIAL-PREVIEWS.md`](https://github.com/Octagon-Religious-Research-Group-ORG/.github/blob/main/SOCIAL-PREVIEWS.md) (for Telegram, send each link to @WebpageBot). |
| **The contribution ledger** (`donate/contributors.json`) | It names people. | Add someone only after they've said yes. First name and last initial; never an email or an amount. |
| **The giving links** | `/donate/` links to orgspirituality.org's offerings page (its Direct contribution section) and its offering policy, and to the dApp preview's gift page, labelled a preview. | If ORG changes how it takes gifts, update `donate.give` in `arrival/org.js`. |
| **Wallet giving and the pledge** (`arrival/give/give.js`, `arrival/pledge/pledge.js`) | `/donate/` has the kit's wallet module: one Connect button (Reown AppKit) for browser wallets, phone wallets by QR code, and email or social sign-in. `/pledge/` uses the same connection to sign a pledge of support (a message: free, nothing sent, nothing recorded, no counts). Both work only on sites listed in the Reown project's allowlist. | Make sure the project in `give.reownProjectId` (`arrival/org.js`) lists **`https://octagon-religious-research-group-org.github.io`** at dashboard.reown.com; until it does, both pages calmly say wallet connect isn't switched on for this site yet. `give.addresses` stays `null` until ORG designates a treasury address: never a placeholder. |
| **Wallet connect (Reown project)** | Every org's wallet features connect through **one shared Reown project today** (`00b6a1cd528ff580f1fd845ed08b0187`, made for the O-R-G dApp, held in Christopher W's Reown account). If it's deleted, suspended or runs past its free plan, wallet connect stops on every site at once (calmly; nothing breaks). | ORG gets its own with a **one-line `org.js` change**: a free project at dashboard.reown.com under an account ORG controls, this origin on its allowlist, and its ID in `give.reownProjectId` (the pledge uses it too). Before any treasury address is published. |
| **Licenses** (`LICENSE`, `LICENSE-CONTENT`, `TRADEMARKS.md`) | Code is MIT, words are CC BY-SA 4.0, and ORG's name and marks are reserved; the footer note says so on every page. The same three files are in the organization's `.github` and the AstroLog. | Keep the three identical across repositories. |
| **Links that leave GitHub** | The nav, the contact and community windows and the map point at orgspirituality.org, ORG's Telegram chats (public, events, and the two private members' groups), ORG's documents on iCloud (the overview and the membership form) and ORG's role addresses. | If one changes, update `arrival/org.js` (one place), ORG's [`CONTACTS.md`](https://github.com/Octagon-Religious-Research-Group-ORG/.github/blob/main/CONTACTS.md), and the AstroLog's map. |

## 🤝 Stewardship and succession

Today drasticstatic (Christopher W) owns or administers ORG's GitHub organization and holds the
tokens that publish the AstroLog, the lab and the dApp preview, and the Reown account above: a single
point of failure. The plan, so these pages outlive any one person: at least two owners from ORG's own
people, publishing through org-owned automation instead of personal tokens, a token register and
renewal runbook, written hand-over steps, and scheduled exports and backups. The full plan is on the
[sustainability page](https://octagon-religious-research-group-org.github.io/changelog-astro-public/sustainability#-stewardship-and-succession), and progress on the
[roadmap](https://octagon-religious-research-group-org.github.io/changelog-astro-public/roadmap).

*Maintained by Christopher W with Alfred (Claude Code). Last reviewed 2026-10-22.*
