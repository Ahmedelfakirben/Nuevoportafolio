export const social = [
  { url: "mailto:ahmed@elfakir.com", name: "mail" },
  { url: "https://github.com/Ahmedelfakirben", name: "github" },
  { url: "https://www.linkedin.com/in/ahmed-el-fakir/", name: "linkedin" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
