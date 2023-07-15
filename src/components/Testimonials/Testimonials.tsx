import Testimonial from "../Testimonial/Testimonial";

import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      {" "}
      <Testimonial
        title="Opis projektu"
        description="Wild Animals to aplikacja stworzona z myślą o edukacji i świadomości dotyczącej dzikich zwierząt. 
          Naszym celem jest dostarczenie użytkownikom fascynujących informacji o różnych gatunkach zwierząt oraz promowanie ich ochrony. 
          Dzięki naszej aplikacji użytkownicy mogą przeglądać, filtrować, sortować i wyszukiwać zwierzęta, a także zapoznać się z ich szczegółowymi danymi."
        num={1}
      />
      <Testimonial
        title="Misja i wartości"
        description="Jesteśmy zmotywowani misją zwiększenia świadomości i ochrony dzikich zwierząt. Pragniemy inspirować użytkowników do odkrywania piękna przyrody oraz rozumienia potrzeby zachowania różnorodności biologicznej. Wierzymy, że edukacja i informacja są kluczowe dla budowania poszanowania dla dzikiego świata."
        num={2}
      />
      <Testimonial
        title="Przyszły Rozwój"
        description="W miarę rozwoju aplikacji, naszym celem jest rozszerzenie bazy danych o jeszcze więcej fascynujących gatunków dzikich zwierząt. Będziemy systematycznie dodawać informacje i dane o nowych gatunkach, aby zapewnić użytkownikom pełne i zróżnicowane doświadczenie edukacyjne. Chcemy, aby Wild Animals był kompletną encyklopedią dzikich zwierząt, dającą użytkownikom możliwość poznania różnorodności fauny naszej planety."
        num={3}
      />
    </div>
  );
}
