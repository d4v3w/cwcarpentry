import { FullPageView } from "~/components/full-page-view";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
      <FullPageView photoId={photoId} />
    </div>
  );
}
