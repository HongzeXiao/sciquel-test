import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest){
    // fill here in
    const comments = await prisma.comment.findMany({
        take: 50,
        orderBy: {
            createdAt: 'desc'
        }
    });

    return NextResponse.json(comments);

    // return NextResponse.json({ test: "success", }, { status: 200 })
}

export async function POST(req: NextRequest){
    // fill here in

    const { name, email, comment } = await req.json();

    // Create a new comment in the database
    const newComment = await prisma.comment.create({
        data: {
            name,
            email,
            comment
        }
    });

    return NextResponse.json(newComment);
    
    // return NextResponse.json({ test: "success", }, { status: 200 })
}