/**
*
* Icons definition file used by Icon component (/components/Icon)
*
* for each icon one or more SVG-paths are required and optionally also the viewport size (defaults to 24px)
* iconName: {
*   size: 24,
*   paths: ['s v g', 'p a t h s'],
* }
*
* when omitting the size, the paths can also be given:
* iconName: {
*   paths: ['s v g', 'p a t h s'],
* }
* can be given as
* iconName: ['s v g', 'p a t h s'],
*
*
*
*/

const icons = {
  placeholder: {
    size: 24,
    paths: [
      'M18.5,12A6.5,6.5,0,1,1,12,5.5,6.5,6.5,0,0,1,18.5,12Z',
    ],
  },
  // Taxonomies
  // 1: Human Rights Body
  taxonomy_1: {
    size: 40,
    paths: [
      'M38,18.12v6.4H34.54a22.3,22.3,0,0,0-5.2-2.17l-.19-.49A23.59,23.59,0,0,1,34.54,24V18.45c-3-2-8.7-3.24-14.53-3.24S8.48,16.48,5.46,18.45V24a23.58,23.58,0,0,1,5.39-2.18l-.19.49a22.3,22.3,0,0,0-5.2,2.17H2v-6.4H2A9,9,0,0,1,3.8,16.73v-2A.84.84,0,0,1,4.21,14a17.51,17.51,0,0,1,2.32-1.11.41.41,0,0,1,.56.4v2a31.82,31.82,0,0,1,4-1.11V12a.63.63,0,0,1,.49-.63c.76-.16,1.54-.3,2.33-.42a.42.42,0,0,1,.47.42v2.15c1.34-.18,2.68-.29,4-.34V10.95a.42.42,0,0,1,.4-.43l1.25,0,1.25,0a.42.42,0,0,1,.4.43v2.25c1.3.05,2.64.17,4,.35V11.38A.42.42,0,0,1,26.1,11c.79.12,1.57.26,2.33.42a.63.63,0,0,1,.49.63v2.1a31.82,31.82,0,0,1,4,1.11v-2a.41.41,0,0,1,.56-.4A17.52,17.52,0,0,1,35.79,14a.85.85,0,0,1,.41.73v2A9,9,0,0,1,38,18.12Zm-9.9,2.12H11.9l-1.24,3.27h.56v5.13H12V23.52h.2v3.15H13V23.52h14v3.15h.71V23.52h.2v5.13h.82V23.52h.67Z',
    ],
  },
  // 2: UN session
  taxonomy_2: {
    size: 40,
    paths: [
      'M12.43,20A4.41,4.41,0,1,1,8,15.59,4.41,4.41,0,0,1,12.43,20ZM20,15.59A4.41,4.41,0,1,0,24.41,20,4.41,4.41,0,0,0,20,15.59Zm12,0A4.41,4.41,0,1,0,36.39,20,4.41,4.41,0,0,0,32,15.59Z',
    ],
  },
  // 4: SDGs
  taxonomy_4: {
    size: 40,
    paths: [
      'M17.77,29.59q-.64,3.39-1.28,6.78c0,.08,0,.15-.06.26a16.79,16.79,0,0,1-4.85-1.85l3.89-6.29.16.07c.66.25,1.31.51,2,.75C17.76,29.37,17.8,29.43,17.77,29.59Z',
      'M10.41,22.12c.12,0,.19,0,.17-.21-.1-.77-.17-1.53-.26-2.34L3,18.92a16.9,16.9,0,0,0,.47,5.19l4.07-1.17Z',
      'M10.84,23.17h-.07L4,25.12c-.18.05-.17.14-.12.28A17.36,17.36,0,0,0,6,29.59l.17.22L12,25.4Z',
      'M19.52,10.37V3a16.92,16.92,0,0,0-5.09.93l2.66,6.87Z',
      'M21.42,29.85c-.06-.32-.09-.31-.41-.28s-.9.05-1.35.06c-.25,0-.5,0-.77-.05l-1.36,7.25a17.47,17.47,0,0,0,5.19,0L22.58,36Z',
      'M3.34,17.82,5.11,18l2.41.22,1.91.18,1.05.08.06-.19c.18-.63.35-1.26.56-1.88.07-.22,0-.3-.16-.39L5.39,13.23l-.77-.39-.06.08a17.41,17.41,0,0,0-1.39,4.69C3.15,17.75,3.18,17.81,3.34,17.82Z',
      'M22.45,29.35l1.36,7.24a16.64,16.64,0,0,0,4.79-1.91l-3.87-6.26Z',
      'M27.54,25.79c-.25-.2-.26-.18-.49.05s-.65.62-1,.92c-.19.16-.4.3-.62.46l3.64,6.42A17.47,17.47,0,0,0,33,30.24l-.61-.49Z',
      'M28,24.75l5.72,4.65a16.64,16.64,0,0,0,2.42-4.56l-7-2.28Z',
      'M29.55,18.58l7.3-.69A15.15,15.15,0,0,0,35.44,13l-6.56,3.27Z',
      'M27,13.49a2.6,2.6,0,0,1,.31.36l1,1.39L35,12a17.06,17.06,0,0,0-3.07-4.09L31.81,8,27,13.16C26.91,13.29,26.92,13.38,27,13.49Z',
      'M24.37,11.32a2.6,2.6,0,0,1,.43.21l1.48.9L31.1,6.88a17.06,17.06,0,0,0-4.4-2.6l-.05.11Q25.44,7.71,24.23,11C24.17,11.19,24.21,11.27,24.37,11.32Z',
      'M11.75,15c.16.07.24,0,.31-.12a2.6,2.6,0,0,1,.24-.41l1-1.41L8.15,7.87a17.06,17.06,0,0,0-2.93,4.19l.1.06Z',
      'M14.43,27.79a2.61,2.61,0,0,1-.37-.3l-1.24-1.2L6.87,30.6a17.06,17.06,0,0,0,3.71,3.52l.07-.09,3.84-5.92C14.6,28,14.57,27.88,14.43,27.79Z',
      'M20.82,10.45c.24,0,.49,0,.73.09.48.1,1,.21,1.44.32L25.64,4a16.93,16.93,0,0,0-5-1,.63.63,0,0,0,0,.11q0,3.57,0,7.13C20.62,10.41,20.7,10.43,20.82,10.45Z',
      'M16.08,11.18,13.42,4.32A16.9,16.9,0,0,0,9.06,7l5,5.44Z',
      'M36.55,19h-.14l-3.26.3-3.33.31c-.17,0-.22.06-.23.24,0,.65-.09,1.29-.17,1.93,0,.19,0,.24.19.29l5.31,1.52,1.57.45,0-.12,0-.14a17.41,17.41,0,0,0,.43-4.4C37,18.88,36.93,19,36.55,19Z',
    ],
  },
  // 3: Country
  taxonomy_3: {
    size: 40,
    paths: [
      'M29.78,26.63l-.62.62-1.81-1.81a13.11,13.11,0,1,0-1.6,1.69l1.76,1.76-.62.62,6.23,6.23L36,32.87ZM17,25.07a2,2,0,1,1,2-1.95A2,2,0,0,1,17,25.07ZM18.45,20l-2.8,0-.5-10.33,3.92,0Z',
    ],
  },
  // 5: Issues
  taxonomy_5: {
    size: 40,
    paths: [
      'M19.49,4.38a5.4,5.4,0,0,1,2.87,4.49c0,2.35-3.79,9.36-2.32,11.18l9.4-11.72s2.34,2.84.93,5.25-5.05,5.43-6.5,7.61c-.89,1.35-.46,2.07-.46,2.07L34.81,17a4.59,4.59,0,0,1-1.25,4.67c-2.29,2.06-7.68,2.88-7.68,5H33.7s-.8,2.37-2.31,2.71c-1.33.29-4.19-.48-5.53.73s-3,5.49-7.78,5.49c-3.21,0-5.69-2.31-7.23-5.35C9.06,26.77,7.06,25.08,5,24.65A4.57,4.57,0,0,1,9.08,22c4.07,0,5.8,6.66,8.87,6.66a1.67,1.67,0,0,0,1.82-1.76c0-1.41-2-2.59-2.61-3A4.16,4.16,0,0,1,15.43,19l4.05-14.6',
    ],
  },
  // 6: Population Groups
  taxonomy_6: {
    size: 40,
    paths: [
      'M6.79,8A2.19,2.19,0,1,1,9,10.22,2.19,2.19,0,0,1,6.79,8Z',
      'M17.82,10.22A2.19,2.19,0,1,0,15.63,8,2.19,2.19,0,0,0,17.82,10.22Z',
      'M26.66,10.22A2.19,2.19,0,1,0,24.48,8,2.19,2.19,0,0,0,26.66,10.22Z',
      'M17.31,23.59l-.51-7.41a1.67,1.67,0,0,0-1.67-1.5H11.54a1.67,1.67,0,0,0-1.67,1.5l-.51,7.41a1,1,0,0,0,1,1.1h.69l.58,8.39a1.14,1.14,0,0,0,1.14,1.07h1.09A1.14,1.14,0,0,0,15,33.08l.58-8.39h.69A1,1,0,0,0,17.31,23.59Z',
      'M28.07,25.3a1.57,1.57,0,0,1-1.46-.94,1.61,1.61,0,0,1-.26.41,1.62,1.62,0,0,1-1.2.53H25l-.17,2.48L25,29.53a1.14,1.14,0,0,0,1.14,1.07h1.09a1.14,1.14,0,0,0,1.14-1.07l.07-.94-.23-3.29Z',
      'M13.34,13.78a2.19,2.19,0,1,0-2.19-2.19A2.19,2.19,0,0,0,13.34,13.78Z',
      'M19.22,25.3a1.57,1.57,0,0,1-1.46-.94,1.61,1.61,0,0,1-.26.41,1.62,1.62,0,0,1-1.2.53h-.12L16,27.78l.12,1.75a1.14,1.14,0,0,0,1.14,1.07h1.09a1.14,1.14,0,0,0,1.14-1.07l.07-.94-.23-3.29Z',
      'M23.46,14.06H24a2.28,2.28,0,0,1,2.27,2.07l.35,5.18.36-5.2a2.28,2.28,0,0,1,2.27-2.05h.51a2.71,2.71,0,0,1-1.47-2.94H24.93a2.71,2.71,0,0,1-1.47,2.94Z',
      'M14.62,14.06h.51a2.28,2.28,0,0,1,2.27,2.07l.35,5.18.36-5.2a2.28,2.28,0,0,1,2.27-2.05h.51a2.71,2.71,0,0,1-1.47-2.94H16.09a2.71,2.71,0,0,1-1.47,2.94Z',
      'M10.38,25.3a1.62,1.62,0,0,1-1.61-1.75l.51-7.43a2.28,2.28,0,0,1,2.27-2.05h.51a2.72,2.72,0,0,1-1.47-2.94H7.18a1.67,1.67,0,0,0-1.67,1.5L5,20a1,1,0,0,0,1,1.1H6.7l.58,8.39a1.14,1.14,0,0,0,1.14,1.07H9.52a1.14,1.14,0,0,0,1.14-1.07l.07-.94L10.5,25.3Z',
      'M22.18,13.78A2.19,2.19,0,1,0,20,11.59,2.19,2.19,0,0,0,22.18,13.78Z',
      'M34.49,16.18a1.67,1.67,0,0,0-1.67-1.5H29.23a1.67,1.67,0,0,0-1.67,1.5l-.51,7.41a1,1,0,0,0,1,1.1h.69l.58,8.39a1.14,1.14,0,0,0,1.14,1.07h1.09a1.14,1.14,0,0,0,1.14-1.07l.58-8.39H34a1,1,0,0,0,1-1.1Z',
      'M26.15,23.59l-.51-7.41A1.67,1.67,0,0,0,24,14.67H20.39a1.67,1.67,0,0,0-1.67,1.5l-.51,7.41a1,1,0,0,0,1,1.1h.69l.58,8.39a1.14,1.14,0,0,0,1.14,1.07h1.09a1.14,1.14,0,0,0,1.14-1.07l.58-8.39h.69A1,1,0,0,0,26.15,23.59Z',
      'M31,13.78a2.19,2.19,0,1,0-2.19-2.19A2.19,2.19,0,0,0,31,13.78Z',
    ],
  },
  // 7: SMART
  taxonomy_7: {
    size: 40,
    paths: [
      'M29.78,26.63l-.62.62-1.81-1.81a13.11,13.11,0,1,0-1.6,1.69l1.76,1.76-.62.62,6.23,6.23L36,32.87ZM17,25.07a2,2,0,1,1,2-1.95A2,2,0,0,1,17,25.07ZM18.45,20l-2.8,0-.5-10.33,3.92,0Z',
    ],
  },
  // 8: Organisation
  taxonomy_8: {
    size: 40,
    paths: [
      'M16.78,13.4,13.61,7.92l3.16-5.48H23.1l3.16,5.48L23.1,13.4Zm10.73,5.85h6.33L37,13.78,33.84,8.3H27.51l-3.16,5.48Zm0,1.28L24.35,26l3.16,5.48h6.33L37,26l-3.16-5.48ZM16.9,26.6l-3.16,5.48,3.16,5.48h6.33l3.16-5.48L23.22,26.6Zm-4.41-5.85H6.16L3,26.22,6.16,31.7h6.33l3.16-5.48Zm0-1.28L15.65,14,12.49,8.51H6.16L3,14l3.16,5.48Z',
    ],
  },

  // Icons
  measures: {
    size: 24,
    paths: [
      'M12,4.33A7.67,7.67,0,1,0,19.67,12,7.68,7.68,0,0,0,12,4.33ZM12,18a6,6,0,1,1,6-6A6,6,0,0,1,12,18Z',
      'M12,8.59A3.41,3.41,0,1,0,15.41,12,3.41,3.41,0,0,0,12,8.59Zm0,5.11A1.7,1.7,0,1,1,13.7,12,1.71,1.71,0,0,1,12,13.7Z',
    ],
  },
  indicators: {
    size: 24,
    paths: [
      'M6,4.5H8.77v15H6Z',
      'M10.61,11.67h2.77V19.5H10.61Z',
      'M18,9.72V19.5H15.23V9.72Z',
    ],
  },
  recommendations: {
    size: 24,
    paths: [
      'M18.8,4.5H5.2A1.7,1.7,0,0,0,3.5,6.2V16.4a1.7,1.7,0,0,0,1.7,1.7H6.9v3.4l4.53-3.4H18.8a1.7,1.7,0,0,0,1.7-1.7V6.2A1.7,1.7,0,0,0,18.8,4.5Zm0,11.9H10.87L8.6,18.1V16.4H5.2V6.2H18.8Z',
      'M11.4,12.92l-.17-5h1.52l-.17,5Z',
      'M11.42,15a.72.72,0,0,1-.22-.54.73.73,0,0,1,.22-.54A.79.79,0,0,1,12,13.7a.8.8,0,0,1,.58.21.78.78,0,0,1,0,1.08.89.89,0,0,1-1.16,0Z',
    ],
  },
  categories: {
    size: 24,
    paths: [
      'M17.27,5.51l-5.06.56a1.24,1.24,0,0,0-.74.36L4.86,13a1.24,1.24,0,0,0,0,1.76l5.35,5.35a1.24,1.24,0,0,0,1.76,0l6.6-6.6a1.24,1.24,0,0,0,.36-.74l.56-5.06A2,2,0,0,0,17.27,5.51ZM17,9.88A1.36,1.36,0,1,1,17,8,1.36,1.36,0,0,1,17,9.88Z',
    ],
  },
  connectedCategories: {
    size: 24,
    paths: [
      'M17.49,6.5a1,1,0,0,1,.75.34,1,1,0,0,1,.25.79l-.56,5.06a.24.24,0,0,1-.07.14l-6.6,6.6a.24.24,0,0,1-.34,0L5.57,14.08a.24.24,0,0,1,0-.34l6.6-6.6a.24.24,0,0,1,.14-.07l5.06-.56h.12m0-1h-.23l-5.06.56a1.24,1.24,0,0,0-.74.36L4.86,13a1.24,1.24,0,0,0,0,1.76l5.35,5.35a1.24,1.24,0,0,0,1.76,0l6.6-6.6a1.24,1.24,0,0,0,.36-.74l.56-5.06a2,2,0,0,0-2-2.23Z',
      'M17,9.88A1.36,1.36,0,1,1,17,8,1.36,1.36,0,0,1,17,9.88Z',
    ],
  },
  sdgtargets: {
    size: 24,
    paths: [
      'M6.92,13.12c.06,0,.1,0,.09-.11-.05-.41-.09-.81-.14-1.24L3,11.43a9,9,0,0,0,.25,2.75l2.15-.62Z',
      'M7.15,13.68h0l-3.58,1c-.1,0-.09.07-.06.15a9.19,9.19,0,0,0,1.11,2.22l.09.12,3.08-2.34Z',
      'M3.18,10.85l.94.08L5.39,11l1,.09.56,0,0-.1c.1-.33.18-.67.29-1,0-.11,0-.16-.08-.21L4.27,8.42l-.41-.2,0,0a9.22,9.22,0,0,0-.74,2.48C3.08,10.81,3.1,10.84,3.18,10.85Z',
      'M7.63,9.38c.09,0,.13,0,.16-.06a1.38,1.38,0,0,1,.13-.22l.53-.75L5.73,5.58A9,9,0,0,0,4.18,7.8l.05,0Z',
      'M9.05,16.12a1.38,1.38,0,0,1-.2-.16l-.66-.64L5.05,17.61a9,9,0,0,0,2,1.86l0,0,2-3.14C9.14,16.21,9.13,16.17,9.05,16.12Z',
      'M10.73,16.93l-1-.39-.09,0L7.54,19.83a8.89,8.89,0,0,0,2.57,1l0-.14.68-3.59C10.84,17,10.81,17,10.73,16.93Z',
      'M12.75,17.21c0-.17,0-.16-.22-.15s-.48,0-.71,0-.26,0-.41,0l-.72,3.84a9.25,9.25,0,0,0,2.75,0l-.08-.41Z',
      'M13.29,16.95,14,20.78a8.81,8.81,0,0,0,2.54-1l-2-3.32Z',
      'M16,15.06c-.13-.11-.14-.09-.26,0s-.34.33-.52.49-.21.16-.33.24l1.93,3.4a9.25,9.25,0,0,0,2.08-1.8l-.32-.26Z',
      'M16.24,14.51l3,2.46a8.81,8.81,0,0,0,1.28-2.41l-3.71-1.21Z',
      'M17.05,11.25l3.87-.37a8,8,0,0,0-.75-2.62L16.7,10Z',
      'M15.73,8.55a1.38,1.38,0,0,1,.17.19l.54.74,3.48-1.73A9,9,0,0,0,18.3,5.58l0,0L15.72,8.38C15.66,8.45,15.67,8.49,15.73,8.55Z',
      'M14.31,7.41l.23.11.78.47,2.55-2.94a9,9,0,0,0-2.33-1.38l0,.06L14.24,7.25C14.21,7.34,14.23,7.38,14.31,7.41Z',
      'M12.43,6.94l.39,0,.76.17L15,3.51A9,9,0,0,0,12.34,3a.34.34,0,0,0,0,.06q0,1.89,0,3.78C12.33,6.92,12.37,6.94,12.43,6.94Z',
      'M9.92,7.33,8.52,3.7A9,9,0,0,0,6.21,5.12L8.83,8Z',
      'M20.76,11.48h-.08L19,11.65l-1.76.17c-.09,0-.12,0-.12.12,0,.34,0,.68-.09,1,0,.1,0,.13.1.15l2.81.81.83.24,0-.06,0-.07A9.22,9.22,0,0,0,21,11.69C21,11.4,21,11.45,20.76,11.48Z',
    ],
  },
  calendar: {
    size: 24,
    paths: [
      'M21,6.74V18.88a1.63,1.63,0,0,1-1.64,1.62H4.64A1.63,1.63,0,0,1,3,18.88V6.74A1.63,1.63,0,0,1,4.64,5.12H6.27V6.74H4.64V18.88H19.36V6.74H16.91V8.36H15.27V3.5h1.64V5.12h2.45A1.63,1.63,0,0,1,21,6.74Z',
      'M8.73,8.36H7.09V3.5H8.73V5.12h5.73V6.74H8.73Z',
      'M9.55,13.21H6.27V10H9.55Z',
      'M13.64,13.21H10.36V10h3.27Z',
      'M14.45,10h3.27v3.24H14.45Z',
      'M6.26,14l3.27,0,0,3.24-3.27,0Z',
      'M10.36,14h3.27v3.24H10.36Z',
    ],
  },
  reminder: {
    size: 24,
    paths: [
      'M19.2,12a7.22,7.22,0,1,1-2.11-5.09L14.7,9.3h5.4V3.9L18.36,5.65A9,9,0,1,0,21,12Z',
      'M17.26,12.27,11,14.37l-.76-.4V7.37H12v4.76l4.64-1.56Z',
    ],
  },
  report: {
    size: 24,
    paths: [
      'M15,3H6.75A1.78,1.78,0,0,0,5,4.8V19.2A1.78,1.78,0,0,0,6.75,21h10.5A1.78,1.78,0,0,0,19,19.2V7.13Zm2.26,16.2H6.75V4.8H8.5v8.1l1.75-1.8L12,12.9V4.8h1.75V8.4h3.5Z',
    ],
  },
  recAccepted: {
    size: 24,
    paths: [
      'M18.4,5H5.6A1.6,1.6,0,0,0,4,6.6v9.6a1.6,1.6,0,0,0,1.6,1.6H7.2V21l4.27-3.2H18.4A1.6,1.6,0,0,0,20,16.2V6.6A1.6,1.6,0,0,0,18.4,5ZM11.5,15.16,8.42,12.3,9.67,11l1.68,1.57,4.14-4.73L16.88,9Z',
    ],
  },
  recNotAccepted: {
    size: 24,
    paths: [
      'M18.4,5H5.6A1.6,1.6,0,0,0,4,6.6v9.6a1.6,1.6,0,0,0,1.6,1.6H7.2V21l4.27-3.2H18.4A1.6,1.6,0,0,0,20,16.2V6.6A1.6,1.6,0,0,0,18.4,5Zm-3.09,8.27L14.6,14l-2.13-2.13L10.35,14l-.71-.71,2.13-2.13L9.65,9l.71-.71,2.13,2.13L14.6,8.31l.71.71-2.13,2.13Z',
    ],
  },
  attributes: {
    size: 24,
    paths: [
      'M12,4a8,8,0,1,0,8,8A8,8,0,0,0,12,4Zm4.9,8v.81H12.81V16.9H11.19V12.81H7.1V11.19h4.09V7.1h1.62v4.09H16.9Z',
    ],
  },
  connections: {
    size: 24,
    paths: [
      'M9.3,6.9V4.5A1.5,1.5,0,0,1,10.8,3h2.4a1.5,1.5,0,0,1,1.5,1.5V6.9a1.5,1.5,0,0,1-1.5,1.5H10.8A1.5,1.5,0,0,1,9.3,6.9Z',
      'M8.4,17.1v2.4A1.5,1.5,0,0,1,6.9,21H4.5A1.5,1.5,0,0,1,3,19.5V17.1a1.5,1.5,0,0,1,1.5-1.5H6.9A1.5,1.5,0,0,1,8.4,17.1Z',
      'M21,17.1v2.4A1.5,1.5,0,0,1,19.5,21H17.1a1.5,1.5,0,0,1-1.5-1.5V17.1a1.5,1.5,0,0,1,1.5-1.5h2.4A1.5,1.5,0,0,1,21,17.1Z',
      'M8.31,15.1,6.69,14.3l2.7-5.4L11,9.7Z',
      'M14.61,8.9l2.7,5.4-1.61.81L13,9.7Z',
      'M10.2,17.4h3.6v1.8H10.2Z',
    ],
  },
  search: {
    size: 24,
    paths: [
      'M20.89,20.38l-4.27-4.92a8.09,8.09,0,0,0,1.8-6.78h0a7.79,7.79,0,0,0-6.08-6.22A7.58,7.58,0,0,0,5.46,4.54a8.08,8.08,0,0,0-2.21,7.23A7.79,7.79,0,0,0,9.33,18a7.93,7.93,0,0,0,1.52.15,7.5,7.5,0,0,0,4.29-1.34l4.24,4.89ZM9.71,16a5.77,5.77,0,0,1-4.49-4.62A6.08,6.08,0,0,1,6.87,6a5.59,5.59,0,0,1,4-1.65A5.92,5.92,0,0,1,12,4.42,5.78,5.78,0,0,1,16.46,9a6.08,6.08,0,0,1-1.65,5.45A5.61,5.61,0,0,1,9.71,16Z',
    ],
  },
  download: {
    size: 24,
    paths: [
      'M20,18.07V20H4V18.07Z',
      'M9,11.67h2L11,4h2l0,7.66h2l-3,5Z',
    ],
  },
  columnExpand: {
    size: 24,
    paths: [
      'M4.37,11.5h6.31v1H4.37V15l-3-3,3-3Zm18.3.5-3-3V11.5H13.32v1h6.31V15Z',
    ],
  },
  columnCollapse: {
    size: 24,
    paths: [
      'M7.65,9l3,3-3,3V12.5H1.33v-1H7.65Zm15,2.54H16.35V9l-3,3,3,3V12.5h6.32Z',
    ],
  },
  // Icons 16px
  dropdownOpen: {
    size: 16,
    paths: [
      'M8,11.34,2.84,6.75l1.33-1.5L8,8.66l3.84-3.41,1.33,1.5Z',
    ],
  },
  dropdownClose: {
    size: 16,
    paths: [
      'M11.84,10.75,8,7.34,4.16,10.75,2.84,9.25,8,4.66l5.16,4.59Z',
    ],
  },
  removeSmall: {
    size: 16,
    paths: [
      'M9.06,8l4,4L12,13l-4-4L4,13,3,12l4-4L3,4,4,3l4,4,4-4L13,4Z',
    ],
  },
  add: {
    size: 16,
    paths: [
      'M14,9.25H9.25V14H6.75V9.25H2V6.75H6.75V2h2.5V6.75H14Z',
    ],
  },
  info: {
    size: 16,
    paths: [
      'M7.1,5.27A.23.23,0,0,1,7,5.08v-.8a.24.24,0,0,1,.1-.2A.39.39,0,0,1,7.34,4H8.65a.41.41,0,0,1,.26.08.24.24,0,0,1,.1.2v.8a.23.23,0,0,1-.11.19.41.41,0,0,1-.25.08H7.34A.39.39,0,0,1,7.1,5.27Zm.06,6.65a.23.23,0,0,1-.1-.19V6.54a.22.22,0,0,1,.1-.19.4.4,0,0,1,.24-.07H8.6a.38.38,0,0,1,.24.08.23.23,0,0,1,.1.19v5.19a.23.23,0,0,1-.1.19A.38.38,0,0,1,8.6,12H7.4A.38.38,0,0,1,7.16,11.92Z',
    ],
  },
  // Icons 32px
  trash: {
    size: 32,
    paths: [
      'M24,7.33V10H8V7.33h5.82V6h4.36V7.33Z',
      'M9.45,11.33V26H22.55V11.33Zm4.36,12H12.36V14h1.45Zm2.91,0H15.27V14h1.45Zm2.91,0H18.18V14h1.45Z',
    ],
  },
  filter: {
    size: 32,
    paths: [
      'M6.28,7.57H8.66a2.1,2.1,0,0,1,3.77,0H24.77v2H12.43a2.1,2.1,0,0,1-3.77,0H6.28Z',
      'M18.61,16.83H6.28v-2H18.62a2.1,2.1,0,0,1,3.77,0h2.38v2H22.39a2.1,2.1,0,0,1-3.77,0Z',
      'M24.77,23.74H16.34a2.1,2.1,0,0,1-3.77,0H6.28v-2h6.29a2.1,2.1,0,0,1,3.77,0h8.42Z',
    ],
  },
  edit: {
    size: 32,
    paths: [
      'M15.38,5.5V6.73H6.74V25.26H25.26V16H26.5V26.5H5.5V5.5Z',
      'M20.34,8.94l3.43,3.43-7.71,7.72-3.43-3.43Z',
      'M26.18,10l-1.71,1.71L21,8.24l1.71-1.71Z',
    ],
  },
  close: {
    size: 32,
    paths: [
      'M17.77,16l9.12,9.12-1.77,1.77L16,17.77,6.88,26.88,5.12,25.12,14.23,16,5.12,6.88,6.88,5.12,16,14.23l9.12-9.12,1.77,1.77Z',
    ],
  },
  removeLarge: {
    size: 32,
    paths: [
      'M17.06,16l8.47,8.47-1.06,1.06L16,17.06,7.53,25.53,6.47,24.47,14.94,16,6.47,7.53,7.53,6.47,16,14.94l8.47-8.47,1.06,1.06Z',
    ],
  },
  arrowDown: {
    size: 32,
    paths: [
      'M16,23.7,2.15,10.92l1.7-1.84L16,20.3,28.15,9.08l1.7,1.84Z',
    ],
  },
  arrowRight: {
    size: 32,
    paths: [
      'M10.92,29.85l-1.84-1.7L20.3,16,9.08,3.85l1.84-1.7L23.7,16Z',
    ],
  },
  arrowLeft: {
    size: 32,
    paths: [
      'M21.08,29.85,8.3,16,21.08,2.15l1.84,1.7L11.7,16,22.92,28.15Z',
    ],
  },
  sorting: {
    size: 24,
    paths: [
      'M9.83,15.46h1.49l-2,3.45-2-3.45H8.83V7.58h1Zm6.83-6.93-2-3.45-2,3.45h1.49v7.88h1V8.54Z',
    ],
  },
  ascending: {
    size: 24,
    paths: [
      'M18.48,14.71l-2,3.45-2-3.45H16V6.83h1v7.88ZM7.54,14H13V13H7.54Zm1.24-3H13V10H8.78Zm1.78-2.67H13v-1H10.56Z',
    ],
  },
  descending: {
    size: 24,
    paths: [
      'M18.65,14.72l-2,3.45-2-3.45h1.49V6.84h1v7.88ZM7.71,8.34h5.45v-1H7.71Zm1.24,3h4.21v-1H8.95ZM10.72,14h2.43V13H10.72Z',
    ],
  },
};

export default icons;
