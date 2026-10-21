// All copy and image references. Anything not in the Figma file is marked PLACEHOLDER.
import { A } from "./lib.js";

export const NAV_LINKS = [
  { label: "Platform", target: "platform" },
  { label: "Why Laylo", target: "why" },
  { label: "Solutions", target: "solutions" },
  { label: "Greatest Hits", target: "greatest-hits" },
  { label: "Resources", target: "tools" },
];

// Hero: the word after "RUN THE PERFECT" cycles; each word has its own left image.
export const HERO_WORDS = [
  { word: "TOUR", img: A("hero-portrait.jpg") },
  { word: "LINEUP", img: A("hero-lineup.jpg") },
  { word: "PRE SALE", img: A("hero-presale.jpg") },
  { word: "MERCH", img: A("hero-merch.jpg") },
  { word: "SHOW", img: A("hero-show.jpg") },
];

// "Started it all" strip, in Figma order. Only Diplo's caption is from Figma.
export const STRIP = [
  { img: A("strip-14.jpg"), name: "Juniper Rae", meta: "Tour Presale", mult: "2.4x" }, // PLACEHOLDER
  { img: A("hero-show.jpg"), name: "Diplo", meta: "Run Club", mult: "1.5x" },
  { img: A("hero-presale.jpg"), name: "Sunset Sessions", meta: "Festival Drop", mult: "3.2x" }, // PLACEHOLDER
  { img: A("hero-portrait.jpg"), name: "Nova Kai", meta: "Album Presave", mult: "1.8x" }, // PLACEHOLDER
  { img: A("hero-lineup.jpg"), name: "Afterglow Club", meta: "Merch Drop", mult: "2.1x" }, // PLACEHOLDER
  { img: A("strip-35.jpg"), name: "Elliot Vane", meta: "Ticket Presale", mult: "4.0x" }, // PLACEHOLDER
];

export const PLATFORM_STEPS = ["Capture fans", "Message everyone in one send", "Sell out the drop"];

export const FAN_CARD = [
  ["CONTACT", "401.985.9925"],
  ["LOCATION", "Brooklyn, New York"],
  ["MUSIC", "Top 1% on Spotify"],
  ["BOUGHT", "2 Tickets, 1 Tee"],
  ["AMOUNT", "184USD"],
];

export const BARS = [
  { label: "MUSIC", value: 2100, width: 76 },
  { label: "MERCH", value: 6900, width: 206 },
  { label: "TOUR", value: 12480, width: 298 },
];

export const AUDIENCES = ["Artists", "Venues", "Promoters", "Festivals"];
export const PHASES = ["Before", "During", "After"];

// crop: Figma image-fill offsets {w,h,l,t} in % of the 429px frame; omit for cover.
// Artists is the Figma copy; the other three audiences are PLACEHOLDER copy.
export const AGENTS = {
  Artists: [
    {
      title: "Grow your list before you announce",
      body: "Every RSVP becomes a fan you own — name, number, email — captured the second they engage.",
      features: ["A page for every drop.", "Auto-DM fans who reply.", "Signup forms on your site.", "Fans presave on Spotify."],
      img: A("s3-before.jpg"), crop: { w: 100, h: 120.8, l: 0, t: -16.79 },
      client: "The Beaches", stat: "56× fan list in two years", sub: "off gamified Instagram DMs.",
      quote: "In one month, the band went from 1500 emails to about 6000! When someone replies to a story, that's when the sign-up comes in",
      who: ["Laurie Lee,", "manager"],
    },
    {
      title: "Reach real fans the second it's live",
      body: "Text, email, and DM your verified fan list at once, in 100+ countries. Signups become sales while the moment's hot.",
      features: ["Unique code per fan", "Your own number, not shared", "Branded texts, not grey bubbles", "Copy drafted in seconds"],
      img: A("s3-during.jpg"),
      client: "The Beaches", stat: "195% CTR", sub: "on their Laylo merch drop, plus a superfan presale at 1.18× CTR",
      quote: "Presave streams doubled and saves tripled versus playlisting alone.",
      who: null,
    },
    {
      title: "Re-engage every fan",
      body: "Win back the fans who didn't buy, reward the ones who did. Purchase, streaming and social data tells you exactly who to reach for the next drop.",
      features: ["Conversions tracked in real time", "Tickets, merch and music history", "Spot fans with big followings", "Mentions and comments tracked"],
      img: A("s3-after.jpg"), crop: { w: 178.67, h: 119.13, l: -27.58, t: -15.67 },
      client: "The Beaches", stat: "Every release, messaged straight to fans", sub: "a Spotify-presave flywheel plus Laylo listening parties",
      quote: "Every time we released a record… we messaged those fans.",
      who: ["Laurie Lee,", "manager"],
    },
  ],
  Venues: [
    {
      title: "Fill the room before tickets go live",
      body: "Turn every past attendee into a reachable fan. Show-by-show RSVPs tell you who's coming before the on-sale even starts.",
      features: ["RSVP pages per show", "Waitlists by city", "Past-buyer targeting", "Calendar sync for fans"],
      img: A("hero-presale.jpg"),
      client: "The Meridian", stat: "3.4× presale signups", sub: "across a 40-date season calendar.",
      quote: "We stopped guessing which shows would move. The RSVP list told us before we announced.",
      who: ["Dana Ortiz,", "talent buyer"],
    },
    {
      title: "Sell out the on-sale in minutes",
      body: "One send hits text, email and DMs the moment tickets drop. Fans get a personal link, so the line moves fast and stays fair.",
      features: ["Timed release alerts", "Per-fan access links", "Bot-resistant queues", "Live sell-through view"],
      img: A("t-dance.jpg"), crop: { w: 145.69, h: 182.11, l: -22.84, t: -41.05 },
      client: "The Meridian", stat: "Sold out in 11 minutes", sub: "for a 2,200-cap headline show.",
      quote: "The text went out and the house was gone before our socials even posted.",
      who: ["Dana Ortiz,", "talent buyer"],
    },
    {
      title: "Bring every guest back",
      body: "Know who came, what they bought at the bar and merch stand, and who never misses a show. Book the next night around them.",
      features: ["Attendance tracked per fan", "Bar and merch spend", "Repeat-guest segments", "Post-show surveys"],
      img: A("hero-lineup.jpg"),
      client: "The Meridian", stat: "48% repeat attendance", sub: "up from 21% the season before.",
      quote: "Our regulars finally feel like regulars. They hear from us first, every time.",
      who: ["Dana Ortiz,", "talent buyer"],
    },
  ],
  Promoters: [
    {
      title: "Build demand for every lineup",
      body: "Tease the lineup and collect fans by city. Every signup tells you which market to book next and how hard to push.",
      features: ["Lineup teaser pages", "City-level demand maps", "Artist-shared links", "Referral rewards"],
      img: A("t-dance.jpg"), crop: { w: 145.69, h: 182.11, l: -22.84, t: -41.05 },
      client: "Nightshift Events", stat: "62K signups pre-announce", sub: "across six cities in three weeks.",
      quote: "We booked the second date off the waitlist alone. No guesswork.",
      who: ["Marcus Bell,", "head of marketing"],
    },
    {
      title: "Launch the presale everywhere at once",
      body: "Message fans in every city in a single send, each with the right date, venue and code. Tickets move while hype peaks.",
      features: ["City-specific sends", "Presale codes per fan", "Tiered release windows", "Real-time sales alerts"],
      img: A("hero-presale.jpg"),
      client: "Nightshift Events", stat: "71% presale conversion", sub: "from signup to ticket in the first hour.",
      quote: "One message, six cities, every presale sold through before general on-sale.",
      who: ["Marcus Bell,", "head of marketing"],
    },
    {
      title: "Turn one tour into the next",
      body: "Every buyer, every city, every add-on stays in your CRM. Re-target the fans who missed out and reward the ones who showed up.",
      features: ["Missed-out win-backs", "Upsell VIP and merch", "Lifetime value per fan", "Exportable segments"],
      img: A("hero-lineup.jpg"),
      client: "Nightshift Events", stat: "2.3× repeat buyers", sub: "on the follow-up tour announcement.",
      quote: "The second run was easier than the first because the fans were already ours.",
      who: ["Marcus Bell,", "head of marketing"],
    },
  ],
  Festivals: [
    {
      title: "Grow the crowd before the lineup drops",
      body: "Open early-bird RSVPs months out. Learn who's coming, where they're from and which acts they want to see.",
      features: ["Early-bird waitlists", "Fan-voted lineups", "Travel-region insights", "Group sign-ups"],
      img: A("hero-presale.jpg"),
      client: "Solstice Fest", stat: "120K early-bird RSVPs", sub: "before a single act was announced.",
      quote: "We knew the weekend would sell before we even revealed the headliners.",
      who: ["Priya Shah,", "festival director"],
    },
    {
      title: "Move every tier on announce day",
      body: "Fans get the lineup and their own access window in one message. Tiers sell in order, without the crash and the chaos.",
      features: ["Tiered access windows", "Unique links per fan", "Payment-plan nudges", "Live tier tracking"],
      img: A("s3-after.jpg"), crop: { w: 178.67, h: 119.13, l: -27.58, t: -15.67 },
      client: "Solstice Fest", stat: "Tier 1 gone in 4 minutes", sub: "with zero site downtime on announce day.",
      quote: "Announce day used to be our worst day. Now it's the easiest one on the calendar.",
      who: ["Priya Shah,", "festival director"],
    },
    {
      title: "Keep the festival going all year",
      body: "Stay in touch between editions with after-movies, merch drops and side-shows. Next year's crowd starts with this year's.",
      features: ["After-movie drops", "Year-round merch", "Side-show presales", "Returning-fan perks"],
      img: A("t-dance.jpg"), crop: { w: 145.69, h: 182.11, l: -22.84, t: -41.05 },
      client: "Solstice Fest", stat: "64% returning fans", sub: "bought the next edition in the first week.",
      quote: "Our community doesn't go quiet in the off-season anymore. They're with us all year.",
      who: ["Priya Shah,", "festival director"],
    },
  ],
};

// Tools list from laylo-homepage-AM.html (25 tools: names, copy, button labels).
// Icons: the four Figma Material Symbols plus matching filled Material Symbols for the rest.
const T = (icon) => A(`tools/${icon}.svg`);
export const TOOLS = [
  { icon: T("outdoor_garden"), name: "Drops", body: "High-converting drop pages and RSVP cards — the most powerful way to capture signups on landing pages. Convert 7× more fans.", cta: "Build your first drop" },
  { icon: T("tabs"), name: "Tour suite", body: "Sell out tours and events with automated fan RSVPs and city-based notifications.", cta: "Drop your tour" },
  { icon: T("clock_loader_80"), name: "Social Engagement", body: "Spot your most active fans by automatically tracking every story mention and comment in your CRM.", cta: "Connect with superfans" },
  { icon: T("file_export"), name: "Abandoned Cart Agent", body: "Send personalized texts in your voice, with a discount code if they need a nudge. No setup needed.", cta: "Discover this agent" },
  { icon: T("confirmation_number"), name: "Ticket Sales Agent", body: "Turn RSVPs into sold-out shows. Your Agent texts fans with real-time ticketing data and brings them back to buy.", cta: "Discover this agent" },
  { icon: T("photo_camera"), name: "UGC Agent", body: "Finds fan moments worth keeping, and connects with UGC tools you already use for permission & access.", cta: "Discover this agent" },
  { icon: T("sms"), name: "RCS Messaging", body: "Transform messages into a branded fan experience. The next generation of SMS, with verified branding.", cta: "Own your branding" },
  { icon: T("verified_user"), name: "RealFan anti-broker", body: "Verifies every fan RSVP and delivers unique codes that brokers can't reuse.", cta: "Lock out brokers" },
  { icon: T("extension"), name: "Integrations", body: "Connect Laylo to apps and services you already use to expand functionality.", cta: "Explore all integrations" },
  { icon: T("monitoring"), name: "Analytics", body: "Turn real-time insights into fan engagement and conversions.", cta: "Learn more" },
  { icon: T("forum"), name: "Direct Messages", body: "Automatically send direct messages when fans respond to your stories and posts.", cta: "Explore all integrations" },
  { icon: T("chat"), name: "SMS marketing", body: "Send SMS messages and drop notifications directly to fans from a custom phone number.", cta: "Light up your line" },
  { icon: T("code_blocks"), name: "Embeds", body: "Collect fan signups from your website using embedded forms.", cta: "Capture more signups" },
  { icon: T("headphones"), name: "Presaves", body: "Let fans presave your songs and follow you on Spotify for better playlist placement.", cta: "Drive streams on Spotify" },
  { icon: T("mail"), name: "Email marketing", body: "Schedule and send automated emails to keep fans engaged.", cta: "Learn more" },
  { icon: T("group"), name: "Fan profiles", body: "Laylo automatically enriches fan profiles from your list with ticket, merch, and music data.", cta: "Explore fan profiles" },
  { icon: T("ads_click"), name: "Pixel", body: "Add tracking and retargeting pixels to share data with Facebook, Google, and TikTok.", cta: "Learn more" },
  { icon: T("phone_iphone"), name: "Custom number", body: "Message fans from a unique, dedicated phone number that they can save to contacts.", cta: "Light up your line" },
  { icon: T("laylo_ai"), name: "Laylo AI", body: "Laylo AI (formerly Clutch) helps manage and message your fans more effectively.", cta: "Drop faster with AI" },
  { icon: T("star"), name: "Notable fans", body: "Find fans with large social followings. Invite them to influencer campaigns, backstages, and more.", cta: "Discover your notable fans" },
  { icon: T("language"), name: "Custom domains", body: "Send branded emails and improve SEO by using your own domain.", cta: "Learn more" },
  { icon: T("campaign"), name: "Ads", body: "Automate paid campaigns with AI-generated audiences for better CPA and ROAS.", cta: "Join the waitlist" },
  { icon: T("key"), name: "Shared access & Enterprise", body: "Manage your team's access and permissions seamlessly.", cta: "Join the waitlist" },
  { icon: T("handshake"), name: "Affiliates", body: "Promote Laylo to your network and get compensated when they spend.", cta: "Connect talent to Laylo" },
  { icon: T("voicemail"), name: "Voicemail", body: "Let fans call in, leave messages, hear from you, and join your list, all through voicemail.", cta: "Learn more" },
];

// crop as above. The first two are the Figma testimonials; the rest are PLACEHOLDER.
export const TESTIMONIALS = [
  { img: A("t-hoodie.jpg"), crop: { w: 118.62, h: 118.62, l: -9.31, t: -9.26 }, stat: "$180K", label: "From one text", quote: "We made about $180K from a single text.", who: ["Rhys Jackson", "Founder , TELETECH"] },
  { img: A("t-dance.jpg"), crop: { w: 145.69, h: 182.11, l: -22.84, t: -41.05 }, stat: "15.6K", label: "Signups vs a 10K goal", quote: "We're psyched — doubling down and going all in.", who: ["Lance Dunlap", "Talent Buyer, Global Dance"] },
  { img: A("hero-presale.jpg"), crop: { w: 108.02, h: 104.89, l: -6.53, t: -2.45 }, stat: "3.1×", label: "Presale conversion", quote: "Laylo turned our waitlist into the fastest presale we've ever run.", who: ["Priya Shah", "Festival Director, Solstice Fest"] },
  { img: A("hero-merch.jpg"), stat: "92%", label: "Merch sold in 48 hours", quote: "The drop sold through before we'd even posted it on socials.", who: ["Marcus Bell", "Head of Marketing, Nightshift"] },
  { img: A("hero-lineup.jpg"), stat: "41K", label: "RSVPs before announce", quote: "We had a sold-out crowd waiting before the lineup was public.", who: ["Dana Ortiz", "Talent Buyer, The Meridian"] },
];
