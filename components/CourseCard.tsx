import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
      <Card className="h-full border border-transparent transition hover:border-blue-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-500">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-3">
          <p className="leading-6 text-muted-foreground dark:text-slate-300">
            {description}
          </p>
          <div className="mt-auto flex items-center justify-between gap-3">
            <Badge variant="secondary">{credits} credits</Badge>
            <Button
              variant="secondary"
              size="lg"
              type="button"
              className="dark:hover:bg-slate-800 dark:hover:text-white"
            >
              ♥ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
