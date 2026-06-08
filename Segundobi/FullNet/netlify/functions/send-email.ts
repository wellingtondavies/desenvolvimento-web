import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

//contrato exigido por netlify para funções serverless
interface ContactPayload {
  email: string;
  message: string;
}

//configuração do CORS
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "";

//cabeçalho de resposta para CORS
const corsHeaders = (origin: string) => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN || origin,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
});

//padrão de tipagem dos objetos do netlify functions
const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers["origin"] ?? "";
  // ...logica para disparar o email usando nodemailer

    //resposta para requisições OPTIONS (CORS preflight)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders(origin),
      body: "",
    };
  }

    //resposta para métodos não permitidos
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Método não permitido." }),
    };
  }

  //leitura e validação do body da requisição
    let payload: ContactPayload;//variavel do tipo local para armazenar o body da requisição, que deve ser do tipo ContactPayload

  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Body inválido." }),
    };
  }

  const { email, message } = payload;//desestruturação do objeto payload para obter os campos email e message

  //validação dos campos obrigatórios e do formato do email
  if (!email?.trim() || !message?.trim()) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Campos obrigatórios: email, message." }),
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "E-mail inválido." }),
    };
  }

    //configuração do nodemailer para envio de email usando as variáveis de ambiente
    const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

    //envio do email e tratamento de erros
    try {
    await transporter.sendMail({
      from: `<${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,//destinatário do email, definido na variável de ambiente CONTACT_EMAIL
      subject: "[Full-Net] Nova mensagem de Full-Net",
      text: message,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: JSON.stringify({ message: "E-mail enviado com sucesso." }),
    };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Falha ao enviar o e-mail. Tente novamente mais tarde." }),
    };
  }

};

export { handler };
