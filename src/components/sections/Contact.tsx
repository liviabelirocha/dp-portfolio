import { useState } from "react";
import emailjs from "emailjs-com";
import { Oval } from "react-loading-icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Container, Form, SubmitButton } from "../../styles/components/Contact";

import Title from "../Title";
import Input from "../Input";

import useTranslation from "../../hooks/useTranslation";

import { SectionInterface } from "../../interfaces/Section";

export default function Contact({ id }: SectionInterface) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userId: string = process.env.EMAIL_JS_USER_ID as string;
    const templateId: string = process.env.EMAIL_JS_TEMPLATE_ID as string;
    const serviceId: string = process.env.EMAIL_JS_SERVICE_ID as string;

    setLoading(true);

    emailjs
      .sendForm(serviceId, templateId, e.currentTarget, userId)
      .then(
        (result) => {
          toast(t("emailSuccess"));
        },
        (error) => {
          toast(t("emailError"));
        }
      )
      .finally(() => {
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
      });
  };

  const { t } = useTranslation();

  return (
    <Container id={id}>
      <img src="illustration3.png" />

      <Form onSubmit={onSubmit} autoComplete="off">
        <Title
          main={t("contactTitle1")}
          sub={t("contactTitle2")}
          defaultStyle={false}
          className="title"
        />

        <Input
          label={t("nameForm")}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          name="name"
        />
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          name="email"
        />
        <Input
          label={t("msgForm")}
          value={msg}
          onChange={(e) => setMessage(e.target.value)}
          required
          name="message"
        />

        <SubmitButton type="submit" disabled={loading} $loading={loading}>
          {loading ? <Oval /> : t("sendButton")}
        </SubmitButton>
      </Form>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
