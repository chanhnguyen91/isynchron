// Small stroke icon set (24px grid, currentColor) so the page needs no icon library.

function Icon({ children, className = 'size-5', ...rest }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const ArrowDown = (p) => (
  <Icon {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </Icon>
);

export const Close = (p) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);

export const Menu = (p) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Icon>
);

export const Check = (p) => (
  <Icon {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Icon>
);

export const Mail = (p) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M4 7l8 6 8-6" />
  </Icon>
);

export const Bell = (p) => (
  <Icon {...p}>
    <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16z" />
    <path d="M10 20.5a2 2 0 0 0 4 0" />
  </Icon>
);

export const Sparkles = (p) => (
  <Icon {...p}>
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
  </Icon>
);

export const Target = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
  </Icon>
);

export const Loop = (p) => (
  <Icon {...p}>
    <path d="M7.5 8.5c-2 0-3.5 1.6-3.5 3.5s1.5 3.5 3.5 3.5c3.5 0 5.5-7 9-7 2 0 3.5 1.6 3.5 3.5s-1.5 3.5-3.5 3.5c-3.5 0-5.5-7-9-7z" />
  </Icon>
);

export const Ear = (p) => (
  <Icon {...p}>
    <path d="M7 9a5 5 0 1 1 10 0c0 3-3 4-3 7a3 3 0 0 1-5.5 1.6" />
    <path d="M10 10a2 2 0 1 1 4 0" />
  </Icon>
);

export const Sync = (p) => (
  <Icon {...p}>
    <path d="M5 10a7.5 7.5 0 0 1 13-3.5L20 8.5" />
    <path d="M20 4v4.5h-4.5" />
    <path d="M19 14a7.5 7.5 0 0 1-13 3.5L4 15.5" />
    <path d="M4 20v-4.5h4.5" />
  </Icon>
);

export const Rocket = (p) => (
  <Icon {...p}>
    <path d="M14 4c3 0 6 3 6 6l-6.5 6.5-6-6L14 4z" />
    <path d="M7.5 10.5L4 12l3 2M13.5 16.5L12 20l-2-3" />
    <circle cx="15" cy="9" r="1.4" />
  </Icon>
);

export const Scan = (p) => (
  <Icon {...p}>
    <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" />
    <path d="M4 12h16" />
  </Icon>
);

export const Wallet = (p) => (
  <Icon {...p}>
    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3" />
    <rect x="4" y="8" width="16" height="11" rx="2.5" />
    <circle cx="16" cy="13.5" r="1.2" fill="currentColor" />
  </Icon>
);

export const Hand = (p) => (
  <Icon {...p}>
    <path d="M8 13V6.5a1.5 1.5 0 0 1 3 0V12M11 11V5a1.5 1.5 0 0 1 3 0v6M14 11V6.5a1.5 1.5 0 0 1 3 0V14c0 4-2.5 6.5-6 6.5-2.5 0-4-1.2-5.2-3.2L4 14.5a1.5 1.5 0 0 1 2.4-1.8L8 14.5" />
  </Icon>
);

export const Tree = (p) => (
  <Icon {...p}>
    <rect x="9" y="3" width="6" height="4.5" rx="1.2" />
    <rect x="3" y="16.5" width="6" height="4.5" rx="1.2" />
    <rect x="15" y="16.5" width="6" height="4.5" rx="1.2" />
    <path d="M12 7.5V12M6 16.5V12h12v4.5" />
  </Icon>
);

export const Chat = (p) => (
  <Icon {...p}>
    <path d="M5 5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 16h-7l-4.5 3.5V16H5a1.5 1.5 0 0 1-1.5-1.5v-8A1.5 1.5 0 0 1 5 5z" />
    <path d="M8 9.5h8M8 12.5h5" />
  </Icon>
);

export const Moon = (p) => (
  <Icon {...p}>
    <path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z" />
  </Icon>
);

// Brand marks are filled glyphs rather than strokes.
function Brand({ children, className = 'size-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      {children}
    </svg>
  );
}

export const LinkedIn = (p) => (
  <Brand {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </Brand>
);

export const XTwitter = (p) => (
  <Brand {...p}>
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
  </Brand>
);
