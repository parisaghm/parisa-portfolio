"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";

const EMAIL = "parisa.ghasemie@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function isLocalPreview() {
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function ContactEmailLink() {
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback(() => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastVisible(true);
    toastTimer.current = setTimeout(() => setToastVisible(false), 2600);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (!isLocalPreview()) return;

      e.preventDefault();
      window.location.href = MAILTO;

      window.setTimeout(async () => {
        if (!document.hasFocus()) return;

        try {
          await copyToClipboard(EMAIL);
          showToast();
        } catch {
          // Clipboard access can fail in restricted contexts.
        }
      }, 400);
    },
    [showToast],
  );

  return (
    <>
      <a
        href={MAILTO}
        className="csocial"
        aria-label="Email Parisa"
        title="Open email client"
        onClick={handleClick}
      >
        <span className="btn-in">
          <MailIcon />
          <span>Email</span>
        </span>
      </a>
      {toastVisible && (
        <p className="contact-email-toast" role="status" aria-live="polite">
          Email copied
        </p>
      )}
    </>
  );
}
