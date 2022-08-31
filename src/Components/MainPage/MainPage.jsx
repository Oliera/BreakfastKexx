/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import ListFoto from "../ListFoto/ListFoto";
import mood from "../../assets/mood/6.jpg";
import rabbit from "../../assets/rabbit.gif";
import cake from "../../assets/cake.png";
import styles from "./MainPage.module.scss";
import {
  accessories,
  clothes,
  princessDress,
  shoes,
  simpleDress,
  surDress,
} from "../../constants/constants";
import SimpleAccordion from "../Accordion/Accordion";

const MainPage = () => {
  const [isCaught, setIsCaught] = useState(false);

  const handleCaughtRabbit = () => {
    setIsCaught(!isCaught);
  };

  return (
    <div className={styles.main}>
      {isCaught && (
        <div className={styles.cake}>
          <img src={cake} alt='cake' width={30} height={30} />
        </div>
      )}
      <div className={styles.head}>
        <div className={styles.head}>
          <p className={styles.mainTitle}>Breakfast at Kexx’s | 2 adventure</p>
          <h1>Завтрак с Кексом</h1>
        </div>
        <div style={{ width: "114%", height: "116px" }}>
          <div
            className={styles.rabbit}
            onClick={handleCaughtRabbit}
            // onTouchEnd={handleCaughtRabbit}
          >
            <img src={rabbit} className={styles.logo} alt='rabbit' />
          </div>
        </div>
        <div>
          <p>Здравствуй, моя дорогая гостья!</p>
          <p>
            Ты держишь в руках wonder ticket - это твоё приглашение на закрытое
            мероприятие “Завтрак с Кексом”, я тебя поздравляю!
          </p>
        </div>
        <div style={{ marginBottom: "45px" }}>
          <p>Давно не была в мире волшебства и чудес? Пора бы заглянуть! </p>
        </div>
        <SimpleAccordion />
        <div className={styles.head} style={{ marginTop: "10px" }}>
          <h2>Мы встретимся с тобой</h2>
          <p style={{ color: "rgb(36, 104, 221)" }}>
            11 сентября | в воскресенье с 9:30 до 13:30
          </p>
          <p>
            Когда запах осени уже окутает город, но лучи солнца всё ещё будут
            согревать и стрелки часов замрут, чтобы ты отправилась в свое самое
            удивительное приключение!{" "}
          </p>
        </div>
        <div className={styles.head} style={{ marginTop: "10px" }}>
          <h2>Какой у нас план ?</h2>
          <ul>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                <span style={{ color: "rgb(36, 104, 221)" }}>
                  Нужно быть готовой к 9:30
                </span>
                , с этого времени у нас начинает работать трансфер
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                За тобой заедет машина, на которой ты отправишься навстречу
                приключениям
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                Когда карета будет подана тебе позвонят
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                Это самый ответственный момент за всё мероприятие - сесть в
                нужную машину, остальное предоставь мне
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                Машину ты не перепутаешь, поверь
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "rgb(36, 104, 221)" }}>
                Обязательно возьми с собой ключик из конверта, без него ты не
                сможешь попасть на завтрак
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                <span style={{ color: "rgb(36, 104, 221)" }}>
                  С 9:30 до 10:30 работает трансфер
                </span>
                , сбор гостей
              </span>
            </li>
            <li>
              <span style={{ color: "black" }}>
                Перед завтраком всех гостей ждёт новое знакомство и небольшое
                испытание. Уверена, вы обязательно справитесь!
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                <span style={{ color: "rgb(36, 104, 221)" }}>В 11:11 </span>
                мы встретимся с тобой, чтобы позавтракать, как в настоящей
                сказке
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                <span style={{ color: "rgb(36, 104, 221)" }}>
                  Трапеза продлится до 13:30
                </span>
              </span>
            </li>
            <li style={{ position: "relative" }}>
              <span style={{ color: "black" }}>
                После завтрака ты вернёшься в свой мир, но уже с волшебством в
                сердце.
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.head}>
          <h2 style={{ margin: "10px 0 20px" }}>Dress-code</h2>
          <p>
            <span style={{ color: "rgb(36, 104, 221)" }}>Платья:</span>
            <br /> нарядные, в цветочек, с рюшами, рукава-фонарики - тот самый
            момент, когда слишком не бывает
          </p>
          <p>
            <span style={{ color: "rgb(36, 104, 221)" }}>Цвета:</span>
            <br /> светлые | яркие | нежные
          </p>
          <div>
            <ListFoto data={princessDress} />
          </div>
          <div style={{ marginTop: "45px" }}>
            <ListFoto data={surDress} />
          </div>
          <div style={{ marginTop: "45px" }}>
            <ListFoto data={simpleDress} />
          </div>
          <p style={{ marginTop: "45px", marginBottom: 0 }}>
            <span style={{ color: "rgb(36, 104, 221)" }}>
              Если не платья, то:
            </span>
            <br />
            юбки или штаны с нарядными рубашками, блузами. Приветствуется
            интересный крой, принты.
          </p>
          <div style={{ marginTop: "45px" }}>
            <ListFoto data={clothes} />
          </div>
          <p style={{ marginTop: "45px", marginBottom: 0 }}>
            <span style={{ color: "rgb(36, 104, 221)" }}>
              Аксессуары для настроения:
            </span>
            <br /> Перчатки белые, высокие, нарядные. Банты в волосах (и не
            только)
          </p>
          <div style={{ marginTop: "45px", marginBottom: 0 }}>
            <ListFoto data={accessories} />
          </div>
          <p id='test' style={{ marginTop: "45px", marginBottom: 0 }}>
            <span style={{ color: "rgb(36, 104, 221)" }}>Обувь:</span>
            <br /> Без каблуков! Только удобная, ну и красивая, конечно
          </p>
          <p style={{ fontSize: "12px", margin: 0 }}>
            (серьезно, на каблуках вообще никак)
          </p>
          <div style={{ marginTop: "45px", marginBottom: 0 }}>
            <ListFoto data={shoes} />
          </div>
          <p style={{ marginTop: "35px" }}>
            <span style={{ color: "rgb(36, 104, 221)" }}>Настроение:</span>
          </p>
          <div
            style={{
              marginTop: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={mood} alt='mood' width='90%' />
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "45px",
          width: "112%",
          height: "40px",
          backgroundColor: "rgb(36, 104, 221)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "white", margin: "0" }}>
          До встречи на “Завтраке с Кексом”
        </p>
      </div>
    </div>
  );
};

export default MainPage;
