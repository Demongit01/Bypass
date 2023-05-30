// ==UserScript==
// @name            ChatGPT DAN EN
// @icon            https://raw.githubusercontent.com/madkarmaa/automatic-chatgpt-dan/master/images/icon.png
// @namespace       2df9d1c998bc7e6b33e6e00a19977c4e080ec10d4db8a4f4e09d6076b2e6c864s
// @source          https://github.com/madkarmaa/automatic-chatgpt-dan
// @supportURL      https://github.com/madkarmaa/automatic-chatgpt-dan
// @version         3.6.2
// @description     Remove filters and limitations from ChatGPT
// @author          x
// @match           *://chat.openai.com/*
// @require         https://github.com/madkarmaa/automatic-chatgpt-dan/raw/master/resources/colors.js
// @require         https://code.jquery.com/jquery-3.6.4.min.js
// @require         https://momentjs.com/downloads/moment.min.js
// @grant           GM_info
// ==/UserScript==

(async function () {
  "use strict";

  // ---------- Init values ----------
  const mdFileUrl =
    "https://raw.githubusercontent.com/RIllEX0/ChatGPT_Bypass_Limit/main/README.md";
  const version =
    "https://raw.githubusercontent.com/madkarmaa/automatic-chatgpt-dan/master/version.json";
  const isMobile =
    /webOS/i.test(
      navigator.userAgent
    );
  const cacheExpireTime = 5 * 60 * 1000; // 5 minutes
  let notifyUpdate = false;

  // ---------- Basic script info ----------
  console.log(
    ConsoleColors.magenta(
      `${GM_info.script.name} ${GM_info.script.version} on ${
        isMobile ? "mobile" : "pc"
      }`
    )
  );

  // ---------- Function to remove the cached file if erroneous and reload the page to try again ----------
  function removeCachedFile(err = null) {