import { NextResponse } from "next/server";

const DEFAULT_BOT_TOKEN = "8853812206:AAFHMGZvU4qP_360kkBz51Cjx3D1UjJ8uNY";

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

    const botToken = process.env.TELEGRAM_BOT_TOKEN || DEFAULT_BOT_TOKEN;
    let chatId = process.env.TELEGRAM_CHAT_ID;

    // If TELEGRAM_CHAT_ID is not set, try to discover it from bot getUpdates
    if (!chatId && botToken) {
      try {
        const updatesRes = await fetch(
          `https://api.telegram.org/bot${botToken}/getUpdates`,
          { cache: "no-store" }
        );
        if (updatesRes.ok) {
          const updatesData = await updatesRes.json();
          const updates = Array.isArray(updatesData?.result)
            ? updatesData.result
            : [];
          // Prefer user matching username 'iflxczz' or the first private chat
          for (let i = updates.length - 1; i >= 0; i--) {
            const msg = updates[i]?.message || updates[i]?.my_chat_member;
            const chat = msg?.chat;
            if (chat?.id) {
              if (
                String(chat.username || "").toLowerCase() === "iflxczz" ||
                !chatId
              ) {
                chatId = String(chat.id);
                if (String(chat.username || "").toLowerCase() === "iflxczz") {
                  break;
                }
              }
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch getUpdates:", err);
      }
    }

    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          error:
            "Bot faollashtirilmagan: Telegramda @contactmejq_bot ga kirib /start tugmasini bosing.",
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
