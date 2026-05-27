import thumbnailShopping from "../../../assets/thumbnails/shoppingbylina.png";
import thumbnailRentCar from "../../../assets/thumbnails/rentcartetouan.png";
import thumbnailHarmonic from "../../../assets/thumbnails/harmonicfusion.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Shopping By Lina",
    slug: "shoppingbylina",
    thumbnail: thumbnailShopping,
    description: "E-Commerce Platform",
  },
  {
    title: "RentCar Tetouan",
    slug: "rentcartetouan",
    thumbnail: thumbnailRentCar,
    description: "Car Rental Booking System",
  },
  {
    title: "Harmonic Fusion",
    slug: "harmonicfusion",
    thumbnail: thumbnailHarmonic,
    description: "Musical Collaboration Platform",
  },
] as const satisfies ProjectPreview[];
