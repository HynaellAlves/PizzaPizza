// Importando os Componentes
import Shopping_cart from "./Components/Shopping_cart";
import SectionPrimary from "./Components/Sections/Section_primary";
import SectionSencudary from "./Components/Sections/Section_sencudary";
import SectionTerciary from "./Components/Sections/Section_terciary";
import SectionMenu from "./Components/Sections/Section_menu";
import SectionForm from "./Components/Sections/Section_form";
import Header from "./Components/Header";
import Modal from "./Components/Modal";

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { createClient } from "@/prismicio";

export default async function Index() {

  const client = createClient();
  const request = (await (client.getSingle('home_types'))).data

  return (
    <div id="container_home">
      <Header />
      <SectionPrimary data={request} />
      <SectionSencudary data={request} />
      <SectionTerciary data={request} />
      <SectionMenu />
      <SectionForm />
      <Shopping_cart />
      <Modal>
        <>
        </>
      </Modal>
      <ToastContainer />
    </div>
  );
}