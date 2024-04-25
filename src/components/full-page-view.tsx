import Image from "next/image";
import { getImage } from "~/server/queries";

export async function FullPageView(props: { photoId: string }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow">
        <Image
          src={image.url}
          alt={image.name}
          width={500}
          height={500}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex h-full w-56 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-xl">{image.name}</div>

        <div className="p-2">
          <div>Job Description</div>
          <div>{image.desc}</div>
        </div>

        <div className="p-2">
          <div>Created On:</div>
          <div>{image.date}</div>
        </div>
      </div>
    </div>
  );
}
