import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
    }

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      subject: `Portfolio Contact Form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f4f8fb; padding: 0; margin: 0;">
          <table style="max-width: 520px; margin: 40px auto; background: #fff; border-radius: 16px; box-shadow: 0 4px 24px rgba(77,181,255,0.12); overflow: hidden; border-collapse: separate;">
            <tr>
              <td style="background: linear-gradient(90deg, #4DB5FF 0%, #FF3CAC 100%); padding: 32px 24px 24px 24px; text-align: center;">
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nextdotjs.svg" alt="Portfolio Logo" width="48" height="48" style="display:block;margin:auto;margin-bottom:12px;" />
                <h1 style="color: #fff; font-size: 2rem; margin: 0; font-weight: 700; letter-spacing: 1px;">Portfolio Contact Message</h1>
                <p style="color: #fff; margin: 8px 0 0 0; font-size: 1rem;">You received a new message from your portfolio site.</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 32px 24px 24px 24px;">
                <div style="margin-bottom: 18px;">
                  <span style="display:inline-block;min-width:80px;font-weight:600;color:#4DB5FF;">Name:</span>
                  <span style="font-size:1rem;color:#23243a;">${name}</span>
                </div>
                <div style="margin-bottom: 18px;">
                  <span style="display:inline-block;min-width:80px;font-weight:600;color:#4DB5FF;">Email:</span>
                  <span style="font-size:1rem;color:#23243a;">${email}</span>
                </div>
                <div style="margin-bottom: 18px;">
                  <span style="display:inline-block;min-width:80px;font-weight:600;color:#4DB5FF;">Message:</span>
                  <div style="margin-top:8px;background:#f4f8fb;border-radius:8px;padding:16px;color:#23243a;font-size:1rem;line-height:1.6;border:1px solid #e0e0e0;">${message}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="background:#f4f8fb;padding:16px 24px;text-align:center;color:#23243a;font-size:0.95rem;border-radius:0 0 16px 16px;">
                <div style="margin-bottom:8px;">This message was sent from your portfolio contact form.</div>
                <div style="color:#4DB5FF;font-weight:600;">${new Date().toLocaleString()}</div>
              </td>
            </tr>
          </table>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500 });
  }
}
