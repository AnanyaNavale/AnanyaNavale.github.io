// src/config/projects.ts

export type Project = {
  id: string;
  name: string;
  headline: string; // The 2-sentence tagline
  path: string;
  thumbnail: string; // Path to thumbnail image
  // Optional: add more metadata as needed
  tagline?: string;
  color?: string; // For potential glass tinting
};

export const PROJECTS: Project[] = [
  {
    id: "theo",
    name: "Theo",
    headline: "Most productivity tools assume focus comes easy.\nThis one doesn’t.",
    path: "/theo",
    thumbnail: "/src/assets/images/theo/thumbnail.jpg",
  },
  {
    id: "lunacart",
    name: "LunaCart",
    headline: "Healthy food disappeared after dinner.\nThis app brought it back at midnight.",
    path: "/lunacart",
    thumbnail: "/src/assets/images/lunacart/thumbnail.jpg",
  },
  {
    id: "boogie",
    name: "Boogie",
    headline:
      "An accessible ride service that left people behind.\nA redesign that met them where they were.",
    path: "/boogie",
    thumbnail: "/src/assets/images/boogie/thumbnail.jpg",
  },
];