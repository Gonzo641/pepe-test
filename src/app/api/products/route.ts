import { NextResponse } from "next/server";
import { ProductsCategories } from "@/constants/data";

export const GET = async () => {
  try {
    return NextResponse.json({
      message: "Products fetched successfully",
      success: true,
      ProductsCategories,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Product loading error",
      },
      { status: 500 }
    );
  }
};