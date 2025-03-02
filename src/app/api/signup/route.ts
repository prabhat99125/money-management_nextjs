import { connect } from "@/dbConfig/db";
import model from "@/model/model";
import next from "next";
import { NextRequest, NextResponse } from "next/server";
connect();
export async function POST(req: NextRequest) {
    try {
        const { username, email, password } = await req.json();
    } catch {
        return NextResponse.json({ massage: 'server error', stetus: 500 })
    }


    return NextResponse.json({ succsee: true });
}