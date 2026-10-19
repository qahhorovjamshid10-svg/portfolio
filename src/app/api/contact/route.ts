import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const contact = typeof body.contact === "string" ? body.contact.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "Barcha maydonlarni to‘ldiring." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          error:
            "Telegram Bot sozlanmagan (TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID kiritilmagan).",
        },
        { status: 500 }
      );
    }

    const text = [
      "📩 *Portfolio saytidan yangi xabar!*",
      "",
      `👤 *Ism:* ${escapeMarkdown(name)}`,
      `📱 *Aloqa:* ${escapeMarkdown(contact)}`,
      "",
      "💬 *Xabar:*",
      escapeMarkdown(message),
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errData = await telegramResponse.text();
      console.error("Telegram API error:", errData);
      return NextResponse.json(
        { error: "Telegram botga yuborishda xatolik yuz berdi." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Server xatoligi yuz berdi." },
      { status: 500 }
    );
  }
}

function escapeMarkdown(input: string): string {
  return input.replace(/([_*`\[])/g, "\\$1");
}
