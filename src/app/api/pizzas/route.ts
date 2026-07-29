import { NextResponse } from "next/server";
import data from "@/db.json";

export async function GET() {
  try {
    const pizzaList = data.pizzas;

    return NextResponse.json({
      status: 200,
      pizzas: pizzaList,
    });
  } catch (err) {
    return NextResponse.json({
      status: 500,
      message: "Erro Interno de API",
      Error: err,
    });
  }
}
