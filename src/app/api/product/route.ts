import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike V2K Run",
    price: 1909000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_411,c_limit/0b024371-2a62-4df8-bdb3-5786c1bde198/v2k-run-shoes-zJV8TV.png",
  },
  {
    id: 2,
    title: "Nike Air More Uptempo '96",
    price: 2849000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_411,c_limit/1ed2bc24-c4e2-4f5f-bb21-0b6c8376c4da/air-more-uptempo-96-shoes-vVP1nZ.png",
  },
  {
    id: 3,
    title: "Air Jordan Legacy312 Low",
    price: 2199000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_411,c_limit/e1ffa327-df36-49db-8f6d-2e26228a36ff/air-jordan-legacy-312-low-shoes-6Vd4Xl.png",
  },
  {
    id: 4,
    title: "Air Jordan Legacy312 Low",
    price: 2199000,
    image:
      "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_411,c_limit/e1ffa327-df36-49db-8f6d-2e26228a36ff/air-jordan-legacy-312-low-shoes-6Vd4Xl.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = await retrieveDataById("products", id);
    if (detailProduct)
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    return NextResponse.json({
      status: 404,
      message: "NotFound",
      data: {},
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}
