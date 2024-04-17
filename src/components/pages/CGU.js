import React, { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

export const CGU = () => {
  //scroll en haut de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="appContainer cguContainer flex flexc jcc">
      <ScrollToTopButton />
      <h1>Conditions Générales d'Utilisation</h1>
      <p className="paragraph">
        Jujubes chocolate cake brownie dessert toffee caramels bear claw oat
        cake caramels. Ice cream donut bear claw caramels caramels. Jelly bear
        claw marshmallow candy dessert jelly-o shortbread. Icing chocolate cake
        cotton candy brownie danish fruitcake. Tart brownie jujubes brownie
        danish.
        <span className="color"> Biscuit jelly halvah sweet soufflé pie.</span>
        Croissant sweet roll biscuit chocolate cake marzipan. Biscuit apple pie
        gingerbread apple pie liquorice tart sugar plum cupcake gingerbread.
        Danish apple pie cake cake gummies cake pastry. Candy sugar plum
        croissant cupcake cookie danish ice cream gingerbread muffin. Brownie
        ice cream shortbread candy chocolate gummies cookie. Tart chocolate bar
        gummi bears bonbon donut dragée dessert.
      </p>
    </div>
  );
};
