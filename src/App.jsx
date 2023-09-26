import { useState } from "react";

import { mdiBriefcase, mdiSchool } from "@mdi/js";

import PersonalDetails from "./components/PersonalDetails";
import Section from "./components/Section";
import List from "./components/List";
import useRepository from "./hooks/useRepository";
import Menu from "./components/Menu";
import Tab from "./components/Tab";
import Customize from "./components/Customize";

import styles from "./styles/App.module.css";
import Preview from "./components/Preview";

const experienceFields = [
  { name: "id", unique: true },
  { name: "company" },
  { name: "title" },
  { name: "startDate" },
  { name: "endDate" },
  { name: "location" },
  { name: "description", type: "textarea" },
];

const educationFields = [
  { name: "id", unique: true },
  { name: "schoolName", label: "School" },
  { name: "degree" },
  { name: "startDate" },
  { name: "endDate" },
  { name: "location" },
];

const personInit = {
  name: "Geralt of Rivia",
  email: "monsterhunter@mail.com",
  phone: "999 999 99 99",
  address: "Kaer Morhen",
};

const educationListInit = [
  {
    id: Math.random().toString(),
    schoolName: "Rivia Streets",
    degree: "Expert in Survival",
    startDate: "01/1200",
    endDate: "01/1250",
    location: "Rivia",
  },
  {
    id: Math.random().toString(),
    schoolName: "School of the Wolf",
    degree: "Witcher",
    startDate: "01/1250",
    endDate: "01/1260",
    location: "Kaer Morhen",
  },
];

const experienceListInit = [
  {
    id: Math.random().toString(),
    company: "Temeria Kingdom",
    title: "King Foltest's Bodyguard",
    startDate: "01/1271",
    endDate: "01/1272",
    location: "Temeria",
    description: "Personal bodyguard for King Foltest of Temeria.",
  },
  {
    id: Math.random().toString(),
    company: "Freelance",
    title: "Father",
    startDate: "01/1272",
    endDate: "01/1273",
    location: "Velen, Novigrad, Skellige, Tir na Lia, Isle of Mists",
    description: "Fought Wild Hunt, tracked monster contracts, played Gwent in the pursuit of finding my missing daughter Ciri.",
  },
];

function App() {
  const [person, setPerson] = useState(personInit);
  const [educationList, educationSubmitHandler, educationDeleteHandler] = useRepository("id", educationListInit);
  const [experienceList, experienceSubmitHandler, experienceDeleteHandler] = useRepository("id", experienceListInit);
  const [activeTab, setActiveTab] = useState();
  const [personBg, setPersonBg] = useState("#ff3838");
  const [personFg, setPersonFg] = useState("#ffffff");
  const [pos, setPos] = useState("top");

  const personSubmitHandler = (data) => {
    setPerson(data);
  };

  return (
    <div className={styles.main}>
      <Menu onActiveChanged={setActiveTab} />
      <div className={styles.edit}>
        <Tab name="content" active={activeTab}>
          <PersonalDetails person={person} onSubmit={personSubmitHandler}></PersonalDetails>
          <Section icon={{ path: mdiSchool, size: 1.75 }} title="Education" collapsed={true}>
            <List
              buttonText="Education"
              fields={educationFields}
              itemPropertyName="schoolName"
              list={educationList}
              onDelete={educationDeleteHandler}
              onSubmit={educationSubmitHandler}
            />
          </Section>
          <Section icon={{ path: mdiBriefcase, size: 1.75 }} title="Experience" collapsed={true}>
            <List
              buttonText="Experience"
              fields={experienceFields}
              itemPropertyName="company"
              list={experienceList}
              onDelete={experienceDeleteHandler}
              onSubmit={experienceSubmitHandler}
            />
          </Section>
        </Tab>
        <Tab name="customize" active={activeTab}>
          <Customize
            pos={pos}
            setPos={setPos}
            personBg={personBg}
            personFg={personFg}
            setPersonBg={setPersonBg}
            setPersonFg={setPersonFg}
          />
        </Tab>
      </div>
      <Preview bg={personBg} fg={personFg} pos={pos} person={person} educations={educationList} experiences={experienceList} />
    </div>
  );
}

export default App;
