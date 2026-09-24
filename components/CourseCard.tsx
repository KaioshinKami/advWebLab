import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link className="block h-full rounded-xl" href={`/courses/${id}`}>
      <Card className="h-full border border-transparent transition hover:border-blue-300 hover:shadow-md">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-3">
          <p className="leading-6 text-muted-foreground">{description}</p>
          <div className="mt-auto flex items-center justify-between gap-3">
            <span className="text-sm font-medium">{credits} credits</span>
            <Button variant="ghost" size="sm" type="button">
              ♥ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
