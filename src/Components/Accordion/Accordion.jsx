import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Accordion.scss";

const SimpleAccordion = () => {
  return (
    <div
      style={{
        marginBottom: "20px",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      <Accordion
        sx={{
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          aria-controls='panel1a-content'
          id='panel1a-header'
          sx={{
            backgroundColor: "rgb(36, 104, 221)",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "white" }}>Заглянуть</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#eaeaea00",
          }}
        >
          <Typography>
            <div>
              <p>
                Вспомни, когда ты была маленькой и верила в чудеса, потому что
                они окружали тебя повсюду, не было ничего обычного. Но потом ты
                повзрослела и все убедили тебя в том, что чудес не бывает, ну
                таких чудес, настоящих, понимаешь? Но это не так, о я уверяю
                тебя! И в качестве доказательства приглашаю тебя совершить
                увлекательное приключение в один из волшебных миров! Всё, что
                требуется - это просто отпустить контроль и доверится мне. Я
                проведу тебя в новый мир, дам ответы на все твои вопросы и к
                нужному часу верну тебя обратно! Звучит как в одной из сказок,
                правда? Готова поспорить, ты начала прокручивать у себя в голове
                всевозможные сказки :)
              </p>
              <p>
                Что-то я разговорилась, так и все секреты завтрака чуть не
                раскрыла.
              </p>
              <p>
                Твое чудесное приключение свершится совсем скоро, а сейчас я
                расскажу тебе, как к нему подготовиться ;)
              </p>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SimpleAccordion;
