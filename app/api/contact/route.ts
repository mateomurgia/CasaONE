import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      country,
      destination,
      experience,
      duration,
      date,
      travelWith,
      people,
      special,
      howFound,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nombre y email son obligatorios" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h1 style="font-size: 24px; font-weight: 300; border-bottom: 1px solid #D4C5A9; padding-bottom: 16px;">
          Nueva consulta — Casa Uno
        </h1>

        <h3 style="color: #8B6A2E; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-top: 24px;">
          ¿Quién es?
        </h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>País:</strong> ${country || "—"}</p>

        <h3 style="color: #8B6A2E; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-top: 24px;">
          ¿Qué busca?
        </h3>
        <p><strong>Destinos:</strong> ${Array.isArray(destination) ? destination.join(", ") : destination || "—"}</p>
        <p><strong>Experiencias:</strong> ${Array.isArray(experience) ? experience.join(", ") : experience || "—"}</p>
        <p><strong>Duración:</strong> ${duration || "—"}</p>

        <h3 style="color: #8B6A2E; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-top: 24px;">
          ¿Cuándo y con quién?
        </h3>
        <p><strong>Fecha estimada:</strong> ${date || "—"}</p>
        <p><strong>Viaja:</strong> ${travelWith || "—"}</p>
        <p><strong>Personas:</strong> ${people || "—"}</p>

        <h3 style="color: #8B6A2E; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; margin-top: 24px;">
          Más detalles
        </h3>
        <p><strong>Algo especial:</strong> ${special || "—"}</p>
        <p><strong>Cómo nos conoció:</strong> ${howFound || "—"}</p>

        <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0 16px;" />
        <p style="font-size: 12px; color: #999;">
          Enviado desde casauno.travel
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Casa Uno" <${process.env.SMTP_USER}>`,
      to: "murgiamateo@gmail.com",
      replyTo: email,
      subject: `Nueva consulta Casa Uno — ${name}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
