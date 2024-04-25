import Image from "next/image";
import Link from "next/link";

import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

export default async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex w-2/3 flex-wrap justify-center gap-4 p-6">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              style={{ objectFit: "contain" }}
              width={192}
              height={192}
              alt={image.name}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
