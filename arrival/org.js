/* ORG's arrival config, read by arrival.js (kit v1.5). Shared by every ORG page: the entry portal
   (/, /donate/, /pledge/, /map/, the 404), the AstroLog, and (by absolute URL) the drasticstatic ORG
   lab and the O-R-G dApp preview.

   Every fact here comes from ORG's own materials: orgspirituality.org (About, Community, Offerings
   and its offering policy), the organization's .github profile (CONTACTS.md included), and
   brand-assets. Anything not published yet is marked as a placeholder rather than guessed, and no
   link is made up. People are named by first name and last initial. Strings shown in the guide and
   the modals may hold simple HTML. */
(function () {
  var ROOT = "https://octagon-religious-research-group-org.github.io";
  var LOG = ROOT + "/changelog-astro-public";
  var SITE = "https://orgspirituality.org";
  // ORG on Telegram (Tripp OK'd all four for these pages, 2026-10-22). Titles and descriptions are
  // Telegram's own, as each link previews.
  //   ORG (Public): "an unrestricted public chat", open to anyone.
  var PUBLIC_CHAT = "https://t.me/ORG_Spirituality";
  //   ORG Events and Ceremonies: "a collaboration between ORG and Entheo Community", the group chat
  //   orgspirituality.org/community links to ("for more information and updates"). Kept as it was.
  var TELEGRAM = "https://t.me/+ccL8NUffhuU0ZGJh";
  //   Private groups, admitted by hand: Tripp approves a request once that person's membership form
  //   (or, for EaMs, their entheogen safety training form) is complete, so it's fine to ask early.
  var VOTING = "https://t.me/+1hlK0bCSBzwyOTkx"; // ORG (Voting): confirmed members vote on all decisions
  var EAMS = "https://t.me/+9gpCph_VVqUwN2Zh"; // ORG EaMs (Entheo-approved Members)
  // ORG's own documents, shared as iCloud Pages links: the public membership form, and ORG's overview
  // (the "ORG White Paper(s) Home Page" the public chat's description links).
  var MEMBERSHIP = "https://www.icloud.com/pages/051s7hMIDB_LNvP2CEYUZfkew#Membership";
  var OVERVIEW = "https://www.icloud.com/pages/0438mnIFrZCE0vC6kuGrVjfBQ#ORG";
  // Tripp, as orgspirituality.org's About page lists him under Contact Us.
  var TRIPP = "https://t.me/Tripp_ORG";
  var CONTACTS = "https://github.com/Octagon-Religious-Research-Group-ORG/.github/blob/main/CONTACTS.md";
  var LAB = "https://drasticstatic.github.io/O-R-G-astro-public/"; // Christopher's drasticstatic ORG lab
  // The dApp preview is a static export: its pages live at /give, /beliefs (no trailing slash).
  var DAPP = "https://drasticstatic.github.io/O-R-G-dapp-public-preview/";
  // The octagon mark's eight wedge colors, clockwise from the top edge.
  var WEDGES = ["#5a43f0", "#9a4dff", "#d04ce8", "#e65aa8", "#f29a3a", "#e4d548", "#6fd84a", "#3ccfe0"];

  window.ARRIVAL = {
    org: {
      short: "ORG",
      name: "Octagon Religious-Research Group",
      motto: "Where science and spirituality meet.",
      about:
        "ORG is a member-governed spiritual and research community. Members propose beliefs and keep the ones most of them agree on, and together they plan octagon-shaped temples and research centers where spirituality and science are practiced side by side.",
      // The official mark, unmodified (brand-assets apple-touch-icon-180.png).
      mark: { src: ROOT + "/apple-touch-icon.png" },
      home: {
        label: "orgspirituality.org",
        href: SITE,
        text: "The official site: beliefs, community, research, and offerings. It's also where ORG decides. Every belief starts on one member's page, and becomes ORG's once most voting members agree. Votes never close, so any belief can be revisited.",
      },
      welcomeNote: null,
      welcomePlaceholder:
        "A few words of welcome from ORG's founder, Tripp A, belong here. This space is left empty on purpose until he writes them.",
    },

    // Same key and shape as the O-R-G dApp preview, so a choice made there carries to the lab.
    // The legacy keys are what ORG's portal and AstroLog stored before the kit.
    storage: { key: "org-experience", legacy: { light: "org-light", motion: "org-motion" } },

    modes: [
      { id: "night", name: "Night Sanctuary", note: "Candle-lit indigo, warm gold, and aurora light.", swatch: ["#100e1c", "#e9be72"], dark: true },
      { id: "prism", name: "Prism Light", note: "Morning light through a prism, soft and bright.", swatch: ["#f5f3fa", "#6b4fa0"] },
      { id: "stone", name: "Stone & Lapis", note: "Temple stone veined with lapis and gold.", swatch: ["#ecebe6", "#22408a"], calm: true },
      {
        id: "day",
        name: "Follow the day",
        note: "Prism by morning, stone by afternoon, sanctuary by night.",
        shows: ["prism", "stone", "night"],
        // Prism's lilac by morning, lapis by afternoon, candle gold by night.
        ink: "linear-gradient(90deg, #c9b8ff 0 33.3%, #22408a 0 66.6%, #e9be72 0)",
        follows: function (d) {
          var h = d.getHours();
          return h >= 5 && h < 11 ? "prism" : h >= 11 && h < 17 ? "stone" : "night";
        },
      },
    ],
    defaultMode: "night",

    // Reading mode: one tap for Stone & Lapis (ORG's calmest light), still ink, more contrast, no
    // cursor effects and a comfortable line length; another tap brings back what the visitor had.
    // Text size steps sit beside it (kit 1.2: the kit's four default steps).
    reading: { light: "stone" },

    // "What's new since your last visit": the AstroLog's latest.json lists its newest entries,
    // write-ups and ledger items (same origin for the portal, cross-origin for the lab).
    news: { sources: [LOG + "/latest.json"] },

    // ORG's motion styles. The cursor trail runs through the octagon's eight colors: faint on Gentle,
    // brighter on Vivid, where it also scatters little octagons. Cursor effects can be switched off
    // on their own, and they rest whenever motion is Still.
    motions: [
      { id: "still", name: "Still", icon: "pause", note: "Nothing moves unless you touch it." },
      {
        id: "gentle",
        name: "Gentle",
        icon: "wind",
        note: "The ink drifts slowly, and your pointer stirs it and leaves a faint trail of the octagon's colors.",
        trail: { colors: WEDGES, life: 440, width: 2.2, alpha: 0.5 },
      },
      {
        id: "vivid",
        name: "Vivid",
        icon: "sparkle",
        note: "Faster ink, a brighter trail, and little octagons scattering behind your pointer.",
        trail: { colors: WEDGES, life: 680, width: 3.6, alpha: 0.85, sparks: 0.45, sides: 8 },
      },
    ],
    defaultMotion: "gentle",
    stillMotion: "still",

    // The octagon mark's eight wedge colors, clockwise from the top edge. They color the guide's
    // progress octagon (eight steps, eight wedges) and the initials avatars.
    wedges: WEDGES,

    // Gravatar is used only for addresses at these domains (ORG's role addresses, such as
    // org@orgspirituality.org). Nobody's personal email is ever hashed into a page; everyone else
    // shows a GitHub picture or their initials in an octagon.
    avatar: { shape: "octagon", roleDomains: ["orgspirituality.org"] },

    // ── kit 1.2: the navbar, shared by the portal, the AstroLog and (with its own items) the lab ──
    // Lower priority folds into "More" first when the bar runs short; below 1100px it all folds into
    // the Menu. Contact and Community open their windows; the href is the no-JavaScript fallback.
    nav: {
      label: "ORG",
      fold: 1100,
      items: [
        { id: "portal", label: "Portal", icon: "house-simple", href: ROOT + "/", hideOn: ["portal"], priority: 1, note: "ORG's front door on GitHub" },
        { id: "porch", label: "Porch", icon: "door-open", href: LOG + "/", exact: true, priority: 1, note: "The AstroLog's front door" },
        { id: "changelog", label: "Changelog", icon: "clock-counter-clockwise", href: LOG + "/changelog", priority: 3, note: "What changed, newest first" },
        { id: "library", label: "Library", icon: "books", href: LOG + "/library", priority: 2, note: "Longer write-ups on how it works" },
        { id: "ledger", label: "Ledger", icon: "scroll", href: LOG + "/ledger", priority: 2, note: "Every public change, in plain words" },
        { id: "map", label: "Map", icon: "map-trifold", href: LOG + "/map", hrefs: { portal: ROOT + "/map/" }, priority: 2, note: "Every place, with a picture of each" },
        {
          id: "involved",
          label: "Get involved",
          icon: "hand-heart",
          priority: 3,
          items: [
            { id: "community", label: "Community", icon: "users-three", href: SITE + "/community", open: "community", note: "ORG's chats on Telegram: public, events, and members' groups" },
            { id: "contact", label: "Reach out", icon: "envelope-simple", href: SITE + "/about#contact", open: "contact", note: "Every way to reach ORG" },
            { id: "donate", label: "Donate", icon: "heart", href: ROOT + "/donate/", note: "Ways to give, and thanks by name" },
            { id: "pledge", label: "Pledge", icon: "handshake", href: ROOT + "/pledge/", note: "Sign a pledge of support: free, nothing sent" },
          ],
        },
        {
          id: "sites",
          label: "ORG's sites",
          icon: "globe-hemisphere-west",
          priority: 2,
          items: [
            { id: "home", label: "orgspirituality.org", icon: "globe-hemisphere-west", href: SITE, note: "The official site, where members decide" },
            { id: "directions", label: "Three directions", icon: "compass-tool", href: LOG + "/three-directions", note: "Renan T's proposal, kept as history" },
            { id: "lab", label: "The drasticstatic ORG lab", icon: "flask", href: LAB, note: "Christopher's lab, where the new builds take shape" },
            { id: "dapp", label: "The dApp preview", icon: "cube", href: DAPP, note: "A web3-ready preview from the lab" },
          ],
        },
        {
          id: "about",
          label: "About",
          icon: "info",
          priority: 1,
          items: [
            { id: "overview", label: "ORG overview (document)", icon: "file-text", href: OVERVIEW, note: "ORG's own overview, on iCloud" },
            { id: "roadmap", label: "Roadmap", icon: "path", href: LOG + "/roadmap", note: "Where these pages are headed" },
            { id: "sustainability", label: "Sustainability", icon: "plant", href: LOG + "/sustainability", note: "What it takes to keep them running" },
            { id: "github", label: "GitHub", icon: "github-logo", href: "https://github.com/Octagon-Religious-Research-Group-ORG", note: "The organization and its code" },
            { id: "brand", label: "Brand assets", icon: "seal-check", href: "https://github.com/Octagon-Religious-Research-Group-ORG/brand-assets", note: "The octagon logo files and guidelines" },
          ],
        },
      ],
    },
    footer: {
      label: "ORG, all the ways around",
      groups: [
        { label: "Explore", icon: "compass", items: ["portal", "porch", "changelog", "library", "ledger", "map"] },
        { label: "Get involved", icon: "hand-heart", items: ["community", "contact", "donate", "pledge", { id: "guide", label: "Welcome guide", icon: "signpost", href: "#welcome", open: "guide" }] },
        { label: "ORG's sites", icon: "globe-hemisphere-west", items: ["home", "overview", "directions", "lab", "dapp"] },
        { label: "About this build", icon: "wrench", items: ["roadmap", "sustainability", "github", "brand", { id: "contacts", label: "CONTACTS.md", icon: "address-book", href: CONTACTS }, { id: "source", label: "AstroLog source", icon: "code", href: "https://github.com/Octagon-Religious-Research-Group-ORG/changelog-astro-public" }] },
      ],
      note: 'Code here is MIT licensed and the words are CC BY-SA 4.0. ORG\'s name and octagon mark belong to ORG and aren\'t covered by either: see <a href="https://github.com/Octagon-Religious-Research-Group-ORG/.github/blob/main/TRADEMARKS.md">TRADEMARKS.md</a>, and the brand assets for how to use them.',
    },

    // ── kit 1.2: one window for every way to reach ORG ─────────────────────────────────────────
    // The three role addresses come from ORG (Tripp). orgspirituality.org has no /contact page (it's
    // a 404); its contact details are the About page's "Contact Us" section, linked here.
    // intercept: false, because that section shares its address with the About page itself: a plain
    // link to orgspirituality.org/about (a door on the portal, a search result) must stay a link.
    contact: {
      title: "Reach out",
      intro: "Every way to reach ORG, in one place. Pick whichever suits you.",
      intercept: false,
      paths: [
        { kind: "email", label: "org@orgspirituality.org", href: "mailto:org@orgspirituality.org", note: "ORG's main address." },
        { kind: "email", label: "webdev@orgspirituality.org", href: "mailto:webdev@orgspirituality.org", note: "About the websites, these GitHub pages included." },
        { kind: "email", label: "octagonreligiousresearchgroup@gmail.com", href: "mailto:octagonreligiousresearchgroup@gmail.com", note: "ORG's shared inbox." },
        {
          kind: "chat",
          label: "Tripp, on Telegram or Signal",
          href: SITE + "/about#contact",
          action: "See Contact Us",
          note: "The Contact Us section of orgspirituality.org's About page lists ORG's founder: @Tripp_ORG on Telegram, @Tripp_ORG.99 on Signal.",
        },
        { kind: "page", label: "ORG's contacts on GitHub", href: CONTACTS, action: "Open CONTACTS.md", note: "Every address and channel above, kept in the organization's .github repository." },
        {
          kind: "form",
          label: "An ORG help desk",
          placeholder: "A help desk for questions and website feedback, with Telegram built in, is planned. Until it opens, the addresses above or ORG's public chat on Telegram reach the team.",
        },
      ],
    },

    // ── where the community talks: ORG's chats on Telegram (Tripp OK'd all of them, 2026-10-22),
    //    and a sneak peek at a network of the members' own, paired with a DAO. The v1.0 keys (name …
    //    more) drive the guide's step. No member counts, ever. ──────────────────────────────────
    community: {
      name: "Telegram",
      icon: "telegram-logo",
      href: PUBLIC_CHAT,
      label: "See every way in",
      title: "Where we gather",
      eyebrow: "Community",
      text: "ORG gathers on Telegram: a public chat open to anyone, a group for events and ceremonies, and two private groups for members.",
      intro: "ORG lives on Telegram. Anyone can join the public chat and the events group. The two members' groups are private, and it's fine to ask: Tripp lets each person in once their form is done.",
      more: [
        'Prefer to ask one person first? ORG\'s About page lists Tripp on Telegram as <a href="' + TRIPP + '">@Tripp_ORG</a>.',
      ],
      // Same reason as contact: orgspirituality.org/community and /join are also doors on the portal.
      intercept: false,
      platforms: [
        {
          id: "public",
          kind: "telegram",
          name: "ORG (Public)",
          text: "ORG's public chat, @ORG_Spirituality, open to anyone: members, and anyone curious about ORG. In its own words, it's “an unrestricted public chat”, so what people say there doesn't always reflect ORG's views.",
          public: { href: OVERVIEW, label: "ORG overview (document)", note: "ORG's own overview, which the chat links too." },
          join: { href: PUBLIC_CHAT, label: "Join @ORG_Spirituality", note: "Open to everyone." },
        },
        {
          id: "telegram",
          kind: "telegram",
          name: "ORG Events and Ceremonies",
          text: "A collaboration between ORG and Entheo Community. orgspirituality.org's Community page sends people here for news of the monthly meditation ceremony.",
          public: { href: SITE + "/community", label: "See what's on", note: "The meetings, events and ceremonies, on orgspirituality.org." },
          join: { href: TELEGRAM, label: "Join Events and Ceremonies", note: "An invite link to the group on Telegram." },
        },
        {
          id: "voting",
          kind: "telegram",
          icon: "lock-simple",
          name: "ORG (Voting)",
          text: "Private: for confirmed ORG members, to vote on all of ORG's decisions. Tripp approves each request by hand once that person's membership form is complete, so it's fine to ask now; your request waits until then.",
          public: { href: MEMBERSHIP, label: "Membership form", note: "ORG's public membership form." },
          join: { href: VOTING, label: "Ask to join", note: "Private: Tripp approves each request." },
        },
        {
          id: "eams",
          kind: "telegram",
          icon: "lock-simple",
          name: "ORG EaMs (Entheo-approved Members)",
          text: "Private: for ORG members who have completed an approved form of entheogen safety training. Tripp approves each request by hand once that person's EaM form is complete, so it's fine to ask now.",
          public: { href: MEMBERSHIP, label: "Membership form", note: "Not a member yet? Start here." },
          join: { href: EAMS, label: "Ask to join", note: "Private: Tripp approves each request." },
        },
      ],
      bespoke: {
        title: "Looking ahead: a network of our own",
        tag: "Sneak peek",
        icon: "graph",
        text: "Today ORG's members gather on Telegram. Further out, ORG would like a small social network its members own, rather than one company, paired with a DAO.",
        points: [
          "Profiles and posts on open protocols like Lens and Farcaster, so what members share stays theirs.",
          "A DAO where members propose and vote, the way ORG already decides its beliefs: by majority, with votes that never close.",
          "Privacy first: members choose what's public and what stays among members, and proposals and votes can be anonymous, an idea ORG's own Community page raises.",
        ],
        note: "No dates, and nothing to sign up for yet. A direction, not a promise. Telegram stays the place to talk.",
      },
    },

    // ── kit 1.2: the donate page (/donate/) ────────────────────────────────────────────────────
    // ORG's own giving path is the "Direct contribution" section of orgspirituality.org/offerings
    // (it hands off to PayPal or Venmo); /donate there is a 404. The page links ORG's pages, never a
    // payment processor directly. The dApp preview's gift page calls itself a preview on a
    // placeholder address, and is linked as exactly that. No wallet address here, ever.
    // Give with crypto (kit v1.3, arrival/give/give.js): one Connect button in the donate page's crypto
    // slot. The Reown project (a public client ID, shared by the fleet's portals for now) must list
    // https://octagon-religious-research-group-org.github.io in its allowlist at dashboard.reown.com; until it does, the page
    // calmly says wallet connect isn't switched on for this site yet. No treasury address yet, so every
    // coin reads "Treasury address coming soon" and connecting is a labelled preview. Never put a
    // placeholder or example address here: the page would show it. note: the org's own words, if any.
    give: {
      reownProjectId: "00b6a1cd528ff580f1fd845ed08b0187",
      chains: ["mainnet"],
      addresses: { eth: null, btc: null, sol: null },
      note: "",
    },

    donate: {
      give: [
        {
          label: "Give through orgspirituality.org",
          icon: "hand-heart",
          href: SITE + "/offerings",
          action: "Open the offerings page",
          note: "ORG's own page for giving. Its <em>Direct contribution</em> section lets you give without requesting an item, once, monthly or yearly, and finish the gift with PayPal or Venmo. In ORG's words, it “does not see your account credentials.”",
        },
        {
          label: "How ORG uses gifts",
          icon: "scroll",
          href: SITE + "/gifts-contributions",
          action: "Read the offering policy",
          note: "ORG's own words on gifts and contributions, including the memo that can point a gift toward one area: the website, the legal fund, sacraments, or the octagon infrastructure.",
        },
        {
          label: "The dApp preview's gift page",
          icon: "cube",
          href: DAPP + "give",
          action: "See the preview",
          note: "<strong>A preview, not live.</strong> A web3 gift flow from Christopher's lab. The page says so itself: its address is a placeholder until ORG designates a real one, and sending funds now will not reach ORG.",
        },
      ],
      disclaimer: {
        placeholder: true,
        title: "About giving",
        text: "ORG's own words about gifts made through these GitHub pages belong here. Until ORG writes them, this is a placeholder. These pages never take payments or see payment details: gifts are made on orgspirituality.org.",
      },
      ledger: {
        src: ROOT + "/donate/contributors.json",
        title: "Contribution ledger",
        intro: "People and groups who have given time, skills or gifts to ORG, and said yes to being thanked by name here.",
      },
      crypto: {
        text: "Giving from a crypto wallet is planned for this page, through the same wallet connection the dApp preview uses. It isn't open yet.",
      },
      // kit 1.4: "Receipts and taxes". Only ORG's own words state a status: section III of
      // orgspirituality.org/gifts-contributions ("Donations are tax-deductible … we chose to register
      // as a 501(c)(3)", checked 2026-10-22), quoted and linked, never paraphrased into more. The
      // span keeps ORG's fonts from turning "(c)" into a copyright sign.
      tax: {
        status: 'In ORG\'s own words, on its <a href="' + SITE + '/gifts-contributions">gifts and contributions page</a>: “we chose to register as a <span style="font-variant-ligatures: none; font-feature-settings: \'calt\' 0, \'liga\' 0, \'dlig\' 0">501(c)(3)</span>.”',
        deductible: "That page says: “Donations are tax-deductible.” How much, if at all, depends on your own situation.",
      },
    },

    // ── kit 1.4: the dock shows a fade and a chevron on the side with more, so a phone visitor can
    //    tell it scrolls. ORG's docks aren't the kit's default markup: the portal's is .foot > div,
    //    the AstroLog's .site-footer .footer-inner (the lab's and the dApp's footers wrap instead). ──
    dock: { scroll: true, selector: ".foot > div, .site-footer .footer-inner" },

    // ── kit 1.4: a pledge of support, on its own page (/pledge/). A visitor signs it with a wallet:
    //    a message, not a transaction: free, nothing sent, nothing recorded, and no counts. It uses the
    //    same wallet connection as /donate/ (give.reownProjectId). The words follow ORG's own: where
    //    science and spirituality meet; a community its members govern. ───────────────────────────
    pledge: {
      href: ROOT + "/pledge/",
      text: "I support the Octagon Religious-Research Group: a member-governed community where science and spirituality meet, and its work toward octagon temples and research centers where both are practiced side by side.",
      intro: "If ORG matters to you, you can say so by signing a short pledge with a crypto wallet. It's free: no gas and no money, and for now nothing is recorded. Signing a pledge doesn't make you a member; <a href=\"" + SITE + "/join\">joining ORG</a> is its own step.",
      note: 'A pledge isn\'t a gift and asks nothing more of you. To give as well, see <a href="' + ROOT + '/donate/">the ways to give</a>.',
    },

    record: {
      intro: "ORG's AstroLog has two halves.",
      share:
        "Sharing one change? Every entry and every write-up has its own preview card. Paste its link into Telegram, iMessage or Discord and it arrives with its title, summary and who made it. The <strong>Copy a link</strong> button under each one does the copying.",
      changelog: {
        name: "The changelog",
        text: "Every notable change to ORG's websites, newest first. Each entry is a short summary with the full story underneath, filed under one of four areas: the live site, the API, ORG on GitHub, and previews and proposals.",
        href: LOG + "/changelog",
        label: "Read the changelog",
      },
      library: {
        name: "The library",
        text: "Longer write-ups on how the sites are built and how they fit together. The changelog says what changed; the library explains how it works.",
        href: LOG + "/library",
        label: "Open the library",
      },
      ledger: {
        name: "The ledger",
        text: "Every public change to ORG's code, in plain words: grouped by day and by kind, credited to whoever made it, and linked to the change itself. For anyone who'd rather not open GitHub. It refreshes every day.",
        href: LOG + "/ledger",
        label: "Open the ledger",
      },
    },

    sites: {
      portal: {
        name: "ORG on GitHub",
        what: "This is ORG's front door on GitHub: the same nine doors as the home page of orgspirituality.org, and the way into the AstroLog, where ORG keeps its record of what changed.",
      },
      astrolog: {
        name: "the ORG AstroLog",
        what: "The AstroLog is ORG's plain-language record of what changed on its websites, who made each change, and how the pieces fit together. It's the official record for the repositories in ORG's GitHub organization.",
      },
    },

    guide: {
      light: {
        text: 'Every ORG page offers three lights. They began as Renan T\'s design proposal for orgspirituality.org, the spark for these new builds, and they live on here as lights you can choose. Your choice follows you from page to page. <a href="' + LOG + '/three-directions">Their story</a>.',
      },
      motion: {
        text: "Behind each page is marbled ink that moves with your pointer. Choose how much it moves, and whether you'd like more contrast for reading.",
      },
      people: {
        text: "Every entry credits whoever did the work, by first name and last initial, the way ORG's own profile names them.",
        fine: "Pictures come from public GitHub profiles. Anyone without one linked gets an octagon with their initials.",
      },
    },
    guideFinale: "You've lit all eight wedges of the octagon. Welcome to ORG.",

    words: {
      enter: "Enter ORG",
      readingNote: "One tap for the calmest page: Stone & Lapis, the ink at rest, more contrast, and no cursor trail. Tap again to go back to how you had it.",
      cursorNote: "A trail of the octagon's colors behind your pointer, and ink that stirs as you move. Switch it off if you'd rather not.",
      pause: "Pause the ink",
      play: "Let the ink move",
      searchTip: "Anywhere on ORG's pages, any time: every change, write-up, person and page, including the AstroLog from the entry portal.",
    },

    search: {
      sources: [{ url: LOG + "/search.json" }],
      items: [
        { t: "ORG entry portal", k: "page", i: "house", h: ROOT + "/", pin: true, x: "home github io root nine doors" },
        { t: "orgspirituality.org", k: "official site", i: "globe-hemisphere-west", h: SITE, pin: true, x: "website main home" },
        { t: "About", k: "orgspirituality.org", i: "info", h: SITE + "/about", x: "charter founder tripp" },
        { t: "Community", k: "orgspirituality.org", i: "users-three", h: SITE + "/community", x: "meditation ceremony meetings" },
        { t: "Beliefs", k: "orgspirituality.org", i: "scales", h: SITE + "/beliefs", x: "vote majority" },
        { t: "Infrastructure", k: "orgspirituality.org", i: "buildings", h: SITE + "/infrastructure", x: "temples research centers octagon" },
        { t: "Join ORG", k: "orgspirituality.org", i: "hand-heart", h: SITE + "/join", x: "membership member apply sign in" },
        { t: "Research", k: "orgspirituality.org", i: "flask", h: SITE + "/research", x: "science studies" },
        { t: "Legal", k: "orgspirituality.org", i: "scroll", h: SITE + "/legal", x: "church religious" },
        { t: "Future ideas", k: "orgspirituality.org", i: "lightbulb", h: SITE + "/future-ideas", x: "future" },
        { t: "Gifts and offerings", k: "orgspirituality.org", i: "gift", h: SITE + "/offerings", x: "shop offerings donate" },
        { t: "ORG (Public) chat", k: "Telegram", i: "telegram-logo", h: PUBLIC_CHAT, pin: true, x: "chat talk community public open everyone org_spirituality join" },
        { t: "ORG Events and Ceremonies", k: "Telegram", i: "telegram-logo", h: TELEGRAM, x: "chat group community events ceremonies meditation entheo" },
        { t: "ORG (Voting): ask to join", k: "Telegram, private", i: "lock-simple", h: VOTING, x: "members vote decisions private group approval tripp" },
        { t: "ORG EaMs: ask to join", k: "Telegram, private", i: "lock-simple", h: EAMS, x: "entheo approved members safety training private group approval tripp eam" },
        { t: "Membership form", k: "ORG document", i: "identification-card", h: MEMBERSHIP, x: "join member membership apply form icloud" },
        { t: "ORG overview (document)", k: "ORG document", i: "file-text", h: OVERVIEW, pin: true, x: "overview white paper about icloud pages document" },
        { t: "Message Tripp", k: "Telegram", i: "chat-circle-text", h: TRIPP, x: "founder ask question join membership" },
        { t: "Contact Us", k: "orgspirituality.org", i: "address-book", h: SITE + "/about#contact", x: "contact reach telegram signal tripp" },
        { t: "ORG's contacts (CONTACTS.md)", k: "GitHub", i: "address-book", h: CONTACTS, x: "email addresses org webdev gmail reach out" },
        { t: "Donate", k: "page", i: "heart", h: ROOT + "/donate/", x: "give gift support money contribution ledger thanks crypto offerings" },
        { t: "Map: every place, with pictures", k: "page", i: "map-trifold", h: ROOT + "/map/", pin: true, x: "sitemap where everything links overview thumbnails" },
        { t: "Roadmap", k: "AstroLog", i: "path", h: LOG + "/roadmap", x: "plans next future ideas direction web3 site merge" },
        { t: "Sustainability", k: "AstroLog", i: "plant", h: LOG + "/sustainability", x: "maintenance keep running tokens costs upkeep" },
        { t: "ORG on GitHub", k: "link", i: "github-logo", h: "https://github.com/Octagon-Religious-Research-Group-ORG", x: "organization code repositories" },
        { t: "Brand assets and guidelines", k: "link", i: "seal-check", h: "https://github.com/Octagon-Religious-Research-Group-ORG/brand-assets", x: "logo octagon mark favicon" },
        { t: "Three directions, living together", k: "history", i: "compass-tool", h: LOG + "/three-directions", x: "renan design directions night sanctuary prism light stone lapis proposal history credit" },
        { t: "Help decide what comes next", k: "feedback", i: "chats-circle", h: LOG + "/three-directions#what-comes-next", x: "feedback merge main site web3 new site opinion say" },
        { t: "The ledger: every public change", k: "AstroLog", i: "scroll", h: LOG + "/ledger", pin: true, x: "commits github history code record plain words" },
        { t: "drasticstatic ORG lab", k: "Christopher's lab", i: "flask", h: LAB, x: "dapp preview portfolio previews christopher" },
        { t: "The lab's changelog", k: "Christopher's lab", i: "clock-counter-clockwise", h: LAB + "changelog/", x: "lab history dapp" },
        { t: "O-R-G dApp preview", k: "Christopher's lab", i: "cube", h: DAPP, x: "web3 wallet donation preview" },
        { t: "The dApp preview's gift page", k: "preview, not live", i: "gift", h: DAPP + "give", x: "web3 wallet crypto donation preview give" },
        { t: "ORG's organization profile", k: "link", i: "identification-card", h: "https://github.com/Octagon-Religious-Research-Group-ORG", x: "profile readme github" },
      ],
    },
  };
})();

/* ── Kit 1.5 (2026-10-26): languages. English first: every visitor starts in English, and the welcome's
   first row ("Your language · Tu idioma") offers Español one tap away. The kit's own
   words come from arrival/i18n/<id>.js; the org's own words below are swapped by exact match
   (`text`). They're AI-written and marked reviewed: false ("translation in review") until someone
   who speaks the language as their own reads them. Names, marks, quotes and the pledge statement
   (the exact message a wallet signs) stay as written. ── */
(function () {
  var A = window.ARRIVAL;
  if (!A) return;
  A.languages = { list: [{ id: "en", name: "English" }, { id: "es", name: "Español" }], start: "en" };
  A.i18n = {
    es: {
      reviewed: false,
      text: {
        "Where science and spirituality meet.": "Donde la ciencia y la espiritualidad se encuentran.",
        "ORG is a member-governed spiritual and research community. Members propose beliefs and keep the ones most of them agree on, and together they plan octagon-shaped temples and research centers where spirituality and science are practiced side by side.": "ORG es una comunidad espiritual y de investigación gobernada por sus miembros. Los miembros proponen creencias y conservan las que la mayoría acepta, y juntos planean templos y centros de investigación en forma de octágono donde la espiritualidad y la ciencia se practican lado a lado.",
        "The official site: beliefs, community, research, and offerings. It's also where ORG decides. Every belief starts on one member's page, and becomes ORG's once most voting members agree. Votes never close, so any belief can be revisited.": "El sitio oficial: creencias, comunidad, investigación y ofrendas. También es donde ORG decide. Cada creencia empieza en la página de un miembro y se vuelve de ORG cuando la mayoría de los miembros con voto está de acuerdo. Las votaciones nunca cierran, así que cualquier creencia puede revisarse.",
        "A few words of welcome from ORG's founder, Tripp A, belong here. This space is left empty on purpose until he writes them.": "Aquí van unas palabras de bienvenida del fundador de ORG, Tripp A. Este espacio queda vacío a propósito hasta que él las escriba.",
        "Night Sanctuary": "Santuario nocturno",
        "Candle-lit indigo, warm gold, and aurora light.": "Índigo a la luz de las velas, oro cálido y luz de aurora.",
        "Prism Light": "Luz de prisma",
        "Morning light through a prism, soft and bright.": "La luz de la mañana a través de un prisma, suave y brillante.",
        "Stone & Lapis": "Piedra y lapislázuli",
        "Temple stone veined with lapis and gold.": "Piedra de templo veteada de lapislázuli y oro.",
        "Follow the day": "Sigue el día",
        "Prism by morning, stone by afternoon, sanctuary by night.": "Prisma por la mañana, piedra por la tarde, santuario por la noche.",
        "Still": "Quieto",
        "Nothing moves unless you touch it.": "Nada se mueve a menos que lo toques.",
        "Gentle": "Suave",
        "The ink drifts slowly, and your pointer stirs it and leaves a faint trail of the octagon's colors.": "La tinta se desliza despacio; tu puntero la agita y deja una estela tenue con los colores del octágono.",
        "Vivid": "Vívido",
        "Faster ink, a brighter trail, and little octagons scattering behind your pointer.": "Tinta más rápida, una estela más brillante y pequeños octágonos que se dispersan tras tu puntero.",
        "Portal": "Portal",
        "ORG's front door on GitHub": "La puerta de entrada de ORG en GitHub",
        "Porch": "Pórtico",
        "The AstroLog's front door": "La puerta de entrada del AstroLog",
        "Changelog": "Registro de cambios",
        "What changed, newest first": "Qué cambió, lo más nuevo primero",
        "Library": "Biblioteca",
        "Longer write-ups on how it works": "Textos más largos sobre cómo funciona",
        "Ledger": "Libro de cambios",
        "Every public change, in plain words": "Cada cambio público, en palabras sencillas",
        "Map": "Mapa",
        "Every place, with a picture of each": "Cada lugar, con una imagen de cada uno",
        "Get involved": "Participa",
        "Community": "Comunidad",
        "ORG's chats on Telegram: public, events, and members' groups": "Los chats de ORG en Telegram: el público, el de eventos y los grupos de miembros",
        "Reach out": "Ponte en contacto",
        "Every way to reach ORG": "Todas las formas de contactar a ORG",
        "Donate": "Donar",
        "Ways to give, and thanks by name": "Formas de dar, y el agradecimiento por nombre",
        "Pledge": "Compromiso",
        "Sign a pledge of support: free, nothing sent": "Firma un compromiso de apoyo: gratis, no se envía nada",
        "ORG's sites": "Los sitios de ORG",
        "The official site, where members decide": "El sitio oficial, donde deciden los miembros",
        "Three directions": "Tres direcciones",
        "Renan T's proposal, kept as history": "La propuesta de Renan T, guardada como historia",
        "The drasticstatic ORG lab": "El laboratorio ORG de drasticstatic",
        "Christopher's lab, where the new builds take shape": "El laboratorio de Christopher, donde toman forma las nuevas versiones",
        "The dApp preview": "La vista previa de la dApp",
        "A web3-ready preview from the lab": "Una vista previa lista para web3, desde el laboratorio",
        "About": "Acerca de",
        "ORG overview (document)": "Panorama de ORG (documento)",
        "ORG's own overview, on iCloud": "El panorama propio de ORG, en iCloud",
        "Roadmap": "Hoja de ruta",
        "Where these pages are headed": "Hacia dónde van estas páginas",
        "Sustainability": "Sostenibilidad",
        "What it takes to keep them running": "Lo que hace falta para que sigan funcionando",
        "The organization and its code": "La organización y su código",
        "Brand assets": "Recursos de marca",
        "The octagon logo files and guidelines": "Los archivos del logotipo del octágono y sus pautas",
        "ORG, all the ways around": "ORG, todos los caminos",
        "Explore": "Explora",
        "Welcome guide": "Guía de bienvenida",
        "About this build": "Sobre este sitio",
        "AstroLog source": "Código del AstroLog",
        "Code here is MIT licensed and the words are CC BY-SA 4.0. ORG's name and octagon mark belong to ORG and aren't covered by either: see <a href=\"https://github.com/Octagon-Religious-Research-Group-ORG/.github/blob/main/TRADEMARKS.md\">TRADEMARKS.md</a>, and the brand assets for how to use them.": "El código aquí tiene licencia MIT y los textos, CC BY-SA 4.0. El nombre de ORG y su marca del octágono pertenecen a ORG y no están cubiertos por ninguna de las dos: mira <a href=\"https://github.com/Octagon-Religious-Research-Group-ORG/.github/blob/main/TRADEMARKS.md\">TRADEMARKS.md</a> y los recursos de marca para saber cómo usarlos.",
        "Every way to reach ORG, in one place. Pick whichever suits you.": "Todas las formas de contactar a ORG, en un solo lugar. Elige la que te quede mejor.",
        "ORG's main address.": "La dirección principal de ORG.",
        "About the websites, these GitHub pages included.": "Sobre los sitios web, incluidas estas páginas de GitHub.",
        "ORG's shared inbox.": "El buzón compartido de ORG.",
        "Tripp, on Telegram or Signal": "Tripp, en Telegram o Signal",
        "See Contact Us": "Ver Contact Us",
        "The Contact Us section of orgspirituality.org's About page lists ORG's founder: @Tripp_ORG on Telegram, @Tripp_ORG.99 on Signal.": "La sección Contact Us de la página About de orgspirituality.org indica al fundador de ORG: @Tripp_ORG en Telegram, @Tripp_ORG.99 en Signal.",
        "ORG's contacts on GitHub": "Los contactos de ORG en GitHub",
        "Open CONTACTS.md": "Abrir CONTACTS.md",
        "Every address and channel above, kept in the organization's .github repository.": "Cada dirección y canal de arriba, guardados en el repositorio .github de la organización.",
        "An ORG help desk": "Una mesa de ayuda de ORG",
        "A help desk for questions and website feedback, with Telegram built in, is planned. Until it opens, the addresses above or ORG's public chat on Telegram reach the team.": "Está planeada una mesa de ayuda para preguntas y comentarios sobre el sitio web, con Telegram integrado. Hasta que abra, las direcciones de arriba o el chat público de ORG en Telegram llegan al equipo.",
        "See every way in": "Ver todas las formas de entrar",
        "Where we gather": "Donde nos reunimos",
        "ORG gathers on Telegram: a public chat open to anyone, a group for events and ceremonies, and two private groups for members.": "ORG se reúne en Telegram: un chat público abierto a todos, un grupo para eventos y ceremonias, y dos grupos privados para miembros.",
        "ORG lives on Telegram. Anyone can join the public chat and the events group. The two members' groups are private, and it's fine to ask: Tripp lets each person in once their form is done.": "ORG vive en Telegram. Cualquiera puede unirse al chat público y al grupo de eventos. Los dos grupos de miembros son privados, y está bien pedir entrar: Tripp deja pasar a cada persona cuando termina su formulario.",
        "Prefer to ask one person first? ORG's About page lists Tripp on Telegram as <a href=\"https://t.me/Tripp_ORG\">@Tripp_ORG</a>.": "¿Prefieres preguntarle primero a una persona? La página About de ORG indica a Tripp en Telegram como <a href=\"https://t.me/Tripp_ORG\">@Tripp_ORG</a>.",
        "ORG's public chat, @ORG_Spirituality, open to anyone: members, and anyone curious about ORG. In its own words, it's “an unrestricted public chat”, so what people say there doesn't always reflect ORG's views.": "El chat público de ORG, @ORG_Spirituality, abierto a todos: miembros y cualquier persona con curiosidad por ORG. En sus propias palabras (en inglés), es “an unrestricted public chat”, así que lo que se dice ahí no siempre refleja las opiniones de ORG.",
        "ORG's own overview, which the chat links too.": "El panorama propio de ORG, que el chat también enlaza.",
        "Join @ORG_Spirituality": "Únete a @ORG_Spirituality",
        "Open to everyone.": "Abierto a todos.",
        "A collaboration between ORG and Entheo Community. orgspirituality.org's Community page sends people here for news of the monthly meditation ceremony.": "Una colaboración entre ORG y Entheo Community. La página Community de orgspirituality.org manda aquí a quien busque noticias de la ceremonia mensual de meditación.",
        "See what's on": "Ver qué hay",
        "The meetings, events and ceremonies, on orgspirituality.org.": "Las reuniones, los eventos y las ceremonias, en orgspirituality.org.",
        "Join Events and Ceremonies": "Únete a Events and Ceremonies",
        "An invite link to the group on Telegram.": "Un enlace de invitación al grupo en Telegram.",
        "Private: for confirmed ORG members, to vote on all of ORG's decisions. Tripp approves each request by hand once that person's membership form is complete, so it's fine to ask now; your request waits until then.": "Privado: para miembros confirmados de ORG, para votar todas las decisiones de ORG. Tripp aprueba cada solicitud a mano cuando el formulario de membresía de esa persona está completo, así que puedes pedirlo ya; tu solicitud espera hasta entonces.",
        "Membership form": "Formulario de membresía",
        "ORG's public membership form.": "El formulario público de membresía de ORG.",
        "Ask to join": "Pedir entrar",
        "Private: Tripp approves each request.": "Privado: Tripp aprueba cada solicitud.",
        "Private: for ORG members who have completed an approved form of entheogen safety training. Tripp approves each request by hand once that person's EaM form is complete, so it's fine to ask now.": "Privado: para miembros de ORG que completaron una formación aprobada en seguridad con enteógenos. Tripp aprueba cada solicitud a mano cuando el formulario EaM de esa persona está completo, así que puedes pedirlo ya.",
        "Not a member yet? Start here.": "¿Todavía no eres miembro? Empieza aquí.",
        "Looking ahead: a network of our own": "Mirando hacia adelante: una red propia",
        "Sneak peek": "Un adelanto",
        "Today ORG's members gather on Telegram. Further out, ORG would like a small social network its members own, rather than one company, paired with a DAO.": "Hoy los miembros de ORG se reúnen en Telegram. Más adelante, ORG quisiera una pequeña red social que sea de sus miembros, y no de una empresa, junto con una DAO.",
        "Profiles and posts on open protocols like Lens and Farcaster, so what members share stays theirs.": "Perfiles y publicaciones en protocolos abiertos como Lens y Farcaster, para que lo que comparten los miembros siga siendo suyo.",
        "A DAO where members propose and vote, the way ORG already decides its beliefs: by majority, with votes that never close.": "Una DAO donde los miembros proponen y votan, como ORG ya decide sus creencias: por mayoría, con votaciones que nunca cierran.",
        "Privacy first: members choose what's public and what stays among members, and proposals and votes can be anonymous, an idea ORG's own Community page raises.": "La privacidad primero: los miembros eligen qué es público y qué queda entre miembros, y las propuestas y los votos pueden ser anónimos, una idea que plantea la propia página Community de ORG.",
        "No dates, and nothing to sign up for yet. A direction, not a promise. Telegram stays the place to talk.": "Sin fechas, y todavía nada en qué inscribirse. Una dirección, no una promesa. Telegram sigue siendo el lugar para conversar.",
        "Give through orgspirituality.org": "Da a través de orgspirituality.org",
        "Open the offerings page": "Abrir la página de ofrendas",
        "ORG's own page for giving. Its <em>Direct contribution</em> section lets you give without requesting an item, once, monthly or yearly, and finish the gift with PayPal or Venmo. In ORG's words, it “does not see your account credentials.”": "La propia página de ORG para dar. Su sección <em>Direct contribution</em> te permite dar sin pedir un artículo, una vez, cada mes o cada año, y terminar el regalo con PayPal o Venmo. En palabras de ORG (en inglés), “does not see your account credentials.”",
        "How ORG uses gifts": "Cómo usa ORG los regalos",
        "Read the offering policy": "Leer la política de ofrendas",
        "ORG's own words on gifts and contributions, including the memo that can point a gift toward one area: the website, the legal fund, sacraments, or the octagon infrastructure.": "Las propias palabras de ORG sobre regalos y contribuciones, incluida la nota que puede dirigir un regalo a un área: el sitio web, el fondo legal, los sacramentos o la infraestructura del octágono.",
        "The dApp preview's gift page": "La página de regalos de la vista previa de la dApp",
        "See the preview": "Ver la vista previa",
        "<strong>A preview, not live.</strong> A web3 gift flow from Christopher's lab. The page says so itself: its address is a placeholder until ORG designates a real one, and sending funds now will not reach ORG.": "<strong>Una vista previa, no en vivo.</strong> Un flujo de regalos web3 del laboratorio de Christopher. La propia página lo dice: su dirección es provisional hasta que ORG designe una real, y enviar fondos ahora no llegará a ORG.",
        "About giving": "Sobre dar",
        "ORG's own words about gifts made through these GitHub pages belong here. Until ORG writes them, this is a placeholder. These pages never take payments or see payment details: gifts are made on orgspirituality.org.": "Aquí van las propias palabras de ORG sobre los regalos hechos a través de estas páginas de GitHub. Hasta que ORG las escriba, esto es provisional. Estas páginas nunca reciben pagos ni ven datos de pago: los regalos se hacen en orgspirituality.org.",
        "Contribution ledger": "Registro de contribuciones",
        "People and groups who have given time, skills or gifts to ORG, and said yes to being thanked by name here.": "Personas y grupos que han dado tiempo, habilidades o regalos a ORG, y que aceptaron ser agradecidos por nombre aquí.",
        "Giving from a crypto wallet is planned for this page, through the same wallet connection the dApp preview uses. It isn't open yet.": "Dar desde una billetera cripto está planeado para esta página, con la misma conexión de billetera que usa la vista previa de la dApp. Todavía no está abierto.",
        "In ORG's own words, on its <a href=\"https://orgspirituality.org/gifts-contributions\">gifts and contributions page</a>: “we chose to register as a <span style=\"font-variant-ligatures: none; font-feature-settings: 'calt' 0, 'liga' 0, 'dlig' 0\">501(c)(3)</span>.”": "En las propias palabras de ORG (en inglés), en su <a href=\"https://orgspirituality.org/gifts-contributions\">página de regalos y contribuciones</a>: “we chose to register as a <span style=\"font-variant-ligatures: none; font-feature-settings: 'calt' 0, 'liga' 0, 'dlig' 0\">501(c)(3)</span>.”",
        "That page says: “Donations are tax-deductible.” How much, if at all, depends on your own situation.": "Esa página dice (en inglés): “Donations are tax-deductible.” Cuánto, si es que algo, depende de tu propia situación.",
        "If ORG matters to you, you can say so by signing a short pledge with a crypto wallet. It's free: no gas and no money, and for now nothing is recorded. Signing a pledge doesn't make you a member; <a href=\"https://orgspirituality.org/join\">joining ORG</a> is its own step.": "Si ORG te importa, puedes decirlo firmando un breve compromiso con una billetera cripto. Es gratis: sin gas y sin dinero, y por ahora no se registra nada. El texto que se firma queda en inglés. Firmar un compromiso no te hace miembro; <a href=\"https://orgspirituality.org/join\">unirte a ORG</a> es un paso aparte.",
        "A pledge isn't a gift and asks nothing more of you. To give as well, see <a href=\"https://octagon-religious-research-group-org.github.io/donate/\">the ways to give</a>.": "Un compromiso no es un regalo y no te pide nada más. Para dar también, mira <a href=\"https://octagon-religious-research-group-org.github.io/donate/\">las formas de dar</a>.",
        "ORG's AstroLog has two halves.": "El AstroLog de ORG tiene dos mitades.",
        "Sharing one change? Every entry and every write-up has its own preview card. Paste its link into Telegram, iMessage or Discord and it arrives with its title, summary and who made it. The <strong>Copy a link</strong> button under each one does the copying.": "¿Vas a compartir un cambio? Cada entrada y cada texto tiene su propia tarjeta de vista previa. Pega su enlace en Telegram, iMessage o Discord y llega con su título, su resumen y quién lo hizo. El botón <strong>Copiar un enlace</strong> debajo de cada uno lo copia por ti.",
        "The changelog": "El registro de cambios",
        "Every notable change to ORG's websites, newest first. Each entry is a short summary with the full story underneath, filed under one of four areas: the live site, the API, ORG on GitHub, and previews and proposals.": "Cada cambio notable en los sitios web de ORG, lo más nuevo primero. Cada entrada es un resumen breve con la historia completa debajo, archivada en una de cuatro áreas: el sitio en vivo, la API, ORG en GitHub, y vistas previas y propuestas.",
        "Read the changelog": "Leer el registro de cambios",
        "The library": "La biblioteca",
        "Longer write-ups on how the sites are built and how they fit together. The changelog says what changed; the library explains how it works.": "Textos más largos sobre cómo se construyen los sitios y cómo encajan entre sí. El registro de cambios dice qué cambió; la biblioteca explica cómo funciona.",
        "Open the library": "Abrir la biblioteca",
        "The ledger": "El libro de cambios",
        "Every public change to ORG's code, in plain words: grouped by day and by kind, credited to whoever made it, and linked to the change itself. For anyone who'd rather not open GitHub. It refreshes every day.": "Cada cambio público en el código de ORG, en palabras sencillas: agrupados por día y por tipo, reconocidos a quien los hizo y enlazados al cambio mismo. Para quien prefiera no abrir GitHub. Se actualiza cada día.",
        "Open the ledger": "Abrir el libro de cambios",
        "ORG on GitHub": "ORG en GitHub",
        "This is ORG's front door on GitHub: the same nine doors as the home page of orgspirituality.org, and the way into the AstroLog, where ORG keeps its record of what changed.": "Esta es la puerta de entrada de ORG en GitHub: las mismas nueve puertas que la página de inicio de orgspirituality.org, y el camino al AstroLog, donde ORG guarda el registro de lo que cambió.",
        "the ORG AstroLog": "el AstroLog de ORG",
        "The AstroLog is ORG's plain-language record of what changed on its websites, who made each change, and how the pieces fit together. It's the official record for the repositories in ORG's GitHub organization.": "El AstroLog es el registro en lenguaje sencillo de lo que cambió en los sitios web de ORG, quién hizo cada cambio y cómo encajan las piezas. Es el registro oficial de los repositorios de la organización de ORG en GitHub.",
        "Every ORG page offers three lights. They began as Renan T's design proposal for orgspirituality.org, the spark for these new builds, and they live on here as lights you can choose. Your choice follows you from page to page. <a href=\"https://octagon-religious-research-group-org.github.io/changelog-astro-public/three-directions\">Their story</a>.": "Cada página de ORG ofrece tres luces. Empezaron como la propuesta de diseño de Renan T para orgspirituality.org, la chispa de estas nuevas versiones, y aquí siguen vivas como luces que puedes elegir. Tu elección te acompaña de página en página. <a href=\"https://octagon-religious-research-group-org.github.io/changelog-astro-public/three-directions\">Su historia</a>.",
        "Behind each page is marbled ink that moves with your pointer. Choose how much it moves, and whether you'd like more contrast for reading.": "Detrás de cada página hay tinta jaspeada que se mueve con tu puntero. Elige cuánto se mueve y si quieres más contraste para leer.",
        "Every entry credits whoever did the work, by first name and last initial, the way ORG's own profile names them.": "Cada entrada reconoce a quien hizo el trabajo, por su nombre y la inicial de su apellido, como los nombra el propio perfil de ORG.",
        "Pictures come from public GitHub profiles. Anyone without one linked gets an octagon with their initials.": "Las imágenes vienen de perfiles públicos de GitHub. Quien no tenga uno enlazado recibe un octágono con sus iniciales.",
        "You've lit all eight wedges of the octagon. Welcome to ORG.": "Encendiste las ocho cuñas del octágono. Te damos la bienvenida a ORG.",
        "Enter ORG": "Entrar a ORG",
        "One tap for the calmest page: Stone & Lapis, the ink at rest, more contrast, and no cursor trail. Tap again to go back to how you had it.": "Un toque para la página más tranquila: Piedra y lapislázuli, la tinta en reposo, más contraste y sin estela del cursor. Toca otra vez para volver a como la tenías.",
        "A trail of the octagon's colors behind your pointer, and ink that stirs as you move. Switch it off if you'd rather not.": "Una estela con los colores del octágono tras tu puntero, y tinta que se agita al moverte. Apágala si lo prefieres.",
        "Pause the ink": "Pausar la tinta",
        "Let the ink move": "Dejar que la tinta se mueva",
        "Anywhere on ORG's pages, any time: every change, write-up, person and page, including the AstroLog from the entry portal.": "En cualquier lugar de las páginas de ORG, en cualquier momento: cada cambio, texto, persona y página, incluido el AstroLog desde el portal de entrada.",
        "ORG entry portal": "Portal de entrada de ORG",
        "official site": "sitio oficial",
        "Beliefs": "Creencias",
        "Infrastructure": "Infraestructura",
        "Join ORG": "Únete a ORG",
        "Research": "Investigación",
        "Legal": "Legal",
        "Future ideas": "Ideas a futuro",
        "Gifts and offerings": "Regalos y ofrendas",
        "ORG (Public) chat": "Chat ORG (Public)",
        "ORG (Voting): ask to join": "ORG (Voting): pedir entrar",
        "Telegram, private": "Telegram, privado",
        "ORG EaMs: ask to join": "ORG EaMs: pedir entrar",
        "ORG document": "documento de ORG",
        "Message Tripp": "Escribirle a Tripp",
        "Contact Us": "Contacto",
        "ORG's contacts (CONTACTS.md)": "Los contactos de ORG (CONTACTS.md)",
        "Map: every place, with pictures": "Mapa: cada lugar, con imágenes",
        "Brand assets and guidelines": "Recursos y pautas de marca",
        "Three directions, living together": "Tres direcciones, viviendo juntas",
        "Help decide what comes next": "Ayuda a decidir lo que sigue",
        "The ledger: every public change": "El libro de cambios: cada cambio público",
        "drasticstatic ORG lab": "Laboratorio ORG de drasticstatic",
        "Christopher's lab": "el laboratorio de Christopher",
        "The lab's changelog": "El registro de cambios del laboratorio",
        "O-R-G dApp preview": "Vista previa de la dApp O-R-G",
        "preview, not live": "vista previa, no en vivo",
        "ORG's organization profile": "El perfil de la organización ORG",
      },
    },
  };
})();
/* ── end of the languages block ── */
