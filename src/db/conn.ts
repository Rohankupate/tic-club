import mongoose from "mongoose";

// Database Connection

export default async function conn() {
  try {
    // Create .env.local file at root level
    // Insert DB_URI=< Your DB URI >
    // If any errors contact manager at discord

    await mongoose.connect(process.env.DB_URI!);

    const conn = mongoose.connection;

    conn.on("connected", () => {
      console.log("Database Connected");
    });

    conn.on("error", (err) => {
      console.log("Database Connection have some errors ", err);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
}
