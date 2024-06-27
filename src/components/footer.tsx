import React from "react";

import Navigation from "./navigation";

export default function Footer() {
  const printCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <div className="bg-gray-100 px-2 lg:px-10 py-12 lg:flex justify-between items-center">
      <div>
        <Navigation>
          <Navigation.Item href="#">Il gruppo</Navigation.Item>
          <Navigation.Item href="#">Note legali</Navigation.Item>
          <Navigation.Item href="#">Chi siamo</Navigation.Item>
          <Navigation.Item href="#">Condizioni di utilizzo</Navigation.Item>
          <Navigation.Item href="#">Privacy</Navigation.Item>
          <Navigation.Item href="#">Servizi</Navigation.Item>
          <Navigation.Item href="#">Pubblicità</Navigation.Item>
        </Navigation>
      </div>
      <div>
        <p>{`© 1994-${printCurrentYear()} Vita Società Editoriale S.p.A.`}</p>
      </div>
    </div>
  );
}
