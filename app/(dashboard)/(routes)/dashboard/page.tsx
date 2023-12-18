"use client";

import { ArrowRight, MessageSquare, Music, ImageIcon, VideoIcon, Code } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";


const tools = [
    {
        label: "Conversation",
        icon: MessageSquare,
        color: "text-pink-500",
        bgColor: "bg-pink-500/20",
        href: "/conversation",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        color: "text-violet-500",
        bgColor: "bg-violet-500/20",
        href: "/image",
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        color: "text-blue-500",
        bgColor: "bg-gray-500/20",
        href: "/video",
    },
    {
        label: "Music Generation",
        icon: Music,
        color: "text-red-500",
        bgColor: "bg-red-500/20",
        href: "/music",
    },
    {
        label: "Code Generation",
        icon: Code,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/20",
        href: "/code",
    },
]

const DashboardPage = () => {
    const router = useRouter();

    return (
        <div>
            <div className="mb-8 space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-center">
                    Explore The Power of AI
                </h2>
                <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                    Chat with our AI, and experience the power of AI!
                </p>
            </div>
            <div className="px-4 md:px-20 lg:px-32 space-y-4">
                {tools.map((tool) => (
                    <Card
                      onClick={() => router.push(tool.href)}
                        key={tool.href}
                        className="p-4 border-black/10 flex items-center
                        justify-between hover:shadow-lg transition
                        cursor-pointer"
                        >
                        <div className="flex items-center gap-x-4">
                            <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                <tool.icon className={cn("w-6 h-6", tool.color)} />
                            </div>
                            <div className="font-semibold">
                                {tool.label}
                            </div>
                        </div>
                      <ArrowRight className="w-5 h-5" />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default DashboardPage;