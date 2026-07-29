// Importando os Componentes
import Shopping_cart from "./Components/Shopping_cart";
import SectionPrimary from "./Components/sections/error/Section_primary";
import SectionSencudary from "./Components/sections/Section_secundary";
import SectionTerciary from "./Components/sections/error/Section_terciary";
import SectionMenu from "./Components/sections/error/Section_menu";
import SectionForm from "./Components/sections/error//Section_form";
import Header from "./Components/Header";
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";

// import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

import { createClient } from "@/prismicio";

export default async function Index() {

  const client = createClient();
  const request = (await (client.getSingle('home_types'))).data

  return (
    <div className="container_page">
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
      <Footer />
    </div>
  );
}