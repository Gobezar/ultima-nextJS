import { Raleway as StyledRaleway, League_Spartan as Styled_League_Spartan, Montserrat as StyledMontseratt, Open_Sans as StyledOpenSans   } from "next/font/google";

export const raleway = StyledRaleway({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--raleway'
});

export const league_spartan = Styled_League_Spartan({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    variable: '--spartan'
  });

export const montseratt = StyledMontseratt({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--montseratt'
});

export const openSans = StyledOpenSans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--openSans'
});