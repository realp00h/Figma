import NextImage from "next/image";
import { cn } from "@/lib/cn";
import character from "@/assets/images/character.png";
import flag from "@/assets/images/flag.png";

type ImageProps = {
  type?: "character" | "flag";
  alt?: string;
  className?: string;
};

/** Image — type=character 대표 일러스트(201) · flag 깃발 아이콘(48) */
export default function Image({ type = "character", alt = "", className }: ImageProps) {
  if (type === "flag") {
    return (
      <NextImage
        src={flag}
        alt={alt}
        className={cn("size-48 shrink-0 rounded-scaled-media object-cover", className)}
      />
    );
  }
  return (
    <NextImage
      src={character}
      alt={alt}
      className={cn("size-201 shrink-0 object-cover", className)}
    />
  );
}
