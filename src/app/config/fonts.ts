import { Raleway as StyledRaleway, League_Spartan as Styled_League_Spartan   } from "next/font/google";

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

