"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import { Language } from "../data/portfolio";

export type Theme = "dark" | "light";

const LANG_STORAGE_KEY = "portfolio_deb_lang";
const THEME_STORAGE_KEY = "portfolio_deb_theme";
const PREFS_EVENT = "portfolio_deb_prefs_change";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(PREFS_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(PREFS_EVENT, callback);
  };
}

function getLangSnapshot(): Language {
  try {
    const val = window.localStorage.getItem(LANG_STORAGE_KEY);
    return val === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function getLangServerSnapshot(): Language {
  return "es";
}

function getThemeSnapshot(): Theme {
  try {
    const val = window.localStorage.getItem(THEME_STORAGE_KEY);
    return val === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function getThemeServerSnapshot(): Theme {
  return "dark";
}

export function usePreferences() {
  const lang = useSyncExternalStore(
    subscribe,
    getLangSnapshot,
    getLangServerSnapshot
  );

  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    root.lang = lang;
  }, [lang, theme]);

  const setLang = useCallback((nextLang: Language) => {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, nextLang);
      window.dispatchEvent(new Event(PREFS_EVENT));
    } catch {
      // Ignore storage errors
    }
  }, []);

  const setTheme = useCallback((nextTheme: Theme) => {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      window.dispatchEvent(new Event(PREFS_EVENT));
    } catch {
      // Ignore storage errors
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = getThemeSnapshot() === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  }, [setTheme]);

  return {
    lang,
    setLang,
    theme,
    setTheme,
    toggleTheme,
  };
}
