import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Shopping By Lina",
    slug: "shoppingbylina",
    thumbnail: thumbnailCubeWar,
    description: "E-Commerce Plattform",
  },
  {
    title: "RentCar Tetouan",
    slug: "rentcartetouan",
    thumbnail: thumbnailQuibbo,
    description: "Autovermietungssystem",
  },
  {
    title: "Harmonic Fusion",
    slug: "harmonicfusion",
    thumbnail: thumbnailPokedex,
    description: "Musikalische Kollaborationsplattform",
  },
] as const satisfies ProjectPreview[];
