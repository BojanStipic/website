export type Project = {
  title: string;
  url: string;
  visibility: "public" | "private";
  description: string;
  tags: Array<string>;
  language: string;
  license: string;
};

export const projects: Array<Project> = [
  {
    title: "website",
    url: "https://github.com/BojanStipic/website",
    visibility: "public",
    description: "Bojan Stipic's Website",
    tags: ["website", "astro-site"],
    language: "TypeScript",
    license: "GNU Affero General Public License v3.0",
  },

  {
    title: "dotfiles",
    url: "https://github.com/BojanStipic/dotfiles",
    visibility: "public",
    description: "My personal dotfiles for GNU operating system",
    tags: ["dotfiles"],
    language: "Config files",
    license: "GNU General Public License v3.0",
  },

  {
    title: "arch-install",
    url: "https://github.com/BojanStipic/arch-install",
    visibility: "public",
    description: "Arch Linux installation guide",
    tags: ["archlinux"],
    language: "Asciidoctor",
    license: "GNU General Public License v3.0",
  },

  {
    title: "self-hosted",
    url: "https://github.com/BojanStipic/self-hosted",
    visibility: "public",
    description: "Configs for self-hosted apps on my homelab",
    tags: ["docker", "self-hosting", "homelab"],
    language: "Config files",
    license: "GNU Affero General Public License v3.0",
  },

  {
    title: "react-skeleton",
    url: "https://github.com/BojanStipic/react-skeleton",
    visibility: "public",
    description: "React skeleton to kick-start your new application",
    tags: ["react", "vite", "template", "boilerplate", "skeleton", "starter"],
    language: "TypeScript",
    license: "GNU Affero General Public License v3.0",
  },

  {
    title: "spring-skeleton",
    url: "https://github.com/BojanStipic/spring-skeleton",
    visibility: "public",
    description: "Spring Boot skeleton to kick-start your new application",
    tags: [
      "spring",
      "spring-boot",
      "template",
      "boilerplate",
      "skeleton",
      "starter",
    ],
    language: "Java",
    license: "GNU Affero General Public License v3.0",
  },

  {
    title: "resava",
    url: "https://github.com/BojanStipic/resava",
    visibility: "public",
    description: "Plagiarism detection for source code",
    tags: [
      "plagiarism-detection",
      "plagiarism",
      "string-similarity",
      "code-similarity",
    ],
    language: "Rust",
    license: "GNU General Public License v3.0",
  },

  {
    title: "micko-rs",
    url: "https://github.com/BojanStipic/micko-rs",
    visibility: "public",
    description: "miniC compiler implemented in Rust",
    tags: ["compiler"],
    language: "Rust",
    license: "GNU General Public License v3.0",
  },

  {
    title: "protokol-jezickih-servera",
    url: "https://github.com/BojanStipic/protokol-jezickih-servera",
    visibility: "public",
    description: "Master’s Thesis",
    tags: [
      "language-server-protocol",
      "language-server",
      "asciidoctor",
      "master-thesis",
    ],
    language: "Asciidoctor",
    license: "CC BY-ND 4.0",
  },

  {
    title: "minic-lsp",
    url: "https://github.com/BojanStipic/minic-lsp",
    visibility: "public",
    description:
      "Language server implementation for the miniC programming language",
    tags: ["language-server-protocol", "language-server"],
    language: "C",
    license: "GNU General Public License v3.0",
  },

  {
    title: "minic-lsp-atom",
    url: "https://github.com/BojanStipic/minic-lsp-atom",
    visibility: "public",
    description: "miniC language support for Atom",
    tags: [
      "atom-package",
      "language-server-protocol",
      "language-server-client",
    ],
    language: "JavaScript",
    license: "GNU General Public License v3.0",
  },

  {
    title: "minic-lsp-ale",
    url: "https://github.com/BojanStipic/minic-lsp-ale",
    visibility: "public",
    description: "miniC language support for Vim",
    tags: ["vim-plugin", "language-server-protocol", "language-server-client"],
    language: "Vim script",
    license: "GNU General Public License v3.0",
  },

  {
    title: "eiffel",
    url: "https://github.com/BojanStipic/eiffel",
    visibility: "public",
    description: "Bachelor's thesis",
    tags: ["eiffel", "asciidoctor", "bachelor-thesis"],
    language: "Asciidoctor",
    license: "CC BY-ND 4.0",
  },

  {
    title: "adbackup",
    url: "https://github.com/BojanStipic/adbackup",
    visibility: "public",
    description: "Incremental backups for your Android device",
    tags: ["android-device", "incremental-backups", "mtp", "backup", "gvfs"],
    language: "Bash script",
    license: "GNU General Public License v3.0",
  },
];
