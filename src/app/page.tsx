import TestPage from "@/components/test";
import { prisma } from "@/lib/db";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <TestPage />
    </div>
  );
}
