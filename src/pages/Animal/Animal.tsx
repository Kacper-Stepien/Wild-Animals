import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BiWorld,
  BiLineChart,
  BiGroup,
  BiSolidColorFill,
  BiSolidTimeFive,
} from "react-icons/bi";
import {
  FaTree,
  FaWeightHanging,
  FaHeart,
  FaLeaf,
  FaCat,
} from "react-icons/fa";
import { FaChildren, FaBowlFood } from "react-icons/fa6";
import { RxWidth, RxHeight } from "react-icons/rx";
import { BsSpeedometer } from "react-icons/bs";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { TbMeat } from "react-icons/tb";
import { IoWarning } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";

import Overlay from "../../components/Overlay/Overlay";
import Wrapper from "../../components/Wrapper/Wrapper";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import AnimalDescription from "../../components/AnimalDescription/AnimalDescription";
import AnimalTestimonial from "../../components/AnimalTestimonial/AnimalTestimonial";
import AnimalTrivia from "../../components/AnimalTrivia/AnimalTrivia";

import AnimalModel from "../../models/Animal";

import styles from "./Animal.module.scss";

export default function Animal() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [animal, setAnimal] = useState<AnimalModel>();

  // check previous url
  const previousURL = document.referrer;

  const fetchAnimal = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:8000/api/v1/animals/${id}`
      );
      const data = await response.json();
      if (data.status === "success") {
        setAnimal(data.data.animal);
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimal();
  }, []);

  return (
    <div className={styles.page}>
      <Overlay>
        <Wrapper direction="column" justify="space-between" align="center">
          {!isLoading && animal && (
            <>
              <Gallery
                url="http://localhost:8000/images/animals"
                images={animal.photos}
              />
              <h1 className={styles.title}>{animal.name}</h1>
              <AnimalDescription description={animal.description} />
              <div className={styles.info}>
                <AnimalTestimonial
                  name="Charakterystyka"
                  infos={[
                    {
                      icon: VscTypeHierarchySub,
                      title: "Gatunek",
                      description: animal.species,
                    },
                    {
                      icon: BiLineChart,
                      title: "Populacja",
                      description: animal.population,
                    },
                    {
                      icon: BiGroup,
                      title: "Styl życia",
                      description: animal.lifestyle,
                    },
                    {
                      icon: BiSolidColorFill,
                      title: "Kolorystyka",
                      description: animal.color.join(", "),
                    },
                    {
                      icon: FaCat,
                      title: "Rodzaj skóry",
                      description: animal.skin_type,
                    },
                  ]}
                />
                <AnimalTestimonial
                  name="Występowanie"
                  infos={[
                    {
                      icon: BiWorld,
                      title: "Lokalizacja",
                      description: animal.location.join(", "),
                    },
                    {
                      icon: FaTree,
                      title: "Środowisko",
                      description: animal.habitat.join(", "),
                    },
                  ]}
                />
                <AnimalTestimonial
                  name="Odżywianie"
                  infos={[
                    {
                      icon: FaBowlFood,
                      title: "Sposób odżywiania",
                      description: animal.diet,
                    },
                    {
                      icon: animal.diet === "mięsożerne" ? TbMeat : FaLeaf,
                      title: "Główne przysmaki",
                      description: animal.prey.join(", "),
                    },
                    {
                      icon: IoWarning,
                      title: "Zagrożenia",
                      description: animal.predators.join(", "),
                    },
                  ]}
                />
                <AnimalTestimonial
                  name="Liczby"
                  infos={[
                    {
                      icon: RxWidth,
                      title: "Długość",
                      description: `${animal.min_length} - ${animal.max_length} cm`,
                    },
                    {
                      icon: RxHeight,
                      title: "Wysokość",
                      description: `${animal.min_height} - ${animal.max_height} cm`,
                    },
                    {
                      icon: FaWeightHanging,
                      title: "Waga",
                      description: `${animal.min_weight} - ${animal.max_weight} kg`,
                    },
                    {
                      icon: FaHeart,
                      title: "Długość życia",
                      description: `${animal.min_life_span} - ${animal.max_life_span} lat`,
                    },
                    {
                      icon: BsSpeedometer,
                      title: "Maksymalna prędkość",
                      description: `${animal.max_speed} km/h`,
                    },
                  ]}
                />
                <AnimalTestimonial
                  name="Rozmnażanie"
                  infos={[
                    {
                      icon: BiSolidTimeFive,
                      title: "Okres ciąży",
                      description: `${animal.gestation_period}`,
                    },
                    {
                      icon: FaChildren,
                      title: "Średnia liczba miotu",
                      description: `${animal.average_litter_size}`,
                    },
                    {
                      icon: BiSolidTimeFive,
                      title: "Dojrzałość płciowa",
                      description: `${animal.age_of_weaning}`,
                    },
                  ]}
                />
              </div>
              <AnimalTrivia trivia={animal.trivia} />
            </>
          )}
          {isLoading && <LoadingSpinner />}
          <Footer />
        </Wrapper>
        {previousURL.includes("encyclopedia") && (
          <button
            className={styles.backBtn}
            onClick={() => window.history.back()}
          >
            <SlArrowLeft className={styles.backBtnIcon} />
            Wróć
          </button>
        )}
      </Overlay>
    </div>
  );
}
