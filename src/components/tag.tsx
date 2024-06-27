import { cn } from "@/app/lib/utils";

type TagProps = {
  children: React.ReactNode;
  size?: "sm" | "lg";
  classes?: string;
};

export default function tag(props: TagProps) {
  return (
    <div
      className={cn(
        "text-tag text-center uppercase border border-black rounded px-4 py-2 shadow-[-2px_2px_0_1px_#000000] hover:shadow-none cursor-pointer transition-all hover:translate-x-[-2px] hover:translate-y-[2px] bg-white",
        props.size === "sm" && "text-xs px-2 py-1",
        props.size === "lg" && "text-sm",
        props.classes
      )}
    >
      {props.children}
    </div>
  );
}
